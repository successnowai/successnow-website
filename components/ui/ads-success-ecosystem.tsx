"use client"

import { Clock, DollarSign, Zap, Users, Target, TrendingUp } from 'lucide-react'

export function AdsSuccessEcosystem() {
const benefits = [
  {
    icon: Clock,
    title: "Save 10+ Hours Per Week",
    subtitle: "Focus on your business, not ad software",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: DollarSign,
    title: "Increase ROI by 300%",
    subtitle: "Better results with less effort",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Zap,
    title: "Launch in Under 5 Minutes",
    subtitle: "Speed of thought execution",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Users,
    title: "24/7 AI Management",
    subtitle: "Never miss an opportunity",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Target,
    title: "Precision Targeting",
    subtitle: "Reach your ideal customers",
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    title: "Real-Time Optimization",
    subtitle: "Continuous performance improvement",
    gradient: "from-indigo-500 to-purple-500"
  }
]

return (
  <section className="relative py-24 overflow-hidden">
    {/* Animated Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <div className="w-1 h-1 bg-cyan-400/30 rounded-full" />
          </div>
        ))}
      </div>
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          The AdsNOW{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Advantage
          </span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Transform your advertising workflow with AI-powered automation that delivers results while you focus on growing your business.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon
          return (
            <div
              key={index}
              className="group relative"
            >
              {/* Glassmorphic Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20">
                {/* Gradient Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${benefit.gradient} mb-6 shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 font-medium leading-relaxed">
                    {benefit.subtitle}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/30 transition-all duration-300" />
              </div>
            </div>
          )
        })}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white font-semibold">Live Demo Available</span>
          </div>
          <div className="w-px h-6 bg-white/20" />
          <span className="text-gray-300">See AdsNOW in action</span>
        </div>
      </div>
    </div>
  </section>
)
}
