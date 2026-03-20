import { headers } from "next/headers";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { ImageCarousel } from "@/components/ui/ImageCarousel";

export async function WeddingGallery() {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") || "cs") as Locale;
  const dict = await getDictionary(locale);

  return (
    <section className="bg-brand-black-alt py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          {dict.weddingGallery.title}
        </h2>
        <div className="mt-16">
          <ImageCarousel slides={dict.weddingGallery.slides} />
        </div>
      </div>
    </section>
  );
}
