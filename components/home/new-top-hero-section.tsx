"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Calendar, Sparkles } from 'lucide-react'
import Link from "next/link"

const switchingWords = [
  "qualifies",
  "converts", 
  "nurtures",
  "closes",
  "books"
]

export function NewTopHeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % switchingWords.length)
        setIsAnimating(false)
      }, 300)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-white">AI Systems with the best AI</span>
            <br />
            <span className="text-white">agents that</span>
            <br />
            <span 
              className={`bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent transition-all duration-500 ${
                isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              {switchingWords[currentWordIndex]}
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Leads
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Let our AI Superagents and AI bots close leads, book appointments, and reply 
          to client inquiries—24/7. <span className="text-white font-semibold">Never lose a lead again.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
            onClick={() => {
              const demoSection = document.getElementById('live-demo')
              if (demoSection) {
                demoSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <Play className="w-5 h-5 mr-2" />
            LIVE DEMO
          </Button>

          <Link href="/book">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book an AI Consult
            </Button>
          </Link>
        </div>

        {/* Limited Time Offer Box */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-orange-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              LIMITED TIME: 90% OFF
            </span>
            <Sparkles className="w-6 h-6 text-orange-400" />
          </div>
          
          <div className="text-center">
            <p className="text-xl text-gray-300 mb-2">
              The SUCCESSNOW Platform Project - Usually $35,000, Now Just
            </p>
            <div className="text-4xl font-bold text-white mb-4">$3,488</div>
            <div className="text-lg text-green-400 font-semibold">
              + 2 MONTHS FREE Platform Access (Save $1,994)
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
