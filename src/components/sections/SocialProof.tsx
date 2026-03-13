"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/Button";

interface Stat {
  number: string;
  label: string;
}

interface Reference {
  title: string;
  image: string;
  alt: string;
  description: string;
  stats: Stat[];
}

const references: Reference[] = [
  {
    title: "800 účastníků, jeden areál, jeden tým – Speedchain 2024",
    image: "/images/reference/speedchain-brevnov.webp",
    alt: "Speedchain 2024 – konference pro 800 účastníků v Břevnovském klášteře",
    description:
      "Speedchain International 2024 – mezinárodní logistická konference. Celodenní program s paralelními sekcemi, rauty, VIP lounge a slavnostním večerem. Přestavba sálu z konference na banket za 60 minut.",
    stats: [
      { number: "800", label: "účastníků" },
      { number: "2", label: "paralelní sekce" },
      { number: "60 min", label: "přestavba sálu" },
      { number: "1", label: "tým pro vše" },
    ],
  },
  {
    title: "Gala večeře pro 120 hostů – Evropa 2 v Tereziánském sále",
    image: "/images/reference/gala-evropa-2.webp",
    alt: "Gala večeře Evropa 2 – slavnostní večer pro 120 hostů v Tereziánském sále Břevnovského kláštera",
    description:
      "Gala večeře pro skupinu Active Radio (Evropa 2, Frekvence 1, Bonton Radio). Tematická výzdoba inspirovaná přírodou a lesem, slavnostní menu v Tereziánském sále s afterparty v Sala Terreně a Benediktinské vinárně.",
    stats: [
      { number: "120", label: "hostů" },
      { number: "2", label: "prostory večera" },
      { number: "1", label: "kompletní catering" },
      { number: "1", label: "tematická výzdoba" },
    ],
  },
];

export function SocialProof() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
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
    <section className="bg-brand-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {references.map((ref) => (
                <div key={ref.title} className="min-w-0 flex-[0_0_100%]">
                  <h2 className="text-center text-3xl font-bold md:text-4xl">
                    {ref.title}
                  </h2>
                  <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
                    <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                      <img
                        src={ref.image}
                        alt={ref.alt}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="mb-8 leading-relaxed text-brand-white/70">
                        {ref.description}
                      </p>
                      <div className="grid grid-cols-2 gap-6">
                        {ref.stats.map((stat) => (
                          <div key={stat.label}>
                            <p className="text-5xl font-black text-brand-red">
                              {stat.number}
                            </p>
                            <p className="mt-1 text-sm text-brand-white/60">
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8">
                        <Button href="#kontakt" variant="secondary">
                          Chci podobnou akci
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Předchozí reference"
            className="absolute left-0 top-1/2 hidden -translate-x-4 -translate-y-1/2 rounded-full bg-white/20 p-3 backdrop-blur transition-colors hover:bg-white/40 md:block"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Další reference"
            className="absolute right-0 top-1/2 hidden -translate-x-[-1rem] -translate-y-1/2 rounded-full bg-white/20 p-3 backdrop-blur transition-colors hover:bg-white/40 md:block"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {references.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Reference ${index + 1}`}
              className="group flex items-center justify-center p-2"
            >
              <span
                className={`h-2.5 w-2.5 rounded-full transition-colors ${index === selectedIndex ? "bg-brand-white" : "bg-brand-white/30 group-hover:bg-brand-white/50"}`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
