"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  User,
  Target,
  Lightbulb,
  Users,
  Globe,
  Award,
  Phone,
  MessageSquare,
  Bot,
  TrendingUp,
  Building,
  Calendar,
  ArrowRight,
  Quote,
} from "lucide-react"
import Link from "next/link"

export default function AboutClientPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20" />
        <div className="relative max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-pink-500 to-blue-500 text-white border-0">
            The SuccessNOW.ai Story
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            From Door-to-Door Hustle to AI-Powered Global Automation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            SuccessNOW.ai was founded by John Potvin, a lifelong sales innovator whose career journey reads like a
            masterclass in resilience, reinvention, and relentless optimization.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                The Founder: John Potvin
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                John's career began in the trenches — door-to-door and call center sales, mastering timeless principles
                from Zig Ziglar, Dale Carnegie, Robert Cialdini, and Robert Greene. These foundations in human nature,
                persuasion, and consultative selling were later amplified by modern business growth frameworks from
                Russell Brunson and Alex Hormozi.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                By his early 20s, John had already risen to Director of Franchising & Sales for a national Rogers
                franchise group. Transitioning into the automotive world, he worked his way from front-line sales to
                finance manager, trainer, and consultant — specializing in high-performance subprime departments.
              </p>
            </div>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <User className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-4">John's Expertise</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">Director of Franchising & Sales</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Automotive Finance Manager</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Business Growth Consultant</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-pink-400" />
                    <span className="text-gray-300">Franchise Gym Chain Owner</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Journey */}
      <section className="py-16 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            The Journey to AI Innovation
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-colors">
              <CardContent className="p-6">
                <Phone className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Sales Foundation</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Started in door-to-door and call center sales, mastering human psychology and persuasion principles
                  from industry legends like Zig Ziglar and Dale Carnegie.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-colors">
              <CardContent className="p-6">
                <Building className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Corporate Success</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Rose to Director of Franchising & Sales for Rogers franchise group, then became automotive finance
                  manager and trainer specializing in high-performance departments.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800 hover:border-pink-500/50 transition-colors">
              <CardContent className="p-6">
                <TrendingUp className="w-10 h-10 text-pink-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Entrepreneurial Scaling</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Launched and scaled a chain of franchise martial arts and fitness gyms to $100K MRR in just six months
                  using tripwire funnels and break-even ad campaigns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Turning Point */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Lightbulb className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            The Turning Point
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            John realized that the only limitation to helping more businesses was his own time. He couldn't be
            everywhere at once — but AI could. Out of this vision, SuccessNOW.ai was born: a platform where his
            meticulously refined systems could be deployed instantly for any business in any niche.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <Target className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            To give every business — from small local service providers to enterprise-level agencies — access to AI
            Super Agents that work 24/7, never miss a follow-up, and deliver personalized, high-converting customer
            experiences.
          </p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
            What Makes SuccessNOW.ai Different
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Our AI agents aren't just "chatbots." They are trained digital employees that:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-colors">
              <CardContent className="p-6 text-center">
                <Bot className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Learn Your Business</h3>
                <p className="text-gray-300 text-sm">Review CRM history and client notes before every interaction</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-colors">
              <CardContent className="p-6 text-center">
                <MessageSquare className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Voice & Chat</h3>
                <p className="text-gray-300 text-sm">
                  Handle conversations on your website and over the phone in real time
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800 hover:border-pink-500/50 transition-colors">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Update CRM</h3>
                <p className="text-gray-300 text-sm">
                  Log detailed notes, follow-up tasks, and client preferences automatically
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-colors">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Adapt & Learn</h3>
                <p className="text-gray-300 text-sm">Become smarter, more personalized, and more effective over time</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Bot Army */}
      <section className="py-16 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            The SuccessNOW Army of AI Bots
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            We've built a complete AI workforce to cover the entire business growth cycle:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Speed to Lead Bot", desc: "Engages every lead instantly before competitors can", icon: "⚡" },
              { name: "SalesBot", desc: "Automates appointment booking and closes deals", icon: "💼" },
              { name: "Follow-Up & Nurturing Bots", desc: "Keep leads warm until they buy", icon: "🔄" },
              { name: "Ads Bot (AdsNOW.ai)", desc: "Creates, launches, and optimizes paid ads 24/7", icon: "📱" },
              { name: "SEO Bot (SEONOW.ai)", desc: "Improves organic rankings & AI search visibility", icon: "🔍" },
              {
                name: "WebDev Bot (DevNOW.ai)",
                desc: "Builds high-converting, AI-powered websites that talk",
                icon: "🌐",
              },
              { name: "Review Bot", desc: "Maintains client satisfaction and loyalty", icon: "⭐" },
              { name: "Retention Bot", desc: "Keeps customers engaged and coming back", icon: "🤝" },
              { name: "Accountability Bot", desc: "Ensures follow-through on all commitments", icon: "✅" },
            ].map((bot, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-colors">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">{bot.icon}</div>
                  <h3 className="font-semibold mb-2 text-blue-400">{bot.name}</h3>
                  <p className="text-gray-300 text-sm">{bot.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
            Industries We Serve
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            With pre-built systems for 15+ industries, SuccessNOW.ai delivers:
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <Globe className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="font-semibold mb-3">Custom AI Website</h3>
                <p className="text-gray-300 text-sm">That sells and books appointments automatically</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <Bot className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="font-semibold mb-3">Industry-Trained AI Agents</h3>
                <p className="text-gray-300 text-sm">For lead generation and client care</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <TrendingUp className="w-10 h-10 text-pink-400 mb-4" />
                <h3 className="font-semibold mb-3">Done-for-You Marketing</h3>
                <p className="text-gray-300 text-sm">Paid ads and SEO campaigns optimized for ROI</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              "Auto Dealers",
              "Realtors",
              "Mortgage Brokers",
              "Lawyers",
              "Contractors",
              "Medispas",
              "Gyms",
              "Insurance",
              "HVAC",
              "Plumbers",
              "Roofers",
              "Chiropractors",
              "Dentists",
              "Restaurants",
              "Solar",
            ].map((industry, index) => (
              <Badge key={index} variant="outline" className="justify-center py-2 border-gray-700 text-gray-300">
                {industry}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Offer – The No-Brainer Setup
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Setup</h3>
                <div className="text-4xl font-bold mb-2">$997</div>
                <div className="text-gray-400 line-through mb-4">normally $9,977</div>
                <p className="text-gray-300 text-sm">One-time setup fee for complete AI implementation</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-pink-400">Monthly</h3>
                <div className="text-4xl font-bold mb-2">$997</div>
                <div className="text-gray-400 line-through mb-4">normally $1,994</div>
                <p className="text-gray-300 text-sm">Ongoing management and optimization</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-gray-300 mb-8">
            Includes: fully built AI website, AI voice & chat agents, paid ads management, SEO setup, and complete CRM
            automation.
          </p>
        </div>
      </section>

      {/* Founder Quotes */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Words from Our Founder
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-500/30">
              <CardContent className="p-8">
                <Quote className="w-12 h-12 text-blue-400 mb-4" />
                <blockquote className="text-lg text-gray-200 mb-6 italic leading-relaxed">
                  "AI isn't coming — it's here. Deploy your AI Super Agents NOW… and never miss another lead."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">John Potvin</div>
                    <div className="text-gray-400 text-sm">Founder, SuccessNOW AI</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
              <CardContent className="p-8">
                <Quote className="w-12 h-12 text-purple-400 mb-4" />
                <blockquote className="text-lg text-gray-200 mb-6 italic leading-relaxed">
                  "The future of software, and AI, is never having to log in, learn or have to manually use software
                  again! AI is here, it's not coming, adapt or get left behind!"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">John Potvin</div>
                    <div className="text-gray-400 text-sm">AI Innovation Business International Panel</div>
                    <div className="text-gray-500 text-xs">Hosted by Innovation Canada</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-16 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <Globe className="w-16 h-16 text-green-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Global Impact
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Today, SuccessNOW.ai operates globally, empowering businesses in the U.S. and Canada to scale faster, work
            smarter, and deliver customer experiences that feel deeply personal — at AI speed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              <Link href="/demo">
                See Live Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
            >
              <Link href="/book">
                Book Strategy Call
                <Phone className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
