import { Button } from "@/components/ui/Button";

interface PriceRow {
  room: string;
  price: string;
}

const rows: PriceRow[] = [
  { room: "Sala Terrena + chodby", price: "15 000 Kč/den" },
  { room: "Sala Terrena + salonky + chodby", price: "20 000 Kč/den" },
  { room: "Celé přízemí (Sala Terrena, salonky, vinárna)", price: "30 000 Kč/den" },
  { room: "Nádvoří pro obřad nebo welcome drink (do 1 hod.)", price: "zdarma" },
  { room: "Nádvoří na celý den", price: "12 000 Kč/den" },
  { room: "Prodloužení po půlnoci (max. 2 hod.)", price: "10 000 Kč/hod." },
];

const headers = ["Prostor", "Cena"];

export function WeddingPricing() {
  return (
    <section className="bg-brand-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Kolik stojí svatba v Břevnovském klášteře
        </h2>

        <h3 className="mt-16 text-xl font-bold md:text-2xl">
          Pronájem prostor
        </h3>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full table-fixed text-left text-xs md:text-sm">
            <colgroup>
              <col className="w-[50%] md:w-[60%]" />
              <col className="w-[50%] md:w-[40%]" />
            </colgroup>
            <thead className="border-b border-brand-gray-dark/40 text-brand-white/60">
              <tr>
                <th className="px-2 py-2 md:px-3 md:py-3 font-semibold">Prostor</th>
                <th className="px-2 py-2 md:px-3 md:py-3 text-right font-semibold">Cena</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
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
          Cena Tereziánského sálu (1. patro) na vyžádání. Ceny bez DPH.
          Catering se kalkuluje individuálně – od rautového občerstvení po
          slavnostní menu.
        </p>

        <div className="mt-10 text-center">
          <Button href="#kontakt" variant="pink">
            Nezávazná nabídka na vaši svatbu
          </Button>
        </div>
      </div>
    </section>
  );
}
