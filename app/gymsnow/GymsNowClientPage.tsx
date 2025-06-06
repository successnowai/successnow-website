"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/home/footer"
import Navbar from "@/components/navigation/navbar"

export default function GymsNowClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0f1a] to-[#00274D] text-white">
      {/* Global Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-16 px-6 md:px-10 overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="block text-white animate-fadeTextUp">GymsNOW AI™ that converts</span>
            <span className="block text-[#00BFFF] animate-fadeTextUp animation-delay-300 animate-pulse">Members</span>
            <span className="block text-white animate-fadeTextUp animation-delay-600">into retention</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeTextUp animation-delay-900">
            Stop losing members after the first month. Our{" "}
            <strong className="text-white">
              AI follows up post-class, automates renewals, and keeps members engaged
            </strong>{" "}
            with personalized messaging.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-fadeTextUp animation-delay-1200">
            <Button
              className="px-8 py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-base"
              onClick={() => (window.location.href = "/payment")}
            >
              GET GYMSNOW →
            </Button>
            <Button
              variant="outline"
              className="px-8 py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-md hover:bg-[#00BFFF] hover:text-white transition-all duration-200 hover:scale-105 text-base bg-transparent"
              onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
            >
              Launch Instant Demo NOW
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="relative bg-black/20 backdrop-blur-sm py-16 px-6">
        <div className="max-w-md mx-auto bg-[#00274D]/80 backdrop-blur-sm text-white p-8 rounded-xl shadow-2xl border border-[#00BFFF]/20">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Fill Your Classes – <br /> <span className="text-[#00BFFF]">Keep Members Engaged Automatically</span>
          </h2>
          <p className="text-center text-sm text-gray-300 mb-6">See AI Fitness Automation</p>

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
              🏋️ Get My Gym AI Demo
            </Button>
          </form>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-5 py-15">
        {/* Pain Points */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">Fitness Industry Challenges We Solve</h3>
          <div className="grid gap-4 sm:grid-cols-2">
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
              "AI follows up post-class or trial with personalized encouragement",
              "Automates renewals & push offers at optimal timing",
              "Social & SMS reminders to boost retention and attendance",
              "Automated class booking and waitlist management",
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
            <div className="relative aspect-video bg-black/40 backdrop-blur-sm rounded-xl border-2 border-[#00BFFF]/30 overflow-hidden group cursor-pointer hover:border-[#00BFFF] transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00274D]/50 to-black/50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#00BFFF] rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white font-semibold text-lg">GymsNOW Demo</h4>
                <p className="text-gray-200 text-sm">Watch AI boost member retention and automate engagement</p>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-[#00BFFF] text-white px-3 py-1 rounded-full text-sm font-semibold">Live Demo</span>
              </div>
            </div>
          </div>
        </div>

        {/* AdsNow Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-[#0b0f1a]/80 to-[#00274D]/80 rounded-2xl mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white">Complete AI Ecosystem: </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  AdsNow.ai + SuccessNOW
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                From ad creation to lead conversion - our AI handles your entire sales funnel 24/7
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* AdsNow.ai Column */}
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-600/10 p-6 rounded-xl border border-purple-500/20">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-600/20 p-3 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-400"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-300">AdsNow.ai</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">✓</span>
                    <span className="text-gray-300">Creates high-converting ads automatically</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">✓</span>
                    <span className="text-gray-300">Launches campaigns across all platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">✓</span>
                    <span className="text-gray-300">Optimizes ad spend 24/7 using AI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">✓</span>
                    <span className="text-gray-300">Uses data from 10,000+ daily leads</span>
                  </li>
                </ul>
              </div>

              {/* SuccessNOW Column */}
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-600/10 p-6 rounded-xl border border-blue-500/20">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-400"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-300">SuccessNOW AI</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span className="text-gray-300">Instantly engages every lead 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span className="text-gray-300">Books appointments automatically</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span className="text-gray-300">Follows-up always, never misses a lead</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span className="text-gray-300">Asks for referrals & gets 5-star reviews</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-12">
              <div className="bg-black/30 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">10,000+</div>
                <div className="text-sm text-gray-400">Leads Generated Daily</div>
              </div>
              <div className="bg-black/30 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">24/7</div>
                <div className="text-sm text-gray-400">AI Operations</div>
              </div>
              <div className="bg-black/30 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">500+</div>
                <div className="text-sm text-gray-400">Businesses Automated</div>
              </div>
            </div>

            {/* Process Flow */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-center mb-8 text-gray-300">Complete Lead-to-Client Journey</h3>
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-center mb-6 md:mb-0">
                  <div className="bg-purple-900/30 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-400 text-xl font-bold">1</span>
                  </div>
                  <p className="text-gray-300 text-sm">AI Creates Ads</p>
                </div>
                <div className="hidden md:block text-gray-600">→</div>
                <div className="text-center mb-6 md:mb-0">
                  <div className="bg-purple-900/30 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-400 text-xl font-bold">2</span>
                  </div>
                  <p className="text-gray-300 text-sm">Launches & Optimizes</p>
                </div>
                <div className="hidden md:block text-gray-600">→</div>
                <div className="text-center mb-6 md:mb-0">
                  <div className="bg-blue-900/30 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-400 text-xl font-bold">3</span>
                  </div>
                  <p className="text-gray-300 text-sm">Instant Engagement</p>
                </div>
                <div className="hidden md:block text-gray-600">→</div>
                <div className="text-center">
                  <div className="bg-blue-900/30 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-400 text-xl font-bold">4</span>
                  </div>
                  <p className="text-gray-300 text-sm">Converts to Sales</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-md shadow-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 hover:scale-105 text-base"
                  onClick={() => (window.location.href = "/payment")}
                >
                  Get Complete AI System
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-4 border-2 border-purple-500/50 text-purple-300 font-semibold rounded-md hover:bg-purple-500/20 transition-all duration-200 hover:scale-105 text-base bg-transparent"
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
          <h3 className="text-3xl font-bold mb-6 text-[#00BFFF]">Ready to Grow Your Fitness Business with AI?</h3>
          <p className="text-gray-300 mb-8 text-lg">
            Join successful gyms and studios already using AI to boost retention
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

      <Footer />
    </div>
  )
}
