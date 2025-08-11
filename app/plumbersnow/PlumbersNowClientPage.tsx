"use client"

import IndustryPageTemplate from "@/components/industry/industry-page-template"
import { Wrench, Calendar, Phone, TrendingUp, MessageSquare, Clock } from "lucide-react"

export default function PlumbersNowClientPage() {
  const features = [
    {
      icon: Phone,
      title: "24/7 Emergency Dispatch",
      description: "Never miss an emergency call. Our AI handles urgent plumbing requests instantly, day or night.",
    },
    {
      icon: Calendar,
      title: "Service Scheduling",
      description: "Automatically book service appointments and emergency calls directly into your calendar.",
    },
    {
      icon: MessageSquare,
      title: "Quote Follow-Up",
      description: "Follow up on estimates and quotes until customers are ready to book your services.",
    },
    {
      icon: Clock,
      title: "Instant Response",
      description: "Respond to service requests within seconds, not hours, to beat your competition.",
    },
    {
      icon: TrendingUp,
      title: "Job Analytics",
      description: "Track conversion rates, service types, and revenue with detailed reporting.",
    },
    {
      icon: Wrench,
      title: "Service Integration",
      description: "Connect with your existing systems to provide accurate pricing and availability.",
    },
  ]

  const benefits = [
    "Increase service bookings by 400% with instant emergency response",
    "Convert more estimates into jobs with automated follow-up",
    "Reduce missed calls and lost revenue from slow response times",
    "Handle emergency calls 24/7, even when you're on another job",
    "Pre-qualify customers and gather job details before arrival",
    "Integrate with your existing scheduling and invoicing systems",
  ]

  return (
    <IndustryPageTemplate
      industryName="Plumbers"
      industryNameSingular="Plumbing Business"
      heroTitle="AI Dispatcher That Never Sleeps"
      heroSubtitle="Book More Jobs, Handle More Emergencies"
      heroDescription="Transform your plumbing business with a 24/7 AI dispatcher that books jobs, follows up on quotes, and keeps your schedule full. Never miss another emergency call or lose business to competitors."
      problemTitle="The Problem: Missing Calls = Missing Money"
      problemDescription="Plumbing businesses lose thousands in revenue every month from missed calls and slow response times. When someone has a plumbing emergency, they need help NOW. If you don't answer immediately, they're calling the next plumber on Google."
      solutionTitle="The Solution: 24/7 AI Dispatcher"
      solutionDescription="Our AI dispatcher answers every call instantly, books emergency services, and follows up on quotes until they convert. It works around the clock, handles multiple calls simultaneously, and integrates with your scheduling system."
      features={features}
      benefitsTitle="Why Plumbers Choose SuccessNOW"
      benefits={benefits}
      finalCtaTitle="Ready to Grow Your Plumbing Business?"
      finalCtaDescription="Join hundreds of plumbers who've transformed their business with AI. Start booking more jobs and handling more emergencies today."
    />
  )
}
