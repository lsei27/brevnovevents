import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { Button } from "@/components/ui/Button";

const spaces = [
  {
    image: "/images/prostory/tereziansky-sal-konference.webp",
    alt: "Tereziánský sál — konferenční sál pro 180 osob v Břevnovském klášteře",
    title: "Tereziánský sál",
    capacity: "180 osob divadlo / 100 banket",
    description:
      "Barokní sál s freskami. Hlavní prostor pro konference a gala večery.",
  },
  {
    image: "/images/prostory/sala-terrena-raut.webp",
    alt: "Sala Terrena — eventový prostor pro rauty a prezentace, kapacita 110 osob",
    title: "Sala Terrena",
    capacity: "110 osob recepce / 70 banket",
    description:
      "Prostor s přímým vstupem do zahrady. Rauty, prezentace, menší konference.",
  },
  {
    image: "/images/prostory/nadvori-klaster.webp",
    alt: "Nádvoří Břevnovského kláštera — venkovní prostor pro 300 hostů",
    title: "Nádvoří a zahrady",
    capacity: "300 osob",
    description:
      "Venkovní prostor pro welcome drink, cocktail reception a letní akce.",
  },
  {
    image: "/images/prostory/salonek-prizemi.webp",
    alt: "Salonek v přízemí Břevnovského kláštera — workshopy a meetingy pro 20–50 osob",
    title: "Salonky",
    capacity: "20–50 osob",
    description:
      "Zlatý, Modrý, Pompejský, Brandlův — workshopy, board meetingy, breakout sessions.",
  },
  {
    image: "/images/prostory/brevnovsky-klaster-exterier.webp",
    alt: "Břevnovský klášter — pohled na exteriér historického areálu",
    title: "Exteriér",
    capacity: "",
    description:
      "Historický areál s unikátní atmosférou pro příjezd hostů.",
  },
  {
    image: "/images/prostory/brevnovsky-klaster-pohled-shora.webp",
    alt: "Břevnovský klášter — letecký pohled na celý areál",
    title: "Areál z výšky",
    capacity: "",
    description:
      "Letecký pohled na celý areál kláštera s nádvořím a zahradami.",
  },
];

export function SpacesShowcase() {
  return (
    <section id="prostory" className="bg-brand-black-alt py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Prostory pro každý formát — od komorního meetingu po kongres
        </h2>
        <div className="mt-16">
          <ImageCarousel slides={spaces} />
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="#kontakt" variant="primary">
            Zobrazit všechny prostory
          </Button>
          <Button
            href="/downloads/technicky-rider-brevnovsky-klaster.pdf"
            variant="secondary"
          >
            Stáhnout technický rider
          </Button>
        </div>
      </div>
    </section>
  );
}
