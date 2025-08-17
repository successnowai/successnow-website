import type { Metadata } from "next"
import FeaturesClientPage from "./FeaturesClientPage"

export const metadata: Metadata = {
  title: "Features - Complete AI Sales & Marketing Suite | SuccessNOW.ai",
  description:
    "Discover SuccessNOW.ai's complete AI platform: 24/7 Voice AI agents, automated advertising, AI-driven SEO, and full-funnel automation. Never miss a lead with our AI Super Agents.",
  keywords:
    "AI sales agents, voice AI, automated advertising, AI SEO, lead generation, CRM automation, omni-channel outreach, AI marketing suite",
  openGraph: {
    title: "Features - Complete AI Sales & Marketing Suite",
    description:
      "All-in-one AI platform that captures, qualifies, and closes leads 24/7. Voice AI agents, automated ads, SEO, and CRM integration in one dashboard.",
    type: "website",
  },
}

export default function FeaturesPage() {
  return <FeaturesClientPage />
}
