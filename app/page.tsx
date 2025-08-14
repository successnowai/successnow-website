import StarryBackground from "@/components/ui/starry-background"
import { NewTopHeroSection } from "@/components/home/new-top-hero-section"
import { GlassmorphicProblemsSection } from "@/components/home/glassmorphic-problems-section"
import MainHeroSection from "@/components/home/main-hero-section"
import AiAgentAlert from "@/components/home/ai-agent-alert"
import UrgencyAlertSection from "@/components/home/urgency-alert-section"
import LegendaryHeroSection from "@/components/home/legendary-hero-section"
import { BusinessRealitySection } from "@/components/home/business-reality-section"
import IndustrySolutions from "@/components/home/industry-solutions"
import PricingTable from "@/components/home/pricing-table"
import AdsNowSection from "@/components/home/adsnow-section"
import CtaSection from "@/components/home/cta-section"
import PilotFundingPopup from "@/components/ui/pilot-funding-popup"
import { GlowingOrbCta } from "@/components/ui/glowing-orb-cta"
import LiveDemo from "@/components/home/live-demo"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StarryBackground />
      <PilotFundingPopup />

      <div className="fixed bottom-6 right-6 z-40">
        <GlowingOrbCta size="lg" label="Talk to AI Now" />
      </div>

      <NewTopHeroSection />
      <GlassmorphicProblemsSection />
      <div className="pt-24">
        <MainHeroSection />
      </div>
      <AiAgentAlert />
      <UrgencyAlertSection />
      <LegendaryHeroSection />
      <BusinessRealitySection />

      <LiveDemo />

      <IndustrySolutions />
      <PricingTable />
      <AdsNowSection />
      <CtaSection />
    </div>
  )
}
