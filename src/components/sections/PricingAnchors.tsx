import { Button } from "@/components/ui/Button";

const packages = [
  { name: "Konference", persons: "100–200 osob", includes: "Sál, AV technika, catering", price: "180 000", featured: false },
  { name: "Gala večer", persons: "150–300 osob", includes: "Sály + salonky, osvětlení, 4chodové menu", price: "350 000", featured: true },
  { name: "Kongres", persons: "300–800 osob", includes: "Celý areál, plná AV, celodenní catering", price: "600 000", featured: false },
];

export function PricingAnchors() {
  return (
    <section id="cenik" className="bg-brand-black-alt py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Kolik stojí firemní akce v Břevnovském klášteře</h2>
        <p className="mt-4 text-center text-brand-white/60">Orientační ceny. Každou akci kalkulujeme individuálně.</p>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <div key={pkg.name} className={`flex flex-col rounded-2xl border p-8 transition-transform ${pkg.featured ? "border-brand-red bg-brand-black scale-[1.02] md:scale-105" : "border-brand-gray-dark/20 bg-brand-black"}`}>
              {pkg.featured && <span className="mb-4 self-start rounded-full bg-brand-red px-3 py-1 text-xs font-bold uppercase tracking-wide">Nejoblíbenější</span>}
              <h3 className="text-2xl font-bold">{pkg.name}</h3>
              <p className="mt-2 text-sm text-brand-white/60">{pkg.persons}</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-white/70">{pkg.includes}</p>
              <div className="mt-auto pt-8">
                <p className="text-sm text-brand-white/60">od</p>
                <p className="text-3xl font-black text-brand-white">{pkg.price}&nbsp;Kč</p>
              </div>
              <Button href="#kontakt" variant={pkg.featured ? "primary" : "secondary"} className="mt-6 w-full">Nezávazná nabídka</Button>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-brand-white/40">Ceny bez DPH. Menší akce od 20 osob kalkulujeme individuálně.</p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="#kontakt" variant="primary">Nezávazná nabídka na míru — odpovíme do 24 hodin</Button>
          <Button href="/firemni-eventy#balicky" variant="secondary">Zobrazit kompletní ceník a balíčky</Button>
        </div>
      </div>
    </section>
  );
}
