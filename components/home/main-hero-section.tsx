"use client"
import { DemoPopup } from "@/components/ui/demo-popup"
import { GlowingOrbCta } from "@/components/ui/glowing-orb-cta"
import { RotatingText } from "@/components/ui/rotating-text"
import { LeadMagnetCard } from "@/components/ui/lead-magnet-card"

export default function MainHeroSection() {
  const rotatingWords = ["Leads", "Cold Prospects", "Conversations", "Website Clicks", "Inquiries"]

  const aiGuideForm = (
    <div>
      {/* Placeholder for the contact form */}
      <div className="text-center mt-4 p-8 border border-dashed border-gray-500 rounded-md bg-black/20">
        <p className="text-gray-300">Your Contact Form will be embedded here.</p>
      </div>
    </div>
  )

  const websiteReportForm = (
    <div>
      {/* Placeholder for the embed code form */}
      <div className="text-center mt-4 p-8 border border-dashed border-gray-500 rounded-md bg-black/20">
        <p className="text-gray-300">Your Website Report Form will be embedded here.</p>
      </div>
    </div>
  )

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
            <LeadMagnetCard
              title="AI Implementation Guide"
              description="The step-by-step guide on how to implement AI in your business and dominate on autopilot."
              formContent={aiGuideForm}
              dialogTitle="Get Your Free AI Guide"
              dialogDescription="Enter your details to get the step-by-step guide delivered to your inbox."
            />

            <div className="my-4 lg:my-0">
              <DemoPopup trigger={<GlowingOrbCta label="Launch Instant Demo NOW" />} />
            </div>

            <LeadMagnetCard
              title="Free Website Report"
              description="Analyse how to improve your website to show in AI search and convert more leads."
              formContent={websiteReportForm}
              dialogTitle="Get Your Free Website Report"
              dialogDescription="Enter your website URL to get your free, personalized report."
            />
          </div>
        </div>
      </div>

      {/* Blue line at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#4DA6FF]/30"></div>
    </section>
  )
}
