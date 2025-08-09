"use client"

import IndustryPageTemplate from "@/components/industry/industry-page-template"
import { Globe, Target, Bot, LayoutDashboard, LinkIcon, GraduationCap, MessageSquare } from "lucide-react"

export default function MedspaNowClientPage({ templates }: { templates: any[] }) {
  const props = {
    industryName: "Medspas",
    industryNameSingular: "Medspa",
    heroSubtitle: (
      <>
        AI that <span className="text-[#00BFFF]">Books More High-Value Treatments</span> To Boost Your Revenue
      </>
    ),
    heroWarning: "75% of medspa leads are lost due to slow follow-up!",
    heroDescription: (
      <>
        Stop losing clients to your competitors. Our{" "}
        <span className="text-[#00BFFF] font-semibold">
          AI books consultations, answers treatment questions, and nurtures every lead
        </span>{" "}
        until they are in your treatment room.
      </>
    ),
    heroCtaText: "GET MEDSPANOW",
    heroCtaLink: "/medspanow/signup",
    customBuildPoints: [
      {
        icon: Globe,
        title: "Custom Website That Radiates Luxury & Trust",
        description:
          "An elegant, high-end website that showcases your treatments, results, and expert staff to attract discerning clients.",
      },
      {
        icon: Target,
        title: "Custom AI Smart Funnels for Your Signature Services",
        description:
          "Targeted funnels for Botox, fillers, laser treatments, CoolSculpting, and other profitable procedures.",
      },
      {
        icon: MessageSquare,
        title: "Custom AI Agent Trained on YOUR Medspa",
        description:
          "AI agents that understand your specific treatments, pre- and post-care instructions, pricing, and membership plans.",
      },
    ],
    aiAgentsBenefits: [
      "Never miss an inquiry for a high-ticket treatment package",
      "Answers common questions about procedures, downtime, and results",
      "Like having an expert patient coordinator available 24/7",
      "Save your expert staff's time for providing treatments, not answering phones",
      "Provides a discreet, professional, and immediate response to every inquiry",
    ],
    dominateCtaText: "Dominate NOW with a 5-Star Client Experience!",
    featureCards: [
      {
        icon: Bot,
        title: "AI Patient Coordinator",
        description:
          "A 24/7 AI agent that qualifies leads, answers questions, and books consultations for your services.",
      },
      {
        icon: Target,
        title: "Automated Nurturing",
        description:
          "AI-powered sequences to educate leads and keep your medspa top-of-mind for when they're ready to book.",
      },
      {
        icon: Globe,
        title: "Custom Website",
        description: "Luxury website with integrated AI chat, before/after galleries, and secure consultation booking.",
      },
      {
        icon: LayoutDashboard,
        title: "Analytics Dashboard",
        description: "Track lead sources, consultation booking rates, and ROI for your marketing efforts.",
      },
      {
        icon: LinkIcon,
        title: "EHR/Booking Integration",
        description: "Connects with systems like Boulevard, Meevo 2, and Vagaro for seamless scheduling.",
      },
      {
        icon: GraduationCap,
        title: "Training & Support",
        description:
          "Full onboarding and support to ensure you're booking more treatments and growing your client base.",
      },
    ],
    problems: [
      "Missing inquiries from potential clients after hours",
      "High no-show rate for consultations",
      "Staff spending too much time on basic scheduling questions",
      "Inconsistent follow-up with leads from social media and ads",
      "Struggling to upsell treatment packages and memberships",
      "Losing clients who want instant answers about treatments",
    ],
    solutions: [
      "24/7 AI assistant to engage every lead the moment they show interest",
      "Automated consultation booking with smart confirmations & reminders",
      "Frees up your aestheticians and nurses to focus on clients",
      "A systematic, multi-channel follow-up process for every lead",
      "AI-powered suggestions for packages and upsells during chats",
      "Instant, accurate answers to build confidence and drive bookings",
    ],
    finalCtaTitle: "Ready for a Flawless Booking Process?",
    finalCtaDescription: "Join the most successful medspas using AI to fill their schedules with high-value clients.",
  }

  return <IndustryPageTemplate {...props} />
}
