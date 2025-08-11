"use client"

import IndustryPageTemplate from "@/components/industry/industry-page-template"
import { Car, MessageSquare, Users, Clock, Phone, CheckCircle, DollarSign, Target, TrendingUp } from 'lucide-react'

export default function AutoDealersNowClient() {
  const features = [
    {
      icon: Car,
      title: "Lead Qualification",
      description: "AI pre-qualifies car buyers and identifies serious prospects ready to purchase."
    },
    {
      icon: MessageSquare,
      title: "Instant Response",
      description: "Respond to every lead within seconds, even when your team is busy or offline."
    },
    {
      icon: Users,
      title: "Appointment Setting",
      description: "AI schedules test drives and sales appointments automatically."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a lead - AI works around the clock to capture every opportunity."
    },
    {
      icon: Phone,
      title: "Multi-Channel Support",
      description: "Handle leads from website, social media, and phone calls seamlessly."
    },
    {
      icon: DollarSign,
      title: "Sales Follow-up",
      description: "Automated follow-up sequences that nurture leads until they're ready to buy."
    }
  ]

  const benefits = [
    "Increase lead conversion by 400% with instant response times",
    "Book 10x more test drives and sales appointments",
    "Never miss a lead again with 24/7 AI availability",
    "Reduce sales cycle time by qualifying leads automatically",
    "Improve customer satisfaction with consistent communication",
    "Scale your dealership without hiring more sales staff",
    "Track every interaction with detailed analytics",
    "Integrate with your existing CRM and inventory systems"
  ]

  return (
    <IndustryPageTemplate
      industryName="Auto Dealers"
      industryNameSingular="Auto Dealership"
      heroTitle="The Best AI Agents for Auto Dealers"
      heroSubtitle="AI That Converts Every Lead Into Sales"
      heroDescription="Transform your auto dealership with AI that captures, qualifies, and converts leads 24/7. Book more test drives, close more sales, and dominate your market."
      problemTitle="The Problem Every Auto Dealer Faces"
      problemDescription="Leads calling after hours with no response. Sales team overwhelmed and missing opportunities. Unqualified prospects wasting time. Competition responding faster and stealing your customers. Manual follow-ups that never happen consistently."
      solutionTitle="AI That Never Misses a Sale"
      solutionDescription="Our AI agents work 24/7 to capture every lead, qualify prospects instantly, and book appointments automatically. While your competition sleeps, your AI is closing deals and growing your revenue."
      features={features}
      benefitsTitle="Why Auto Dealers Choose Our AI"
      benefits={benefits}
      finalCtaTitle="Ready to Dominate Your Market?"
      finalCtaDescription="Join successful auto dealers using AI to convert more leads and increase sales. Get started today and see results within 24 hours."
    />
  )
}
