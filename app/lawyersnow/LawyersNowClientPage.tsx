"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/home/footer"
import { TemplateButtonsSimple } from "@/components/ui/template-buttons-simple"
import Navbar from "@/components/navigation/navbar"
import FloatingChatRobot from "@/components/chat/floating-chat-robot"
import { useState, useEffect } from "react"
import { DemoPopup } from "@/components/ui/demo-popup"
import { InstantDemoCTA } from "@/components/ui/instant-demo-cta"
import { AdsSuccessEcosystem } from "@/components/ui/ads-success-ecosystem"

export default function LawyersNowClientPage() {
  const [currentText, setCurrentText] = useState(0)
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false)

  const rotatingTexts = [
    "Instantly Qualifies",
    "Books Consultations",
    "Handles Intake",
    "Gets 5 Star Reviews",
    "Follows Up Always",
  ]

  const lawyerTemplates = [
    {
      id: "lawyer-1",
      title: "Legal Website 1",
      description: "Professional law firm template with case intake and consultation booking",
    },
    {
      id: "lawyer-2",
      title: "LawyersNOW Website 2",
      description: "Corporate law firm design with practice area showcase",
      isComingSoon: true,
    },
    {
      id: "lawyer-3",
      title: "LawyersNOW Website 3",
      description: "Personal injury law template with case results gallery",
      isComingSoon: true,
    },
    {
      id: "lawyer-4",
      title: "LawyersNOW Website 4",
      description: "Family law practice with client testimonials focus",
      isComingSoon: true,
    },
    {
      id: "lawyer-5",
      title: "LawyersNOW Website 5",
      description: "Criminal defense attorney with emergency contact features",
      isComingSoon: true,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const handleDemoClick = () => {
    setIsDemoPopupOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1426] via-[#1a2332] to-[#0B1426] text-white">
      {/* Global Navigation Bar */}
      <Navbar />

      {/* Industry-specific Floating Chat Robot */}
      <FloatingChatRobot industry="legal" primaryColor="#6366f1" assistantName="LawyersNOW AI Legal" />

      {/* Hero Section */}
      <section className="relative text-center py-16 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1426]/50 to-[#0B1426]"></div>
        <div className="relative z-10 max-w-6xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="block text-white animate-fadeTextUp">LawyersNOW™ AI</span>
            <span className="block text-[#00BFFF] animate-fadeTextUp animation-delay-300 min-h-[1.2em]">
              {rotatingTexts[currentText]}
            </span>
            <span className="block text-white animate-fadeTextUp animation-delay-600">To Win More Cases</span>
          </h1>

          <div className="bg-red-600/20 border border-red-500 rounded-lg p-4 max-w-2xl mx-auto animate-fadeTextUp animation-delay-900">
            <p className="text-red-300 font-bold text-lg">⚠️ 75% of legal leads are lost to slow response times!!!</p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeTextUp animation-delay-1200">
            Stop losing potential clients to slow follow-up and poor intake processes. Our{" "}
            <strong className="text-white">AI handles intake, books consultations, and follows up 24/7</strong> so you
            never miss a case again.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-fadeTextUp animation-delay-1500">
            <Button
              className="px-8 py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-base"
              onClick={handleDemoClick}
            >
              GET LAWYERSNOW →
            </Button>
            <Button
              variant="outline"
              className="px-8 py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-md hover:bg-[#00BFFF] hover:text-white transition-all duration-200 hover:scale-105 text-base bg-transparent"
              onClick={handleDemoClick}
            >
              Launch Instant Demo NOW
            </Button>
          </div>

          {/* Template Preview Buttons */}
          <div className="mt-8 animate-fadeTextUp animation-delay-1800">
            <h3 className="text-xl font-bold mb-4 text-[#00BFFF]">⚖️ Preview Legal Website Templates</h3>
            <TemplateButtonsSimple templates={lawyerTemplates} baseButtonText="" />
            <p className="text-sm text-gray-400 mt-2">Click any template to view it fullscreen in a new window</p>
          </div>
        </div>
      </section>

      {/* Secondary Hero Section */}
      <section className="relative text-center py-16 px-6 md:px-10 bg-black/20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1426]/80 to-black/40"></div>
        <div className="relative z-10 max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            <span className="block text-white animate-fadeTextUp">You're not short on cases.</span>
            <span className="block text-[#00BFFF] animate-fadeTextUp animation-delay-300 animate-pulse">
              Just follow-through.
            </span>
            <span className="block text-white animate-fadeTextUp animation-delay-600">LawyersNOW fixes that.</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeTextUp animation-delay-900">
            Run a more efficient, profitable law practice without chasing leads or burning yourself out. Our{" "}
            <strong className="text-white">AI handles 80% of client intake</strong> - screening, scheduling, follow-up,
            and more.
          </p>
        </div>
      </section>

      {/* Instant Demo CTA */}
      <InstantDemoCTA onClick={handleDemoClick} />

      {/* AdsNow Section */}
      <AdsSuccessEcosystem onDemoClick={handleDemoClick} />

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-5 sm:py-15">
        {/* Pain Points */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">Legal Industry Challenges We Solve</h3>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {[
              "75% of legal leads lost due to slow response times and poor follow-up",
              "Potential clients calling competitors while you're in court",
              "Too much manual intake process eating up billable hours",
              "Missed consultations and revenue from poor scheduling",
              "No systematic review collection or referral generation",
              "Losing cases to firms who respond faster to inquiries",
            ].map((pain, index) => (
              <Card
                key={index}
                className="bg-black/40 backdrop-blur-sm border-[#00BFFF]/20 hover:border-[#00BFFF]/40 transition-all duration-300"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start">
                    <span className="text-red-400 mr-3 flex-shrink-0 text-lg">❌</span>
                    <span className="text-gray-300 text-base">{pain}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">AI Solutions for Legal Practices</h3>
          <div className="grid gap-4 grid-cols-1">
            {[
              "⚖️ Every legal inquiry handled instantly, 24/7 - even while you're in court",
              "📅 Automated intake, case screening, and consultation booking",
              "🎯 Nurtures potential clients automatically until they're ready to hire",
              "💬 Handles legal questions and case objections instantly",
              "📈 Integrates seamlessly with your existing case management system",
              "🏆 Creates compliant, professional conversations that build trust and urgency",
            ].map((solution, index) => (
              <Card
                key={index}
                className="bg-black/40 backdrop-blur-sm border-[#00BFFF]/20 hover:border-[#00BFFF]/40 transition-all duration-300"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start">
                    <span className="text-green-400 mr-3 flex-shrink-0 text-lg">✅</span>
                    <span className="text-gray-300 text-base">{solution}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Video Demo */}
        <div className="mb-12" id="demo">
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">See LawyersNOW in Action</h3>
          <div className="mx-auto max-w-2xl">
            <div className="relative aspect-video bg-black/40 backdrop-blur-sm rounded-xl border-2 border-[#00BFFF]/30 overflow-hidden group cursor-pointer hover:border-[#00BFFF] transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00274D]/50 to-black/50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#00BFFF] rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white font-semibold text-lg">LawyersNOW Demo</h4>
                <p className="text-gray-200 text-sm">Watch AI handle legal intake and consultation booking</p>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-[#00BFFF] text-white px-3 py-1 rounded-full text-sm font-semibold">Live Demo</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#00274D]/80 backdrop-blur-sm p-12 rounded-2xl border border-[#00BFFF]/30">
          <h3 className="text-3xl font-bold mb-6 text-[#00BFFF]">Ready to Automate Your Legal Practice?</h3>
          <p className="text-gray-300 mb-8 text-lg">
            Join hundreds of law firms already using AI to grow their practice
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="px-8 py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-base"
              onClick={handleDemoClick}
            >
              Get AI NOW
            </Button>
            <Button
              variant="outline"
              className="px-8 py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-md hover:bg-[#00BFFF] hover:text-white transition-all duration-200 hover:scale-105 text-base bg-transparent"
              onClick={() => (window.location.href = "/")}
            >
              BACK TO HOME
            </Button>
          </div>
        </div>
      </div>

      {/* Demo Popup */}
      <DemoPopup isOpen={isDemoPopupOpen} onClose={() => setIsDemoPopupOpen(false)} />

      <Footer />
    </div>
  )
}
