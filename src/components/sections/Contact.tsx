import Image from "next/image";
import { headers } from "next/headers";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { InquiryForm } from "@/components/forms/InquiryForm";

export async function Contact() {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") || "cs") as Locale;
  const dict = await getDictionary(locale);

  const sectionId = locale === "en" ? "contact" : "kontakt";

  return (
    <section id={sectionId} className="bg-brand-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          {dict.contact.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-brand-white/60">
          {dict.contact.subtitle}
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {/* Contact info */}
          <div>
            <h3 className="text-xl font-bold">{dict.contact.contactLabel}</h3>
            <div className="mt-6 space-y-4 text-brand-white/70">
              <p>
                <span className="block text-sm font-bold text-brand-white">
                  {dict.contact.emailLabel}
                </span>
                <a
                  href="mailto:brevnov@incatering.cz"
                  className="transition-colors hover:text-brand-white"
                >
                  brevnov@incatering.cz
                </a>
              </p>
              <p>
                <span className="block text-sm font-bold text-brand-white">
                  {dict.contact.phoneLabel}
                </span>
                <a
                  href="tel:+420602346729"
                  className="transition-colors hover:text-brand-white"
                >
                  +420 602 346 729
                </a>
              </p>
              <p>
                <span className="block text-sm font-bold text-brand-white">
                  {dict.contact.webLabel}
                </span>
                www.brevnovevents.cz
              </p>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl">
              <Image
                src="/images/prostory/tereziansky-sal-konference.webp"
                alt={dict.contact.imageAlt}
                width={600}
                height={400}
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
