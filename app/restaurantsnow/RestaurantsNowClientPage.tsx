"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/home/footer"
import { DemoPopup } from "@/components/ui/demo-popup"
import { useState, useEffect } from "react"
import { AdsSuccessEcosystem } from "@/components/ui/ads-success-ecosystem"

const RestaurantsNowClientPage = () => {
  const [currentText, setCurrentText] = useState(0)
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false)

  const rotatingTexts = [
    "Takes Reservations 24/7",
    "Manages Waitlists",
    "Promotes Specials",
    "Gets 5 Star Reviews",
    "Drives Repeat Diners",
  ]

  const restaurantInspiration = [
    {
      id: "restaurant-inspiration-1",
      title: "Modern Eatery",
      description: "Sleek design for a modern restaurant.",
      url: "https://v0-restaurant-template-1-git-main-info-9422s-projects.vercel.app/",
      imageUrl: "/images/restaurant-inspiration-1.png",
    },
  ]

  const handleDemoClick = () => setIsDemoPopupOpen(true)
  const handleSignupClick = () => (window.location.href = "/restaurantsnow/signup")

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
            <span className="block text-white animate-fadeTextUp">RestaurantsNOW™ AI</span>
            <span className="block text-[#00BFFF] animate-fadeTextUp animation-delay-300 min-h-[1.2em]">
              {rotatingTexts[currentText]}
            </span>
            <span className="block text-white animate-fadeTextUp animation-delay-600">To Fill Every Table</span>
          </h1>

          <div className="bg-red-600/20 border border-red-500 rounded-lg p-4 max-w-2xl mx-auto animate-fadeTextUp animation-delay-900">
            <p className="text-red-300 font-bold text-lg">⚠️ An unanswered phone is an empty table later.</p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeTextUp animation-delay-1200">
            Stop missing reservations because your host is busy or it's after hours. Our{" "}
            <strong className="text-white">
              AI takes reservations, manages your waitlist, and promotes specials 24/7
            </strong>
            , keeping your restaurant buzzing.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-fadeTextUp animation-delay-1500">
            <Button
              className="px-8 py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-base"
              onClick={handleSignupClick}
            >
              GET RESTAURANTSNOW →
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
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#00BFFF]">🍽️ Custom Built for YOUR Restaurant</h3>
              <div className="space-y-3 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong className="text-white">Custom Website:</strong> Branded to your culinary vision and dining
                  experience
                </p>
                <p>
                  <strong className="text-white">Custom AI Smart Funnels:</strong> Tailored to your menu, reservations,
                  and special events
                </p>
                <p>
                  <strong className="text-white">Custom AI Agent:</strong> Trained on your menu items, dietary
                  restrictions, and service standards
                </p>
                <p>
                  <strong className="text-white">Never Miss Anything:</strong> AI agents that never miss a reservation
                  request, never miss special event bookings, makes notes and transcripts of every customer interaction
                </p>
                <p className="text-[#00BFFF] font-semibold">
                  It's like having the best maître d' using all the best AI tools. Save countless money on staff that
                  make excuses, call in sick, aren't motivated, or don't follow service protocols.
                </p>
                <p className="text-white font-bold text-center mt-4">
                  🚀 Our custom-built agents never miss. Dominate your local dining scene with the best AI agents in the
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
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">Restaurant Challenges We Solve</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Missing reservation calls during peak dinner service",
              "Inaccurate wait time quotes leading to frustrated customers",
              "No-shows for large party reservations",
              "Struggling to promote daily specials or events effectively",
              "Difficulty getting diners to come back for another meal",
              "Not enough positive online reviews to attract new customers",
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
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">AI Solutions for Restaurants</h3>
          <div className="grid gap-4 sm:grid-cols-1">
            {[
              "🍽️ 24/7 AI host to take reservations and answer questions",
              "📅 Smart waitlist management with accurate text message updates",
              "🎯 Automated reservation confirmations and reminders to reduce no-shows",
              "💬 Broadcast daily specials and promotions via text to your customers",
              "📈 Loyalty campaigns to drive repeat business and increase customer LTV",
              "🏆 Automatically requests reviews from happy diners",
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
          <h3 className="text-3xl font-bold mb-6 text-[#00BFFF]">Ready to Fill Your Restaurant with AI?</h3>
          <p className="text-gray-300 mb-8 text-lg">
            Join successful restaurants using AI to increase bookings and delight diners.
          </p>
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

export default RestaurantsNowClientPage
