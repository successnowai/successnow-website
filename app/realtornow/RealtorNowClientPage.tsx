"use client"

import IndustryPageTemplate from "@/components/industry/industry-page-template"
import { Home, MessageSquare, Users, Clock, Phone, CheckCircle, MapPin, Target, TrendingUp } from 'lucide-react'

export default function RealtorNowClientPage() {
  const features = [
    {
      icon: Home,
      title: "Property Inquiries",
      description: "AI handles all property questions and schedules showings automatically."
    },
    {
      icon: MessageSquare,
      title: "Lead Nurturing",
      description: "Automated follow-up sequences that keep prospects engaged until they're ready to buy."
    },
    {
      icon: Users,
      title: "Buyer Qualification",
      description: "AI pre-qualifies buyers and identifies serious prospects ready to purchase."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a lead - AI responds to inquiries instantly at any time."
    },
    {
      icon: MapPin,
      title: "Showing Coordination",
      description: "AI schedules property showings and coordinates with all parties involved."
    },
    {
      icon: CheckCircle,
      title: "CRM Integration",
      description: "Seamlessly integrates with your existing real estate CRM and tools."
    }
  ]

  const benefits = [
    "Increase lead conversion by 350% with instant response times",
    "Book 5x more property showings automatically",
    "Never miss a lead with 24/7 AI availability",
    "Qualify buyers before they waste your time",
    "Improve client satisfaction with consistent communication",
    "Scale your business without hiring assistants",
    "Track every interaction with detailed analytics",
    "Work with multiple clients simultaneously"
  ]

  return (
    <IndustryPageTemplate
      industryName="Realtors"
      industryNameSingular="Real Estate Business"
      heroTitle="The Best AI Agents for Realtors"
      heroSubtitle="AI That Books Showings & Closes Deals"
      heroDescription="Transform your real estate business with AI that captures leads, schedules showings, and nurtures prospects 24/7. Close more deals while you focus on what matters most."
      problemTitle="The Problem Every Realtor Faces"
      problemDescription="Leads calling after hours with no response. Missing opportunities while showing properties. Unqualified prospects wasting your time. Competition responding faster and stealing your clients. Manual follow-ups that fall through the cracks."
      solutionTitle="AI That Works While You Sleep"
      solutionDescription="Our AI agents handle every lead interaction perfectly. From initial inquiry to showing coordination, your AI works 24/7 to book more appointments and close more deals automatically."
      features={features}
      benefitsTitle="Why Realtors Choose Our AI"
      benefits={benefits}
      finalCtaTitle="Ready to Close More Deals?"
      finalCtaDescription="Join top-performing realtors using AI to capture more leads and increase sales. Get started today and see results within 24 hours."
    />
  )
}
