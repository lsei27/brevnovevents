"use server";

import { inquirySchema, type InquiryFormData } from "@/lib/validation";
import { weddingSchema, type WeddingFormData } from "@/lib/wedding-validation";

interface ActionResult {
  success: boolean;
  errors?: Record<string, string[]>;
  message?: string;
}

export async function submitInquiry(
  _prevState: ActionResult,
  formData: FormData
): Promise<ActionResult> {
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
  const emailMode = process.env.EMAIL_MODE ?? "webhook";

  try {
    if (emailMode === "webhook") {
      await sendWebhook(data);
    } else {
      await sendDirect(data);
    }
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      success: false,
      message:
        "Něco se nepovedlo. Zkuste to znovu nebo napište na brevnov@incatering.cz.",
    };
  }

  return {
    success: true,
    message:
      "Děkujeme za poptávku. Ozveme se do 1 pracovního dne s předběžnou nabídkou.",
  };
}

async function sendWebhook(data: InquiryFormData): Promise<void> {
  const webhookUrl = process.env.WEBHOOK_URL;
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
    throw new Error(`Webhook returned ${response.status}`);
  }
}

async function sendDirect(data: InquiryFormData): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "brevnov@incatering.cz";

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
      subject: "Potvrzení poptávky — Břevnovský klášter",
      text: `Dobrý den ${data.name},\n\nděkujeme za Vaši poptávku. Ozveme se do 1 pracovního dne s předběžnou nabídkou.\n\nPro urgentní požadavky volejte +420 602 346 729.\n\nS pozdravem,\nTým IN CATERING\nbrevnov@incatering.cz`,
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
  const emailMode = process.env.EMAIL_MODE ?? "webhook";

  try {
    if (emailMode === "webhook") {
      await sendWeddingWebhook(data);
    } else {
      await sendWeddingDirect(data);
    }
  } catch (error) {
    console.error("Wedding form submission error:", error);
    return {
      success: false,
      message:
        "Něco se nepovedlo. Zkuste to znovu nebo napište na brevnov@incatering.cz.",
    };
  }

  return {
    success: true,
    message:
      "Děkujeme za vaši poptávku. Ozveme se do 1 pracovního dne a domluvíme prohlídku kláštera.",
  };
}

async function sendWeddingWebhook(data: WeddingFormData): Promise<void> {
  const webhookUrl = process.env.WEBHOOK_URL;
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
    throw new Error(`Webhook returned ${response.status}`);
  }
}

async function sendWeddingDirect(data: WeddingFormData): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "brevnov@incatering.cz";

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
      subject: "Potvrzení svatební poptávky – Břevnovský klášter",
      text: `Dobrý den ${data.name},\n\nděkujeme za Vaši svatební poptávku. Ozveme se do 1 pracovního dne a domluvíme prohlídku kláštera.\n\nPro urgentní požadavky volejte +420 602 346 729.\n\nS pozdravem,\nTým IN CATERING\nbrevnov@incatering.cz`,
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
