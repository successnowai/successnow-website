"use client"

import { useState } from "react"
import { VoiceDemoModal } from "@/components/ui/voice-demo-modal"
import { Bot } from 'lucide-react'

export function FloatingChatRobot() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-black/80 backdrop-blur-sm text-white text-sm rounded-lg whitespace-nowrap">
            Click here for AI demo
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
          </div>
        )}
        
        {/* Glassmorphic floating orb */}
        <div 
          className="relative w-16 h-16 cursor-pointer group"
          onClick={() => setIsModalOpen(true)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {/* Outer glow rings */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-xl animate-pulse"></div>
          <div className="absolute inset-1 rounded-full bg-gradient-to-r from-purple-400/40 to-pink-400/40 blur-lg animate-pulse delay-75"></div>
          
          {/* Main orb with glassmorphic effect */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-500/40 to-pink-500/40 backdrop-blur-xl border border-purple-400/40 shadow-2xl group-hover:scale-110 transition-all duration-300">
            {/* Inner glow */}
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-purple-400/30 to-pink-400/30 backdrop-blur-lg"></div>
            
            {/* Center with icon */}
            <div className="absolute inset-0 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <Bot className="w-4 h-4 text-white animate-pulse" />
              </div>
            </div>
            
            {/* Pulsing center dot */}
            <div className="absolute inset-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 animate-ping"></div>
          </div>
          
          {/* Hover effect ring */}
          <div className="absolute inset-0 rounded-full border-2 border-purple-400/0 group-hover:border-purple-400/60 transition-all duration-300 group-hover:scale-125"></div>
        </div>
      </div>

      <VoiceDemoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}
