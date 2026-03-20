import { headers } from "next/headers";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";

export async function VideoTour() {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") || "cs") as Locale;
  const dict = await getDictionary(locale);

  return (
    <section className="bg-brand-black py-20 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">{dict.videoTour.title}</h2>
        <div className="relative mt-12 aspect-video overflow-hidden rounded-2xl">
          <YouTubeEmbed videoId="ESMihQlQ5LI" title={dict.videoTour.videoTitle} />
        </div>
      </div>
    </section>
  );
}
