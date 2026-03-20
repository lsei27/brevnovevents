import { headers } from "next/headers";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import type { PriceRow } from "@/lib/dictionaries/types";
import { Button } from "@/components/ui/Button";

function PriceTable({
  title,
  rows,
  headerLabel,
  priceLabel,
}: {
  title: string;
  rows: PriceRow[];
  headerLabel: string;
  priceLabel: string;
}) {
  return (
    <div>
      <h3 className="mb-4 text-lg font-bold md:text-xl">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full table-fixed text-left text-xs md:text-sm">
          <colgroup>
            <col className="w-[50%] md:w-[60%]" />
            <col className="w-[50%] md:w-[40%]" />
          </colgroup>
          <thead className="border-b border-brand-gray-dark/40 text-brand-white/60">
            <tr>
              <th className="px-2 py-2 md:px-3 md:py-3 font-semibold">
                {headerLabel}
              </th>
              <th className="px-2 py-2 md:px-3 md:py-3 text-right font-semibold">{priceLabel}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.item}
                className="border-b border-brand-gray-dark/10"
              >
                <td className="px-2 py-2 md:px-3 md:py-3 font-medium">{row.item}</td>
                <td className="px-2 py-2 md:px-3 md:py-3 text-right">{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export async function PriceList() {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") || "cs") as Locale;
  const dict = await getDictionary(locale);
  const pl = dict.priceList;

  return (
    <section id="cenik" className="bg-brand-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          {pl.title}
        </h2>
        <div className="mt-16 flex flex-col gap-12">
          <PriceTable title={pl.groundFloorTitle} rows={pl.groundFloor} headerLabel={pl.spaceHeader} priceLabel={pl.priceHeader} />
          <PriceTable title={pl.firstFloorTitle} rows={pl.firstFloor} headerLabel={pl.spaceHeader} priceLabel={pl.priceHeader} />
          <PriceTable title={pl.extrasTitle} rows={pl.extras} headerLabel={pl.serviceHeader} priceLabel={pl.priceHeader} />
        </div>
        <p className="mt-8 text-sm text-brand-white/50">
          {pl.note}
        </p>
        <div className="mt-10 text-center">
          <Button
            href="/downloads/cenik-brevnovsky-klaster.pdf"
            variant="secondary"
          >
            {pl.download}
          </Button>
        </div>
      </div>
    </section>
  );
}
