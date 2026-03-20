"use server";

import { inquirySchema, type InquiryFormData } from "@/lib/validation";
import { weddingSchema, type WeddingFormData } from "@/lib/wedding-validation";

interface ActionResult {
  success: boolean;
  errors?: Record<string, string[]>;
  message?: string;
}

const messages = {
  cs: {
    badForm: "Formulář nebyl správně odeslán. Zkuste to znovu.",
    error: "Něco se nepovedlo. Zkuste to znovu nebo napište na brevnov@incatering.cz.",
    inquirySuccess: "Děkujeme za poptávku. Ozveme se do 1 pracovního dne s předběžnou nabídkou.",
    weddingSuccess: "Děkujeme za vaši poptávku. Ozveme se do 1 pracovního dne a domluvíme prohlídku kláštera.",
    confirmSubject: "Potvrzení poptávky — Břevnovský klášter",
    weddingConfirmSubject: "Potvrzení svatební poptávky – Břevnovský klášter",
    confirmBody: (name: string) =>
      `Dobrý den ${name},\n\nděkujeme za Vaši poptávku. Ozveme se do 1 pracovního dne s předběžnou nabídkou.\n\nPro urgentní požadavky volejte +420 602 346 729.\n\nS pozdravem,\nTým IN CATERING\nbrevnov@incatering.cz`,
    weddingConfirmBody: (name: string) =>
      `Dobrý den ${name},\n\nděkujeme za Vaši svatební poptávku. Ozveme se do 1 pracovního dne a domluvíme prohlídku kláštera.\n\nPro urgentní požadavky volejte +420 602 346 729.\n\nS pozdravem,\nTým IN CATERING\nbrevnov@incatering.cz`,
  },
  en: {
    badForm: "The form was not submitted correctly. Please try again.",
    error: "Something went wrong. Please try again or email brevnov@incatering.cz.",
    inquirySuccess: "Thank you for your enquiry. We will get back to you within 1 business day with an initial quote.",
    weddingSuccess: "Thank you for your enquiry. We will get back to you within 1 business day to arrange a venue tour.",
    confirmSubject: "Enquiry Confirmation — Brevnov Monastery",
    weddingConfirmSubject: "Wedding Enquiry Confirmation — Brevnov Monastery",
    confirmBody: (name: string) =>
      `Dear ${name},\n\nThank you for your enquiry. We will get back to you within 1 business day with an initial quote.\n\nFor urgent requests, please call +420 602 346 729.\n\nKind regards,\nIN CATERING Team\nbrevnov@incatering.cz`,
    weddingConfirmBody: (name: string) =>
      `Dear ${name},\n\nThank you for your wedding enquiry. We will get back to you within 1 business day to arrange a venue tour.\n\nFor urgent requests, please call +420 602 346 729.\n\nKind regards,\nIN CATERING Team\nbrevnov@incatering.cz`,
  },
} as const;

type SupportedLocale = keyof typeof messages;

function getLocale(formData: FormData): SupportedLocale {
  const loc = formData.get("locale");
  return loc === "en" ? "en" : "cs";
}

export async function submitInquiry(
  _prevState: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const locale = getLocale(formData);
  const t = messages[locale];

  if (!formData || !(formData instanceof FormData)) {
    return { success: false, message: t.badForm };
  }

  const raw: Record<string, string> = {};
  formData.forEach((value, key) => {
    if (typeof value === "string") {
      raw[key] = value;
    }
  });

  // Honeypot check — before validation so bots get silent success
  if (raw.website && raw.website.length > 0) {
    return { success: true, message: "ok" };
  }

  // Validate
  const result = inquirySchema.safeParse(raw);
  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const data = result.data;

  // Send based on EMAIL_MODE
  const emailMode = (process.env.EMAIL_MODE ?? "webhook").trim();

  try {
    if (emailMode === "webhook") {
      await sendWebhook(data);
    } else {
      await sendDirect(data, locale);
    }
  } catch (error) {
    console.error("Form submission error:", error);
    return { success: false, message: t.error };
  }

  return { success: true, message: t.inquirySuccess };
}

async function sendWebhook(data: InquiryFormData): Promise<void> {
  const webhookUrl = process.env.WEBHOOK_URL?.trim();
  if (!webhookUrl) {
    throw new Error("WEBHOOK_URL is not configured");
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...data,
      submittedAt: new Date().toISOString(),
      source_page: "homepage",
    }),
  });

  if (!response.ok) {
    const responseText = await response.text();
    throw new Error(`Webhook returned ${response.status}: ${responseText}`);
  }
}

