import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  getEventVenueSchema,
  getLocalBusinessSchema,
  getVideoObjectSchema,
  getBreadcrumbSchema,
} from "@/lib/schema";
import { CookieConsent } from "@/components/ui/CookieConsent";
import Script from "next/script";
import "./globals.css";

const satoshi = localFont({
  src: [
    { path: "../../public/fonts/Satoshi-Light.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/Satoshi-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brevnovevents.cz"),
  title: "Břevnovský klášter – eventové prostory Praha | brevnovevents.cz",
  description:
    "Pronájem historických prostor pro firemní akce a svatby v Praze. Od komorního meetingu pro 20 osob po kongres pro 1 100 hostů. Parkování zdarma. Provozuje IN CATERING.",
  openGraph: {
    title: "Břevnovský klášter – eventové prostory v Praze",
    description:
      "Historické prostory pro 20–1 100 hostů. Konference, gala večery, firemní akce i svatby. Parkování zdarma, catering od IN CATERING.",
    url: "https://brevnovevents.cz",
    siteName: "brevnovevents.cz",
    locale: "cs_CZ",
    type: "website",
  },
  alternates: {
    canonical: "https://brevnovevents.cz",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemas = [
    getEventVenueSchema(),
    getLocalBusinessSchema(),
    getVideoObjectSchema(),
    getBreadcrumbSchema(),
  ];

  return (
    <html lang="cs" className={satoshi.variable}>
      <head>
        {/* Google Consent Mode v2 — must run before any Google scripts */}
        <Script
          id="google-consent-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'wait_for_update': 500,
                'region': ['CZ', 'AT', 'BE', 'BG', 'HR', 'CY', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'IS', 'LI', 'NO', 'GB', 'CH']
              });
              gtag('consent', 'default', {
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'analytics_storage': 'granted'
              });
            `,
          }}
        />
        {/* GA4 is now loaded via Google Tag Manager (GTM-PSPHVDMV) */}
        {/* Google Tag Manager — for future marketing tags */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PSPHVDMV');`,
          }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PSPHVDMV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <a href="#hlavni-obsah" className="skip-link">
          Přejít na obsah
        </a>
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            suppressHydrationWarning
          >
            {JSON.stringify(schema)}
          </script>
        ))}
        <Header />
        <main id="hlavni-obsah">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
