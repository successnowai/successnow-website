import HeroSection from "@/components/home/hero-section"
import IndustrySolutions from "@/components/home/industry-solutions"
import FeatureStack from "@/components/home/feature-stack"
import LiveDemo from "@/components/home/live-demo"
import PricingTable from "@/components/home/pricing-table"
import CTASection from "@/components/home/cta-section"
import AdsNowSection from "@/components/home/adsnow-section"
import Footer from "@/components/home/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <AdsNowSection />
      <IndustrySolutions />
      <FeatureStack />
      <LiveDemo />
      <PricingTable />
      <CTASection />
      <Footer />
    </div>
  )
}
