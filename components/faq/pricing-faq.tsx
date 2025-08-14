import { PageFAQ } from "@/components/ui/page-faq"

const pricingFAQs = [
  {
    question: "What's included in the $3,488 setup fee?",
    answer:
      "The setup includes: Custom AI-powered website build, AI voice & chat agent configuration, CRM integration and automation setup, initial paid ads campaign creation, SEO optimization and monitoring setup, and complete onboarding with our AI agents.",
  },
  {
    question: "Is there a contract or can I cancel anytime?",
    answer:
      "No long-term contracts required. You can cancel your monthly subscription anytime. However, the initial setup investment of $3,488 is non-refundable as it covers the complete build-out of your AI business system.",
  },
  {
    question: "What happens if I need changes to my AI website?",
    answer:
      "Minor updates and optimizations are included in your monthly fee. Major redesigns or additional features may incur additional costs, but our AI agents continuously optimize your site for better performance automatically.",
  },
  {
    question: "Do you offer payment plans for the setup fee?",
    answer:
      "Yes, we offer flexible payment plans for qualified businesses. Contact our team to discuss payment options that work for your budget and cash flow needs.",
  },
  {
    question: "What's the ROI timeline for SuccessNOW.ai?",
    answer:
      "Most businesses see positive ROI within 30-90 days. Our AI agents work 24/7 to generate leads, nurture prospects, and convert sales, typically paying for themselves through increased revenue and reduced labor costs.",
  },
  {
    question: "Are there any hidden fees or additional costs?",
    answer:
      "No hidden fees. The $997/month covers all platform features, AI agent operations, hosting, support, and ongoing optimization. Ad spend for paid campaigns is separate and managed according to your budget.",
  },
]

export function PricingFAQ() {
  return <PageFAQ title="Pricing & Investment Questions" faqs={pricingFAQs} pageType="pricing and investment options" />
}
