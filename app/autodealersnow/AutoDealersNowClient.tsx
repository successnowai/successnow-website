"use client"

import IndustryPageTemplate from "@/components/industry/industry-page-template"
import { Car, Users, Calendar, TrendingUp, Phone, MessageSquare } from "lucide-react"

export default function AutoDealersNowClient() {
  const features = [
    {
      icon: Phone,
      title: "24/7 Lead Response",
      description: "Never miss a potential customer again. Our AI responds to every inquiry instantly, day or night.",
    },
    {
      icon: Calendar,
      title: "Test Drive Booking",
      description: "Automatically schedule test drives and service appointments directly into your calendar system.",
    },
    {
      icon: MessageSquare,
      title: "Follow-Up Automation",
      description: "Nurture leads with personalized follow-ups until they're ready to buy or lease.",
    },
    {
      icon: Users,
      title: "Customer Qualification",
      description: "Pre-qualify customers and gather financing information before they visit your lot.",
    },
    {
      icon: TrendingUp,
      title: "Sales Analytics",
      description: "Track conversion rates, lead sources, and sales performance with detailed reporting.",
    },
    {
      icon: Car,
      title: "Inventory Integration",
      description: "Connect with your inventory system to provide real-time vehicle availability and pricing.",
    },
  ]

  const benefits = [
    "Increase test drive bookings by 300% with instant lead response",
    "Convert more leads into sales with automated follow-up sequences",
    "Reduce staff workload while improving customer experience",
    "Capture leads 24/7, even when your dealership is closed",
    "Pre-qualify customers to focus on serious buyers",
    "Integrate with your existing CRM and inventory systems",
  ]

  return (
    <IndustryPageTemplate
      industryName="Auto Dealers"
      industryNameSingular="Auto Dealership"
      heroTitle="AI That Sells Cars While You Sleep"
      heroSubtitle="Book More Test Drives, Close More Deals"
      heroDescription="Transform your auto dealership with AI that books test drives, confirms appointments, and nurtures every lead until they buy. Never lose another customer to slow response times."
      problemTitle="The Problem: Leads Are Slipping Through the Cracks"
      problemDescription="Auto dealerships lose 70% of potential customers due to slow response times. When someone inquires about a vehicle, they expect immediate answers. If you don't respond within 5 minutes, they're already calling your competitor down the street."
      solutionTitle="The Solution: AI That Never Sleeps"
      solutionDescription="Our AI responds to every lead instantly, books test drives automatically, and follows up persistently until they buy. It works 24/7, speaks multiple languages, and integrates with your existing systems to maximize every opportunity."
      features={features}
      benefitsTitle="Why Auto Dealers Choose SuccessNOW"
      benefits={benefits}
      finalCtaTitle="Ready to Sell More Cars?"
      finalCtaDescription="Join hundreds of auto dealers who've transformed their sales process with AI. Start booking more test drives and closing more deals today."
    />
  )
}
