"use client"

import IndustryPageTemplate from "@/components/industry/industry-page-template"
import { Globe, Target, Bot, LayoutDashboard, LinkIcon, GraduationCap } from "lucide-react"

export default function RealtorNowClientPage() {
  return (
    <IndustryPageTemplate
      industryName="Real Estate Agents"
      industryNameSingular="Real Estate Business"
      heroSubtitle={
        <>
          AI that <span className="text-[#00BFFF]">Books More Showings</span>
          <br />
          To Close More Deals
        </>
      }
      heroWarning="98% of buyers start their search online, but 40% of leads never get contacted!"
      heroDescription={
        <>
          Stop losing clients to faster agents. Our{" "}
          <span className="text-[#00BFFF]">AI responds instantly, books showings, and nurtures every lead</span> until
          they buy or sell with you.
        </>
      }
      heroCtaText="GET REALTORNOW"
      heroCtaLink="/realtornow/signup"
      customBuildPoints={[
        {
          icon: Globe,
          title: "Custom Website to Showcase Your Expertise",
          description:
            "A professional website that highlights your market knowledge, recent sales, and client testimonials to build trust.",
        },
        {
          icon: Target,
          title: "Custom AI Smart Funnels for Buyers & Sellers",
          description:
            "Targeted funnels for first-time buyers, luxury properties, investment properties, and seller leads.",
        },
        {
          icon: Bot,
          title: "Custom AI Agent Trained on YOUR Market",
          description:
            "AI agents that know your local market, pricing trends, neighborhoods, and your unique selling approach.",
        },
      ]}
      aiAgentsBenefits={[
        "Never miss a hot lead or showing request",
        "Responds to inquiries within seconds, not hours",
        "Like having the perfect assistant who never sleeps or takes vacation",
        "Save money on lead generation by converting more of what you have",
        "Provides every prospect with immediate, professional service",
      ]}
      dominateCtaText="Dominate NOW with Lightning-Fast Response!"
      featureCards={[
        {
          icon: Bot,
          title: "AI Super Agents",
          description: "AI agents that qualify leads, answer property questions, and book showings 24/7.",
        },
        {
          icon: Target,
          title: "Smart Funnels",
          description: "AI-powered funnels that capture and convert both buyer and seller leads automatically.",
        },
        {
          icon: Globe,
          title: "Custom Website",
          description: "Professional website with integrated AI chat, property search, and lead capture forms.",
        },
        {
          icon: LayoutDashboard,
          title: "Analytics Dashboard",
          description: "Track lead sources, showing conversion rates, and market performance metrics.",
        },
        {
          icon: LinkIcon,
          title: "MLS Integration",
          description: "Connects with your MLS and CRM systems for seamless property information and lead management.",
        },
        {
          icon: GraduationCap,
          title: "Training & Support",
          description: "Complete onboarding and ongoing support to maximize your real estate success.",
        },
      ]}
      problems={[
        "Missing leads while showing properties to other clients",
        "Slow response times losing deals to faster agents",
        "Unqualified leads wasting time on pointless showings",
        "Inconsistent follow-up with prospects not ready to buy immediately",
        "Struggling to manage multiple clients and showings simultaneously",
        "Losing referrals because past clients forget about you",
      ]}
      solutions={[
        "24/7 AI assistant to capture and respond to every lead instantly",
        "Smart showing scheduler that books appointments automatically",
        "Lead qualification system that identifies serious buyers and sellers",
        "Long-term nurturing campaigns for prospects not ready today",
        "Automated follow-up system that keeps you top-of-mind",
        "Review and referral requests sent automatically to past clients",
      ]}
      finalCtaTitle="Ready to Close More Deals?"
      finalCtaDescription="Join top-performing real estate agents using AI to capture more leads and increase sales."
    />
  )
}
