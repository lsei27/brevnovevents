import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface PackageCard {
  name: string;
  persons: string;
  featured: boolean;
  includes: string[];
  price: string;
  cta: string;
  reference?: string;
  image: string;
  alt: string;
}

const packages: PackageCard[] = [
  {
    name: "Konference",
    persons: "100–200 osob",
    featured: false,
    includes: [
      "Tereziánský sál – celodenní pronájem (200 m², divadelní sezení až 180 osob)",
      "Základní AV technika: projektor, ozvučení, mikrofony",
      "Welcome drink na nádvoří nebo v Sala Terreně",
      "Catering: 2× coffee break, rautový oběd",
    ],
    price: "180 000",
    cta: "Nezávazná nabídka",
    image: "/images/prostory/tereziansky-sal-konference.webp",
    alt: "Tereziánský sál v konferenčním uspořádání",
  },
  {
    name: "Gala večer",
    persons: "150–300 osob",
    featured: true,
    includes: [
      "Tereziánský sál + Opatská jídelna + přilehlé salonky",
      "AV technika + scénické osvětlení",
      "Welcome drink na nádvoří",
      "Catering: slavnostní 4chodové menu",
    ],
    price: "350 000",
    cta: "Nezávazná nabídka",
    image: "/images/prostory/sala-terrena-raut.webp",
    alt: "Sala Terrena připravená na gala večer s rautem",
  },
  {
    name: "Kongres",
    persons: "300–800 osob",
    featured: false,
    includes: [
      "Celé 1. patro + přízemí + nádvoří",
      "Plná AV výbava (LED obrazovky, streaming, konferenční mikrofony)",
      "Paralelní sekce + VIP lounge",
      "Celodenní catering včetně slavnostní večeře",
    ],
    price: "600 000",
    cta: "Nezávazná nabídka",
    reference: "Reference: Speedchain International 2024 – 800 účastníků",
    image: "/images/prostory/brevnovsky-klaster-pohled-shora.webp",
    alt: "Břevnovský klášter z výšky – celý areál pro kongresové akce",
  },
];

export function Packages() {
  return (
    <section className="bg-brand-black-alt py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Orientační balíčky pro firemní akce – kolik stojí event v klášteře
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-brand-white/70">
          Balíčky slouží jako cenová orientace. Každou akci kalkulujeme
          individuálně dle vašich potřeb.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-3 md:items-start">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`flex flex-col overflow-hidden rounded-2xl border ${
                pkg.featured
                  ? "scale-[1.02] border-brand-red bg-brand-black md:scale-105"
                  : "border-brand-gray-dark/20 bg-brand-black"
              }`}
            >
              <div className="overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.alt}
                  width={400}
                  height={250}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                {pkg.featured && (
                  <span className="mb-4 inline-block self-start rounded-full bg-brand-red px-4 py-1 text-xs font-bold uppercase tracking-wide">
                    Nejoblíbenější
                  </span>
                )}
                <h3 className="text-2xl font-bold">{pkg.name}</h3>
                <p className="mt-1 text-sm text-brand-white/60">
                  {pkg.persons}
                </p>
                <ul className="mt-6 flex-1 space-y-2">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-relaxed text-brand-white/70"
                    >
                      &bull; {item}
                    </li>
                  ))}
                </ul>
                {pkg.reference && (
                  <p className="mt-4 text-xs italic text-brand-white/50">
                    {pkg.reference}
                  </p>
                )}
                <div className="mt-8">
                  <p className="text-sm text-brand-white/60">od</p>
                  <p className="text-3xl font-black">{pkg.price} Kč</p>
                </div>
                <div className="mt-6">
                  <Button
                    href="#kontakt"
                    variant={pkg.featured ? "primary" : "secondary"}
                  >
                    {pkg.cta}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-3xl text-center text-sm text-brand-white/50">
          Ceny jsou orientační, bez DPH. Finální kalkulace závisí na rozsahu
          akce, termínu a požadavcích na techniku a catering. Nabídku na míru
          připravíme do 24 hodin.
        </p>
      </div>
    </section>
  );
}
