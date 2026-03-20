import { headers } from "next/headers";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export async function AgencyProgram() {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") || "cs") as Locale;
  const dict = await getDictionary(locale);
  const ap = dict.agencyProgram;

  return (
    <section className="bg-brand-black pb-20 pt-8 md:pb-32 md:pt-12">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          {ap.title}
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-brand-white/70">
          {ap.subtitle}
        </p>

        <ul className="mx-auto mt-12 max-w-3xl space-y-6">
          {ap.benefits.map((benefit) => (
            <li key={benefit.title} className="text-brand-white/70">
              <span className="font-bold text-brand-white">
                {benefit.title}
              </span>{" "}
              – {benefit.text}
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <a
            href="mailto:brevnov@incatering.cz"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-3 font-bold text-base uppercase tracking-wide text-white transition-colors duration-200 hover:bg-brand-red-hover"
          >
            {ap.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
