import { PageFAQ } from "@/components/ui/page-faq"

const industriesFAQs = [
  {
    question: "Which industries do you serve?",
    answer:
      "We serve 15+ industries including: Auto Dealers, Real Estate, Mortgage Brokers, Lawyers, Contractors, HVAC, Plumbers, Roofers, Gyms & Fitness, Medical Spas, Restaurants, Solar Companies, Insurance Agencies, and more. Each gets industry-specific AI training.",
  },
  {
    question: "How are AI agents customized for my industry?",
    answer:
      "Each industry gets pre-built AI systems with specialized knowledge, common objections, buying cycles, compliance requirements, and communication styles. For example, our realtor AI knows about market conditions, financing, and property details.",
  },
  {
    question: "Can you create AI for industries not listed?",
    answer:
      "Yes! While we have pre-built systems for 15+ industries, we can create custom AI agents for virtually any business type. Our AI learns your specific processes, terminology, and customer interactions.",
  },
  {
    question: "Do different industries have different pricing?",
    answer:
      "No, our pricing is consistent across all industries. Every business gets the same comprehensive AI platform - the difference is in the specialized training and industry-specific knowledge built into your AI agents.",
  },
  {
    question: "How quickly can you deploy for my industry?",
    answer:
      "For our pre-built industries, deployment typically takes 1-2 weeks. For custom industries, it may take 2-4 weeks as we build specialized training data and conversation flows for your specific market.",
  },
  {
    question: "Do you understand industry regulations and compliance?",
    answer:
      "Yes, our AI agents are trained on industry-specific regulations and compliance requirements. For example, our financial services AI understands TCPA compliance, and our healthcare AI follows HIPAA guidelines.",
  },
]

export function IndustriesFAQ() {
  return <PageFAQ title="Industry-Specific Questions" faqs={industriesFAQs} pageType="industry solutions" />
}
