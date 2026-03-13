import Image from "next/image";

const spaces = [
  {
    title: "Venkovní obřad v klášterní zahradě",
    text: "Prostor Vojtěška a klášterní zahrada s rybníky – místo pro civilní svatební obřady. Nádvoří pojme až 300 hostů pro welcome drink a cocktail reception.",
    image: "/images/svatby/bk-svatba-zahrady.webp",
    alt: "Klášterní zahrady – venkovní svatební obřad",
  },
  {
    title: "Slavnostní hostina v Tereziánském sále",
    text: "Barokní sál s freskovou výzdobou a stropní výškou 7,3 m. Kapacita 120 osob pro banketní sezení. Prostor, kde se fotky dělají samy.",
    image: "/images/svatby/bk-terezian-obrad.webp",
    alt: "Tereziánský sál – barokní prostor pro svatební hostinu",
  },
  {
    title: "Komorní oslava v přízemí",
    text: "Sala Terrena (až 110 osob) s přímým vstupem do zahrady. Benediktinská vinárna (až 80 osob) pro komorní večerní oslavu nebo afterparty.",
    image: "/images/svatby/bk-svatba-sala-terrena.webp",
    alt: "Sala Terrena – prostor pro komorní svatební oslavu",
  },
  {
    title: "Salonky pro menší skupiny",
    text: "Zlatý salonek (40 osob) – příprava nevěsty, fotokoutek nebo VIP prostor. Modrý salonek (20 osob) – klidný kout pro nejbližší.",
    image: "/images/svatby/bk-prizemi-svatba.webp",
    alt: "Salonek pro přípravu nevěsty a komorní setkání",
  },
];

export function WeddingSpaces() {
  return (
    <section className="bg-brand-black pt-10 pb-20 md:pt-16 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Svatební prostory – od obřadu po poslední tanec pod jednou střechou
        </h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {spaces.map((space) => (
            <div
              key={space.title}
              className="overflow-hidden rounded-2xl border border-brand-gray-dark/20 bg-brand-black-alt"
            >
              <Image
                src={space.image}
                alt={space.alt}
                width={600}
                height={300}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">{space.title}</h3>
                <p className="mt-2 leading-relaxed text-brand-white/70">
                  {space.text}
                </p>
              </div>
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
