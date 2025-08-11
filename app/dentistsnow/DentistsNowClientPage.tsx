"use client"

import IndustryPageTemplate from "@/components/industry/industry-page-template"
import { Calendar, MessageSquare, Users, Clock, Phone, CheckCircle, Zap, Target, TrendingUp } from 'lucide-react'

export default function DentistsNowClientPage() {
  const features = [
    {
      icon: Calendar,
      title: "Smart Appointment Booking",
      description: "AI handles scheduling, rescheduling, and confirmations 24/7 without human intervention."
    },
    {
      icon: MessageSquare,
      title: "Patient Communication",
      description: "Automated follow-ups, reminders, and patient care messages that feel personal."
    },
    {
      icon: Users,
      title: "Lead Qualification",
      description: "AI pre-qualifies potential patients and identifies high-value opportunities."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a patient inquiry - AI responds instantly at any time of day."
    },
    {
      icon: Phone,
      title: "Voice & Text Support",
      description: "Handle both phone calls and text messages with natural conversation flow."
    },
    {
      icon: CheckCircle,
      title: "Appointment Confirmations",
      description: "Automatic confirmation calls and texts to reduce no-shows significantly."
    }
  ]

  const benefits = [
    "Increase appointment bookings by 300% with 24/7 AI availability",
    "Reduce no-shows by 80% with automated confirmation systems",
    "Save 20+ hours per week on administrative tasks",
    "Convert more leads with instant response times",
    "Improve patient satisfaction with consistent communication",
    "Scale your practice without hiring additional staff",
    "Generate detailed analytics on patient interactions",
    "Integrate seamlessly with your existing practice management software"
  ]

  return (
    <IndustryPageTemplate
      industryName="Dentists"
      industryNameSingular="Dental Practice"
      heroTitle="The Best AI Agents for Dentists"
      heroSubtitle="AI That Books, Confirms & Nurtures Every Patient"
      heroDescription="Transform your dental practice with AI that never sleeps. Book more appointments, reduce no-shows, and grow your practice while you focus on patient care."
      problemTitle="The Problem Every Dental Practice Faces"
      problemDescription="Missed calls mean missed patients. Staff overwhelmed with scheduling. No-shows killing your revenue. Patients calling after hours with no response. Manual follow-ups that never happen. Your competition is stealing patients while you sleep."
      solutionTitle="AI That Works Around The Clock"
      solutionDescription="Our AI agents handle every patient interaction perfectly. From the first inquiry to appointment confirmation, your AI works 24/7 to book more patients, reduce no-shows, and grow your practice automatically."
      features={features}
      benefitsTitle="Why Dental Practices Choose Our AI"
      benefits={benefits}
      finalCtaTitle="Ready to Transform Your Dental Practice?"
      finalCtaDescription="Join hundreds of dental practices using AI to book more patients and grow their revenue. Get started today and see results within 24 hours."
    />
  )
}
