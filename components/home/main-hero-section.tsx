"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageSquare, Zap, ArrowRight, Play } from 'lucide-react'
import GlowingOrbCta from "@/components/ui/glowing-orb-cta"

export default function MainHeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Ensure content is visible on mount
    setIsVisible(true)
  }, [])

  const benefits = [
    {
      icon: Phone,
      title: "24/7 Lead Capture",
      description: "Never miss a potential customer again with AI that works around the clock"
    },
    {
      icon: MessageSquare,
      title: "Instant Qualification",
      description: "AI pre-qualifies leads automatically, saving you time and increasing conversions"
    },
    {
      icon: Zap,
      title: "Perfect Consistency",
      description: "Every interaction follows your exact sales process with zero human error"
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Headline */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="text-white">AI that converts </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              leads into sales
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Get AI-powered websites that convert visitors into customers using AI optimization, 
            voice agents, and automated follow-up systems.
          </p>
        </div>

        {/* Primary CTA */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <GlowingOrbCta />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '/demo'}
            >
              <Play className="mr-2 h-5 w-5" />
              Try Live Demo
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '/signup'}
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Benefits Cards */}
        <div className={`grid md:grid-cols-3 gap-6 max-w-5xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-sm border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className={`mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gray-400 text-sm mb-4">Trusted by businesses across 15+ industries</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl">🚗</div>
            <div className="text-2xl">🏡</div>
            <div className="text-2xl">🏋️</div>
            <div className="text-2xl">⚖️</div>
            <div className="text-2xl">💆</div>
            <div className="text-2xl">🏦</div>
          </div>
        </div>
      </div>
    </section>
  )
}
