"use client"

import { IndustryPageTemplate } from "@/components/industry/industry-page-template"
import { Globe, Target, MessageSquare, Bot, BarChart3, Link, GraduationCap } from "lucide-react"

export default function LawyersNowClientPage() {
  const lawyersData = {
    industryName: "Lawyers",
    industryNameSingular: "Law Firm",
    heroSubtitle: "Never Lose Another Client to Slow Response Times",
    heroWarning: "Law firms lose 67% of potential clients due to slow response times",
    heroDescription:
      "AI Legal Assistants that handle client intake, case evaluation, and consultation scheduling 24/7 - while you focus on winning cases.",
    heroCtaText: "Get Your AI Legal Assistant",
    heroCtaLink: "https://signup.successnow.ai",

    customBuildPoints: [
      {
        icon: Globe,
        title: "Legal Practice Integration",
        description: "Seamlessly integrates with your existing legal practice management software",
      },
      {
        icon: Target,
        title: "Practice Area Specialization",
        description: "Customized for your specific legal practice areas and client types",
      },
      {
        icon: MessageSquare,
        title: "Attorney-Client Privilege Compliance",
        description: "Built with legal confidentiality and compliance requirements in mind",
      },
    ],

    aiAgentsBenefits: [
      "24/7 client intake and initial consultation scheduling",
      "Instant case evaluation and qualification screening",
      "Automated follow-up sequences for potential clients",
      "Pre-qualified leads delivered directly to your calendar",
      "Reduced overhead costs while increasing client acquisition",
    ],

    dominateCtaText: "Dominate Your Legal Market",

    featureCards: [
      {
        icon: Bot,
        title: "Legal AI Assistant",
        description: "Handles initial client consultations and case intake forms",
      },
      {
        icon: Target,
        title: "Case Qualification",
        description: "Screens potential clients based on your practice criteria",
      },
      {
        icon: Globe,
        title: "Multi-Channel Intake",
        description: "Captures leads from website, phone, and social media",
      },
      {
        icon: BarChart3,
        title: "Legal Analytics",
        description: "Track case conversion rates and client acquisition metrics",
      },
      {
        icon: Link,
        title: "Legal Software Integration",
        description: "Connects with Clio, MyCase, PracticePanther, and more",
      },
      {
        icon: GraduationCap,
        title: "Continuing Education",
        description: "Stay updated on legal AI best practices and compliance",
      },
    ],

    problems: [
      "Missing calls from potential clients after hours",
      "Unqualified leads wasting your valuable time",
      "Slow response times losing cases to competitors",
      "High cost of legal assistants and intake staff",
      "Inconsistent client screening and qualification",
      "Manual follow-up processes that get forgotten",
    ],

    solutions: [
      "24/7 AI-powered client intake and response system",
      "Advanced screening to deliver only qualified prospects",
      "Instant response times that beat your competition",
      "Eliminate the cost of additional intake staff",
      "Consistent, professional client qualification process",
      "Automated follow-up sequences that never miss",
    ],

    finalCtaTitle: "Ready to Transform Your Legal Practice?",
    finalCtaDescription: "Join hundreds of law firms already using AI to capture more clients and grow their practice.",
  }

  return <IndustryPageTemplate {...lawyersData} />
}
