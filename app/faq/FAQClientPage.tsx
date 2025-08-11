"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { StarryBackground } from "@/components/ui/starry-background"
import { ChevronDown, ChevronUp, MessageCircle, Bot, Zap, Users, Building } from "lucide-react"

const faqData = [
  {
    category: "About SuccessNOW.ai",
    icon: Zap,
    questions: [
      {
        question: "What is SuccessNOW.ai?",
        answer:
          "SuccessNOW.ai is an all-in-one AI business growth platform that works 24/7 to convert leads into sales. It provides a suite of integrated AI-powered tools so even small businesses can leverage advanced AI without a big team. Key capabilities include: AI-Powered Website with interactive voice and chat assistants, AI Super Agents trained on your business data, AI Ads Manager (AdsNOW.ai) for automated campaign optimization, AI SEO Agent (SEONOW.ai) for search rankings, and End-to-End Automation for lead capture, follow-up, booking, and retention. Together, these features allow SuccessNOW.ai to learn, sell, and scale your business automatically, engaging customers 24/7 while you focus on other tasks.",
      },
      {
        question: "What makes SuccessNOW's AI Agents different?",
        answer:
          "SuccessNOW.ai's AI Super Agents aren't static chatbots – they learn and adapt with every interaction. They have Contextual Memory (reviewing past CRM notes before each interaction), Personalized Interactions (remembering preferences and tailoring responses), Auto-Updated Records (automatically updating CRM with call notes and outcomes), and Continuous Learning (getting smarter with each engagement). These capabilities allow SuccessNOW's agents to build relationships that feel surprisingly human, with industry research suggesting that 70% of organizations believe AI will help provide empathetic, human-like interactions to millions of customers.",
      },
      {
        question: "What makes SuccessNOW.ai one of the best AI tools for businesses?",
        answer:
          "SuccessNOW.ai stands out because it's comprehensive and specifically tailored to help businesses make money and save time. Unlike generic AI tools, it offers All-in-One Convenience (multiple AI employees working in sync), is Designed for Small Business Needs (pre-trained industry agents and templates), focuses on Active Revenue Generation (directly driving leads and sales), provides Continuous Learning & Improvement (self-optimizing over time), and includes Proven Strategy and Support (expertise and human help included). It gives smaller businesses a competitive edge that was once only available to big companies.",
      },
    ],
  },
  {
    category: "Features & Capabilities",
    icon: Bot,
    questions: [
      {
        question: "How does the AI Website work?",
        answer:
          "Think of the SuccessNOW.ai website as a live AI sales rep rather than a static brochure. Our AI WebDev Agent builds your site to be high-converting and mobile-optimized, with integrated AI voice and chat agents. Visitors can instantly start conversations by speaking or typing with your AI assistant directly on the site. The AI can answer questions, handle objections, guide visitors through sales funnels, capture contact info, qualify needs, and book appointments 24/7. Every lead and interaction is automatically logged into your CRM. The website actively talks to visitors, converts them into leads, and schedules them like a diligent salesperson would.",
      },
      {
        question: "How does SuccessNOW generate and convert leads?",
        answer:
          "SuccessNOW.ai deploys a complete AI-powered growth system: AI Paid Ads Agent (AdsNOW.ai) automatically creates and optimizes campaigns 24/7, AI SEO Agent (SEONOW.ai) boosts organic rankings, Self-Selling Funnels with irresistible 'No-Brainer Offers', AI Speed-to-Lead Agent reaches out within seconds (studies show responding within one minute can boost conversion rates by up to 391%), and AI Follow-Up & Nurturing Agents persistently nurture leads over time. This creates a constant lead generation and conversion engine that attracts, engages, and follows up automatically.",
      },
      {
        question: "Can the AI Agents handle ongoing client service?",
        answer:
          "Yes! Our AI Retention Agents serve as your 24/7 customer service and retention team. They review client history before each interaction, provide highly personalized support using client preferences and history, proactively reach out at the right time (renewals, routine service, check-ins), and ensure no one slips through the cracks. The AI handles the entire customer lifecycle from first contact to sale to ongoing support, delivering fast, attentive service consistently while freeing up your human team for more complex tasks.",
      },
    ],
  },
  {
    category: "Industries & Pricing",
    icon: Building,
    questions: [
      {
        question: "What industries does SuccessNOW serve?",
        answer:
          "SuccessNOW.ai serves small and medium-sized businesses across 15+ industries with pre-built, niche-specific AI solutions: Auto Dealers, Real Estate, Mortgage & Finance, Legal, Home Services (contractors, plumbers, electricians, HVAC), Health & Fitness, Medical Aesthetics (medspas), Insurance, and many other local service providers. For each industry, we provide a fully customized package including a custom AI-driven website and funnel, AI agents pre-trained on industry-specific knowledge, and done-for-you marketing campaigns tailored to the niche. You don't need to train generic AI from scratch – it already speaks your industry's language on day one.",
      },
      {
        question: "What's included in the 'No-Brainer' offer?",
        answer:
          "Our current launch promotion offers everything at a steep discount: $997 for setup (one-time, normally $9,977) and $997 per month (ongoing subscription, normally $1,994/month). This includes: Fully Built AI Website & Funnels (custom design and launch), AI Voice & Chat Agents (integrated chat widget, voice agent, and phone call agents), AI-Powered Ads Management (automated campaign creation and optimization), SEO Setup & Monitoring (initial optimization plus ongoing improvements), and CRM Integration & Automation (full lead management automation). This promotional pricing won't last forever, but early adopters lock in huge savings.",
      },
      {
        question: "Can agencies use SuccessNOW.ai?",
        answer:
          "Our AgencyNow program is for marketing agencies, consultants, or anyone who wants to resell our AI platform. As an AgencyNow partner, you earn 40% recurring commission on every client you bring onto the platform, we handle setup, onboarding, and support for end-clients, and you can focus on finding clients and maintaining relationships. It's a turnkey way for agencies to offer cutting-edge AI solutions under their own brand without development costs, while creating predictable monthly income and helping small-business clients get AI working for them.",
      },
    ],
  },
  {
    category: "Implementation & Support",
    icon: Users,
    questions: [
      {
        question: "How is onboarding handled?",
        answer:
          "Onboarding is streamlined and largely automated: Our AI Onboarding Agent gathers your business info through an AI-driven questionnaire, the AI WebDev builds your custom site and funnels within days using collected information, we set up CRM & integrations with automated workflows, and provide training and launch with system walkthrough and access to our community. The process is very hands-off for you – our AI and team set up most of it. Many businesses deploy the full system in just a week or two from sign-up, with everything connected and ready from day one.",
      },
      {
        question: "Is SuccessNOW.ai available in the US and Canada?",
        answer:
          "Yes. We currently offer SuccessNOW.ai to businesses across the United States and Canada. These are our primary service regions for now, and all features (including AI voice agents for phone calls) are fully supported for US and Canadian markets. If you're located in either country, you can take advantage of the platform right away. As we expand, we plan to support additional countries in the future, but at present our focus is on North America.",
      },
    ],
  },
]

