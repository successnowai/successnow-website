"use client"
import { DemoPopup } from "@/components/ui/demo-popup"
import { GlowingOrbCta } from "@/components/ui/glowing-orb-cta"
import { RotatingText } from "@/components/ui/rotating-text"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function MainHeroSection() {
  const rotatingWords = ["Leads", "Cold Prospects", "Conversations", "Website Clicks", "Inquiries"]

  return (
    <section className="relative bg-black text-white min-h-[90vh] flex items-center" aria-labelledby="hero-heading">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
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

          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
            Let The <strong>SuccessNOW AI Superagents and AI bots</strong> close leads, book appointments, and reply to
            client inquiries—24/7.
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 w-full">
            {/* AI Implementation Guide Card */}
            <Card className="bg-gray-900/50 border-gray-700 hover:border-[#4DA6FF]/50 transition-all duration-300 w-full max-w-sm">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3 text-white">AI Implementation Guide</h3>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  The step-by-step guide on how to implement AI in your business and dominate on autopilot.
                </p>
                <a
                  href="https://link.successnow.ai/widget/form/eNiVmHYoP0ZwvrZoqYsr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <Button className="w-full bg-[#4DA6FF] hover:bg-[#3d8bff] text-white font-semibold py-3 px-4 rounded-md transition-colors duration-200">
                    Get Free Guide
                  </Button>
                </a>
              </CardContent>
            </Card>

            <div className="my-4 lg:my-0">
              <DemoPopup trigger={<GlowingOrbCta label="Launch Instant Demo NOW" />} />
            </div>

            {/* Free Website Report Card */}
            <Card className="bg-gray-900/50 border-gray-700 hover:border-[#4DA6FF]/50 transition-all duration-300 w-full max-w-sm">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3 text-white">Free Website Report</h3>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  Analyse how to improve your website to show in AI search and convert more leads.
                </p>
                <a
                  href="https://link.successnow.ai/widget/form/B5gmoacOWVRmbN1aIHtl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <Button className="w-full bg-[#4DA6FF] hover:bg-[#3d8bff] text-white font-semibold py-3 px-4 rounded-md transition-colors duration-200">
                    Get Free Report
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Blue line at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#4DA6FF]/30"></div>
    </section>
  )
}
