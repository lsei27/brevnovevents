import type { Metadata } from "next";
import { getSvatbaFAQSchema, getSvatbaBreadcrumbSchema } from "@/lib/schema";
import { SvatbaHero } from "@/components/sections/svatba/SvatbaHero";
import { WeddingSpaces } from "@/components/sections/svatba/WeddingSpaces";
import { WeddingCapacity } from "@/components/sections/svatba/WeddingCapacity";
import { WeddingPricing } from "@/components/sections/svatba/WeddingPricing";
import { WeddingGallery } from "@/components/sections/svatba/WeddingGallery";
import { WhyMonastery } from "@/components/sections/svatba/WhyMonastery";
import { WeddingProcess } from "@/components/sections/svatba/WeddingProcess";
import { FAQSvatba } from "@/components/sections/svatba/FAQSvatba";
import { WeddingContact } from "@/components/sections/svatba/WeddingContact";

export const metadata: Metadata = {
  title: "Wedding Venue Prague | Brevnov Monastery – Baroque Halls & Gardens",
  description:
    "Wedding venue in Prague's oldest monastery. Outdoor ceremony in gardens, reception in baroque halls, afterparty in the wine cellar. 30–200 guests. Free tour for couples.",
  openGraph: {
    title: "Wedding Venue Prague – Brevnov Monastery",
    description:
      "Ceremony in the garden, reception in a baroque hall, afterparty in the wine cellar. All under one roof with in-house catering by IN CATERING.",
    url: "https://brevnovevents.cz/en/wedding-venue",
    siteName: "brevnovevents.cz",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://brevnovevents.cz/en/wedding-venue",
    languages: {
      "cs": "https://brevnovevents.cz/svatba-v-klastere",
      "en": "https://brevnovevents.cz/en/wedding-venue",
      "x-default": "https://brevnovevents.cz/en/wedding-venue",
    },
  },
};

export default function WeddingVenuePage() {
  const schemas = [getSvatbaFAQSchema("en"), getSvatbaBreadcrumbSchema("en")];
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify(schema)}
        </script>
      ))}
      <SvatbaHero />
      <WeddingSpaces />
      <WeddingCapacity />
      <WeddingPricing />
      <WeddingGallery />
      <WhyMonastery />
      <WeddingProcess />
      <FAQSvatba />
      <WeddingContact />
    </>
  );
}
