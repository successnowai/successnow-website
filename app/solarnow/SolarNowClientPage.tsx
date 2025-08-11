"use client"

import IndustryPageTemplate from "@/components/industry/industry-page-template"
import { Globe, Target, Bot, LayoutDashboard, LinkIcon, GraduationCap } from "lucide-react"

export default function SolarNowClientPage() {
  return (
    <IndustryPageTemplate
      industryName="Solar Companies"
      industryNameSingular="Solar Business"
      heroSubtitle={
        <>
          AI that <span className="text-[#00BFFF]">Books More Consultations</span>
          <br />
          To Power Your Growth
        </>
      }
      heroWarning="The solar sales cycle is long; 60% of leads are lost from poor follow-up!"
      heroDescription={
        <>
          Stop letting qualified leads fizzle out. Our{" "}
          <span className="text-[#00BFFF]">AI qualifies homeowners, books consultations, and nurtures prospects</span>{" "}
          through the entire decision-making process.
        </>
      }
      heroCtaText="GET SOLARNOW"
      heroCtaLink="/solarnow/signup"
      customBuildPoints={[
        {
          icon: Globe,
          title: "Custom Website That Inspires Confidence",
          description:
            "A professional, educational website that explains the benefits of solar, showcases your installations, and builds trust.",
        },
        {
          icon: Target,
          title: "Custom AI Smart Funnels for Homeowners",
          description:
            "Targeted funnels that educate leads on savings, tax credits, and financing options to move them toward a consultation.",
        },
        {
          icon: Bot,
          title: "Custom AI Agent Trained on YOUR Solar Offerings",
          description:
            "AI agents that understand panel types, inverter technology, battery storage, and your specific financing and PPA options.",
        },
      ]}
      aiAgentsBenefits={[
        "Never miss an inquiry from a homeowner interested in going solar",
        "Pre-qualifies leads based on home ownership, roof type, and utility bills",
        "Like having a team of knowledgeable solar consultants working 24/7",
        "Save your sales team's time for closing deals, not chasing cold leads",
        "Provides every prospect with a patient, informative, and no-pressure experience",
      ]}
      dominateCtaText="Dominate NOW with a High-Powered Sales Engine!"
      featureCards={[
        {
          icon: Bot,
          title: "AI Solar Consultant",
          description:
            "A 24/7 AI agent that educates homeowners, qualifies them, and schedules consultations with your sales team.",
        },
        {
          icon: Target,
          title: "Long-Term Nurturing",
          description: "AI-powered educational campaigns to nurture leads over months, building trust and authority.",
        },
        {
          icon: Globe,
          title: "Custom Website",
          description: "Professional website with AI chat, savings calculators, and educational resources.",
        },
        {
          icon: LayoutDashboard,
          title: "Analytics Dashboard",
          description: "Track lead sources, consultation set rates, and the effectiveness of your nurturing campaigns.",
        },
        {
          icon: LinkIcon,
          title: "CRM Integration",
          description: "Connects with popular solar CRMs to seamlessly pass qualified appointments to your sales reps.",
        },
        {
          icon: GraduationCap,
          title: "Training & Support",
          description: "Full support to help you build a predictable pipeline of qualified solar consultations.",
        },
      ]}
      problems={[
        "Losing leads who are just starting their research",
        "Sales reps wasting hours on unqualified homeowners",
        "Leads going cold during the long sales cycle",
        "Inconsistent messaging and follow-up across your team",
        "Struggling to educate prospects at scale",
        "High cost-per-lead from paid advertising",
      ]}
      solutions={[
        "24/7 AI assistant to engage and educate leads at their own pace",
        "Automated qualification to ensure reps only talk to serious prospects",
        "Systematic, long-term nurturing to stay top-of-mind",
        "A consistent, branded message delivered to every single lead",
        "AI-powered educational sequences sent via SMS and email",
        "Maximize the ROI of every lead by nurturing them until they are ready",
      ]}
      finalCtaTitle="Ready to Light Up Your Sales Board?"
      finalCtaDescription="Join the brightest solar companies using AI to generate more qualified appointments and install more systems."
    />
  )
}
