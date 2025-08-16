"use client"

import { useState, useEffect } from "react"
import { X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AutoPilotFundingPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if popup has been shown in this session
    const hasShown = sessionStorage.getItem("pilot-funding-popup-shown")

    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsVisible(true)
        sessionStorage.setItem("pilot-funding-popup-shown", "true")
      }, 10000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleClaimNow = () => {
    window.open("https://signup.successnow.ai", "_blank")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[95vh] overflow-y-auto bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl shadow-2xl border border-purple-500/20">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors duration-200 flex items-center justify-center text-white"
        >
          <X className="w-5 h-5 sm:w-4 sm:h-4" />
        </button>

        {/* Content */}
        <div className="p-4 sm:p-8">
          <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                <h2 className="text-lg sm:text-2xl font-bold text-white leading-tight">
                  Pilot Funding Announced — $9,000 Off Your Custom AI Build
                </h2>
                <div className="bg-orange-500 text-white px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0 self-start">
                  Limited Time
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="mb-4 sm:mb-6">
            <p className="text-gray-300 text-sm sm:text-lg mb-3 sm:mb-4 leading-relaxed">
              SuccessNOW AI Systems Inc. has been awarded{" "}
              <span className="text-orange-400 font-semibold">$250,000 in pilot funding</span> to help local businesses
              adopt AI at an affordable price.{" "}
              <span className="bg-yellow-400 text-black px-1.5 py-0.5 sm:px-2 sm:py-1 rounded font-bold text-xs sm:text-sm">
                Pilot
              </span>{" "}
              code automatically applied for a very limited time while funds last — get your fully custom{" "}
              <span className="text-green-400 font-bold">one-time setup fee for just $988</span> (regularly $9,988) plus{" "}
              <span className="text-blue-400 font-bold">50% off monthly fees for life</span> at only $997/month:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300 text-sm sm:text-base">AI-visible website</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300 text-sm sm:text-base">High-converting funnels</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300 text-sm sm:text-base">AI chat & voice</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300 text-sm sm:text-base">AdsNow.ai Platinum + AI SEO</span>
              </div>
            </div>

            <p className="text-orange-400 font-semibold text-sm sm:text-lg mb-2 leading-relaxed">
              Includes AdsNow.ai Platinum ($998/mo value), AI SEO by SEOExperts.ai, and{" "}
              <span className="text-green-400">2 months FREE platform access</span> (saving $1,994).
            </p>

            <p className="text-green-400 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              30-day money-back guarantee — No Risk, Just Missed Opportunity!
            </p>

            <p className="text-orange-400 font-semibold text-sm sm:text-lg leading-relaxed">
              Claim your spot now—this pilot program is limited and ends soon while funds last.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleClaimNow}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Claim Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AutoPilotFundingPopup
