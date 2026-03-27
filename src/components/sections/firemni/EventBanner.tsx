import Image from "next/image";
import { headers } from "next/headers";
import type { Locale } from "@/lib/i18n";

export async function EventBanner() {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") || "cs") as Locale;

  const isEN = locale === "en";

  return (
    <section className="relative flex items-center overflow-hidden py-16 md:py-24">
      {/* Background image */}
      <Image
        src="/images/firemni/nadvori-banner.webp"
        alt={
          isEN
            ? "Corporate event at Brevnov Monastery courtyard"
            : "Firemní event na nádvoří Břevnovského kláštera"
        }
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/85 via-brand-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">
            {isEN ? "Genius loci since 993" : "Genius loci od roku 993"}
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight md:text-4xl">
            {isEN ? (
              <>
                Venues that lend your event
                <br className="hidden md:block" />
                {" "}nobility and&nbsp;prestige
              </>
            ) : (
              <>
                Prostory, které dodají vašemu eventu
                <br className="hidden md:block" />
                {" "}noblesy a&nbsp;prestiže
              </>
            )}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-white/75 md:text-lg">
            {isEN
              ? "Baroque halls, a monastery courtyard and a historic wine cellar — every detail elevates your event beyond the ordinary. Not a hotel ballroom, but an authentic experience steeped in\u00a0over a thousand years of\u00a0history."
              : "Barokní sály, klášterní nádvoří a historická vinárna — každý detail podtrhne výjimečnost vaší akce. Žádný hotelový standard, ale autentický zážitek s\u00a0příběhem starým přes tisíc let."}
          </p>
        </div>
      </div>
    </section>
  );
}
