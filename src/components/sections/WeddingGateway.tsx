import { Button } from "@/components/ui/Button";

const features = [
  "Venkovní obřad v klášterní zahradě",
  "Slavnostní hostina v Tereziánském sále (120 osob banket)",
  "Ubytování v Hotelu Adalbert přímo v areálu",
  "Parkování pro 60 aut zdarma",
];

export function WeddingGateway() {
  return (
    <section
      id="svatby"
      className="relative flex min-h-[50vh] items-center py-20 md:py-32"
    >
      {/* Background image */}
      <img
        src="/images/svatby/vojteska-klasterni-zahrada.webp"
        alt="Svatba v Břevnovském klášteře – venkovní obřad v klášterní zahradě"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/70 to-brand-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Svatba v Břevnovském klášteře
          </h2>
          <p className="mt-4 leading-relaxed text-brand-white/80">
            Barokní sály, klášterní zahrady a catering na míru pro 30 až 200
            hostů. Obřad v zahradě, hostina v sále s freskami, afterparty ve
            vinárně – vše v jednom areálu.
          </p>

          <ul className="mt-8 space-y-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-brand-white/80"
              >
                <span className="mt-0.5 text-brand-pink">✦</span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/svatba-v-klastere" variant="pink">
              Více o svatbách
            </Button>
            <Button
              href="#kontakt"
              variant="secondary"
              className="border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-brand-black"
            >
              Domluvit prohlídku
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
