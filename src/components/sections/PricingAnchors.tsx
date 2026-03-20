"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useLocale } from "@/lib/locale-context";
import cs from "@/lib/dictionaries/cs";
import en from "@/lib/dictionaries/en";
import { Button } from "@/components/ui/Button";

export function PricingAnchors() {
  const locale = useLocale();
  const dict = locale === "en" ? en : cs;
  const t = dict.pricing;
  const contactHref = locale === "en" ? "#contact" : "#kontakt";
  const sectionId = locale === "en" ? "pricing" : "cenik";

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
    <section id={sectionId} className="bg-brand-black-alt py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          {t.title}
        </h2>
        <p className="mt-4 text-center text-brand-white/60">
          {t.subtitle}
        </p>

        <div className="mt-16">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="-ml-6 flex">
              {t.packages.map((pkg) => (
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
                        {t.featured}
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
                        {t.from}
                      </p>
                      <p className="text-3xl font-black text-brand-white">
                        {pkg.price}&nbsp;{t.currency}
                      </p>
                      <p className="mt-2 text-sm text-brand-white/50">
                        {t.priceNote}
                      </p>
                      <p className="mt-1 text-sm text-brand-white/50">
                        {t.price200Label} {pkg.price200}&nbsp;{t.currency}
                      </p>
                    </div>
                    <Button
                      href={contactHref}
                      variant={pkg.featured ? "primary" : "secondary"}
                      className="mt-6 w-full"
                    >
                      {pkg.cta}
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
              aria-label={t.prev}
              className="rounded-full bg-white/20 p-3 backdrop-blur transition-colors hover:bg-white/40"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {t.packages.map((pkg, index) => (
                <button
                  key={`dot-${pkg.venue}-${pkg.name}`}
                  type="button"
                  onClick={() => emblaApi?.scrollTo(index)}
                  aria-label={`${t.goTo} ${index + 1}`}
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
              aria-label={t.next}
              className="rounded-full bg-white/20 p-3 backdrop-blur transition-colors hover:bg-white/40"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-brand-white/40">
          {t.footer}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href={contactHref} variant="primary">{t.ctaPrimary}</Button>
          <Button href={t.ctaSecondaryHref} variant="secondary">{t.ctaSecondary}</Button>
        </div>
      </div>
    </section>
  );
}
