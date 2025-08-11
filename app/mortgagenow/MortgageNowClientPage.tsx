"use client"

import IndustryPageTemplate from "@/components/industry/industry-page-template"
import { Globe, Target, Bot, LayoutDashboard, LinkIcon, GraduationCap, MessageSquare } from "lucide-react"

export default function MortgageNowClientPage() {
  return (
    <IndustryPageTemplate
      industryName="Mortgage Brokers & Loan Officers"
      industryNameSingular="Mortgage Business"
      heroSubtitle={
        <>
          AI that <span className="text-[#00BFFF]">Qualifies Borrowers</span>
          <br />
          To Close More Loans
        </>
      }
      heroWarning="45% of mortgage leads never get contacted due to slow response times!"
      heroDescription={
        <>
          Stop losing deals to faster competitors. Our{" "}
          <span className="text-[#00BFFF] font-semibold">
            AI qualifies borrowers, books consultations, and nurtures leads
          </span>{" "}
          through the entire loan process to maximize your closings.
        </>
      }
      heroCtaText="GET MORTGAGENOW"
      heroCtaLink="/mortgagenow/signup"
      customBuildPoints={[
        {
          icon: Globe,
          title: "Custom Website to Build Trust",
          description:
            "A professional website that showcases your expertise, rates, and makes pre-qualification easy for borrowers.",
        },
        {
          icon: Target,
          title: "Custom AI Smart Funnels for Your Programs",
          description: "Targeted funnels for first-time buyers, refinancing, investment properties, and jumbo loans.",
        },
        {
          icon: MessageSquare,
          title: "Custom AI Agent Trained on YOUR Loan Programs",
          description:
            "AI agents that know your rates, loan products, qualification requirements, and processing timelines.",
        },
      ]}
      aiAgentsBenefits={[
        "Never miss a borrower inquiry, even on weekends",
        "Qualifies leads and provides rate quotes instantly",
        "Like having the most knowledgeable loan processor working 24/7",
        "Save money on lead qualification staff and increase conversion",
        "Creates a professional and responsive experience for every borrower",
      ]}
      dominateCtaText="Dominate NOW with Lightning-Fast Lead Response!"
      featureCards={[
        {
          icon: Bot,
          title: "AI Qualification Agent",
          description:
            "An AI agent that pre-qualifies borrowers and collects all necessary financial information 24/7.",
        },
        {
          icon: Target,
          title: "AI Rate Advisor",
          description: "Provides instant rate quotes and payment calculations to keep prospects engaged.",
        },
        {
          icon: Globe,
          title: "Custom Website",
          description: "Professional website with integrated AI chat, rate calculators, and application system.",
        },
        {
          icon: LayoutDashboard,
          title: "Analytics Dashboard",
          description: "Track lead sources, qualification rates, and loan pipeline progress.",
        },
        {
          icon: LinkIcon,
          title: "System Integration",
          description: "Connects with popular loan origination systems like Encompass and Calyx.",
        },
        {
          icon: GraduationCap,
          title: "Training & Support",
          description: "Full support to ensure you're maximizing loan closings and borrower satisfaction.",
        },
      ]}
      problems={[
        "Losing qualified borrowers to competitors with faster response times",
        "Spending too much time on unqualified leads",
        "Missing opportunities during evenings and weekends",
        "Inconsistent rate quotes and program information",
        "Difficulty nurturing leads through long loan processes",
        "Manual follow-up for document collection and status updates",
      ]}
      solutions={[
        "24/7 AI assistant to capture and qualify every borrower inquiry",
        "Instant pre-qualification to focus your time on ready-to-close deals",
        "Round-the-clock availability when borrowers are researching",
        "Consistent, accurate rate quotes and program details every time",
        "Automated nurturing sequences to keep deals moving forward",
        "Streamlined document collection and automated status updates",
      ]}
      finalCtaTitle="Ready to Close More Loans?"
      finalCtaDescription="Join the top mortgage professionals using AI to respond faster, qualify better, and close more deals."
    />
  )
}
