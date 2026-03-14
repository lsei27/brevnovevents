import Image from "next/image";

const cards = [
  {
    title: "Klášterní pivovar",
    text: "Exkurze do klášterního pivovaru s degustací. Funguje jako teambuilding nebo doplněk networkingového programu. Hosté ocení příběh – Břevnovský pivovar vaří pivo od 13. století.",
    price: "od 250 Kč/os",
    image: "/images/prostory/pivovar-brevnov.webp",
    alt: "Klášterní pivovar Břevnovského kláštera – měděné varny",
  },
  {
    title: "Historická krypta",
    text: "Komorní prostor pod klášterem pro netradiční úvod programu nebo exkluzivní setkání. Autentická atmosféra, kterou žádný moderní prostor nenapodobí. Součástí je prohlídka s výkladem.",
    price: "od 180 Kč/os",
    image: "/images/prostory/krypta-bk.webp",
    alt: "Historická krypta pod Břevnovským klášterem",
  },
  {
    title: "Stůl Marie Terezie",
    text: "Slavnostní večeře Marie Terezie a Josefa II. v Tereziánském sále. Vraťte se do roku 1774 prostřednictvím inscenace večeře, která se v tomto místě skutečně odehrála. Skvělá atmosféra s výkladem profesionálního průvodce.",
    price: "od 110 000 Kč",
    image: "/images/prostory/terezian-vecere-marie-terezie.webp",
    alt: "Slavnostní večeře Marie Terezie v Tereziánském sále",
  },
];

export function Upsell() {
  return (
    <section className="bg-brand-black-alt py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Doplňkové zážitky, které jinde v Praze nezažijete
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-2xl border border-brand-gray-dark/20 bg-brand-black"
            >
              <div className="overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={400}
                  height={250}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p className="mt-4 leading-relaxed text-brand-white/70">
                  {card.text}
                </p>
                <p className="mt-4 text-sm font-bold text-brand-red">
                  {card.price} bez DPH
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-brand-gray-dark/20 bg-brand-black p-8 md:p-12">
          <h3 className="mb-8 text-center text-2xl font-bold">Další zážitky na vyžádání</h3>
          <ul className="grid gap-6 md:grid-cols-2">
            {[
              { name: "Tržiště z královského dvora", price: "od 50 000 Kč" },
              { name: "Scénické vystoupení „Večer s mnichy“", price: "od 50 000 Kč" },
              { name: "Domácí zabíjačka", price: "od 20 000 Kč" },
              { name: "Koncert barokního kvarteta", price: "od 25 000 Kč" },
              { name: "Speciální světelné efekty", price: "od 40 000 Kč" },
              { name: "Květinové dekorace", price: "od 20 000 Kč" },
            ].map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between rounded-xl bg-brand-black-alt p-4 transition-colors hover:bg-brand-gray-dark/10"
              >
                <div className="flex-1">
                  <span className="font-semibold text-brand-white">{item.name}</span>
                </div>
                <div className="ml-4 whitespace-nowrap text-right">
                  <span className="text-sm font-bold text-brand-red">{item.price}</span>
                  <span className="ml-1 text-xs text-brand-white/50">bez DPH</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-center text-sm text-brand-white/50">
          Ceny jsou orientační, bez DPH. Dostupnost a finální kalkulaci rádi upřesníme.
        </p>
      </div>
    </section>
  );
}
