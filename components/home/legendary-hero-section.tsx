"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sparkles } from "lucide-react"

const rotatingWords = ["Legendary", "Unstoppable", "Profitable"]

export default function LegendaryHeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-cyan-300 rounded-full opacity-50 animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-cyan-900/30 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-3 mb-12">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <Sparkles className="w-5 h-5 text-cyan-400" />
          <span className="text-cyan-300 font-semibold">AI Business Revolution</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
          Make Your Business{" "}
          <span
            className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.8)] transition-all duration-1000"
            key={currentWordIndex}
          >
            {rotatingWords[currentWordIndex]}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto mb-12 leading-relaxed">
          The only AI platform that handles your leads, books appointments, and grows your revenue{" "}
          <span className="text-cyan-400 font-semibold">automatically</span> - while your competitors are still
          answering phones manually.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/demo">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 min-w-[250px]"
            >
              Start Dominating Now →
            </Button>
          </Link>

          <Link href="/demo">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 min-w-[200px] bg-transparent"
            >
              See It In Action
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
