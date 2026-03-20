import { headers } from "next/headers";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export async function WeddingProcess() {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") || "cs") as Locale;
  const dict = await getDictionary(locale);

  const steps = dict.weddingProcess.steps;

  return (
    <section className="bg-brand-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          {dict.weddingProcess.title}
        </h2>

        {/* Desktop: horizontal */}
        <div className="mt-16 hidden gap-4 md:grid md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-8 h-px w-full translate-x-1/2 bg-brand-gray-dark/40" />
              )}
              <div className="relative">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-pink text-2xl font-black text-brand-black">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-white/60">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="mt-12 space-y-8 md:hidden">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-pink text-xl font-black text-brand-black">
                  {step.number}
                </span>
                <div className="mt-2 h-full w-px bg-brand-gray-dark/40" />
              </div>
              <div className="pb-4">
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-white/60">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
