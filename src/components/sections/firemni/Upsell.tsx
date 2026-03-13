const cards = [
  {
    title: "Klášterní pivovar",
    text: "Exkurze do klášterního pivovaru s degustací. Funguje jako teambuilding nebo doplněk networkingového programu. Hosté ocení příběh – Břevnovský pivovar vaří pivo od 13. století.",
  },
  {
    title: "Historická krypta",
    text: "Komorní prostor pod klášterem pro netradiční úvod programu nebo exkluzivní setkání. Autentická atmosféra, kterou žádný moderní prostor nenapodobí.",
  },
  {
    title: "Stůl Marie Terezie",
    text: "Slavnostní večeře Marie Terezia a Josefa II. v Tereziánském sále. Vraťte se do roku 1774 prostřednictvím inscenace večeře, která se v tomto místě skutečně odehrála. Skvělá atmosféra s výkladem profesionálního průvodce.",
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
              className="rounded-2xl border border-brand-gray-dark/20 bg-brand-black p-8"
            >
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p className="mt-4 leading-relaxed text-brand-white/70">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-brand-white/50">
          Dostupnost a ceny doplňkových zážitků na vyžádání.
        </p>
      </div>
    </section>
  );
}
