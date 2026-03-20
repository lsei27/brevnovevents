import { headers } from "next/headers";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export async function Location() {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") || "cs") as Locale;
  const dict = await getDictionary(locale);

  return (
    <section className="bg-brand-black-alt py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          {dict.location.title}
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {/* Map */}
          <div className="overflow-hidden rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.2!2d14.3558!3d50.0836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9536e8f9d3a3%3A0x400af0f6614e150!2sB%C5%99evnovsk%C3%BD%20kl%C3%A1%C5%A1ter!5e0!3m2!1scs!2scz!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={dict.location.mapTitle}
            />
          </div>

          {/* Info */}
          <div>
            <h3 className="text-xl font-bold">{dict.location.address}</h3>
            <p className="mt-2 text-sm text-brand-white/60">
              Markétská 28/1, 169 01 Praha 6
            </p>
            <p className="mt-6 leading-relaxed text-brand-white/70">
              {dict.location.note}
            </p>
            <ul className="mt-8 space-y-4">
              {dict.location.transport.map((item) => (
                <li key={item.label}>
                  <span className="block text-sm font-bold text-brand-white">
                    {item.label}
                  </span>
                  <span className="text-brand-white/70">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
