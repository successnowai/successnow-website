"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { StarryBackground } from "@/components/ui/starry-background"

const rotatingWords = ["Convert", "Qualify", "Close", "Nurture", "Scale"]

export function NewTopHeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
        setIsVisible(true)
      }, 300)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <StarryBackground />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">AI Systems That</h1>
          <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <span
              key={currentWordIndex}
              className={`inline-block transition-all duration-300 ${
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-4"
              }`}
              style={{
                color: "#22d3ee",
                textShadow: `
                  0 0 5px #22d3ee,
                  0 0 10px #22d3ee,
                  0 0 15px #22d3ee,
                  0 0 20px #0ea5e9,
                  0 0 35px #0ea5e9,
                  0 0 40px #0ea5e9
                `,
                filter: "drop-shadow(0 0 10px #22d3ee)",
                background: "linear-gradient(45deg, #22d3ee, #0ea5e9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {rotatingWords[currentWordIndex]}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">Leads Into Sales</h1>
        </div>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Stop losing money on leads that never convert. Our AI agents work 24/7 to qualify, nurture, and close your
          prospects while you focus on growing your business.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Get Your AI Agent Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 bg-transparent"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">Trusted by businesses worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-white font-semibold">Fortune 500</div>
            <div className="text-white font-semibold">Small Business</div>
            <div className="text-white font-semibold">Enterprise</div>
            <div className="text-white font-semibold">Startups</div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
    </section>
  )
}

export default NewTopHeroSection
