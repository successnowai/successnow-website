"use client"

import { Button } from "@/components/ui/button"
import { RotatingText } from "@/components/ui/rotating-text"
import { Play, Sparkles } from "lucide-react"
import { useState } from "react"

export default function HeroSection() {
  const rotatingWords = ["Qualify", "Close", "Book", "Convert"]
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false)
  const [isVideoVisible, setIsVideoVisible] = useState(false)

  const handleDemoClick = () => {
    setIsDemoPopupOpen(true)
  }

  const youtubeVideoId = "3D0CjjB9EIA"

  return (
    <div className="relative bg-gradient-to-b from-black/90 via-[#0b0f1a] to-[#00274D] text-white overflow-hidden brightness-110">
      {/* Animated Border */}
      <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-[#00BFFF] via-[#007BFF] to-[#00BFFF] bg-[length:200%_100%] animate-[scroll-border_5s_linear_infinite]"></div>

      {/* Hero Content */}
      <section className="relative text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 overflow-hidden pt-24 sm:pt-28">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 md:space-y-10">
          {/* Main Headline with Rotating Text Animation */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight px-2">
            <span className="block text-gray-100 animate-fadeTextUp text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
              SuccessNOW AI™ that converts
            </span>
            <span className="block animate-fadeTextUp animation-delay-300 text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
              <RotatingText words={rotatingWords} className="neon-text-glow" interval={2500} />
            </span>
            <span className="block text-gray-100 animate-fadeTextUp animation-delay-600 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
              into sales
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto animate-fadeTextUp animation-delay-900 px-4 sm:px-6 leading-relaxed">
            Let The <strong className="text-white">SuccessNOW AI Superagents and AI bots</strong> close leads, book
            appointments, and reply to client inquiries—24/7.
          </p>

          {/* Single Button - Optimized for Mobile */}
          <div className="flex justify-center mt-8 sm:mt-10 animate-fadeTextUp animation-delay-1200 px-4">
            <Button
              variant="outline"
              className="w-full sm:w-auto max-w-sm px-6 sm:px-8 py-4 sm:py-5 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-lg hover:bg-[#00BFFF] hover:text-white transition-all duration-200 text-base sm:text-lg bg-transparent min-h-[52px] shadow-lg hover:shadow-[0_0_20px_rgba(0,191,255,0.5)]"
              onClick={handleDemoClick}
            >
              Launch Instant Demo NOW
            </Button>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00BFFF] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
      </section>

      {/* Glowing Demo CTA Section */}
      <section className="relative bg-black/20 backdrop-blur-sm py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-sm sm:max-w-lg mx-auto">
          {/* Glowing Demo Box */}
          <div
            onClick={handleDemoClick}
            className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {/* Glow Effect Background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00BFFF] via-[#007BFF] to-[#00BFFF] rounded-2xl blur-lg opacity-75 group-hover:opacity-100 animate-pulse"></div>

            {/* Main CTA Box */}
            <div className="relative bg-gradient-to-br from-[#00BFFF] to-[#007BFF] p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl border border-[#00BFFF]/30 overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-[shimmer_3s_ease-in-out_infinite]"></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Sparkle Icons */}
                <div className="flex justify-center mb-4">
                  <div className="flex space-x-2">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse" />
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse animation-delay-1000" />
                  </div>
                </div>

                {/* Main CTA Text */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">Start My Instant Demo</h2>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">NOW</h3>

                {/* Subtitle */}
                <p className="text-white/90 text-base sm:text-lg md:text-xl font-semibold mb-6">
                  🚀 Experience AI That Converts
                </p>

                {/* Action Indicator */}
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-white font-medium text-sm">Click to Begin</span>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-bounce"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/40 rounded-full animate-bounce animation-delay-500"></div>
              <div className="absolute top-1/2 left-4 w-1 h-1 bg-white/50 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Supporting Text */}
          <p className="text-center text-gray-200 text-xs sm:text-sm mt-4 px-2">
            No signup required • Instant access • Live AI demonstration
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 sm:mb-8 text-xl sm:text-2xl md:text-3xl font-bold text-white px-2">
            Try Our AI Agent Live – See It, Hear It, Test It
          </h2>
          <p className="mx-auto mb-8 sm:mb-10 max-w-2xl text-sm sm:text-base md:text-lg text-gray-200 px-4 leading-relaxed">
            Our AI Superagents convert, book, and nurture leads 24/7 — while you get back your time. Never lose a lead
            again.
          </p>

          {/* Video Container */}
          <div className="mb-8 sm:mb-10 mx-auto max-w-2xl px-4">
            <div className="relative aspect-video bg-black/40 backdrop-blur-sm rounded-lg sm:rounded-xl border-2 border-[#00BFFF]/30 overflow-hidden shadow-lg">
              {!isVideoVisible ? (
                <div
                  className="absolute inset-0 group cursor-pointer hover:border-[#00BFFF] transition-colors duration-300"
                  onClick={() => setIsVideoVisible(true)}
                >
                  {/* Video Placeholder Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00274D]/50 to-black/50"></div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#00BFFF] rounded-full p-4 sm:p-5 shadow-lg group-hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(0,191,255,0.6)]">
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white ml-1" />
                    </div>
                  </div>

                  {/* Video Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4">
                    <h4 className="text-white font-semibold text-sm sm:text-base md:text-lg">
                      SuccessNOW Video Explainer
                    </h4>
                    <p className="text-gray-200 text-xs sm:text-sm">See how AI transforms businesses</p>
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                  title="SuccessNOW Video Explainer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>

          <div className="flex justify-center px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto max-w-sm bg-transparent border-2 border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white font-bold px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg transition-all duration-200 hover:scale-105 min-h-[52px] shadow-lg hover:shadow-[0_0_20px_rgba(0,191,255,0.5)]"
              onClick={() => document.getElementById("get-started")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get AI NOW
            </Button>
          </div>

          {/* Scrolling Text */}
          <div className="mt-8 sm:mt-10 overflow-hidden whitespace-nowrap">
            <div className="text-[#00BFFF] text-xs sm:text-sm md:text-base animate-[marquee_20s_linear_infinite]">
              SuccessNOW.ai – AI Voice Agents | Paid Ads with AdsNOW | Automated Follow-Ups | 5-Star Reviews | Full CRM
              Control | SEO Domination | Cold Lead Reactivation | Never Miss a Lead Again
            </div>
          </div>
        </div>
      </section>

      {/* Demo Popup - Temporarily commented out for diagnosis */}
      {/* <DemoPopup isOpen={isDemoPopupOpen} onClose={() => setIsDemoPopupOpen(false)} /> */}
    </div>
  )
}
