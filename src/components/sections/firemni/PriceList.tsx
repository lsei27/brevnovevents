interface PriceRow {
  item: string;
  price: string;
}

const groundFloor: PriceRow[] = [
  { item: "Sala Terrena + chodby", price: "15 000 Kč/den" },
  { item: "Sala Terrena + salonky + chodby", price: "20 000 Kč/den" },
  { item: "Benediktinská vinárna + Sala Terrena + chodby", price: "20 000 Kč/den" },
  { item: "Celé přízemí (Sala Terrena, salonky, vinárna, chodby)", price: "30 000 Kč/den" },
];

const firstFloor: PriceRow[] = [
  { item: "Tereziánský sál", price: "65 000 Kč/den nebo 10 000 Kč/hod." },
  { item: "Celé 1. patro", price: "90 000 Kč/den nebo 10 000 Kč/hod." },
];

const extras: PriceRow[] = [
  { item: "Nádvoří (dle dispozic akce)", price: "12 000 Kč/den" },
  { item: "Nádvoří pro welcome drink (do 1 hod.)", price: "zdarma" },
  { item: "Základní ozvučení", price: "6 000 Kč/sál" },
  { item: "Ozvučení + promítání + plátno/plazma", price: "11 000 Kč/sál" },
  { item: "Prodloužení akce (24:00–02:00, max. 2 hod.)", price: "10 000 Kč/hod." },
  { item: "Přípravný den – příprava do 21:00", price: "35 % z ceny pronájmu" },
  { item: "Přípravný den – příprava po 21:00", price: "50 % z ceny pronájmu" },
];

function PriceTable({ title, rows }: { title: string; rows: PriceRow[] }) {
  return (
    <div>
      <h3 className="mb-4 text-lg font-bold md:text-xl">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-brand-gray-dark/40 text-brand-white/60">
            <tr>
              <th className="px-3 py-3 font-semibold">
                {title === "Nádvoří a doplňkové služby" ? "Služba" : "Prostor"}
              </th>
              <th className="px-3 py-3 font-semibold">Cena</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.item}
                className="border-b border-brand-gray-dark/10"
              >
                <td className="px-3 py-3 font-medium">{row.item}</td>
                <td className="px-3 py-3">{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function PriceList() {
  return (
    <section className="bg-brand-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Ceník pronájmu prostor Břevnovského kláštera
        </h2>
        <div className="mt-16 flex flex-col gap-12">
          <PriceTable title="Přízemí" rows={groundFloor} />
          <PriceTable title="1. patro" rows={firstFloor} />
          <PriceTable title="Nádvoří a doplňkové služby" rows={extras} />
        </div>
        <p className="mt-8 text-sm text-brand-white/50">
          Ceny jsou bez DPH. Catering se kalkuluje individuálně dle rozsahu
          akce.
        </p>
      </div>
    </section>
  );
}
