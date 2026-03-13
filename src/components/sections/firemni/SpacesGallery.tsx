import { ImageCarousel } from "@/components/ui/ImageCarousel";

const spaces = [
  {
    image: "/images/prostory/tereziansky-sal-konference.webp",
    alt: "Tereziánský sál – konferenční sál pro 180 osob v Břevnovském klášteře",
    title: "Tereziánský sál",
    capacity: "180 osob divadlo / 100 banket",
    description:
      "Barokní sál s freskami. Hlavní prostor pro konference a gala večery.",
  },
  {
    image: "/images/prostory/sala-terrena-raut.webp",
    alt: "Sala Terrena – eventový prostor pro rauty a prezentace",
    title: "Sala Terrena",
    capacity: "110 osob recepce / 70 banket",
    description:
      "Prostor s přímým vstupem do zahrady. Rauty, prezentace, menší konference.",
  },
  {
    image: "/images/prostory/nadvori-klaster.webp",
    alt: "Nádvoří Břevnovského kláštera – venkovní prostor pro 300 hostů",
    title: "Nádvoří a zahrady",
    capacity: "300 osob",
    description:
      "Venkovní prostor pro welcome drink, cocktail reception a letní akce.",
  },
  {
    image: "/images/prostory/salonek-prizemi.webp",
    alt: "Salonek v přízemí – workshopy a meetingy pro 20–50 osob",
    title: "Salonky",
    capacity: "20–50 osob",
    description:
      "Zlatý, Modrý, Pompejský, Brandlův – workshopy, board meetingy, breakout sessions.",
  },
  {
    image: "/images/prostory/benediktinska-vinarna.webp",
    alt: "Benediktinská vinárna – komorní prostor pro afterparty a degustace",
    title: "Benediktinská vinárna",
    capacity: "80 osob",
    description:
      "Komorní prostor pro afterparty, degustace a neformální setkání v autentickém klášterním prostředí.",
  },
  {
    image: "/images/prostory/brevnovsky-klaster-exterier.webp",
    alt: "Břevnovský klášter – pohled na exteriér historického areálu",
    title: "Exteriér",
    capacity: "",
    description:
      "Historický areál s unikátní atmosférou pro příjezd hostů.",
  },
];

export function SpacesGallery() {
  return (
    <section className="bg-brand-black-alt py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Prohlédněte si prostory
        </h2>
        <div className="mt-16">
          <ImageCarousel slides={spaces} />
        </div>
      </div>
    </section>
  );
}
