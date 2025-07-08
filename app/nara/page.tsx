"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { RotatingText } from "@/components/ui/rotating-text"
import { PlatformSteps } from "@/components/ui/platform-steps"
import { Star, Sparkles } from "lucide-react"
import { VoiceDemoModal } from "@/components/ui/voice-demo-modal"
import { GlowingOrbCta } from "@/components/ui/glowing-orb-cta"
import { AffiliateEcosystemSection } from "@/components/ui/affiliate-ecosystem-section"

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

export default function NaraPlatformPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-rose-900 to-purple-900 text-white">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <img src="/images/successnow-logo.png" alt="SuccessNOW" className="h-6 sm:h-8" />
              <Badge className="bg-gradient-to-r from-rose-500 to-pink-500 text-white border-0 text-xs sm:text-sm">
                ✨ Nara Exclusive Access
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col items-center space-y-12 sm:space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6 sm:space-y-8 w-full">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-full border border-rose-500/30">
              <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 mr-2 text-yellow-400" />
              <span className="text-xs sm:text-sm font-semibold text-rose-300">EXCLUSIVE NARA PARTNERSHIP</span>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
                The Best AI Agents for
              </h1>

              <div className="min-h-[60px] sm:min-h-[80px] lg:min-h-[100px] flex items-center justify-center">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                  <RotatingText
                    words={rotatingWords}
                    className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg"
                    interval={2500}
                  />
                </div>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Join Nara's exclusive network and get priority access to the AI platform that's{" "}
                <span className="font-bold text-rose-400">transforming businesses</span> and{" "}
                <span className="font-bold text-green-400">maximizing growth potential</span>.
              </p>
            </div>
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
                "Nara connected me with this incredible platform and the results have been phenomenal. My business has
                grown 250% in just 60 days, and I finally have the freedom to focus on what I love most about my work."
              </p>
              <p className="text-rose-400 font-semibold mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg">
                - Jessica L., Business Owner
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
                Fill out the form below to secure your spot in Nara's exclusive network.
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
              <div className="p-4 sm:p-6">
                <div
                  className="bg-white rounded-xl shadow-inner overflow-hidden"
                  style={{ height: "800px", minHeight: "800px" }}
                >
                  <iframe
                    src="https://link.successnow.ai/widget/form/gqoKsq3Vy0WkolYhdU7P"
                    style={{
                      width: "100%",
                      height: "100%",
                      minHeight: "800px",
                      border: "none",
                      borderRadius: "12px",
                      display: "block",
                    }}
                    id="inline-gqoKsq3Vy0WkolYhdU7P"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Custom Development Form -nara"
                    data-height="800"
                    data-layout-iframe-id="inline-gqoKsq3Vy0WkolYhdU7P"
                    data-form-id="gqoKsq3Vy0WkolYhdU7P"
                    title="Custom Development Form -nara"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VoiceDemoModal isOpen={isVoiceDemoOpen} onClose={() => setIsVoiceDemoOpen(false)} />
    </div>
  )
}
