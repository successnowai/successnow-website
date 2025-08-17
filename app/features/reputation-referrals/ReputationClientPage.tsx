"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import StarryBackground from "@/components/ui/starry-background"
import {
  Star,
  Users,
  Bot,
  Gift,
  Zap,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  TrendingUp,
  Target,
  BarChart3,
  Shield,
  Award,
  RefreshCw,
  Heart,
} from "lucide-react"
import Link from "next/link"
import { VoiceSnippetPlayer } from "@/components/voice/voice-snippet-player"
import { StructuredData, generateWebPageSchema } from "@/components/seo/enhanced-structured-data"

const ReputationClientPage = () => {
  const pageSchema = generateWebPageSchema(
    "Reputation & Referrals - AI Review Engine & Referral Bot | SuccessNOW.ai",
    "AI Review Engine automates 5-star review requests, Referral Bot manages rewards, and AI monitors & replies to reviews. Reviews + referrals inside CRM for higher retention & growth.",
    "https://successnow.ai/features/reputation-referrals",
    [
      { name: "AI Review Engine", voiceData: undefined },
      { name: "Automated Review Requests", voiceData: undefined },
      { name: "Referral Bot Management", voiceData: undefined },
      { name: "AI Review Monitoring", voiceData: undefined },
    ],
  )

  const reputationFeatures = [
    {
      icon: Star,
      title: "AI Review Engine",
      description: "Automatically requests 5-star reviews from satisfied customers at optimal moments",
      features: ["Smart timing", "Personalized requests", "Multi-platform reviews"],
    },
    {
      icon: Gift,
      title: "Referral Bot",
      description: "Manages referral rewards and tracks referral performance automatically",
      features: ["Automated rewards", "Referral tracking", "Performance analytics"],
    },
    {
      icon: Bot,
      title: "AI Review Monitoring",
      description: "Monitors and responds to reviews across all platforms with intelligent replies",
      features: ["24/7 monitoring", "Smart responses", "Sentiment analysis"],
    },
    {
      icon: Shield,
      title: "Reputation Protection",
      description: "Proactively manages your online reputation with AI-powered damage control",
      features: ["Issue detection", "Response automation", "Crisis management"],
    },
  ]

  const coreCapabilities = [
    {
      icon: Target,
      title: "Smart Review Timing",
      description:
        "AI analyzes customer interactions and satisfaction signals to request reviews at the perfect moment for maximum positive response.",
      benefits: ["Optimal timing analysis", "Satisfaction scoring", "Higher review rates"],
    },
    {
      icon: Users,
      title: "Referral Automation",
      description:
        "Complete referral program automation that tracks referrals, manages rewards, and nurtures referral relationships.",
      benefits: ["Automated tracking", "Reward management", "Relationship nurturing"],
    },
    {
      icon: MessageSquare,
      title: "Intelligent Review Responses",
      description:
        "AI crafts personalized responses to reviews that maintain your brand voice while addressing customer concerns professionally.",
      benefits: ["Brand-consistent responses", "Professional tone", "Issue resolution"],
    },
    {
      icon: TrendingUp,
      title: "Growth Optimization",
      description:
        "Continuous optimization of review and referral strategies based on performance data and customer behavior patterns.",
      benefits: ["Performance optimization", "Behavior analysis", "Strategy refinement"],
    },
  ]

  const advancedFeatures = [
    {
      icon: Award,
      title: "Multi-Platform Management",
      description:
        "Manages reviews across Google, Facebook, Yelp, industry-specific platforms, and referrals through multiple channels.",
      stats: "All major platforms covered",
    },
    {
      icon: BarChart3,
      title: "Reputation Analytics",
      description:
        "Comprehensive analytics showing review trends, referral performance, and reputation impact on business.",
      stats: "Complete performance insights",
    },
    {
      icon: RefreshCw,
      title: "Automated Follow-Up",
      description:
        "Smart follow-up sequences for both reviews and referrals that increase participation and engagement rates.",
      stats: "3x higher engagement",
    },
    {
      icon: Heart,
      title: "Customer Satisfaction Tracking",
      description:
        "Tracks customer satisfaction throughout their journey to identify the best moments for review and referral requests.",
      stats: "Journey-based optimization",
    },
  ]

  const comparisonData = [
    {
      feature: "Review + Referral Integration",
      successnow: "✓ Reviews + referrals inside CRM",
      podium: "✗ Reviews only, no CRM tie-in",
      birdeye: "✗ Separate cost, no referrals automation",
    },
    {
      feature: "AI Review Responses",
      successnow: "✓ AI monitors & replies automatically",
      podium: "✓ Basic review management",
      birdeye: "✓ Review response features",
    },
    {
      feature: "Referral Management",
      successnow: "✓ Automated referral bot with rewards",
      podium: "✗ No referral capabilities",
      birdeye: "✗ No referral system",
    },
    {
      feature: "CRM Integration",
      successnow: "✓ Native CRM with customer journey",
      podium: "✗ Limited CRM integration",
      birdeye: "✗ Separate system, no CRM tie-in",
    },
    {
      feature: "Cost Structure",
      successnow: "✓ Included in platform",
      podium: "✗ Separate subscription cost",
      birdeye: "✗ Expensive standalone solution",
    },
  ]

  const stats = [
    {
      icon: Star,
      stat: "5x",
      label: "More 5-Star Reviews",
      description: "AI timing vs manual review requests",
    },
    {
      icon: Users,
      stat: "300%",
      label: "Referral Increase",
      description: "Automated referral management",
    },
    {
      icon: TrendingUp,
      stat: "24/7",
      label: "Reputation Monitoring",
      description: "Continuous AI-powered monitoring",
    },
    {
      icon: Target,
      stat: "Higher ROI",
      label: "Customer Retention",
      description: "Reviews + referrals = growth",
    },
  ]

  const benefits = [
    "AI Review Engine automates 5-star review requests",
    "Referral Bot manages rewards and tracking",
    "AI monitors & replies to reviews 24/7",
    "Reviews + referrals integrated in CRM",
    "Smart timing for maximum positive response",
    "Multi-platform review management",
    "Automated follow-up sequences",
    "Complete reputation analytics",
  ]

  const industries = [
    {
      name: "Healthcare",
      benefit: "Build patient trust with automated review requests and referral programs",
    },
    {
      name: "Legal Services",
      benefit: "Enhance professional reputation and generate client referrals",
    },
    {
      name: "Real Estate",
      benefit: "Build social proof and generate referrals from satisfied clients",
    },
    {
      name: "Restaurants",
      benefit: "Increase online ratings and word-of-mouth marketing",
    },
    {
      name: "Professional Services",
      benefit: "Build credibility and generate new business through referrals",
    },
    {
      name: "E-commerce",
      benefit: "Increase product reviews and customer referral programs",
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
              Reputation & Referrals
            </Badge>

            <div className="mb-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg backdrop-blur-sm max-w-4xl mx-auto">
              <div className="text-cyan-400 font-semibold text-sm mb-2">ANSWER:</div>
              <p className="text-white font-bold text-lg leading-tight">
                SuccessNOW.ai's Reputation & Referrals system includes an AI Review Engine that automates 5-star review
                requests, a Referral Bot that manages rewards, and AI that monitors & replies to reviews - all
                integrated inside your CRM for higher retention & growth.
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Reputation &
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Referrals
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-cyan-400 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
              AI-powered reputation management and referral automation for sustainable growth
            </p>

            <VoiceSnippetPlayer
              text="AI Review Engine automates 5-star review requests, Referral Bot manages rewards, and AI monitors and replies to reviews - all integrated for higher retention and growth."
              category="reputation-hero"
              variant="compact"
            />
          </div>
        </section>

        {/* Reputation Features */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Complete Reputation Management</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Four powerful AI systems that build and protect your business reputation
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {reputationFeatures.map((feature, index) => (
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
                      {feature.features.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400 group-hover:text-pink-400 transition-colors duration-300" />
                          <span className="text-gray-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Core AI Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Intelligent features that maximize your reputation and referral success
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {coreCapabilities.map((capability, index) => (
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
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed mb-6">{capability.description}</p>

                    <div className="space-y-2">
                      {capability.benefits.map((benefit, idx) => (
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

        {/* Advanced Features */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Advanced Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Premium capabilities that deliver exceptional reputation and referral results
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {advancedFeatures.map((feature, index) => (
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
                        <Badge
                          variant="outline"
                          className="border-cyan-400/30 text-cyan-400 bg-cyan-400/10 group-hover:border-pink-500/50 group-hover:text-pink-400 group-hover:bg-pink-500/10 transition-all duration-300 text-xs"
                        >
                          {feature.stats}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Reputation Performance</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Measurable results from AI-powered reputation and referral management
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
                Reputation and referral solutions tailored for different business needs
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">SuccessNOW vs Reputation Tools</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Why SuccessNOW wins: Reviews + referrals inside CRM = higher retention & growth
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
                        <th className="text-left p-6 text-gray-400 font-semibold">Podium</th>
                        <th className="text-left p-6 text-gray-400 font-semibold">Birdeye</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                          <td className="p-6 text-white font-medium">{row.feature}</td>
                          <td className="p-6 text-cyan-400">{row.successnow}</td>
                          <td className="p-6 text-gray-400">{row.podium}</td>
                          <td className="p-6 text-gray-400">{row.birdeye}</td>
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
                Everything you need for comprehensive reputation and referral management
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Build Your Reputation Empire</h2>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Start generating 5-star reviews and referrals automatically with AI-powered reputation management
              </p>

              <VoiceSnippetPlayer
                text="Build your reputation empire with AI that automates 5-star review requests, manages referral rewards, and monitors your online reputation 24/7."
                category="reputation-cta"
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
                    Start Building Reputation
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

export default ReputationClientPage
