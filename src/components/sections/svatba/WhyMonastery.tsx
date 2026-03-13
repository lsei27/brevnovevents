const reasons = [
  {
    title: "Historie, kterou cítíte.",
    text: "Klášter z roku 993 – fresky, klenby, zahrady s rybníky. Prostor s duší, ne kulisa.",
  },
  {
    title: "V Praze, ne hodinu za Prahou.",
    text: "Žádné dojíždění na zámek. Hosté přijedou tramvají nebo zaparkují v areálu (60 míst zdarma).",
  },
  {
    title: "Jeden tým pro vše.",
    text: "Prostor i catering řešíte s IN CATERING. Jeden kontakt, ne tři dodavatelé.",
  },
  {
    title: "Flexibilní prostory.",
    text: "Obřad venku, hostina v sále, afterparty ve vinárně – vše v jednom areálu, bez přesunů.",
  },
  {
    title: "Ubytování v areálu.",
    text: "Hotel Adalbert přímo v klášteře – pohodlí pro novomanžele i hosty.",
  },
];

import Image from "next/image";

export function WhyMonastery() {
  return (
    <section className="bg-brand-black-alt py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Co odlišuje klášter od hotelových a zámeckých svateb
        </h2>

        <div className="mt-12 overflow-hidden rounded-2xl">
          <Image
            src="/images/svatby/svatba-exterier.webp"
            alt="Nádvoří Břevnovského kláštera – historický prostor pro svatební den"
            width={1200}
            height={500}
            className="h-64 w-full object-cover md:h-80"
          />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`rounded-2xl border border-brand-gray-dark/20 bg-brand-black p-6${
                index === reasons.length - 1 ? " sm:col-span-2" : ""
              }`}
            >
              <h3 className="text-lg font-bold">{reason.title}</h3>
              <p className="mt-2 leading-relaxed text-brand-white/70">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
