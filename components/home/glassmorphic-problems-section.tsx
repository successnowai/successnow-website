"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Zap, Clock, TrendingDown, Users, MessageCircle, Calendar } from "lucide-react"

const problems = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Missed Leads",
    description: "Leads slip through the cracks when you're busy or after hours",
    stat: "73% of leads never get followed up",
  },
  {
    icon: <TrendingDown className="w-8 h-8" />,
    title: "Low Conversion",
    description: "Manual processes result in inconsistent lead qualification",
    stat: "Only 2-5% of leads convert",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Overwhelmed Staff",
    description: "Your team spends hours on repetitive tasks instead of closing deals",
    stat: "60% of time wasted on admin",
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Slow Response",
    description: "Delayed responses mean competitors steal your prospects",
    stat: "78% expect instant responses",
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "No-Shows",
    description: "Appointments get forgotten without proper nurturing",
    stat: "40% of appointments are no-shows",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Inconsistent Follow-up",
    description: "Manual follow-up processes are unreliable and time-consuming",
    stat: "80% of sales need 5+ follow-ups",
  },
]

export function GlassmorphicProblemsSection() {
  const [visibleProblems, setVisibleProblems] = useState<number[]>([])

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleProblems((prev) => {
        if (prev.length < problems.length) {
          return [...prev, prev.length]
        }
        return prev
      })
    }, 200)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationName: "float",
              animationDuration: `${3 + Math.random() * 4}s`,
              animationIterationCount: "infinite",
              animationDirection: "alternate",
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            The Problems Crushing Your Business
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every day you delay, competitors with AI are stealing your leads and dominating your market
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-700 transform ${
                visibleProblems.includes(index) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Glassmorphic Card */}
              <div className="relative h-full p-8 rounded-2xl backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-pink-500/50 transition-all duration-300 group-hover:scale-105">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {problem.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors duration-300">
                    {problem.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">{problem.description}</p>

                  {/* Stat */}
                  <div className="flex items-center justify-between">
                    <span className="text-pink-400 font-bold text-lg">{problem.stat}</span>
                    <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Animated Border */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ padding: "1px" }}
                >
                  <div className="w-full h-full rounded-2xl bg-gray-900/90 backdrop-blur-md"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-2xl backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Solve These Problems Forever?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              SuccessNOW AI eliminates every single one of these issues while you sleep
            </p>
            <a
              href="/demo"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 group"
            >
              See How It Works
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  )
}
