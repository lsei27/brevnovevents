const benefits = [
  {
    title: "Netto ceny",
    text: "s prostorem pro vaši marži",
  },
  {
    title: "Odpověď na poptávku do 2 hodin",
    text: "v pracovní době – dedikovaný kontakt",
  },
  {
    title: "Familiarizační prohlídka",
    text: "pro váš tým zdarma",
  },
  {
    title: "Technický rider a podklady",
    text: "ke stažení (půdorysy, fotky ve vysokém rozlišení, kapacitní tabulky)",
  },
  {
    title: "Flexibilní spolupráce",
    text: "pracujeme podle vašeho briefu, ne podle šablony",
  },
];

export function AgencyProgram() {
  return (
    <section className="bg-brand-black pb-20 pt-8 md:pb-32 md:pt-12">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Partnerský program pro event agentury
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-brand-white/70">
          Nakupujete venue pro své klienty? Pracujeme s desítkami agentur a
          víme, co potřebujete: rychlou odpověď, netto ceny a spolehlivého
          partnera na místě.
        </p>

        <ul className="mx-auto mt-12 max-w-3xl space-y-6">
          {benefits.map((benefit) => (
            <li key={benefit.title} className="text-brand-white/70">
              <span className="font-bold text-brand-white">
                {benefit.title}
              </span>{" "}
              – {benefit.text}
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <a
            href="mailto:brevnov@incatering.cz"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-3 font-bold text-base uppercase tracking-wide text-white transition-colors duration-200 hover:bg-brand-red-hover"
          >
            Kontaktovat nás pro agenturní podmínky
          </a>
        </div>
      </div>
    </section>
  );
}
