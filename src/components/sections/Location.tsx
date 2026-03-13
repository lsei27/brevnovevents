const transportInfo = [
  { label: "MHD", value: "Tramvaj č. 22, 25 – zastávka Břevnovský klášter" },
  { label: "Parkování", value: "60 míst zdarma před areálem" },
  { label: "Letiště", value: "15 min. autem" },
  { label: "Centrum", value: "20 min. tramvají" },
];

export function Location() {
  return (
    <section className="bg-brand-black-alt py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Kde nás najdete – Praha 6, Břevnov
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {/* Map */}
          <div className="overflow-hidden rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1106.9911271640362!2d14.356213153260008!3d50.08408041332804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9570980d8ef9%3A0x7beb2aa78412e531!2zQsWZZXZub3Zza8O9IGtsw6HFoXRlciDigJMgU3Byw6F2YSBCxZlldm5vdnNrw6lobyBrbMOhxaF0ZXJhIHMuci5vLg!5e0!3m2!1scs!2scz!4v1773395285181!5m2!1scs!2scz"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Břevnovský klášter na mapě"
              className="h-full min-h-[300px] w-full"
            />
          </div>

          {/* Contact info */}
          <div>
            <address className="not-italic">
              <p className="text-xl font-bold">Břevnovský klášter</p>
              <p className="mt-2 text-brand-white/70">
                Markétská 1/28
                <br />
                169 00 Praha 6 – Břevnov
              </p>
            </address>

            <div className="mt-8 space-y-4">
              {transportInfo.map((info) => (
                <div key={info.label} className="flex gap-4">
                  <span className="w-24 shrink-0 text-sm font-bold text-brand-red">
                    {info.label}
                  </span>
                  <span className="text-sm text-brand-white/70">
                    {info.value}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm italic text-brand-white/50">
              Klášterní areál leží v zeleni, stranou městského ruchu. Hosté
              ocení klid i snadnou dostupnost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
