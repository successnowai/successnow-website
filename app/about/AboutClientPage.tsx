"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Target,
  Zap,
  Globe,
  Phone,
  MessageSquare,
  BarChart3,
  Search,
  Code,
  Star,
  TrendingUp,
  Building,
  Car,
  Stethoscope,
  Scale,
  Wrench,
  Home,
  UtensilsCrossed,
  Dumbbell,
  SmileIcon as Tooth,
  Activity,
  Droplets,
  Hammer,
  Sun,
  Calculator,
  Settings,
  Quote,
} from "lucide-react"
import Link from "next/link"

export default function AboutClientPage() {
  const [activeQuote, setActiveQuote] = useState(0)

  const quotes = [
    {
      text: "AI isn't coming — it's here. Deploy your AI Super Agents NOW… and never miss another lead.",
      source: "John Potvin, Founder",
      context: "Company Mission",
    },
    {
      text: "The future of software, and AI, is never having to log in, learn or have to manually use software again! AI is here, it's not coming, adapt or get left behind!",
      source: "John Potvin",
      context: "AI Innovation Business International Panel - Innovation Canada",
    },
  ]

  const careerMilestones = [
    {
      period: "Early Career",
      title: "Door-to-Door & Call Center Sales",
      description: "Mastered timeless principles from Zig Ziglar, Dale Carnegie, Robert Cialdini, and Robert Greene",
      icon: <Phone className="w-6 h-6" />,
    },
    {
      period: "Early 20s",
      title: "Director of Franchising & Sales",
      description: "Rose to leadership at national Rogers franchise group",
      icon: <Building className="w-6 h-6" />,
    },
    {
      period: "Automotive Era",
      title: "Finance Manager & Trainer",
      description: "Specialized in high-performance subprime departments, building bulletproof systems",
      icon: <Car className="w-6 h-6" />,
    },
    {
      period: "Entrepreneurship",
      title: "Franchise Gym Chain",
      description: "Scaled martial arts and fitness gyms to $100K MRR in 6 months",
      icon: <Dumbbell className="w-6 h-6" />,
    },
    {
      period: "AI Revolution",
      title: "SuccessNOW.ai Founder",
      description: "Created AI Super Agents to scale proven systems globally",
      icon: <Zap className="w-6 h-6" />,
    },
  ]

  const aiBots = [
    {
      name: "Speed to Lead Bot",
      description: "Engages every lead instantly before competitors can",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      name: "SalesBot",
      description: "Automates appointment booking and closes deals",
      icon: <Target className="w-5 h-5" />,
    },
    {
      name: "Follow-Up & Nurturing Bots",
      description: "Keep leads warm until they buy",
      icon: <MessageSquare className="w-5 h-5" />,
    },
    {
      name: "AdsBot (AdsNOW.ai)",
      description: "Creates, launches, and optimizes paid ads 24/7",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      name: "SEO Bot (SEONOW.ai)",
      description: "Improves organic rankings & AI search visibility",
      icon: <Search className="w-5 h-5" />,
    },
    {
      name: "WebDev Bot (DevNOW.ai)",
      description: "Builds high-converting, AI-powered websites that talk",
      icon: <Code className="w-5 h-5" />,
    },
    {
      name: "Review & Retention Bots",
      description: "Maintain client satisfaction and loyalty",
      icon: <Star className="w-5 h-5" />,
    },
    {
      name: "Accountability Bots",
      description: "Ensure consistent performance and results",
      icon: <TrendingUp className="w-5 h-5" />,
    },
  ]

  const industries = [
    { name: "Real Estate", icon: <Home className="w-5 h-5" />, href: "/realtornow" },
    { name: "Auto Dealers", icon: <Car className="w-5 h-5" />, href: "/autodealersnow" },
    { name: "Healthcare", icon: <Stethoscope className="w-5 h-5" />, href: "/medspanow" },
    { name: "Legal Services", icon: <Scale className="w-5 h-5" />, href: "/lawyersnow" },
    { name: "HVAC", icon: <Wrench className="w-5 h-5" />, href: "/hvacnow" },
    { name: "Contractors", icon: <Hammer className="w-5 h-5" />, href: "/contractorsnow" },
    { name: "Restaurants", icon: <UtensilsCrossed className="w-5 h-5" />, href: "/restaurantsnow" },
    { name: "Gyms & Fitness", icon: <Dumbbell className="w-5 h-5" />, href: "/gymsnow" },
    { name: "Dentists", icon: <Tooth className="w-5 h-5" />, href: "/dentistsnow" },
    { name: "Chiropractors", icon: <Activity className="w-5 h-5" />, href: "/chiropractorsnow" },
    { name: "Plumbers", icon: <Droplets className="w-5 h-5" />, href: "/plumbersnow" },
    { name: "Roofers", icon: <Home className="w-5 h-5" />, href: "/roofersnow" },
    { name: "Solar", icon: <Sun className="w-5 h-5" />, href: "/solarnow" },
    { name: "Mortgage", icon: <Calculator className="w-5 h-5" />, href: "/mortgagenow" },
    { name: "Custom Build", icon: <Settings className="w-5 h-5" />, href: "/custombuildnow" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Starry background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(59,130,246,0.1),transparent_50%)]" />

        {/* Animated stars */}
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-pink-500/20 to-blue-500/20 text-pink-300 border-pink-500/30">
              About SuccessNOW.ai
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                The SuccessNOW.ai Story
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              From Door-to-Door Hustle to AI-Powered Global Automation
            </p>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                    Meet John Potvin
                  </span>
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  SuccessNOW.ai was founded by John Potvin, a lifelong sales innovator whose career journey reads like a
                  masterclass in resilience, reinvention, and relentless optimization.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  John's career began in the trenches — door-to-door and call center sales, mastering timeless
                  principles from Zig Ziglar, Dale Carnegie, Robert Cialdini, and Robert Greene. These foundations in
                  human nature, persuasion, and consultative selling were later amplified by modern business growth
                  frameworks from Russell Brunson and Alex Hormozi.
                </p>
              </div>
              <div className="relative">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
                  <CardContent className="p-0">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Users className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">John Potvin</h3>
                      <p className="text-pink-400 font-semibold mb-4">Founder & CEO</p>
                      <p className="text-gray-300 text-sm">Sales Innovator • AI Visionary • Business Growth Expert</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Career Journey */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                Career Journey
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {careerMilestones.map((milestone, index) => (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg flex items-center justify-center">
                        {milestone.icon}
                      </div>
                      <Badge variant="outline" className="border-pink-500/30 text-pink-300">
                        {milestone.period}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{milestone.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* The Turning Point */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                The Turning Point
              </span>
            </h2>
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
              <CardContent className="p-0">
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  John realized that the only limitation to helping more businesses was his own time. He couldn't be
                  everywhere at once — but AI could.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Out of this vision, SuccessNOW.ai was born: a platform where his meticulously refined systems could be
                  deployed instantly for any business in any niche.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                    Our Mission
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  To give every business — from small local service providers to enterprise-level agencies — access to
                  AI Super Agents that work 24/7, never miss a follow-up, and deliver personalized, high-converting
                  customer experiences.
                </p>
              </div>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
                <CardContent className="p-0">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">24/7 AI Workforce</h3>
                    <p className="text-gray-300">
                      Never miss a lead, never miss a follow-up, never miss an opportunity
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                What Makes SuccessNOW.ai Different
              </span>
            </h2>
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 mb-8">
              <CardContent className="p-0">
                <p className="text-xl text-gray-300 text-center mb-8">
                  Our AI agents aren't just "chatbots." They are trained digital employees that:
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">Learn Your Business & Clients</h3>
                        <p className="text-gray-300">
                          Reviewing CRM history (human + AI notes) before every interaction
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <MessageSquare className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">Handle Voice & Chat Conversations</h3>
                        <p className="text-gray-300">
                          Talking to customers on your website or over the phone in real time
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <BarChart3 className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">Update CRM Automatically</h3>
                        <p className="text-gray-300">Logging detailed notes, follow-up tasks, and client preferences</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">Adapt With Every Interaction</h3>
                        <p className="text-gray-300">
                          Becoming smarter, more personalized, and more effective over time
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* AI Bot Army */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                The SuccessNOW Army of AI Bots
              </span>
            </h2>
            <p className="text-xl text-gray-300 text-center mb-16">
              We've built a complete AI workforce to cover the entire business growth cycle:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiBots.map((bot, index) => (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                      {bot.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{bot.name}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{bot.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                Industries We Serve
              </span>
            </h2>
            <p className="text-xl text-gray-300 text-center mb-16">
              With pre-built systems for 15+ industries, SuccessNOW.ai delivers:
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
              {industries.map((industry, index) => (
                <Link key={index} href={industry.href}>
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                        {industry.icon}
                      </div>
                      <p className="text-white font-medium text-sm">{industry.name}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Custom AI Website</h3>
                    <p className="text-gray-300 text-sm">That sells and books appointments automatically</p>
                  </div>
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Industry-Trained AI Agents</h3>
                    <p className="text-gray-300 text-sm">For lead generation and client care</p>
                  </div>
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Done-for-You Campaigns</h3>
                    <p className="text-gray-300 text-sm">Paid ads and SEO optimized for ROI</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pricing Overview */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                Our Offer – The No-Brainer Setup
              </span>
            </h2>
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white mb-4">Setup</h3>
                    <div className="text-4xl font-bold text-pink-400 mb-2">$997</div>
                    <p className="text-gray-400 line-through mb-4">normally $9,977</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white mb-4">Monthly</h3>
                    <div className="text-4xl font-bold text-blue-400 mb-2">$997</div>
                    <p className="text-gray-400 line-through mb-4">normally $1,994</p>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-white mb-4">Includes:</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Fully built AI website, AI voice & chat agents, paid ads management, SEO setup, and complete CRM
                    automation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quotes Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                Words from Our Founder
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {quotes.map((quote, index) => (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border-white/10 p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Quote className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="outline" className="border-pink-500/30 text-pink-300">
                        {quote.context}
                      </Badge>
                    </div>
                    <blockquote className="text-lg text-gray-300 leading-relaxed mb-6 italic">
                      "{quote.text}"
                    </blockquote>
                    <p className="text-pink-400 font-semibold">— {quote.source}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Global Impact */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                Global Impact
              </span>
            </h2>
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 mb-8">
              <CardContent className="p-0">
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Today, SuccessNOW.ai operates globally, empowering businesses in the U.S. and Canada to scale faster,
                  work smarter, and deliver customer experiences that feel deeply personal — at AI speed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white"
                  >
                    <Link href="/demo">
                      <Zap className="w-5 h-5 mr-2" />
                      See Live Demo
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    <Link href="/signup">
                      <Target className="w-5 h-5 mr-2" />
                      Get Started Now
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
