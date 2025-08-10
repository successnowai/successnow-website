"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const problems = [
  {
    title: "Missed Leads",
    description: "You're losing potential customers because you can't respond to inquiries 24/7",
    icon: "📞",
    stats: "73% of leads are lost after 1 hour",
  },
  {
    title: "Manual Follow-ups",
    description: "Your team spends hours manually following up with prospects instead of closing deals",
    icon: "⏰",
    stats: "5+ hours daily on manual tasks",
  },
  {
    title: "Inconsistent Service",
    description: "Customer experience varies depending on who's available to respond",
    icon: "🎯",
    stats: "60% inconsistency in responses",
  },
  {
    title: "Scaling Challenges",
    description: "Growing your business means hiring more staff and increasing overhead costs",
    icon: "📈",
    stats: "$50K+ annual cost per employee",
  },
]

export function GlassmorphicProblemsSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Stop Losing Money on These Problems</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every minute you wait, potential customers are choosing your competitors
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 shadow-2xl">
              <div className="text-center">
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{problem.title}</h3>
                <p className="text-lg text-gray-300 mb-4">{problem.description}</p>
                <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3 inline-block">
                  <p className="text-red-400 font-semibold">{problem.stats}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Single CTA Button */}
        <div className="text-center">
          <Link href="/demo">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Fix These Problems Now →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
