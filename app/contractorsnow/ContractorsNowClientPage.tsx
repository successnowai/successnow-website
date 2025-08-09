"use client"

import IndustryPageTemplate from "@/components/industry/industry-page-template"
import { Globe, Target, Bot, LayoutDashboard, LinkIcon, GraduationCap, MessageSquare } from "lucide-react"

export default function ContractorsNowClientPage() {
  const props = {
    industryName: "General Contractors",
    industryNameSingular: "Business",
    heroSubtitle: (
      <>
        AI that <span className="text-[#00BFFF]">Wins More Bids</span> To Build Your Empire
      </>
    ),
    heroWarning: "65% of contracting leads go to the first responder!",
    heroDescription: (
      <>
        Stop losing jobs to faster competitors. Our{" "}
        <span className="text-[#00BFFF] font-semibold">
          AI qualifies leads 24/7, books estimates, and follows up on every quote
        </span>{" "}
        until you win the bid.
      </>
    ),
    heroCtaText: "GET CONTRACTORNOW",
    heroCtaLink: "/contractorsnow/signup",
    customBuildPoints: [
      {
        icon: Globe,
        title: "Custom Website to Showcase Your Work",
        description:
          "A professional website designed to highlight your portfolio, services, and build trust with potential clients.",
      },
      {
        icon: Target,
        title: "Custom AI Smart Funnels for Your Services",
        description:
          "Targeted funnels for kitchen remodels, bathroom renovations, new construction, and other high-value services.",
      },
      {
        icon: MessageSquare,
        title: "Custom AI Agent Trained on YOUR Business",
        description:
          "AI agents that understand your services, project scope, qualification criteria, and estimating process.",
      },
    ],
    aiAgentsBenefits: [
      "Never miss a lead from your website, ads, or social media",
      "Pre-qualifies leads based on budget, timeline, and project scope",
      "Like having a dedicated project coordinator working around the clock",
      "Save money on administrative staff and lead management software",
      "Ensures every lead gets a professional and immediate response",
    ],
    dominateCtaText: "Dominate NOW with the Best Bidding Process!",
    featureCards: [
      {
        icon: Bot,
        title: "AI Super Agents",
        description: "Custom AI agents trained on your services that qualify leads and book estimates 24/7.",
      },
      {
        icon: Target,
        title: "Smart Funnels",
        description: "AI-powered funnels that nurture leads, follow up on quotes, and drive conversions.",
      },
      {
        icon: Globe,
        title: "Custom Website",
        description: "Professional portfolio website with integrated AI chat, lead capture, and project galleries.",
      },
      {
        icon: LayoutDashboard,
        title: "Analytics Dashboard",
        description: "Real-time insights into lead sources, quote conversion rates, and project pipeline.",
      },
      {
        icon: LinkIcon,
        title: "CRM Integration",
        description: "Seamlessly connects with your existing project management or CRM software.",
      },
      {
        icon: GraduationCap,
        title: "Training & Support",
        description: "Complete onboarding and ongoing support to maximize your lead flow and win more jobs.",
      },
    ],
    problems: [
      "Losing high-value jobs to more responsive competitors",
      "Wasting time on unqualified leads and tire-kickers",
      "Forgetting to follow up on sent proposals and quotes",
      "Inconsistent lead intake process across your team",
      "Struggling to build a strong portfolio and online reviews",
      "Juggling calls and emails while managing active job sites",
    ],
    solutions: [
      "24/7 AI assistant to instantly engage and qualify every lead",
      "Automated lead screening to filter for serious clients",
      "Systematic follow-up sequences for every quote you send",
      "Standardized lead qualification and estimate booking",
      "Automatically requests reviews and testimonials from happy clients",
      "Handles initial client communication so you can focus on building",
    ],
    finalCtaTitle: "Ready to Build a Bigger Business with AI?",
    finalCtaDescription: "Join top contractors who are using AI to streamline their sales and win more projects.",
  }

  return <IndustryPageTemplate {...props} />
}
