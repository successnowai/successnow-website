import StarryBackground from "@/components/ui/starry-background"
import { NewTopHeroSection } from "@/components/home/new-top-hero-section"
import { GlassmorphicProblemsSection } from "@/components/home/glassmorphic-problems-section"
import MainHeroSection from "@/components/home/main-hero-section"
import AiAgentAlert from "@/components/home/ai-agent-alert"
import UrgencyAlertSection from "@/components/home/urgency-alert-section"
import LegendaryHeroSection from "@/components/home/legendary-hero-section"
import { BusinessRealitySection } from "@/components/home/business-reality-section"
import IndustrySolutions from "@/components/home/industry-solutions"
import PricingTable from "@/components/home/pricing-table"
import AdsNowSection from "@/components/home/adsnow-section"
import CtaSection from "@/components/home/cta-section"
import PilotFundingPopup from "@/components/ui/pilot-funding-popup"
import LiveDemo from "@/components/home/live-demo"
import { VoiceSearchOptimization } from "@/components/seo/voice-search-optimization"
import { HowToImplementAISchema } from "@/components/seo/structured-data"

export default function HomePage() {
  const voiceSnippets = [
    {
      question: "What are AI Super Agents?",
      answer:
        "AI Super Agents are revolutionary AI voice agents that work 24/7 to qualify leads, book appointments, handle customer service, and close deals automatically for your business. Unlike simple chatbots, these agents think and act independently, learning from every interaction to become more effective over time.",
    },
    {
      question: "How do AI agents help my business?",
      answer:
        "AI agents transform your business by working around the clock to convert visitors, qualify prospects, book appointments, and nurture leads automatically. They handle objections, follow up consistently, and ensure no opportunity is ever missed, typically increasing lead conversion by 40-60% while reducing costs by 90%.",
    },
    {
      question: "What's included in the SuccessNOW AI platform?",
      answer:
        "The complete SuccessNOW AI platform includes unlimited AI voice agents at industry-leading $0.07/minute rates, AI-powered websites, AdsNOW.ai Platinum ($998/mo value), AI SEO by SEOExperts.ai, automated advertising, CRM integration, 24/7 support, and custom AI training - all for just $997 per month with a one-time $988 setup fee through our Pilot Program.",
    },
    {
      question: "How much does SuccessNOW AI cost?",
      answer:
        "Our Pilot Program offers 90% off setup at just $988 (normally $9,988) and 50% off monthly fees for life at $997/month (normally $1,994). This includes everything: AI voice agents, website, AdsNOW.ai Platinum, AI SEO, CRM integration, plus 2 months FREE platform access and expert onboarding sessions.",
    },
    {
      question: "What makes SuccessNOW different from competitors?",
      answer:
        "Unlike basic chatbots or generic AI tools, SuccessNOW AI Super Agents review client history before every interaction, handle complex objections, update CRM records automatically, and get smarter with each conversation. We offer industry-specific solutions for 15+ verticals with proven ROI and comprehensive support.",
    },
    {
      question: "How do I get started with AI voice agents?",
      answer:
        "Start by experiencing our live AI demo at successnow.ai/demo where you can talk directly with our AI. Then book a strategy call to discuss your specific business needs. Our AI Onboarding Agent handles the setup process, and most businesses are deployed within 1-2 weeks with full expert support.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StarryBackground />
      <PilotFundingPopup />

      <VoiceSearchOptimization
        pageType="home"
        primaryKeywords={[
          "AI voice agents",
          "business automation",
          "AI Super Agents",
          "automated lead generation",
          "AI appointment booking",
          "24/7 AI agents",
          "business growth AI",
          "AI customer service",
        ]}
        voiceSnippets={voiceSnippets}
      />
      <HowToImplementAISchema />

      <NewTopHeroSection />

      <GlassmorphicProblemsSection />
      <div className="pt-24">
        <MainHeroSection />
      </div>
      <AiAgentAlert />
      <UrgencyAlertSection />
      <LegendaryHeroSection />
      <BusinessRealitySection />

      <LiveDemo />

      <IndustrySolutions />
      <PricingTable />
      <AdsNowSection />
      <CtaSection />
    </div>
  )
}
