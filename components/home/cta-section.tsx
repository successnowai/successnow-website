"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Clock, Shield } from "lucide-react"
import Link from "next/link"

export default function CtaSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800" />

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Limited Time Offer</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Don't Let Your Competitors
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Win With AI
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Every day you wait is another day your competitors capture customers with AI. Join the thousands of
            businesses already growing faster with SuccessNOW.
          </p>
        </div>

        {/* Value props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Setup in 24 Hours</h3>
            <p className="text-gray-400 text-sm">Your AI system will be live and working tomorrow</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <Shield className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">30-Day Guarantee</h3>
            <p className="text-gray-400 text-sm">Not satisfied? Get every penny back, no questions asked</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <Sparkles className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">No Technical Skills</h3>
            <p className="text-gray-400 text-sm">We handle everything—you just watch your business grow</p>
          </div>
        </div>

        {/* Main CTA */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h3>
          <p className="text-gray-300 mb-6">
            Join over 1,000 businesses already using AI to grow faster, serve customers better, and increase profits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-10 py-6 text-xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-cyan-500/25"
              >
                Get Started Now
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </Link>

            <Link href="/book">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 px-10 py-6 text-xl transition-all duration-300 bg-transparent"
              >
                Book a Demo First
              </Button>
            </Link>
          </div>
        </div>

        {/* Urgency message */}
        <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-xl p-6">
          <p className="text-red-300 font-semibold text-lg">
            ⚡ Don't wait—your competitors are already using AI to capture your customers. The longer you wait, the
            harder it becomes to catch up.
          </p>
        </div>
      </div>
    </section>
  )
}
