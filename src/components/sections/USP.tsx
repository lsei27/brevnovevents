import { Button } from "@/components/ui/Button";

const uspCards = [
  {
    title: "Kapacita bez kompromisů",
    text: "Až 1 100 hostů – více než Lobkowiczký palác (350), Martinický palác (200) nebo klášter Minoritů (250). Od salonku pro 20 po celý areál.",
  },
  {
    title: "Vše pod jednou střechou",
    text: "Dvě podlaží, nádvoří a zahrady fungují nezávisle. Paralelní program, networking i slavnostní večeře v jednom areálu, bez přesunů.",
  },
  {
    title: "Logistika, která funguje",
    text: "60 parkovacích míst zdarma přímo před areálem. MHD ke dveřím. Letiště 15 minut autem. V centru Prahy toto nenajdete.",
  },
  {
    title: "Jeden tým pro prostor i catering",
    text: "IN CATERING provozuje klášter a zajišťuje gastronomii. Jeden kontakt, jeden harmonogram, jedna faktura. Žádná koordinace mezi dodavateli.",
  },
];

export function USP() {
  return (
    <section className="bg-brand-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Proč si firmy a event agentury vybírají Břevnovský klášter
        </h2>
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {uspCards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-brand-gray-dark/20 bg-brand-black-alt p-8">
              <h3 className="text-xl font-bold md:text-2xl">{card.title}</h3>
              <p className="mt-3 leading-relaxed text-brand-white/70">{card.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="#prostory" variant="secondary">Prohlédnout prostory</Button>
        </div>
      </div>
    </section>
  );
}
