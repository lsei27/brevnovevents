import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end pb-20 md:items-center md:pb-0">
      <Image
        src="/images/hero/tereziansky-sal-strom-inc.webp"
        alt="Břevnovský klášter – Tereziánský sál připravený na konferenci pro 180 osob"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-brand-black/30" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="max-w-2xl text-left">
          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            Uspořádejte váš event v&nbsp;barokním klenotu Prahy
          </h1>
          <p className="mt-6 text-lg font-medium leading-relaxed text-white md:text-xl">
            Prostory pro 20 až 1&nbsp;100 hostů. Catering, technika i parkování – vše pod jednou střechou.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:justify-start">
            <Button href="#kontakt" variant="primary">
              Domluvit prohlídku
            </Button>
            <Button href="/downloads/technicky-rider-brevnovsky-klaster.pdf" variant="secondary">
              Technický rider
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
