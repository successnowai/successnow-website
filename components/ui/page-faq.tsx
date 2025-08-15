"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import { VoiceSnippetPlayer } from "@/components/voice/voice-snippet-player"

interface FAQItem {
  question: string
  answer: string
}

interface PageFAQProps {
  title?: string
  faqs: FAQItem[]
  pageType?: string
}

export function PageFAQ({ title = "Frequently Asked Questions", faqs, pageType }: PageFAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  if (!faqs || faqs.length === 0) return null

  return (
    <section className="py-16 px-4 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
              <HelpCircle className="w-6 h-6 text-cyan-400" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get answers to common questions about {pageType ? `our ${pageType}` : "SuccessNOW.ai"}.
          </p>
          <div className="mt-6">
            <VoiceSnippetPlayer
              text={`Get answers to common questions about ${pageType ? `our ${pageType}` : "SuccessNOW.ai"}. Listen to detailed explanations of our features, pricing, and how our AI agents can transform your business.`}
              category={`page-faq-${pageType?.replace(/\s+/g, "-") || "general"}`}
              variant="compact"
            />
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index)

            return (
              <Card
                key={index}
                className="bg-gray-900/80 backdrop-blur-sm border-gray-800 hover:border-pink-500/50 transition-all duration-300 group"
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-200"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200 pr-4 mb-2">
                        {faq.question}
                      </h3>
                      <VoiceSnippetPlayer
                        text={faq.answer}
                        category={`page-faq-${pageType?.replace(/\s+/g, "-") || "general"}-${index}`}
                        variant="inline"
                      />
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-cyan-400 group-hover:text-pink-400 transition-colors duration-200 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6">
                      <div className="h-px bg-gradient-to-r from-cyan-500/50 to-pink-500/50 mb-4" />
                      <p className="text-gray-300 leading-relaxed mb-4">{faq.answer}</p>
                      <div className="mt-4">
                        <VoiceSnippetPlayer
                          text={faq.answer}
                          category={`page-faq-${pageType?.replace(/\s+/g, "-") || "general"}-${index}`}
                          variant="compact"
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA to Main FAQ */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Need more answers?</p>
          <a
            href="/faq"
            className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:border-pink-500/50 hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-300"
          >
            <HelpCircle className="w-4 h-4" />
            View All FAQs
          </a>
        </div>
      </div>

      {/* JSON-LD Schema for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  )
}
