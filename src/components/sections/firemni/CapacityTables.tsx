import { headers } from "next/headers";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import type { RoomRow } from "@/lib/dictionaries/types";
import { Button } from "@/components/ui/Button";

function CapacityTable({
  title,
  rows,
  note,
  tableHeaders,
}: {
  title: string;
  rows: RoomRow[];
  note: string;
  tableHeaders: string[];
}) {
  return (
    <div>
      <h3 className="mb-6 text-xl font-bold md:text-2xl">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-[10px] sm:text-xs md:text-sm">
          <thead className="border-b border-brand-gray-dark/40 text-brand-white/60">
            <tr>
              {tableHeaders.map((h) => (
                <th key={h} className="px-1 py-2 sm:px-2 md:px-3 md:py-3 font-semibold leading-tight">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.room} className="border-b border-brand-gray-dark/10">
                <td className="px-1 py-2 sm:px-2 md:px-3 md:py-3 font-medium leading-tight">{row.room}</td>
                <td className="px-1 py-2 sm:px-2 md:px-3 md:py-3">{row.reception}</td>
                <td className="px-1 py-2 sm:px-2 md:px-3 md:py-3">{row.theatre}</td>
                <td className="px-1 py-2 sm:px-2 md:px-3 md:py-3">{row.school}</td>
                <td className="px-1 py-2 sm:px-2 md:px-3 md:py-3">{row.banquet}</td>
                <td className="px-1 py-2 sm:px-2 md:px-3 md:py-3">{row.dimensions}</td>
                <td className="px-1 py-2 sm:px-2 md:px-3 md:py-3">{row.area}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-brand-white/50">{note}</p>
    </div>
  );
}

export async function CapacityTables() {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") || "cs") as Locale;
  const dict = await getDictionary(locale);
  const ct = dict.capacityTables;

  return (
    <section className="bg-brand-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          {ct.title}
        </h2>
        <div className="mt-16 flex flex-col gap-16">
          <CapacityTable
            title={ct.firstFloorTitle}
            rows={ct.firstFloor}
            note={ct.firstFloorNote}
            tableHeaders={ct.headers}
          />
          <CapacityTable
            title={ct.groundFloorTitle}
            rows={ct.groundFloor}
            note={ct.groundFloorNote}
            tableHeaders={ct.headers}
          />
        </div>
        <div className="mt-12 text-center">
          <Button
            href="/downloads/technicky-rider-brevnovsky-klaster.pdf"
            variant="secondary"
          >
            {ct.downloadRider}
          </Button>
        </div>
      </div>
    </section>
  );
}
