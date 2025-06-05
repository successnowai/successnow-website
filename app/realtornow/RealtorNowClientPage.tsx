"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/home/footer"

export default function RealtorNowClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0f1a] to-[#00274D] text-white">
      {/* Navigation Bar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <Image
            src="/images/successnow-logo.png"
            alt="SuccessNOW.ai"
            width={180}
            height={45}
            className="h-auto w-auto max-w-[180px]"
            priority
          />
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <a href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="/#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="/#industries" className="text-gray-300 hover:text-white transition-colors">
              Industries We Serve
            </a>
            <a href="/payment" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="/#demo" className="text-gray-300 hover:text-white transition-colors">
              Instant Demo
            </a>
          </div>
        </div>
        <Button
          className="bg-[#00BFFF] text-[#00274D] hover:bg-[#00BFFF]/90 font-bold px-6 py-2 text-sm rounded-md transition-transform duration-200 hover:scale-105"
          onClick={() => (window.location.href = "/payment")}
        >
          GET NOW!
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 px-6 md:px-10 overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="block text-white animate-fadeTextUp">RealtorNOW AI™ that converts</span>
            <span className="block text-[#00BFFF] animate-fadeTextUp animation-delay-300 animate-pulse">
              Zillow Leads
            </span>
            <span className="block text-white animate-fadeTextUp animation-delay-600">into showings</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeTextUp animation-delay-900">
            Stop chasing unqualified leads. Our{" "}
            <strong className="text-white">
              AI pre-qualifies buyers, books showings instantly, and follows up automatically
            </strong>{" "}
            so you focus on closing deals.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-fadeTextUp animation-delay-1200">
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

          {/* Social Proof */}
          <div className="mt-8 animate-fadeTextUp animation-delay-1500">
            <div className="flex justify-center items-center space-x-2 mb-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-red-500 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 border-2 border-white"></div>
              </div>
              <div className="flex text-yellow-400 ml-3">
                <span>⭐️⭐️⭐️⭐️⭐️</span>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              <strong className="text-white">150+</strong> top-producing agents
            </p>
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="relative bg-black/20 backdrop-blur-sm py-16 px-6">
        <div className="max-w-md mx-auto bg-[#00274D]/80 backdrop-blur-sm text-white p-8 rounded-xl shadow-2xl border border-[#00BFFF]/20">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Turn Zillow Leads into <br /> <span className="text-[#00BFFF]">Showings in Seconds</span>
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
              "Zillow leads ghosting after initial contact",
              "Buyers not ready or prequalified",
              "Long follow-up cycles with cold leads",
              "Missing hot leads while showing properties",
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
              "AI pre-qualifies leads and determines buying timeline automatically",
              "Instant appointment setting for qualified prospects",
              "Follow-up on autopilot with personalized messaging",
              "Lead scoring to prioritize your hottest prospects",
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

      <Footer />
    </div>
  )
}
