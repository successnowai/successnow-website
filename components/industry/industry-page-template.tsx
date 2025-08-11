"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X, ArrowRight, Zap, Star, Rocket } from "lucide-react"
import StarryBackground from "@/components/ui/starry-background"
import { RevolutionaryAiCard } from "@/components/industry/revolutionary-ai-card"
import { DemoPopup } from "@/components/ui/demo-popup"
import { GlowingOrbCta } from "@/components/ui/glowing-orb-cta"

interface CustomBuildPoint {
  icon: React.ElementType
  title: string
  description: string
}

interface FeatureCard {
  icon: React.ElementType
  title: string
  description: string
}

interface IndustryPageTemplateProps {
  industryName: string
  industryNameSingular: string
  heroSubtitle: React.ReactNode
  heroWarning: string
  heroDescription: React.ReactNode
  heroCtaText: string
  heroCtaLink?: string
  customBuildPoints: CustomBuildPoint[]
  aiAgentsBenefits: string[]
  dominateCtaText: string
  featureCards: FeatureCard[]
  problems: string[]
  solutions: string[]
  finalCtaTitle: string
  finalCtaDescription: string
}

export default function IndustryPageTemplate({
  industryName,
  industryNameSingular,
  heroSubtitle,
  heroWarning,
  heroDescription,
  heroCtaText,
  heroCtaLink,
  customBuildPoints,
  aiAgentsBenefits,
  dominateCtaText,
  featureCards,
  problems,
  solutions,
  finalCtaTitle,
  finalCtaDescription,
}: IndustryPageTemplateProps) {
  const [showDemo, setShowDemo] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StarryBackground />

      <div className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-6 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 text-lg font-bold">
              ⚠️ {heroWarning}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              The Best AI Agents for <span className="text-[#00BFFF]">{industryName}</span>
            </h1>

            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-300">{heroSubtitle}</h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">{heroDescription}</p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-[#00BFFF] to-cyan-400 hover:from-cyan-600 hover:to-blue-600 text-white font-bold px-8 py-4 text-xl rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                  <Rocket className="w-6 h-6 mr-2" />
                  {heroCtaText}
                </Button>
              </Link>

              <DemoPopup trigger={<GlowingOrbCta label="See AI in Action" />} />
            </div>
          </motion.div>
        </section>

        {/* Custom Build Points */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              We Custom Build Everything For Your {industryNameSingular}
            </h2>
            <p className="text-xl text-gray-300">
              No templates. No cookie-cutter solutions. Everything is built from scratch for YOU.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {customBuildPoints.map((point, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:border-[#00BFFF]/50 transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00BFFF] to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <point.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{point.title}</h3>
                  <p className="text-gray-300">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* AI Agents Benefits */}
        <section className="container mx-auto px-4 py-16">
          <Card className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why AI Agents Are a <span className="text-[#00BFFF]">Game Changer</span>
                </h2>
                <p className="text-xl text-gray-300">Your AI agents work 24/7 to grow your business</p>
              </div>

              <div className="space-y-4">
                {aiAgentsBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-lg text-gray-200">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-4 text-xl rounded-xl">
                    <Star className="w-6 h-6 mr-2" />
                    {dominateCtaText}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Revolutionary AI Card */}
        <section className="container mx-auto px-4 py-16">
          <RevolutionaryAiCard />
        </section>

        {/* Feature Cards */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything You Need to Dominate</h2>
            <p className="text-xl text-gray-300">Complete AI-powered business transformation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featureCards.map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:border-[#00BFFF]/50 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00BFFF] to-cyan-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Problems vs Solutions */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Stop Struggling With These <span className="text-red-400">Problems</span>
            </h2>
            <p className="text-xl text-gray-300">Our AI solves every challenge you face</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Problems */}
            <Card className="bg-red-900/20 border border-red-500/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-400 mb-6 text-center">❌ Current Problems</h3>
                <div className="space-y-4">
                  {problems.map((problem, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <X className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-200">{problem}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Solutions */}
            <Card className="bg-green-900/20 border border-green-500/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">✅ AI Solutions</h3>
                <div className="space-y-4">
                  {solutions.map((solution, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-200">{solution}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 py-16">
          <Card className="bg-gradient-to-r from-[#00BFFF]/10 to-purple-600/10 border border-[#00BFFF]/30 max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">{finalCtaTitle}</h2>
              <p className="text-xl text-gray-300 mb-8">{finalCtaDescription}</p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-[#00BFFF] to-cyan-400 hover:from-cyan-600 hover:to-blue-600 text-white font-bold px-8 py-4 text-xl rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                    <Zap className="w-6 h-6 mr-2" />
                    Get AI NOW
                  </Button>
                </Link>

                <Link href="/book">
                  <Button
                    variant="outline"
                    className="border-2 border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white font-bold px-8 py-4 text-xl rounded-xl transition-all duration-300 bg-transparent"
                  >
                    <ArrowRight className="w-6 h-6 mr-2" />
                    Book a Call
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <DemoPopup isOpen={showDemo} onClose={() => setShowDemo(false)} />
    </div>
  )
}
