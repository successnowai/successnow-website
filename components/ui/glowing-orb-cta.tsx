"use client"

import { Bot } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export function GlowingOrbCta({ label = "Experience the AI Demo Now" }: { label?: string }) {
  const [isOpen, setIsOpen] = useState(false)

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <div
        className="flex flex-col items-center justify-center gap-4 group cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
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

      {/* Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="relative bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden max-w-md w-full mx-4"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <h3 className="font-semibold text-lg">AI Voice Assistant</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-white/10"
                  aria-label="Close AI Assistant"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}>
                <iframe
                  src="https://iframes.ai/o/1753831620452x607403809624031200?color=ed10cc&icon=bot"
                  allow="microphone"
                  style={{ width: "100%", height: "100%", border: "none" }}
                  id="assistantFrameOrb"
                  title="AI Voice Assistant"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default GlowingOrbCta
