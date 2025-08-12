"use client"

import { AlertTriangle, TrendingDown, Clock, Users } from "lucide-react"

export function GlassmorphicProblemsSection() {
  const problems = [
    {
      icon: TrendingDown,
      title: "Losing Customers to AI-Powered Competitors",
      description:
        "While you're still doing things the old way, your competitors are using AI to capture your customers 24/7.",
    },
    {
      icon: Clock,
      title: "Missing Leads After Hours",
      description:
        "Your business sleeps, but your customers don't. Every missed call or chat is money walking out the door.",
    },
    {
      icon: Users,
      title: "Can't Scale Personal Service",
      description:
        "You can only handle so many customers personally. AI lets you serve thousands with the same quality.",
    },
    {
      icon: AlertTriangle,
      title: "Falling Behind in Digital Marketing",
      description: "Manual marketing is slow and expensive. AI-driven campaigns outperform human efforts by 300%.",
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-orange-900/20" />

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Your Business Is At Risk</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every day without AI is a day your competitors get ahead. Here's what's happening to businesses that wait:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-red-500/20 rounded-2xl p-8 hover:border-red-500/40 transition-all duration-300 hover:scale-105"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-6">
                  <problem.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{problem.title}</h3>

                <p className="text-gray-300 leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Don't Let AI Leave You Behind</h3>
            <p className="text-xl text-gray-300">
              The businesses thriving today aren't the ones with the best products—they're the ones with the best AI.
              Get ahead before it's too late.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
