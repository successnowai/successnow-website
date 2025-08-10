"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Quote,
  User,
  Phone,
  Building,
  Car,
  Dumbbell,
  Zap,
  Target,
  MessageSquare,
  BarChart3,
  Bolt,
  Users,
} from "lucide-react"

const AboutClientPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Starry Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {[...Array(200)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Badge variant="outline" className="mb-8 px-4 py-2 text-sm border-pink-500/30 text-pink-400 bg-pink-500/10">
              About SuccessNOW.ai
            </Badge>
            <h1
              className="text-5xl md:text-7xl font-bold mb-6"
              style={{
                background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              The SuccessNOW.ai Story
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              From Door-to-Door Hustle to AI-Powered Global Automation
            </p>
          </div>
        </section>

        {/* Words from Our Founder */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-bold text-center mb-16"
              style={{
                background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Words from Our Founder
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-gray-800/40 backdrop-blur-lg border-gray-700/50">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="border-pink-500/30 text-pink-400">
                    Company Mission
                  </Badge>
                </div>
                <blockquote className="text-lg text-gray-300 italic mb-6">
                  "AI isn't coming — it's here. Deploy your AI Super Agents NOW... and never miss another lead."
                </blockquote>
                <p className="text-pink-400 font-semibold">— John Potvin, Founder</p>
              </Card>

              <Card className="p-8 bg-gray-800/40 backdrop-blur-lg border-gray-700/50">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="border-blue-500/30 text-blue-400">
                    AI Innovation Business International Panel - Innovation Canada
                  </Badge>
                </div>
                <blockquote className="text-lg text-gray-300 italic mb-6">
                  "The future of software, and AI, is never having to log in, learn or have to manually use software
                  again! AI is here, it's not coming, adapt or get left behind!"
                </blockquote>
                <p className="text-blue-400 font-semibold">— John Potvin</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Meet John Potvin */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2
                  className="text-4xl md:text-5xl font-bold mb-8"
                  style={{
                    background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Meet John Potvin
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  SuccessNOW.ai was founded by John Potvin, a lifelong sales innovator whose career journey reads like a
                  masterclass in resilience, reinvention, and relentless optimization.
                </p>
                <p className="text-lg text-gray-300">
                  John's career began in the trenches — door-to-door and call center sales, mastering timeless
                  principles from Zig Ziglar, Dale Carnegie, Robert Cialdini, and Robert Greene. These foundations in
                  human nature, persuasion, and consultative selling were later amplified by modern business growth
                  frameworks from Russell Brunson and Alex Hormozi.
                </p>
              </div>
              <div className="flex justify-center">
                <Card className="p-8 bg-gray-800/40 backdrop-blur-lg border-gray-700/50 text-center max-w-sm">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">John Potvin</h3>
                  <p className="text-pink-400 font-semibold mb-4">Founder & CEO</p>
                  <p className="text-gray-400 text-sm">Sales Innovator • AI Visionary • Business Growth Expert</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Career Journey */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge
                variant="outline"
                className="mb-4 px-4 py-2 text-sm border-blue-500/30 text-blue-400 bg-blue-500/10"
              >
                Career Journey
              </Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 bg-gray-800/40 backdrop-blur-lg border-gray-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="border-blue-500/30 text-blue-400">
                    Early Career
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Door-to-Door & Call Center Sales</h3>
                <p className="text-gray-300">
                  Mastered timeless principles from Zig Ziglar, Dale Carnegie, Robert Cialdini, and Robert Greene
                </p>
              </Card>

              <Card className="p-6 bg-gray-800/40 backdrop-blur-lg border-gray-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="border-purple-500/30 text-purple-400">
                    Early 20s
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Director of Franchising & Sales</h3>
                <p className="text-gray-300">Rose to leadership at national Rogers franchise group</p>
              </Card>

              <Card className="p-6 bg-gray-800/40 backdrop-blur-lg border-gray-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="border-green-500/30 text-green-400">
                    Automotive Era
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Finance Manager & Trainer</h3>
                <p className="text-gray-300">
                  Specialized in high-performance subprime departments, building bulletproof systems
                </p>
              </Card>

              <Card className="p-6 bg-gray-800/40 backdrop-blur-lg border-gray-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                    <Dumbbell className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="border-orange-500/30 text-orange-400">
                    Entrepreneurship
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Franchise Gym Chain</h3>
                <p className="text-gray-300">Scaled martial arts and fitness gyms to $100K MRR in 6 months</p>
              </Card>

              <Card className="p-6 bg-gray-800/40 backdrop-blur-lg border-gray-700/50 md:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="border-pink-500/30 text-pink-400">
                    AI Revolution
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">SuccessNOW.ai Founder</h3>
                <p className="text-gray-300">Created AI Super Agents to scale proven systems globally</p>
              </Card>
            </div>
          </div>
        </section>

        {/* The Turning Point */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-bold text-center mb-12"
              style={{
                background: "linear-gradient(135deg, #ec4899 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              The Turning Point
            </h2>
            <Card className="p-8 md:p-12 bg-gray-800/40 backdrop-blur-lg border-gray-700/50 text-center">
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                John realized that the only limitation to helping more businesses was his own time. He couldn't be
                everywhere at once — but AI could.
              </p>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Out of this vision, SuccessNOW.ai was born: a platform where his meticulously refined systems could be
                deployed instantly for any business in any niche.
              </p>
            </Card>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2
                  className="text-4xl md:text-5xl font-bold mb-8"
                  style={{
                    background: "linear-gradient(135deg, #ec4899 0%, #06b6d4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To give every business — from small local service providers to enterprise-level agencies — access to
                  AI Super Agents that work 24/7, never miss a follow-up, and deliver personalized, high-converting
                  customer experiences.
                </p>
              </div>
              <Card className="p-8 bg-gray-800/40 backdrop-blur-lg border-gray-700/50 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">24/7 AI Workforce</h3>
                <p className="text-gray-300">Never miss a lead, never miss a follow-up, never miss an opportunity</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Global Impact */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-4xl md:text-5xl font-bold mb-12"
              style={{
                background: "linear-gradient(135deg, #ec4899 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Global Impact
            </h2>
            <Card className="p-8 md:p-12 bg-gray-800/40 backdrop-blur-lg border-gray-700/50 mb-12">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                Today, SuccessNOW.ai operates globally, empowering businesses in the U.S. and Canada to scale faster,
                work smarter, and deliver customer experiences that feel deeply personal — at AI speed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3"
                  asChild
                >
                  <Link href="/demo">
                    <Zap className="w-5 h-5 mr-2" />
                    See Live Demo
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 bg-transparent"
                  asChild
                >
                  <Link href="/signup">
                    <Target className="w-5 h-5 mr-2" />
                    Get Started Now
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-bold text-center mb-16"
              style={{
                background: "linear-gradient(135deg, #ec4899 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              What Makes SuccessNOW.ai Different
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-4xl mx-auto">
              Our AI agents aren't just "chatbots." They are trained digital employees that:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-gray-800/40 backdrop-blur-lg border-gray-700/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Learn Your Business & Clients</h3>
                </div>
                <p className="text-gray-300">Reviewing CRM history (human + AI notes) before every interaction</p>
              </Card>

              <Card className="p-8 bg-gray-800/40 backdrop-blur-lg border-gray-700/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Update CRM Automatically</h3>
                </div>
                <p className="text-gray-300">Logging detailed notes, follow-up tasks, and client preferences</p>
              </Card>

              <Card className="p-8 bg-gray-800/40 backdrop-blur-lg border-gray-700/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Handle Voice & Chat Conversations</h3>
                </div>
                <p className="text-gray-300">Talking to customers on your website or over the phone in real time</p>
              </Card>

              <Card className="p-8 bg-gray-800/40 backdrop-blur-lg border-gray-700/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                    <Bolt className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Adapt With Every Interaction</h3>
                </div>
                <p className="text-gray-300">Becoming smarter, more personalized, and more effective over time</p>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
      `}</style>
    </div>
  )
}

export default AboutClientPage
