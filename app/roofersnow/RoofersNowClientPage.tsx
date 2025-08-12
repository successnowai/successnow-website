"use client"

import IndustryPageTemplate from "@/components/industry/industry-page-template"
import { Globe, Target, Bot, LayoutDashboard, LinkIcon, GraduationCap } from "lucide-react"

export default function RoofersNowClientPage() {
  return (
    <IndustryPageTemplate
      industryName="Roofers"
      industryNameSingular="Roofing Company"
      heroSubtitle={
        <>
          AI that <span className="text-[#00BFFF]">Closes More Jobs</span>
          <br />
          To Put You On Top
        </>
      }
      heroWarning="Homeowners get 3-4 roofing quotes. The first to respond often wins!"
      heroDescription={
        <>
          Stop losing profitable jobs to the competition. Our{" "}
          <span className="text-[#00BFFF]">
            AI qualifies leads 24/7, books inspections, and follows up on every estimate
          </span>{" "}
          until the contract is signed.
        </>
      }
      heroCtaText="GET ROOFERNOW"
      heroCtaLink="/roofersnow/signup"
      customBuildPoints={[
        {
          icon: Globe,
          title: "Custom Website That Builds Homeowner Confidence",
          description:
            "A professional website that showcases your completed projects, certifications, and glowing customer reviews.",
        },
        {
          icon: Target,
          title: "Custom AI Smart Funnels for Your Specialties",
          description:
            "Targeted funnels for storm damage repair, full roof replacements, commercial roofing, and financing options.",
        },
        {
          icon: Bot,
          title: "Custom AI Agent Trained on YOUR Roofing Business",
          description:
            "AI agents that understand different roofing materials, insurance claims, and your inspection and quoting process.",
        },
      ]}
      aiAgentsBenefits={[
        "Never miss a lead after a big storm, even at midnight",
        "Pre-qualifies homeowners to ensure your estimators' time is well spent",
        "Like having a dedicated sales assistant working around the clock",
        "Save money on administrative staff and lead follow-up",
        "Ensures every potential customer gets a professional and immediate response",
      ]}
      dominateCtaText="Dominate NOW with the Best Sales Process in the Business!"
      featureCards={[
        {
          icon: Bot,
          title: "AI Sales Assistant",
          description: "A 24/7 AI agent that qualifies leads, answers questions, and schedules roof inspections.",
        },
        {
          icon: Target,
          title: "Estimate Follow-Up",
          description:
            "AI-powered sequences to automatically follow up on every estimate, dramatically increasing your close rate.",
        },
        {
          icon: Globe,
          title: "Custom Website",
          description: "Professional website with AI chat, project galleries, and lead capture for insurance claims.",
        },
        {
          icon: LayoutDashboard,
          title: "Analytics Dashboard",
          description: "Track lead sources, estimate conversion rates, and sales team performance.",
        },
        {
          icon: LinkIcon,
          title: "CRM Integration",
          description: "Connects with major roofing CRMs like AccuLynx and JobNimbus.",
        },
        {
          icon: GraduationCap,
          title: "Training & Support",
          description: "Full support to help you build a powerful sales pipeline and close more roofing jobs.",
        },
      ]}
      problems={[
        "Losing storm damage leads to faster-responding competitors",
        "Sales team wasting time on unqualified leads and small repairs",
        "Forgetting to follow up on estimates you've already sent",
        "Inconsistent lead intake and qualification process",
        "Struggling to get reviews and referrals from happy customers",
        "Juggling new leads while managing active roofing projects",
      ]}
      solutions={[
        "24/7 AI assistant to instantly engage every homeowner",
        "Automated lead screening to focus on profitable roof replacements",
        "Systematic, persistent follow-up for every single estimate",
        "A standardized process for qualifying leads and booking inspections",
        "Automatically requests reviews and testimonials after job completion",
        "Handles all initial lead communication so you can focus on projects",
      ]}
      finalCtaTitle="Ready to Raise the Roof on Your Sales?"
      finalCtaDescription="Join elite roofing companies using AI to streamline their sales process and dominate their market."
    />
  )
}
