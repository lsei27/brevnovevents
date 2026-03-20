import Image from "next/image";
import { headers } from "next/headers";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";

export async function Hero() {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") || "cs") as Locale;
  const dict = await getDictionary(locale);

  return (
    <section className="relative flex min-h-screen items-end pb-20 md:items-center md:pb-0">
      <Image
        src="/images/hero/BK_pohled_shora.webp"
        alt={dict.hero.imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-brand-black/30" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="max-w-2xl text-left">
          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            {dict.hero.title}
          </h1>
          <p className="mt-6 text-lg font-medium leading-relaxed text-white md:text-xl">
            {dict.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:justify-start">
            <Button href={locale === "en" ? "#contact" : "#kontakt"} variant="primary">
              {dict.hero.cta}
            </Button>
            <Button href="/downloads/technicky-rider-brevnovsky-klaster.pdf" variant="secondary">
              {dict.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
