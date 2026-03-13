import { Button } from "@/components/ui/Button";

interface RoomRow {
  room: string;
  reception: string;
  theatre: string;
  school: string;
  banquet: string;
  dimensions: string;
  area: string;
}

const firstFloor: RoomRow[] = [
  { room: "Tereziánský sál", reception: "150", theatre: "180", school: "100", banquet: "100", dimensions: "11,5 × 17,5", area: "200" },
  { room: "Opatská jídelna", reception: "80", theatre: "80", school: "50", banquet: "50", dimensions: "7,0 × 13,0", area: "90" },
  { room: "Přijímací salonek", reception: "40", theatre: "40", school: "30", banquet: "30", dimensions: "7,0 × 8,6", area: "60" },
  { room: "Pompejský salonek", reception: "30", theatre: "30", school: "20", banquet: "20", dimensions: "6,3 × 6,8", area: "40" },
  { room: "Rohový salonek", reception: "–", theatre: "–", school: "–", banquet: "–", dimensions: "6,3 × 4,2", area: "25" },
  { room: "Brandlův salonek", reception: "50", theatre: "50", school: "30", banquet: "30", dimensions: "6,0 × 8,0", area: "45" },
  { room: "Nádvoří", reception: "300", theatre: "–", school: "–", banquet: "–", dimensions: "21,0 × 25,0", area: "525" },
];

const groundFloor: RoomRow[] = [
  { room: "Sala Terrena", reception: "110", theatre: "100", school: "70", banquet: "70", dimensions: "16,5 × 6,0", area: "100" },
  { room: "Zlatý salonek", reception: "40", theatre: "50", school: "30", banquet: "30", dimensions: "7,3 × 6,8", area: "50" },
  { room: "Modrý salonek", reception: "20", theatre: "30", school: "20", banquet: "20", dimensions: "5,8 × 6,8", area: "40" },
  { room: "Benediktinská vinárna", reception: "80", theatre: "–", school: "–", banquet: "–", dimensions: "17,2 × 6,0", area: "105" },
];

const headers = ["Místnost", "Recepce", "Divadlo", "Škola", "Banket", "Rozměr (m)", "Plocha (m²)"];

function CapacityTable({ title, rows, note }: { title: string; rows: RoomRow[]; note: string }) {
  return (
    <div>
      <h3 className="mb-6 text-xl font-bold md:text-2xl">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-brand-gray-dark/40 text-brand-white/60">
            <tr>
              {headers.map((h) => (
                <th key={h} className="px-3 py-3 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.room} className="border-b border-brand-gray-dark/10">
                <td className="px-3 py-3 font-medium">{row.room}</td>
                <td className="px-3 py-3">{row.reception}</td>
                <td className="px-3 py-3">{row.theatre}</td>
                <td className="px-3 py-3">{row.school}</td>
                <td className="px-3 py-3">{row.banquet}</td>
                <td className="px-3 py-3">{row.dimensions}</td>
                <td className="px-3 py-3">{row.area}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-brand-white/50">{note}</p>
    </div>
  );
}

export function CapacityTables() {
  return (
    <section className="bg-brand-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Pronájem prostor – konferenční sály a salonky pro každý formát
        </h2>
        <div className="mt-16 flex flex-col gap-16">
          <CapacityTable
            title="1. patro – reprezentativní sály (kapacita až 400 osob)"
            rows={firstFloor}
            note="Cena pronájmu 1. patra na vyžádání."
          />
          <CapacityTable
            title="Přízemí (kapacita až 300 osob)"
            rows={groundFloor}
            note="Kapacity jsou orientační a závisí na konfiguraci (pódium, technika, cateringové stanoviště). Připravíme návrh dispozic na míru vaší akci."
          />
        </div>
        <div className="mt-12 text-center">
          <Button
            href="/downloads/cenik-brevnovsky-klaster.pdf"
            variant="secondary"
          >
            Stáhnout technický rider
          </Button>
        </div>
      </div>
    </section>
  );
}
