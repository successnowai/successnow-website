"use client"

import { useState } from "react"
import { AlertTriangle, X, ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AiAgentAlert() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-gradient-to-r from-red-600/90 to-orange-600/90 border-y border-red-500/50 py-4 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-yellow-300 animate-pulse" />
            <span className="text-white font-bold text-lg">URGENT:</span>
          </div>

          <div className="text-white">
            <span className="font-semibold">Your competitors are using AI agents right now.</span>
            <span className="ml-2 hidden sm:inline">Every day you wait, they capture more of your market share.</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold transition-all duration-300 hover:scale-105"
            >
              <Zap className="w-4 h-4 mr-2" />
              Get AI Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>

          <button onClick={() => setIsVisible(false)} className="text-white/80 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
