"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/Button";

interface Package {
  name: string;
  venue: string;
  persons: string;
  includes: string;
  price: string;
  price200: string;
  featured: boolean;
}

const packages: Package[] = [
  // Reprezentační prostory – 1. patro
  { name: "Konference · 1. patro", venue: "Reprezentační prostory", persons: "100 osob", includes: "Sál, AV technika, 2× coffee break + oběd", price: "210 000", price200: "310 000", featured: false },
  { name: "Gala večeře · 1. patro", venue: "Reprezentační prostory", persons: "100 osob", includes: "Sál + salonky, welcome drink, 3chodové menu, nápoje", price: "265 000", price200: "440 000", featured: true },
  { name: "Firemní večírek · 1. patro", venue: "Reprezentační prostory", persons: "100 osob", includes: "Sál, welcome drink, bufetová večeře, nápoje", price: "235 000", price200: "380 000", featured: false },
  // Klášterní prostory – přízemí
  { name: "Konference · přízemí", venue: "Klášterní prostory", persons: "100 osob", includes: "Sala Terrena + salonky, AV technika, 2× coffee break + oběd", price: "175 000", price200: "275 000", featured: false },
  { name: "Firemní večírek · přízemí", venue: "Klášterní prostory", persons: "100 osob", includes: "Sala Terrena, welcome drink, bufetová večeře, nápoje", price: "200 000", price200: "345 000", featured: false },
];

export function PricingAnchors() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="cenik" className="bg-brand-black-alt py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Kolik stojí firemní akce v Břevnovském klášteře
        </h2>
        <p className="mt-4 text-center text-brand-white/60">
          Orientační ceny. Každou akci kalkulujeme individuálně.
        </p>

        <div className="mt-16">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="-ml-6 flex">
              {packages.map((pkg) => (
                <div
                  key={`${pkg.venue}-${pkg.name}`}
                  className="min-w-0 flex-[0_0_85%] pl-6 sm:flex-[0_0_48%] lg:flex-[0_0_33.333%]"
                >
                  <div
                    className={`flex h-full flex-col rounded-2xl border p-8 ${
                      pkg.featured
                        ? "border-brand-red bg-brand-black"
                        : "border-brand-gray-dark/20 bg-brand-black"
                    }`}
                  >
                    {pkg.featured && (
                      <span className="mb-4 self-start rounded-full bg-brand-red px-3 py-1 text-xs font-bold uppercase tracking-wide">
                        Nejoblíbenější
                      </span>
                    )}
                    <h3 className="text-2xl font-bold">{pkg.name}</h3>
                    <p className="mt-2 text-sm text-brand-white/60">
                      {pkg.persons}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-brand-white/70">
                      {pkg.includes}
                    </p>
                    <div className="mt-auto pt-8">
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-red">
                        {pkg.venue}
                      </p>
                      <p className="mt-2 text-sm text-brand-white/60">
                        od
                      </p>
                      <p className="text-3xl font-black text-brand-white">
                        {pkg.price}&nbsp;Kč
                      </p>
                      <p className="mt-2 text-sm text-brand-white/50">
                        orientační cena akce pro 100 osob
                      </p>
                      <p className="mt-1 text-sm text-brand-white/50">
                        200 osob od {pkg.price200}&nbsp;Kč
                      </p>
                    </div>
                    <Button
                      href="#kontakt"
                      variant={pkg.featured ? "primary" : "secondary"}
                      className="mt-6 w-full"
                    >
                      Nezávazná nabídka
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows – below carousel */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Předchozí"
              className="rounded-full bg-white/20 p-3 backdrop-blur transition-colors hover:bg-white/40"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {packages.map((pkg, index) => (
                <button
                  key={`dot-${pkg.venue}-${pkg.name}`}
                  type="button"
                  onClick={() => emblaApi?.scrollTo(index)}
                  aria-label={`Přejít na balíček ${index + 1}`}
                  className="group flex items-center justify-center p-2"
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full transition-colors ${
                      index === selectedIndex
                        ? "bg-brand-white"
                        : "bg-brand-white/30 group-hover:bg-brand-white/50"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={scrollNext}
              aria-label="Další"
              className="rounded-full bg-white/20 p-3 backdrop-blur transition-colors hover:bg-white/40"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-brand-white/40">
          Ceny bez DPH. Menší akce od 20 osob kalkulujeme individuálně.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="#kontakt" variant="primary">Nabídka na míru</Button>
          <Button href="/firemni-eventy#cenik" variant="secondary">Kompletní ceník</Button>
        </div>
      </div>
    </section>
  );
}
