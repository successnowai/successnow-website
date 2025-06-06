"use client"

import AdsNowSection from "@/components/home/adsnow-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/home/footer"
import { TemplateButtonsSimple } from "@/components/ui/template-buttons-simple"
import { useState, useEffect } from "react"

const AutoDealersNowClient = () => {
  const [currentText, setCurrentText] = useState(0)

  const rotatingTexts = [
    "Instantly Engages",
    "Converts Leads",
    "Books Appointments",
    "Gets 5 Star Reviews",
    "Follows Up Always",
  ]

  const autoTemplates = [
    {
      id: "auto-1",
      title: "AutoDealer Website 1",
      description: "Professional automotive dealership template with lead capture",
    },
    {
      id: "auto-2",
      title: "AutoDealerNOW Website 2",
      description: "Modern luxury car dealership design with inventory showcase",
      isComingSoon: true,
    },
    {
      id: "auto-3",
      title: "AutoDealerNOW Website 3",
      description: "High-performance sports car dealership template",
      isComingSoon: true,
    },
    {
      id: "auto-4",
      title: "AutoDealerNOW Website 4",
      description: "Family-friendly dealership with financing focus",
      isComingSoon: true,
    },
    {
      id: "auto-5",
      title: "AutoDealerNOW Website 5",
      description: "Premium dealership template with virtual showroom",
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
      {/* Hero Section */}
      <section className="relative text-center py-16 px-6 md:px-10 overflow-hidden">
        {/* Add gradient overlay */}
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
            <p className="text-red-300 font-bold text-lg">⚠️ 77% of Leads are lost due to poor handling!!!</p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeTextUp animation-delay-1200">
            Stop losing sales to no-shows and forgotten follow-ups. Our{" "}
            <strong className="text-white">AI books test drives, confirms appointments, and nurtures every lead</strong>{" "}
            until they buy.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-fadeTextUp animation-delay-1500">
            <Button
              className="px-8 py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-base"
              onClick={() => (window.location.href = "/signup")}
            >
              GET AUTODEALERSNOW →
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
            <h3 className="text-xl font-bold mb-4 text-[#00BFFF]">🚗 Preview Auto Dealer Website Templates</h3>
            <TemplateButtonsSimple templates={autoTemplates} baseButtonText="" />
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
            <span className="block text-white animate-fadeTextUp animation-delay-600">AutoDealersNOW fixes that.</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeTextUp animation-delay-900">
            Run a tighter, faster, more accountable sales floor without chasing your team or burning yourself out. Our{" "}
            <strong className="text-white">AI handles 80% of your sales process</strong> - follow-up, reactivation,
            appointment setting, and more.
          </p>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="relative bg-gradient-to-b from-[#0B1426]/60 to-black/40 backdrop-blur-sm py-16 px-6">
        <div className="max-w-md mx-auto bg-[#00274D]/80 backdrop-blur-sm text-white p-8 rounded-xl shadow-2xl border border-[#00BFFF]/20">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Never Miss a Lead Again – <br /> <span className="text-[#00BFFF]">Book Test Drives Automatically</span>
          </h2>
          <p className="text-center text-sm text-gray-300 mb-6">See AI Auto Sales Automation</p>

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
              className="w-full bg-[#00BFFF] text-[#00274D] font-bold py-4 px-4 rounded-md hover:opacity-90 transition-all duration-200 hover:scale-105 text-base"
            >
              🚗 Get My Auto Dealer AI Demo
            </Button>
          </form>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-5 py-15">
        {/* Pain Points */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">Auto Sales Challenges We Solve</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "77% of leads lost due to poor handling and slow response times",
              "Sales team too busy to nurture cold leads properly",
              "Customers shopping elsewhere while you're chasing other deals",
              "No-shows and missed appointments killing your conversion rates",
              "Manual processes eating up time that should be spent selling",
              "Losing deals to competitors with faster response times",
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
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">AI Solutions for Auto Dealerships</h3>
          <div className="grid gap-4 sm:grid-cols-1">
            {[
              "🚗 Every lead handled faster than any human team could respond",
              "📅 Books more test drives and ensures customers actually show up",
              "🎯 Reactivates cold leads automatically until they're ready to buy",
              "💬 Handles objections & FAQs instantly - no waiting for sales reps",
              "📈 Integrates seamlessly with your existing CRM and workflow",
              "🏆 Creates engaging, personalized conversations that build trust",
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
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">See AutoDealersNOW in Action</h3>
          <div className="mx-auto max-w-2xl">
            <div className="relative aspect-video bg-black/40 backdrop-blur-sm rounded-xl border-2 border-[#00BFFF]/30 overflow-hidden group cursor-pointer hover:border-[#00BFFF] transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00274D]/50 to-black/50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#00BFFF] rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white font-semibold text-lg">AutoDealersNOW Demo</h4>
                <p className="text-gray-200 text-sm">Watch AI book test drives and follow up automatically</p>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-[#00BFFF] text-white px-3 py-1 rounded-full text-sm font-semibold">Live Demo</span>
              </div>
            </div>
          </div>
        </div>

        {/* AdsNow Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-[#0B1426]/80 via-[#1a2332]/80 to-[#0B1426]/80 rounded-2xl mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white">Complete AI Ecosystem: </span>
                <span className="bg-gradient-to-r from-[#9333EA] to-[#00BFFF] bg-clip-text text-transparent">
                  AdsNow.ai + SuccessNOW
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                The ultimate AI solution that creates, launches, and optimizes your ads 24/7, then instantly engages and
                converts every lead
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* AdsNow.ai Column */}
              <div className="bg-gradient-to-br from-[#9333EA]/20 to-[#6366F1]/10 p-6 rounded-xl border border-[#9333EA]/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#9333EA] rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#9333EA]">AdsNow.ai</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-[#9333EA] mr-3 flex-shrink-0 text-lg">✓</span>
                    <span className="text-gray-300">Creates high-converting ads automatically</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9333EA] mr-3 flex-shrink-0 text-lg">✓</span>
                    <span className="text-gray-300">Launches campaigns across all platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9333EA] mr-3 flex-shrink-0 text-lg">✓</span>
                    <span className="text-gray-300">
                      Optimizes performance 24/7 using data from 10,000+ daily leads
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9333EA] mr-3 flex-shrink-0 text-lg">✓</span>
                    <span className="text-gray-300">Tests 15+ new ads weekly without human intervention</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9333EA] mr-3 flex-shrink-0 text-lg">✓</span>
                    <span className="text-gray-300">Scales winning campaigns automatically</span>
                  </li>
                </ul>
              </div>

              {/* SuccessNOW Column */}
              <div className="bg-gradient-to-br from-[#00BFFF]/20 to-[#0080FF]/10 p-6 rounded-xl border border-[#00BFFF]/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#00BFFF] rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#00BFFF]">SuccessNOW AI</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-[#00BFFF] mr-3 flex-shrink-0 text-lg">✓</span>
                    <span className="text-gray-300">Instantly engages every lead 24/7/365</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00BFFF] mr-3 flex-shrink-0 text-lg">✓</span>
                    <span className="text-gray-300">Books appointments and follows up automatically</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00BFFF] mr-3 flex-shrink-0 text-lg">✓</span>
                    <span className="text-gray-300">Collects information and answers nurturing questions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00BFFF] mr-3 flex-shrink-0 text-lg">✓</span>
                    <span className="text-gray-300">Never misses a lead or follow-up opportunity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00BFFF] mr-3 flex-shrink-0 text-lg">✓</span>
                    <span className="text-gray-300">Asks for referrals and gets 5-star reviews</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-12">
              <div className="bg-black/30 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-[#00BFFF] mb-2">10,000+</div>
                <div className="text-gray-400 text-sm">Leads Generated Daily</div>
              </div>
              <div className="bg-black/30 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-[#00BFFF] mb-2">24/7</div>
                <div className="text-gray-400 text-sm">AI Operations</div>
              </div>
              <div className="bg-black/30 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-[#00BFFF] mb-2">500+</div>
                <div className="text-gray-400 text-sm">Businesses Automated</div>
              </div>
            </div>

            {/* Process Flow */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-center mb-6 text-white">Complete Lead-to-Sale AI Process</h3>
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-center px-4 mb-6 md:mb-0">
                  <div className="w-16 h-16 bg-[#9333EA] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">1️⃣</span>
                  </div>
                  <div className="text-sm text-gray-300">AI Creates Ads</div>
                </div>
                <div className="hidden md:block text-[#00BFFF]">→</div>
                <div className="text-center px-4 mb-6 md:mb-0">
                  <div className="w-16 h-16 bg-[#9333EA] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">2️⃣</span>
                  </div>
                  <div className="text-sm text-gray-300">Launches & Optimizes</div>
                </div>
                <div className="hidden md:block text-[#00BFFF]">→</div>
                <div className="text-center px-4 mb-6 md:mb-0">
                  <div className="w-16 h-16 bg-[#9333EA] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">3️⃣</span>
                  </div>
                  <div className="text-sm text-gray-300">Instant Engagement</div>
                </div>
                <div className="hidden md:block text-[#00BFFF]">→</div>
                <div className="text-center px-4">
                  <div className="w-16 h-16 bg-[#00BFFF] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">4️⃣</span>
                  </div>
                  <div className="text-sm text-gray-300">Converts to Sales</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  className="px-8 py-4 bg-gradient-to-r from-[#9333EA] to-[#00BFFF] text-white font-semibold rounded-md shadow-lg hover:opacity-90 transition-all duration-200 hover:scale-105 text-base"
                  onClick={() => (window.location.href = "/signup")}
                >
                  Get Complete AI System
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-4 border-2 border-[#9333EA] text-[#9333EA] font-semibold rounded-md hover:bg-[#9333EA] hover:text-white transition-all duration-200 hover:scale-105 text-base bg-transparent"
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
          <h3 className="text-3xl font-bold mb-6 text-[#00BFFF]">Ready to Sell More Cars with AI?</h3>
          <p className="text-gray-300 mb-8 text-lg">Join successful dealerships already using AI to boost sales</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="px-8 py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-base"
              onClick={() => (window.location.href = "/signup")}
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

      <AdsNowSection />
      <Footer />
    </div>
  )
}

export default AutoDealersNowClient
