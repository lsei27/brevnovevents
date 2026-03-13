const faqs = [
  {
    question: "Konají se v Břevnovském klášteře svatební obřady?",
    answer:
      "V prostoru Vojtěška v klášterní zahradě se konají civilní svatební obřady. Církevní obřady v bazilice sv. Markéty je třeba domluvit přímo s klášterem.",
  },
  {
    question: "Můžeme si přivést vlastního cateringu?",
    answer:
      "Catering zajišťuje výhradně IN CATERING. Díky tomu máme plnou kontrolu nad kvalitou a logistikou – a vy jeden kontakt místo dvou.",
  },
  {
    question: "Kolik lidí se vejde na svatbu v klášteře?",
    answer:
      "Banketní hostina v Tereziánském sále: 120 osob. V Sala Terreně: 70 osob. Kombinací prostor zvládneme svatby až pro 200 hostů.",
  },
  {
    question: "Je parkování problém?",
    answer: "Ne. 60 míst zdarma přímo v areálu.",
  },
  {
    question: "Do kolika hodin může svatba trvat?",
    answer:
      "Standardně do půlnoci. Prodloužení do 02:00 je možné za příplatek.",
  },
  {
    question: "Jak dlouho dopředu rezervovat?",
    answer:
      "Doporučujeme 6–12 měsíců, zejména pro léto a září. Menší zimní svatby lze domluvit i na kratší dobu.",
  },
];

export function FAQSvatba() {
  return (
    <section className="bg-brand-black-alt py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Často kladené otázky o svatbě v klášteře
        </h2>

        <div className="mt-16">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="border-b border-brand-gray-dark/20 py-4"
            >
              <summary className="cursor-pointer text-lg font-bold hover:text-brand-white/80">
                {faq.question}
              </summary>
              <p className="mt-3 leading-relaxed text-brand-white/70">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
