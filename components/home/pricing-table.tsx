"use client"

import type React from "react"
import { useInView } from "@/hooks/use-intersection-observer"
import { Check, Star, Zap, Phone } from "lucide-react"

export default function PricingTable() {
  const { ref, isInView } = useInView()

  const features = [
    {
      icon: "🌟",
      text: "One Unified Platform Project",
    },
    {
      icon: "🚀",
      text: "Custom Website Development Prompt",
    },
    {
      icon: "🎯",
      text: "High-Converting Smart Funnel Plan",
    },
    {
      icon: "🧠",
      text: "Strategic Platform Vision via AI",
    },
    {
      icon: "📱",
      text: "Includes AdsNOW.ai & SEOExperts.ai",
    },
    {
      icon: "💎",
      text: "Access to Voice AI at $0.0000233/second",
    },
    {
      icon: "⚡",
      text: "Priority VIP Support & Onboarding",
    },
  ]

  const bonuses = [
    {
      title: "BONUS: 50% OFF Platform Fees",
      description: "Regular $1,994/month for all AI tools",
      price: "Only $997/month",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      title: "BONUS: 50% OFF AI Voice Usage",
      description: "Regular $0.28/minute for calls",
      price: "Only $0.14/minute",
      icon: <Phone className="w-5 h-5" />,
    },
  ]

  return (
    <section ref={ref as React.RefObject<HTMLDivElement>} className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
      <div className={`animate-fade-up ${isInView ? "animate-show" : ""}`}>
        {/* Limited Time Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold">
            🔥 90% OFF - LIMITED TIME 🔥
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            The SUCCESSNOW Platform Project
          </h2>
          <p className="text-xl sm:text-2xl text-[#00BFFF] mb-6">Your All-In-One Digital Foundation</p>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
            Get your custom website, smart funnel, and platform strategy built as a single, cohesive project. This is
            the complete package to dominate your industry, powered by AI and custom-coded by experts.
          </p>
        </div>

        {/* Pricing */}
        <div className="text-center mb-12">
          <div className="text-gray-400 text-xl line-through mb-2">$35,000</div>
          <div className="text-[#00BFFF] text-6xl sm:text-7xl font-bold mb-4">$3,488</div>
          <div className="text-yellow-400 text-xl font-bold">SAVE OVER $30,000 TODAY!</div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* What You Get */}
          <div className={`animate-fade-up ${isInView ? "animate-show" : ""} animate-delay-200`}>
            <div className="flex items-center mb-6">
              <Star className="w-6 h-6 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">What You Get:</h3>
            </div>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div className="flex items-center">
                    <span className="text-xl mr-2">{feature.icon}</span>
                    <span className="text-white text-lg">{feature.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Exclusive Bonuses */}
          <div className={`animate-fade-up ${isInView ? "animate-show" : ""} animate-delay-400`}>
            <div className="flex items-center mb-6">
              <Zap className="w-6 h-6 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">EXCLUSIVE Bonuses:</h3>
            </div>
            <div className="space-y-4">
              {bonuses.map((bonus, index) => (
                <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-start mb-3">
                    <div className="text-[#00BFFF] mr-3 mt-1">{bonus.icon}</div>
                    <div>
                      <h4 className="text-[#00BFFF] font-bold text-lg mb-2">{bonus.title}</h4>
                      <p className="text-gray-300 text-sm mb-2">{bonus.description}</p>
                      <p className="text-green-400 font-bold">{bonus.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className={`text-center mt-12 animate-fade-up ${isInView ? "animate-show" : ""} animate-delay-600`}>
          <button className="bg-[#00BFFF] hover:bg-[#0099CC] text-white font-bold text-xl px-12 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start My SuccessNOW Platform Build →
          </button>

          {/* Security badges */}
          <div className="flex justify-center items-center mt-6 space-x-6 text-sm text-gray-400">
            <div className="flex items-center">
              <span className="text-yellow-400 mr-1">🔒</span>
              Secure checkout
            </div>
            <div className="flex items-center">
              <span className="text-yellow-400 mr-1">💰</span>
              30-day money-back guarantee
            </div>
            <div className="flex items-center">
              <span className="text-yellow-400 mr-1">⚡</span>
              Instant access
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
