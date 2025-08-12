"use client"

import { useState, useEffect } from "react"
import { X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function PilotFundingPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 20000) // Show after 20 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsVisible(false)
      setIsClosing(false)
    }, 300)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <Card
        className={`max-w-2xl w-full bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-orange-500/30 shadow-2xl transform transition-all duration-300 ${
          isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <CardContent className="p-8 relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">🎉 Pilot Funding Announced</h2>
            <div className="text-2xl font-bold text-orange-400 mb-4">$2,000 Off Your Custom AI Build</div>
          </div>

          {/* Content */}
          <div className="text-gray-300 space-y-4 mb-6">
            <p className="text-lg">
              <strong className="text-white">SuccessNOW AI Systems Inc.</strong> has been awarded{" "}
              <strong className="text-orange-400">$250,000 in pilot funding</strong> to help local businesses adopt AI
              at an affordable price.
            </p>

            <p>
              <strong className="text-white">No application required</strong>—use code{" "}
              <span className="bg-orange-500 text-white px-3 py-1 rounded font-bold">"2000OFF"</span> to launch your
              fully custom setup:
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <li className="flex items-center">
                <span className="text-orange-400 mr-2">•</span>
                AI-visible website
              </li>
              <li className="flex items-center">
                <span className="text-orange-400 mr-2">•</span>
                High-converting funnels
              </li>
              <li className="flex items-center">
                <span className="text-orange-400 mr-2">•</span>
                AI chat & AI voice
              </li>
              <li className="flex items-center">
                <span className="text-orange-400 mr-2">•</span>
                AI paid ads & AI SEO
              </li>
              <li className="flex items-center">
                <span className="text-orange-400 mr-2">•</span>
                Full SuccessNOW systems
              </li>
            </ul>

            <p className="text-center text-yellow-400 font-semibold">
              ⚡ Claim your spot now—this pilot program is limited and ends soon.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-3 text-lg">
                Claim Your $2,000 Discount
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={handleClose}
              className="w-full sm:w-auto border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
            >
              Maybe Later
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
