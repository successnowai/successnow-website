"use client"

import IndustryPageTemplate from "@/components/industry/industry-page-template"
import { Globe, Target, Bot, LayoutDashboard, LinkIcon, GraduationCap } from "lucide-react"

export default function PlumbersNowClientPage() {
  return (
    <IndustryPageTemplate
      industryName="Plumbers"
      industryNameSingular="Plumbing Business"
      heroSubtitle={
        <>
          AI that <span className="text-[#00BFFF]">Keeps Your Phones Ringing</span>
          <br />
          To Unclog Your Growth
        </>
      }
      heroWarning="A single missed emergency call can cost you thousands in revenue!"
      heroDescription={
        <>
          Never miss another job, day or night. Our{" "}
          <span className="text-[#00BFFF]">
            24/7 AI dispatcher books jobs, provides estimates, and follows up on quotes
          </span>{" "}
          to keep your technicians busy.
        </>
      }
      heroCtaText="GET PLUMBERNOW"
      heroCtaLink="/plumbersnow/signup"
      customBuildPoints={[
        {
          icon: Globe,
          title: "Custom Website That Builds Immediate Trust",
          description:
            "A clean, professional website that highlights your services, licensing, and customer satisfaction guarantees.",
        },
        {
          icon: Target,
          title: "Custom AI Smart Funnels for Every Service",
          description:
            "Targeted funnels for drain cleaning, water heater installation, leak detection, and emergency services.",
        },
        {
          icon: Bot,
          title: "Custom AI Agent Trained on YOUR Plumbing Business",
          description:
            "AI agents that understand common plumbing issues, your service area, dispatch logic, and pricing.",
        },
      ]}
      aiAgentsBenefits={[
        "Never miss a panicked call about a burst pipe at 3 AM",
        "Gathers all necessary job details before dispatching a tech",
        "Like having the most reliable and efficient dispatcher in the world",
        "Drastically reduce costs from after-hours answering services",
        "Provides every customer with a fast, professional, and reassuring response",
      ]}
      dominateCtaText="Dominate NOW with a Watertight Operation!"
      featureCards={[
        {
          icon: Bot,
          title: "AI Dispatcher",
          description: "A 24/7 AI agent that troubleshoots issues, provides quotes, and schedules service calls.",
        },
        {
          icon: Target,
          title: "Quote Follow-Up",
          description:
            "AI-powered campaigns to automatically follow up on every quote you send, increasing your close rate.",
        },
        {
          icon: Globe,
          title: "Custom Website",
          description: "Professional website with an AI service scheduler, lead capture, and customer testimonials.",
        },
        {
          icon: LayoutDashboard,
          title: "Analytics Dashboard",
          description: "Track job bookings, lead sources, quote conversion rates, and revenue per technician.",
        },
        {
          icon: LinkIcon,
          title: "FSM Integration",
          description:
            "Connects with your Field Service Management software (like ServiceTitan) for seamless dispatch.",
        },
        {
          icon: GraduationCap,
          title: "Training & Support",
          description: "Full support to ensure you're booking more jobs and maximizing profitability from day one.",
        },
      ]}
      problems={[
        "Missing high-revenue emergency calls after hours",
        "Wasting technician time driving to unqualified jobs",
        "Forgetting to follow up on quotes for larger projects",
        "Inconsistent information given to customers over the phone",
        "Struggling to get reviews from satisfied customers",
        "Dispatching and scheduling is a manual, chaotic process",
      ]}
      solutions={[
        "24/7 AI dispatcher to capture and book every single job opportunity",
        "AI-powered lead qualification to ensure every job is legitimate",
        "Automated follow-up sequences to win more bids and projects",
        "Provides consistent, accurate information every time",
        "Automatically requests reviews after a job is completed",
        "Streamlined, automated scheduling that fills gaps in your calendar",
      ]}
      finalCtaTitle="Ready for a Flood of New Business?"
      finalCtaDescription="Join the top plumbing companies using AI to streamline their operations and dominate their service area."
    />
  )
}
