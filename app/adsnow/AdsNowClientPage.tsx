"use client"

import dynamic from "next/dynamic"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import StarryBackground from "@/components/ui/starry-background"
import { RotatingText } from "@/components/ui/rotating-text"
import AdsSuccessEcosystem from "@/components/ui/ads-success-ecosystem"
import DemoPopup from "@/components/ui/demo-popup"
import {
  Bot,
  Sparkles,
  Target,
  MessageCircle,
  Star,
  Zap,
  BarChart3,
  CheckCircle,
  Smartphone,
  Clock,
  DollarSign,
} from "lucide-react"

/**
 * The full UI lives in AdsNowClientInner.
 * We turn off server-side rendering so nothing runs while Next.js is
 * prerendering the page during `next build`.
 */
const AdsNowClientInner = dynamic(() => import("./AdsNowClientInner"), { ssr: false, loading: () => null })

export default function AdsNowClientPage() {
  const [showDemo, setShowDemo] = useState(false)

  const rotatingTexts = [
    "Create High-Converting Ads Instantly",
    "Launch Campaigns with a Simple Text",
    "Optimize ROI Automatically 24/7",
    "Never Log Into Software Again",
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StarryBackground />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-6 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto text-center">
            {/* Revolutionary Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full mb-8 animate-pulse">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-white font-bold">REVOLUTIONARY BREAKTHROUGH</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
              <span className="text-white">AdsNOW</span>
              <br />
              <span className="text-purple-400">Super Agent</span>
            </h1>

            <div className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 h-20 flex items-center justify-center">
              <RotatingText texts={rotatingTexts} className="text-[#00BFFF]" />
            </div>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Simply text your AI AdsNOW Super Agent and watch the magic happen!
              <br />
              <span className="text-purple-400 font-semibold">
                No more logging into software - the future of ads has arrived NOW!
              </span>
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <Button
                className="px-10 py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xl rounded-full shadow-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 transform"
                onClick={() => (window.location.href = "/signup")}
              >
                Get AdsNOW Super Agent →
              </Button>
              <Button
                variant="outline"
                className="px-10 py-6 border-2 border-[#00BFFF] text-[#00BFFF] font-bold text-xl rounded-full hover:bg-[#00BFFF] hover:text-black transition-all duration-300 hover:scale-105 transform bg-transparent"
                onClick={() => setShowDemo(true)}
              >
                Watch Super Agent Demo
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black/40">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <Bot className="w-10 h-10 text-purple-400" />
                <h2 className="text-4xl md:text-5xl font-bold text-white">How AdsNOW Super Agent Works</h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionary AI that handles your entire ad creation and launch process through simple text commands
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  step: "1",
                  title: "Text Your Agent",
                  desc: "Simply send a text message to your AdsNOW Super Agent with your campaign goals",
                  icon: Smartphone,
                  color: "from-purple-600 to-purple-700",
                  detail: "No complex interfaces - just natural conversation",
                },
                {
                  step: "2",
                  title: "AI Creates Ads",
                  desc: "Agent creates multiple high-converting ads and sends you copy for review",
                  icon: Target,
                  color: "from-pink-600 to-pink-700",
                  detail: "Professional ad copy in minutes, not hours",
                },
                {
                  step: "3",
                  title: "Review & Edit",
                  desc: "Choose 1 ad or all ads, make any edits you want through simple text replies",
                  icon: Star,
                  color: "from-blue-600 to-blue-700",
                  detail: "Full control with zero complexity",
                },
                {
                  step: "4",
                  title: "Set Budget & Launch",
                  desc: "Tell the agent your budget and it launches your ads across all platforms instantly",
                  icon: Zap,
                  color: "from-green-600 to-green-700",
                  detail: "Live campaigns in under 5 minutes",
                },
              ].map((process, index) => (
                <Card
                  key={index}
                  className="bg-black/40 backdrop-blur-sm border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-20 h-20 rounded-full bg-gradient-to-r ${process.color} flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {process.step}
                    </div>
                    <process.icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                    <p className="text-gray-300 mb-4">{process.desc}</p>
                    <p className="text-sm text-purple-400 font-semibold">{process.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Example Conversation */}
            <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-center text-white mb-8">
                Example Conversation with Your Super Agent
              </h3>
              <div className="max-w-2xl mx-auto space-y-4">
                <div className="bg-blue-600/20 rounded-2xl p-4 border-l-4 border-blue-500">
                  <p className="text-white">
                    <strong>You:</strong> "Create ads for my dental practice to get more patients"
                  </p>
                </div>
                <div className="bg-purple-600/20 rounded-2xl p-4 border-l-4 border-purple-500">
                  <p className="text-white">
                    <strong>Super Agent:</strong> "I've created 3 high-converting ads for your dental practice. Here are
                    the headlines and copy options..."
                  </p>
                </div>
                <div className="bg-blue-600/20 rounded-2xl p-4 border-l-4 border-blue-500">
                  <p className="text-white">
                    <strong>You:</strong> "I like ad #2, change the headline to mention teeth whitening. Budget is
                    $500/month"
                  </p>
                </div>
                <div className="bg-purple-600/20 rounded-2xl p-4 border-l-4 border-purple-500">
                  <p className="text-white">
                    <strong>Super Agent:</strong> "Perfect! I've updated the headline and launched your teeth whitening
                    campaign with a $500/month budget across Facebook, Google, and Instagram. Your ads are now live!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why AdsNOW Super Agent Changes Everything
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stop wasting time in complex ad platforms. Your Super Agent handles everything through simple
                conversations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  title: "Save 10+ Hours Per Week",
                  desc: "No more logging into multiple platforms, creating campaigns, or managing settings. Just text and launch.",
                  benefit: "Focus on your business, not ad software",
                },
                {
                  icon: DollarSign,
                  title: "Increase ROI by 300%",
                  desc: "AI optimizes your ads 24/7 using data from 10,000+ leads generated daily across all industries.",
                  benefit: "Better results with less effort",
                },
                {
                  icon: Zap,
                  title: "Launch in Under 5 Minutes",
                  desc: "From idea to live ads faster than ever before. No technical knowledge required.",
                  benefit: "Speed of thought execution",
                },
                {
                  icon: Target,
                  title: "Professional Ad Copy",
                  desc: "Get high-converting ad copy that would cost $500+ from agencies, generated instantly.",
                  benefit: "Agency-quality at AI speed",
                },
                {
                  icon: BarChart3,
                  title: "Multi-Platform Launch",
                  desc: "Your ads go live on Facebook, Google, Instagram, and more with one simple command.",
                  benefit: "Maximum reach, minimum effort",
                },
                {
                  icon: MessageCircle,
                  title: "Natural Conversation",
                  desc: "No complex interfaces or confusing settings. Just talk to your agent like a human assistant.",
                  benefit: "Technology that feels natural",
                },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <benefit.icon className="w-12 h-12 text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                    <p className="text-gray-300 mb-4">{benefit.desc}</p>
                    <p className="text-sm text-[#00BFFF] font-semibold">{benefit.benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-black/40 via-purple-900/10 to-black/40">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Old Way vs. AdsNOW Super Agent</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Old Way */}
              <Card className="bg-red-900/20 border-red-500/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-red-400 mb-6 text-center">The Old Way (Painful)</h3>
                  <div className="space-y-4">
                    {[
                      "Log into multiple ad platforms",
                      "Learn complex interfaces",
                      "Write ad copy yourself",
                      "Set up targeting manually",
                      "Monitor campaigns constantly",
                      "Make optimization guesses",
                      "Waste hours on setup",
                      "Pay agencies thousands",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* New Way */}
              <Card className="bg-green-900/20 border-green-500/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">AdsNOW Super Agent (Easy)</h3>
                  <div className="space-y-4">
                    {[
                      "Send one simple text message",
                      "AI handles all technical setup",
                      "Get professional ad copy instantly",
                      "AI optimizes targeting automatically",
                      "24/7 automated optimization",
                      "Data-driven decisions always",
                      "Launch in under 5 minutes",
                      "Fraction of agency costs",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* AdsNOW Ecosystem */}
        <AdsSuccessEcosystem />

        {/* Final CTA */}
        <section className="py-20 px-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-purple-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">The Future of Ads is NOW</h2>
            </div>

            <p className="text-xl text-gray-300 mb-8">
              Stop struggling with complex ad platforms. Get your AdsNOW Super Agent and start creating high-converting
              campaigns with simple text messages.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                className="px-10 py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xl rounded-full shadow-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 transform"
                onClick={() => (window.location.href = "/signup")}
              >
                Get Your Super Agent NOW →
              </Button>
              <Button
                variant="outline"
                className="px-10 py-6 border-2 border-[#00BFFF] text-[#00BFFF] font-bold text-xl rounded-full hover:bg-[#00BFFF] hover:text-black transition-all duration-300 hover:scale-105 transform bg-transparent"
                onClick={() => setShowDemo(true)}
              >
                See Super Agent in Action
              </Button>
            </div>

            <p className="text-sm text-gray-400 mt-8">
              Join 500+ businesses already using AdsNOW Super Agent to dominate their markets
            </p>
          </div>
        </section>
      </div>

      {showDemo && <DemoPopup onClose={() => setShowDemo(false)} />}
    </div>
  )
}
