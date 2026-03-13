import { Button } from "@/components/ui/Button";

interface SmallVenue {
  space: string;
  capacity: string;
  suitableFor: string;
  price: string;
}

const venues: SmallVenue[] = [
  {
    space: "Zlatý salonek",
    capacity: "30–50 osob",
    suitableFor: "Workshop, board meeting, VIP setkání",
    price: "Součást pronájmu přízemí",
  },
  {
    space: "Modrý salonek",
    capacity: "20–30 osob",
    suitableFor: "Komorní meeting, breakout session",
    price: "Součást pronájmu přízemí",
  },
  {
    space: "Pompejský salonek",
    capacity: "20–30 osob",
    suitableFor: "Přednáška, firemní prezentace",
    price: "Součást pronájmu 1. patra",
  },
  {
    space: "Sala Terrena",
    capacity: "70–110 osob",
    suitableFor: "Prezentace, degustace, menší konference",
    price: "Od 15 000 Kč/den (vč. chodeb)",
  },
  {
    space: "Benediktinská vinárna",
    capacity: "Až 80 osob",
    suitableFor: "Komorní večeře, degustace, networking",
    price: "Od 20 000 Kč/den (vč. Sala Terreny)",
  },
  {
    space: "Brandlův salonek",
    capacity: "30–50 osob",
    suitableFor: "Workshop, školení, tiskový briefing",
    price: "Součást pronájmu 1. patra",
  },
];

const headers = ["Prostor", "Kapacita", "Hodí se pro", "Cena"];

export function SmallerEvents() {
  return (
    <section className="bg-brand-black-alt py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Pronájem salonků pro menší firemní akce (20–110 osob)
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-brand-white/70">
          Klášterní prostory fungují i samostatně. Jednotlivé salonky a sály
          pronajímáme nezávisle – pro workshop, firemní meeting, tiskovou
          konferenci nebo komorní večeři.
        </p>
        <div className="mt-16 overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm">
            <thead className="border-b border-brand-gray-dark/40 text-brand-white/60">
              <tr>
                <th className="px-1 py-2 md:px-3 md:py-3 font-semibold">Prostor</th>
                <th className="px-1 py-2 md:px-3 md:py-3 font-semibold">Kapacita</th>
                <th className="px-1 py-2 md:px-3 md:py-3 font-semibold">Hodí se pro</th>
                <th className="px-1 py-2 md:px-3 md:py-3 text-right font-semibold">Cena</th>
              </tr>
            </thead>
            <tbody>
              {venues.map((v) => (
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
          Salonky v přízemí i v 1. patře se pronajímají jako součást celku (viz
          ceník). Pro specifické požadavky na pronájem jednotlivého prostoru nás
          kontaktujte – najdeme řešení.
        </p>
        <div className="mt-12 text-center">
          <Button href="#kontakt" variant="primary">
            Poptat pronájem
          </Button>
        </div>
      </div>
    </section>
  );
}
