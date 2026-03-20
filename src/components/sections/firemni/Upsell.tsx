import Image from "next/image";
import { headers } from "next/headers";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export async function Upsell() {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") || "cs") as Locale;
  const dict = await getDictionary(locale);
  const u = dict.upsell;

  return (
    <section className="bg-brand-black-alt py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          {u.title}
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {u.cards.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-2xl border border-brand-gray-dark/20 bg-brand-black"
            >
              <div className="overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={400}
                  height={250}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p className="mt-4 leading-relaxed text-brand-white/70">
                  {card.text}
                </p>
                <p className="mt-4 text-sm font-bold text-brand-red">
                  {card.price} {u.vatNote}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-brand-gray-dark/20 bg-brand-black p-8 md:p-12">
          <h3 className="mb-8 text-center text-2xl font-bold">{u.moreTitle}</h3>
          <ul className="grid gap-6 md:grid-cols-2">
            {u.extras.map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between rounded-xl bg-brand-black-alt p-4 transition-colors hover:bg-brand-gray-dark/10"
              >
                <div className="flex-1">
                  <span className="font-semibold text-brand-white">{item.name}</span>
                </div>
                <div className="ml-4 whitespace-nowrap text-right">
                  <span className="text-sm font-bold text-brand-red">{item.price}</span>
                  <span className="ml-1 text-xs text-brand-white/50">{u.vatNote}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-center text-sm text-brand-white/50">
          {u.footer}
        </p>
      </div>
    </section>
  );
}
