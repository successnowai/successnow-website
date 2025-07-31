"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GlowingOrbCta } from "@/components/ui/glowing-orb-cta"
import { Bot, Globe, Target, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export default function MainHeroSection() {
  return (
    <div className="relative bg-gradient-to-b from-black via-[#0b0f1a] to-[#00274D] text-white overflow-hidden min-h-screen">
      {/* Animated Border */}
      <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-[#00BFFF] via-[#007BFF] to-[#00BFFF] bg-[length:200%_100%] animate-[scroll-border_5s_linear_infinite]"></div>

      {/* Hero Content */}
      <section className="relative text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 overflow-hidden pt-24 sm:pt-28">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 md:space-y-10">
          {/* Badge */}
          <Badge className="bg-[#00BFFF]/20 text-[#00BFFF] border-[#00BFFF]/30 px-4 py-2 text-sm font-semibold">
            🚀 AI-Powered Business Transformation
          </Badge>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight px-2">
            <span className="block text-white animate-fadeTextUp">Transform Your Business with</span>
            <span className="block text-[#00BFFF] animate-fadeTextUp animation-delay-300">SuccessNOW.ai</span>
            <span className="block text-white animate-fadeTextUp animation-delay-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              AI Super Agents & Smart Websites
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto animate-fadeTextUp animation-delay-900 px-4 sm:px-6 leading-relaxed">
            Get AI-powered websites that convert, automated lead generation, and AI agents that work 24/7 to grow your
            business while you sleep.
          </p>

          {/* AI Demo CTA */}
          <div className="animate-fadeTextUp animation-delay-1200 py-8">
            <GlowingOrbCta label="Click Here, Talk to AI" size="lg" />
            <p className="text-gray-400 text-sm mt-4">
              ↑ Ask our AI how SuccessNOW.ai can transform your specific business
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fadeTextUp animation-delay-1500">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Globe className="w-8 h-8 text-[#00BFFF] mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">AI-Powered Websites</h3>
                <p className="text-gray-300 text-sm">
                  Custom websites that convert visitors into customers using AI optimization
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Bot className="w-8 h-8 text-[#00BFFF] mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">24/7 AI Agents</h3>
                <p className="text-gray-300 text-sm">
                  AI agents that qualify leads, book appointments, and nurture prospects
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Target className="w-8 h-8 text-[#00BFFF] mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Automated Ads</h3>
                <p className="text-gray-300 text-sm">
                  AI creates, manages, and optimizes paid ads to drive quality traffic
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeTextUp animation-delay-1800 px-4">
            <Link href="/signup">
              <Button className="bg-[#00BFFF] hover:bg-[#00A3D9] text-white px-8 py-4 text-lg font-semibold min-h-[52px] shadow-lg hover:shadow-[0_0_20px_rgba(0,191,255,0.5)]">
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button
                variant="outline"
                className="border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white px-8 py-4 text-lg min-h-[52px] bg-transparent"
              >
                Try Live Demo
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2 animate-fadeTextUp animation-delay-2100">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-300 text-sm">Trusted by 1000+ businesses</span>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00BFFF] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
      </section>
    </div>
  )
}
