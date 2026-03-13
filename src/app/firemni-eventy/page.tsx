import type { Metadata } from "next";
import {
  getFiremniEventyFAQSchema,
  getFiremniBreadcrumbSchema,
} from "@/lib/schema";
import { FiremniHero } from "@/components/sections/firemni/FiremniHero";
import { USPExpanded } from "@/components/sections/firemni/USPExpanded";
import { Packages } from "@/components/sections/firemni/Packages";
import { CapacityTables } from "@/components/sections/firemni/CapacityTables";
import { SpacesGallery } from "@/components/sections/firemni/SpacesGallery";
import { SmallerEvents } from "@/components/sections/firemni/SmallerEvents";
import { PriceList } from "@/components/sections/firemni/PriceList";
import { Upsell } from "@/components/sections/firemni/Upsell";
import { ProcessExpanded } from "@/components/sections/firemni/ProcessExpanded";
import { CaseStudy } from "@/components/sections/firemni/CaseStudy";
import { AgencyProgram } from "@/components/sections/firemni/AgencyProgram";
import { FAQFiremni } from "@/components/sections/firemni/FAQFiremni";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title:
    "Pronájem eventových prostor Praha | Břevnovský klášter – až 1 100 hostů",
  description:
    "Historické prostory pro konference, gala večery a firemní akce v Praze. Kapacita 20–1 100 hostů, 60 parkovacích míst zdarma, catering od IN CATERING. Nezávazná nabídka do 24 h.",
  openGraph: {
    title: "Firemní eventy v Břevnovském klášteře | Praha 6",
    description:
      "Konference, gala večery a firemní akce v barokních sálech z 10. století. Až 1 100 hostů, parkování zdarma, jeden tým pro prostor i catering.",
    url: "https://brevnovevents.cz/firemni-eventy",
    siteName: "brevnovevents.cz",
    locale: "cs_CZ",
    type: "website",
  },
  alternates: { canonical: "https://brevnovevents.cz/firemni-eventy" },
};

export default function FiremniEventyPage() {
  const schemas = [getFiremniEventyFAQSchema(), getFiremniBreadcrumbSchema()];
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify(schema)}
        </script>
      ))}
      <FiremniHero />
      <USPExpanded />
      <Packages />
      <CapacityTables />
      <SpacesGallery />
      <SmallerEvents />
      <PriceList />
      <Upsell />
      <ProcessExpanded />
      <CaseStudy />
      <AgencyProgram />
      <FAQFiremni />
      <Location />
      <Contact />
    </>
  );
}
