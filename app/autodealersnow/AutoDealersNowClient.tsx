"use client"

import IndustryPageTemplate from "@/components/industry/industry-page-template"
import { Globe, Target, Bot, BarChart3, Link, GraduationCap } from "lucide-react"

export default function AutoDealersNowClient() {
  return (
    <IndustryPageTemplate
      industryName="Auto Dealers"
      industryNameSingular="Dealership"
      heroSubtitle={
        <>
          AI that <span className="text-[#00BFFF]">Book More Test Drives</span>
          <br />
          To Skyrocket Your Results
        </>
      }
      heroWarning="77% of Leads are lost due to poor handling!"
      heroDescription={
        <>
          Stop losing sales to no-shows and forgotten follow-ups. Our{" "}
          <span className="text-[#00BFFF]">AI books test drives, confirms appointments, and nurtures every lead</span>{" "}
          until they buy.
        </>
      }
      heroCtaText="GET AUTODEALERNOW"
      heroCtaLink="/autodealersnow/signup"
      customBuildPoints={[
        {
          icon: Globe,
          title: "Custom Website to Your Brand & Vision",
          description:
            "Every website is built from scratch to match your dealership's unique brand, colors, and vision. No templates, no cookie-cutter designs.",
        },
        {
          icon: Target,
          title: "Custom AI Smart Funnels to Your Offers",
          description:
            "Tailored conversion funnels designed specifically for your inventory, financing options, and special promotions.",
        },
        {
          icon: Bot,
          title: "Custom AI Agent Trained on YOUR Business",
          description:
            "AI agents that know your inventory, pricing, financing options, and dealership policies inside and out.",
        },
      ]}
      aiAgentsBenefits={[
        "Never miss a lead or follow-up",
        "Makes detailed notes and transcripts of every call",
        "Like having the best team member using all the best AI tools",
        "Save countless money on staff that make excuses, call in sick, aren't motivated",
        "No more employees who don't follow the process",
      ]}
      dominateCtaText="Dominate NOW with the Best Agents in the Galaxy!"
      featureCards={[
        {
          icon: Bot,
          title: "AI Super Agents",
          description:
            "Custom AI agents trained on your business that never sleep, never miss a call, and always follow up.",
        },
        {
          icon: Target,
          title: "Smart Funnels",
          description: "AI-powered funnels that automatically qualify leads, book appointments, and nurture prospects.",
        },
        {
          icon: Globe,
          title: "Custom Website",
          description: "Professional website branded to your business with integrated AI chat and lead capture.",
        },
        {
          icon: BarChart3,
          title: "Analytics Dashboard",
          description: "Real-time insights into your AI performance, lead quality, and conversion rates.",
        },
        {
          icon: Link,
          title: "CRM Integration",
          description: "Seamlessly connects with your existing tools and workflows for maximum efficiency.",
        },
        {
          icon: GraduationCap,
          title: "Training & Support",
          description: "Complete onboarding, training, and ongoing support to ensure your success.",
        },
      ]}
      problems={[
        "Losing leads to competitors with faster response times",
        "High no-show rates for test drive appointments",
        "Sales team too busy to follow up with every online lead",
        "Inconsistent communication with potential buyers",
        "Struggling to get positive reviews to build trust",
        "Manually managing leads from multiple sources is chaotic",
      ]}
      solutions={[
        "24/7 AI assistant to engage and qualify every lead instantly",
        "Smart test drive booking with automated confirmations & reminders",
        "Long-term nurturing sequences for leads not ready to buy today",
        "Answers common vehicle and financing questions automatically",
        "Integrates with your CRM for a seamless sales process",
        "Automatically requests reviews from happy car buyers",
      ]}
      finalCtaTitle="Ready to Sell More Cars with AI?"
      finalCtaDescription="Join successful dealerships already using AI to boost sales"
    />
  )
}
