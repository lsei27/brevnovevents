import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { USP } from "@/components/sections/USP";
import { SpacesShowcase } from "@/components/sections/SpacesShowcase";
import { VideoTour } from "@/components/sections/VideoTour";
import { PricingAnchors } from "@/components/sections/PricingAnchors";
import { SocialProof } from "@/components/sections/SocialProof";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WeddingGateway } from "@/components/sections/WeddingGateway";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Event Venues Prague | Brevnov Monastery | brevnovevents.cz",
  description:
    "Premium event venues in Prague for 20–1,100 guests. Baroque halls, courtyards and gardens at Brevnov Monastery. Free parking, in-house catering. Request a tour today.",
  openGraph: {
    title: "Event Venues Prague – Brevnov Monastery",
    description:
      "Historic Prague venues for 20–1,100 guests. Conferences, gala dinners, corporate events and weddings. Free parking, catering by IN CATERING.",
    url: "https://brevnovevents.cz/en",
    siteName: "brevnovevents.cz",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://brevnovevents.cz/en",
    languages: {
      "cs": "https://brevnovevents.cz",
      "en": "https://brevnovevents.cz/en",
      "x-default": "https://brevnovevents.cz/en",
    },
  },
};

export default function HomePageEN() {
  return (
    <>
      <Hero />
      <USP />
      <SpacesShowcase />
      <VideoTour />
      <PricingAnchors />
      <SocialProof />
      <HowItWorks />
      <WeddingGateway />
      <Location />
      <Contact />
    </>
  );
}
