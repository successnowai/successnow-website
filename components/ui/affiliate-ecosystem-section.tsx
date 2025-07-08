"use client"

import { useState } from "react"
import { CheckCircle, Zap, Users, Target, TrendingUp, Bot, Sparkles, Star } from "lucide-react"
import { GlowingOrbCta } from "@/components/ui/glowing-orb-cta"
import { VoiceDemoModal } from "@/components/ui/voice-demo-modal"

const adsNowFeatures = [
  { icon: Target, text: "Creates High-Converting Ads Automatically" },
  { icon: TrendingUp, text: "Optimizes Campaigns 24/7 for Best ROI" },
  { icon: Zap, text: "Launches Across All Platforms Instantly" },
  { icon: Sparkles, text: "Uses Data from 10,000+ Daily Leads" },
]

const successNowFeatures = [
  { icon: Zap, text: "Instantly Engages Every Lead 24/7" },
  { icon: Bot, text: "Books Appointments Automatically" },
  { icon: Users, text: "Follows Up Always, Never Misses a Lead" },
  { icon: Star, text: "Gets Reviews & Referrals Automatically" },
]

export function AffiliateEcosystemSection() {
  const [isVoiceDemoOpen, setIsVoiceDemoOpen] = useState(false)

  return (
    <section className="w-full py-12 sm:py-16">
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Complete AI Ecosystem:
          <br className="sm:hidden" />
          <span className="text-purple-400"> AdsNow.ai</span> + <span className="text-cyan-400">SuccessNOW AI</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
          The only platform that creates high-converting ads AND instantly converts every lead into customers using data
          from 10,000+ leads generated daily.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* AdsNow.ai Card */}
        <div className="bg-black/30 backdrop-blur-lg border-2 border-purple-500/50 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-purple-500/10">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-purple-500/20 rounded-md mr-4">
              <Bot className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-purple-400">AdsNow.ai</h3>
          </div>
          <h4 className="text-xl font-semibold text-white mb-6">AI Ad Creation & Optimization</h4>
          <div className="space-y-4">
            {adsNowFeatures.map((feature, index) => (
              <div key={index} className="flex items-center">
                <feature.icon className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                <span className="text-gray-200">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SuccessNOW AI Card */}
        <div className="bg-black/30 backdrop-blur-lg border-2 border-cyan-500/50 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-cyan-500/10">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-cyan-500/20 rounded-md mr-4">
              <Sparkles className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-cyan-400">SuccessNOW AI</h3>
          </div>
          <h4 className="text-xl font-semibold text-white mb-6">AI Lead Engagement & Conversion</h4>
          <div className="space-y-4">
            {successNowFeatures.map((feature, index) => (
              <div key={index} className="flex items-center">
                <feature.icon className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-200">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 text-center flex flex-col items-center">
        <div onClick={() => setIsVoiceDemoOpen(true)}>
          <GlowingOrbCta label="See It For Yourself Now" />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-6">
          <div className="flex items-center text-green-400">
            <CheckCircle className="w-5 h-5 mr-2" />
            <span className="font-semibold">Free Demo</span>
          </div>
          <div className="flex items-center text-green-400">
            <CheckCircle className="w-5 h-5 mr-2" />
            <span className="font-semibold">No Commitment</span>
          </div>
        </div>
      </div>
      <VoiceDemoModal isOpen={isVoiceDemoOpen} onClose={() => setIsVoiceDemoOpen(false)} />
    </section>
  )
}
