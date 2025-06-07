"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/home/footer"
import { TemplateButtonsSimple } from "@/components/ui/template-buttons-simple"
import Navbar from "@/components/navigation/navbar"
import { DemoPopup } from "@/components/ui/demo-popup"
import { useState } from "react"
import { InstantDemoCTA } from "@/components/ui/instant-demo-cta"
import { AdsSuccessEcosystem } from "@/components/ui/ads-success-ecosystem"

export default function MortgageNowClientPage() {
  const mortgageTemplates = [
    {
      id: "mortgage-1",
      title: "Mortgage Website 1",
      description: "Professional mortgage broker template with rate calculator and application",
    },
    {
      id: "mortgage-2",
      title: "MortgageNOW Website 2",
      description: "First-time homebuyer focused template with educational resources",
      isComingSoon: true,
    },
    {
      id: "mortgage-3",
      title: "MortgageNOW Website 3",
      description: "Refinancing specialist template with savings calculator",
      isComingSoon: true,
    },
    {
      id: "mortgage-4",
      title: "MortgageNOW Website 4",
      description: "Commercial lending template with investment property focus",
      isComingSoon: true,
    },
    {
      id: "mortgage-5",
      title: "MortgageNOW Website 5",
      description: "VA loan specialist template with military benefits focus",
      isComingSoon: true,
    },
  ]

  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false)

  const handleDemoClick = () => {
    setIsDemoPopupOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0f1a] to-[#00274D] text-white">
      {/* Global Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-16 px-6 md:px-10 overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="block text-white animate-fadeTextUp">MortgageNOW AI™ that converts</span>
            <span className="block text-[#00BFFF] animate-fadeTextUp animation-delay-300 animate-pulse">Borrowers</span>
            <span className="block text-white animate-fadeTextUp animation-delay-600">into closings</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeTextUp animation-delay-900">
            Stop chasing borrowers for documents. Our{" "}
            <strong className="text-white">AI automates follow-up, sends document reminders, and nurtures leads</strong>{" "}
            until they close.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-fadeTextUp animation-delay-1200">
            <Button
              className="px-8 py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-base"
              onClick={handleDemoClick}
            >
              GET MORTGAGENOW →
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
          <div className="mt-8 animate-fadeTextUp animation-delay-1500">
            <h3 className="text-xl font-bold mb-4 text-[#00BFFF]">🏦 Preview Mortgage Website Templates</h3>
            <TemplateButtonsSimple templates={mortgageTemplates} baseButtonText="" />
            <p className="text-sm text-gray-400 mt-2">Click any template to view it fullscreen in a new window</p>
          </div>
        </div>
      </section>

      {/* Instant Demo CTA */}
      <InstantDemoCTA onClick={handleDemoClick} />

      <AdsSuccessEcosystem onDemoClick={handleDemoClick} />

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-5 py-15">
        {/* Pain Points */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">Mortgage Industry Challenges We Solve</h3>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {[
              "Constantly chasing clients for documents",
              "Delays in follow-up causing lost deals",
              "Clients don't respond in time for rate locks",
              "Manual qualification process takes too long",
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
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">
            AI Solutions for Mortgage Professionals
          </h3>
          <div className="grid gap-4 grid-cols-1">
            {[
              "AI automates follow-up & document reminders with personalized messaging",
              "Instant demo booking and consultation scheduling",
              "AI explainer assistant on-site to educate prospects",
              "Automated rate alerts and market updates to keep clients engaged",
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
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">See MortgageNOW in Action</h3>
          <div className="mx-auto max-w-2xl">
            <div className="relative aspect-video bg-black/40 backdrop-blur-sm rounded-xl border-2 border-[#00BFFF]/30 overflow-hidden group cursor-pointer hover:border-[#00BFFF] transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00274D]/50 to-black/50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#00BFFF] rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white font-semibold text-lg">MortgageNOW Demo</h4>
                <p className="text-gray-200 text-sm">Watch AI qualify borrowers and automate document collection</p>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-[#00BFFF] text-white px-3 py-1 rounded-full text-sm font-semibold">Live Demo</span>
              </div>
            </div>
          </div>
        </div>

        {/* AdsNow Section - Embedded */}
        <section className="py-16 px-6 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black/40 backdrop-blur-sm rounded-2xl border border-purple-500/20 mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Complete AI Ecosystem</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AdsNow.ai creates and optimizes your ads while SuccessNOW AI instantly engages and converts every lead
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* AdsNow.ai Column */}
              <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-sm p-8 rounded-xl border border-purple-500/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">A</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AdsNow.ai</h3>
                    <p className="text-purple-300">AI Ad Creation & Optimization</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "🎯 Creates High-Converting Ads Automatically",
                    "📈 Optimizes Campaigns 24/7 Using 10,000+ Daily Leads Data",
                    "⚡ Launches Across All Platforms Instantly",
                    "🔄 Continuously Tests & Improves Performance",
                  ].map((feature, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="mr-2">{feature.split(" ")[0]}</span>
                      <span>{feature.substring(feature.indexOf(" ") + 1)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SuccessNOW AI Column */}
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm p-8 rounded-xl border border-blue-500/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">S</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">SuccessNOW AI</h3>
                    <p className="text-blue-300">AI Lead Engagement & Conversion</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "⚡ Instantly Engages Every Lead",
                    "📅 Books Appointments Automatically",
                    "🔄 Follows Up Always - Never Misses a Lead",
                    "⭐ Gets Reviews & Referrals Automatically",
                  ].map((feature, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="mr-2">{feature.split(" ")[0]}</span>
                      <span>{feature.substring(feature.indexOf(" ") + 1)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Statistics Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { number: "10,000+", label: "Leads Generated Daily" },
                { number: "24/7", label: "AI Operations" },
                { number: "500+", label: "Businesses Automated" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50"
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Process Flow */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-center mb-8 text-white">Complete Lead-to-Sale Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { step: "1", title: "AI Creates Ads", desc: "AdsNow.ai generates high-converting campaigns" },
                  { step: "2", title: "Launches & Optimizes", desc: "Automatically tests and improves performance" },
                  { step: "3", title: "Instant Engagement", desc: "SuccessNOW AI engages leads immediately" },
                  { step: "4", title: "Converts to Sales", desc: "Books appointments and closes deals" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">{item.step}</span>
                    </div>
                    <h4 className="font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-md shadow-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 hover:scale-105 text-base"
                  onClick={handleDemoClick}
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

        {/* CTA Section */}
        <div className="text-center bg-[#00274D]/80 backdrop-blur-sm p-12 rounded-2xl border border-[#00BFFF]/30">
          <h3 className="text-3xl font-bold mb-6 text-[#00BFFF]">Ready to Close More Loans with AI?</h3>
          <p className="text-gray-300 mb-8 text-lg">
            Join top mortgage professionals already using AI to streamline their process
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

      {/* Demo Popup */}
      <DemoPopup isOpen={isDemoPopupOpen} onClose={() => setIsDemoPopupOpen(false)} />

      <Footer />
    </div>
  )
}
