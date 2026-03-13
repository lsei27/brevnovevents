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
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            Břevnovský klášter – eventový prostor pro 20 až 1&nbsp;100 hostů v&nbsp;Praze
          </h1>
          <p className="mt-6 text-lg font-medium leading-relaxed text-white md:text-xl">
            Historické prostory pro komorní meetingy, konference, gala večery i velké firemní akce. Od salonku pro 20 lidí po kongres pro 800&nbsp;– s&nbsp;cateringem od IN&nbsp;CATERING a parkováním zdarma.
          </p>
          <p className="mt-4 text-base font-medium leading-relaxed text-white/80">
            Kde jinde v Praze uspořádáte kongres pro 800 lidí v barokních sálech z&nbsp;10.&nbsp;století – nebo komorní workshop pro 20 v&nbsp;salonku s&nbsp;freskami? 60 parkovacích míst zdarma, 15&nbsp;minut od letiště. Jeden tým pro prostor i catering. Od briefu po debrief.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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
