"use client"

import { Card } from "@/components/ui/card"
import { TrendingDown, MessageCircle, AlertTriangle, Clock, Phone, Users } from "lucide-react"

const problems = [
  {
    title: "Inconsistent Follow-up",
    description: "Leads slip through cracks. No systematic nurturing. Potential customers forget about you.",
    icon: TrendingDown,
    stat: "Lead Waste: 80%",
    delay: "0ms",
  },
  {
    title: "Poor Lead Qualification",
    description: "Wasting time on unqualified prospects while real buyers go to competitors.",
    icon: MessageCircle,
    stat: "Time Waste: 40 hrs/week",
    delay: "100ms",
  },
  {
    title: "No Competitive Edge",
    description: "Everyone has the same website, same ads, same approach. Nothing makes you stand out.",
    icon: AlertTriangle,
    stat: "Market Share Loss",
    delay: "200ms",
  },
  {
    title: "Missing Leads 24/7",
    description: "Customers call after hours, weekends, holidays - and you're losing them to competitors who answer.",
    icon: Clock,
    stat: "Lost Revenue: $50K+/year",
    delay: "300ms",
  },
  {
    title: "Slow Response Times",
    description: "By the time you call back, they've already chosen someone else. Speed wins in today's market.",
    icon: Phone,
    stat: "Conversion Loss: 70%",
    delay: "400ms",
  },
  {
    title: "Overwhelmed Staff",
    description: "Your team is drowning in calls, emails, and follow-ups instead of focusing on high-value work.",
    icon: Users,
    stat: "Productivity Loss: 60%",
    delay: "500ms",
  },
]

export function BusinessRealitySection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Dark Background with Subtle Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-orange-500 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-red-400 rounded-full opacity-50 animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-orange-400 rounded-full opacity-30 animate-pulse"></div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(239,68,68,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.05),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-900/30 backdrop-blur-sm border border-red-500/30 rounded-full px-6 py-3 mb-8">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <span className="text-red-300 font-semibold">Business Reality Check</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Business Is{" "}
            <span
              className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(239,68,68,0.8)] text-shadow-[0_0_20px_rgba(239,68,68,1)]"
              style={{ textShadow: "0 0 20px #ef4444, 0 0 40px #ef4444, 0 0 60px #ef4444" }}
            >
              Bleeding Money
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Every minute without AI automation, you're losing leads, revenue, and market share to smarter competitors.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon
            return (
              <Card
                key={index}
                className="group bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 hover:border-red-500/40 p-6 shadow-2xl hover:shadow-red-500/10 transition-all duration-500 hover:scale-105"
                style={{
                  animationDelay: problem.delay,
                  animation: `fadeInUp 0.6s ease-out forwards ${problem.delay}`,
                }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center group-hover:bg-red-500/30 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-red-400 group-hover:text-red-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-all duration-300">
                  {problem.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed text-sm">{problem.description}</p>

                {/* Stat */}
                <div className="bg-red-900/40 backdrop-blur-sm border border-red-500/30 rounded-lg px-4 py-2">
                  <span className="text-red-300 font-semibold text-sm">{problem.stat}</span>
                </div>
              </Card>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
