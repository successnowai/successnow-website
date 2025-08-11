"use client"

import IndustryPageTemplate from "@/components/industry/industry-page-template"
import { Globe, Target, Bot, LayoutDashboard, LinkIcon, GraduationCap, MessageSquare } from "lucide-react"

export default function MedspaNowClientPage() {
  return (
    <IndustryPageTemplate
      industryName="Medical Spas & Aesthetic Practices"
      industryNameSingular="Med Spa"
      heroSubtitle={
        <>
          AI that <span className="text-[#00BFFF]">Books Beauty Treatments</span>
          <br />
          To Fill Your Schedule
        </>
      }
      heroWarning="30% of med spa inquiries never book due to slow response times!"
      heroDescription={
        <>
          Stop losing clients to competitors. Our{" "}
          <span className="text-[#00BFFF] font-semibold">
            AI books consultations, schedules treatments, and follows up
          </span>{" "}
          to keep your appointment book full and clients coming back.
        </>
      }
      heroCtaText="GET MEDSPANOW"
      heroCtaLink="/medspanow/signup"
      customBuildPoints={[
        {
          icon: Globe,
          title: "Custom Website to Showcase Your Services",
          description:
            "A luxurious website that highlights your treatments, before/after galleries, and makes booking effortless.",
        },
        {
          icon: Target,
          title: "Custom AI Smart Funnels for Your Treatments",
          description:
            "Targeted funnels for Botox consultations, laser treatments, facial packages, and aesthetic procedures.",
        },
        {
          icon: MessageSquare,
          title: "Custom AI Agent Trained on YOUR Med Spa",
          description:
            "AI agents that know your treatment menu, pricing, practitioner schedules, and aftercare instructions.",
        },
      ]}
      aiAgentsBenefits={[
        "Never miss a consultation request, even at midnight",
        "Answers questions about treatments, pricing, and recovery instantly",
        "Like having the most knowledgeable receptionist working 24/7",
        "Save money on front desk staff and reduce no-shows",
        "Creates a professional and responsive experience for every client",
      ]}
      dominateCtaText="Dominate NOW with Flawless Client Experience!"
      featureCards={[
        {
          icon: Bot,
          title: "AI Booking Agent",
          description: "An AI agent that books consultations and treatments while qualifying client needs 24/7.",
        },
        {
          icon: Target,
          title: "AI Treatment Advisor",
          description: "Recommends appropriate treatments and packages based on client goals and budget.",
        },
        {
          icon: Globe,
          title: "Custom Website",
          description: "Elegant website with integrated AI chat, treatment galleries, and online booking system.",
        },
        {
          icon: LayoutDashboard,
          title: "Analytics Dashboard",
          description: "Track consultation rates, treatment bookings, and client lifetime value.",
        },
        {
          icon: LinkIcon,
          title: "System Integration",
          description: "Connects with popular spa management software like Vagaro and Booker.",
        },
        {
          icon: GraduationCap,
          title: "Training & Support",
          description: "Full support to ensure you're maximizing bookings and client satisfaction.",
        },
      ]}
      problems={[
        "Missing consultation requests during off-hours and weekends",
        "Clients booking with competitors due to faster response times",
        "Staff overwhelmed with booking calls during busy treatment times",
        "Inconsistent information about treatment options and pricing",
        "Difficulty upselling clients on additional services or packages",
        "Manual follow-up for post-treatment care and rebooking",
      ]}
      solutions={[
        "24/7 AI assistant to capture and book every consultation request",
        "Instant response times that beat competitors every time",
        "Automated booking system that works while staff focus on treatments",
        "Consistent, accurate information about all services and pricing",
        "AI-powered recommendations to increase average client value",
        "Automated aftercare follow-ups and rebooking reminders",
      ]}
      finalCtaTitle="Ready to Fill Your Appointment Book?"
      finalCtaDescription="Join the most successful med spas using AI to deliver exceptional client experiences and maximize bookings."
    />
  )
}
