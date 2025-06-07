"use client"

import { Sparkles } from "lucide-react"

interface InstantDemoCTAProps {
  onClick: () => void
}

export function InstantDemoCTA({ onClick }: InstantDemoCTAProps) {
  return (
    <section className="relative bg-gradient-to-b from-[#0B1426]/60 to-black/40 backdrop-blur-sm py-16 px-6">
      <div className="max-w-lg mx-auto">
        <div
          onClick={onClick}
          className="relative cursor-pointer transform transition-all duration-300 hover:scale-105 group"
        >
          {/* Main CTA Box */}
          <div className="relative bg-gradient-to-br from-[#4A90E2] via-[#5BA3F5] to-[#6BB6FF] rounded-2xl p-8 shadow-2xl border border-[#00BFFF]/30 hover:border-[#00BFFF] transition-colors duration-300 overflow-hidden">
            {/* Animated glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4A90E2]/20 via-[#5BA3F5]/20 to-[#6BB6FF]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-8 left-6 w-1 h-1 bg-white rounded-full animate-pulse animation-delay-500"></div>
              <div className="absolute bottom-6 right-8 w-1.5 h-1.5 bg-white rounded-full animate-pulse animation-delay-1000"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white">
              {/* Top sparkles */}
              <div className="flex justify-center items-center mb-4 space-x-4">
                <Sparkles className="w-6 h-6 text-white/80 animate-pulse" />
                <div className="w-8 h-8 border-2 border-white/60 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-0.5"></div>
                </div>
                <Sparkles className="w-6 h-6 text-white/80 animate-pulse animation-delay-500" />
              </div>

              {/* Main heading */}
              <h2 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
                Start My Instant Demo
                <br />
                <span className="text-2xl md:text-3xl">NOW</span>
              </h2>

              {/* Subtitle with rocket emoji */}
              <div className="flex items-center justify-center mb-6 space-x-2">
                <span className="text-lg">🚀</span>
                <span className="text-lg font-medium">Experience AI That Converts</span>
              </div>

              {/* Click to Begin button */}
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30 hover:bg-white/30 transition-all duration-200">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-white font-medium">Click to Begin</span>
              </div>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </div>
        </div>

        {/* Supporting text */}
        <p className="text-center text-gray-300 text-sm mt-4">
          No signup required • Instant access • Live AI demonstration
        </p>
      </div>
    </section>
  )
}
