import StarryBackground from "@/components/ui/starry-background"
import MainHeroSection from "@/components/home/main-hero-section"
import IndustrySolutions from "@/components/home/industry-solutions"
import LiveDemo from "@/components/home/live-demo"
import PricingTable from "@/components/home/pricing-table"
import CtaSection from "@/components/home/cta-section"
import AdsNowSection from "@/components/home/adsnow-section"
import PartnerProgramSection from "@/components/home/partner-program-section"
import Footer from "@/components/home/footer"
import { PlatformShowcaseSection } from "@/components/home/platform-showcase-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <StarryBackground />
      <div className="relative z-10">
        <MainHeroSection />
        <PlatformShowcaseSection />
        <AdsNowSection />
        <IndustrySolutions />
        <LiveDemo />
        <PricingTable />
        <PartnerProgramSection />
        <CtaSection />
        <Footer />
      </div>
    </div>
  )
}
