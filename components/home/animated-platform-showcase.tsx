"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const platformFeatures = [
  {
    id: 1,
    title: "Smart AI Website with Live Chat Agent",
    subtitle: "Every visitor becomes a conversation. Every conversation becomes an opportunity.",
    description:
      "Your high-converting website is designed by our WebDev Bot and includes a Live AI Agent who instantly engages every visitor—converting them into leads and clients on autopilot.",
    icon: "🤖",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    id: 2,
    title: "Paid Ads Created & Managed by AdsNOW.ai",
    subtitle: "No experience needed. AI handles it like a pro.",
    description:
      "Let our Ads SuperAgent create, launch, and optimize winning ads across Google, Facebook, Instagram, YouTube, and TikTok—24/7.",
    icon: "📈",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    id: 3,
    title: "AI SuperAgents That Act Like a Full Business Team",
    subtitle: "It's like having a sales, support, and admin team—all in one AI-powered engine.",
    description:
      "Call, text, email, and DM every lead and client instantly. Book appointments directly into your calendar. Make CRM notes on every interaction. Never drop the ball on a follow-up.",
    icon: "⚡",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    id: 4,
    title: "Nurture Clients & Drive Repeat Business",
    subtitle: "Keep your clients engaged and educated automatically.",
    description: "The Nurturing Bot keeps your clients engaged and educated, driving loyalty and consistent sales.",
    icon: "💎",
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-500/10 to-orange-500/10",
  },
  {
    id: 5,
    title: "Get Referrals & 5-Star Reviews on Autopilot",
    subtitle: "Turn customer satisfaction into lead generation—automatically.",
    description:
      "The Review Bot and Referral Bot ensure your happiest clients leave great reviews and send referrals without being asked.",
    icon: "⭐",
    gradient: "from-red-500 to-rose-500",
    bgGradient: "from-red-500/10 to-rose-500/10",
  },
  {
    id: 6,
    title: "Dominate Search with AI-Powered SEO",
    subtitle: "Combines AI speed with expert precision for top search visibility.",
    description:
      "The SEO Bot improves your Google & Maps rankings using keyword optimization, backlink strategies, and content automation.",
    icon: "🎯",
    gradient: "from-indigo-500 to-blue-500",
    bgGradient: "from-indigo-500/10 to-blue-500/10",
  },
  {
    id: 7,
    title: "Enjoy True Freedom: Only Handle Booked Appointments",
    subtitle: "You show up. The AI & experts do the rest.",
    description: "Everything else—from ads to engagement to reminders—is handled for you.",
    icon: "🚀",
    gradient: "from-teal-500 to-cyan-500",
    bgGradient: "from-teal-500/10 to-cyan-500/10",
  },
]

export default function AnimatedPlatformShowcase() {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentFeature((prev) => (prev + 1) % platformFeatures.length)
        setIsAnimating(false)
      }, 300)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const feature = platformFeatures[currentFeature]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-6 py-2 mb-6 border border-blue-500/30">
            <span className="text-2xl">⚡</span>
            <span className="text-blue-300 font-medium">Powered by AI SuperAgents</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            The New SuccessNOW
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Platform
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Backed by Human Experts for Next-Level Results</p>
        </div>

        {/* Main Feature Display */}
        <div className="relative">
          {/* Progress Indicators */}
          <div className="flex justify-center mb-8 gap-2">
            {platformFeatures.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFeature(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentFeature ? `bg-gradient-to-r ${feature.gradient}` : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          {/* Feature Card */}
          <Card
            className={`relative overflow-hidden border-0 bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm transition-all duration-500 ${
              isAnimating ? "scale-95 opacity-70" : "scale-100 opacity-100"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            <div className="relative z-10 p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`text-6xl p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} bg-opacity-20`}>
                      {feature.icon}
                    </div>
                    <div
                      className={`text-2xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
                    >
                      Feature {feature.id}
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">{feature.title}</h3>

                  <div className={`p-4 rounded-lg bg-gradient-to-r ${feature.bgGradient} border border-white/10`}>
                    <p className="text-lg text-gray-200 italic">"{feature.subtitle}"</p>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
                </div>

                {/* Visual Element */}
                <div className="relative">
                  <div
                    className={`w-full h-80 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-20 relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]" />
                    <div className="absolute inset-4 border border-white/20 rounded-xl" />
                    <div className="absolute inset-8 border border-white/10 rounded-lg" />

                    {/* Animated Elements */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className={`text-8xl opacity-30 animate-pulse`}>{feature.icon}</div>
                    </div>

                    {/* Floating Particles */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full animate-ping" />
                    <div
                      className="absolute bottom-6 left-6 w-1 h-1 bg-white/60 rounded-full animate-ping"
                      style={{ animationDelay: "1s" }}
                    />
                    <div
                      className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white/50 rounded-full animate-ping"
                      style={{ animationDelay: "2s" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
              <Button
                size="lg"
                className={`bg-gradient-to-r ${feature.gradient} hover:opacity-90 text-white font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105`}
              >
                Get Started with Feature {feature.id}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full"
              >
                View All Features
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        className="absolute top-20 left-10 w-20 h-20 border border-blue-500/20 rounded-full animate-spin"
        style={{ animationDuration: "20s" }}
      />
      <div
        className="absolute bottom-20 right-10 w-16 h-16 border border-purple-500/20 rounded-full animate-spin"
        style={{ animationDuration: "15s", animationDirection: "reverse" }}
      />
    </section>
  )
}
