"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "./i18n";

/**
 * Derive locale from the current pathname.
 * Works correctly with client-side navigation (root layout doesn't re-render).
 */
export function useLocale(): Locale {
  const pathname = usePathname();
  return pathname.startsWith("/en") ? "en" : "cs";
}

/**
 * LocaleProvider kept for backwards-compatibility but is now a passthrough.
 * Locale is derived from pathname in useLocale().
 */
export function LocaleProvider({
  children,
}: {
  locale?: Locale;
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
