import { PageFAQ } from "@/components/ui/page-faq"

const demoFAQs = [
  {
    question: "How do I start the voice AI demo?",
    answer:
      "Simply click the microphone button in the demo area and start speaking. The AI will respond naturally to your questions and scenarios. Make sure your browser allows microphone access for the best experience.",
  },
  {
    question: "What should I ask the AI during the demo?",
    answer:
      "Try asking: 'How can you help my business?', 'What type of business do you work with?', 'How would you call my clients?', or give it challenging scenarios like handling angry customers or complex objections.",
  },
  {
    question: "Can the AI handle industry-specific questions?",
    answer:
      "Yes! Tell the AI what type of business you have (realtor, auto dealer, lawyer, etc.) and it will adapt its responses with industry-specific knowledge, terminology, and best practices.",
  },
  {
    question: "How realistic is this demo compared to the actual AI?",
    answer:
      "This demo uses the same AI technology that powers our client systems. The actual deployed AI agents are even more powerful as they're trained on your specific business data, processes, and client history.",
  },
  {
    question: "What if the AI doesn't understand my question?",
    answer:
      "The AI is designed to handle a wide range of questions and scenarios. If it doesn't understand something, try rephrasing your question or being more specific about your business context.",
  },
  {
    question: "Can I test difficult customer service scenarios?",
    answer:
      "Try challenging the AI with difficult situations like: 'What if a customer is angry about pricing?', 'How do you handle objections?', or 'What if someone wants to cancel their service?'",
  },
]

export function DemoFAQ() {
  return <PageFAQ title="Demo Instructions & Tips" faqs={demoFAQs} pageType="AI voice demo" />
}
