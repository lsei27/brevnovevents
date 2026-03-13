import type { Metadata } from "next";
import localFont from "next/font/local";
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
  title: "Brevnovsky klaster — eventove prostory Praha | brevnovevents.cz",
  description:
    "Pronajem historickych prostor pro firemni akce a svatby v Praze. Od komorniho meetingu pro 20 osob po kongres pro 1 100 hostu. Parkovani zdarma. Provozuje IN CATERING.",
  openGraph: {
    title: "Brevnovsky klaster — eventove prostory v Praze",
    description:
      "Historicke prostory pro 20-1 100 hostu. Konference, gala vecery, firemni akce i svatby. Parkovani zdarma, catering od IN CATERING.",
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
  return (
    <html lang="cs" className={satoshi.variable}>
      <body className="font-sans antialiased">
        <a href="#hlavni-obsah" className="skip-link">
          Prejit na obsah
        </a>
        {children}
      </body>
    </html>
  );
}
