import Image from "next/image";
import { headers } from "next/headers";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export async function USPExpanded() {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") || "cs") as Locale;
  const dict = await getDictionary(locale);

  return (
    <section className="bg-brand-black pt-10 pb-20 md:pt-16 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          {dict.uspExpanded.title}
        </h2>
        <div className="mt-16 space-y-20">
          {dict.uspExpanded.items.map((item, index) => (
            <div
              key={item.title}
              className="grid items-center gap-8 md:grid-cols-2"
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <h3 className="text-xl font-bold md:text-2xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-brand-white/70">
                  {item.text}
                </p>
                <div className="mt-4 border-l-2 border-brand-red pl-4">
                  <p className="text-sm font-semibold uppercase tracking-wide text-brand-white/50">
                    {dict.uspExpanded.meaningLabel}
                  </p>
                  <p className="mt-2 leading-relaxed text-brand-white/90">
                    {item.meaning}
                  </p>
                </div>
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
