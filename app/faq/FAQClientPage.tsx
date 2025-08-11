"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { StarryBackground } from "@/components/ui/starry-background"
import { ChevronDown, ChevronUp, MessageCircle, Bot, Zap, DollarSign, Shield, Users } from "lucide-react"

const faqData = [
  {
    category: "Getting Started",
    icon: Zap,
    questions: [
      {
        question: "What is SuccessNOW AI?",
        answer:
          "SuccessNOW AI is an advanced business automation platform that provides AI-powered voice and chat agents to help businesses convert leads, book appointments, and provide 24/7 customer service. Our AI agents work seamlessly with your existing systems to maximize conversions and revenue.",
      },
      {
        question: "How quickly can I get started?",
        answer:
          "You can get started immediately! Our AI agents can be deployed within 24-48 hours. We provide complete setup, training, and integration with your existing CRM and business systems. Most clients see results within the first week.",
      },
      {
        question: "Do I need technical knowledge to use SuccessNOW AI?",
        answer:
          "Not at all! Our platform is designed to be user-friendly with no technical expertise required. We handle all the setup, training, and maintenance. You simply provide your business information and we take care of the rest.",
      },
      {
        question: "What industries do you serve?",
        answer:
          "We serve a wide range of industries including Real Estate, Auto Dealers, MedSpa, Legal, Contractors, HVAC, Plumbers, Roofers, Dentists, Chiropractors, Gyms, Restaurants, Solar, Mortgage, and many more. Our AI agents are customized for each industry's specific needs.",
      },
    ],
  },
  {
    category: "Features & Capabilities",
    icon: Bot,
    questions: [
      {
        question: "What can SuccessNOW AI agents do?",
        answer:
          "Our AI agents can handle inbound and outbound calls, respond to texts and chats, qualify leads, book appointments, follow up with prospects, provide customer service, and integrate with your CRM. They work 24/7 and never miss a lead.",
      },
      {
        question: "How realistic do the AI voices sound?",
        answer:
          "Our AI voices are incredibly realistic and natural-sounding. Most people cannot tell they're speaking with an AI agent. We use advanced voice synthesis technology that includes natural speech patterns, emotions, and conversational flow.",
      },
      {
        question: "Can the AI handle complex conversations?",
        answer:
          "Yes! Our AI agents are trained on industry-specific scenarios and can handle complex conversations, objections, and questions. They're programmed with your business knowledge and can escalate to human agents when needed.",
      },
      {
        question: "Does it integrate with my existing CRM?",
        answer:
          "We integrate with all major CRMs including GoHighLevel, Salesforce, HubSpot, Pipedrive, and many others. All conversations, appointments, and lead data are automatically synced to your existing systems.",
      },
    ],
  },
  {
    category: "Pricing & Plans",
    icon: DollarSign,
    questions: [
      {
        question: "How much does SuccessNOW AI cost?",
        answer:
          "Our pricing is based on usage and starts at $497/month for our basic plan. We offer custom pricing for high-volume businesses. Contact us for a personalized quote based on your specific needs and call volume.",
      },
      {
        question: "Are there any setup fees?",
        answer:
          "Setup and training are included in your monthly subscription. There are no hidden fees or additional charges for implementation, training, or basic integrations.",
      },
      {
        question: "What's included in the monthly fee?",
        answer:
          "Your monthly fee includes unlimited AI agent usage, CRM integrations, 24/7 support, regular updates, voice and chat capabilities, appointment booking, lead qualification, and detailed analytics and reporting.",
      },
      {
        question: "Is there a contract or can I cancel anytime?",
        answer:
          "We offer both month-to-month and annual plans. You can cancel anytime with 30 days notice. We're confident in our results and don't believe in locking clients into long-term contracts they're not happy with.",
      },
    ],
  },
  {
    category: "Performance & Results",
    icon: Users,
    questions: [
      {
        question: "What kind of results can I expect?",
        answer:
          "Our clients typically see 30-50% increases in lead conversion rates, 24/7 lead capture, reduced response times, and significant cost savings on staffing. Many clients see ROI within the first month of implementation.",
      },
      {
        question: "How do you measure success?",
        answer:
          "We provide detailed analytics including call volume, conversion rates, appointment bookings, lead quality scores, and ROI metrics. You'll have full visibility into your AI agent's performance through our dashboard.",
      },
      {
        question: "What if the AI doesn't perform as expected?",
        answer:
          "We offer a 30-day money-back guarantee. If you're not satisfied with the performance, we'll work with you to optimize the system or provide a full refund. We're committed to your success.",
      },
    ],
  },
  {
    category: "Technical & Support",
    icon: Shield,
    questions: [
      {
        question: "Is my data secure?",
        answer:
          "Yes! We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and GDPR compliance. Your data is stored securely and never shared with third parties. We take data privacy and security very seriously.",
      },
      {
        question: "What kind of support do you provide?",
        answer:
          "We provide 24/7 technical support, dedicated account management, regular training sessions, and ongoing optimization. Our support team is always available to help you maximize your results.",
      },
      {
        question: "How often do you update the AI?",
        answer:
          "We continuously improve our AI technology with regular updates and new features. Updates are deployed automatically without any downtime or action required on your part.",
      },
      {
        question: "Can I customize the AI for my specific business?",
        answer:
          "Every AI agent is fully customized for your business, industry, services, pricing, and brand voice. We train the AI on your specific processes, scripts, and business knowledge to ensure authentic conversations.",
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
              Everything you need to know about SuccessNOW AI's voice and chat automation solutions. Can't find what
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
                  Our team is here to help! Get in touch with us for personalized answers and to learn how SuccessNOW AI
                  can transform your business.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/demo"
                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-pink-500 hover:to-purple-600 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25"
                  >
                    Book a Demo
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
