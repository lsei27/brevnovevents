import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export async function Footer() {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") || "cs") as Locale;
  const dict = await getDictionary(locale);

  return (
    <footer className="border-t border-brand-gray-dark/30 bg-brand-black-alt">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Logos */}
          <div className="space-y-4">
            <Image
              src="/images/bk-logo.svg"
              alt={dict.header.logoAlt}
              width={160}
              height={45}
            />
            <p className="flex items-center gap-2 text-sm text-white/70">
              {dict.footer.operatedBy}
              <a
                href="https://incatering.cz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/in-catering-logo.svg"
                  alt="IN CATERING – logo"
                  width={100}
                  height={28}
                />
              </a>
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label={dict.footer.navigation}>
            <h3 className="mb-4 font-bold text-brand-white">{dict.footer.navigation}</h3>
            <ul className="space-y-2">
              {dict.footer.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-bold text-brand-white">{dict.footer.contact}</h3>
            <address className="space-y-2 text-sm not-italic text-white/70">
              <p>Markétská 1/28</p>
              <p>169 00 Praha 6 – Břevnov</p>
              <p>
                <a
                  href="mailto:brevnov@incatering.cz"
                  className="transition-colors hover:text-white"
                >
                  brevnov@incatering.cz
                </a>
              </p>
              <p>
                <a
                  href="tel:+420602346729"
                  className="transition-colors hover:text-white"
                >
                  +420 602 346 729
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Social media */}
        <div className="mt-8 flex justify-center gap-6">
          {[
            { name: "Facebook", href: "https://www.facebook.com/INCATERING.CZ/?locale=cs_CZ" },
            { name: "Instagram", href: "https://www.instagram.com/in_catering_cz/" },
            { name: "LinkedIn", href: "https://www.linkedin.com/showcase/in-catering-cz/?originalSubdomain=cz" },
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-white/70 transition-colors hover:text-white"
            >
              {social.name}
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-brand-gray-dark/30 pt-8 text-center text-sm text-white/50">
          <p>
            &copy; 2026 {dict.footer.copyright}
            {" · "}
            <Link href={dict.footer.privacyHref} className="underline hover:text-white">
              {dict.footer.privacy}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
