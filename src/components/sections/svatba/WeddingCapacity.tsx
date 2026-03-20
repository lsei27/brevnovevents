import { headers } from "next/headers";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export async function WeddingCapacity() {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") || "cs") as Locale;
  const dict = await getDictionary(locale);

  return (
    <section className="bg-brand-black-alt py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          {dict.weddingCapacity.title}
        </h2>

        <div className="mt-16 overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm">
            <thead className="border-b border-brand-gray-dark/40 text-brand-white/60">
              <tr>
                {dict.weddingCapacity.headers.map((h) => (
                  <th key={h} className="px-2 py-2 md:px-3 md:py-3 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dict.weddingCapacity.rows.map((row) => (
                <tr
                  key={row.room}
                  className="border-b border-brand-gray-dark/10"
                >
                  <td className="px-2 py-2 md:px-3 md:py-3 font-medium">{row.room}</td>
                  <td className="px-2 py-2 md:px-3 md:py-3">{row.capacity}</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 opacity-90">{row.suitableFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
