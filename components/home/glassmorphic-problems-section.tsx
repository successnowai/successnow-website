"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Clock, TrendingDown, Users, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function GlassmorphicProblemsSection() {
  const problems = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Missing Leads 24/7",
      description: "Customers call after hours, weekends, holidays - and you're losing them to competitors who answer.",
      impact: "Lost Revenue: $50K+/year",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Slow Response Times",
      description: "By the time you call back, they've already chosen someone else. Speed wins in today's market.",
      impact: "Conversion Loss: 70%",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Overwhelmed Staff",
      description: "Your team is drowning in calls, emails, and follow-ups instead of focusing on high-value work.",
      impact: "Productivity Loss: 60%",
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Inconsistent Follow-up",
      description: "Leads slip through cracks. No systematic nurturing. Potential customers forget about you.",
      impact: "Lead Waste: 80%",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Poor Lead Qualification",
      description: "Wasting time on unqualified prospects while real buyers go to competitors.",
      impact: "Time Waste: 40 hrs/week",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "No Competitive Edge",
      description: "Everyone has the same website, same ads, same approach. Nothing makes you stand out.",
      impact: "Market Share Loss",
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-orange-900/20" />

      {/* Animated warning elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-full px-6 py-2 mb-6">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <span className="text-red-300 font-medium">Business Reality Check</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Business Is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Bleeding Money
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every minute without AI automation, you're losing leads, revenue, and market share to smarter competitors.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-red-500/20 rounded-2xl p-6 h-full hover:border-red-500/40 transition-all duration-300 hover:scale-105">
                <div className="text-red-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{problem.description}</p>
                <div className="text-red-400 font-semibold text-sm bg-red-500/10 rounded-lg px-3 py-2">
                  {problem.impact}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Solution CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Stop The Bleeding. Start Winning.</h3>
            <p className="text-xl text-gray-300 mb-6">
              AI automation fixes every problem above. Your competitors are already using it. Don't get left behind.
            </p>
            <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-green-500/25"
              >
                Fix My Business Now
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
