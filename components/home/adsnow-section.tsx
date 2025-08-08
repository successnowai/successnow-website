"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GlowingOrbCta } from "@/components/ui/glowing-orb-cta"
import { Megaphone, Target, TrendingUp, Zap, ArrowRight, CheckCircle, DollarSign, Users, BarChart3 } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export function AdsNowSection() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  const adsFeatures = [
    {
      icon: Target,
      title: "AI-Powered Targeting",
      description: "Smart audience identification and precision targeting",
      stat: "300% Better ROI",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Real-Time Optimization",
      description: "Continuous campaign improvement with AI insights",
      stat: "50% Lower CPA",
      color: "from-green-400 to-teal-500"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Deep insights into campaign performance and ROI",
      stat: "24/7 Monitoring",
      color: "from-purple-400 to-pink-500"
    }
  ]

  const handleGetStarted = () => {
    window.open('https://signup.successnow.ai', '_blank')
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/10 to-black"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-400/30 mb-6">
            <Megaphone className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-orange-300">AdsNOW Platform</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Advertising Revolution
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your advertising with AI that creates, optimizes, and scales your campaigns 
            automatically. Get better results with less effort and lower costs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              {adsFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className={`group cursor-pointer transition-all duration-500 backdrop-blur-md border ${
                    hoveredFeature === index
                      ? 'bg-gradient-to-br from-orange-900/30 to-red-900/30 border-orange-400/50 scale-105'
                      : 'bg-gray-900/30 border-gray-700/30 hover:border-orange-400/30'
                  }`}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                            {feature.title}
                          </h3>
                          <span className={`text-sm font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                            {feature.stat}
                          </span>
                        </div>
                        
                        <p className="text-gray-300 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur-md border border-orange-500/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-orange-400" />
                  Why Choose AdsNOW?
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "300% Better ROI",
                    "50% Lower Costs",
                    "24/7 Optimization",
                    "AI-Driven Insights"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <Card className="bg-gray-900/50 backdrop-blur-md border border-gray-800/50 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-96">
                  <Image
                    src="/ai-ad-creation-interface.png"
                    alt="AdsNOW AI Interface"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 text-center">
                        <DollarSign className="w-6 h-6 text-green-400 mx-auto mb-1" />
                        <div className="text-lg font-bold text-white">$2.3M</div>
                        <div className="text-xs text-gray-300">Revenue Generated</div>
                      </div>
                      
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 text-center">
                        <Users className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                        <div className="text-lg font-bold text-white">150K</div>
                        <div className="text-xs text-gray-300">Leads Generated</div>
                      </div>
                      
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 text-center">
                        <TrendingUp className="w-6 h-6 text-orange-400 mx-auto mb-1" />
                        <div className="text-lg font-bold text-white">300%</div>
                        <div className="text-xs text-gray-300">ROI Increase</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center space-y-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Revolutionize Your Advertising?
            </h3>
            <p className="text-gray-300 mb-8">
              Experience the power of AI-driven advertising. Talk to our AdsNOW specialist 
              and see how we can transform your marketing ROI in just 30 days.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <GlowingOrbCta 
              size="lg" 
              label="Talk to AdsNOW Specialist"
              className="transform hover:scale-105 transition-all duration-500"
            />
          </div>

          <div className="flex justify-center">
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Megaphone className="w-5 h-5 mr-2" />
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
