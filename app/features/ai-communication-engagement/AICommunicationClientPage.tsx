"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import StarryBackground from "@/components/ui/starry-background"
import {
  MessageSquare,
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Facebook,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  Bot,
  Clock,
  Target,
  Users,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import { VoiceSnippetPlayer } from "@/components/voice/voice-snippet-player"
import { StructuredData, generateWebPageSchema } from "@/components/seo/enhanced-structured-data"

const AICommunicationClientPage = () => {
  const pageSchema = generateWebPageSchema(
    "AI Communication & Engagement - 24/7 Omnichannel AI Agents | SuccessNOW.ai",
    "AI Voice & Chat Agents handle calls, SMS, email, WhatsApp, Facebook/IG DMs, and web chat with smart missed-call text-back. All-in-One Inbox with $0.07/min AI voice calls.",
    "https://successnow.ai/features/ai-communication-engagement",
    [
      { name: "AI Voice & Chat Agents", voiceData: undefined },
      { name: "Omnichannel Communication", voiceData: undefined },
      { name: "Smart Missed-Call Text-Back", voiceData: undefined },
      { name: "All-in-One Inbox", voiceData: undefined },
    ],
  )

  const channels = [
    {
      icon: Phone,
      title: "AI Voice Calls",
      description: "Instant AI voice response with sales intelligence",
      price: "$0.07/min",
    },
    {
      icon: MessageSquare,
      title: "SMS/MMS",
      description: "Smart text messaging with multimedia support",
      price: "Included",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Automated email responses and follow-ups",
      price: "Included",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Global messaging platform integration",
      price: "Included",
    },
    {
      icon: Facebook,
      title: "Facebook DMs",
      description: "Facebook Messenger automation",
      price: "Included",
    },
    {
      icon: Instagram,
      title: "Instagram DMs",
      description: "Instagram direct message handling",
      price: "Included",
    },
    {
      icon: Globe,
      title: "Web Chat",
      description: "Website chat widget integration",
      price: "Included",
    },
  ]

  const keyFeatures = [
    {
      icon: MessageSquare,
      title: "All-in-One Inbox",
      description:
        "True omnichannel communication hub where all conversations from every platform converge into a single, unified interface.",
      benefits: ["Unified conversation view", "Context preservation", "Seamless handoffs"],
    },
    {
      icon: Phone,
      title: "Smart Missed-Call Text-Back",
      description:
        "Automatically sends personalized text messages to missed calls, ensuring no lead is ever lost to voicemail.",
      benefits: ["Instant text response", "Personalized messaging", "Lead recovery"],
    },
    {
      icon: Bot,
      title: "AI Sales Intelligence",
      description:
        "Advanced AI analyzes conversations to provide sales insights, lead scoring, and next-best-action recommendations.",
      benefits: ["Conversation analysis", "Lead scoring", "Action recommendations"],
    },
    {
      icon: Clock,
      title: "24/7 Instant Response",
      description:
        "AI agents respond within seconds across all channels, ensuring prospects never wait and engagement stays high.",
      benefits: ["3-second response time", "Never miss a lead", "Always available"],
    },
  ]

  const comparisonData = [
    {
      feature: "AI Voice Agents",
      successnow: "✓ Native AI voice with sales intelligence",
      competitors: "✗ No native AI voice (need third-party)",
    },
    {
      feature: "Missed-Call Text-Back",
      successnow: "✓ Smart automated text-back",
      competitors: "✗ Not built-in",
    },
    {
      feature: "Omnichannel Inbox",
      successnow: "✓ True unified inbox",
      competitors: "✗ Fragmented across add-ons",
    },
    {
      feature: "AI Communication",
      successnow: "✓ Voice + text + visual AI",
      competitors: "✗ Text-focused only",
    },
    {
      feature: "Pricing",
      successnow: "✓ $0.07/min all-inclusive",
      competitors: "✗ Multiple expensive add-ons",
    },
  ]

  const stats = [
    {
      icon: Target,
      stat: "97%",
      label: "Lead Drop-off Prevented",
      description: "Instant response prevents typical lead abandonment",
    },
    {
      icon: Clock,
      stat: "3 sec",
      label: "Average Response Time",
      description: "Lightning-fast AI engagement across all channels",
    },
    {
      icon: Users,
      stat: "7+",
      label: "Communication Channels",
      description: "All major platforms unified in one system",
    },
    {
      icon: TrendingUp,
      stat: "90%",
      label: "Cost Reduction",
      description: "Compared to traditional communication tools",
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
              AI Communication & Engagement
            </Badge>

            <div className="mb-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg backdrop-blur-sm max-w-4xl mx-auto">
              <div className="text-cyan-400 font-semibold text-sm mb-2">ANSWER:</div>
              <p className="text-white font-bold text-lg leading-tight">
                SuccessNOW.ai's AI Communication & Engagement system handles calls, SMS, email, WhatsApp, Facebook/IG
                DMs, and web chat through a unified AI-powered platform with smart missed-call text-back and instant
                engagement across all channels.
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              AI Communication &
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Engagement
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-cyan-400 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
              24/7 omnichannel AI agents that own the full conversation layer for instant engagement
            </p>

            <VoiceSnippetPlayer
              text="AI Voice and Chat Agents handle calls, SMS, email, WhatsApp, Facebook and Instagram DMs, and web chat with smart missed-call text-back, ensuring no lead is ever lost."
              category="ai-communication-hero"
              variant="compact"
            />
          </div>
        </section>

        {/* Communication Channels */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">All Communication Channels Unified</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                One AI system handles every way customers reach out to your business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {channels.map((channel, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                      <channel.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{channel.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{channel.description}</p>
                    <Badge
                      variant="outline"
                      className="border-cyan-400/30 text-cyan-400 bg-cyan-400/10 group-hover:border-pink-500/50 group-hover:text-pink-400 group-hover:bg-pink-500/10 transition-all duration-300"
                    >
                      {channel.price}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Key Communication Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI capabilities that transform how you engage with prospects and customers
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {keyFeatures.map((feature, index) => (
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

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Communication Performance</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Measurable results that prove the power of AI-driven communication
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">SuccessNOW vs Competitors</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Why SuccessNOW wins: Owns the full conversation layer with instant engagement
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
                        <th className="text-left p-6 text-gray-400 font-semibold">HubSpot / Salesforce</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                          <td className="p-6 text-white font-medium">{row.feature}</td>
                          <td className="p-6 text-cyan-400">{row.successnow}</td>
                          <td className="p-6 text-gray-400">{row.competitors}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Never Miss Another Lead</h2>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Start capturing and engaging every prospect across all channels with AI that never sleeps
              </p>

              <VoiceSnippetPlayer
                text="Never miss another lead with SuccessNOW.ai's AI Communication and Engagement system that handles all channels with instant response and smart automation."
                category="ai-communication-cta"
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
                    Start AI Communication
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

export default AICommunicationClientPage
