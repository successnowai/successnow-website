"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/home/footer"
import { TemplateButtonsSimple } from "@/components/ui/template-buttons-simple"
import { DemoPopup } from "@/components/ui/demo-popup"
// import { InstantDemoCTA } from "@/components/ui/instant-demo-cta" // Removed
import { useState, useEffect } from "react"
import { AdsSuccessEcosystem } from "@/components/ui/ads-success-ecosystem"

const GymsNowClientPage = () => {
  const [currentText, setCurrentText] = useState(0)
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false)

  const rotatingTexts = [
    "Instantly Engages",
    "Converts Leads",
    "Books Classes",
    "Gets 5 Star Reviews",
    "Follows Up Always",
  ]

  // Gym & Studio Inspirations with correct deployed URLs
  const gymInspiration = [
    {
      id: "gym-inspiration-1",
      title: "Martial Arts Studio",
      description: "Professional martial arts studio design",
      url: "https://v0-martialarts-website-git-martialar-474cdd-info-9422s-projects.vercel.app/",
      imageUrl: "/images/gym-inspiration-1.png",
    },
    {
      id: "gym-inspiration-2",
      title: "Yoga Studio",
      description: "Serene yoga studio layout",
      url: "https://v0-yoga-studio-webiste-1-git-yoga-we-9f2cdf-info-9422s-projects.vercel.app/",
      imageUrl: "/images/gym-inspiration-1.png",
    },
    {
      id: "gym-inspiration-3",
      title: "Pilates Studio",
      description: "Modern pilates studio experience",
      url: "https://v0-pilates-website-1-git-pilates-website-1-info-9422s-projects.vercel.app/",
      imageUrl: "/images/gym-inspiration-1.png",
    },
    {
      id: "gym-inspiration-4",
      title: "Fitness Studio",
      description: "Premium fitness studio design",
      url: "https://v0-zsofika-website-template.vercel.app/",
      imageUrl: "/images/gym-inspiration-1.png",
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
            <span className="block text-white animate-fadeTextUp">GymsNOW™ AI</span>
            <span className="block text-[#00BFFF] animate-fadeTextUp animation-delay-300 min-h-[1.2em]">
              {rotatingTexts[currentText]}
            </span>
            <span className="block text-white animate-fadeTextUp animation-delay-600">To Skyrocket Your Results</span>
          </h1>

          <div className="bg-red-600/20 border border-red-500 rounded-lg p-4 max-w-2xl mx-auto animate-fadeTextUp animation-delay-900">
            <p className="text-red-300 font-bold text-lg">⚠️ 77% of Leads are lost due to poor handling!!!</p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeTextUp animation-delay-1200">
            Stop losing members to no-shows and forgotten follow-ups. Our{" "}
            <strong className="text-white">AI books classes, confirms appointments, and nurtures every lead</strong>{" "}
            until they join.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-fadeTextUp animation-delay-1500">
            <Button
              className="px-8 py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-base"
              onClick={handleDemoClick}
            >
              GET GYMSNOW →
            </Button>
            <Button
              variant="outline"
              className="px-8 py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-md hover:bg-[#00BFFF] hover:text-white transition-all duration-200 hover:scale-105 text-base bg-transparent"
              onClick={handleDemoClick}
            >
              Launch Instant Demo NOW
            </Button>
          </div>

          {/* Design Inspiration Section */}
          <div className="mt-8 animate-fadeTextUp animation-delay-1800">
            <div className="bg-gradient-to-r from-[#00274D]/80 to-[#1a2332]/80 backdrop-blur-sm p-6 rounded-xl border border-[#00BFFF]/30">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#00BFFF]">🎨 Who Wants a Reused Template?!</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
                <strong className="text-white">
                  All of our sites are 100% custom-built for YOUR fitness business.
                </strong>{" "}
                But here's some inspiration of what's possible when you combine motivating design with AI that actually
                converts prospects into members:
              </p>
              <TemplateButtonsSimple templates={gymInspiration} baseButtonText="View Inspiration" />
              <p className="text-xs sm:text-sm text-gray-400 mt-3 italic">
                💡 <strong className="text-[#00BFFF]">Your custom design journey starts the moment you sign up!</strong>{" "}
                No cookie-cutter templates here.
              </p>
            </div>
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
            <span className="block text-white animate-fadeTextUp animation-delay-600">GymsNOW fixes that.</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeTextUp animation-delay-900">
            Run a tighter, faster, more accountable fitness business without chasing leads or burning yourself out. Our{" "}
            <strong className="text-white">AI handles 80% of your member process</strong> - follow-up, reactivation,
            class booking, and more.
          </p>
        </div>
      </section>

      {/* Instant Demo CTA Removed */}
      {/* <InstantDemoCTA onClick={handleDemoClick} /> */}

      <AdsSuccessEcosystem onDemoClick={handleDemoClick} />

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-5 py-15">
        {/* Pain Points */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">Fitness Business Challenges We Solve</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "77% of leads lost due to poor handling and slow response times",
              "Staff too busy to nurture potential members properly",
              "Prospects shopping elsewhere while you're handling other inquiries",
              "No-shows and missed trial classes killing your conversion rates",
              "Manual processes eating up time that should be spent training",
              "Losing members to competitors with faster response times",
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
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">AI Solutions for Gyms & Studios</h3>
          <div className="grid gap-4 sm:grid-cols-1">
            {[
              "💪 Every lead handled faster than any human team could respond",
              "📅 Books more trial classes and ensures prospects actually show up",
              "🎯 Reactivates cold leads automatically until they're ready to join",
              "💬 Handles membership questions & FAQs instantly - no waiting for staff",
              "📈 Integrates seamlessly with your existing membership system",
              "🏆 Creates engaging, personalized conversations that build commitment",
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
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">See GymsNOW in Action</h3>
          <div className="mx-auto max-w-2xl">
            <div
              onClick={handleDemoClick}
              className="relative aspect-video bg-black/40 backdrop-blur-sm rounded-xl border-2 border-[#00BFFF]/30 overflow-hidden group cursor-pointer hover:border-[#00BFFF] transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00274D]/50 to-black/50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#00BFFF] rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white font-semibold text-lg">GymsNOW Demo</h4>
                <p className="text-gray-200 text-sm">Watch AI book classes and follow up automatically</p>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-[#00BFFF] text-white px-3 py-1 rounded-full text-sm font-semibold">Live Demo</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#00274D]/80 backdrop-blur-sm p-12 rounded-2xl border border-[#00BFFF]/30">
          <h3 className="text-3xl font-bold mb-6 text-[#00BFFF]">Ready to Grow Your Fitness Business with AI?</h3>
          <p className="text-gray-300 mb-8 text-lg">Join successful gyms already using AI to boost memberships</p>
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

export default GymsNowClientPage
