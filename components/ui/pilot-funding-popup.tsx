"use client"

import { useState, useEffect } from "react"
import { X, Sparkles, Clock, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PilotFundingPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if popup has been shown in this session
    if (typeof window !== "undefined") {
      const popupShown = sessionStorage.getItem("pilot-funding-popup-shown")
      if (popupShown) {
        setHasShown(true)
        return
      }

      // Show popup after 20 seconds
      const timer = setTimeout(() => {
        if (!hasShown) {
          setIsVisible(true)
          sessionStorage.setItem("pilot-funding-popup-shown", "true")
          setHasShown(true)
        }
      }, 20000)

      return () => clearTimeout(timer)
    }
  }, [hasShown])

  const handleClose = () => {
    setIsVisible(false)
  }

  const features = [
    "AI-visible website",
    "High-converting funnels",
    "AI chat assistant",
    "AI voice system",
    "AI paid ads management",
    "AI SEO optimization",
    "Full SuccessNOW systems",
  ]

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative max-w-lg w-full max-h-[90vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl border border-orange-500/30 shadow-2xl overflow-hidden my-4">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 animate-pulse" />

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors duration-200 flex items-center justify-center text-gray-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative p-6 overflow-y-auto max-h-[calc(90vh-2rem)]">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>

            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-orange-400" />
              <span className="text-orange-400 font-semibold">Limited Time Offer</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Pilot Funding Announced</h2>
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              $2,000 Off Your Custom AI Build
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-gray-300 text-center leading-relaxed">
              SuccessNOW AI Systems Inc. has been awarded{" "}
              <strong className="text-orange-400">$250,000 in pilot funding</strong> to help local businesses adopt AI
              at an affordable price.
            </p>

            {/* Added hook text */}
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/50 rounded-lg p-4 mb-4">
              <p className="text-center font-bold text-white text-lg leading-tight">
                <span className="text-red-400">Get AI NOW in your business before you are competing against it!</span>
                <br />
                <span className="text-orange-400">AI isn't coming, It's Here! Get AI NOW!</span>
              </p>
            </div>

            <p className="text-gray-300 text-center leading-relaxed">
              Our already discounted custom AI systems and AI-visible website is now only{" "}
              <strong className="text-green-400">$1,488 for everything</strong> with this pilot funding discount.
            </p>

            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
              <p className="text-center text-gray-300 mb-2">No application required—use code:</p>
              <div className="text-center">
                <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold text-xl px-4 py-2 rounded-lg font-mono">
                  2000OFF
                </span>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3 text-center">Launch your fully custom setup:</h3>
              <div className="grid grid-cols-1 gap-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3">
              <p className="text-red-300 font-medium text-center">
                ⚡ Claim your spot now—this pilot program is limited and ends soon.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Claim $2,000 Discount Now
                </Button>
              </a>
              <Button
                variant="outline"
                onClick={handleClose}
                className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white px-6 bg-transparent"
              >
                Maybe Later
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
