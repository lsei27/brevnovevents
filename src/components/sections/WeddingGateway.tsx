import { headers } from "next/headers";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";

export async function WeddingGateway() {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") || "cs") as Locale;
  const dict = await getDictionary(locale);

  return (
    <section
      id="svatby"
      className="relative flex min-h-[50vh] items-center py-20 md:py-32"
    >
      {/* Background image */}
      <img
        src="/images/svatby/vojteska-klasterni-zahrada.webp"
        alt={dict.weddingGateway.imageAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/70 to-brand-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            {dict.weddingGateway.title}
          </h2>
          <p className="mt-4 leading-relaxed text-brand-white/80">
            {dict.weddingGateway.text}
          </p>

          <ul className="mt-8 space-y-3">
            {dict.weddingGateway.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-brand-white/80"
              >
                <span className="mt-0.5 text-brand-pink">✦</span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href={dict.weddingGateway.ctaPrimaryHref} variant="pink">
              {dict.weddingGateway.ctaPrimary}
            </Button>
            <Button
              href={locale === "en" ? "#contact" : "#kontakt"}
              variant="secondary"
              className="border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-brand-black"
            >
              {dict.weddingGateway.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
