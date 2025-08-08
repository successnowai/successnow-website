"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, AlertCircle, Zap, Target, DollarSign } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"

export function PricingTable() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section className="py-20 sm:py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
      <div className="absolute inset-0 bg-[url('/images/neon-cyberpunk-bg.png')] opacity-5 bg-cover bg-center"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-red-500/20 text-red-300 border-red-500/30">
            <Clock className="w-4 h-4 mr-2" />
            LIMITED TIME: 90% OFF
          </Badge>
          <h2 className="text-4xl sm:text-6xl font-bold mb-6">
            The <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">SuccessNOW AI Systems</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your All-In-One Digital Foundation to dominate your industry, powered by AI and custom-coded by experts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Main Offer Card */}
          <motion.div
            onMouseEnter={() => setHoveredCard('main')}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-4">
                    <AlertCircle className="w-4 h-4 text-red-400" />
                    <span className="text-red-300 font-semibold">90% OFF - LIMITED TIME</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4">Complete AI Systems Build</h3>
                  <p className="text-gray-300 mb-6">Your entire AI-powered business system, built and optimized by our experts.</p>
                  
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-400 mb-2">AI Systems Build (90% OFF)</div>
                      <div className="flex items-center justify-center gap-4">
                        <span className="text-2xl text-gray-500 line-through">$35,000</span>
                        <span className="text-5xl font-bold text-cyan-400">$3,488</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-sm text-gray-400 mb-2">📱 Monthly AI Systems Access (50% OFF)</div>
                      <div className="flex items-center justify-center gap-4">
                        <span className="text-lg text-gray-500 line-through">$1,994/mo</span>
                        <span className="text-3xl font-bold text-purple-400">$997/mo</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-sm text-gray-400 mb-2">📞 AI Voice Usage (50% OFF)</div>
                      <div className="flex items-center justify-center gap-4">
                        <span className="text-lg text-gray-500 line-through">$0.28/min</span>
                        <span className="text-2xl font-bold text-pink-400">$0.14/min</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Billed by millisecond</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-xl p-6 border border-green-500/20 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-5 h-5 text-green-400" />
                    <span className="font-bold text-green-300">THE NO-BRAINER DEAL</span>
                  </div>
                  <p className="text-green-200 font-semibold">LIMITED TIME: Get 2 Months AI Systems Access FREE!</p>
                  <p className="text-sm text-green-300">(Save $1,994 - You don't pay for 2 months)</p>
                </div>

                <div className="text-center mb-6">
                  <div className="text-lg font-bold text-green-400 mb-2">Total Today: $3,488 (+ 2 FREE months)</div>
                </div>

                <Link href="/payment">
                  <Button className="w-full h-14 text-lg font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/20 transform hover:scale-105 transition-all duration-300">
                    <Target className="w-5 h-5 mr-2" />
                    Start My SuccessNOW AI Systems Build
                  </Button>
                </Link>

                <div className="mt-6 space-y-2 text-center text-sm text-gray-400">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4 text-orange-400" />
                    <span>Only 47 spots available this month</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    <span>AI Systems access returns to $1,994/month after promotion</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <span>Implementation starts within 24 hours</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-cyan-900/20 rounded-lg border border-cyan-700/30">
                  <h4 className="font-bold text-cyan-300 mb-2">30-Day Money-Back Guarantee</h4>
                  <p className="text-sm text-gray-300">If you don't see a 300% increase in qualified leads within 30 days, we'll refund every penny.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* What You Get Card */}
          <motion.div
            onMouseEnter={() => setHoveredCard('features')}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-purple-500/30 shadow-2xl shadow-purple-500/10 h-full">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-500"></div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">What You Get</h3>
                <p className="text-center text-gray-400 mb-8">Complete business transformation package worth $69,990</p>
                
                <div className="space-y-4">
                  {[
                    { name: "Client-Facing White-Labeled App", value: "$4,997" },
                    { name: "AdsNOW™ Paid Traffic Engine", value: "$5,000" },
                    { name: "SeoNOW™ Organic Traffic Engine", value: "$3,000" },
                    { name: "AI Agent + Army of Bots (Your 24/7 AI Employees)", value: "$15,998" },
                    { name: "Integrated Calendar, Booking & Follow-Up System", value: "$2,500" },
                    { name: "AI Social Media Generator + Scheduler", value: "$2,000" },
                    { name: "AI-Powered Instant Onboarding & Training", value: "$2,000" },
                    { name: "AI Accountability Coach", value: "$2,000" },
                    { name: "Lifetime Access to SuccessNOW Resources", value: "$2,997" },
                    { name: "NEW: AI Reviews & AI Referrals System", value: "$3,000" },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/30 border border-gray-700/30">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-200">{feature.name}</span>
                      </div>
                      <span className="text-cyan-400 font-semibold">{feature.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-white">Total Value:</span>
                    <span className="text-3xl font-bold text-purple-400">$69,990</span>
                  </div>
                  
                  <div className="text-center p-4 bg-cyan-900/30 rounded-lg border border-cyan-500/30">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">AI Systems Build: $3,488 (90% OFF)</div>
                    <div className="text-lg text-green-400">Monthly AI Systems: $997/mo (50% OFF)</div>
                    <div className="text-lg text-pink-400">Voice Usage: $0.14/min (50% OFF)</div>
                    <div className="text-sm text-purple-300 mt-2">+ 2 FREE months AI systems access ($1,994 value)</div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-lg border border-orange-500/30">
                  <h4 className="font-bold text-orange-300 mb-2">🎁 Exclusive Bonuses (Limited Time)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Premium AI Training ($500 value)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Priority Support for 90 Days ($300 value)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Custom Industry Systems ($2200 value)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
