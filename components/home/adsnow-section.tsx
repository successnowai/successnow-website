"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Zap, TrendingUp, MessageCircle, Calendar, Star, Users, BarChart3, Bot, Sparkles } from "lucide-react"

export default function AdsNowSection() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-[#00274D]/40 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Complete AI Ecosystem:</span>
            <br />
            <span className="text-purple-400">AdsNow.ai</span>
            <span className="text-white"> + </span>
            <span className="text-[#00BFFF]">SuccessNOW AI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            The only platform that creates high-converting ads AND instantly converts every lead into customers using
            data from <strong className="text-[#00BFFF]">10,000+ leads generated daily</strong>
          </p>
        </div>

        {/* Revolutionary Feature Section */}
        <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-3xl p-8 mb-16 border border-purple-500/30 relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white font-bold text-sm">REVOLUTIONARY</span>
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <Bot className="w-8 h-8 text-purple-400" />
              <h3 className="text-3xl md:text-4xl font-bold text-white">AdsNOW Super Agent</h3>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simply text your AI AdsNOW Super Agent and watch the magic happen!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              {
                step: "1",
                title: "Create Ads",
                desc: "Agent creates ads for your review",
                icon: Target,
                color: "from-purple-600 to-purple-700",
              },
              {
                step: "2",
                title: "Send Copy",
                desc: "Sends you copy to review",
                icon: MessageCircle,
                color: "from-pink-600 to-pink-700",
              },
              {
                step: "3",
                title: "Choose & Edit",
                desc: "Choose 1 ad or all, make edits",
                icon: Star,
                color: "from-blue-600 to-blue-700",
              },
              {
                step: "4",
                title: "Launch Ads",
                desc: "Set budget and launch instantly",
                icon: Zap,
                color: "from-green-600 to-green-700",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${process.color} flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg`}
                >
                  {process.step}
                </div>
                <process.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <h4 className="text-lg font-bold text-white mb-2">{process.title}</h4>
                <p className="text-gray-300 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-white mb-4">No more logging into software!</p>
            <p className="text-xl text-purple-300 mb-6">The future of ads has arrived NOW with AdsNOW Super Agent!</p>
          </div>
        </div>

        {/* Two-Column Feature Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* AdsNow.ai Column */}
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-700/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-purple-600/20 px-6 py-3 rounded-full border border-purple-500/30 mb-4">
                <Target className="w-6 h-6 text-purple-400" />
                <span className="text-2xl font-bold text-purple-400">AdsNow.ai</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">AI Ad Creation & Optimization</h3>
              <p className="text-gray-300">Creates, launches, and optimizes ads 24/7</p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Target, text: "Creates High-Converting Ads Automatically" },
                { icon: TrendingUp, text: "Optimizes Campaigns 24/7 for Best ROI" },
                { icon: Zap, text: "Launches Across All Platforms Instantly" },
                { icon: BarChart3, text: "Uses Data from 10,000+ Daily Leads" },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="bg-purple-800/20 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <feature.icon className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-200">{feature.text}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* SuccessNOW AI Column */}
          <div className="bg-gradient-to-br from-blue-900/30 to-[#00274D]/20 backdrop-blur-sm rounded-2xl p-8 border border-[#00BFFF]/30">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-[#00BFFF]/20 px-6 py-3 rounded-full border border-[#00BFFF]/30 mb-4">
                <MessageCircle className="w-6 h-6 text-[#00BFFF]" />
                <span className="text-2xl font-bold text-[#00BFFF]">SuccessNOW AI</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">AI Lead Engagement & Conversion</h3>
              <p className="text-gray-300">Instantly converts every lead into customers</p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Zap, text: "Instantly Engages Every Lead 24/7" },
                { icon: Calendar, text: "Books Appointments Automatically" },
                { icon: MessageCircle, text: "Follows Up Always, Never Misses a Lead" },
                { icon: Star, text: "Gets Reviews & Referrals Automatically" },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="bg-[#00274D]/20 border-[#00BFFF]/30 hover:border-[#00BFFF]/50 transition-all duration-300"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <feature.icon className="w-5 h-5 text-[#00BFFF] flex-shrink-0" />
                      <span className="text-gray-200">{feature.text}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { number: "10,000+", label: "Leads Generated Daily", icon: Users },
            { number: "24/7", label: "AI Operations", icon: Zap },
            { number: "500+", label: "Businesses Automated", icon: TrendingUp },
          ].map((stat, index) => (
            <Card
              key={index}
              className="bg-black/40 backdrop-blur-sm border-[#00BFFF]/20 hover:border-[#00BFFF]/40 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 text-[#00BFFF] mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Flow */}
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-[#00BFFF]/20 mb-12">
          <h3 className="text-3xl font-bold text-center text-white mb-8">Complete Sales Automation Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "AI Creates Ads", desc: "AdsNow.ai generates high-converting ads", color: "purple" },
              {
                step: "2",
                title: "Launches & Optimizes",
                desc: "Deploys across platforms and optimizes 24/7",
                color: "purple",
              },
              {
                step: "3",
                title: "Instant Engagement",
                desc: "SuccessNOW AI engages every lead immediately",
                color: "blue",
              },
              {
                step: "4",
                title: "Converts to Sales",
                desc: "Books appointments and closes deals automatically",
                color: "blue",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-16 h-16 rounded-full ${process.color === "purple" ? "bg-purple-600" : "bg-[#00BFFF]"} flex items-center justify-center text-white font-bold text-xl mx-auto mb-4`}
                >
                  {process.step}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{process.title}</h4>
                <p className="text-gray-300 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready for Complete AI Automation?</h3>
          <p className="text-xl text-gray-300 mb-8">
            Get both AdsNow.ai and SuccessNOW AI working together to dominate your market
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-[#00BFFF] text-white font-semibold rounded-md shadow-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-200 hover:scale-105 text-base"
              onClick={() => (window.location.href = "/payment")}
            >
              Get Complete AI System →
            </Button>
            <Button
              variant="outline"
              className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-md hover:bg-purple-500 hover:text-white transition-all duration-200 hover:scale-105 text-base bg-transparent"
              onClick={() => window.open("https://adsnow.ai", "_blank")}
            >
              Learn More About AdsNow.ai
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
