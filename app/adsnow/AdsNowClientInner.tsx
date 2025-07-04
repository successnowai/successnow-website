"use client"

import HeroSection from "@/components/home/hero-section"
import AdsSuccessEcosystem from "@/components/ui/ads-success-ecosystem"
import CtaSection from "@/components/home/cta-section"

export default function AdsNowClientInner() {
  return (
    <main className="flex flex-col gap-24">
      {/* 1 – Above-the-fold hero */}
      <HeroSection
        title="AI AdsNOW Super Agent"
        subtitle="Create, edit and launch ads instantly by simply texting your AI agent."
        ctaLabel="Book a Demo"
        ctaHref="/signup"
      />

      {/* 2 – Visual overview of the ecosystem */}
      <AdsSuccessEcosystem />

      {/* 3 – Site-wide CTA */}
      <CtaSection />
    </main>
  )
}
