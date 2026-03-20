import { headers } from "next/headers";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import Image from "next/image";

export async function WhyMonastery() {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") || "cs") as Locale;
  const dict = await getDictionary(locale);

  const reasons = dict.whyMonastery.reasons;

  return (
    <section className="bg-brand-black-alt py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          {dict.whyMonastery.title}
        </h2>

        <div className="mt-12 overflow-hidden rounded-2xl">
          <Image
            src="/images/svatby/svatba-exterier.webp"
            alt={dict.whyMonastery.imageAlt}
            width={1200}
            height={500}
            className="h-[28rem] w-full object-cover md:h-[32rem]"
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
