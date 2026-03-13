const faqs = [
  {
    question: "Jaká je maximální kapacita Břevnovského kláštera pro akce?",
    answer:
      "Až 1 100 osob při využití všech podlaží a nádvoří. Tereziánský sál pojme 180 osob v divadelním sezení, přízemí dalších 300, nádvoří dalších 300. Kombinací prostor zvládneme i akce nad 800 účastníků – viz Speedchain International 2024.",
  },
  {
    question: "Můžeme si přivést vlastního dodavatele cateringu?",
    answer:
      "Catering zajišťuje výhradně IN CATERING – provozovatel klášterních prostor. Díky tomu máte jeden tým, který prostor zná a garantuje bezchybnou logistiku. Nemusíte koordinovat dva dodavatele.",
  },
  {
    question: "Kolik stojí pronájem prostor v Břevnovském klášteře?",
    answer:
      "Přízemí od 15 000 Kč/den, Tereziánský sál 65 000 Kč/den, celé 1. patro 90 000 Kč/den. Kompletní ceník najdete výše. Nabídku na míru včetně cateringu připravíme do 24 hodin – nezávazně.",
  },
  {
    question: "Je v Břevnovském klášteře parkování?",
    answer:
      "Ano. 60 míst zdarma přímo v areálu kláštera. Pro větší akce zajistíme organizaci parkování a navigaci hostů.",
  },
  {
    question: "Je prostor bezbariérový?",
    answer:
      "Přízemí (Sala Terrena, salonky) je přístupné bez schodů. 1. patro (Tereziánský sál) vyžaduje schody – informujte nás předem o požadavcích na přístupnost a najdeme řešení.",
  },
  {
    question: "Jak dlouho dopředu je třeba rezervovat prostory?",
    answer:
      "Pro velké akce (300+ osob) doporučujeme 3–6 měsíců. Pro menší akce často stačí 4–6 týdnů. Podzim a prosinec se plní rychle – čím dříve, tím lépe.",
  },
  {
    question: "Do kolika hodin může akce probíhat?",
    answer:
      "Standardní provoz do 24:00. Prodloužení do 02:00 je možné za příplatek (10 000 Kč/hod., max. 2 hodiny).",
  },
  {
    question: "Zajišťujete AV techniku pro konference?",
    answer:
      "Ano, od ověřených dodavatelů. Základní ozvučení od 6 000 Kč/sál. Kompletní AV řešení (LED stěny, streaming, konferenční mikrofony) kalkulujeme dle potřeb vaší akce.",
  },
  {
    question: "Lze si prostory prohlédnout předem?",
    answer:
      "Prohlídky děláme po domluvě, ideálně v pracovní dny. Pro event agentury nabízíme familiarizační prohlídku zdarma. Virtuální prohlídku najdete na brevnovevents.cz.",
  },
  {
    question: "Plánujeme akci pro 20–50 lidí. Má smysl klášter zvažovat?",
    answer:
      "Ano. Jednotlivé salonky (Zlatý, Modrý, Pompejský, Brandlův) pojmou 20–50 osob a hodí se pro workshopy, board meetingy nebo komorní prezentace. Kontaktujte nás – domluvíme řešení na míru.",
  },
];

export function FAQFiremni() {
  return (
    <section className="bg-brand-black-alt py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Často kladené otázky o pronájmu Břevnovského kláštera
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
