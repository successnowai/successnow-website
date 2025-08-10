import JsonLdScript from "@/components/json-ld-script"
import StarryBackground from "@/components/ui/starry-background"
import { NewTopHeroSection } from "@/components/home/new-top-hero-section"
import { GlassmorphicProblemsSection } from "@/components/home/glassmorphic-problems-section"
import MainHeroSection from "@/components/home/main-hero-section"
import AiAgentAlert from "@/components/home/ai-agent-alert"
import IndustrySolutions from "@/components/home/industry-solutions"
import LiveDemo from "@/components/home/live-demo"
import PricingTable from "@/components/home/pricing-table"
import { PlatformShowcaseSection } from "@/components/home/platform-showcase-section"
import AdsNowSection from "@/components/home/adsnow-section"
import CtaSection from "@/components/home/cta-section"

export default function HomePage() {
  const homePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SuccessNOW AI",
    url: "https://successnow.ai",
    description:
      "Transform your business with AI Superagents that handle customer interactions, qualify leads, and drive conversions 24/7.",
    logo: "https://successnow.ai/images/successnow-logo.png",
  }

  return (
    <>
      <JsonLdScript data={homePageJsonLd} />
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <StarryBackground />
        <NewTopHeroSection />
        <GlassmorphicProblemsSection />
        <MainHeroSection />
        <AiAgentAlert />
        <IndustrySolutions />
        <LiveDemo />
        <PricingTable />
        <PlatformShowcaseSection />
        <AdsNowSection />
        <CtaSection />
      </div>
    </>
  )
}
