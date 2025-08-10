"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Clock, TrendingDown, Users, MessageCircle, Calendar, Zap } from "lucide-react"

const problems = [
  {
    title: "Missed Leads",
    description: "Leads slip through the cracks when you're busy or after hours",
    icon: Clock,
    stats: "73% of leads never get followed up",
    delay: "0ms",
  },
  {
    title: "Low Conversion",
    description: "Manual processes result in inconsistent lead qualification",
    icon: TrendingDown,
    stats: "Only 2-5% of leads convert",
    delay: "100ms",
  },
  {
    title: "Overwhelmed Staff",
    description: "Your team spends hours on repetitive tasks instead of closing deals",
    icon: Users,
    stats: "60% of time wasted on admin",
    delay: "200ms",
  },
  {
    title: "Slow Response",
    description: "Delayed responses mean competitors steal your prospects",
    icon: MessageCircle,
    stats: "78% expect instant responses",
    delay: "300ms",
  },
  {
    title: "No-Shows",
    description: "Appointments get forgotten without proper nurturing",
    icon: Calendar,
    stats: "40% of appointments are no-shows",
    delay: "400ms",
  },
  {
    title: "Inconsistent Follow-up",
    description: "Manual follow-up processes are unreliable and time-consuming",
    icon: Zap,
    stats: "80% of sales need 5+ follow-ups",
    delay: "500ms",
  },
]

export function GlassmorphicProblemsSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Cyberpunk Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-purple-500 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-pink-500 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-blue-500 rounded-full opacity-50 animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-pink-400 rounded-full opacity-40 animate-bounce"></div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white neon-text-glow mb-6">
            Stop Losing Money on These Problems
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Every minute you wait, potential customers are choosing your competitors
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon
            return (
              <Card
                key={index}
                className="group bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 hover:border-pink-500/60 p-6 shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 hover:scale-105"
                style={{
                  animationDelay: problem.delay,
                  animation: `fadeInUp 0.6s ease-out forwards ${problem.delay}`,
                }}
              >
                {/* Gradient Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00BFFF] to-blue-600 p-0.5 group-hover:from-pink-500 group-hover:to-pink-600 transition-all duration-300">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00BFFF] group-hover:drop-shadow-[0_0_8px_rgba(0,191,255,0.6)] transition-all duration-300">
                  {problem.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{problem.description}</p>

                {/* Stats with Arrow */}
                <div className="flex items-center justify-between">
                  <span className="text-[#00BFFF] font-semibold text-lg drop-shadow-[0_0_4px_rgba(0,191,255,0.4)]">
                    {problem.stats}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#00BFFF]/20 flex items-center justify-center group-hover:bg-pink-500/40 transition-all duration-300">
                    <svg
                      className="w-4 h-4 text-[#00BFFF] group-hover:text-pink-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <Card className="bg-gray-800/60 backdrop-blur-xl border border-gray-700/50 hover:border-pink-500/40 p-8 md:p-12 text-center shadow-2xl hover:shadow-pink-500/10 transition-all duration-300">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Solve These Problems Forever?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            SuccessNOW AI eliminates every single one of these issues while you sleep
          </p>
          <Link href="/demo">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#00BFFF] to-blue-600 hover:from-pink-500 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105"
            >
              See How It Works →
            </Button>
          </Link>
        </Card>
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
