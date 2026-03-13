import Image from "next/image";
import { Button } from "@/components/ui/Button";

const keyFacts = [
  "800 účastníků, registrace u vstupu (Fortna)",
  "2 paralelní přednáškové sekce (Tereziánský sál + stan na nádvoří)",
  "Rautový oběd v Sala Terreně + rozšíření do venkovního stanu",
  "Přestavba hlavního sálu z konference na banket za 60 minut",
  "Slavnostní večer s vyhlašováním ocenění a afterparty",
];

export function CaseStudy() {
  return (
    <section className="bg-brand-black-alt py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Kongres pro 800 účastníků v historickém prostoru – Speedchain 2024
        </h2>

        <div className="mt-16 grid items-start gap-12 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/reference/dron-pohled-brevnovsky-klaster.webp"
              alt="Břevnovský klášter – pohled z dronu na areál kongresu Speedchain 2024"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Text + stats */}
          <div>
            <p className="leading-relaxed text-brand-white/70">
              Speedchain International 2024 – mezinárodní logistická konference
              ve spolupráci s Reliant s.r.o. Celodenní program s paralelními
              sekcemi, rauty, VIP lounge a slavnostním večerem. Vše v jednom
              areálu, jeden tým.
            </p>

            <ul className="mt-8 list-disc space-y-3 pl-5 text-brand-white/70">
              {keyFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>

            <div className="mt-10">
              <Button href="#kontakt" variant="primary">
                Chci podobnou akci
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
