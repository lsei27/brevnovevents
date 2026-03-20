import { headers } from "next/headers";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { Button } from "@/components/ui/Button";

export async function SpacesShowcase() {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") || "cs") as Locale;
  const dict = await getDictionary(locale);
  const sectionId = locale === "en" ? "venues" : "prostory";

  return (
    <section id={sectionId} className="bg-brand-black-alt py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          {dict.spaces.title}
        </h2>
        <div className="mt-16">
          <ImageCarousel slides={dict.spaces.items} />
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href={locale === "en" ? "/en/corporate-events" : "/firemni-eventy"} variant="primary">
            {dict.spaces.ctaPrimary}
          </Button>
          <Button
            href="/downloads/technicky-rider-brevnovsky-klaster.pdf"
            variant="secondary"
          >
            {dict.spaces.ctaSecondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
