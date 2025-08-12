"use client"

import { Card } from "@/components/ui/card"
import { TrendingDown, Clock, Users, AlertTriangle, Phone, Target } from "lucide-react"

const problems = [
  {
    title: "Missed Opportunities 24/7",
    description: "Leads calling after hours go straight to voicemail while competitors capture them instantly",
    icon: Clock,
    impact: "Lost Revenue: $50K+/year",
    delay: "0ms",
  },
  {
    title: "Slow Response = Lost Sales",
    description: "By the time you call back, prospects have already chosen your faster competitors",
    icon: Phone,
    impact: "Conversion Loss: 70%",
    delay: "100ms",
  },
  {
    title: "Manual Follow-up Failures",
    description: "Inconsistent nurturing means qualified leads slip through the cracks daily",
    icon: TrendingDown,
    impact: "Lead Waste: 80%",
    delay: "200ms",
  },
  {
    title: "Overwhelmed Team",
    description: "Staff drowning in calls and admin work instead of closing high-value deals",
    icon: Users,
    impact: "Productivity Loss: 60%",
    delay: "300ms",
  },
  {
    title: "No Competitive Edge",
    description: "Same website, same ads, same approach as everyone else in your market",
    icon: Target,
    impact: "Market Share Decline",
    delay: "400ms",
  },
  {
    title: "Qualification Time Waste",
    description: "Hours spent on unqualified prospects while real buyers go to competitors",
    icon: AlertTriangle,
    impact: "Time Waste: 40hrs/week",
    delay: "500ms",
  },
]

export function GlassmorphicProblemsSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-500/5 to-transparent rounded-full animate-spin-slow"></div>

        {/* Floating particles */}
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-48 right-1/3 w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-ping"></div>
        <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-purple-300 rounded-full opacity-50 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-xl border border-purple-500/30 rounded-full px-8 py-4 mb-8">
            <span className="text-purple-300 font-semibold text-lg">⚠️ Business Reality Check</span>
          </div>

          <h2
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(239,68,68,0.8)]"
            style={{ textShadow: "0 0 20px #ef4444, 0 0 40px #ef4444, 0 0 60px #ef4444" }}
          >
            Stop Losing Money On These Problems
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Every day you delay AI automation, these critical business problems are costing you leads, revenue, and
            competitive advantage.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon
            return (
              <Card
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 hover:bg-white/10"
                style={{
                  animationDelay: problem.delay,
                  animation: `fadeInUp 0.8s ease-out forwards ${problem.delay}`,
                }}
              >
                {/* Glassmorphic overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
                    {problem.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">{problem.description}</p>

                  {/* Impact badge */}
                  <div className="inline-flex items-center bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-full px-4 py-2">
                    <span className="text-red-300 font-semibold text-sm">{problem.impact}</span>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-xl border border-red-500/30 rounded-full px-8 py-4">
            <span className="text-red-300 font-semibold text-lg">
              💰 These problems cost the average business $200K+ annually
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
