interface CapacityRow {
  room: string;
  capacity: string;
  suitableFor: string;
}

const rows: CapacityRow[] = [
  { room: "Tereziánský sál", capacity: "200 (divadlo) / 120 (banket)", suitableFor: "Slavnostní hostina, obřad" },
  { room: "Sala Terrena", capacity: "110 (recepce) / 70 (banket)", suitableFor: "Hostina, večerní party" },
  { room: "Benediktinská vinárna", capacity: "80 (recepce)", suitableFor: "Komorní oslava, afterparty" },
  { room: "Zlatý salonek", capacity: "40 (recepce)", suitableFor: "Welcome drink, fotokoutek" },
  { room: "Modrý salonek", capacity: "20 (recepce)", suitableFor: "Příprava, VIP prostor" },
  { room: "Nádvoří + zahrada", capacity: "300", suitableFor: "Obřad, cocktail reception" },
  { room: "Vojtěška", capacity: "Dle domluvy", suitableFor: "Civilní svatební obřad" },
];

const headers = ["Prostor", "Kapacita", "Vhodné pro"];

export function WeddingCapacity() {
  return (
    <section className="bg-brand-black-alt py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Přehled svatebních prostor a kapacit
        </h2>

        <div className="mt-16 overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm">
            <thead className="border-b border-brand-gray-dark/40 text-brand-white/60">
              <tr>
                {headers.map((h) => (
                  <th key={h} className="px-2 py-2 md:px-3 md:py-3 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
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
