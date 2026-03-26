import Image from "next/image";

export function EventBanner() {
  return (
    <section className="relative flex items-center overflow-hidden py-16 md:py-24">
      {/* Background image */}
      <Image
        src="/images/firemni/nadvori-banner.webp"
        alt="Firemní event na nádvoří Břevnovského kláštera"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/85 via-brand-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">
            Genius loci od roku 993
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight md:text-4xl">
            Prostory, které dodají vašemu eventu
            <br className="hidden md:block" />
            {" "}noblesy a&nbsp;prestiže
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-white/75 md:text-lg">
            Barokní sály, klášterní nádvoří a historická vinárna — každý detail
            podtrhne výjimečnost vaší akce. Žádný hotelový standard, ale
            autentický zážitek s&nbsp;příběhem starým přes tisíc let.
          </p>
        </div>
      </div>
    </section>
  );
}
