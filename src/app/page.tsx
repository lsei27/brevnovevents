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
  title: "Břevnovský klášter – eventové prostory Praha | brevnovevents.cz",
  description:
    "Pronájem historických prostor pro firemní akce a svatby v Praze. Od komorního meetingu pro 20 osob po kongres pro 1 100 hostů. Parkování zdarma, exkluzivní catering od IN CATERING.",
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
    languages: {
      "cs": "https://brevnovevents.cz",
      "en": "https://brevnovevents.cz/en",
      "x-default": "https://brevnovevents.cz/en",
    },
  },
};

export default function HomePage() {
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
