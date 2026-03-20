import { headers } from "next/headers";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export async function FAQFiremni() {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") || "cs") as Locale;
  const dict = await getDictionary(locale);
  const { title, items } = dict.faqFiremni;

  return (
    <section className="bg-brand-black-alt py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          {title}
        </h2>

        <div className="mt-16">
          {items.map((faq) => (
            <details
              key={faq.question}
              className="border-b border-brand-gray-dark/20 py-4"
            >
              <summary className="cursor-pointer text-lg font-bold hover:text-brand-white/80">
                {faq.question}
              </summary>
              <p className="mt-3 leading-relaxed text-brand-white/70">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
