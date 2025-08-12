"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import RotatingText from "@/components/ui/rotating-text"

export default function MainHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background with enhanced darkness and brightness */}
      <div className="absolute inset-0 bg-black/90 brightness-110" />

      {/* Animated background orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Premium badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
          <Sparkles className="w-5 h-5 text-cyan-400" />
          <span className="text-cyan-300 font-semibold">AI Business Revolution</span>
        </div>

        {/* Main headline with rotating text */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
          Make Your Business{" "}
          <div className="inline-block">
            <RotatingText />
          </div>
        </h1>

        {/* Enhanced subheadline */}
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed brightness-110">
          The only AI platform that handles your leads, books appointments, and grows your revenue
          <span className="text-cyan-400 font-bold"> automatically</span> - while your competitors are still answering
          phones manually.
        </p>

        {/* Enhanced CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-10 py-5 text-xl transition-all duration-300 hover:scale-110 shadow-2xl shadow-cyan-500/30 brightness-110"
            >
              Start Dominating Now
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </Link>
          <Link href="/demo">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-cyan-400/60 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-300 px-10 py-5 text-xl transition-all duration-300 bg-transparent brightness-110"
            >
              See It In Action
            </Button>
          </Link>
        </div>

        {/* Enhanced trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 brightness-110">300%</div>
            <div className="text-gray-300 brightness-110">More Leads</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 brightness-110">24/7</div>
            <div className="text-gray-300 brightness-110">AI Working</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 brightness-110">5 Min</div>
            <div className="text-gray-300 brightness-110">Setup</div>
          </div>
        </div>
      </div>
    </section>
  )
}
