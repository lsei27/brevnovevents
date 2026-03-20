export type Locale = "cs" | "en";

export const defaultLocale: Locale = "cs";
export const locales: Locale[] = ["cs", "en"];

/** URL slug mapping between locales */
export const routeMap: Record<string, Record<Locale, string>> = {
  home: { cs: "/", en: "/en" },
  corporate: { cs: "/firemni-eventy", en: "/en/corporate-events" },
  wedding: { cs: "/svatba-v-klastere", en: "/en/wedding-venue" },
  gdpr: { cs: "/gdpr", en: "/en/privacy-policy" },
};

/** Given a pathname, find the equivalent path in the target locale */
export function getAlternatePath(pathname: string, targetLocale: Locale): string {
  for (const route of Object.values(routeMap)) {
    const currentLocale = pathname.startsWith("/en") ? "en" : "cs";
    if (route[currentLocale] === pathname || route[currentLocale] + "/" === pathname) {
      return route[targetLocale];
    }
  }
  // Fallback: just toggle /en prefix
  if (targetLocale === "en") {
    return `/en${pathname}`;
  }
  return pathname.replace(/^\/en/, "") || "/";
}

/** Detect locale from pathname */
export function getLocaleFromPathname(pathname: string): Locale {
  return pathname.startsWith("/en") ? "en" : "cs";
}
