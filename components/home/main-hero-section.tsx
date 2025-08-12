"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Sparkles, Zap } from "lucide-react"
import Link from "next/link"
import RotatingText from "@/components/ui/rotating-text"

export default function MainHeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-slate-900/80 to-black/90" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div
        className={`relative z-10 max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Main headline */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white brightness-110">AI That Makes Your Business</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              <RotatingText />
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stop losing customers to competitors with AI. Get your complete AI business system that works 24/7 to grow
            your revenue while you sleep.
          </p>
        </div>

        {/* Key benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <Sparkles className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">AI Chat & Voice</h3>
            <p className="text-gray-400 text-sm">
              Never miss a lead with 24/7 AI that converts visitors into customers
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">AI Marketing</h3>
            <p className="text-gray-400 text-sm">Automated ads, SEO, and funnels that generate leads on autopilot</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <ArrowRight className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Complete System</h3>
            <p className="text-gray-400 text-sm">Everything you need: website, CRM, automation, and AI agents</p>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started Now
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
              Watch Live Demo
            </Button>
          </Link>
        </div>

        {/* Social proof */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-4">Trusted by 1000+ businesses to grow with AI</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-gray-500 font-semibold">AutoDealers</div>
            <div className="text-gray-500 font-semibold">Realtors</div>
            <div className="text-gray-500 font-semibold">Contractors</div>
            <div className="text-gray-500 font-semibold">Healthcare</div>
            <div className="text-gray-500 font-semibold">Legal</div>
          </div>
        </div>
      </div>
    </section>
  )
}
