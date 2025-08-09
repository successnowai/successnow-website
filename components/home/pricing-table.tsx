"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown } from "lucide-react"

export default function PricingTable() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#0B1426] via-[#1a2332] to-[#0B1426]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#00BFFF]/20 text-[#00BFFF] border-[#00BFFF]/30">
            🔥 90% OFF - LIMITED TIME 🔥
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The SuccessNOW AI Systems</h2>
          <p className="text-xl text-gray-300 mb-8">Your AI Agent All-in-One Platform</p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Get everything you need to dominate your market with AI. Custom website, AI agents, smart funnels, and more
            - all built specifically for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {/* Main Pricing Card */}
          <Card className="relative bg-gradient-to-br from-[#00274D]/80 to-[#1a2332]/80 backdrop-blur-sm border-2 border-[#00BFFF]/50 shadow-2xl">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-[#00BFFF] to-[#0099CC] text-white px-6 py-2 text-lg font-bold">
                <Crown className="w-5 h-5 mr-2" />
                MOST POPULAR
              </Badge>
            </div>

            <CardHeader className="text-center pb-8 pt-12">
              <CardTitle className="text-3xl font-bold text-white mb-4">SuccessNOW AI Systems</CardTitle>
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-4">
                  <span className="text-4xl font-bold text-red-400 line-through">$34,880</span>
                  <Badge className="bg-red-500 text-white px-3 py-1">90% OFF</Badge>
                </div>
                <div className="text-6xl font-bold text-[#00BFFF]">$3,488</div>
                <p className="text-gray-300 text-lg">One-time platform project fee</p>
              </div>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Bonuses Section */}
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center">
                  <Star className="w-6 h-6 mr-2" />
                  EXCLUSIVE BONUSES
                </h3>
                <div className="grid gap-3">
                  <div className="flex items-center text-white">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>
                      <strong>50% OFF</strong> all platform fees for life
                    </span>
                  </div>
                  <div className="flex items-center text-white">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>
                      <strong>50% OFF</strong> voice usage for life
                    </span>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Zap className="w-6 h-6 text-[#00BFFF] mr-2" />
                  Everything You Need to Dominate
                </h3>
                <div className="grid gap-4">
                  {[
                    "🎨 Custom Website Built to Your Brand & Vision",
                    "🤖 Custom AI Agent Trained on YOUR Business",
                    "🎯 Custom AI Smart Funnels for Maximum Conversions",
                    "📞 24/7 AI Voice Agent That Never Misses",
                    "💬 AI Chat Agent for Website Visitors",
                    "📧 Smart Email & SMS Marketing Automation",
                    "📊 Advanced Analytics & Reporting Dashboard",
                    "🔗 CRM Integration & Lead Management",
                    "📱 Mobile-Optimized for All Devices",
                    "🚀 Ongoing Support & Optimization",
                    "⚡ Lightning-Fast Setup & Launch",
                    "🎓 Complete Training & Onboarding",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start text-gray-300">
                      <Check className="w-5 h-5 text-[#00BFFF] mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center pt-6">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#00BFFF] to-[#0099CC] hover:from-[#0099CC] hover:to-[#007ACC] text-white font-bold py-4 px-8 text-xl rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={() => (window.location.href = "https://signup.successnow.ai")}
                >
                  🚀 GET STARTED NOW - SAVE $31,392!
                </Button>
                <p className="text-sm text-gray-400 mt-4">⏰ Limited time offer - Price increases to $34,880 soon!</p>
              </div>

              {/* Guarantee */}
              <div className="text-center bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg p-4">
                <p className="text-yellow-300 font-semibold">🛡️ 30-Day Money-Back Guarantee</p>
                <p className="text-sm text-gray-300 mt-1">Not satisfied? Get a full refund, no questions asked.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6 text-lg">Join thousands of businesses already dominating with AI</p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 font-bold py-4 px-12 text-xl rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => (window.location.href = "https://signup.successnow.ai")}
          >
            Start Your AI Transformation Today →
          </Button>
        </div>
      </div>
    </section>
  )
}
