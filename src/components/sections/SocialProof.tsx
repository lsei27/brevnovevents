import { Button } from "@/components/ui/Button";

const stats = [
  { number: "800", label: "účastníků" },
  { number: "2", label: "paralelní sekce" },
  { number: "60 min", label: "přestavba sálu" },
  { number: "1", label: "tým pro vše" },
];

export function SocialProof() {
  return (
    <section className="bg-brand-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">800 účastníků, jeden areál, jeden tým — Speedchain 2024</h2>
        <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <img src="/images/reference/dron-pohled-brevnovsky-klaster.webp" alt="Speedchain 2024 — letecký pohled na Břevnovský klášter, místo konference pro 800 účastníků" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="mb-8 leading-relaxed text-brand-white/70">Speedchain International 2024 — mezinárodní logistická konference. Celodenní program s paralelními sekcemi, rauty, VIP lounge a slavnostním večerem. Přestavba sálu z konference na banket za 60 minut.</p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-5xl font-black text-brand-red">{stat.number}</p>
                  <p className="mt-1 text-sm text-brand-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button href="#kontakt" variant="secondary">Chci podobnou akci</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
