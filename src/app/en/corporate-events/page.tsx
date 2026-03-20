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
import { SocialProof } from "@/components/sections/SocialProof";
import { AgencyProgram } from "@/components/sections/firemni/AgencyProgram";
import { FAQFiremni } from "@/components/sections/firemni/FAQFiremni";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Corporate Event Venues Prague | Brevnov Monastery – Up to 1,100",
  description:
    "Historic event venues in Prague for conferences, gala dinners and corporate events. Capacity 20–1,100 guests, free parking, in-house catering. Get a quote within 24 hours.",
  openGraph: {
    title: "Corporate Events at Brevnov Monastery | Prague",
    description:
      "Conferences, gala dinners and corporate events in baroque halls dating to 993 AD. Up to 1,100 guests, free parking, one team for venue and catering.",
    url: "https://brevnovevents.cz/en/corporate-events",
    siteName: "brevnovevents.cz",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://brevnovevents.cz/en/corporate-events",
    languages: {
      "cs": "https://brevnovevents.cz/firemni-eventy",
      "en": "https://brevnovevents.cz/en/corporate-events",
      "x-default": "https://brevnovevents.cz/en/corporate-events",
    },
  },
};

export default function CorporateEventsPage() {
  const schemas = [getFiremniEventyFAQSchema("en"), getFiremniBreadcrumbSchema("en")];
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
      <SocialProof />
      <AgencyProgram />
      <FAQFiremni />
      <Location />
      <Contact />
    </>
  );
}
