"use client"

import IndustryPageTemplate from "@/components/industry/industry-page-template"
import { Globe, Target, Bot, LayoutDashboard, LinkIcon, GraduationCap, MessageSquare } from "lucide-react"

export default function GymsNowClientPage() {
  const props = {
    industryName: "Gyms & Fitness Studios",
    industryNameSingular: "Business",
    heroSubtitle: (
      <>
        AI that <span className="text-[#00BFFF]">Boosts Memberships</span> To Maximize Your Impact
      </>
    ),
    heroWarning: "Up to 50% of gym members cancel within the first 6 months!",
    heroDescription: (
      <>
        Stop the churn and fill your classes. Our{" "}
        <span className="text-[#00BFFF] font-semibold">
          AI engages leads, books facility tours, and nurtures members
        </span>{" "}
        to keep them motivated and committed.
      </>
    ),
    heroCtaText: "GET GYMNOW",
    heroCtaLink: "/gymsnow/signup",
    customBuildPoints: [
      {
        icon: Globe,
        title: "Custom Website to Showcase Your Community",
        description:
          "A high-energy website that captures your brand's vibe, showcases your facility, and makes signing up easy.",
      },
      {
        icon: Target,
        title: "Custom AI Smart Funnels for Your Offers",
        description:
          "Targeted funnels for free trials, class packs, personal training consultations, and corporate wellness programs.",
      },
      {
        icon: MessageSquare,
        title: "Custom AI Agent Trained on YOUR Gym",
        description:
          "AI agents that know your class schedules, membership pricing, amenities, and trainer specializations.",
      },
    ],
    aiAgentsBenefits: [
      "Never miss a membership inquiry, even at 5 AM",
      "Answers questions about classes, pricing, and hours instantly",
      "Like having the most energetic and helpful front desk manager 24/7",
      "Save money on sales staff and reduce administrative tasks",
      "Creates a welcoming and responsive experience for every potential member",
    ],
    dominateCtaText: "Dominate NOW with Unbeatable Member Engagement!",
    featureCards: [
      {
        icon: Bot,
        title: "AI Sales Agent",
        description: "An AI agent that converts leads into members by answering questions and booking tours 24/7.",
      },
      {
        icon: Target,
        title: "AI Retention Specialist",
        description: "Automated check-ins, class reminders, and re-engagement campaigns to reduce churn.",
      },
      {
        icon: Globe,
        title: "Custom Website",
        description: "Dynamic website with integrated AI chat, class schedules, and online membership signup.",
      },
      {
        icon: LayoutDashboard,
        title: "Analytics Dashboard",
        description: "Track lead sources, membership conversion rates, and member engagement levels.",
      },
      {
        icon: LinkIcon,
        title: "System Integration",
        description: "Connects with popular gym management software like Mindbody and Zen Planner.",
      },
      {
        icon: GraduationCap,
        title: "Training & Support",
        description: "Full support to ensure you're maximizing memberships and member retention.",
      },
    ],
    problems: [
      "Losing potential members who inquire outside of business hours",
      "High member churn rate due to lack of engagement",
      "Staff are too busy to give personalized attention to every lead",
      "Inconsistent information about membership options",
      "Difficulty promoting personal training and special classes",
      "Manually managing trial passes and follow-ups is inefficient",
    ],
    solutions: [
      "24/7 AI assistant to capture and nurture every single lead",
      "Automated follow-ups and motivational messages to keep members engaged",
      "Personalized outreach to every lead, at scale",
      "Provides instant, accurate answers about all your offerings",
      "AI-powered campaigns to upsell members on additional services",
      "Streamlined trial management and automated conversion sequences",
    ],
    finalCtaTitle: "Ready to Build Your Fitness Community?",
    finalCtaDescription:
      "Join the fittest gyms in the industry using AI to pack their facilities and build lasting relationships.",
  }

  return <IndustryPageTemplate {...props} />
}
