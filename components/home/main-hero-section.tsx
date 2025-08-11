"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageSquare, Zap, ArrowRight, Play } from "lucide-react"
import GlowingOrbCta from "@/components/ui/glowing-orb-cta"
import RotatingText from "@/components/ui/rotating-text"

export default function MainHeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Ensure content is visible on mount
    setIsVisible(true)
  }, [])

  const benefits = [
    {
      icon: Phone,
      title: "24/7 Lead Capture",
      description: "Never Miss A Potential Customer Again With AI That Works Around The Clock",
    },
    {
      icon: MessageSquare,
      title: "Instant Qualification",
      description: "AI Pre-Qualifies Leads Automatically, Saving You Time And Increasing Conversions",
    },
    {
      icon: Zap,
      title: "Perfect Consistency",
      description: "Every Interaction Follows Your Exact Sales Process With Zero Human Error",
    },
  ]

  const actionWords = ["Close", "Book", "Qualify", "Convert"]

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-black/90">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Headline - 3 Lines Structure */}
        <div
          className={`mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* First Line */}
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
            <span className="text-white brightness-110">AI That</span>
          </div>

          {/* Second Line - Dynamic Text with Fixed Height */}
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight min-h-[1.2em] flex items-center justify-center">
            <RotatingText words={actionWords} className="neon-text-glow" interval={2000} />
          </div>

          {/* Third Line */}
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="text-white brightness-110">Leads Into Sales</span>
          </div>
        </div>

        {/* Subtitle */}
        <div
          className={`mb-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Get AI-Powered Websites That Convert Visitors Into Customers Using AI Optimization, Voice Agents, And
            Automated Follow-Up Systems.
          </p>
        </div>

        {/* Primary CTA */}
        <div
          className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <GlowingOrbCta />

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => (window.location.href = "/demo")}
            >
              <Play className="mr-2 h-5 w-5" />
              Try Live Demo
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
              onClick={() => (window.location.href = "/signup")}
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Benefits Cards */}
        <div
          className={`grid md:grid-cols-3 gap-6 max-w-5xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white brightness-110 mb-3">{benefit.title}</h3>
                <p className="text-gray-100 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div
          className={`mt-16 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-gray-200 text-sm mb-4">Trusted By Businesses Across 15+ Industries</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl">🚗</div>
            <div className="text-2xl">🏡</div>
            <div className="text-2xl">🏋️</div>
            <div className="text-2xl">⚖️</div>
            <div className="text-2xl">💆</div>
            <div className="text-2xl">🏦</div>
          </div>
        </div>
      </div>
    </section>
  )
}
