"use client"

import IndustryPageTemplate from "@/components/industry/industry-page-template"
import { Globe, Target, Bot, LayoutDashboard, LinkIcon, GraduationCap, MessageSquare } from "lucide-react"

export default function LawyersNowClientPage({ templates }: { templates: any[] }) {
  const props = {
    industryName: "Lawyers",
    industryNameSingular: "Law Firm",
    heroSubtitle: (
      <>
        AI that <span className="text-[#00BFFF]">Books More Consultations</span> To Win More Cases
      </>
    ),
    heroWarning: "80% of potential clients hire the first lawyer they speak to!",
    heroDescription: (
      <>
        Stop losing clients to more responsive firms. Our{" "}
        <span className="text-[#00BFFF] font-semibold">
          AI intake specialist qualifies leads, books consultations, and nurtures every potential client
        </span>{" "}
        until they retain your services.
      </>
    ),
    heroCtaText: "GET LAWYERNOW",
    heroCtaLink: "/lawyersnow/signup",
    customBuildPoints: [
      {
        icon: Globe,
        title: "Custom Website That Establishes Authority",
        description:
          "A professional, trustworthy website designed to showcase your firm's expertise, case results, and attorney profiles.",
      },
      {
        icon: Target,
        title: "Custom AI Smart Funnels for Your Practice Areas",
        description:
          "Targeted funnels for personal injury, family law, criminal defense, or any of your key practice areas.",
      },
      {
        icon: MessageSquare,
        title: "Custom AI Agent Trained on YOUR Firm",
        description:
          "AI agents that understand legal terminology, your intake criteria, and how to ethically and empathetically handle sensitive inquiries.",
      },
    ],
    aiAgentsBenefits: [
      "Never miss a potential client, even in the middle of the night",
      "Pre-qualifies cases to save your attorneys valuable time",
      "Like having a highly-trained paralegal handling intake 24/7",
      "Reduce overhead on non-billable administrative tasks",
      "Ensures every potential client is treated with professionalism and urgency",
    ],
    dominateCtaText: "Dominate NOW with an Unbeatable Client Intake!",
    featureCards: [
      {
        icon: Bot,
        title: "AI Intake Specialist",
        description:
          "A 24/7 AI agent that performs initial client intake, gathers case details, and schedules consultations.",
      },
      {
        icon: Target,
        title: "Automated Nurturing",
        description: "AI-powered follow-up sequences to keep your firm top-of-mind for potential clients.",
      },
      {
        icon: Globe,
        title: "Custom Website",
        description: "Authoritative website with integrated AI chat, secure intake forms, and case result showcases.",
      },
      {
        icon: LayoutDashboard,
        title: "Analytics Dashboard",
        description: "Track lead sources, consultation booking rates, and marketing ROI for each practice area.",
      },
      {
        icon: LinkIcon,
        title: "Case Management Integration",
        description: "Connects with Clio, MyCase, PracticePanther, and other legal software.",
      },
      {
        icon: GraduationCap,
        title: "Training & Support",
        description:
          "Full onboarding and support to ensure your firm is ethically and effectively growing its caseload.",
      },
    ],
    problems: [
      "Missing calls from potential clients while in court or meetings",
      "Attorneys wasting billable hours on unqualified consultations",
      "Slow response times leading to lost clients",
      "Inconsistent intake process among staff",
      "Difficulty tracking marketing effectiveness and lead sources",
      "Manually following up with every website inquiry is unsustainable",
    ],
    solutions: [
      "24/7 AI assistant to engage every potential client instantly",
      "Automated screening to ensure attorneys only speak with qualified leads",
      "Immediate, professional engagement with every inquiry",
      "A standardized, efficient intake process for every lead",
      "Clear data on which marketing channels are driving valuable cases",
      "Systematic, automated follow-up for every lead that doesn't book immediately",
    ],
    finalCtaTitle: "Ready to Grow Your Caseload?",
    finalCtaDescription: "Join the most innovative law firms using AI to streamline intake and secure more clients.",
  }

  return <IndustryPageTemplate {...props} />
}
