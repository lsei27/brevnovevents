import Image from "next/image";
import { headers } from "next/headers";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export async function WeddingSpaces() {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") || "cs") as Locale;
  const dict = await getDictionary(locale);

  return (
    <section className="bg-brand-black pt-10 pb-20 md:pt-16 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          {dict.weddingSpaces.title}
        </h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {dict.weddingSpaces.items.map((space) => (
            <div
              key={space.title}
              className="overflow-hidden rounded-2xl border border-brand-gray-dark/20 bg-brand-black-alt"
            >
              <Image
                src={space.image}
                alt={space.alt}
                width={600}
                height={300}
                className="h-96 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">{space.title}</h3>
                <p className="mt-2 leading-relaxed text-brand-white/70">
                  {space.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-brand-white/50">
          {dict.weddingSpaces.note}
        </p>
      </div>
    </section>
  );
}
