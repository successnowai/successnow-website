"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown } from "lucide-react"
import Link from "next/link"

export default function PricingTable() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.2),transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
            🔥 90% OFF - LIMITED TIME 🔥
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 mb-8 border border-gray-600">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The SuccessNOW AI Systems</h2>
            <p className="text-xl text-gray-300">Your AI Agent All-in-One Platform</p>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-cyan-500/50 shadow-2xl overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-pulse" />

            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 text-sm font-semibold">
                <Crown className="w-4 h-4 mr-2" />
                MOST POPULAR
              </Badge>
            </div>

            <CardHeader className="text-center pt-12 pb-8 relative z-10">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full">
                  <Zap className="w-12 h-12 text-cyan-400" />
                </div>
              </div>

              <CardTitle className="text-3xl font-bold text-white mb-2">Platform Project Setup</CardTitle>
              <CardDescription className="text-gray-300 text-lg">
                Complete AI Agent ecosystem for your business
              </CardDescription>
            </CardHeader>

            <CardContent className="px-8 pb-8 relative z-10">
              {/* Pricing */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-2xl text-gray-400 line-through">$34,880</span>
                  <span className="text-5xl font-bold text-white">$3,488</span>
                </div>
                <p className="text-cyan-400 font-semibold text-lg">One-time setup fee</p>
                <p className="text-gray-400 text-sm mt-2">90% savings - Limited time offer</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Complete AI Agent Setup</p>
                    <p className="text-gray-400 text-sm">Voice & chat AI agents for your industry</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Custom Website & Funnel</p>
                    <p className="text-gray-400 text-sm">Professional website with conversion funnels</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">CRM Integration</p>
                    <p className="text-gray-400 text-sm">GoHighLevel CRM setup and automation</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Training & Support</p>
                    <p className="text-gray-400 text-sm">Complete onboarding and ongoing support</p>
                  </div>
                </div>
              </div>

              {/* Bonuses */}
              <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg p-6 mb-8 border border-green-500/30">
                <h4 className="text-green-400 font-semibold mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Exclusive Bonuses Included
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-white text-sm">50% off platform fees for 6 months</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-white text-sm">50% off voice usage for 6 months</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                asChild
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Link href="/signup">Get Started Now - Save $31,392</Link>
              </Button>

              <p className="text-center text-gray-400 text-sm mt-4">
                Limited time offer. Price increases to $34,880 soon.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-400 max-w-2xl mx-auto">
            This is a complete business transformation package. Our team will build and deploy your entire AI agent
            ecosystem, including custom training for your specific industry and business needs.
          </p>
        </div>
      </div>
    </section>
  )
}
