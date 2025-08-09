"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/home/footer"
import { DemoPopup } from "@/components/ui/demo-popup"
import { useState, useEffect } from "react"
import { AdsSuccessEcosystem from "@/components/ui/ads-success-ecosystem"

const SolarNowClientPage = () => {
  const [currentText, setCurrentText] = useState(0)
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false)

  const rotatingTexts = [
    "Qualifies Homeowners",
    "Books Consultations",
    "Nurtures Prospects",
    "Gets 5 Star Reviews",
    "Closes More Deals",
  ]

  const handleDemoClick = () => setIsDemoPopupOpen(true)
  const handleSignupClick = () => (window.location.href = "https://signup.successnow.ai")

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
            <span className="block text-white animate-fadeTextUp">SolarNOW™ AI</span>
            <span className="block text-[#00BFFF] animate-fadeTextUp animation-delay-300 min-h-[1.2em]">
              {rotatingTexts[currentText]}
            </span>
            <span className="block text-white animate-fadeTextUp animation-delay-600">To Power Your Growth</span>
          </h1>

          <div className="bg-red-600/20 border border-red-500 rounded-lg p-4 max-w-2xl mx-auto animate-fadeTextUp animation-delay-900">
            <p className="text-red-300 font-bold text-lg">⚠️ Unqualified solar leads are burning your budget.</p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeTextUp animation-delay-1200">
            Stop wasting time on unqualified homeowners and losing deals to slow follow-up. Our{" "}
            <strong className="text-white">
              AI qualifies leads 24/7, books consultations, and nurtures every prospect
            </strong>{" "}
            until they're ready to go solar.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-fadeTextUp animation-delay-1500">
            <Button
              className="px-8 py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-base"
              onClick={handleSignupClick}
            >
              Get AI NOW
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
                ☀️ Custom Built for YOUR Solar Company
              </h3>
              <div className="space-y-3 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong className="text-white">Custom Website:</strong> Branded to your solar expertise and
                  sustainability mission
                </p>
                <p>
                  <strong className="text-white">Custom AI Smart Funnels:</strong> Tailored to your solar packages and
                  installation processes
                </p>
                <p>
                  <strong className="text-white">Custom AI Agent:</strong> Trained on your solar technology, financing
                  options, and installation procedures
                </p>
                <p>
                  <strong className="text-white">Never Miss Anything:</strong> AI agents that never miss a homeowner
                  inquiry, never miss installation follow-ups, makes notes and transcripts of every solar consultation
                </p>
                <p className="text-[#00BFFF] font-semibold">
                  It's like having the best solar consultant using all the best AI tools. Save countless money on staff
                  that make excuses, call in sick, aren't motivated, or don't follow sales protocols.
                </p>
                <p className="text-white font-bold text-center mt-4">
                  🚀 Our custom-built agents never miss. Dominate your solar market with the best AI agents in the
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
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">Solar Company Challenges We Solve</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Sales team spending hours chasing unqualified leads",
              "Losing deals to competitors who respond faster",
              "High no-show rates for scheduled solar consultations",
              "Inconsistent follow-up with long-term, high-potential leads",
              "Struggling to educate homeowners and build trust at scale",
              "Manually scheduling and confirming every appointment",
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
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">AI Solutions for Solar Companies</h3>
          <div className="grid gap-4 sm:grid-cols-1">
            {[
              "☀️ 24/7 AI lead qualification based on roof type, credit, and utility bills",
              "📅 Automated consultation booking directly into your sales team's calendars",
              "🎯 Long-term educational nurturing campaigns to build value",
              "💬 Answers common questions about incentives, panels, and process",
              "📈 Integrates with your CRM to streamline your sales pipeline",
              "🏆 Automatically requests reviews from happy customers post-installation",
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
          <h3 className="text-3xl font-bold mb-6 text-[#00BFFF]">Ready to Boost Your Installations with AI?</h3>
          <p className="text-gray-300 mb-8 text-lg">Join leading solar companies using AI to close more deals.</p>
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

export default SolarNowClientPage
