"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { StarryBackground } from "@/components/ui/starry-background"
import { ChevronDown, ChevronUp, MessageCircle, Bot, Zap, Building, Rocket } from "lucide-react"

const faqData = [
  {
    category: "About SuccessNOW.ai",
    icon: Zap,
    questions: [
      {
        question: "What is SuccessNOW.ai?",
        answer:
          "SuccessNOW.ai is the only all-in-one AI business platform that gives you: Custom AI-Powered Websites that talk to visitors through integrated AI voice & chat agents, AI Super Agents trained on your business, your clients, and your processes — they instantly engage leads, update CRM notes, and handle calls like your best salesperson, AI Paid Ads Agents that create, launch, and optimize ads 24/7, AI SEO Agents that boost your organic rankings and AI search visibility, and Full Automation for lead capture, nurturing, appointment booking, sales, and client retention.",
      },
      {
        question: "What makes SuccessNOW's AI Agents different?",
        answer:
          "Our AI Super Agents don't just answer questions — they learn and adapt. They review past CRM notes (human + AI) before each interaction to understand the client's history and needs. They remember preferences and tailor every call, chat, or email to the individual. They update client records automatically after every conversation. They get smarter with every single call, building relationships that feel human while working at AI speed.",
      },
    ],
  },
  {
    category: "Platform Features",
    icon: Bot,
    questions: [
      {
        question: "How does the AI Website work?",
        answer:
          "Your website isn't just a brochure — it's a live sales agent. Built by our AI WebDev Agent to be high-converting and mobile-optimized. Integrated with AI voice & chat so visitors can speak to your AI agents instantly. Captures leads, qualifies them, books appointments, and pushes all details into your CRM — without human intervention.",
      },
      {
        question: "How does SuccessNOW generate and convert leads?",
        answer:
          "We deploy a complete AI-powered growth system: AI Paid Ads Agent (AdsNOW.ai) — Creates, launches, and optimizes high-ROI ad campaigns. AI SEO Agent (SEONOW.ai) — Boosts organic rankings and AI search visibility. Self-Selling Funnels with irresistible No-Brainer Offers. AI Speed to Lead Agent — Engages every lead instantly before competitors get a chance. AI Follow-Up & Nurturing Agents — Keep leads warm until they buy.",
      },
      {
        question: "Can the AI Agents handle ongoing client service?",
        answer:
          "Yes. Our AI Retention Agents: Review each client's history before responding. Provide personalized service based on notes, preferences, and previous interactions. Proactively follow up for renewals, reviews, and upsells at the perfect time. Act as your ultimate client concierge, making sure no one slips through the cracks.",
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
          "We have pre-built AI-powered systems for 15+ industries, including: Auto dealers, realtors, mortgage brokers, lawyers, contractors, gyms, medspas, insurance agencies, local service providers, and more. Each niche gets: A custom high-converting AI website, Industry-trained AI Agents for lead generation & client care, and Done-for-You marketing & ads tailored to the niche.",
      },
      {
        question: "What's included in the No-Brainer Offer?",
        answer:
          "Our current launch offer: Setup: $997 (normally $9,977), Monthly: $997 (normally $1,994). Includes: Fully built AI website & funnels, AI voice & chat agents, Paid ads management & optimization, SEO setup & monitoring, and CRM integration with full automation.",
      },
      {
        question: "Can agencies use SuccessNOW?",
        answer:
          "Yes — via AgencyNow you can resell all our AI-powered niche systems: Keep 40% recurring commissions on every client. We handle setup, onboarding, and support. You just focus on bringing in clients while our AI Super Agents do the work.",
      },
    ],
  },
  {
    category: "Getting Started",
    icon: Rocket,
    questions: [
      {
        question: "How is onboarding handled?",
        answer:
          "AI Onboarding Agent collects all business info, branding, and goals. AI WebDev Agent builds your custom website & funnels. AI CRM Setup ensures every lead, call, and sale is tracked automatically. Most businesses are fully deployed within 1-2 weeks from sign-up.",
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
