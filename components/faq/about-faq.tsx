import { PageFAQ } from "@/components/ui/page-faq"

const aboutFAQs = [
  {
    question: "Who founded SuccessNOW.ai and when?",
    answer:
      "SuccessNOW.ai was founded by a team of AI experts and business automation specialists who recognized the need for truly intelligent AI agents that go beyond simple chatbots to actually learn and adapt to each business. Our founder's mission is to help as many businesses as possible succeed with AI through our Pilot Program.",
  },
  {
    question: "What makes SuccessNOW different from other AI tools?",
    answer:
      "Unlike basic AI chatbots, our AI Super Agents review client history, remember preferences, update CRM records automatically, and get smarter with every interaction. They're trained specifically for your industry and business processes. Plus, we include AdsNow.ai Platinum ($998/mo value) and AI SEO by SEOExperts.ai at no extra cost.",
  },
  {
    question: "How many businesses use SuccessNOW.ai?",
    answer:
      "We serve hundreds of businesses across 15+ industries, from solo entrepreneurs to large enterprises. Our AI agents have handled millions of customer interactions and generated substantial revenue for our clients. Our Pilot Program has helped businesses achieve 2-5x lead increases.",
  },
  {
    question: "What's your company's mission?",
    answer:
      "Our mission is to democratize AI-powered business growth by making sophisticated AI agents accessible to businesses of all sizes. We believe every business deserves AI that works as hard as they do, 24/7. That's why we created the Pilot Program with 50% off monthly fees for life.",
  },
  {
    question: "Do you have case studies or success stories?",
    answer:
      "Yes! We have numerous case studies showing businesses that have 2-5x their leads, improved conversion rates by 40-60%, and reduced response times from hours to seconds. Visit our case studies page for detailed examples of how our AI Super Agents transform businesses.",
  },
  {
    question: "What's your vision for the future of AI in business?",
    answer:
      "We envision a future where AI agents handle routine tasks seamlessly, allowing business owners to focus on strategy, relationships, and growth. Our AI will continue evolving to become even more intelligent and capable, with voice AI costs as low as $0.07/minute.",
  },
]

export function AboutFAQ() {
  return <PageFAQ title="About SuccessNOW.ai" faqs={aboutFAQs} pageType="company and mission" />
}
