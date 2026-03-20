import { headers } from "next/headers";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";

export async function WeddingPricing() {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") || "cs") as Locale;
  const dict = await getDictionary(locale);

  return (
    <section className="bg-brand-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          {dict.weddingPricing.title}
        </h2>

        <h3 className="mt-16 text-xl font-bold md:text-2xl">
          {dict.weddingPricing.rentalTitle}
        </h3>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full table-fixed text-left text-xs md:text-sm">
            <colgroup>
              <col className="w-[50%] md:w-[60%]" />
              <col className="w-[50%] md:w-[40%]" />
            </colgroup>
            <thead className="border-b border-brand-gray-dark/40 text-brand-white/60">
              <tr>
                <th className="px-2 py-2 md:px-3 md:py-3 font-semibold">{dict.weddingPricing.headers[0]}</th>
                <th className="px-2 py-2 md:px-3 md:py-3 text-right font-semibold">{dict.weddingPricing.headers[1]}</th>
              </tr>
            </thead>
            <tbody>
              {dict.weddingPricing.rows.map((row) => (
                <tr
                  key={row.room}
                  className="border-b border-brand-gray-dark/10"
                >
                  <td className="px-2 py-2 md:px-3 md:py-3 font-medium">{row.room}</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-right">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-brand-white/50">
          {dict.weddingPricing.note}
        </p>

        <div className="mt-10 text-center">
          <Button href={locale === "en" ? "#contact" : "#kontakt"} variant="pink">
            {dict.weddingPricing.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
