"use client"

import { Sparkles, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PilotFundingBanner() {
  return (
    <div className="mx-auto max-w-6xl px-4 mb-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 border border-orange-500/30 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 animate-pulse" />

        <div className="relative p-4 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
                    Pilot Funding Announced
                    <br className="sm:hidden" /> — $9,000 Off Your
                    <br className="sm:hidden" /> Custom AI Build
                  </h3>
                  <div className="flex items-center gap-1 text-orange-400 flex-shrink-0">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">Limited Time</span>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                    SuccessNOW AI Systems Inc.
                    <br className="sm:hidden" /> has been awarded{" "}
                    <strong className="text-orange-400">
                      $250,000
                      <br className="sm:hidden" /> in pilot funding
                    </strong>{" "}
                    to help
                    <br className="sm:hidden" /> local businesses adopt AI
                    <br className="sm:hidden" /> at an affordable price.
                  </p>

                  <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                    <strong className="text-yellow-400 bg-yellow-400/20 px-2 py-1 rounded font-mono">"Pilot"</strong>{" "}
                    code automatically applied
                    <br className="sm:hidden" /> for a very limited time
                    <br className="sm:hidden" /> while funds last — get your
                    <br className="sm:hidden" /> fully custom{" "}
                    <strong className="text-green-400">
                      one-time setup fee
                      <br className="sm:hidden" /> for just $988
                    </strong>{" "}
                    (regularly $9,988)
                    <br className="sm:hidden" /> plus{" "}
                    <strong className="text-blue-400">
                      50% off monthly fees
                      <br className="sm:hidden" /> for life
                    </strong>{" "}
                    at only $997/month.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mb-4 text-xs md:text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></span>
                    <span>AI-visible website</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></span>
                    <span>High-converting funnels</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></span>
                    <span>AI chat & voice</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></span>
                    <span>AdsNow.ai Platinum + AI SEO</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-orange-300 font-medium text-sm md:text-base">
                    Includes AdsNow.ai Platinum ($998/mo value), AI SEO by SEOExperts.ai, and{" "}
                    <strong className="text-green-400">2 months FREE platform access</strong> (saving $1,994).
                  </p>

                  <p className="text-green-400 font-semibold text-sm">
                    30-day money-back guarantee — No Risk, Just Missed Opportunity!
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 mt-4 md:mt-0">
              <a href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-6 py-3 transition-all duration-300 hover:scale-105 shadow-lg">
                  Claim Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
