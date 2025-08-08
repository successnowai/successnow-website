"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { VoiceDemoModal } from "@/components/ui/voice-demo-modal"
import { Bot, Play } from 'lucide-react'

export function LiveDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Title and Button */}
          <div className="flex-1 text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              AI Conversation Demo
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Experience the power of our AI assistant. Click to start an interactive voice conversation 
              and see how our technology can transform your business communications.
            </p>
            <Button
              onClick={() => setIsModalOpen(true)}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Demo
            </Button>
          </div>

          {/* Right side - Glassmorphic Orb */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative">
              {/* Main glassmorphic orb */}
              <div 
                className="relative w-80 h-80 cursor-pointer group"
                onClick={() => setIsModalOpen(true)}
              >
                {/* Outer glow rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl animate-pulse"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-400/30 to-pink-400/30 blur-2xl animate-pulse delay-75"></div>
                <div className="absolute inset-8 rounded-full bg-gradient-to-r from-purple-300/40 to-pink-300/40 blur-xl animate-pulse delay-150"></div>
                
                {/* Main orb with glassmorphic effect */}
                <div className="absolute inset-12 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-xl border border-purple-400/30 shadow-2xl group-hover:scale-105 transition-all duration-500">
                  {/* Inner glow */}
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 backdrop-blur-lg"></div>
                  
                  {/* Center dot with icon */}
                  <div className="absolute inset-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Pulsing center dot */}
                  <div className="absolute inset-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 animate-ping"></div>
                </div>
                
                {/* Hover effect rings */}
                <div className="absolute inset-0 rounded-full border-2 border-purple-400/0 group-hover:border-purple-400/50 transition-all duration-500 group-hover:scale-110"></div>
                <div className="absolute inset-6 rounded-full border border-pink-400/0 group-hover:border-pink-400/30 transition-all duration-700 group-hover:scale-105"></div>
              </div>
              
              {/* Click instruction text */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-purple-300 font-medium text-lg animate-pulse">
                  Click here for AI demo
                </p>
                <div className="w-2 h-2 bg-purple-400 rounded-full mx-auto mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VoiceDemoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
}
