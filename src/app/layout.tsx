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
  title: "Břevnovský klášter — eventové prostory Praha | brevnovevents.cz",
  description:
    "Pronájem historických prostor pro firemní akce a svatby v Praze. Od komorního meetingu pro 20 osob po kongres pro 1 100 hostů. Parkování zdarma. Provozuje IN CATERING.",
  openGraph: {
    title: "Břevnovský klášter — eventové prostory v Praze",
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
      <body className="font-sans antialiased">
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
      </body>
    </html>
  );
}
