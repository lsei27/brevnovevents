import Image from "next/image";
import { WeddingForm } from "@/components/forms/WeddingForm";

export function WeddingContact() {
  return (
    <section id="kontakt" className="bg-brand-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Domluvte si nezávaznou prohlídku pro snoubence
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-brand-white/60">
          Rádi vám klášter ukážeme a nezávazně probereme možnosti pro vaši
          svatbu. Prohlídka je zdarma.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {/* Contact info */}
          <div>
            <h3 className="text-xl font-bold">Kontakt</h3>
            <div className="mt-6 space-y-4 text-brand-white/70">
              <p>
                <span className="block text-sm font-bold text-brand-white">
                  E-mail
                </span>
                <a
                  href="mailto:brevnov@incatering.cz"
                  className="transition-colors hover:text-brand-white"
                >
                  brevnov@incatering.cz
                </a>
              </p>
              <p>
                <span className="block text-sm font-bold text-brand-white">
                  Telefon
                </span>
                <a
                  href="tel:+420602346729"
                  className="transition-colors hover:text-brand-white"
                >
                  +420 602 346 729
                </a>
              </p>
              <p>
                <span className="block text-sm font-bold text-brand-white">
                  Web
                </span>
                www.brevnovevents.cz
              </p>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl">
              <Image
                src="/images/svatby/bk-ts-2.webp"
                alt="Svatba v Břevnovském klášteře – Tereziánský sál"
                width={600}
                height={400}
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <WeddingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
