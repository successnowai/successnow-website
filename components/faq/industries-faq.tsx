import { PageFAQ } from "@/components/ui/page-faq"

const industriesFAQs = [
  {
    question: "Which industries do you serve?",
    answer:
      "We serve 15+ industries including: Auto Dealers, Real Estate, Mortgage Brokers, Lawyers, Contractors, HVAC, Plumbers, Roofers, Gyms & Fitness, Medical Spas, Restaurants, Solar Companies, Insurance Agencies, and more. Each gets industry-specific AI training and our complete platform with AdsNow.ai Platinum and AI SEO included.",
  },
  {
    question: "How are AI agents customized for my industry?",
    answer:
      "Each industry gets pre-built AI systems with specialized knowledge, common objections, buying cycles, compliance requirements, and communication styles. On top of this, we custom train the AI agents specifically on your business by creating a comprehensive knowledge base with your mission, goals, and objectives for each AI agent.",
  },
  {
    question: "Can you create AI for industries not listed?",
    answer:
      "Yes! While we have pre-built systems for 15+ industries, we can create custom AI agents for virtually any business type. Our AI learns your specific processes, terminology, and customer interactions. The Pilot Program pricing applies to all industries.",
  },
  {
    question: "Do different industries have different pricing?",
    answer:
      "No, our Pilot Program pricing is consistent across all industries: $988 one-time setup (90% off) and $997/month (50% off for life). Every business gets the same comprehensive AI platform - the difference is in the specialized training and industry-specific knowledge built into your AI agents.",
  },
  {
    question: "How quickly can you deploy for my industry?",
    answer:
      "For our pre-built industries, deployment typically takes 1-2 weeks with our industry-leading 4 x 1 hour onboarding sessions with an expert. For custom industries, it may take 2-4 weeks as we build specialized training data and conversation flows for your specific market.",
  },
  {
    question: "Do you understand industry regulations and compliance?",
    answer:
      "Yes, our AI agents are trained on industry-specific regulations and compliance requirements. For example, our financial services AI understands TCPA compliance, and our healthcare AI follows HIPAA guidelines. We ensure your AI agents operate within all relevant industry standards.",
  },
]

export function IndustriesFAQ() {
  return <PageFAQ title="Industry-Specific Questions" faqs={industriesFAQs} pageType="industry solutions" />
}
