"use client"

import IndustryPageTemplate from "@/components/industry/industry-page-template"
import { Globe, Target, Bot, LayoutDashboard, LinkIcon, GraduationCap, MessageSquare } from "lucide-react"

export default function HVACNowClientPage() {
  const props = {
    industryName: "HVAC",
    industryNameSingular: "Business",
    heroSubtitle: (
      <>
        AI that <span className="text-[#00BFFF]">Books Service Calls 24/7</span> To Keep You Cool
      </>
    ),
    heroWarning: "70% of homeowners hire the first HVAC company that gives them a quote!",
    heroDescription: (
      <>
        Stop losing out on emergency repairs and installations. Our{" "}
        <span className="text-[#00BFFF] font-semibold">
          AI dispatcher books jobs, provides instant quotes, and follows up
        </span>{" "}
        to keep your schedule packed.
      </>
    ),
    heroCtaText: "GET HVACNOW",
    heroCtaLink: "/hvacnow/signup",
    customBuildPoints: [
      {
        icon: Globe,
        title: "Custom Website That Builds Homeowner Trust",
        description:
          "A professional, reliable website that showcases your expertise, certifications, and customer reviews.",
      },
      {
        icon: Target,
        title: "Custom AI Smart Funnels for Your Services",
        description:
          "Targeted funnels for emergency repairs, new system installations, maintenance plans, and seasonal tune-ups.",
      },
      {
        icon: MessageSquare,
        title: "Custom AI Agent Trained on YOUR HVAC Business",
        description:
          "AI agents that understand different system types, common issues, service areas, and pricing structures.",
      },
    ],
    aiAgentsBenefits: [
      "Never miss an emergency service call, day or night",
      "Provides instant ballpark quotes to qualify leads",
      "Like having the world's most efficient dispatcher on duty 24/7/365",
      "Save money on after-hours call centers and administrative staff",
      "Ensures every customer receives a prompt and professional response",
    ],
    dominateCtaText: "Dominate NOW with the Coolest Service in Town!",
    featureCards: [
      {
        icon: Bot,
        title: "AI Dispatcher",
        description: "A 24/7 AI agent that diagnoses issues, provides quotes, and schedules service calls.",
      },
      {
        icon: Target,
        title: "Maintenance Plan Sales",
        description: "AI-powered campaigns to automatically sell profitable service agreements to existing customers.",
      },
      {
        icon: Globe,
        title: "Custom Website",
        description: "Professional website with an AI service scheduler, lead capture, and customer testimonials.",
      },
      {
        icon: LayoutDashboard,
        title: "Analytics Dashboard",
        description: "Track job bookings, lead sources, quote conversion rates, and technician performance.",
      },
      {
        icon: LinkIcon,
        title: "FSM Integration",
        description: "Connects with your Field Service Management software for seamless job dispatching.",
      },
      {
        icon: GraduationCap,
        title: "Training & Support",
        description: "Full support to ensure you're booking more jobs and increasing revenue from day one.",
      },
    ],
    problems: [
      "Missing emergency calls from homeowners with broken AC/furnaces",
      "Technicians wasting time on unqualified appointments",
      "Forgetting to follow up on installation quotes",
      "Inconsistent customer service experience",
      "Struggling to sell profitable maintenance agreements",
      "Manually scheduling and dispatching jobs is inefficient",
    ],
    solutions: [
      "24/7 AI dispatcher to capture and schedule every service request",
      "AI-powered lead qualification to screen for serious customers",
      "Automated follow-up sequences to close more installation deals",
      "Provides a consistent, professional interaction every time",
      "Automatically offers and sells maintenance plans after service calls",
      "Streamlined, automated scheduling that integrates with your workflow",
    ],
    finalCtaTitle: "Ready to Heat Up Your Sales?",
    finalCtaDescription: "Join elite HVAC companies using AI to dominate their local market and grow their business.",
  }

  return <IndustryPageTemplate {...props} />
}
