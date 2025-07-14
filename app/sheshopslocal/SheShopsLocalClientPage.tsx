"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { VoiceDemoModal } from "@/components/ui/voice-demo-modal"
import StarryBackground from "@/components/ui/starry-background"
import MainHeroSection from "@/components/home/main-hero-section"
import IndustrySolutions from "@/components/home/industry-solutions"
import LiveDemo from "@/components/home/live-demo"
import PricingTable from "@/components/home/pricing-table"
import CtaSection from "@/components/home/cta-section"
import AdsNowSection from "@/components/home/adsnow-section"
import Footer from "@/components/home/footer"
import { PlatformShowcaseSection } from "@/components/home/platform-showcase-section"
import { ExternalLink, Heart } from "lucide-react"

function AffiliateCodeSection() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl border border-pink-500/30 p-8 backdrop-blur-sm">
          <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0 text-sm mb-4">
            ✨ SheShopsLocal Exclusive Offer
          </Badge>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-6 w-6 text-pink-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Empowering Female Entrepreneurs</h2>
            <Heart className="h-6 w-6 text-pink-400" />
          </div>
          <p className="text-lg text-gray-300 mb-6">Use my code & save an extra 15% on setup fees!</p>
          <div className="bg-black/30 rounded-lg p-6 mb-6">
            <p className="text-gray-300 mb-2">Your Exclusive Code:</p>
            <div className="text-4xl font-bold text-pink-400 tracking-wider">SHESHOPS2025</div>
          </div>
          <div className="mb-6">
            <a
              href="https://sheshopslocal.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-medium transition-colors"
            >
              <Heart className="h-5 w-5" />
              Visit SheShopsLocal.ca
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <p className="text-lg text-gray-300">
            Apply this code during checkout to get an additional 15% off your setup fee!
          </p>
        </div>
      </div>
    </div>
  )
}

export default function SheShopsLocalClientPage() {
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
      <VoiceDemoModal isOpen={isVoiceDemoOpen} onClose={() => setIsVoiceDemoOpen(false)} />
    </div>
  )
}
