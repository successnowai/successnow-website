"use client"

import IndustryPageTemplate from "@/components/industry/industry-page-template"
import { Globe, Target, Bot, LayoutDashboard, LinkIcon, GraduationCap, MessageSquare } from "lucide-react"

export default function RestaurantsNowClientPage() {
  const props = {
    industryName: "Restaurants",
    industryNameSingular: "Restaurant",
    heroSubtitle: (
      <>
        AI that <span className="text-[#00BFFF]">Takes Reservations 24/7</span> To Pack Your House
      </>
    ),
    heroWarning: "No-shows can cost restaurants up to 10% of their daily revenue!",
    heroDescription: (
      <>
        Stop losing revenue to empty tables and missed calls. Our{" "}
        <span className="text-[#00BFFF] font-semibold">
          AI takes reservations, manages waitlists, and promotes specials
        </span>{" "}
        to keep your restaurant buzzing.
      </>
    ),
    heroCtaText: "GET RESTAURANTNOW",
    heroCtaLink: "/restaurantsnow/signup",
    customBuildPoints: [
      {
        icon: Globe,
        title: "Custom Website That Makes Mouths Water",
        description:
          "A beautiful, mobile-friendly website with stunning food photography, online menus, and integrated ordering/reservations.",
      },
      {
        icon: Target,
        title: "Custom AI Smart Funnels for Events & Specials",
        description:
          "Targeted funnels to promote holiday menus, private event bookings, happy hour, and weekly specials.",
      },
      {
        icon: MessageSquare,
        title: "Custom AI Agent Trained on YOUR Restaurant",
        description:
          "AI agents that know your menu, hours, reservation policy, dietary information, and private dining options.",
      },
    ],
    aiAgentsBenefits: [
      "Never miss a reservation request, even when you're closed",
      "Answers common questions about the menu, parking, and wait times",
      "Like having the perfect host or hostess on duty 24/7",
      "Free up your staff to focus on providing amazing service to in-house guests",
      "Provides a seamless and modern booking experience for every diner",
    ],
    dominateCtaText: "Dominate NOW with a 5-Star Guest Experience!",
    featureCards: [
      {
        icon: Bot,
        title: "AI Host",
        description: "A 24/7 AI agent that takes reservations, manages waitlists, and answers guest questions.",
      },
      {
        icon: Target,
        title: "Automated Marketing",
        description: "AI-powered SMS and email campaigns to drive repeat business and promote special events.",
      },
      {
        icon: Globe,
        title: "Custom Website",
        description:
          "Stunning website with AI chat, online reservations, digital menus, and online ordering integration.",
      },
      {
        icon: LayoutDashboard,
        title: "Analytics Dashboard",
        description: "Track reservation sources, guest frequency, and the success of your promotional campaigns.",
      },
      {
        icon: LinkIcon,
        title: "POS Integration",
        description: "Connects with major POS and reservation systems like Toast, Resy, and OpenTable.",
      },
      {
        icon: GraduationCap,
        title: "Training & Support",
        description: "Full support to ensure you're maximizing bookings and increasing your average check size.",
      },
    ],
    problems: [
      "Missing reservation calls during a busy dinner service",
      "High no-show rates for reservations",
      "Staff spending too much time on the phone instead of with guests",
      "Difficulty promoting specials and filling tables on slow nights",
      "Struggling to build a customer database for marketing",
      "Losing large party and private event bookings",
    ],
    solutions: [
      "24/7 AI assistant to handle all reservation inquiries automatically",
      "Automated reservation confirmations and smart reminders to reduce no-shows",
      "Frees up your team to create an unforgettable guest experience",
      "AI-powered marketing to drive traffic during off-peak hours",
      "Automatically captures guest data for powerful marketing campaigns",
      "A dedicated AI to handle and qualify all large party inquiries",
    ],
    finalCtaTitle: "Ready to Be the Hottest Table in Town?",
    finalCtaDescription:
      "Join the most successful restaurants using AI to streamline operations and keep their tables full.",
  }

  return <IndustryPageTemplate {...props} />
}
