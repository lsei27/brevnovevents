"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

  // Close lightbox on Escape, navigate with arrows
  useEffect(() => {
    if (lightboxIndex === null) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % slides.length : null
        );
      if (e.key === "ArrowLeft")
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + slides.length) % slides.length : null
        );
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, slides.length]);

  return (
    <div className="relative">
      {/* Carousel viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-4 md:gap-6">
          {slides.map((slide, index) => (
            <div
              key={slide.title}
              className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <div className="overflow-hidden rounded-2xl bg-brand-black-alt">
                <button
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="group relative aspect-[4/3] w-full overflow-hidden"
                  aria-label={`Zvětšit obrázek: ${slide.title}`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index === 0}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
                    <svg
                      className="h-10 w-10 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                      />
                    </svg>
                  </span>
                </button>
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
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Další"
        className="absolute right-2 top-1/3 hidden -translate-y-1/2 rounded-full bg-white/20 p-3 backdrop-blur transition-colors hover:bg-white/40 md:block"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
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

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Zavřít"
            className="absolute right-4 top-4 z-10 rounded-full bg-white/20 p-3 transition-colors hover:bg-white/40"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex - 1 + slides.length) % slides.length
              );
            }}
            aria-label="Předchozí obrázek"
            className="absolute left-4 z-10 rounded-full bg-white/20 p-3 transition-colors hover:bg-white/40"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image + info */}
          <div
            className="flex max-h-[90vh] max-w-5xl flex-col items-center px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-lg md:aspect-[16/9]">
              <Image
                src={slides[lightboxIndex].image}
                alt={slides[lightboxIndex].alt}
                fill
                sizes="(max-width: 1280px) 90vw, 1200px"
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold">
                {slides[lightboxIndex].title}
              </h3>
              {slides[lightboxIndex].capacity && (
                <p className="mt-1 text-sm text-brand-red">
                  {slides[lightboxIndex].capacity}
                </p>
              )}
              <p className="mt-1 text-sm text-brand-white/60">
                {slides[lightboxIndex].description}
              </p>
              <p className="mt-2 text-xs text-brand-white/40">
                {lightboxIndex + 1} / {slides.length}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % slides.length);
            }}
            aria-label="Další obrázek"
            className="absolute right-4 z-10 rounded-full bg-white/20 p-3 transition-colors hover:bg-white/40"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
