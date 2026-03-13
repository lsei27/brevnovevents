const uspItems = [
  {
    title: "Kapacita, kterou v historických prostorech v Praze nenajdete",
    text: "Až 1 100 hostů při kombinaci všech podlaží a nádvoří. Pro srovnání: Lobkowiczký palác pojme 350, Martinický palác 200, Kaiserštejnský palác 200, klášter Minoritů 250. Pokud plánujete akci pro 300+ lidí v prostoru s historickou atmosférou, alternativ je v Praze minimum.",
    meaning:
      "Nemusíte dělit akci mezi dva prostory ani řešit logistiku přesunů. Registrace, přednášky, networking, raut i slavnostní večeře – vše na jednom místě.",
  },
  {
    title: "Modularita – paralelní programy pod jednou střechou",
    text: "Dvě podlaží a nádvoří fungují nezávisle. Hlavní program v Tereziánském sále, breakout sessions v salonkách, networking na nádvoří, VIP lounge ve Zlatém salonku – vše v jednom areálu, bez přesunů.",
    meaning:
      "Naplánujete konferenci s třemi paralelními sekcemi stejně snadno jako komorní meeting pro 30 lidí. Přestavbu sálu z konference na banket zvládáme za 60 minut (ověřeno na Speedchain 2024, 800 účastníků).",
  },
  {
    title: "Logistika, kterou centrum Prahy neumí",
    text: "60 parkovacích míst zdarma přímo před areálem. MHD (tramvaj 22, 25) skoro až ke dveřím. Letiště Václava Havla 15 minut autem. V historickém centru je parkování pro 60 aut přímo u venue nemyslitelné.",
    meaning:
      "Hosté neřeší, kde zaparkovat. Zahraniční účastníci přijedou z letiště za čtvrt hodiny. Méně stresu pro organizátora, hladší příjezd pro hosty.",
  },
  {
    title: "Jeden partner pro pronájem prostor i catering",
    text: "IN CATERING provozuje spodní část kláštera a zajišťuje gastronomii v celém klášteře. Odpadá koordinace mezi venue a externím dodavatelem. Jeden kontakt, jeden harmonogram, jedna faktura.",
    meaning:
      "Žádné ping-pongy mezi catererem a správcem budovy. Tým, který prostor zná do posledního detailu, řeší celou akci. Ušetříte čas na koordinaci a snížíte riziko nedorozumění.",
  },
  {
    title: "1 000 let pohostinnosti",
    text: "Nejstarší mužský klášter v Čechách, založený roku 993 knížetem Boleslavem II. a biskupem Vojtěchem. Benediktini tu praktikují pohostinnost přes tisíc let – od královských hostin po mezinárodní kongresy. Žádné kongresové centrum tento příběh nenapodobí.",
    meaning:
      "Váš event získá kontext, který PowerPoint prezentace nevytvoří. Historický prostor dává akci váhu a hosté si ji zapamatují.",
  },
];

export function USPExpanded() {
  return (
    <section className="bg-brand-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Proč si event agentury a firmy vybírají Břevnovský klášter
        </h2>
        <div className="mt-16 flex flex-col gap-8">
          {uspItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-brand-gray-dark/20 bg-brand-black-alt p-8"
            >
              <h3 className="text-xl font-bold md:text-2xl">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-brand-white/70">
                {item.text}
              </p>
              <div className="mt-6 border-l-4 border-brand-red pl-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-white/50">
                  Co to znamená pro vás
                </p>
                <p className="mt-2 leading-relaxed text-brand-white/90">
                  {item.meaning}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
