"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/home/footer"
import Navbar from "@/components/navigation/navbar"
import { DemoPopup } from "@/components/ui/demo-popup"
import { InstantDemoCTA } from "@/components/ui/instant-demo-cta"
import { AdsSuccessEcosystem } from "@/components/ui/ads-success-ecosystem"
import { TemplateButtonsSimple } from "@/components/ui/template-buttons-simple"
import { useState, useEffect } from "react"

export default function GymsNowClientPage() {
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false)
  const [currentText, setCurrentText] = useState(0)

  const rotatingTexts = ["Boosts Retention", "Automates Renewals", "Engages Members", "Fills Classes", "Never Sleeps"]

  // Gym & Fitness Inspirations with screenshots
  const gymInspiration = [
    {
      id: "martial-arts-inspiration-1",
      title: "Martial Arts Inspiration 1",
      description: "Dynamic design for martial arts studios",
      url: "https://v0-martialarts-website-git-martialar-474cdd-info-9422s-projects.vercel.app/",
      imageUrl: "/images/martial-arts-inspiration-1.png",
    },
    {
      id: "yoga-inspiration-1",
      title: "Yoga Studio Inspiration 1",
      description: "Serene and calming design for yoga studios",
      url: "https://v0-yoga-studio-webiste-1-git-yoga-we-9f2cdf-info-9422s-projects.vercel.app/",
      imageUrl: "/images/yoga-inspiration-1.png",
    },
    {
      id: "pilates-inspiration-1",
      title: "Pilates Studio Inspiration 1",
      description: "Elegant and modern design for Pilates studios",
      url: "https://v0-pilates-website-1-git-pilates-website-1-info-9422s-projects.vercel.app/",
      imageUrl: "/images/pilates-inspiration-1.png",
    },
    {
      id: "solo-instructor-inspiration-1",
      title: "Solo Instructor Inspiration 1",
      description: "Perfect for yoga/pilates instructors with online & private sessions",
      url: "https://v0-zsofika-website-template.vercel.app/",
      imageUrl: "/images/solo-instructor-inspiration-1.png",
    },
  ]

  const handleDemoClick = () => {
    setIsDemoPopupOpen(true)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length)
    }, 2500) // Slightly slower rotation
    return () => clearInterval(interval)
  }, [rotatingTexts.length])

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0f1a] to-[#00274D] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative text-center py-12 px-4 sm:px-6 md:py-16 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1426]/50 to-[#0B1426]"></div>
        <div className="relative z-10 max-w-6xl mx-auto space-y-6 md:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            <span className="block text-white animate-fadeTextUp">GymsNOW AI™ that</span>
            <span className="block text-[#00BFFF] animate-fadeTextUp animation-delay-300 min-h-[1.2em] sm:min-h-[1.3em] md:min-h-[1.4em]">
              {rotatingTexts[currentText]}
            </span>
            <span className="block text-white animate-fadeTextUp animation-delay-600">and converts members</span>
          </h1>

          <div className="bg-red-600/20 border border-red-500 rounded-lg p-3 sm:p-4 max-w-md sm:max-w-lg md:max-w-2xl mx-auto animate-fadeTextUp animation-delay-900">
            <p className="text-red-300 font-bold text-base sm:text-lg">⚠️ Stop losing members after the first month!</p>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-md sm:max-w-xl md:max-w-3xl mx-auto animate-fadeTextUp animation-delay-1200">
            Our AI follows up post-class, automates renewals, and keeps members engaged with personalized messaging.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 md:mt-8 animate-fadeTextUp animation-delay-1500">
            <Button
              className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-sm sm:text-base"
              onClick={handleDemoClick}
            >
              GET GYMSNOW →
            </Button>
            <Button
              variant="outline"
              className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-md hover:bg-[#00BFFF] hover:text-white transition-all duration-200 hover:scale-105 text-sm sm:text-base bg-transparent"
              onClick={handleDemoClick}
            >
              Launch Instant Demo NOW
            </Button>
          </div>

          {/* Design Inspiration Section */}
          <div className="mt-10 md:mt-12 animate-fadeTextUp animation-delay-1800">
            <div className="bg-gradient-to-r from-[#00BFFF]/10 to-purple-500/10 rounded-2xl p-6 sm:p-8 border border-[#00BFFF]/20">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-center text-[#00BFFF]">
                🎨 Who Wants a Reused Template?!
              </h3>
              <p className="text-center text-sm sm:text-base text-gray-300 mb-2">
                <strong className="text-white">All of our sites are 100% custom-built</strong> for YOUR fitness
                business, but here's some inspiration of what's possible:
              </p>
              <p className="text-center text-xs sm:text-sm text-[#00BFFF] mb-6 font-semibold">
                ✨ Your custom design journey starts the moment you sign up! ✨
              </p>

              <TemplateButtonsSimple templates={gymInspiration} baseButtonText="View Inspiration" />

              <div className="mt-4 text-center">
                <p className="text-xs sm:text-sm text-gray-400">
                  These are just examples - your site will be uniquely yours!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Hero Section */}
      <section className="relative text-center py-12 px-4 sm:px-6 md:py-16 bg-black/20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1426]/80 to-black/40"></div>
        <div className="relative z-10 max-w-6xl mx-auto space-y-6 md:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            <span className="block text-white animate-fadeTextUp">Tired of member churn?</span>
            <span className="block text-[#00BFFF] animate-fadeTextUp animation-delay-300 animate-pulse">
              GymsNOW AI is your solution.
            </span>
            <span className="block text-white animate-fadeTextUp animation-delay-600">
              Boost retention effortlessly.
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-md sm:max-w-xl md:max-w-3xl mx-auto animate-fadeTextUp animation-delay-900">
            Our AI automates follow-ups, personalized offers, and class reminders, keeping your members engaged and
            loyal, so you can focus on what you do best.
          </p>
        </div>
      </section>

      <InstantDemoCTA onClick={handleDemoClick} />
      <AdsSuccessEcosystem onDemoClick={handleDemoClick} />

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-5 py-10 md:py-15">
        {/* Pain Points & Solutions */}
        <div className="mb-10 md:mb-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-[#00BFFF]">
            Fitness Industry Challenges We Solve
          </h3>
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
            {[
              "Members drop off after first month",
              "No follow-up or reminder systems in place",
              "Low engagement on offers & upsells",
              "Manual class booking and confirmation process",
            ].map((pain, index) => (
              <Card
                key={index}
                className="bg-black/40 backdrop-blur-sm border-[#00BFFF]/20 hover:border-[#00BFFF]/40 transition-all duration-300"
              >
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="flex items-start">
                    <span className="text-red-400 mr-2 sm:mr-3 flex-shrink-0 text-base sm:text-lg">❌</span>
                    <span className="text-gray-300 text-sm sm:text-base">{pain}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-10 md:mb-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-[#00BFFF]">
            AI Solutions for Gyms & Studios
          </h3>
          <div className="grid gap-3 sm:gap-4">
            {[
              "AI follows up post-class or trial with personalized encouragement",
              "Automates renewals & push offers at optimal timing",
              "Social & SMS reminders to boost retention and attendance",
              "Automated class booking and waitlist management",
            ].map((solution, index) => (
              <Card
                key={index}
                className="bg-black/40 backdrop-blur-sm border-[#00BFFF]/20 hover:border-[#00BFFF]/40 transition-all duration-300"
              >
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="flex items-start">
                    <span className="text-green-400 mr-2 sm:mr-3 flex-shrink-0 text-base sm:text-lg">✅</span>
                    <span className="text-gray-300 text-sm sm:text-base">{solution}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Video Demo */}
        <div className="mb-10 md:mb-12" id="demo">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-[#00BFFF]">
            See GymsNOW in Action
          </h3>
          <div className="mx-auto max-w-md sm:max-w-lg md:max-w-2xl">
            <div
              onClick={handleDemoClick}
              className="relative aspect-video bg-black/40 backdrop-blur-sm rounded-xl border-2 border-[#00BFFF]/30 overflow-hidden group cursor-pointer hover:border-[#00BFFF] transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00274D]/50 to-black/50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#00BFFF] rounded-full p-3 sm:p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white ml-0.5 sm:ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4">
                <h4 className="text-white font-semibold text-base sm:text-lg">GymsNOW Demo</h4>
                <p className="text-gray-200 text-xs sm:text-sm">
                  Watch AI boost member retention and automate engagement
                </p>
              </div>
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                <span className="bg-[#00BFFF] text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
                  Live Demo
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#00274D]/80 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-2xl border border-[#00BFFF]/30">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-[#00BFFF]">
            Ready to Grow Your Fitness Business with AI?
          </h3>
          <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg">
            Join successful gyms and studios already using AI to boost retention
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button
              className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-sm sm:text-base"
              onClick={handleDemoClick}
            >
              Get AI NOW
            </Button>
            <Button
              variant="outline"
              className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-md hover:bg-[#00BFFF] hover:text-white transition-all duration-200 hover:scale-105 text-sm sm:text-base bg-transparent"
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
