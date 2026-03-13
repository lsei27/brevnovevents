import { ImageCarousel } from "@/components/ui/ImageCarousel";

const weddingSlides = [
  {
    image: "/images/svatby/bk-svatba-zahrady.webp",
    alt: "Svatba v klášterní zahradě Břevnovského kláštera",
    title: "Klášterní zahrada",
    capacity: "",
    description:
      "Místo pro civilní svatební obřady v přírodním prostředí kláštera.",
  },
  {
    image: "/images/svatby/bk-terezian-obrad.webp",
    alt: "Tereziánský sál – barokní prostor pro svatební hostinu",
    title: "Tereziánský sál",
    capacity: "120 osob banket",
    description: "Barokní sál s freskami pro slavnostní svatební hostinu.",
  },
  {
    image: "/images/svatby/bk-svatba-sala-terrena.webp",
    alt: "Sala Terrena – prostor pro svatební oslavu",
    title: "Sala Terrena",
    capacity: "70 osob banket",
    description:
      "Prostor s přímým vstupem do zahrady pro svatební hostinu.",
  },
  {
    image: "/images/svatby/bk-svatba-nadvori.webp",
    alt: "Nádvoří kláštera pro svatební welcome drink",
    title: "Nádvoří",
    capacity: "300 osob",
    description: "Welcome drink a cocktail reception pod širým nebem.",
  },
  {
    image: "/images/svatby/bk-vojteska2.webp",
    alt: "Vojtěška – prostor pro civilní svatební obřad",
    title: "Vojtěška",
    capacity: "",
    description: "Romantický prostor pro civilní obřad v klášterní zahradě.",
  },
  {
    image: "/images/svatby/bk-dezerty-svatba.webp",
    alt: "Svatební dezerty a catering od IN CATERING",
    title: "Svatební catering",
    capacity: "",
    description: "Dezerty a gastronomie na míru od IN CATERING.",
  },
  {
    image: "/images/svatby/terezian-klavir-svatba.webp",
    alt: "Tereziánský sál s klavírem – atmosféra pro svatební den",
    title: "Tereziánský sál – detail",
    capacity: "",
    description: "Historický interiér s klavírem pro nezapomenutelnou atmosféru.",
  },
];

export function WeddingGallery() {
  return (
    <section className="bg-brand-black-alt py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Prostory pro váš svatební den
        </h2>
        <div className="mt-16">
          <ImageCarousel slides={weddingSlides} />
        </div>
      </div>
    </section>
  );
}
