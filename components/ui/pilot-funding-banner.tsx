"use client"

import { motion } from "framer-motion"
import { Sparkles, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PilotFundingBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-6xl px-4 mb-8"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 border border-orange-500/30 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 animate-pulse" />

        <div className="relative p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Pilot Funding Announced — $2,000 Off Your Custom AI Build
                </h3>
                <div className="flex items-center gap-1 text-orange-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">Limited Time</span>
                </div>
              </div>

              <p className="text-gray-200 mb-4 leading-relaxed">
                SuccessNOW AI Systems Inc. has been awarded{" "}
                <strong className="text-orange-400">$250,000 in pilot funding</strong> to help local businesses adopt AI
                at an affordable price. No application required—use code{" "}
                <strong className="text-yellow-400 bg-yellow-400/20 px-2 py-1 rounded font-mono">"2000OFF"</strong> to
                launch your fully custom setup:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4 text-sm text-gray-300">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  AI-visible website
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  High-converting funnels
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  AI chat & voice
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  AI paid ads & SEO
                </div>
              </div>

              <p className="text-orange-300 font-medium mb-4">
                Claim your spot now—this pilot program is limited and ends soon.
              </p>
            </div>

            <div className="flex-shrink-0">
              <a href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-6 py-3 transition-all duration-300 hover:scale-105 shadow-lg">
                  Claim Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
