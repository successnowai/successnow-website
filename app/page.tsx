import { Suspense } from "react"
import MainHeroSection from "@/components/home/main-hero-section"
import NewTopHeroSection from "@/components/home/new-top-hero-section"
import CombinedHeroSection from "@/components/home/combined-hero-section"
import AdsNowHeroSection from "@/components/home/adsnow-hero-section"
import AdsNowSection from "@/components/home/adsnow-section"
import AnimatedPlatformShowcase from "@/components/home/animated-platform-showcase"
import PlatformShowcaseSection from "@/components/home/platform-showcase-section"
import GlassmorphicProblemsSection from "@/components/home/glassmorphic-problems-section"
import FeatureStack from "@/components/home/feature-stack"
import IndustrySolutions from "@/components/home/industry-solutions"
import PartnerProgramSection from "@/components/home/partner-program-section"
import PricingTable from "@/components/home/pricing-table"
import CTASection from "@/components/home/cta-section"
import LiveDemo from "@/components/home/live-demo"
import Footer from "@/components/home/footer"
import FloatingChatRobot from "@/components/chat/floating-chat-robot"
import ScrollToTop from "@/components/ui/scroll-to-top"
import PilotFundingPopup from "@/components/ui/pilot-funding-popup"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Suspense fallback={<div>Loading...</div>}>
        <MainHeroSection />
        <NewTopHeroSection />
        <CombinedHeroSection />
        <AdsNowHeroSection />
        <AdsNowSection />
        <AnimatedPlatformShowcase />
        <PlatformShowcaseSection />
        <GlassmorphicProblemsSection />
        <FeatureStack />
        <IndustrySolutions />
        <PartnerProgramSection />
        <PricingTable />
        <CTASection />
        <LiveDemo />
        <Footer />
        <FloatingChatRobot />
        <ScrollToTop />
        <PilotFundingPopup />
      </Suspense>
    </div>
  )
}
