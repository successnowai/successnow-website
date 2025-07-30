"use client"

import Link from "next/link"
import { Bot } from "lucide-react"

interface GlowingOrbCtaProps {
  label?: string
}

export function GlowingOrbCta({ label = "Launch Instant Demo NOW" }: GlowingOrbCtaProps) {
  return (
    <Link
      href="/demo"
      className="group flex flex-col items-center justify-center text-center gap-3 transition-all duration-300"
    >
      <div className="relative flex items-center justify-center">
        {/* Outer glow */}
        <div className="absolute w-32 h-32 rounded-full bg-purple-500/20 animate-pulse"></div>

        {/* Inner circle with gradient */}
        <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-purple-700 to-purple-900 group-hover:from-purple-600 group-hover:to-purple-800 transition-all duration-300 z-10">
          {/* Bot icon */}
          <Bot className="w-12 h-12 text-white" />
        </div>

        {/* Animated glow effect */}
        <div className="absolute w-24 h-24 rounded-full bg-purple-500/30 animate-ping opacity-75 animation-delay-700"></div>
      </div>

      {/* Label text - now centered */}
      <span className="text-white font-medium text-center w-full">{label}</span>
    </Link>
  )
}

export default GlowingOrbCta
