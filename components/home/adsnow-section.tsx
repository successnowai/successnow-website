"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, TrendingUp, Zap, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function AdsNowSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const features = [
    {
      icon: Target,
      title: "AI-Powered Targeting",
      description: "Our AI analyzes your ideal customers and finds more people just like them across all platforms.",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: TrendingUp,
      title: "Automated Optimization",
      description: "Campaigns automatically adjust bids, audiences, and creative to maximize your ROI 24/7.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Instant Campaign Creation",
      description: "Launch high-converting ad campaigns in minutes, not hours. AI handles the heavy lifting.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: BarChart3,
      title: "Smart Analytics",
      description: "Get clear insights on what's working and what's not, with AI recommendations for improvement.",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800" />

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-red-400" />
            <span className="text-red-400 text-sm font-medium">AdsNOW AI Platform</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI That Runs Your Ads
            <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Better Than You Can
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stop wasting money on ads that don't work. Our AI creates, manages, and optimizes your campaigns across
            Google, Facebook, and more—automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mb-6`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>

                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Results showcase */}
        <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Real Results from Real Businesses</h3>
            <p className="text-gray-300">See what happens when AI takes over your advertising</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">300%</div>
              <div className="text-white font-semibold mb-1">Average ROI Increase</div>
              <div className="text-gray-400 text-sm">Within first 90 days</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">50%</div>
              <div className="text-white font-semibold mb-1">Lower Cost Per Lead</div>
              <div className="text-gray-400 text-sm">Compared to manual campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-white font-semibold mb-1">Automated Optimization</div>
              <div className="text-gray-400 text-sm">Never miss an opportunity</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Let AI Handle Your Advertising?</h3>
            <p className="text-xl text-gray-300">
              Stop the guesswork. Start getting results that actually matter to your bottom line.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/25"
              >
                Start AI Advertising Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

            <Link href="/demo">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-red-500/50 text-red-400 hover:bg-red-500/10 hover:border-red-400 px-8 py-4 text-lg transition-all duration-300 bg-transparent"
              >
                See AdsNOW Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
