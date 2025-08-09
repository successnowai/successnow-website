"use client"

import IndustryPageTemplate from "@/components/industry/industry-page-template"
import { Globe, Target, Bot, LayoutDashboard, LinkIcon, GraduationCap, MessageSquare } from "lucide-react"

export default function DentistsNowClientPage() {
  const props = {
    industryName: "Dentists",
    industryNameSingular: "Practice",
    heroSubtitle: (
      <>
        AI that <span className="text-[#00BFFF]">Fills Your Chairs</span> To Grow Your Practice
      </>
    ),
    heroWarning: "The average dental practice misses 15-20 new patient calls per month!",
    heroDescription: (
      <>
        Stop letting new patients slip through the cracks. Our{" "}
        <span className="text-[#00BFFF] font-semibold">
          AI books appointments 24/7, confirms schedules, and nurtures every inquiry
        </span>{" "}
        for everything from cleanings to cosmetic procedures.
      </>
    ),
    heroCtaText: "GET DENTISTNOW",
    heroCtaLink: "/dentistsnow/signup",
    customBuildPoints: [
      {
        icon: Globe,
        title: "Custom Website to Reflect Your Practice's Quality",
        description:
          "A modern, professional website that builds trust and showcases your dental services, technology, and patient testimonials.",
      },
      {
        icon: Target,
        title: "Custom AI Smart Funnels for High-Value Services",
        description:
          "Specialized funnels for implants, Invisalign, teeth whitening, and new patient exams to attract your ideal patients.",
      },
      {
        icon: MessageSquare,
        title: "Custom AI Agent Trained on YOUR Dental Practice",
        description:
          "AI agents that can answer questions about procedures, insurance coverage, financing options, and office hours.",
      },
    ],
    aiAgentsBenefits: [
      "Never miss a call from a potential high-value patient",
      "Answers insurance and billing questions instantly",
      "Like having a highly-trained, empathetic front desk coordinator on duty 24/7",
      "Reduce staff burnout and administrative workload",
      "Provides a seamless and modern experience for every new patient",
    ],
    dominateCtaText: "Dominate NOW with a Flawless Patient Journey!",
    featureCards: [
      {
        icon: Bot,
        title: "AI Super Agents",
        description:
          "AI agents trained in dental terminology that book appointments and answer patient questions 24/7.",
      },
      {
        icon: Target,
        title: "Smart Funnels",
        description: "AI-powered funnels to attract and convert patients for your most profitable procedures.",
      },
      {
        icon: Globe,
        title: "Custom Website",
        description: "Professional website with integrated AI chat, online booking, and patient education resources.",
      },
      {
        icon: LayoutDashboard,
        title: "Analytics Dashboard",
        description: "Track new patient sources, appointment booking rates, and marketing campaign effectiveness.",
      },
      {
        icon: LinkIcon,
        title: "Practice Management Integration",
        description: "Connects with systems like Dentrix, Eaglesoft, and Open Dental for seamless scheduling.",
      },
      {
        icon: GraduationCap,
        title: "Training & Support",
        description: "Full onboarding and continuous support to ensure your practice maximizes its growth potential.",
      },
    ],
    problems: [
      "Missing new patient calls during lunch or after hours",
      "High cancellation and no-show rates for appointments",
      "Staff spending too much time on repetitive scheduling calls",
      "Inconsistent information given to patients about procedures",
      "Difficulty getting patient reviews to boost online reputation",
      "Losing patients to corporate dental chains with bigger teams",
    ],
    solutions: [
      "24/7 AI assistant to capture every new patient opportunity",
      "Automated appointment confirmations and smart reminders",
      "Frees up your team to provide exceptional in-person care",
      "Provides consistent, accurate information to every patient",
      "Automatically sends review requests after appointments",
      "Levels the playing field with enterprise-level technology",
    ],
    finalCtaTitle: "Ready to See Your Schedule Smile?",
    finalCtaDescription:
      "Join forward-thinking dental practices using AI to create happier patients and healthier profits.",
  }

  return <IndustryPageTemplate {...props} />
}
