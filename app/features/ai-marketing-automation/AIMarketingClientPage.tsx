"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import StarryBackground from "@/components/ui/starry-background"
import {
  Mail,
  MessageSquare,
  Instagram,
  Facebook,
  Linkedin,
  Zap,
  CheckCircle,
  ArrowRight,
  Bot,
  Clock,
  Target,
  TrendingUp,
  Palette,
  Calendar,
  RefreshCw,
  BarChart3,
} from "lucide-react"
import Link from "next/link"
import { VoiceSnippetPlayer } from "@/components/voice/voice-snippet-player"
import { StructuredData, generateWebPageSchema } from "@/components/seo/enhanced-structured-data"

const AIMarketingClientPage = () => {
  const pageSchema = generateWebPageSchema(
    "AI Marketing Automation - Email, SMS & Social Media AI | SuccessNOW.ai",
    "Email + SMS campaigns with AI-written copy, AI Social Media Scheduler across FB, IG, TikTok, LinkedIn, AI Content Creation Engine, and reactivation campaigns built-in.",
    "https://successnow.ai/features/ai-marketing-automation",
    [
      { name: "AI Email & SMS Campaigns", voiceData: undefined },
      { name: "AI Social Media Scheduler", voiceData: undefined },
      { name: "AI Content Creation Engine", voiceData: undefined },
      { name: "Automated Reactivation Campaigns", voiceData: undefined },
    ],
  )

  const marketingChannels = [
    {
      icon: Mail,
      title: "Email Campaigns",
      description: "AI-written email sequences with personalization and optimization",
      features: ["AI copywriting", "Personalization", "A/B testing"],
    },
    {
      icon: MessageSquare,
      title: "SMS Marketing",
      description: "Automated text message campaigns with high engagement rates",
      features: ["MMS support", "Timing optimization", "Compliance built-in"],
    },
    {
      icon: Facebook,
      title: "Facebook Posts",
      description: "Automated Facebook content creation and scheduling",
      features: ["AI content", "Optimal timing", "Engagement tracking"],
    },
    {
      icon: Instagram,
      title: "Instagram Content",
      description: "Visual content creation and automated Instagram posting",
      features: ["Image generation", "Story automation", "Hashtag optimization"],
    },
    {
      icon: Linkedin,
      title: "LinkedIn Marketing",
      description: "Professional content creation and B2B lead generation",
      features: ["Professional tone", "Industry targeting", "Connection automation"],
    },
    {
      icon: Target,
      title: "TikTok Content",
      description: "Trending content creation for viral marketing campaigns",
      features: ["Trend analysis", "Video concepts", "Hashtag research"],
    },
  ]

  const coreFeatures = [
    {
      icon: Palette,
      title: "AI Content Creation Engine",
      description:
        "Generates marketing content instantly across all channels with brand-consistent messaging and optimized copy.",
      benefits: ["Instant content generation", "Brand consistency", "Multi-channel optimization"],
    },
    {
      icon: Calendar,
      title: "AI Social Media Scheduler",
      description:
        "Automatically schedules and posts content across FB, IG, TikTok, LinkedIn with optimal timing for maximum engagement.",
      benefits: ["Cross-platform scheduling", "Optimal timing", "Engagement optimization"],
    },
    {
      icon: RefreshCw,
      title: "Reactivation Campaigns",
      description:
        "Built-in automated campaigns that re-engage dormant leads and customers with personalized messaging.",
      benefits: ["Automated re-engagement", "Personalized messaging", "Win-back sequences"],
    },
    {
      icon: TrendingUp,
      title: "Auto-Optimized Drip Campaigns",
      description: "AI continuously optimizes email and SMS sequences based on engagement data and conversion metrics.",
      benefits: ["Continuous optimization", "Performance tracking", "Conversion focus"],
    },
  ]

  const automationCapabilities = [
    {
      icon: Bot,
      title: "AI Copywriting",
      description:
        "Advanced AI writes compelling marketing copy that converts, adapting tone and style for each channel and audience.",
      stats: "Human-quality copy at scale",
    },
    {
      icon: Clock,
      title: "Smart Scheduling",
      description:
        "AI analyzes audience behavior to determine optimal posting times and frequency for maximum engagement.",
      stats: "3x higher engagement rates",
    },
    {
      icon: Target,
      title: "Behavioral Triggers",
      description: "Automated campaigns triggered by user behavior, ensuring relevant messaging at the perfect moment.",
      stats: "5x better conversion rates",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Real-time analytics and insights that help optimize campaigns and improve ROI across all channels.",
      stats: "Complete performance visibility",
    },
  ]

  const comparisonData = [
    {
      feature: "Email + SMS Integration",
      successnow: "✓ Built-in omnichannel automation",
      hubspot: "✓ Strong email, weak SMS (requires add-ons)",
      jasper: "✗ No automation pipelines or CRM tie-in",
    },
    {
      feature: "Social Media Automation",
      successnow: "✓ AI-driven across all platforms",
      hubspot: "✓ Basic scheduling, not AI-driven",
      jasper: "✗ Content only, no scheduling",
    },
    {
      feature: "AI Content Creation",
      successnow: "✓ Built-in with automation",
      hubspot: "✗ Limited AI content features",
      jasper: "✓ Great AI copy, but no automation",
    },
    {
      feature: "Reactivation Campaigns",
      successnow: "✓ Built-in automated sequences",
      hubspot: "✗ Manual setup required",
      jasper: "✗ No reactivation capabilities",
    },
    {
      feature: "CRM Integration",
      successnow: "✓ Native CRM with full automation",
      hubspot: "✓ Native but fragmented",
      jasper: "✗ No CRM integration",
    },
  ]

  const stats = [
    {
      icon: Target,
      stat: "5x",
      label: "Higher Conversion",
      description: "AI-optimized campaigns vs manual marketing",
    },
    {
      icon: Clock,
      stat: "24/7",
      label: "Automated Marketing",
      description: "Continuous campaign optimization",
    },
    {
      icon: TrendingUp,
      stat: "90%",
      label: "Time Savings",
      description: "Automated content creation and scheduling",
    },
    {
      icon: BarChart3,
      stat: "All-in-One",
      label: "Platform Integration",
      description: "No extra subscriptions needed",
    },
  ]

  const benefits = [
    "Built-in omnichannel automation + AI content creation",
    "Email + SMS campaigns with AI-written copy",
    "AI Social Media Scheduler across all platforms",
    "Reactivation campaigns automatically included",
    "Drip campaigns auto-optimized by AI",
    "No extra subscriptions or tools needed",
    "Complete performance analytics included",
    "Behavioral trigger automation built-in",
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
              AI Marketing Automation
            </Badge>

            <div className="mb-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg backdrop-blur-sm max-w-4xl mx-auto">
              <div className="text-cyan-400 font-semibold text-sm mb-2">ANSWER:</div>
              <p className="text-white font-bold text-lg leading-tight">
                SuccessNOW.ai's AI Marketing Automation includes email + SMS campaigns with AI-written copy, AI Social
                Media Scheduler across FB, IG, TikTok, LinkedIn, AI Content Creation Engine, and built-in reactivation
                campaigns - all in one platform.
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              AI Marketing
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Automation
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-cyan-400 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
              Complete marketing automation with AI content creation and scheduling
            </p>

            <VoiceSnippetPlayer
              text="AI Marketing Automation includes email and SMS campaigns with AI-written copy, social media scheduling across all platforms, and built-in reactivation campaigns."
              category="ai-marketing-hero"
              variant="compact"
            />
          </div>
        </section>

        {/* Marketing Channels */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">All Marketing Channels Automated</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI-powered automation across every major marketing channel
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {marketingChannels.map((channel, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center mb-4 transition-all duration-300">
                      <channel.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{channel.description}</p>

                    <div className="space-y-1">
                      {channel.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-cyan-400 group-hover:text-pink-400 transition-colors duration-300 flex-shrink-0" />
                          <span className="text-gray-400 text-xs">{feature}</span>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Core Marketing Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Four powerful AI systems that automate your entire marketing operation
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

        {/* Automation Capabilities */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Advanced Automation Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Intelligent marketing automation that works while you sleep
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {automationCapabilities.map((capability, index) => (
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Marketing Performance</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Measurable results from AI-driven marketing automation
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

        {/* Comparison Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">SuccessNOW vs Marketing Tools</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Why SuccessNOW wins: Built-in omnichannel automation + AI content creation + scheduling
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
                        <th className="text-left p-6 text-gray-400 font-semibold">HubSpot</th>
                        <th className="text-left p-6 text-gray-400 font-semibold">Jasper/Copy.ai</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                          <td className="p-6 text-white font-medium">{row.feature}</td>
                          <td className="p-6 text-cyan-400">{row.successnow}</td>
                          <td className="p-6 text-gray-400">{row.hubspot}</td>
                          <td className="p-6 text-gray-400">{row.jasper}</td>
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
                Everything you need for complete marketing automation
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Automate Your Marketing Today</h2>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Start creating and scheduling AI-powered marketing campaigns across all channels
              </p>

              <VoiceSnippetPlayer
                text="Automate your marketing today with AI-powered campaigns across email, SMS, and social media - all with built-in content creation and optimization."
                category="ai-marketing-cta"
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
                    Start AI Marketing
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

export default AIMarketingClientPage
