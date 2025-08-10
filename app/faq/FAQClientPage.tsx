"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface FAQ {
  question: string
  answer: string
  category?: string
}

interface FAQClientPageProps {
  faqs: FAQ[]
}

const categories = ["All", "General", "Features", "Industries", "Pricing", "Agency", "Implementation"]

export default function FAQClientPage({ faqs }: FAQClientPageProps) {
  const [openItems, setOpenItems] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-blue-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_50%)]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Get answers to common questions about SuccessNOW AI Superagents, pricing, implementation, and results.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="text-gray-400 w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white"
            >
              {categories.map((category) => (
                <option key={category} value={category} className="bg-black">
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(index.toString())}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex-1">
                  {faq.category && (
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs px-2 py-1 bg-gradient-to-r from-pink-500/20 to-blue-500/20 text-pink-300 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                </div>
                {openItems.includes(index.toString()) ? (
                  <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" />
                )}
              </button>

              {openItems.includes(index.toString()) && (
                <div className="px-6 pb-4">
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No questions found matching your search.</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
              }}
              className="mt-4 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-pink-900/20 to-blue-900/20 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team is here to help you understand how SuccessNOW AI can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-8 py-3"
            >
              <a href="/demo">Book a Free Demo</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-3 bg-transparent"
            >
              <a href="mailto:support@successnow.ai">Contact Support</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
