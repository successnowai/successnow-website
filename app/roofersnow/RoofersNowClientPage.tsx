"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/home/footer"
import { DemoPopup } from "@/components/ui/demo-popup"
import { useState, useEffect } from "react"
import { AdsSuccessEcosystem } from "@/components/ui/ads-success-ecosystem"

const RoofersNowClientPage = () => {
  const [currentText, setCurrentText] = useState(0)
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false)

  const rotatingTexts = [
    "Qualifies Leads 24/7",
    "Books Estimates",
    "Automates Follow-up",
    "Gets 5 Star Reviews",
    "Closes More Jobs",
  ]

  const rooferInspiration = [
    {
      id: "roofer-inspiration-1",
      title: "Modern Roofing Co.",
      description: "Professional design for roofing contractors.",
      url: "https://v0-roofer-template-1-git-main-info-9422s-projects.vercel.app/",
      imageUrl: "/images/roofer-inspiration-1.png",
    },
  ]

  const handleDemoClick = () => setIsDemoPopupOpen(true)
  const handleSignupClick = () => (window.location.href = "/roofersnow/signup")

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1426] via-[#1a2332] to-[#0B1426] text-white">
      <section className="relative text-center py-16 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1426]/50 to-[#0B1426]"></div>
        <div className="relative z-10 max-w-6xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="block text-white animate-fadeTextUp">RoofersNOW™ AI</span>
            <span className="block text-[#00BFFF] animate-fadeTextUp animation-delay-300 min-h-[1.2em]">
              {rotatingTexts[currentText]}
            </span>
            <span className="block text-white animate-fadeTextUp animation-delay-600">To Dominate Your Market</span>
          </h1>

          <div className="bg-red-600/20 border border-red-500 rounded-lg p-4 max-w-2xl mx-auto animate-fadeTextUp animation-delay-900">
            <p className="text-red-300 font-bold text-lg">⚠️ A missed call is a job handed to your competitor.</p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeTextUp animation-delay-1200">
            Stop losing high-value roofing jobs to competitors who answer the phone faster. Our{" "}
            <strong className="text-white">AI qualifies leads, books estimates, and follows up relentlessly</strong> so
            you can focus on installations.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-fadeTextUp animation-delay-1500">
            <Button
              className="px-8 py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-base"
              onClick={handleSignupClick}
            >
              GET ROOFERSNOW →
            </Button>
            <Button
              variant="outline"
              className="px-8 py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-md hover:bg-[#00BFFF] hover:text-white transition-all duration-200 hover:scale-105 text-base bg-transparent"
              onClick={handleDemoClick}
            >
              Launch Instant Demo NOW
            </Button>
          </div>

          <div className="mt-8 animate-fadeTextUp animation-delay-1800">
            <div className="bg-gradient-to-r from-[#00274D]/80 to-[#1a2332]/80 backdrop-blur-sm p-6 rounded-xl border border-[#00BFFF]/30">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#00BFFF]">
                🔨 Custom Built for YOUR Roofing Company
              </h3>
              <div className="space-y-3 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong className="text-white">Custom Website:</strong> Branded to your roofing expertise and quality
                  craftsmanship
                </p>
                <p>
                  <strong className="text-white">Custom AI Smart Funnels:</strong> Tailored to your roofing services and
                  estimate processes
                </p>
                <p>
                  <strong className="text-white">Custom AI Agent:</strong> Trained on your roofing materials,
                  installation methods, and warranty programs
                </p>
                <p>
                  <strong className="text-white">Never Miss Anything:</strong> AI agents that never miss a storm damage
                  inquiry, never miss estimate follow-ups, makes notes and transcripts of every homeowner interaction
                </p>
                <p className="text-[#00BFFF] font-semibold">
                  It's like having the best roofing sales rep using all the best AI tools. Save countless money on staff
                  that make excuses, call in sick, aren't motivated, or don't follow sales protocols.
                </p>
                <p className="text-white font-bold text-center mt-4">
                  🚀 Our custom-built agents never miss. Dominate your roofing market with the best AI agents in the
                  Galaxy!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdsSuccessEcosystem onDemoClick={handleDemoClick} />

      <div className="mx-auto max-w-4xl px-5 py-15">
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">Roofing Company Challenges We Solve</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Losing storm damage leads to faster-moving competitors",
              "Office staff overwhelmed with calls after a storm",
              "No-shows for scheduled roof inspections and estimates",
              "Inconsistent follow-up with homeowners who received a quote",
              "Struggling to get reviews and testimonials from happy customers",
              "Manually tracking leads from different advertising channels",
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

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">AI Solutions for Roofers</h3>
          <div className="grid gap-4 sm:grid-cols-1">
            {[
              "🔨 24/7 AI assistant to capture and qualify every lead, instantly",
              "📅 Automated estimate booking with intelligent scheduling and reminders",
              "🎯 Follow-up sequences to convert more quotes into signed contracts",
              "💬 Answers common questions about materials, warranties, and insurance claims",
              "📈 Integrates with your CRM to manage your sales pipeline",
              "🏆 Automatically requests photos and reviews after job completion",
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

        <div className="text-center bg-[#00274D]/80 backdrop-blur-sm p-12 rounded-2xl border border-[#00BFFF]/30">
          <h3 className="text-3xl font-bold mb-6 text-[#00BFFF]">Ready to Book More Roofing Jobs with AI?</h3>
          <p className="text-gray-300 mb-8 text-lg">Join top roofing companies using AI to increase their sales.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="px-8 py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-base"
              onClick={handleSignupClick}
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

      <DemoPopup isOpen={isDemoPopupOpen} onClose={() => setIsDemoPopupOpen(false)} />
      <Footer />
    </div>
  )
}

export default RoofersNowClientPage
