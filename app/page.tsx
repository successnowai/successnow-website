import MainHeroSection from "@/components/home/main-hero-section"
import AdsNowSection from "@/components/home/adsnow-section"
import AnimatedPlatformShowcase from "@/components/home/animated-platform-showcase"
import IndustrySolutions from "@/components/home/industry-solutions"
import FeatureStack from "@/components/home/feature-stack"
import GlassmorphicProblemsSection from "@/components/home/glassmorphic-problems-section"
import PricingTable from "@/components/home/pricing-table"
import PartnerProgramSection from "@/components/home/partner-program-section"
import CTASection from "@/components/home/cta-section"
import LiveDemo from "@/components/home/live-demo"
import AIAgentAlert from "@/components/home/ai-agent-alert"
import PilotFundingPopup from "@/components/ui/pilot-funding-popup"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <PilotFundingPopup />
      <MainHeroSection />
      <AIAgentAlert />
      <AdsNowSection />
      <AnimatedPlatformShowcase />
      <IndustrySolutions />
      <FeatureStack />
      <GlassmorphicProblemsSection />
      <PricingTable />
      <PartnerProgramSection />
      <LiveDemo />
      <CTASection />
    </div>
  )
}
