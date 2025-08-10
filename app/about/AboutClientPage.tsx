"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import StarryBackground from "@/components/ui/starry-background"
import {
  Quote,
  User,
  Phone,
  Building2,
  Car,
  Dumbbell,
  Zap,
  Target,
  MessageSquare,
  BarChart3,
  Users,
  Bolt,
} from "lucide-react"
import Link from "next/link"

const AboutClientPage = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <StarryBackground />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-8 px-6 py-2 text-sm font-medium border-cyan-400/30 text-cyan-400 bg-cyan-400/10 hover:border-pink-500/50 hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-300"
            >
              About SuccessNOW.ai
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">The SuccessNOW.ai Story</h1>

            <p className="text-xl md:text-2xl text-cyan-400 max-w-4xl mx-auto leading-relaxed font-medium">
              From Door-to-Door Hustle to AI-Powered Global Automation
            </p>
          </div>
        </section>

        {/* Words from Our Founder */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Words from Our Founder</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Company Mission Quote */}
              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center text-white text-2xl font-bold transition-all duration-300">
                      <Quote className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Company Mission</h3>
                    </div>
                  </div>

                  <blockquote className="text-gray-300 text-lg italic leading-relaxed mb-6">
                    "AI isn't coming — it's here. Deploy your AI Super Agents NOW... and never miss another lead."
                  </blockquote>

                  <p className="text-cyan-400 font-medium group-hover:text-pink-400 transition-colors duration-300">
                    — John Potvin, Founder
                  </p>
                </CardContent>
              </Card>

              {/* Innovation Panel Quote */}
              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center text-white text-2xl font-bold transition-all duration-300">
                      <Quote className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        AI Innovation Business International Panel - Innovation Canada
                      </h3>
                    </div>
                  </div>

                  <blockquote className="text-gray-300 text-lg italic leading-relaxed mb-6">
                    "The future of software, and AI, is never having to log in, learn or have to manually use software
                    again! AI is here, it's not coming, adapt or get left behind!"
                  </blockquote>

                  <p className="text-cyan-400 font-medium group-hover:text-pink-400 transition-colors duration-300">
                    — John Potvin
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Meet John Potvin */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Meet John Potvin</h2>

                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    SuccessNOW.ai was founded by John Potvin, a lifelong sales innovator whose career journey reads like
                    a masterclass in resilience, reinvention, and relentless optimization.
                  </p>

                  <p>
                    John's career began in the trenches — door-to-door and call center sales, mastering timeless
                    principles from Zig Ziglar, Dale Carnegie, Robert Cialdini, and Robert Greene. These foundations in
                    human nature, persuasion, and consultative selling were later amplified by modern business growth
                    frameworks from Russell Brunson and Alex Hormozi.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group p-8 text-center max-w-sm">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6 transition-all duration-300">
                    <User className="w-12 h-12" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">John Potvin</h3>
                  <p className="text-cyan-400 font-medium mb-4 group-hover:text-pink-400 transition-colors duration-300">
                    Founder & CEO
                  </p>
                  <p className="text-gray-400 text-sm">Sales Innovator • AI Visionary • Business Growth Expert</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Career Journey */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Career Journey</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Early Career */}
              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center transition-all duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <Badge
                      variant="outline"
                      className="border-cyan-400/30 text-cyan-400 bg-cyan-400/10 group-hover:border-pink-500/50 group-hover:text-pink-400 group-hover:bg-pink-500/10 transition-all duration-300"
                    >
                      Early Career
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">Door-to-Door & Call Center Sales</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Mastered timeless principles from Zig Ziglar, Dale Carnegie, Robert Cialdini, and Robert Greene
                  </p>
                </CardContent>
              </Card>

              {/* Early 20s */}
              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center transition-all duration-300">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <Badge
                      variant="outline"
                      className="border-cyan-400/30 text-cyan-400 bg-cyan-400/10 group-hover:border-pink-500/50 group-hover:text-pink-400 group-hover:bg-pink-500/10 transition-all duration-300"
                    >
                      Early 20s
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">Director of Franchising & Sales</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Rose to leadership at national Rogers franchise group
                  </p>
                </CardContent>
              </Card>

              {/* Automotive Era */}
              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center transition-all duration-300">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                    <Badge
                      variant="outline"
                      className="border-cyan-400/30 text-cyan-400 bg-cyan-400/10 group-hover:border-pink-500/50 group-hover:text-pink-400 group-hover:bg-pink-500/10 transition-all duration-300"
                    >
                      Automotive Era
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">Finance Manager & Trainer</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Specialized in high-performance subprime departments, building bulletproof systems
                  </p>
                </CardContent>
              </Card>

              {/* Entrepreneurship */}
              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group md:col-span-2 lg:col-span-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center transition-all duration-300">
                      <Dumbbell className="w-6 h-6 text-white" />
                    </div>
                    <Badge
                      variant="outline"
                      className="border-cyan-400/30 text-cyan-400 bg-cyan-400/10 group-hover:border-pink-500/50 group-hover:text-pink-400 group-hover:bg-pink-500/10 transition-all duration-300"
                    >
                      Entrepreneurship
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">Franchise Gym Chain</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Scaled martial arts and fitness gyms to <span className="text-cyan-400 font-bold">$100K MRR</span>{" "}
                    in 6 months
                  </p>
                </CardContent>
              </Card>

              {/* AI Revolution */}
              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group md:col-span-2 lg:col-span-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center transition-all duration-300">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <Badge
                      variant="outline"
                      className="border-cyan-400/30 text-cyan-400 bg-cyan-400/10 group-hover:border-pink-500/50 group-hover:text-pink-400 group-hover:bg-pink-500/10 transition-all duration-300"
                    >
                      AI Revolution
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">SuccessNOW.ai Founder</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Created AI Super Agents to scale proven systems globally
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The Turning Point */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">The Turning Point</h2>

            <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 p-8 md:p-12">
              <div className="text-center space-y-6">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  John realized that the only limitation to helping more businesses was his own time. He couldn't be
                  everywhere at once — but AI could.
                </p>

                <p className="text-lg md:text-xl text-cyan-400 leading-relaxed font-medium">
                  Out of this vision, SuccessNOW.ai was born: a platform where his meticulously refined systems could be
                  deployed instantly for any business in any niche.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Our Mission</h2>

                <p className="text-xl text-gray-300 leading-relaxed">
                  To give every business — from small local service providers to enterprise-level agencies — access to
                  AI Super Agents that work <span className="text-cyan-400 font-bold">24/7</span>, never miss a
                  follow-up, and deliver personalized, high-converting customer experiences.
                </p>
              </div>

              <div className="flex justify-center">
                <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group p-8 text-center max-w-sm">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center text-white mx-auto mb-6 transition-all duration-300">
                    <Target className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">24/7 AI Workforce</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Never miss a lead, never miss a follow-up, never miss an opportunity
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Global Impact */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Global Impact</h2>

            <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 p-8 md:p-12 mb-12">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                Today, SuccessNOW.ai operates globally, empowering businesses in the U.S. and Canada to scale faster,
                work smarter, and deliver customer experiences that feel deeply personal — at AI speed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-pink-500 hover:to-purple-600 text-white px-8 py-3 shadow-[0_0_20px_rgba(0,191,255,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all duration-300"
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
                  className="border-cyan-400/50 text-cyan-400 hover:bg-pink-500/10 hover:border-pink-500/50 hover:text-pink-400 px-8 py-3 bg-transparent hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all duration-300"
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
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
              What Makes SuccessNOW.ai Different
            </h2>

            <p className="text-xl text-gray-300 text-center mb-12 max-w-4xl mx-auto">
              Our AI agents aren't just "chatbots." They are trained digital employees that:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center transition-all duration-300">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Learn Your Business & Clients</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Reviewing CRM history (human + AI notes) before every interaction
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center transition-all duration-300">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Update CRM Automatically</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Logging detailed notes, follow-up tasks, and client preferences
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center transition-all duration-300">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Handle Voice & Chat Conversations</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Talking to customers on your website or over the phone in real time
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center transition-all duration-300">
                      <Bolt className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Adapt With Every Interaction</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Becoming smarter, more personalized, and more effective over time
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutClientPage
