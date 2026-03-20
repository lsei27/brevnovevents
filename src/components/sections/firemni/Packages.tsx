"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/lib/locale-context";
import cs from "@/lib/dictionaries/cs";
import en from "@/lib/dictionaries/en";

export function Packages() {
  const locale = useLocale();
  const dict = locale === "en" ? en : cs;
  const d = dict.packagesDetail;

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
    <section className="bg-brand-black-alt py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          {d.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-brand-white/70">
          {d.subtitle}
        </p>

        <div className="mt-16">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="-ml-6 flex">
              {d.packages.map((pkg) => (
                <div
                  key={`${pkg.venue}-${pkg.name}`}
                  className="min-w-0 flex-[0_0_85%] pl-6 sm:flex-[0_0_48%] lg:flex-[0_0_33.333%]"
                >
                  <div
                    className={`flex h-full flex-col overflow-hidden rounded-2xl border ${
                      pkg.featured
                        ? "border-brand-red bg-brand-black"
                        : "border-brand-gray-dark/20 bg-brand-black"
                    }`}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={pkg.image}
                        alt={pkg.alt}
                        width={400}
                        height={250}
                        className="h-48 w-full object-cover"
                      />
                      {pkg.featured && (
                        <span className="absolute right-3 top-3 rounded-full bg-brand-red px-4 py-1.5 text-xs font-bold uppercase tracking-wide shadow-lg">
                          {d.featured}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-8">
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
                      <div className="mt-8">
                        <p className="text-xs font-semibold uppercase tracking-wider text-brand-red">
                          {pkg.venue}
                        </p>
                        <p className="mt-2 text-sm text-brand-white/60">
                          {d.from}
                        </p>
                        <p className="text-3xl font-black">
                          {pkg.price} {d.currency}
                        </p>
                        <p className="mt-2 text-sm text-brand-white/50">
                          {d.priceNote}
                        </p>
                        <p className="mt-1 text-sm text-brand-white/50">
                          {d.price200Label} {pkg.price200} {d.currency}
                        </p>
                      </div>
                      <div className="mt-6">
                        <Button
                          href={locale === "en" ? "#contact" : "#kontakt"}
                          variant={pkg.featured ? "primary" : "secondary"}
                        >
                          {pkg.cta}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows + Dots – below carousel */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label={d.prev}
              className="rounded-full bg-white/20 p-3 backdrop-blur transition-colors hover:bg-white/40"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {d.packages.map((pkg, index) => (
                <button
                  key={`dot-${pkg.venue}-${pkg.name}`}
                  type="button"
                  onClick={() => emblaApi?.scrollTo(index)}
                  aria-label={`${d.goTo} ${index + 1}`}
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
              aria-label={d.next}
              className="rounded-full bg-white/20 p-3 backdrop-blur transition-colors hover:bg-white/40"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-sm text-brand-white/50">
          {d.footer}
        </p>
      </div>
    </section>
  );
}
