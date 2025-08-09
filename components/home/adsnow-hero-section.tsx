"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, MessageSquare, Zap } from "lucide-react"
import Link from "next/link"

export default function AdsNowHeroSection() {
  const [currentText, setCurrentText] = useState(0)
  const dynamicTexts = ["creates ads", "optimizes campaigns", "manages budgets", "tracks performance", "scales results"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            >
              <div className="w-1 h-1 bg-cyan-400/30 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            AI that{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {dynamicTexts[currentText]}
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
            </span>
            <br />
            while you sleep
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Simply text your AI AdsNOW Super Agent to create ads, review copy, make edits, set budget and launch
            instantly.
            <span className="text-cyan-400 font-semibold"> No more logging into software</span> - the future of ads is
            NOW!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
            >
              <Link href="/demo" className="flex items-center gap-3">
                <Play className="w-5 h-5" />
                LIVE DEMO
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              <Link href="/book" className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5" />
                Book an AI Consult
              </Link>
            </Button>
          </div>
        </div>

        {/* Limited Time Offer */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-orange-400" />
              <span className="text-orange-400 font-bold text-lg">LIMITED TIME: 90% OFF</span>
              <Zap className="w-6 h-6 text-orange-400" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              The AdsNOW Platform Project - Usually $35,000, Now Just <span className="text-cyan-400">$3,488</span>
            </h3>

            <p className="text-green-400 font-semibold text-lg">+ 2 MONTHS FREE Platform Access (Save $1,994)</p>
          </div>
        </div>
      </div>
    </section>
  )
}
