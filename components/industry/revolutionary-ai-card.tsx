"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare, BarChart3, FileText, Settings, Clock, Zap, Brain, Target } from "lucide-react"
import DemoPopup from "@/components/ui/demo-popup"

export default function RevolutionaryAiCard() {
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false)

  return (
    <>
      <div className="relative bg-black rounded-3xl p-12 sm:p-16 lg:p-20 overflow-hidden border-2 border-pink-500 shadow-2xl shadow-pink-500/20">
        {/* Cyberpunk background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-cyan-400/10" />

        {/* Animated neon grid lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent animate-pulse" />
          <div
            className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        {/* Floating neon particles */}
        <div className="absolute inset-0">
          <div className="absolute top-8 left-8 w-2 h-2 bg-pink-500 rounded-full animate-pulse shadow-lg shadow-pink-500/50" />
          <div
            className="absolute top-12 right-12 w-1 h-1 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute bottom-16 left-16 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse shadow-lg shadow-pink-400/50"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-8 right-8 w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-lg shadow-cyan-500/50"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="absolute top-1/2 left-1/3 w-1 h-1 bg-pink-300 rounded-full animate-pulse shadow-lg shadow-pink-300/50"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse shadow-lg shadow-cyan-300/50"
            style={{ animationDelay: "2.5s" }}
          />
        </div>

        <div className="relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <Zap className="h-12 w-12 text-pink-500 animate-pulse" />
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                REVOLUTIONARY
              </h2>
              <Brain className="h-12 w-12 text-cyan-400 animate-pulse" />
            </div>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
              <span className="text-pink-500 drop-shadow-lg shadow-pink-500/50">SuccessNOW</span> AI AGENTS
            </h3>
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-pink-500/20 to-cyan-400/20 border border-pink-500/50 rounded-2xl p-8 backdrop-blur-sm">
              <p className="text-2xl sm:text-3xl text-white font-semibold leading-relaxed">
                It's like having the <span className="text-pink-400">BEST SALESPERSON</span> imaginable—one who{" "}
                <span className="text-cyan-400">NEVER SLEEPS</span>, never gets sick, and works{" "}
                <span className="text-pink-400">24/7</span> for you.
              </p>
            </div>
          </div>

          {/* Features Grid - Dark card style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Card 1 - Cyan number */}
            <Card className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
              <CardContent className="p-0">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-6xl font-black text-cyan-400">1</span>
                  <Phone className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">VOICE CALLS</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Takes & makes calls like a human expert</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Natural conversation flow and rapport building</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Handles objections professionally</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 2 - Pink number */}
            <Card className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-pink-400 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25">
              <CardContent className="p-0">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-6xl font-black text-pink-400">2</span>
                  <MessageSquare className="h-8 w-8 text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">OMNICHANNEL</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>SMS, Email & Social Media mastery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Instant response across all platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Consistent brand voice everywhere</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 3 - Cyan number */}
            <Card className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
              <CardContent className="p-0">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-6xl font-black text-cyan-400">3</span>
                  <BarChart3 className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AD CAMPAIGNS</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Launches paid ads like a pro marketer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>AI split testing with ROI tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Optimizes campaigns 24/7 automatically</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 4 - Pink number */}
            <Card className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-pink-400 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25">
              <CardContent className="p-0">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-6xl font-black text-pink-400">4</span>
                  <FileText className="h-8 w-8 text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">SMART NOTES</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Updates client notes on every interaction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Auto notes and CRM logging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Tracks conversation history and preferences</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 5 - Cyan number */}
            <Card className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
              <CardContent className="p-0">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-6xl font-black text-cyan-400">5</span>
                  <Settings className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">LEARNS EVERYTHING</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Masters your business & client history</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Adapts to your sales process and style</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Continuously improves from interactions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 6 - Pink number */}
            <Card className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-pink-400 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25">
              <CardContent className="p-0">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-6xl font-black text-pink-400">6</span>
                  <Clock className="h-8 w-8 text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">PERFECT MEMORY</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Remembers every conversation to build rapport</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Recalls client preferences and pain points</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Never forgets important details or follow-ups</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Pricing Highlight - Dark card style */}
          <Card className="bg-slate-900 border-2 border-pink-500 rounded-3xl p-12 mb-16 relative overflow-hidden hover:border-cyan-400 transition-all duration-300">
            <div className="absolute top-8 right-8">
              <Target className="h-16 w-16 text-pink-500 animate-pulse" />
            </div>
            <CardContent className="p-0">
              <div className="flex items-start gap-6 mb-8">
                <span className="text-8xl font-black text-cyan-400">$</span>
                <div>
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
                    ONE-TIME SETUP FEE <span className="text-pink-400">$988</span>
                  </h3>
                  <p className="text-2xl text-gray-300 font-semibold mb-4">
                    Regularly $9,988 - <span className="text-cyan-400">90% OFF</span> Pilot Program +
                    <span className="text-blue-400"> 50% OFF monthly fees for life</span> at only $997/month
                  </p>
                  <p className="text-lg text-green-400 font-semibold mb-2">
                    Includes 2 months FREE platform access (saving $1,994)
                  </p>
                  <p className="text-sm text-green-400 font-semibold">
                    30-day money-back guarantee — No Risk, Just Missed Opportunity!
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>Complete AI website, voice agents, and automation setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>AdsNow.ai Platinum ($998/mo value) + AI SEO by SEOExperts.ai included</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>Works 24/7 without breaks, sick days, or training costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Pilot Program: Lifetime 50% discount on monthly platform fees</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-block relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-2xl blur-lg opacity-50 animate-pulse" />
              <Button
                size="lg"
                onClick={() => setIsDemoPopupOpen(true)}
                className="relative bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-400 hover:to-pink-500 text-white font-black text-2xl sm:text-3xl px-16 py-8 rounded-2xl shadow-2xl shadow-pink-500/50 transition-all duration-300 hover:scale-105 border-2 border-pink-400"
              >
                <Zap className="h-8 w-8 mr-4" />
                DEMO IT NOW
                <Zap className="h-8 w-8 ml-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <DemoPopup isOpen={isDemoPopupOpen} onClose={() => setIsDemoPopupOpen(false)} />
    </>
  )
}

// Named export for the component
export { RevolutionaryAiCard }
