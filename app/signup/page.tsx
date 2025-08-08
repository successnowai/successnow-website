"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, Star, Clock, AlertCircle, Zap, Target, DollarSign, Play, Calendar } from 'lucide-react'
import { RotatingText } from '@/components/ui/rotating-text'

const rotatingWords = [
  "captures",
  "converts", 
  "qualifies",
  "books",
  "closes",
  "nurtures",
  "follows up",
  "engages"
]

export default function SignupPage() {
  const handleStartPlatform = () => {
    window.location.href = "https://signup.successnow.ai"
  }

  return (
    <div className="bg-black text-white min-h-screen py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
      <div className="absolute inset-0 bg-[url('/images/neon-cyberpunk-bg.png')] opacity-5 bg-cover bg-center"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 shadow-2xl shadow-cyan-500/10 overflow-hidden">
              <CardContent className="p-12">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                  AI Systems with the best AI<br />
                  agents that{' '}
                  <RotatingText 
                    words={rotatingWords}
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                  />
                </h1>
                
                <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Let our AI Superagents and AI bots close leads, book appointments, and reply to 
                  client inquiries—24/7. <span className="font-bold text-white">Never lose a lead again.</span>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                  <Button 
                    size="lg" 
                    className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    LIVE DEMO
                  </Button>
                  
                  <Link href="/book">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/20"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Book an AI Consult
                    </Button>
                  </Link>
                </div>
                
                {/* Promotional Box */}
                <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-md rounded-2xl p-8 border border-gray-600/50 max-w-3xl mx-auto">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-2xl">🔥</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                      LIMITED TIME: 90% OFF
                    </span>
                    <span className="text-2xl">🔥</span>
                  </div>
                  
                  <p className="text-xl text-gray-200 mb-4">
                    The SuccessNOW AI Systems - Usually $35,000, Now Just <span className="font-bold text-cyan-400">$3,488</span>
                  </p>
                  
                  <p className="text-lg font-bold text-green-400">
                    + 2 MONTHS FREE AI Systems Access (Save $1,994)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Existing Pricing Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            The <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">SuccessNOW AI Systems</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your All-In-One Digital Foundation. Get your complete AI-powered business system built as a single, cohesive project.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 overflow-hidden max-w-2xl w-full">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
            <div className="absolute -top-3 right-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              <Star className="w-4 h-4" />
              90% OFF LIMITED TIME
            </div>
            
            <CardHeader className="pt-12 pb-4 text-center">
              <CardTitle className="text-3xl font-bold text-white">Complete AI Systems Build</CardTitle>
              <CardDescription className="text-gray-400 pt-2">Your entire AI-powered business system, built and optimized by our experts.</CardDescription>
            </CardHeader>
            
            <CardContent className="p-8">
              <div className="space-y-4 mb-8">
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
                <div className="text-sm text-gray-400">Total Value: $69,990</div>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-white mb-4 text-center">What You Get (Complete Package):</h4>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "Done-For-You AI Smart Website",
                    "AI Voice & Chat Agents",
                    "Self-Selling, Self-Booking Funnels",
                    "AdsNOW™ & SeoNOW™ Traffic Engines",
                    "Client-Facing White-Labeled App",
                    "AI Social Media & Review Management",
                    "AI Agent + Army of Bots (24/7 AI Employees)",
                    "Integrated Calendar & Booking System",
                    "AI Accountability Coach",
                    "Lifetime Access to SuccessNOW Resources",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                onClick={handleStartPlatform}
                size="lg" 
                className="w-full font-bold transition-all duration-300 transform hover:scale-105 h-14 text-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/20"
              >
                <Target className="w-5 h-5 mr-2" />
                Start My SuccessNOW AI Systems Build
              </Button>

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

              <div className="mt-6 p-4 bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-lg border border-orange-500/30">
                <h4 className="font-bold text-orange-300 mb-2">🎁 Exclusive Bonuses (Limited Time)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">Premium AI Training ($500 value)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">Priority Support for 90 Days ($300 value)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">Custom Industry Systems ($2200 value)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
