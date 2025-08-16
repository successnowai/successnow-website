"use client"

import { Button } from "@/components/ui/button"
import { Clock, AlertTriangle } from "lucide-react"

export default function UrgencyAlertSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-red-800/30 to-orange-900/20"></div>
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Purple glow effect */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="bg-gradient-to-br from-red-600/90 via-red-700/90 to-orange-600/90 rounded-3xl p-6 md:p-12 backdrop-blur-sm border border-red-500/30 shadow-2xl">
          {/* Alert Header */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <AlertTriangle className="w-8 h-8 text-yellow-300" />
            <h2 className="text-2xl font-bold text-yellow-300 tracking-wider">URGENT BUSINESS ALERT</h2>
            <AlertTriangle className="w-8 h-8 text-yellow-300" />
          </div>

          {/* Main Heading */}
          <h3 className="text-4xl md:text-6xl font-bold text-center mb-8 leading-tight">
            Your Competitors Are Using <span className="text-red-300">AI Agents</span>
            <br />
            Right Now
          </h3>

          {/* Description */}
          <p className="text-xl md:text-2xl text-center mb-8 text-gray-100 leading-relaxed max-w-5xl mx-auto">
            While you're manually handling calls and emails, smart businesses are using AI to capture leads 24/7, book
            appointments instantly, and dominate their markets.{" "}
            <span className="text-red-300 font-semibold">Don't get left behind.</span>
          </p>

          {/* Clock Warning */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <Clock className="w-6 h-6 text-orange-300" />
            <p className="text-lg md:text-xl text-orange-300 font-semibold">
              Every day you wait, you lose more market share
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-6 px-4">
            <a
              href="https://signup.successnow.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full max-w-md"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold text-base md:text-xl px-4 md:px-12 py-4 md:py-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 w-full"
              >
                <span className="block sm:hidden">Get AI Working Now →</span>
                <span className="hidden sm:block">Get AI Working For You NOW →</span>
              </Button>
            </a>
          </div>

          {/* Bottom Text */}
          <p className="text-center text-gray-300 text-lg">Setup takes 5 minutes. Results start immediately.</p>
        </div>
      </div>
    </section>
  )
}
