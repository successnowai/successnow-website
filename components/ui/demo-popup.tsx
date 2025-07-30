"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface DemoPopupProps {
  isOpen: boolean
  onClose: () => void
  title?: string
}

export function DemoPopup({ isOpen, onClose, title = "AI Voice Assistant" }: DemoPopupProps) {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
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
              <h3 className="font-semibold text-lg">{title}</h3>
              <button
                onClick={onClose}
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
                id="assistantFramePopup"
                title="AI Voice Assistant"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default DemoPopup
