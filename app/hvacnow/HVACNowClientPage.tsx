"use client"

import IndustryPageTemplate from "@/components/industry/industry-page-template"
import { Thermometer, Calendar, Phone, TrendingUp, MessageSquare, Settings } from "lucide-react"

export default function HVACNowClientPage() {
  const features = [
    {
      icon: Phone,
      title: "24/7 Service Calls",
      description: "Handle emergency HVAC calls instantly, even during peak seasons when you're swamped.",
    },
    {
      icon: Calendar,
      title: "Installation Scheduling",
      description: "Book maintenance, repairs, and installations directly into your calendar system.",
    },
    {
      icon: MessageSquare,
      title: "Quote Automation",
      description: "Generate and follow up on quotes for new systems and major repairs automatically.",
    },
    {
      icon: Thermometer,
      title: "Seasonal Campaigns",
      description: "Automatically reach out for seasonal maintenance and system tune-ups.",
    },
    {
      icon: TrendingUp,
      title: "Revenue Tracking",
      description: "Monitor job conversion rates, seasonal trends, and revenue growth.",
    },
    {
      icon: Settings,
      title: "System Integration",
      description: "Connect with your existing CRM and scheduling tools for seamless operations.",
    },
  ]

  const benefits = [
    "Increase service bookings by 350% with instant call response",
    "Convert more quotes into installations with automated follow-up",
    "Handle peak season demand without hiring additional staff",
    "Capture emergency calls 24/7, especially during extreme weather",
    "Automate seasonal maintenance reminders and bookings",
    "Integrate with your existing business management systems",
  ]

  return (
    <IndustryPageTemplate
      industryName="HVAC Companies"
      industryNameSingular="HVAC Business"
      heroTitle="AI That Keeps Your Business Cool"
      heroSubtitle="Book More Service Calls, Sell More Systems"
      heroDescription="Transform your HVAC business with AI that books service calls 24/7, automates quotes, and sells maintenance plans. Never miss another emergency call during peak season."
      problemTitle="The Problem: Peak Season Chaos"
      problemDescription="HVAC companies lose massive revenue during peak seasons because they can't handle the call volume. When it's 100°F outside and someone's AC breaks, they need help immediately. Miss that call, and they're hiring your competitor."
      solutionTitle="The Solution: AI That Scales With Demand"
      solutionDescription="Our AI handles unlimited calls simultaneously, books emergency services instantly, and follows up on quotes year-round. It scales with seasonal demand and works 24/7 to maximize your revenue potential."
      features={features}
      benefitsTitle="Why HVAC Companies Choose SuccessNOW"
      benefits={benefits}
      finalCtaTitle="Ready to Dominate Your Market?"
      finalCtaDescription="Join hundreds of HVAC companies who've transformed their business with AI. Start booking more calls and selling more systems today."
    />
  )
}
