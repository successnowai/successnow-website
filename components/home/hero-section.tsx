"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import DemoPopup from "@/components/ui/demo-popup"
import RotatingText from "@/components/ui/rotating-text"

export default function HeroSection() {
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false)
  const [isVideoVisible, setIsVideoVisible] = useState(false)
  const rotatingWords = ["Qualify", "Close", "Book", "Convert"]
  const youtubeVideoId = "3D0CjjB9EIA"

  useEffect(() => {
    // Any necessary side effects can be added here
  }, [])

  const handleDemoClick = () => {
    setIsDemoPopupOpen(true)
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 text-center bg-cover bg-center starry-background">
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />
      <div className="relative z-10 max-w-4xl mx-auto brightness-110">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
          AI Agents That <RotatingText words={rotatingWords} className="neon-text-glow" />
          <br />
          Your Leads 24/7
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-100">
          Stop losing leads to slow response times. Our AI agents work around the clock to qualify prospects, book
          appointments, and convert visitors into customers.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#00BFFF] to-[#00D1FF] hover:from-[#00AADD] hover:to-[#00B8E6] text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
              Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-white/50 hover:bg-white/10 hover:border-white text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg transition-all"
            onClick={handleDemoClick}
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Live Demo
          </Button>
        </div>
      </div>
      <DemoPopup isOpen={isDemoPopupOpen} onClose={() => setIsDemoPopupOpen(false)} />

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
    </div>
  )
}
