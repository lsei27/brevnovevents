import { headers } from "next/headers";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";

export async function SmallerEvents() {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") || "cs") as Locale;
  const dict = await getDictionary(locale);
  const se = dict.smallerEvents;
  const contactHref = locale === "en" ? "#contact" : "#kontakt";

  return (
    <section className="bg-brand-black-alt py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          {se.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-brand-white/70">
          {se.subtitle}
        </p>
        <div className="mt-16 overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm">
            <thead className="border-b border-brand-gray-dark/40 text-brand-white/60">
              <tr>
                <th className="px-1 py-2 md:px-3 md:py-3 font-semibold">{se.headers[0]}</th>
                <th className="px-1 py-2 md:px-3 md:py-3 font-semibold">{se.headers[1]}</th>
                <th className="px-1 py-2 md:px-3 md:py-3 font-semibold">{se.headers[2]}</th>
                <th className="px-1 py-2 md:px-3 md:py-3 text-right font-semibold">{se.headers[3]}</th>
              </tr>
            </thead>
            <tbody>
              {se.venues.map((v) => (
                <tr
                  key={v.space}
                  className="border-b border-brand-gray-dark/10"
                >
                  <td className="px-1 py-2 md:px-3 md:py-3 font-medium">{v.space}</td>
                  <td className="px-1 py-2 md:px-3 md:py-3">{v.capacity}</td>
                  <td className="px-1 py-2 md:px-3 md:py-3 leading-tight opacity-90">{v.suitableFor}</td>
                  <td className="px-1 py-2 md:px-3 md:py-3 text-right leading-tight">{v.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-brand-white/50">
          {se.note}
        </p>
        <div className="mt-12 text-center">
          <Button href={contactHref} variant="primary">
            {se.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
