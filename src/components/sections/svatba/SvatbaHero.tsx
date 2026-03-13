import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function SvatbaHero() {
  return (
    <section className="relative flex min-h-[60vh] items-end pb-20 md:pb-32">
      <Image
        src="/images/hero/homepage-hero.webp"
        alt="Svatba v Břevnovském klášteře – slavnostní hostina v Tereziánském sále s barokními freskami"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-brand-black/30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h1 className="max-w-3xl text-4xl font-black md:text-6xl">
          Svatba v Břevnovském klášteře – barokní sály a zahrady v Praze
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-medium text-white md:text-xl">
          Historické prostory pro svatební hostinu, venkovní obřad a catering na
          míru. Pro 30 až 200 hostů.
        </p>
        <p className="mt-4 max-w-2xl font-medium text-white/80">
          Klášter založený roku 993 nabízí prostory, kde se staletá historie
          potkává s elegancí. Obřad v zahradě, hostina v sále s freskami,
          afterparty ve vinárně – vše v jednom areálu, s cateringem od
          IN CATERING.
        </p>
        <div className="mt-8">
          <Button href="#kontakt" variant="pink">
            Domluvit prohlídku pro snoubence
          </Button>
        </div>
      </div>
    </section>
  );
}
