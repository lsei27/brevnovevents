"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/lib/locale-context";
import { getAlternatePath } from "@/lib/i18n";
import cs from "@/lib/dictionaries/cs";
import en from "@/lib/dictionaries/en";

export function Header() {
  const locale = useLocale();
  const dict = locale === "en" ? en : cs;

  const pathname = usePathname();
  const alternateLang = locale === "en" ? "cs" : "en";
  const alternateHref = getAlternatePath(pathname, alternateLang);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-brand-black/95 backdrop-blur-md" : "bg-brand-black/10 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link 
          href={locale === "en" ? "/en" : "/"} 
          className="flex items-center gap-3" 
          aria-label={dict.header.logoAlt}
        >
          <Image
            src="/images/bk-logo.svg"
            alt={dict.header.logoAlt}
            width={140}
            height={40}
            priority
          />
          <span className="hidden text-xs text-white lg:block">
            {dict.header.operatedBy}
            <Image
              src="/images/in-catering-logo.svg"
              alt="IN CATERING"
              width={70}
              height={20}
              className="ml-1 inline-block align-middle"
            />
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {dict.header.nav.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-base font-bold text-white transition-colors hover:text-white/80"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          {/* Use <a> instead of <Link> to force full page reload —
              root layout must re-execute to update <html lang> and server components */}
          <a
            href={alternateHref}
            className="text-sm font-bold uppercase text-white/70 transition-colors hover:text-white"
            hrefLang={alternateLang}
          >
            {alternateLang.toUpperCase()}
          </a>
          <Button href={dict.header.ctaHref} variant="primary">
            {dict.header.cta}
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? dict.header.closeMenu : dict.header.openMenu}
          aria-expanded={isMobileOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${
              isMobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${
              isMobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${
              isMobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="border-t border-brand-gray-dark/30 bg-brand-black/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {dict.header.nav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-lg font-bold text-white"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Button href={dict.header.ctaHref} variant="primary" className="w-full text-center">
                {dict.header.cta}
              </Button>
            </li>
            <li>
              <a
                href={alternateHref}
                className="block text-center text-sm font-bold uppercase text-white/70 transition-colors hover:text-white"
                hrefLang={alternateLang}
              >
                {alternateLang === "en" ? "English" : "Česky"}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
