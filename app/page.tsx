"use client"

import Navbar from "@/components/navigation/navbar"
import HeroSection from "@/components/home/hero-section"
import FeatureStack from "@/components/home/feature-stack"
import IndustrySolutions from "@/components/home/industry-solutions"
import LiveDemo from "@/components/home/live-demo"
import PricingTable from "@/components/home/pricing-table"
import CTASection from "@/components/home/cta-section"
import Footer from "@/components/home/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0f1a] to-[#00274D] text-white">
      <Navbar currentPage="home" />
      <HeroSection />
      <FeatureStack />
      <IndustrySolutions />
      <LiveDemo />
      <PricingTable />
      <CTASection />
      <Footer />
    </div>
  )
}
