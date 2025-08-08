"use client"

import AdsNowHeroSection from "@/components/home/adsnow-hero-section"
import AdsSuccessEcosystem from "@/components/ui/ads-success-ecosystem"
import CtaSection from "@/components/home/cta-section"

export default function AdsNowClientInner() {
  return (
    <main className="flex flex-col gap-0">
      {/* 1 – AdsNow specific hero */}
      <AdsNowHeroSection />

      {/* 2 – Visual overview of the ecosystem with glassmorphic cards */}
      <AdsSuccessEcosystem />

      {/* 3 – Site-wide CTA */}
      <CtaSection />
    </main>
  )
}
