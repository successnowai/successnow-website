"use client"

import { Bot } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export function GlowingOrbCta({ label = "Experience the AI Demo Now" }: { label?: string }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="mb-4 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden"
          style={{ width: "350px", height: "200px" }}
        >
          <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <h3 className="font-semibold text-sm">AI Voice Assistant</h3>
            <button onClick={() => setIsExpanded(false)} className="text-white hover:text-gray-200 transition-colors">
              ✕
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "calc(100% - 48px)" }}>
            <iframe
              src="https://iframes.ai/o/1753831620452x607403809624031200?color=ed10cc&icon=bot"
              allow="microphone"
              style={{ width: "100%", height: "100%", border: "none" }}
              id="assistantFrame"
            />
          </div>
        </motion.div>
      )}

      <div className="group cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 bg-purple-600 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300 animate-pulse" />
          <div className="absolute inset-0 bg-purple-500 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          <div className="relative w-full h-full flex items-center justify-center bg-black/50 rounded-full border-2 border-purple-400/80 group-hover:border-purple-300 transition-colors duration-300">
            <Bot className="w-10 h-10 text-purple-300 group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
        <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 tracking-wider">
          {label}
        </span>
      </div>
    </div>
  )
}
