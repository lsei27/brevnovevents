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
  title: "Svatba v Břevnovském klášteře | Barokní sály a zahrady | Praha",
  description:
    "Svatba v nejstarším klášteře v Čechách – venkovní obřad v zahradě, hostina v sále s freskami, catering na míru. 30–200 hostů. Nezávazná prohlídka pro snoubence zdarma.",
  openGraph: {
    title: "Svatba v Břevnovském klášteře – historické prostory v Praze",
    description:
      "Obřad v zahradě, hostina v barokním sále, afterparty ve vinárně. Vše v jednom areálu s cateringem od IN CATERING.",
    url: "https://brevnovevents.cz/svatba-v-klastere",
    siteName: "brevnovevents.cz",
    locale: "cs_CZ",
    type: "website",
  },
  alternates: { canonical: "https://brevnovevents.cz/svatba-v-klastere" },
};

export default function SvatbaPage() {
  const schemas = [getSvatbaFAQSchema(), getSvatbaBreadcrumbSchema()];
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
