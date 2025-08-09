"use client"

import IndustryPageTemplate from "@/components/industry/industry-page-template"
import { Globe, Target, Bot, LayoutDashboard, LinkIcon, GraduationCap, MessageSquare } from "lucide-react"

export default function MortgageNowClientPage({ templates }: { templates: any[] }) {
  const props = {
    industryName: "Mortgage Brokers",
    industryNameSingular: "Mortgage Business",
    heroSubtitle: (
      <>
        AI that <span className="text-[#00BFFF]">Close More Loans Easily</span> To Skyrocket Your Results
      </>
    ),
    heroWarning: "70% of mortgage leads abandon applications due to slow response times!",
    heroDescription: (
      <>
        Stop losing borrowers to competitors with faster pre-approvals. Our{" "}
        <span className="text-[#00BFFF] font-semibold">
          AI pre-qualifies clients, tracks applications, and nurtures relationships
        </span>{" "}
        throughout the entire loan process.
      </>
    ),
    heroCtaText: "GET MORTGAGEBROKERNOW",
    heroCtaLink: "/mortgagenow/signup",
    customBuildPoints: [
      {
        icon: Globe,
        title: "Custom Website to Your Brand & Vision",
        description:
          "Every website is built from scratch to match your brokerage's unique brand, expertise, and market focus. No templates, no cookie-cutter designs.",
      },
      {
        icon: Target,
        title: "Custom AI Smart Funnels to Your Offers",
        description:
          "Tailored qualification funnels designed specifically for your loan programs, rate offerings, and borrower criteria.",
      },
      {
        icon: MessageSquare,
        title: "Custom AI Agent Trained on YOUR Business",
        description:
          "AI agents that know your lender networks, loan products, qualification guidelines, and processing procedures inside and out.",
      },
    ],
    aiAgentsBenefits: [
      "Never miss a pre-qualification request or rate inquiry",
      "Makes detailed notes of income, assets, and loan preferences",
      "Like having the best loan officer using all the best AI tools",
      "Save countless money on staff that make excuses, call in sick, aren't motivated",
      "No more borrowers who feel abandoned during the process",
    ],
    dominateCtaText: "Dominate NOW with the Best Mortgage Experience in the Galaxy!",
    featureCards: [
      {
        icon: Bot,
        title: "AI Super Agents",
        description:
          "Custom AI agents trained on loan products, rates, and qualification criteria that work around the clock.",
      },
      {
        icon: Target,
        title: "Smart Funnels",
        description:
          "AI-powered pre-qualification funnels that automatically assess borrowers and match them with optimal loan products.",
      },
      {
        icon: Globe,
        title: "Custom Website",
        description: "Professional mortgage website with integrated AI chat, rate calculators, and application forms.",
      },
      {
        icon: LayoutDashboard,
        title: "Analytics Dashboard",
        description: "Real-time insights into application pipelines, conversion rates, and market trends.",
      },
      {
        icon: LinkIcon,
        title: "Lender Integration",
        description: "Seamlessly connects with multiple lender platforms and pricing engines for real-time rates.",
      },
      {
        icon: GraduationCap,
        title: "Training & Support",
        description: "Complete onboarding and ongoing support to maximize your loan origination success.",
      },
    ],
    problems: [
      "Losing leads to online lenders with instant responses",
      "Loan officers spending too much time on unqualified borrowers",
      "Inconsistent follow-up with potential applicants",
      "Borrowers dropping off during the application process",
      "Struggling to get referrals and positive reviews",
      "Manually managing a pipeline of leads is overwhelming",
    ],
    solutions: [
      "24/7 AI assistant to engage and pre-qualify every lead instantly",
      "Automated screening so loan officers focus on closable loans",
      "Systematic, long-term nurturing for every lead in your pipeline",
      "Automated check-ins and reminders to keep applications moving",
      "Automatically requests reviews and referral reminders post-closing",
      "A streamlined, automated pipeline management system",
    ],
    finalCtaTitle: "Ready to Close More Loans with AI?",
    finalCtaDescription: "Join top mortgage brokers using AI to build bigger pipelines and fund more loans.",
  }

  return <IndustryPageTemplate {...props} />
}