export default function FAQClientPage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StarryBackground />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
              <span className="text-cyan-400 font-medium">Frequently Asked Questions</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Get Your Questions
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Answered
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about SuccessNOW.ai's all-in-one AI business growth platform. Can't find what
              you're looking for? Contact our support team.
            </p>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            {faqData.map((category, categoryIndex) => {
              const IconComponent = category.icon

              return (
                <div key={category.category} className="mb-12">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                      <IconComponent className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{category.category}</h2>
                  </div>

                  {/* Questions */}
                  <div className="space-y-4">
                    {category.questions.map((faq, questionIndex) => {
                      const itemId = `${categoryIndex}-${questionIndex}`
                      const isOpen = openItems.includes(itemId)

                      return (
                        <Card
                          key={itemId}
                          className="bg-gray-900/80 backdrop-blur-sm border-gray-800 hover:border-pink-500/50 transition-all duration-300 group"
                        >
                          <CardContent className="p-0">
                            <button
                              onClick={() => toggleItem(itemId)}
                              className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-200"
                            >
                              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">
                                {faq.question}
                              </h3>
                              {isOpen ? (
                                <ChevronUp className="w-5 h-5 text-cyan-400 group-hover:text-pink-400 transition-colors duration-200" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" />
                              )}
                            </button>

                            {isOpen && (
                              <div className="px-6 pb-6">
                                <div className="h-px bg-gradient-to-r from-cyan-500/50 to-pink-500/50 mb-4" />
                                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border-cyan-500/30 hover:border-pink-500/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-500/30">
                    <MessageCircle className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>

                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Our team is here to help! Get in touch with us for personalized answers and to learn how SuccessNOW.ai
                  can transform your business with our all-in-one AI platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/demo"
                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-pink-500 hover:to-purple-600 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25"
                  >
                    Launch Instant Demo
                  </a>

                  <a
                    href="mailto:support@successnow.ai"
                    className="px-8 py-3 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:border-pink-500/50 hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-300"
                  >
                    Contact Support
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
