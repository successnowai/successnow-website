"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, Clock, ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

export default function PilotFundingPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60) // 24 hours in seconds

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem("pilot-funding-popup-shown")

    if (!popupShown) {
      const timer = setTimeout(() => {
        setIsVisible(true)
        sessionStorage.setItem("pilot-funding-popup-shown", "true")
      }, 20000) // Show after 20 seconds

      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [timeLeft])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-red-900/90 to-orange-900/90 border-2 border-red-500/50 rounded-2xl p-6 max-w-md w-full relative backdrop-blur-xl"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <div className="bg-red-500/20 border border-red-500/40 rounded-full px-4 py-2 inline-flex items-center gap-2 mb-4">
                <Zap className="w-4 h-4 text-red-400" />
                <span className="text-red-300 font-semibold text-sm">LIMITED TIME OFFER</span>
              </div>

              <h2 className="text-2xl font-bold text-white mb-2">🚨 PILOT FUNDING ALERT 🚨</h2>

              <p className="text-red-300 font-bold text-lg mb-4">Get AI Working For You NOW!</p>

              <div className="bg-black/40 border border-red-500/30 rounded-xl p-4 mb-4">
                <div className="text-3xl font-bold text-white mb-1">$1,488</div>
                <div className="text-red-300 text-sm">Complete AI Setup + First Month</div>
              </div>

              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-orange-400" />
                <span className="text-orange-300 font-semibold">Offer expires in: {formatTime(timeLeft)}</span>
              </div>

              <p className="text-white font-bold text-lg mb-2">DON'T BE LEFT COMPETING AGAINST IT!</p>

              <p className="text-gray-300 text-sm mb-6">
                While your competitors automate with AI, you're still doing everything manually. This pilot program gets
                you ahead of the curve.
              </p>

              <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
                <Button
                  className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-3 text-lg transition-all duration-300 hover:scale-105 mb-3"
                  onClick={handleClose}
                >
                  Secure My AI Advantage Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <p className="text-gray-400 text-xs">30-day money-back guarantee • Setup in 5 minutes</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
