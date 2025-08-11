"use client"

import IndustryPageTemplate from "@/components/industry/industry-page-template"
import { Home, Calendar, Users, TrendingUp, Phone, MessageSquare } from "lucide-react"

interface Template {
  id: string
  name: string
  url: string
  thumbnailUrl?: string
}

interface RealtorNowClientPageProps {
  templates: Template[]
}

export default function RealtorNowClientPage({ templates }: RealtorNowClientPageProps) {
  const features = [
    {
      icon: Phone,
      title: "24/7 Lead Response",
      description: "Never miss a potential buyer or seller again. Our AI responds to every inquiry instantly.",
    },
    {
      icon: Calendar,
      title: "Showing Scheduler",
      description: "Automatically book property showings and open house appointments directly into your calendar.",
    },
    {
      icon: MessageSquare,
      title: "Lead Nurturing",
      description: "Follow up with prospects consistently until they're ready to buy or sell.",
    },
    {
      icon: Users,
      title: "Buyer Qualification",
      description: "Pre-qualify buyers and gather financing information before showings.",
    },
    {
      icon: TrendingUp,
      title: "Market Analytics",
      description: "Track lead sources, conversion rates, and market trends with detailed reporting.",
    },
    {
      icon: Home,
      title: "Listing Integration",
      description: "Connect with MLS and provide real-time property information and availability.",
    },
  ]

  const benefits = [
    "Increase showing bookings by 300% with instant lead response",
    "Convert more leads into clients with automated follow-up sequences",
    "Reduce administrative work while improving client experience",
    "Capture leads 24/7, even outside business hours",
    "Pre-qualify buyers to focus on serious prospects",
    "Integrate with your existing CRM and MLS systems",
  ]

  return (
    <IndustryPageTemplate
      industryName="Real Estate Agents"
      industryNameSingular="Real Estate Business"
      heroTitle="AI That Sells Homes While You Sleep"
      heroSubtitle="Book More Showings, Close More Deals"
      heroDescription="Transform your real estate business with AI that books showings, confirms appointments, and nurtures every lead until they buy or sell. Never lose another client to slow response times."
      problemTitle="The Problem: Leads Are Going to Your Competitors"
      problemDescription="Real estate agents lose 80% of potential clients due to slow response times. When someone inquires about a property, they expect immediate answers. If you don't respond within 5 minutes, they're already working with another agent."
      solutionTitle="The Solution: AI That Never Sleeps"
      solutionDescription="Our AI responds to every lead instantly, books showings automatically, and follows up persistently until they buy or sell. It works 24/7, speaks multiple languages, and integrates with your MLS to maximize every opportunity."
      features={features}
      benefitsTitle="Why Real Estate Agents Choose SuccessNOW"
      benefits={benefits}
      finalCtaTitle="Ready to Sell More Homes?"
      finalCtaDescription="Join hundreds of real estate agents who've transformed their business with AI. Start booking more showings and closing more deals today."
    />
  )
}
