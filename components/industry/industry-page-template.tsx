"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, MessageCircle, ArrowRight, Play } from "lucide-react"
import DemoPopup from "@/components/ui/demo-popup"
import RevolutionaryAiCard from "@/components/industry/revolutionary-ai-card"
import type { LucideIcon } from "lucide-react"

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

type IndustryPageTemplateProps = {
  industryName: string
  industryNameSingular: string
  heroSubtitle: React.ReactNode
  heroWarning: string
  heroDescription: React.ReactNode
  heroCtaText: string
  heroCtaLink?: string
  customBuildPoints: Feature[]
  aiAgentsBenefits: string[]
  dominateCtaText: string
  featureCards: Feature[]
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
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false)

  return (
    <div className="bg-[#0B1426] text-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 text-center bg-cover bg-center starry-background">
        <div className="absolute inset-0 bg-black/90" />
        <div className="relative z-10 max-w-4xl mx-auto brightness-110">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            The Best AI Agents for <span className="text-[#00BFFF]">{industryName}</span>
          </h1>
          <div className="mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-100">{heroSubtitle}</div>
          <Card className="mt-8 inline-block bg-red-500/10 border border-red-500/50 text-red-300 px-4 py-2 rounded-lg">
            <CardContent className="p-0 flex items-center gap-2">
              <Zap className="h-5 w-5 text-red-400" />
              <p className="font-medium">{heroWarning}</p>
            </CardContent>
          </Card>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-200">{heroDescription}</p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#00BFFF] to-[#00D1FF] hover:from-[#00AADD] hover:to-[#00B8E6] text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
                {heroCtaText} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white/50 hover:bg-white/10 hover:border-white text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg transition-all"
              onClick={() => setIsDemoPopupOpen(true)}
            >
              <Play className="mr-2 h-5 w-5" />
              Launch Instant Demo NOW
            </Button>
          </div>
        </div>
      </div>

      <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-4">
          {/* Custom Build Points */}
          <Card className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold flex items-center justify-center gap-3">
                  <Zap className="text-[#00BFFF]" />
                  100% Custom Built for YOUR {industryNameSingular}
                </h2>
              </div>
              <div className="space-y-8">
                {customBuildPoints.map((point, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="flex-shrink-0">
                      <point.icon className="h-8 w-8 text-[#00BFFF]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{point.title}</h3>
                      <p className="mt-2 text-gray-400">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Agents Benefits */}
          <Card className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold flex items-center justify-center gap-3">
                  <Zap className="text-[#00BFFF]" />
                  AI Agents That Never Miss
                </h2>
              </div>
              <ul className="space-y-4 text-lg text-gray-300 max-w-3xl mx-auto">
                {aiAgentsBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#00BFFF] mr-3 mt-1">&#8226;</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12 text-center">
                <Button
                  size="lg"
                  className="bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg transition-all"
                >
                  <MessageCircle className="mr-3" />
                  {dominateCtaText}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Revolutionary AI Card */}
          <RevolutionaryAiCard />

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureCards.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-[#00BFFF] transition-colors duration-300"
              >
                <CardContent className="p-0 flex flex-col items-center">
                  <feature.icon className="h-12 w-12 text-[#00BFFF] mb-4" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Problems and Solutions Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white/5 border border-red-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6 text-red-400">Problems We Solve</h3>
                <ul className="space-y-3">
                  {problems.map((problem, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-400 mr-3 mt-1">✗</span>
                      <span className="text-gray-300">{problem}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border border-green-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6 text-green-400">Our Solutions</h3>
                <ul className="space-y-3">
                  {solutions.map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1">✓</span>
                      <span className="text-gray-300">{solution}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Final CTA Section */}
          <Card className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm text-center">
            <CardContent className="p-0">
              <h2 className="text-3xl sm:text-4xl font-bold">{finalCtaTitle}</h2>
              <p className="mt-4 text-lg text-gray-300">{finalCtaDescription}</p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#00BFFF] to-[#00D1FF] hover:from-[#00AADD] hover:to-[#00B8E6] text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                  <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
                    Get AI NOW
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white/50 hover:bg-white/10 hover:border-white text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg transition-all"
                >
                  <Link href="/book">Book a Call</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <DemoPopup isOpen={isDemoPopupOpen} onClose={() => setIsDemoPopupOpen(false)} />
    </div>
  )
}

// Named export for the template
export { IndustryPageTemplate }
