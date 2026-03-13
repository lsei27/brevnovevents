import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function FiremniHero() {
  return (
    <section className="relative flex min-h-screen items-end pb-20 md:items-center md:pb-0">
      <Image
        src="/images/hero/tereziansky-sal-strom-inc.webp"
        alt="Firemní event v Tereziánském sále Břevnovského kláštera"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-brand-black/30" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="max-w-2xl text-left">
          <h1 className="text-4xl font-black md:text-6xl">
            Firemní eventy v Břevnovském klášteře – pronájem historických prostor
            v Praze
          </h1>
          <p className="mt-6 text-lg font-medium text-white md:text-xl">
            Konference, gala večery, product launche a firemní večírky pro 20 až
            1 100 hostů. Barokní sály, nádvoří s kapacitou 300 osob a catering od
            IN CATERING – vše pod jednou střechou.
          </p>
          <div className="mt-8 flex justify-start">
            <Button href="#kontakt" variant="primary">
              Domluvit prohlídku
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
