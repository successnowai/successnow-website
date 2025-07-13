"use client"

import { useEffect, useState } from "react"
import StarryBackground from "@/components/ui/starry-background"
import MainHeroSection from "@/components/home/main-hero-section"
import IndustrySolutions from "@/components/home/industry-solutions"
import LiveDemo from "@/components/home/live-demo"
import PricingTable from "@/components/home/pricing-table"
import CtaSection from "@/components/home/cta-section"
import AdsNowSection from "@/components/home/adsnow-section"
import Footer from "@/components/home/footer"
import { PlatformShowcaseSection } from "@/components/home/platform-showcase-section"
import { Badge } from "@/components/ui/badge"
import { VoiceDemoModal } from "@/components/ui/voice-demo-modal"
import { GlowingOrbCta } from "@/components/ui/glowing-orb-cta"

const rotatingWords = [
  "Real Estate Agents",
  "Mortgage Brokers",
  "Insurance Agents",
  "Legal Professionals",
  "Healthcare Providers",
  "Dental Practices",
  "Auto Dealers",
  "Home Service Pros",
  "Fitness Studios",
  "Restaurants",
  "Solar Companies",
  "HVAC Contractors",
  "Roofing Companies",
  "Plumbers",
  "General Contractors",
  "Med Spas",
  "Chiropractors",
  "Custom Development",
]

function AffiliateCodeSection() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-2xl border border-rose-500/30 p-8 backdrop-blur-sm">
          <Badge className="bg-gradient-to-r from-rose-500 to-pink-500 text-white border-0 text-sm mb-4">
            ✨ Nara Exclusive Offer
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Use My Code & Save an Extra 15% on Setup!</h2>
          <div className="bg-black/30 rounded-lg p-6 mb-6">
            <p className="text-gray-300 mb-2">Your Exclusive Code:</p>
            <div className="text-4xl font-bold text-rose-400 tracking-wider">NARA2025</div>
          </div>
          <p className="text-lg text-gray-300">
            Apply this code during checkout to get an additional 15% off your setup fee!
          </p>
        </div>
      </div>
    </div>
  )
}

export default function NaraPage() {
  const [isVoiceDemoOpen, setIsVoiceDemoOpen] = useState(false)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://link.successnow.ai/js/form_embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative">
      <StarryBackground />
      <div className="relative z-10">
        <MainHeroSection />
        <AffiliateCodeSection />
        <PlatformShowcaseSection />
        <AdsNowSection />
        <IndustrySolutions />
        <LiveDemo />
        <PricingTable />
        <CtaSection />
        <Footer />
      </div>
      {/* Demo Section */}
      <div className="w-full flex justify-center">
        <div onClick={() => setIsVoiceDemoOpen(true)}>
          <GlowingOrbCta label="Experience the AI Demo Now" />
        </div>
      </div>
      <VoiceDemoModal isOpen={isVoiceDemoOpen} onClose={() => setIsVoiceDemoOpen(false)} />
    </div>
  )
}
