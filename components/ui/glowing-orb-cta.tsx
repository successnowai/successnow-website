"use client"

import { Bot } from "lucide-react"

export function GlowingOrbCta({ label = "Experience the AI Demo Now" }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 group cursor-pointer">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 bg-purple-600 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300 animate-pulse-slow" />
        <div className="absolute inset-0 bg-purple-500 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        <div className="relative w-full h-full flex items-center justify-center bg-black/50 rounded-full border-2 border-purple-400/80 group-hover:border-purple-300 transition-colors duration-300">
          <Bot className="w-10 h-10 text-purple-300 group-hover:text-white transition-colors duration-300" />
        </div>
      </div>
      <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 tracking-wider">
        {label}
      </span>
    </div>
  )
}
