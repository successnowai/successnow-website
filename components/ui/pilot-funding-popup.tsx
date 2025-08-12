"use client"

import { useState, useEffect } from "react"
import { X, Sparkles, Clock, Check, Zap } from "lucide-react"
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
  ]

  if (!isVisible) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg mx-auto my-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl border border-orange-500/30 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 animate-pulse" />

        {/* Close button - Made larger and more accessible */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 z-10 w-10 h-10 rounded-full bg-slate-800/90 hover:bg-slate-700 transition-colors duration-200 flex items-center justify-center text-gray-300 hover:text-white border border-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative p-4 sm:p-6">
          {/* Header - Compact */}
          <div className="text-center mb-4">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>

            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 font-semibold text-sm">Limited Time Offer</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">🎉 Pilot Funding Announced</h2>
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              $2,000 Off Your Custom AI Build
            </div>
          </div>

          {/* Content - More compact */}
          <div className="space-y-4">
            <p className="text-gray-300 text-center text-sm leading-relaxed">
              SuccessNOW AI Systems Inc. has been awarded{" "}
              <strong className="text-orange-400">$250,000 in pilot funding</strong> to help local businesses adopt AI
              at an affordable price.
            </p>

            <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
              <p className="text-center text-gray-300 mb-2 text-sm">No application required—use code:</p>
              <div className="text-center">
                <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold text-lg px-3 py-1 rounded font-mono">
                  2000OFF
                </span>
              </div>
            </div>

            {/* New pricing section */}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">Full Setup Only $1,488</div>
                <div className="text-green-400 font-semibold mb-2">Get AI Working For You NOW!</div>
                <div className="text-red-400 font-bold text-sm flex items-center justify-center gap-1">
                  <Zap className="w-4 h-4" />
                  DON'T BE LEFT COMPETING AGAINST IT!
                </div>
              </div>
            </div>

            {/* Features - More compact */}
            <div>
              <h3 className="text-base font-semibold text-white mb-2 text-center">Your complete AI system includes:</h3>
              <div className="grid grid-cols-1 gap-1">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                    <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-2">
              <p className="text-red-300 font-medium text-center text-sm">
                ⚡ Limited spots available—pilot program ends soon!
              </p>
            </div>

            {/* CTA Buttons - Stacked for mobile */}
            <div className="space-y-2">
              <a href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 text-base transition-all duration-300 hover:scale-105 shadow-lg">
                  Claim $2,000 Discount Now
                </Button>
              </a>
              <Button
                variant="outline"
                onClick={handleClose}
                className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
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
