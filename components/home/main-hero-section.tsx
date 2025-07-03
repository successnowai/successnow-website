"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RotatingText } from "@/components/ui/rotating-text"
import { AnimatedBot } from "@/components/ui/animated-bot"
import { VoiceDemoModal } from "@/components/ui/voice-demo-modal"

export default function MainHeroSection() {
  const rotatingWords = ["Leads", "Cold Prospects", "Conversations", "Website Clicks", "Inquiries"]
  const [isVoiceDemoOpen, setIsVoiceDemoOpen] = useState(false)

  return (
    <section className="relative bg-black text-white min-h-[90vh] flex items-center" aria-labelledby="hero-heading">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <AnimatedBot onEngageDemo={() => setIsVoiceDemoOpen(true)} />
          <h1
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            aria-live="polite"
          >
            SuccessNOW AI<sup className="text-xl md:text-2xl">™</sup> that converts
            <br />
            <span className="block mt-2 mb-2">
              <RotatingText words={rotatingWords} className="text-[#4DA6FF] font-bold" interval={3000} />
            </span>
            into sales
          </h1>

          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Let The <strong>SuccessNOW AI Superagents and AI bots</strong> close leads, book appointments, and reply to
            client inquiries—24/7.
          </p>

          <Button
            onClick={() => setIsVoiceDemoOpen(true)}
            className="bg-transparent hover:bg-[#4DA6FF]/20 text-[#4DA6FF] border-2 border-[#4DA6FF] rounded-full px-8 py-6 text-lg font-medium transition-all"
            aria-label="Launch instant demo now"
          >
            Launch Instant Demo NOW
          </Button>
        </div>
      </div>

      {/* Blue line at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#4DA6FF]/30"></div>
      <VoiceDemoModal isOpen={isVoiceDemoOpen} onClose={() => setIsVoiceDemoOpen(false)} />
    </section>
  )
}
