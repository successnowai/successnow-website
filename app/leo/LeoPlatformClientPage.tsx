"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { RotatingText } from "@/components/ui/rotating-text"
import { PlatformSteps } from "@/components/ui/platform-steps"
import { Star, Users, TrendingUp, Clock, CheckCircle, Target, Award, Sparkles } from "lucide-react"
import { VoiceDemoModal } from "@/components/ui/voice-demo-modal"
import { GlowingOrbCta } from "@/components/ui/glowing-orb-cta"
import { AffiliateEcosystemSection } from "@/components/ui/affiliate-ecosystem-section"
import StarryBackground from "@/components/ui/starry-background"
import MainHeroSection from "@/components/home/main-hero-section"
import IndustrySolutions from "@/components/home/industry-solutions"
import LiveDemo from "@/components/home/live-demo"
import PricingTable from "@/components/home/pricing-table"
import CtaSection from "@/components/home/cta-section"
import Footer from "@/components/home/footer"
import { PlatformShowcaseSection } from "@/components/home/platform-showcase-section"

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
        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-500/30 p-8 backdrop-blur-sm">
          <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 text-sm mb-4">
            ✨ Leo Exclusive Offer
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Use My Code & Save an Extra 15% on Setup!</h2>
          <div className="bg-black/30 rounded-lg p-6 mb-6">
            <p className="text-gray-300 mb-2">Your Exclusive Code:</p>
            <div className="text-4xl font-bold text-blue-400 tracking-wider">LEO2025</div>
          </div>
          <p className="text-lg text-gray-300">
            Apply this code during checkout to get an additional 15% off your setup fee!
          </p>
        </div>
      </div>
    </div>
  )
}

export default function LeoPlatformClientPage() {
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col items-center space-y-12 sm:space-y-16">
            {/* Hero Section */}
            <div className="text-center space-y-6 sm:space-y-8 w-full">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-500/30">
                <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 mr-2 text-yellow-400" />
                <span className="text-xs sm:text-sm font-semibold text-blue-300">EXCLUSIVE LEO PARTNERSHIP</span>
              </div>

              <div className="min-h-[60px] sm:min-h-[80px] lg:min-h-[100px] flex items-center justify-center">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                  <RotatingText
                    words={rotatingWords}
                    className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg"
                    interval={2500}
                  />
                </div>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Join Leo's exclusive network and get priority access to the AI platform that's{" "}
                <span className="font-bold text-blue-400">transforming businesses</span> and{" "}
                <span className="font-bold text-green-400">maximizing growth potential</span>.
              </p>
            </div>

            {/* Demo Section */}
            <div className="w-full flex justify-center">
              <div onClick={() => setIsVoiceDemoOpen(true)}>
                <GlowingOrbCta label="Experience the AI Demo Now" />
              </div>
            </div>

            {/* New Ecosystem Section */}
            <AffiliateEcosystemSection />

            {/* Platform Steps */}
            <div className="py-8 sm:py-12 w-full">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                  How Our 7-Step AI System Works
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
                  From lead generation to client retention, our comprehensive AI platform handles every aspect of your
                  business growth.
                </p>
              </div>
              <PlatformSteps />
            </div>

            {/* Pain Points & Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {/* Pain Points */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl h-full">
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-red-400 mb-4 sm:mb-6 flex items-center">
                    <Target className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3" />
                    Ready to Stop Struggling With:
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      "Inconsistent lead generation and follow-up?",
                      "Time-consuming manual processes that drain your energy?",
                      "Competitors who seem to always be one step ahead?",
                      "Difficulty scaling your business without burning out?",
                      "Missing out on qualified prospects due to slow response times?",
                    ].map((pain, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 sm:mt-3 flex-shrink-0" />
                        <p className="text-white/90 text-sm sm:text-base lg:text-lg">{pain}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl h-full">
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-green-400 mb-4 sm:mb-6 flex items-center">
                    <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3" />
                    Transform Your Business With:
                  </h3>
                  <div className="space-y-4 sm:space-y-5">
                    {[
                      {
                        icon: TrendingUp,
                        text: "AI that captures and converts leads automatically",
                        color: "text-blue-400",
                      },
                      {
                        icon: Users,
                        text: "Intelligent follow-up that never lets prospects slip away",
                        color: "text-purple-400",
                      },
                      {
                        icon: Clock,
                        text: "Freedom to focus on high-impact business activities",
                        color: "text-yellow-400",
                      },
                      {
                        icon: Award,
                        text: "Proven success across multiple industries and markets",
                        color: "text-green-400",
                      },
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3 sm:space-x-4">
                        <benefit.icon className={`w-5 sm:w-6 h-5 sm:h-6 ${benefit.color} flex-shrink-0`} />
                        <p className="text-white/90 text-sm sm:text-base lg:text-lg">{benefit.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl w-full">
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-2 mb-4 sm:mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 sm:w-6 h-5 sm:h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white/70 text-sm sm:text-base">(1000+ transformations)</span>
                </div>
                <p className="text-white/90 italic text-base sm:text-lg lg:text-xl leading-relaxed">
                  "Leo connected me with this incredible platform and the results have been phenomenal. My business has
                  grown 250% in just 60 days, and I finally have the freedom to focus on what I love most about my
                  work."
                </p>
                <p className="text-blue-400 font-semibold mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg">
                  - Michael R., Business Owner
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="w-full pt-12 sm:pt-16">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                  Get Exclusive Access
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
                  Fill out the form below to secure your spot in Leo's exclusive network.
                </p>
              </div>
              <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
                <div className="p-4 sm:p-6">
                  <div
                    className="bg-white rounded-xl shadow-inner overflow-hidden"
                    style={{ height: "800px", minHeight: "800px" }}
                  >
                    <iframe
                      src="https://link.successnow.ai/widget/form/R2aNxCAoLcCFcoSIlajN"
                      style={{
                        width: "100%",
                        height: "100%",
                        minHeight: "800px",
                        border: "none",
                        borderRadius: "12px",
                        display: "block",
                      }}
                      id="inline-R2aNxCAoLcCFcoSIlajN"
                      data-layout="{'id':'INLINE'}"
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="Custom Development Form - leoraguseo"
                      data-height="800"
                      data-layout-iframe-id="inline-R2aNxCAoLcCFcoSIlajN"
                      data-form-id="R2aNxCAoLcCFcoSIlajN"
                      title="Custom Development Form - leoraguseo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PlatformShowcaseSection />
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
