"use client"

import { useState, useEffect } from "react"

const platformFeatures = [
  {
    id: 1,
    title: "Smart AI Website with Live Chat Agent",
    subtitle: "Every visitor becomes a conversation. Every conversation becomes an opportunity.",
    description:
      "Your high-converting website is designed by our WebDev Bot and includes a Live AI Agent who instantly engages every visitor—converting them into leads and clients on autopilot.",
    icon: "🤖",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "Paid Ads Created & Managed by AdsNOW.ai",
    subtitle: "No experience needed. AI handles it like a pro.",
    description:
      "Let our Ads SuperAgent create, launch, and optimize winning ads across Google, Facebook, Instagram, YouTube, and TikTok—24/7.",
    icon: "📈",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    title: "AI SuperAgents That Act Like a Full Business Team",
    subtitle: "It's like having a sales, support, and admin team—all in one AI-powered engine.",
    description:
      "Call, text, email, and DM every lead and client instantly. Book appointments directly into your calendar. Make CRM notes on every interaction. Never drop the ball on a follow-up.",
    icon: "⚡",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 4,
    title: "Nurture Clients & Drive Repeat Business",
    subtitle: "Keep your clients engaged and educated automatically.",
    description: "The Nurturing Bot keeps your clients engaged and educated, driving loyalty and consistent sales.",
    icon: "💎",
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    id: 5,
    title: "Get Referrals & 5-Star Reviews on Autopilot",
    subtitle: "Turn customer satisfaction into lead generation—automatically.",
    description:
      "The Review Bot and Referral Bot ensure your happiest clients leave great reviews and send referrals without being asked.",
    icon: "⭐",
    gradient: "from-red-500 to-rose-500",
    bgGradient: "from-red-500/20 to-rose-500/20",
  },
  {
    id: 6,
    title: "Dominate Search with AI-Powered SEO",
    subtitle: "Combines AI speed with expert precision for top search visibility.",
    description:
      "The SEO Bot improves your Google & Maps rankings using keyword optimization, backlink strategies, and content automation.",
    icon: "🎯",
    gradient: "from-indigo-500 to-blue-500",
    bgGradient: "from-indigo-500/20 to-blue-500/20",
  },
  {
    id: 7,
    title: "Enjoy True Freedom: Only Handle Booked Appointments",
    subtitle: "You show up. The AI & experts do the rest.",
    description: "Everything else—from ads to engagement to reminders—is handled for you.",
    icon: "🚀",
    gradient: "from-teal-500 to-cyan-500",
    bgGradient: "from-teal-500/20 to-cyan-500/20",
  },
]

export default function PlatformShowcaseSection() {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentFeature((prev) => (prev + 1) % platformFeatures.length)
        setIsAnimating(false)
      }, 300)
    }, 4000)

    return () => clearInterval(interval)
  }, [mounted])

  if (!mounted) {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-700 rounded w-64 mx-auto mb-4"></div>
            <div className="h-12 bg-gray-700 rounded w-96 mx-auto mb-8"></div>
            <div className="h-64 bg-gray-700 rounded"></div>
          </div>
        </div>
      </section>
    )
  }

  const feature = platformFeatures[currentFeature]

  return null
}
