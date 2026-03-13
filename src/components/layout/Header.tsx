"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Prostory", href: "/#prostory" },
  { label: "Firemní eventy", href: "/firemni-eventy" },
  { label: "Svatby", href: "/svatba-v-klastere" },
  { label: "Kontakt", href: "/#kontakt" },
];

export function Header() {
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
        isScrolled ? "bg-brand-black/95 backdrop-blur-md" : "bg-brand-black/25 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Domů">
          <Image
            src="/images/bk-logo.svg"
            alt="Břevnovský klášter – logo"
            width={140}
            height={40}
            priority
          />
          <span className="hidden text-xs text-white lg:block">
            provozuje
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
          {navLinks.map((link) => (
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

        <div className="hidden md:block">
          <Button href="#kontakt" variant="primary">
            Domluvit prohlídku
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Zavřít menu" : "Otevřít menu"}
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
            {navLinks.map((link) => (
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
              <Button href="#kontakt" variant="primary" className="w-full text-center">
                Domluvit prohlídku
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
