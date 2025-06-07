"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/home/footer"
import { TemplateButtonsSimple } from "@/components/ui/template-buttons-simple"
import { DemoPopup } from "@/components/ui/demo-popup"
import { InstantDemoCTA } from "@/components/ui/instant-demo-cta"
import { useState, useEffect } from "react"
import { AdsSuccessEcosystem } from "@/components/ui/ads-success-ecosystem"

const LawyersNowClientPage = () => {
  const [currentText, setCurrentText] = useState(0)
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false)

  const rotatingTexts = [
    "Instantly Engages",
    "Converts Leads",
    "Books Consultations",
    "Gets 5 Star Reviews",
    "Follows Up Always",
  ]

  const lawyerTemplates = [
    {
      id: "lawyer-1",
      title: "Law Firm Website 1",
      description: "Professional law firm template with consultation booking",
    },
    {
      id: "lawyer-2",
      title: "LawyersNOW Website 2",
      description: "Modern legal practice design with case showcase",
      isComingSoon: true,
    },
    {
      id: "lawyer-3",
      title: "LawyersNOW Website 3",
      description: "High-performance law firm template",
      isComingSoon: true,
    },
    {
      id: "lawyer-4",
      title: "LawyersNOW Website 4",
      description: "Family law focused template with client portal",
      isComingSoon: true,
    },
    {
      id: "lawyer-5",
      title: "LawyersNOW Website 5",
      description: "Premium law firm template with virtual consultations",
      isComingSoon: true,
    },
  ]

  const handleDemoClick = () => {
    setIsDemoPopupOpen(true)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1426] via-[#1a2332] to-[#0B1426] text-white">
      {/* Hero Section */}
      <section className="relative text-center py-16 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1426]/50 to-[#0B1426]"></div>
        <div className="relative z-10 max-w-6xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="block text-white animate-fadeTextUp">LawyersNOW™ AI</span>
            <span className="block text-[#00BFFF] animate-fadeTextUp animation-delay-300 min-h-[1.2em]">
              {rotatingTexts[currentText]}
            </span>
            <span className="block text-white animate-fadeTextUp animation-delay-600">To Skyrocket Your Results</span>
          </h1>

          <div className="bg-red-600/20 border border-red-500 rounded-lg p-4 max-w-2xl mx-auto animate-fadeTextUp animation-delay-900">
            <p className="text-red-300 font-bold text-lg">⚠️ 77% of Leads are lost due to poor handling!!!</p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeTextUp animation-delay-1200">
            Stop losing clients to no-shows and forgotten follow-ups. Our{" "}
            <strong className="text-white">
              AI books consultations, confirms appointments, and nurtures every lead
            </strong>{" "}
            until they hire you.
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
            <h3 className="text-xl font-bold mb-4 text-[#00BFFF]">⚖️ Preview Law Firm Website Templates</h3>
            <TemplateButtonsSimple templates={lawyerTemplates} baseButtonText="Preview" />
            <p className="text-sm text-gray-400 mt-2">Click any template to view it fullscreen in a new window</p>
          </div>
        </div>
      </section>

      <InstantDemoCTA onClick={handleDemoClick} />
      <AdsSuccessEcosystem onDemoClick={handleDemoClick} />

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-5 py-15">
        {/* Pain Points */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">Legal Practice Challenges We Solve</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "77% of leads lost due to poor handling and slow response times",
              "Staff too busy to nurture potential clients properly",
              "Clients hiring elsewhere while you're in court or meetings",
              "No-shows and missed consultations killing your conversion rates",
              "Manual intake processes eating up valuable billable time",
              "Losing cases to competitors with faster response times",
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
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">AI Solutions for Law Firms</h3>
          <div className="grid gap-4 sm:grid-cols-1">
            {[
              "⚖️ Every lead handled faster than any human team could respond",
              "📅 Books more consultations and ensures clients actually show up",
              "🎯 Reactivates cold leads automatically until they're ready to hire",
              "💬 Handles legal questions & concerns instantly - no waiting for attorneys",
              "📈 Integrates seamlessly with your existing case management system",
              "🏆 Creates engaging, professional conversations that build trust",
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

        {/* CTA Section */}
        <div className="text-center bg-[#00274D]/80 backdrop-blur-sm p-12 rounded-2xl border border-[#00BFFF]/30">
          <h3 className="text-3xl font-bold mb-6 text-[#00BFFF]">Ready to Win More Cases with AI?</h3>
          <p className="text-gray-300 mb-8 text-lg">
            Join successful law firms already using AI to boost client acquisition
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
              onClick={handleDemoClick}
            >
              BACK TO HOME
            </Button>
          </div>
        </div>
      </div>

      <DemoPopup isOpen={isDemoPopupOpen} onClose={() => setIsDemoPopupOpen(false)} />
      <Footer />
    </div>
  )
}

export default LawyersNowClientPage
