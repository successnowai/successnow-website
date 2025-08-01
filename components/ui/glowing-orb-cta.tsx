"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Bot, MessageCircle } from "lucide-react"

interface GlowingOrbCtaProps {
  label?: string
  size?: "sm" | "md" | "lg"
  onClick?: () => void
}

export function GlowingOrbCta({ label = "Talk to AI", size = "md", onClick }: GlowingOrbCtaProps) {
  const [isHovered, setIsHovered] = useState(false)

  const sizeClasses = {
    sm: "w-12 h-12 text-sm",
    md: "w-16 h-16 text-base",
    lg: "w-20 h-20 text-lg",
  }

  const buttonSizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Glowing Orb */}
      <div
        className={`relative ${sizeClasses[size]} cursor-pointer transition-all duration-300 ${
          isHovered ? "scale-110" : "scale-100"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-[#00BFFF] opacity-20 blur-xl animate-pulse"></div>

        {/* Middle glow */}
        <div className="absolute inset-2 rounded-full bg-[#00BFFF] opacity-40 blur-lg animate-pulse animation-delay-500"></div>

        {/* Inner orb */}
        <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#00BFFF] to-[#0080FF] flex items-center justify-center shadow-lg">
          <Bot className="w-1/2 h-1/2 text-white animate-bounce" />
        </div>

        {/* Rotating ring */}
        <div
          className="absolute inset-0 rounded-full border-2 border-[#00BFFF] opacity-30 animate-spin"
          style={{ animationDuration: "3s" }}
        ></div>
      </div>

      {/* CTA Button */}
      <Button
        className={`bg-[#00BFFF] hover:bg-[#00A3D9] text-white font-semibold rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(0,191,255,0.5)] transition-all duration-300 ${buttonSizeClasses[size]}`}
        onClick={onClick}
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        {label}
      </Button>
    </div>
  )
}

export default GlowingOrbCta
