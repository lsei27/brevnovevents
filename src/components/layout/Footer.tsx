import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Prostory", href: "#prostory" },
  { label: "Firemni eventy", href: "#cenik" },
  { label: "Svatby", href: "#svatby" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Footer() {
  return (
    <footer className="border-t border-brand-gray-dark/30 bg-brand-black-alt">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Logos */}
          <div className="space-y-4">
            <Image
              src="/images/bk-logo.svg"
              alt="Brevnovsky klaster — logo"
              width={160}
              height={45}
            />
            <p className="flex items-center gap-2 text-sm text-brand-gray-dark">
              Provozuje
              <Image
                src="/images/in-catering-logo.svg"
                alt="IN CATERING — logo"
                width={100}
                height={28}
              />
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Paticka">
            <h3 className="mb-4 font-bold text-brand-white">Navigace</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-gray-dark transition-colors hover:text-brand-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-bold text-brand-white">Kontakt</h3>
            <address className="space-y-2 text-sm not-italic text-brand-gray-dark">
              <p>Marketska 1/28</p>
              <p>169 00 Praha 6 — Brevnov</p>
              <p>
                <a
                  href="mailto:brevnov@incatering.cz"
                  className="transition-colors hover:text-brand-white"
                >
                  brevnov@incatering.cz
                </a>
              </p>
              <p>
                <a
                  href="tel:+420602346729"
                  className="transition-colors hover:text-brand-white"
                >
                  +420 602 346 729
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Social media */}
        <div className="mt-8 flex justify-center gap-4">
          {["Instagram", "Facebook", "LinkedIn"].map((name) => (
            <a
              key={name}
              href="#"
              aria-label={name}
              className="text-brand-gray-dark transition-colors hover:text-brand-white"
            >
              {name}
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-brand-gray-dark/30 pt-8 text-center text-sm text-brand-gray-dark">
          <p>
            &copy; 2026 IN CATERING s.r.o. Vsechna prava vyhrazena.
            {" · "}
            <a href="#" className="underline hover:text-brand-white">
              Zasady ochrany osobnich udaju
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
