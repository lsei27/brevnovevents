import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";

export function VideoTour() {
  return (
    <section className="bg-brand-black py-20 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Projděte si klášter virtuálně</h2>
        <div className="relative mt-12 aspect-video overflow-hidden rounded-2xl">
          <YouTubeEmbed videoId="ESMihQlQ5LI" title="Virtuální prohlídka Břevnovského kláštera" />
        </div>
      </div>
    </section>
  );
}
