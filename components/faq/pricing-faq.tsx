import { PageFAQ } from "@/components/ui/page-faq"

const pricingFAQs = [
  {
    question: "What's included in the $988 one-time setup fee?",
    answer:
      "The one-time setup fee includes: Custom AI-powered website build, AI voice & chat agent configuration, CRM integration and automation setup, initial paid ads campaign creation, SEO optimization and monitoring setup, AdsNow.ai Platinum ($998/mo value), AI SEO by SEOExperts.ai, complete onboarding with our AI agents, PLUS 2 months of platform access FREE (saving you $1,994). Regularly $9,988 - 90% off with automatic Pilot Program coupon.",
  },
  {
    question: "What is the Pilot Program and how does it benefit me?",
    answer:
      "Our Pilot Program offers exclusive lifetime benefits: 50% off monthly platform fees for life (only $997/month instead of $1,994), 90% off the one-time setup fee ($988 instead of $9,988), 2 months FREE platform access included with setup, priority support, and locked-in pricing forever. This program helps our founder's mission to help as many businesses as possible succeed with AI.",
  },
  {
    question: "Is there a contract or can I cancel anytime?",
    answer:
      "No long-term contracts required. You can cancel your monthly subscription anytime while keeping your Pilot Program benefits if you return. The one-time setup fee of $988 comes with a 30-day money-back guarantee. As we say: No Risk, Just Missed Opportunity!",
  },
  {
    question: "What happens if I need changes to my AI website?",
    answer:
      "Minor updates and optimizations are included in your monthly fee. Major redesigns or additional features may incur additional costs, but our AI agents continuously optimize your site for better performance automatically.",
  },
  {
    question: "Do you offer payment plans for the setup fee?",
    answer:
      "Yes, we offer flexible payment plans for qualified businesses. Contact our team to discuss payment options that work for your budget and cash flow needs. Remember, the setup fee includes 2 months of platform access FREE.",
  },
  {
    question: "What's the ROI timeline for SuccessNOW.ai?",
    answer:
      "Most businesses see positive ROI within 30-90 days. Our AI agents work 24/7 to generate leads, nurture prospects, and convert sales, typically paying for themselves through increased revenue and reduced labor costs. The included AdsNow.ai Platinum alone is worth $998/month, and with Pilot Program pricing at only $997/month total, you're essentially getting everything else for free.",
  },
  {
    question: "Are there any hidden fees or additional costs?",
    answer:
      "No hidden fees. The Pilot Program monthly fee of $997/month (50% off for life) covers all platform features, AI agent operations, hosting, support, and ongoing optimization. Ad spend for paid campaigns is separate and managed according to your budget. AdsNow.ai Platinum and AI SEO are included at no extra cost. Voice AI usage is only $0.07/minute - industry-leading pricing. 30-day money-back guarantee - No Risk, Just Missed Opportunity!",
  },
]

export function PricingFAQ() {
  return <PageFAQ title="Pricing & Investment Questions" faqs={pricingFAQs} pageType="pricing and investment options" />
}
