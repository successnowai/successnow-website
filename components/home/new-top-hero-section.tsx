"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Zap, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

export function NewTopHeroSection() {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ["Dominate", "Automate", "Scale", "Convert", "Optimize", "Accelerate"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black" />

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-6 py-2 mb-8">
          <Zap className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-300 font-medium">AI-Powered Business Automation</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">
            {words[currentWord]}
          </span>
          <br />
          Your Market
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          The complete AI platform that handles your leads, books appointments, and grows your business
          <span className="text-cyan-400 font-semibold"> while you sleep</span>
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400">300%</div>
            <div className="text-gray-400">Lead Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">24/7</div>
            <div className="text-gray-400">AI Working</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">5 Min</div>
            <div className="text-gray-400">Setup Time</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-cyan-500/25"
            >
              Start Dominating Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/demo">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 px-8 py-4 text-lg transition-all duration-300 bg-transparent"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </Link>
        </div>

        {/* Social proof */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>10,000+ Businesses</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            <span>$50M+ Revenue Generated</span>
          </div>
        </div>
      </div>
    </section>
  )
}
