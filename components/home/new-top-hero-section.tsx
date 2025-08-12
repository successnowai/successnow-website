"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Star, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

export function NewTopHeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900" />

      {/* Animated orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-8">
            <Star className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">#1 AI Business Platform</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block text-white">Your Business Needs</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              AI That Works
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Stop losing customers to AI-powered competitors. Get your complete AI business system that converts
            visitors, nurtures leads, and grows revenue 24/7.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-cyan-400 mr-2" />
                <span className="text-3xl font-bold text-white">1000+</span>
              </div>
              <p className="text-gray-400">Businesses Growing</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-cyan-400 mr-2" />
                <span className="text-3xl font-bold text-white">300%</span>
              </div>
              <p className="text-gray-400">Average ROI Increase</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-6 h-6 text-cyan-400 mr-2" />
                <span className="text-3xl font-bold text-white">24/7</span>
              </div>
              <p className="text-gray-400">AI Working For You</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-10 py-6 text-xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-cyan-500/25"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Get Started Now
                <ArrowRight
                  className={`ml-3 w-6 h-6 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
                />
              </Button>
            </Link>

            <Link href="/demo">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 px-10 py-6 text-xl transition-all duration-300 bg-transparent"
              >
                <Play className="mr-3 w-6 h-6" />
                Watch Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
