"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { StarryBackground } from "@/components/ui/starry-background"
import { ChevronDown, ChevronUp, MessageCircle, Bot, Zap, Building, Rocket, Target } from "lucide-react"

const faqData = [
  {
    category: "About SuccessNOW.ai",
    icon: Zap,
    questions: [
      {
        question: "What is SuccessNOW.ai?",
        answer:
          "SuccessNOW.ai is recognized among the best AI tools for small business, offering a suite of 'agentic AI' — autonomous AI agents that handle lead generation, customer engagement, and conversion for you. With integrated AI voice & chat, paid ads agents, AI-driven SEO, and smart automation, SuccessNOW.ai delivers full-service AI growth tools under one roof.",
      },
      {
        question: "What are AI Super Agents?",
        answer:
          "These are true AI agents for small businesses, not chatbots. SuccessNOW's AI agents think and act independently—they review client history, handle objections, follow up, update CRM notes, request reviews, and refine their approach over time. They get smarter with every call, building relationships that feel human while working at AI speed.",
      },
    ],
  },
  {
    category: "Platform Features",
    icon: Bot,
    questions: [
      {
        question: "How does the AI website work?",
        answer:
          "The SuccessNOW.ai website acts as an AI tool that talks to customers: it's voice/chat-enabled, qualifies leads, books appointments, answers questions, and automatically syncs with your CRM. Built by our AI WebDev Agent to be high-converting and mobile-optimized.",
      },
      {
        question: "How does SuccessNOW generate and convert leads?",
        answer:
          "We use top AI marketing tools for small businesses, including AdsNOW.ai for paid campaigns, SEOExperts.ai for AI search visibility, AI-powered funnels, and Speed to Lead agents to respond instantly to every inquiry. Self-selling funnels with no-brainer offers ensure maximum conversion.",
      },
      {
        question: "Can the AI help with customer service and retention?",
        answer:
          "Yes—SuccessNOW.ai includes AI tools for client retention that review past interactions, provide personalized support, proactively follow up for renewals or upsells, and ensure no client is overlooked. They act as your ultimate client concierge.",
      },
    ],
  },
  {
    category: "Industries & Targeting",
    icon: Target,
    questions: [
      {
        question: "What industries are supported?",
        answer:
          "We offer AI tools for realtors, auto dealers, mortgage brokers, lawyers, contractors, gyms, medspas, insurance agencies, and 15+ other industries. Each gets a tailored AI-powered website, niche-trained agents, and done-for-you marketing—so you launch fast with deeply relevant experience.",
      },
      {
        question: "How are the AI agents trained for my industry?",
        answer:
          "Each industry gets pre-built AI systems with specialized knowledge, objection handling, and conversation flows. Our agents understand your market's pain points, buying cycles, and communication preferences to engage prospects like an experienced industry professional.",
      },
    ],
  },
  {
    category: "Pricing & Agency Programs",
    icon: Building,
    questions: [
      {
        question: "What's included in the No-Brainer Offer?",
        answer:
          "Our No-Brainer Offer includes the full AI all-in-one platform for $3,488 setup (normally $34,888) and $997/month (normally $1,994)—covering website, bots, ads, SEO, and CRM automation. You get a complete AI ecosystem ready to go.",
      },
      {
        question: "Can agencies resell SuccessNOW?",
        answer:
          "Yes—through AgencyNow.ai, our AI reseller agency program, you earn 40% recurring commissions. We handle setup and support; you bring the clients and brand the solution under your agency name. Perfect for scaling your agency with AI.",
      },
    ],
  },
  {
    category: "Getting Started & Support",
    icon: Rocket,
    questions: [
      {
        question: "How does onboarding work?",
        answer:
          "Onboarding uses our AI onboarding system—an agent gathers your business info, builds your site and funnels, connects your CRM, and launches your first campaigns with minimal input. Most businesses are fully deployed within 1-2 weeks from sign-up.",
      },
      {
        question: "What kind of support do I get?",
        answer:
          "You get access to our training community, dedicated support team, and ongoing optimization from our AI agents. We monitor performance and make adjustments to ensure your system continues improving and generating results.",
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

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is SuccessNOW.ai?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "SuccessNOW.ai is one of the best AI tools for small business, offering a suite of agentic AI that handle lead generation, customer engagement, and conversion—including AI voice & chat, ads agents, SEO agents, and smart automation, all in one platform.",
                },
              },
              {
                "@type": "Question",
                name: "What are AI Super Agents?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "AI Super Agents are autonomous AI agents for small businesses. They go beyond chatbots—reviewing client history, handling objections, following up, updating CRM notes, requesting reviews, and continuously improving with every interaction.",
                },
              },
              {
                "@type": "Question",
                name: "How does the AI website work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The SuccessNOW.ai website acts as an AI tool that talks to customers: it's voice/chat-enabled, qualifies leads, books appointments, answers questions, and automatically syncs with your CRM.",
                },
              },
              {
                "@type": "Question",
                name: "How does SuccessNOW generate and convert leads?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We use top AI marketing tools for small businesses, including AdsNOW.ai for paid campaigns, SEOExperts.ai for AI search visibility, AI-powered funnels, and Speed to Lead agents to respond instantly to every inquiry.",
                },
              },
              {
                "@type": "Question",
                name: "Can the AI help with customer service and retention?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes—SuccessNOW.ai includes AI tools for client retention that review past interactions, provide personalized support, proactively follow up for renewals or upsells, and ensure no client is overlooked.",
                },
              },
              {
                "@type": "Question",
                name: "What industries are supported?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We offer AI tools for realtors, auto dealers, mortgage brokers, lawyers, and 15+ other industries. Each gets a bespoke AI website, niche-trained agents, and done-for-you marketing tailored to your sector.",
                },
              },
              {
                "@type": "Question",
                name: "What's included in the No-Brainer Offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our No-Brainer Offer includes the full AI all-in-one platform for $3,488 setup (normally $34,888) and $997/month (normally $1,994)—covering website, bots, ads, SEO, and CRM automation.",
                },
              },
              {
                "@type": "Question",
                name: "Can agencies resell SuccessNOW?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes—through AgencyNow.ai, our AI reseller agency program, you earn 40% recurring commissions. We handle setup and support; you bring the clients and brand the solution.",
                },
              },
              {
                "@type": "Question",
                name: "How does onboarding work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Onboarding uses our AI onboarding system—an agent gathers your business info, builds your site and funnels, connects your CRM, and launches your first campaigns with minimal input.",
                },
              },
            ],
          }),
        }}
      />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
              <span className="text-cyan-400 font-medium">
                AI Super Agents That Learn, Sell, and Scale Your Business 24/7
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Frequently Asked
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Questions
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about SuccessNOW.ai's AI Super Agents and all-in-one business growth platform.
              Get answers about our best AI tools for small business.
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

                <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>

                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  See how SuccessNOW.ai's AI Super Agents can transform your business with our all-in-one platform that
                  learns, sells, and scales 24/7.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/demo"
                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-pink-500 hover:to-purple-600 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25"
                  >
                    Launch Instant Demo NOW
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
