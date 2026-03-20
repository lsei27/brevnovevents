import { headers } from "next/headers";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";

export async function USP() {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") || "cs") as Locale;
  const dict = await getDictionary(locale);

  return (
    <section className="bg-brand-black pt-10 pb-20 md:pt-16 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          {dict.usp.title}
        </h2>
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {dict.usp.cards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-brand-gray-dark/20 bg-brand-black-alt p-8">
              <h3 className="text-xl font-bold md:text-2xl">{card.title}</h3>
              <p className="mt-3 leading-relaxed text-brand-white/70">{card.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="#prostory" variant="secondary">{dict.usp.cta}</Button>
        </div>
      </div>
    </section>
  );
}
