"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface Slide {
  image: string;
  alt: string;
  title: string;
  capacity: string;
  description: string;
}

interface ImageCarouselProps {
  slides: Slide[];
}

export function ImageCarousel({ slides }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

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
    <div className="relative">
      {/* Carousel viewport with CSS scroll-snap fallback */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-4 md:gap-6">
          {slides.map((slide, index) => (
            <div
              key={slide.title}
              className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <div className="overflow-hidden rounded-2xl bg-brand-black-alt">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold">{slide.title}</h3>
                  <p className="mt-1 text-sm text-brand-red">
                    {slide.capacity}
                  </p>
                  <p className="mt-2 text-sm text-brand-white/60">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop arrows */}
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Předchozí"
        className="absolute left-2 top-1/3 hidden -translate-y-1/2 rounded-full bg-white/20 p-3 backdrop-blur transition-colors hover:bg-white/40 md:block"
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
        aria-label="Další"
        className="absolute right-2 top-1/3 hidden -translate-y-1/2 rounded-full bg-white/20 p-3 backdrop-blur transition-colors hover:bg-white/40 md:block"
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

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Přejít na slide ${index + 1}`}
            className={`h-2 w-2 rounded-full transition-colors ${index === selectedIndex ? "bg-brand-white" : "bg-brand-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
}
