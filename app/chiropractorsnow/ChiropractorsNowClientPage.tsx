"use client"

import IndustryPageTemplate from "@/components/industry/industry-page-template"
import { Globe, Target, Bot, LayoutDashboard, LinkIcon, GraduationCap, MessageSquare } from "lucide-react"

export default function ChiropractorsNowClientPage() {
  const props = {
    industryName: "Chiropractors",
    industryNameSingular: "Practice",
    heroSubtitle: (
      <>
        AI that <span className="text-[#00BFFF]">Books More Appointments</span> To Heal Your Community
      </>
    ),
    heroWarning: "85% of potential patients choose the first practice that responds!",
    heroDescription: (
      <>
        Stop losing patients to the competition. Our{" "}
        <span className="text-[#00BFFF] font-semibold">
          AI books new patient appointments, confirms schedules, and nurtures every inquiry
        </span>{" "}
        until they are on your table.
      </>
    ),
    heroCtaText: "GET CHIROPRACTORNOW",
    heroCtaLink: "/chiropractorsnow/signup",
    customBuildPoints: [
      {
        icon: Globe,
        title: "Custom Website to Your Brand & Vision",
        description:
          "A professional website built to reflect your practice's unique approach to wellness and patient care.",
      },
      {
        icon: Target,
        title: "Custom AI Smart Funnels for Your Services",
        description:
          "Targeted funnels for new patient specials, specific treatments like adjustments or spinal decompression, and wellness workshops.",
      },
      {
        icon: MessageSquare,
        title: "Custom AI Agent Trained on YOUR Practice",
        description:
          "AI agents that understand your services, insurance questions, scheduling protocols, and patient care philosophy.",
      },
    ],
    aiAgentsBenefits: [
      "Never miss a new patient call or inquiry",
      "Answers common questions about services, hours, and insurance",
      "Like having the perfect front desk staff that never sleeps",
      "Save money on staff and reduce administrative overhead",
      "Ensures every potential patient feels heard and valued",
    ],
    dominateCtaText: "Dominate NOW with the Best Patient Experience!",
    featureCards: [
      {
        icon: Bot,
        title: "AI Super Agents",
        description:
          "Custom AI agents trained on your practice that never sleep, never miss a call, and always follow up.",
      },
      {
        icon: Target,
        title: "Smart Funnels",
        description: "AI-powered funnels that automatically qualify patients, book appointments, and send reminders.",
      },
      {
        icon: Globe,
        title: "Custom Website",
        description: "Professional website branded to your practice with integrated AI chat and appointment booking.",
      },
      {
        icon: LayoutDashboard,
        title: "Analytics Dashboard",
        description: "Real-time insights into appointment volume, patient acquisition cost, and marketing ROI.",
      },
      {
        icon: LinkIcon,
        title: "EHR Integration",
        description:
          "Seamlessly connects with your existing EHR and practice management software for streamlined workflows.",
      },
      {
        icon: GraduationCap,
        title: "Training & Support",
        description: "Complete onboarding, training, and ongoing support to ensure your practice's success.",
      },
    ],
    problems: [
      "Missing calls from potential new patients after hours",
      "High no-show rates for initial consultations",
      "Front desk staff overwhelmed with calls and scheduling",
      "Inconsistent answers to insurance and pricing questions",
      "Struggling to get positive reviews from happy patients",
      "Manually following up with online inquiries is time-consuming",
    ],
    solutions: [
      "24/7 AI assistant to capture and engage every potential patient",
      "Automated appointment booking with smart confirmations & reminders",
      "Frees up your staff to focus on in-office patient care",
      "Provides instant, accurate answers to common questions",
      "Integrates with your patient management system",
      "Automatically requests reviews to build your online reputation",
    ],
    finalCtaTitle: "Ready to Grow Your Practice with AI?",
    finalCtaDescription: "Join successful chiropractors already using AI to fill their schedules.",
  }

  return <IndustryPageTemplate {...props} />
}
