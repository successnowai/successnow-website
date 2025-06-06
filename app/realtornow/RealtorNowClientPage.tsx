"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/home/footer"
import { TemplateButtonsSimple } from "@/components/ui/template-buttons-simple"
import Navbar from "@/components/navigation/navbar"
import { useState, useEffect } from "react"

export default function RealtorNowClientPage() {
  const [currentText, setCurrentText] = useState(0)

  const rotatingTexts = [
    "Instantly Qualifies",
    "Books Showings",
    "Nurtures Leads",
    "Gets 5 Star Reviews",
    "Follows Up Always",
  ]

  const realtorTemplates = [
    {
      id: "realtor-1",
      title: "Realtor Website 1",
      description: "Professional realtor template with property listings and lead capture",
    },
    {
      id: "realtor-2",
      title: "RealtorNOW Website 2",
      description: "Modern real estate template with advanced search and virtual tours",
    },
    {
      id: "realtor-3",
      title: "RealtorNOW Website 3",
      description: "Luxury real estate template with high-end property showcase",
      isComingSoon: true,
    },
    {
      id: "realtor-4",
      title: "RealtorNOW Website 4",
      description: "Commercial real estate template with investment focus",
      isComingSoon: true,
    },
    {
      id: "realtor-5",
      title: "RealtorNOW Website 5",
      description: "New construction specialist template with builder partnerships",
      isComingSoon: true,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1426] via-[#1a2332] to-[#0B1426] text-white">
      {/* Global Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative text-center py-16 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1426]/50 to-[#0B1426]"></div>
        <div className="relative z-10 max-w-6xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="block text-white animate-fadeTextUp">RealtorNOW™ AI</span>
            <span className="block text-[#00BFFF] animate-fadeTextUp animation-delay-300 min-h-[1.2em]">
              {rotatingTexts[currentText]}
            </span>
            <span className="block text-white animate-fadeTextUp animation-delay-600">To Close More Deals</span>
          </h1>

          <div className="bg-red-600/20 border border-red-500 rounded-lg p-4 max-w-2xl mx-auto animate-fadeTextUp animation-delay-900">
            <p className="text-red-300 font-bold text-lg">⚠️ 85% of real estate leads never get proper follow-up!!!</p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeTextUp animation-delay-1200">
            Stop losing deals to slow response times and poor lead nurturing. Our{" "}
            <strong className="text-white">
              AI pre-qualifies buyers, books showings instantly, and follows up 24/7
            </strong>{" "}
            so you focus on closing.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-fadeTextUp animation-delay-1500">
            <Button
              className="px-8 py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-base"
              onClick={() => (window.location.href = "/payment")}
            >
              GET REALTORNOW →
            </Button>
            <Button
              variant="outline"
              className="px-8 py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-md hover:bg-[#00BFFF] hover:text-white transition-all duration-200 hover:scale-105 text-base bg-transparent"
              onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
            >
              Launch Instant Demo NOW
            </Button>
          </div>

          {/* Template Preview Buttons */}
          <div className="mt-8 animate-fadeTextUp animation-delay-1800">
            <h3 className="text-xl font-bold mb-4 text-[#00BFFF]">🏡 Preview Realtor Website Templates</h3>
            <TemplateButtonsSimple templates={realtorTemplates} baseButtonText="" />
            <p className="text-sm text-gray-400 mt-2">Click any template to view it fullscreen in a new window</p>
          </div>
        </div>
      </section>

      {/* Secondary Hero Section */}
      <section className="relative text-center py-16 px-6 md:px-10 bg-black/20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1426]/80 to-black/40"></div>
        <div className="relative z-10 max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            <span className="block text-white animate-fadeTextUp">You're not short on leads.</span>
            <span className="block text-[#00BFFF] animate-fadeTextUp animation-delay-300 animate-pulse">
              Just follow-through.
            </span>
            <span className="block text-white animate-fadeTextUp animation-delay-600">RealtorNOW fixes that.</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeTextUp animation-delay-900">
            Run a more efficient, profitable real estate business without chasing unqualified leads or burning yourself
            out. Our <strong className="text-white">AI handles 80% of lead qualification</strong> - screening,
            nurturing, appointment setting, and more.
          </p>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="relative bg-gradient-to-b from-[#0B1426]/60 to-black/40 backdrop-blur-sm py-16 px-6">
        <div className="max-w-md mx-auto bg-[#00274D]/80 backdrop-blur-sm text-white p-8 rounded-xl shadow-2xl border border-[#00BFFF]/20">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Never Miss a Hot Lead Again – <br />{" "}
            <span className="text-[#00BFFF]">Qualify & Book Showings Instantly</span>
          </h2>
          <p className="text-center text-sm text-gray-300 mb-6">See AI Real Estate Automation</p>

          <form className="space-y-4">
            <Input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
              required
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
              required
            />
            <Input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
              required
            />
            <Button
              type="submit"
              className="w-full bg-[#00BFFF] text-[#00274D] font-bold py-4 px-4 rounded-md hover:bg-[#00BFFF]/90 transition-all duration-200 hover:scale-105"
            >
              🏡 Get My Realtor AI Demo
            </Button>
          </form>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-5 sm:py-15">
        {/* Pain Points */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">Real Estate Challenges We Solve</h3>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {[
              "85% of leads never get proper follow-up due to slow response times",
              "Zillow leads ghosting after initial contact attempts",
              "Buyers not pre-qualified, wasting time on unqualified prospects",
              "Missing hot leads while showing properties to other clients",
              "Manual processes eating up time that should be spent selling",
              "Losing deals to agents who respond faster to inquiries",
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
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">AI Solutions for Real Estate Agents</h3>
          <div className="grid gap-4 grid-cols-1">
            {[
              "🏡 Every lead handled faster than any human agent could respond",
              "📅 Instant pre-qualification and showing appointments booked automatically",
              "🎯 Nurtures cold leads automatically until they're ready to buy or sell",
              "💬 Handles property questions and objections instantly - no waiting",
              "📈 Integrates seamlessly with your existing CRM and MLS system",
              "🏆 Creates engaging, personalized conversations that build trust and urgency",
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
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">See RealtorNOW in Action</h3>
          <div className="mx-auto max-w-2xl">
            <div className="relative aspect-video bg-black/40 backdrop-blur-sm rounded-xl border-2 border-[#00BFFF]/30 overflow-hidden group cursor-pointer hover:border-[#00BFFF] transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00274D]/50 to-black/50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#00BFFF] rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white font-semibold text-lg">RealtorNOW Demo</h4>
                <p className="text-gray-200 text-sm">Watch AI qualify leads and book showings automatically</p>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-[#00BFFF] text-white px-3 py-1 rounded-full text-sm font-semibold">Live Demo</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#00274D]/80 backdrop-blur-sm p-12 rounded-2xl border border-[#00BFFF]/30">
          <h3 className="text-3xl font-bold mb-6 text-[#00BFFF]">Ready to 10X Your Real Estate Business?</h3>
          <p className="text-gray-300 mb-8 text-lg">
            Join top-producing agents already using AI to dominate their market
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="px-8 py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-base"
              onClick={() => (window.location.href = "/payment")}
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

      {/* AdsNow.ai Section - Embedded directly */}
      <section className="relative py-16 px-6 md:px-10 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-[#0B1426]/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Complete AI Ecosystem:</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                AdsNow.ai + SuccessNOW AI
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The only platform that creates winning ads AND converts every lead into sales automatically
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* AdsNow.ai Column */}
            <Card className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 border-purple-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-300 mb-2">AdsNow.ai</h3>
                  <p className="text-gray-300">AI-Powered Ad Creation & Optimization</p>
                </div>
                <div className="space-y-4">
                  {[
                    "🎯 Creates High-Converting Ads Automatically",
                    "📈 Optimizes Campaigns 24/7 Using Real Data",
                    "⚡ Launches Across All Platforms Instantly",
                    "🧠 Uses Data from 10,000+ Daily Leads",
                    "💰 Maximizes ROI with AI-Driven Insights",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-purple-400 mr-3 flex-shrink-0">✨</span>
                      <span className="text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* SuccessNOW AI Column */}
            <Card className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-300 mb-2">SuccessNOW AI</h3>
                  <p className="text-gray-300">AI SuperAgent for Lead Conversion</p>
                </div>
                <div className="space-y-4">
                  {[
                    "⚡ Instantly Engages Every Lead",
                    "📅 Books Appointments Automatically",
                    "💬 Answers Questions & Handles Objections",
                    "🔄 Follows Up Always - Never Misses a Lead",
                    "⭐ Gets Reviews & Asks for Referrals",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-blue-400 mr-3 flex-shrink-0">✨</span>
                      <span className="text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-purple-400 mb-2">10,000+</div>
              <div className="text-gray-300">Leads Generated Daily</div>
            </div>
            <div className="text-center bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Operations</div>
            </div>
            <div className="text-center bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-300">Businesses Automated</div>
            </div>
          </div>

          {/* Process Flow */}
          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Complete Lead-to-Sale Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "AI Creates Ads", desc: "AdsNow.ai generates winning campaigns", color: "purple" },
                {
                  step: "2",
                  title: "Launches & Optimizes",
                  desc: "Automatically improves performance",
                  color: "purple",
                },
                { step: "3", title: "Instant Engagement", desc: "SuccessNOW AI responds immediately", color: "blue" },
                { step: "4", title: "Converts to Sales", desc: "Books appointments & closes deals", color: "blue" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-12 h-12 bg-${item.color}-500 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <span className="text-white font-bold">{item.step}</span>
                  </div>
                  <h4 className="font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6 text-white">Ready for the Complete AI Sales Machine?</h3>
            <p className="text-xl text-gray-300 mb-8">
              Get both AdsNow.ai and SuccessNOW AI working together to dominate your market
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-md shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 text-base"
                onClick={() => (window.location.href = "/payment")}
              >
                Get Complete AI System
              </Button>
              <Button
                variant="outline"
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-md hover:bg-purple-400 hover:text-white transition-all duration-200 hover:scale-105 text-base bg-transparent"
                onClick={() => window.open("https://adsnow.ai", "_blank")}
              >
                Learn More About AdsNow.ai
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
