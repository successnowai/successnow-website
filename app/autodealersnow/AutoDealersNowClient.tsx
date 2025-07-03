"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/home/footer"
import { DemoPopup } from "@/components/ui/demo-popup"
import { useState, useEffect } from "react"
import { AdsSuccessEcosystem } from "@/components/ui/ads-success-ecosystem"

const AutoDealersNowClient = () => {
  const [currentText, setCurrentText] = useState(0)
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false)

  const rotatingTexts = [
    "Instantly Engages",
    "Converts Leads",
    "Books Test Drives",
    "Gets 5 Star Reviews",
    "Follows Up Always",
  ]

  const autoInspiration = [
    {
      id: "auto-inspiration-1",
      title: "Auto Dealer Inspiration 1",
      description: "Modern dealership design with inventory showcase",
      url: "https://v0-autodele-now-template-site-git-au-67d13d-info-9422s-projects.vercel.app/",
      imageUrl: "/images/auto-dealer-inspiration-1.png",
    },
  ]

  const handleDemoClick = () => setIsDemoPopupOpen(true)
  const handleSignupClick = () => (window.location.href = "/autodealersnow/signup")

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
            <span className="block text-white animate-fadeTextUp">AutoDealerNOW™ AI</span>
            <span className="block text-[#00BFFF] animate-fadeTextUp animation-delay-300 min-h-[1.2em]">
              {rotatingTexts[currentText]}
            </span>
            <span className="block text-white animate-fadeTextUp animation-delay-600">To Skyrocket Your Results</span>
          </h1>

          <div className="bg-red-600/20 border border-red-500 rounded-lg p-4 max-w-2xl mx-auto animate-fadeTextUp animation-delay-900">
            <p className="text-red-300 font-bold text-lg">⚠️ 77% of Leads are lost due to poor handling!</p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeTextUp animation-delay-1200">
            Stop losing sales to no-shows and forgotten follow-ups. Our{" "}
            <strong className="text-white">AI books test drives, confirms appointments, and nurtures every lead</strong>{" "}
            until they buy.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-fadeTextUp animation-delay-1500">
            <Button
              className="px-8 py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-base"
              onClick={handleSignupClick}
            >
              GET AUTODEALERSNOW →
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
                🚀 100% Custom Built for YOUR Dealership
              </h3>
              <div className="space-y-4">
                <div className="bg-black/20 p-4 rounded-lg border border-[#00BFFF]/20">
                  <h4 className="text-lg font-semibold text-white mb-2">🎨 Custom Website to Your Brand & Vision</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Every website is built from scratch to match your dealership's unique brand, colors, and vision. No
                    templates, no cookie-cutter designs.
                  </p>
                </div>

                <div className="bg-black/20 p-4 rounded-lg border border-[#00BFFF]/20">
                  <h4 className="text-lg font-semibold text-white mb-2">🎯 Custom AI Smart Funnels to Your Offers</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Tailored conversion funnels designed specifically for your inventory, financing options, and special
                    promotions.
                  </p>
                </div>

                <div className="bg-black/20 p-4 rounded-lg border border-[#00BFFF]/20">
                  <h4 className="text-lg font-semibold text-white mb-2">🤖 Custom AI Agent Trained on YOUR Business</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    AI agents that know your inventory, pricing, financing options, and dealership policies inside and
                    out.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#00BFFF]/10 to-[#1a2332]/10 p-4 rounded-lg border border-[#00BFFF]/30">
                  <h4 className="text-lg font-semibold text-[#00BFFF] mb-2">⚡ AI Agents That Never Miss</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Never miss a lead or follow-up</li>
                    <li>• Makes detailed notes and transcripts of every call</li>
                    <li>• Like having the best team member using all the best AI tools</li>
                    <li>• Save countless money on staff that make excuses, call in sick, aren't motivated</li>
                    <li>• No more employees who don't follow the process</li>
                  </ul>
                </div>

                <div className="text-center bg-gradient-to-r from-[#00BFFF]/20 to-[#1a2332]/20 p-4 rounded-lg border border-[#00BFFF]/40">
                  <p className="text-white font-bold text-lg">🌟 Dominate NOW with the Best Agents in the Galaxy! 🌟</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdsSuccessEcosystem onDemoClick={handleDemoClick} />

      <div className="mx-auto max-w-4xl px-5 py-15">
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">Auto Dealership Challenges We Solve</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Losing leads to competitors with faster response times",
              "Sales team is too busy to follow up with every online lead",
              "High no-show rates for test drive appointments",
              "Inconsistent communication with potential buyers",
              "Struggling to get positive reviews to build trust",
              "Manually managing leads from multiple sources is chaotic",
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
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">AI Solutions for Auto Dealers</h3>
          <div className="grid gap-4 sm:grid-cols-1">
            {[
              "🚗 24/7 AI assistant to engage and qualify every lead instantly",
              "📅 Smart test drive booking with automated confirmations & reminders",
              "🎯 Long-term nurturing sequences for leads not ready to buy today",
              "💬 Answers common vehicle and financing questions automatically",
              "📈 Integrates with your CRM for a seamless sales process",
              "🏆 Automatically requests reviews from happy car buyers",
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
          <h3 className="text-3xl font-bold mb-6 text-[#00BFFF]">Ready to Sell More Cars with AI?</h3>
          <p className="text-gray-300 mb-8 text-lg">Join successful dealerships already using AI to boost sales</p>
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

export default AutoDealersNowClient
