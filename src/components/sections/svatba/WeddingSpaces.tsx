const spaces = [
  {
    title: "Venkovní obřad v klášterní zahradě",
    text: "Prostor Vojtěška a klášterní zahrada s rybníky – místo pro civilní svatební obřady. Nádvoří pojme až 300 hostů pro welcome drink a cocktail reception.",
  },
  {
    title: "Slavnostní hostina v Tereziánském sále",
    text: "Barokní sál s freskovou výzdobou a stropní výškou 7,3 m. Kapacita 120 osob pro banketní sezení. Prostor, kde se fotky dělají samy.",
  },
  {
    title: "Komorní oslava v přízemí",
    text: "Sala Terrena (až 110 osob) s přímým vstupem do zahrady. Benediktinská vinárna (až 80 osob) pro komorní večerní oslavu nebo afterparty.",
  },
  {
    title: "Salonky pro menší skupiny",
    text: "Zlatý salonek (40 osob) – příprava nevěsty, fotokoutek nebo VIP prostor. Modrý salonek (20 osob) – klidný kout pro nejbližší.",
  },
];

export function WeddingSpaces() {
  return (
    <section className="bg-brand-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Svatební prostory – od obřadu po poslední tanec pod jednou střechou
        </h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {spaces.map((space) => (
            <div
              key={space.title}
              className="rounded-2xl border-l-4 border-brand-pink bg-brand-black-alt p-8"
            >
              <h3 className="text-lg font-bold">{space.title}</h3>
              <p className="mt-3 leading-relaxed text-brand-white/70">
                {space.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-brand-white/50">
          Prostory lze kombinovat podle průběhu dne. Navrhneme dispozice na
          míru.
        </p>
      </div>
    </section>
  );
}