async function sendDirect(data: InquiryFormData, locale: SupportedLocale = "cs"): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "brevnov@incatering.cz";
  const t = messages[locale];

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  // Notification email to team
  const notifResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: "brevnov@incatering.cz",
      subject: `Nová poptávka: ${data.eventType} — ${data.company}`,
      text: formatEmailText(data),
    }),
  });

  if (!notifResponse.ok) {
    throw new Error(`Resend notification email returned ${notifResponse.status}`);
  }

  // Confirmation email to submitter
  const confirmResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: data.email,
      subject: t.confirmSubject,
      text: t.confirmBody(data.name),
    }),
  });

  if (!confirmResponse.ok) {
    throw new Error(`Resend confirmation email returned ${confirmResponse.status}`);
  }
}

function formatEmailText(data: InquiryFormData): string {
  return [
    `Jméno: ${data.name}`,
    `Firma: ${data.company}`,
    `Email: ${data.email}`,
    `Telefon: ${data.phone || "–"}`,
    `Typ akce: ${data.eventType}`,
    `Počet hostů: ${data.guestCount}`,
    `Termín: ${data.preferredDate}`,
    `Catering: ${data.catering || "–"}`,
    `Agentura: ${data.isAgency || "–"}`,
    `Popis: ${data.description || "–"}`,
    `Zdroj: ${data.source || "–"}`,
    `Čas: ${new Date().toISOString()}`,
  ].join("\n");
}

/* ============================================================
   Wedding Form (Form B)
   ============================================================ */

export async function submitWeddingInquiry(
  _prevState: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const locale = getLocale(formData);
  const t = messages[locale];

  if (!formData || !(formData instanceof FormData)) {
    return { success: false, message: t.badForm };
  }

  const raw: Record<string, string> = {};
  formData.forEach((value, key) => {
    if (typeof value === "string" && key !== "celebrationType") {
      raw[key] = value;
    }
  });

  // Handle checkboxes – join multiple values
  const celebrationTypes = formData.getAll("celebrationType");
  raw.celebrationType = celebrationTypes.map(String).join(", ");

  // Honeypot check – before validation so bots get silent success
  if (raw.website && raw.website.length > 0) {
    return { success: true, message: "ok" };
  }

  // Validate
  const result = weddingSchema.safeParse(raw);
  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const data = result.data;

  // Send based on EMAIL_MODE
  const emailMode = (process.env.EMAIL_MODE ?? "webhook").trim();

  try {
    if (emailMode === "webhook") {
      await sendWeddingWebhook(data);
    } else {
      await sendWeddingDirect(data, locale);
    }
  } catch (error) {
    console.error("Wedding form submission error:", error);
    return { success: false, message: t.error };
  }

  return { success: true, message: t.weddingSuccess };
}

async function sendWeddingWebhook(data: WeddingFormData): Promise<void> {
  const webhookUrl = process.env.WEBHOOK_URL?.trim();
  if (!webhookUrl) {
    throw new Error("WEBHOOK_URL is not configured");
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...data,
      submittedAt: new Date().toISOString(),
      source_page: "svatba",
    }),
  });

  if (!response.ok) {
    const responseText = await response.text();
    throw new Error(`Webhook returned ${response.status}: ${responseText}`);
  }
}

async function sendWeddingDirect(data: WeddingFormData, locale: SupportedLocale = "cs"): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "brevnov@incatering.cz";
  const t = messages[locale];

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  // Notification email to team
  const notifResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: "brevnov@incatering.cz",
      subject: `Nová svatební poptávka – ${data.name}`,
      text: formatWeddingEmailText(data),
    }),
  });

  if (!notifResponse.ok) {
    throw new Error(`Resend notification email returned ${notifResponse.status}`);
  }

  // Confirmation email to submitter
  const confirmResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: data.email,
      subject: t.weddingConfirmSubject,
      text: t.weddingConfirmBody(data.name),
    }),
  });

  if (!confirmResponse.ok) {
    throw new Error(`Resend confirmation email returned ${confirmResponse.status}`);
  }
}

function formatWeddingEmailText(data: WeddingFormData): string {
  return [
    `Jméno: ${data.name}`,
    `Email: ${data.email}`,
    `Telefon: ${data.phone}`,
    `Termín: ${data.preferredDate}`,
    `Počet hostů: ${data.guestCount}`,
    `Typ oslavy: ${data.celebrationType}`,
    `Catering: ${data.catering}`,
    `Představa: ${data.vision || "–"}`,
    `Zdroj: ${data.source || "–"}`,
    `Čas: ${new Date().toISOString()}`,
  ].join("\n");
}
