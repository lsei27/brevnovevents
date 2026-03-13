import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function SvatbaHero() {
  return (
    <section className="relative flex min-h-screen items-end pb-20 md:items-center md:pb-0">
      <Image
        src="/images/svatby/bk-svatba-zahrady.webp"
        alt="Svatba v Břevnovském klášteře – svatební obřad v klášterní zahradě"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-brand-black/30" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="max-w-2xl text-left">
          <h1 className="text-4xl font-black md:text-5xl">
            Váš den si zaslouží výjimečné místo
          </h1>
          <p className="mt-6 text-lg font-medium text-white md:text-xl">
            Obřad v klášterní zahradě, hostina v barokním sále, afterparty
            ve vinárně – vše v jednom areálu pro 30–200 hostů.
          </p>
          <div className="mt-8 flex justify-start">
            <Button href="#kontakt" variant="pink">
              Domluvit prohlídku pro snoubence
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
