import { TopHeroSection } from "@/components/home/top-hero-section"
import { MainHeroSection } from "@/components/home/main-hero-section"
import { PlatformShowcaseSection } from "@/components/home/platform-showcase-section"
import { IndustrySolutions } from "@/components/home/industry-solutions"
import { LiveDemo } from "@/components/home/live-demo"
import { PricingTable } from "@/components/home/pricing-table"
import { AdsNowSection } from "@/components/home/adsnow-section"
import { CtaSection } from "@/components/home/cta-section"
import { Footer } from "@/components/home/footer"
import { FloatingChatRobot } from "@/components/chat/floating-chat-robot"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <TopHeroSection />
      <MainHeroSection />
      <PlatformShowcaseSection />
      <IndustrySolutions />
      <LiveDemo />
      <PricingTable />
      <AdsNowSection />
      <CtaSection />
      <Footer />
      <FloatingChatRobot />
    </main>
  )
}
