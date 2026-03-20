import { headers } from "next/headers";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { ImageCarousel } from "@/components/ui/ImageCarousel";

export async function SpacesGallery() {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") || "cs") as Locale;
  const dict = await getDictionary(locale);
  const { title, items } = dict.spacesGallery;

  return (
    <section className="bg-brand-black-alt py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          {title}
        </h2>
        <div className="mt-16">
          <ImageCarousel slides={items} />
        </div>
      </div>
    </section>
  );
}
