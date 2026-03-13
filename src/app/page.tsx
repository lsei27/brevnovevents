import { Hero } from "@/components/sections/Hero";
import { USP } from "@/components/sections/USP";
import { SpacesShowcase } from "@/components/sections/SpacesShowcase";
import { VideoTour } from "@/components/sections/VideoTour";
import { PricingAnchors } from "@/components/sections/PricingAnchors";
import { SocialProof } from "@/components/sections/SocialProof";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WeddingGateway } from "@/components/sections/WeddingGateway";

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
    </>
  );
}
