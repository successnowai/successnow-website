"use client"

import IndustryPageTemplate from "@/components/industry/industry-page-template"
import { Globe, Target, Bot, LayoutDashboard, LinkIcon, GraduationCap, MessageSquare } from "lucide-react"

export default function RealtorNowClientPage({ templates }: { templates: any[] }) {
  const props = {
    industryName: "Real Estate Agents",
    industryNameSingular: "Real Estate Business",
    heroSubtitle: (
      <>
        AI that <span className="text-[#00BFFF]">Nurtures Every Lead</span> To Close More Deals
      </>
    ),
    heroWarning: "Leads that are not contacted in 5 minutes are 100x less likely to convert!",
    heroDescription: (
      <>
        Stop letting hot leads go cold. Our{" "}
        <span className="text-[#00BFFF] font-semibold">
          AI engages leads 24/7, books showings, and nurtures your entire database
        </span>{" "}
        so you can focus on what you do best: closing.
      </>
    ),
    heroCtaText: "GET REALTORNOW",
    heroCtaLink: "/realtornow/signup",
    customBuildPoints: [
      {
        icon: Globe,
        title: "Custom Website to Build Your Personal Brand",
        description:
          "A stunning, IDX-integrated website that establishes you as the go-to real estate expert in your market.",
      },
      {
        icon: Target,
        title: "Custom AI Smart Funnels for Buyers & Sellers",
        description:
          "Specialized funnels for first-time homebuyers, luxury listings, seller valuations, and investment properties.",
      },
      {
        icon: MessageSquare,
        title: "Custom AI Agent Trained on YOUR Market",
        description:
          "AI agents that know your listings, local market trends, school districts, and the home buying/selling process.",
      },
    ],
    aiAgentsBenefits: [
      "Never miss a lead from Zillow, Realtor.com, or your website",
      "Answers common questions about properties and neighborhoods instantly",
      "Like having a team of ISAs working for you around the clock",
      "Save countless hours on manual lead follow-up",
      "Ensures every single lead in your CRM receives consistent, valuable communication",
    ],
    dominateCtaText: "Dominate NOW with an Unfair Advantage!",
    featureCards: [
      {
        icon: Bot,
        title: "AI ISA (Inside Sales Agent)",
        description: "A 24/7 AI agent that qualifies buyers and sellers, answers questions, and books appointments.",
      },
      {
        icon: Target,
        title: "Long-Term Nurturing",
        description:
          "AI-powered campaigns to nurture leads for months or even years, until they are ready to transact.",
      },
      {
        icon: Globe,
        title: "IDX-Integrated Website",
        description: "Professional website with live MLS listings, integrated AI chat, and lead capture forms.",
      },
      {
        icon: LayoutDashboard,
        title: "Analytics Dashboard",
        description: "Track lead sources, engagement rates, and see which leads are most active in your pipeline.",
      },
      {
        icon: LinkIcon,
        title: "CRM Integration",
        description: "Connects with Follow Up Boss, LionDesk, and all major real estate CRMs.",
      },
      {
        icon: GraduationCap,
        title: "Training & Support",
        description: "Full support to help you build a powerful lead conversion machine and close more deals.",
      },
    ],
    problems: [
      "Losing leads to agents who can respond faster",
      "Leads falling through the cracks in your CRM",
      "Spending hours each day on manual follow-up",
      "Inconsistent communication with your database",
      "Struggling to convert old leads into new business",
      "Juggling new leads while servicing active clients",
    ],
    solutions: [
      "24/7 AI assistant to instantly engage every new lead",
      "Automated, personalized nurturing for every contact you own",
      "Frees you up to focus on appointments and negotiations",
      "Provides consistent, valuable communication to your entire sphere",
      "AI-powered campaigns to revive and convert aged leads",
      "A systematic process to manage lead flow while you're in the field",
    ],
    finalCtaTitle: "Ready to Become a Top Producer?",
    finalCtaDescription:
      "Join the top 1% of agents who are using AI to build massive leverage and dominate their market.",
  }

  return <IndustryPageTemplate {...props} />
}
