"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, MessageCircle, ArrowRight, Play } from "lucide-react"
import DemoPopup from "@/components/ui/demo-popup"
import type { LucideIcon } from "lucide-react"

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

type IndustryPageTemplateProps = {
  industryName: string
  industryNameSingular: string
  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  problemTitle: string
  problemDescription: string
  solutionTitle: string
  solutionDescription: string
  features: Feature[]
  benefitsTitle: string
  benefits: string[]
  finalCtaTitle: string
  finalCtaDescription: string
}

export default function IndustryPageTemplate({
  industryName,
  industryNameSingular,
  heroTitle,
  heroSubtitle,
  heroDescription,
  problemTitle,
  problemDescription,
  solutionTitle,
  solutionDescription,
  features,
  benefitsTitle,
  benefits,
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">{heroTitle}</h1>
          <p className="mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-100">{heroSubtitle}</p>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-200">{heroDescription}</p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#00BFFF] to-[#00D1FF] hover:from-[#00AADD] hover:to-[#00B8E6] text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
                Get AI NOW <ArrowRight className="ml-2 h-5 w-5" />
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
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Problem Section */}
          <Card className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <CardContent className="p-0 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-red-400">{problemTitle}</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">{problemDescription}</p>
            </CardContent>
          </Card>

          {/* Solution Section */}
          <Card className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <CardContent className="p-0 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
                <Zap className="text-[#00BFFF]" />
                {solutionTitle}
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">{solutionDescription}</p>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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

          {/* Benefits Section */}
          <Card className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold flex items-center justify-center gap-3">
                  <Zap className="text-[#00BFFF]" />
                  {benefitsTitle}
                </h2>
              </div>
              <ul className="space-y-4 text-lg text-gray-300 max-w-3xl mx-auto">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#00BFFF] mr-3 mt-1">&#8226;</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Final CTA Section */}
          <Card className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm text-center">
            <CardContent className="p-0">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{finalCtaTitle}</h2>
              <p className="mt-4 text-lg text-gray-300 mb-8">{finalCtaDescription}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#00BFFF] to-[#00D1FF] hover:from-[#00AADD] hover:to-[#00B8E6] text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                  <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
                    Get AI NOW <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white/50 hover:bg-white/10 hover:border-white text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg transition-all"
                >
                  <Link href="/book">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Book a Call
                  </Link>
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
