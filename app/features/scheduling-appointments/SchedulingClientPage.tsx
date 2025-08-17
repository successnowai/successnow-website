"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import StarryBackground from "@/components/ui/starry-background"
import {
  Calendar,
  Phone,
  MessageSquare,
  Bot,
  Clock,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  Bell,
  Target,
  TrendingUp,
  BarChart3,
  RefreshCw,
  UserCheck,
} from "lucide-react"
import Link from "next/link"
import { VoiceSnippetPlayer } from "@/components/voice/voice-snippet-player"
import { StructuredData, generateWebPageSchema } from "@/components/seo/enhanced-structured-data"

const SchedulingClientPage = () => {
  const pageSchema = generateWebPageSchema(
    "Scheduling & Appointments - AI Booking via Voice, SMS & Chat | SuccessNOW.ai",
    "AI books appointments via voice, SMS, chat with round-robin scheduling, AI reminders, and automated no-show reduction. Calendly books, SuccessNOW books and closes.",
    "https://successnow.ai/features/scheduling-appointments",
    [
      { name: "AI Appointment Booking", voiceData: undefined },
      { name: "Multi-Channel Scheduling", voiceData: undefined },
      { name: "Round-Robin Scheduling", voiceData: undefined },
      { name: "Automated No-Show Reduction", voiceData: undefined },
    ],
  )

  const bookingChannels = [
    {
      icon: Phone,
      title: "Voice Booking",
      description: "AI books appointments during live phone conversations",
      features: ["Real-time scheduling", "Calendar integration", "Instant confirmation"],
    },
    {
      icon: MessageSquare,
      title: "SMS Scheduling",
      description: "Text-based appointment booking with smart suggestions",
      features: ["Two-way SMS", "Time slot suggestions", "Automated confirmations"],
    },
    {
      icon: Bot,
      title: "Chat Booking",
      description: "Website chat widget with intelligent appointment scheduling",
      features: ["Live chat integration", "Available time display", "Instant booking"],
    },
    {
      icon: Calendar,
      title: "Calendar Sync",
      description: "Seamless integration with all major calendar platforms",
      features: ["Google Calendar", "Outlook sync", "iCal support"],
    },
  ]

  const coreFeatures = [
    {
      icon: Users,
      title: "Round-Robin Scheduling",
      description:
        "AI automatically distributes appointments across your team members based on availability, workload, and expertise.",
      benefits: ["Balanced workload distribution", "Expertise matching", "Automatic availability checking"],
    },
    {
      icon: Bell,
      title: "AI-Powered Reminders",
      description:
        "Smart reminder system that reduces no-shows with personalized messages sent at optimal times via multiple channels.",
      benefits: ["Multi-channel reminders", "Personalized messaging", "Optimal timing"],
    },
    {
      icon: RefreshCw,
      title: "No-Show Reduction",
      description:
        "Advanced AI algorithms analyze patterns and automatically implement strategies to minimize appointment no-shows.",
      benefits: ["Pattern analysis", "Predictive scheduling", "Automated follow-up"],
    },
    {
      icon: Target,
      title: "Smart Qualification",
      description:
        "AI qualifies prospects during the booking process, ensuring only high-quality appointments make it to your calendar.",
      benefits: ["Lead qualification", "Priority scoring", "Quality filtering"],
    },
  ]

  const advancedCapabilities = [
    {
      icon: Clock,
      title: "Intelligent Time Management",
      description:
        "AI optimizes scheduling by analyzing meeting patterns, travel time, and productivity windows for maximum efficiency.",
      stats: "30% more efficient scheduling",
    },
    {
      icon: UserCheck,
      title: "Automated Confirmation",
      description:
        "Multi-step confirmation process with AI follow-up ensures appointments are confirmed and attendees are prepared.",
      stats: "95% confirmation rate",
    },
    {
      icon: BarChart3,
      title: "Scheduling Analytics",
      description: "Comprehensive insights into booking patterns, no-show rates, and team performance metrics.",
      stats: "Complete performance visibility",
    },
    {
      icon: TrendingUp,
      title: "Conversion Optimization",
      description:
        "AI continuously optimizes the booking process to increase conversion rates from inquiry to scheduled appointment.",
      stats: "3x higher booking rates",
    },
  ]

  const comparisonData = [
    {
      feature: "AI Booking Methods",
      successnow: "✓ Voice, SMS, chat booking with AI",
      calendly: "✗ Link-based booking only",
      hubspot: "✗ Basic meeting links, no AI",
    },
    {
      feature: "Lead Engagement",
      successnow: "✓ AI engages and qualifies during booking",
      calendly: "✗ Pure scheduling, no engagement",
      hubspot: "✗ No AI follow-up during booking",
    },
    {
      feature: "No-Show Prevention",
      successnow: "✓ AI-powered no-show reduction",
      calendly: "✓ Basic reminders only",
      hubspot: "✓ Standard reminder system",
    },
    {
      feature: "Round-Robin Distribution",
      successnow: "✓ AI-optimized team distribution",
      calendly: "✓ Basic round-robin available",
      hubspot: "✓ Team scheduling features",
    },
    {
      feature: "Conversion Focus",
      successnow: "✓ Books AND closes deals",
      calendly: "✗ Scheduling only, no closing",
      hubspot: "✗ Meeting booking, no AI closing",
    },
  ]

  const stats = [
    {
      icon: Target,
      stat: "85%",
      label: "No-Show Reduction",
      description: "AI reminders and optimization reduce no-shows",
    },
    {
      icon: Clock,
      stat: "24/7",
      label: "Booking Availability",
      description: "AI books appointments around the clock",
    },
    {
      icon: TrendingUp,
      stat: "3x",
      label: "Higher Conversion",
      description: "AI engagement vs static booking links",
    },
    {
      icon: Users,
      stat: "Multi-Channel",
      label: "Booking Methods",
      description: "Voice, SMS, chat, and web booking",
    },
  ]

  const benefits = [
    "AI books appointments via voice, SMS, and chat",
    "Round-robin scheduling with intelligent distribution",
    "AI reminders that reduce no-shows by 85%",
    "Smart qualification during booking process",
    "Multi-channel confirmation and follow-up",
    "Calendar integration with all major platforms",
    "Real-time availability checking",
    "Conversion-focused booking optimization",
  ]

  const industries = [
    {
      name: "Healthcare",
      benefit: "Reduce patient no-shows and optimize appointment scheduling",
    },
    {
      name: "Legal Services",
      benefit: "Book consultations and qualify prospects automatically",
    },
    {
      name: "Real Estate",
      benefit: "Schedule property showings and buyer consultations",
    },
    {
      name: "Fitness & Wellness",
      benefit: "Book training sessions and reduce class no-shows",
    },
    {
      name: "Professional Services",
      benefit: "Schedule client meetings and discovery calls",
    },
    {
      name: "Sales Teams",
      benefit: "Book qualified demos and sales presentations",
    },
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <StarryBackground />

      <StructuredData schema={pageSchema} />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-8 px-6 py-2 text-sm font-medium border-cyan-400/30 text-cyan-400 bg-cyan-400/10 hover:border-pink-500/50 hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-300"
            >
              Scheduling & Appointments
            </Badge>

            <div className="mb-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg backdrop-blur-sm max-w-4xl mx-auto">
              <div className="text-cyan-400 font-semibold text-sm mb-2">ANSWER:</div>
              <p className="text-white font-bold text-lg leading-tight">
                SuccessNOW.ai's Scheduling & Appointments system uses AI to book appointments via voice, SMS, and chat
                with round-robin scheduling, AI reminders, and automated no-show reduction - going beyond basic booking
                to actually close deals.
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Scheduling &
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Appointments
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-cyan-400 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
              AI that books appointments and closes deals, not just schedules meetings
            </p>

            <VoiceSnippetPlayer
              text="AI books appointments via voice, SMS, and chat with round-robin scheduling, AI reminders, and automated no-show reduction that actually closes deals."
              category="scheduling-hero"
              variant="compact"
            />
          </div>
        </section>

        {/* Booking Channels */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Multi-Channel AI Booking</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI books appointments through every channel your customers prefer
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {bookingChannels.map((channel, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center transition-all duration-300">
                        <channel.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">{channel.title}</h3>
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed mb-6">{channel.description}</p>

                    <div className="space-y-2">
                      {channel.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400 group-hover:text-pink-400 transition-colors duration-300" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Core Scheduling Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Intelligent appointment management that goes beyond basic scheduling
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {coreFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center transition-all duration-300">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed mb-6">{feature.description}</p>

                    <div className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400 group-hover:text-pink-400 transition-colors duration-300" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Capabilities */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Advanced AI Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Intelligent features that optimize every aspect of appointment management
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {advancedCapabilities.map((capability, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center transition-all duration-300">
                        <capability.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">{capability.title}</h3>
                        <Badge
                          variant="outline"
                          className="border-cyan-400/30 text-cyan-400 bg-cyan-400/10 group-hover:border-pink-500/50 group-hover:text-pink-400 group-hover:bg-pink-500/10 transition-all duration-300 text-xs"
                        >
                          {capability.stats}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed">{capability.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Scheduling Performance</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Measurable results from AI-powered appointment management
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group text-center"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">{stat.stat}</div>
                    <div className="text-cyan-400 font-semibold mb-2">{stat.label}</div>
                    <p className="text-gray-300 text-sm">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Industry Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI scheduling solutions tailored for different business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                    <p className="text-gray-300 text-sm">{industry.benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">SuccessNOW vs Scheduling Tools</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Why SuccessNOW wins: Calendly books, SuccessNOW books and closes
              </p>
            </div>

            <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-6 text-white font-semibold">Feature</th>
                        <th className="text-left p-6 text-cyan-400 font-semibold">SuccessNOW.ai</th>
                        <th className="text-left p-6 text-gray-400 font-semibold">Calendly</th>
                        <th className="text-left p-6 text-gray-400 font-semibold">HubSpot Meetings</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                          <td className="p-6 text-white font-medium">{row.feature}</td>
                          <td className="p-6 text-cyan-400">{row.successnow}</td>
                          <td className="p-6 text-gray-400">{row.calendly}</td>
                          <td className="p-6 text-gray-400">{row.hubspot}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Key Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need for intelligent appointment management
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-700"
                >
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Start Booking Smarter Today</h2>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Let AI handle your appointment booking while you focus on closing deals
              </p>

              <VoiceSnippetPlayer
                text="Start booking smarter today with AI that handles appointments via voice, SMS, and chat while reducing no-shows and increasing conversions."
                category="scheduling-cta"
                variant="compact"
              />

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-pink-500 hover:to-purple-600 text-white px-8 py-3 shadow-[0_0_20px_rgba(0,191,255,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all duration-300"
                  asChild
                >
                  <Link href="/signup">
                    <Zap className="w-5 h-5 mr-2" />
                    Start AI Scheduling
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-400/50 text-cyan-400 hover:bg-pink-500/10 hover:border-pink-500/50 hover:text-pink-400 px-8 py-3 bg-transparent hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all duration-300"
                  asChild
                >
                  <Link href="/features">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Explore All Features
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SchedulingClientPage
