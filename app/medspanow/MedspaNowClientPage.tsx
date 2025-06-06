"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/home/footer"
import { TemplateButtonsSimple } from "@/components/ui/template-buttons-simple"
import Navbar from "@/components/navigation/navbar"
import FloatingChatRobot from "@/components/chat/floating-chat-robot"
import { useState, useEffect } from "react"

export default function MedspaNowClientPage() {
  const [currentText, setCurrentText] = useState(0)

  const rotatingTexts = [
    "Instantly Books",
    "Upsells Services",
    "Confirms Appointments",
    "Gets 5 Star Reviews",
    "Follows Up Always",
  ]

  const medspaTemplates = [
    {
      id: "medspa-1",
      title: "Medspa Website 1",
      description: "Elegant spa template with booking system and service showcase",
    },
    {
      id: "medspa-2",
      title: "MedspaNOW Website 2",
      description: "Luxury wellness center design with treatment galleries",
      isComingSoon: true,
    },
    {
      id: "medspa-3",
      title: "MedspaNOW Website 3",
      description: "Modern aesthetic clinic template with before/after galleries",
      isComingSoon: true,
    },
    {
      id: "medspa-4",
      title: "MedspaNOW Website 4",
      description: "Holistic wellness spa with membership programs",
      isComingSoon: true,
    },
    {
      id: "medspa-5",
      title: "MedspaNOW Website 5",
      description: "Premium medical spa with virtual consultations",
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

      {/* Industry-specific Floating Chat Robot */}
      <FloatingChatRobot industry="medspa" primaryColor="#e91e63" assistantName="MedspaNOW AI Beauty" />

      {/* Hero Section */}
      <section className="relative text-center py-16 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1426]/50 to-[#0B1426]"></div>
        <div className="relative z-10 max-w-6xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="block text-white animate-fadeTextUp">MedspaNOW™ AI</span>
            <span className="block text-[#00BFFF] animate-fadeTextUp animation-delay-300 min-h-[1.2em]">
              {rotatingTexts[currentText]}
            </span>
            <span className="block text-white animate-fadeTextUp animation-delay-600">To Maximize Revenue</span>
          </h1>

          <div className="bg-red-600/20 border border-red-500 rounded-lg p-4 max-w-2xl mx-auto animate-fadeTextUp animation-delay-900">
            <p className="text-red-300 font-bold text-lg">⚠️ 60% of spa bookings are lost to poor follow-up!!!</p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeTextUp animation-delay-1200">
            Stop losing revenue to missed bookings and forgotten follow-ups. Our{" "}
            <strong className="text-white">
              AI confirms appointments, upsells high-margin services, and collects reviews
            </strong>{" "}
            automatically.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-fadeTextUp animation-delay-1500">
            <Button
              className="px-8 py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-base"
              onClick={() => (window.location.href = "/payment")}
            >
              GET MEDSPANOW →
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
            <h3 className="text-xl font-bold mb-4 text-[#00BFFF]">💆 Preview Medspa Website Templates</h3>
            <TemplateButtonsSimple templates={medspaTemplates} baseButtonText="" />
            <p className="text-sm text-gray-400 mt-2">Click any template to view it fullscreen in a new window</p>
          </div>
        </div>
      </section>

      {/* Secondary Hero Section */}
      <section className="relative text-center py-16 px-6 md:px-10 bg-black/20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1426]/80 to-black/40"></div>
        <div className="relative z-10 max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            <span className="block text-white animate-fadeTextUp">You're not short on clients.</span>
            <span className="block text-[#00BFFF] animate-fadeTextUp animation-delay-300 animate-pulse">
              Just follow-through.
            </span>
            <span className="block text-white animate-fadeTextUp animation-delay-600">MedspaNOW fixes that.</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeTextUp animation-delay-900">
            Run a more profitable, efficient medspa without constantly chasing bookings or burning yourself out. Our{" "}
            <strong className="text-white">AI handles 80% of client engagement</strong> - booking, upselling, follow-up,
            and more.
          </p>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="relative bg-gradient-to-b from-[#0B1426]/60 to-black/40 backdrop-blur-sm py-16 px-6">
        <div className="max-w-md mx-auto bg-[#00274D]/80 backdrop-blur-sm text-white p-8 rounded-xl shadow-2xl border border-[#00BFFF]/20">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Never Miss Revenue Again – <br /> <span className="text-[#00BFFF]">Automate Bookings & Upsells</span>
          </h2>
          <p className="text-center text-sm text-gray-300 mb-6">See AI Medspa Automation</p>

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
              💆 Get My Medspa AI Demo
            </Button>
          </form>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-5 py-15">
        {/* Pain Points */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">Medspa Industry Challenges We Solve</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "60% of spa bookings lost due to poor follow-up and slow response",
              "Missed bookings and no-shows killing your revenue potential",
              "Inconsistent follow-up after treatments and consultations",
              "No systematic review collection or referral generation process",
              "Missed upselling opportunities for high-margin add-on services",
              "Losing clients to spas who respond faster to inquiries",
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
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">AI Solutions for Medspas</h3>
          <div className="grid gap-4 sm:grid-cols-1">
            {[
              "💆 Every client inquiry handled instantly, 24/7 - no more missed opportunities",
              "📅 Automated appointment confirmation and reminder system",
              "🎯 Intelligent upselling of high-margin services during booking and follow-up",
              "💬 Handles treatment questions and pricing objections automatically",
              "📈 Integrates seamlessly with your existing spa management system",
              "🏆 Creates personalized treatment journeys that build long-term client relationships",
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
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">See MedspaNOW in Action</h3>
          <div className="mx-auto max-w-2xl">
            <div className="relative aspect-video bg-black/40 backdrop-blur-sm rounded-xl border-2 border-[#00BFFF]/30 overflow-hidden group cursor-pointer hover:border-[#00BFFF] transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00274D]/50 to-black/50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#00BFFF] rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white font-semibold text-lg">MedspaNOW Demo</h4>
                <p className="text-gray-200 text-sm">Watch AI automate bookings and upsell services</p>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-[#00BFFF] text-white px-3 py-1 rounded-full text-sm font-semibold">Live Demo</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#00274D]/80 backdrop-blur-sm p-12 rounded-2xl border border-[#00BFFF]/30">
          <h3 className="text-3xl font-bold mb-6 text-[#00BFFF]">Ready to Maximize Your Medspa Revenue with AI?</h3>
          <p className="text-gray-300 mb-8 text-lg">
            Join successful medspas already using AI to boost revenue and reviews
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

      {/* AdsNow.ai Section - Embedded directly to avoid import issues */}
      <section className="relative py-16 px-6 md:px-10 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1426]/60 to-black/40"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Complete AI Ecosystem:</span>
              <br />
              <span className="text-purple-400">AdsNow.ai</span>
              <span className="text-white"> + </span>
              <span className="text-[#00BFFF]">SuccessNOW AI</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From ad creation to client conversion - our AI handles your entire sales funnel 24/7
            </p>
          </div>

          {/* Two-Column Feature Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* AdsNow.ai Column */}
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-700/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">AdsNow.ai</h3>
                  <p className="text-purple-300">AI Superagents</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "🎯 Creates High-Converting Ads Automatically",
                  "📈 Optimizes Campaigns 24/7 Using 10,000+ Daily Lead Data",
                  "⚡ Launches Across All Platforms Instantly",
                  "🧠 Uses AI to Test 15+ Ad Variations Per Week",
                  "💰 Maximizes ROI with Data-Driven Decisions",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-purple-400 mr-3 flex-shrink-0">✨</span>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SuccessNOW AI Column */}
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-700/20 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#00BFFF] rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#00BFFF]">SuccessNOW AI</h3>
                  <p className="text-blue-300">Lead Conversion Superagent</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "⚡ Instantly Engages Every Lead - Never Miss an Opportunity",
                  "📅 Books Appointments Automatically 24/7",
                  "💬 Answers Questions & Handles Objections",
                  "🔄 Follows Up Always - Never Lets Leads Go Cold",
                  "⭐ Gets Reviews & Referrals Automatically",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-[#00BFFF] mr-3 flex-shrink-0">🚀</span>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Statistics Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { number: "10,000+", label: "Leads Generated Daily", icon: "📊" },
              { number: "24/7", label: "AI Operations", icon: "🤖" },
              { number: "500+", label: "Businesses Automated", icon: "🏢" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Process Flow */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Complete Lead-to-Sale Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "AI Creates Ads",
                  desc: "AdsNow.ai generates high-converting campaigns",
                  color: "purple",
                },
                {
                  step: "2",
                  title: "Launches & Optimizes",
                  desc: "Automatically tests and improves performance",
                  color: "purple",
                },
                {
                  step: "3",
                  title: "Instant Engagement",
                  desc: "SuccessNOW AI responds to every lead immediately",
                  color: "blue",
                },
                {
                  step: "4",
                  title: "Converts to Sales",
                  desc: "Books appointments and closes deals 24/7",
                  color: "blue",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-12 h-12 rounded-full ${item.color === "purple" ? "bg-purple-600" : "bg-[#00BFFF]"} flex items-center justify-center mx-auto mb-4`}
                  >
                    <span className="text-white font-bold">{item.step}</span>
                  </div>
                  <h4 className="font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6 text-white">Ready for the Complete AI Sales Machine?</h3>
            <p className="text-gray-300 mb-8 text-lg">
              Get both AdsNow.ai and SuccessNOW AI working together to maximize your revenue
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-[#00BFFF] text-white font-semibold rounded-md shadow-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-200 hover:scale-105 text-base"
                onClick={() => (window.location.href = "/payment")}
              >
                Get Complete AI System
              </Button>
              <Button
                variant="outline"
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-md hover:bg-purple-500 hover:text-white transition-all duration-200 hover:scale-105 text-base bg-transparent"
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
