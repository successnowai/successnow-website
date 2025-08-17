"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import StarryBackground from "@/components/ui/starry-background"
import {
  Phone,
  Target,
  BarChart3,
  Zap,
  Clock,
  Globe,
  DollarSign,
  Users,
  Bot,
  Megaphone,
  Search,
  Settings,
  ArrowRight,
  CheckCircle,
  MessageSquare,
  Database,
  Mail,
  Calendar,
  Star,
  TrendingUp,
  Palette,
  LinkIcon,
} from "lucide-react"
import Link from "next/link"
import { VoiceSnippetPlayer } from "@/components/voice/voice-snippet-player"
import { StructuredData, generateWebPageSchema } from "@/components/seo/enhanced-structured-data"

const FeaturesClientPage = () => {
  const featuresPageSchema = generateWebPageSchema(
    "Features - Complete AI Sales & Marketing Suite | SuccessNOW.ai",
    "Discover SuccessNOW.ai's complete AI platform featuring 24/7 Voice AI agents, automated advertising, AI-driven SEO, and full-funnel automation that never misses a lead.",
    "https://successnow.ai/features",
    [
      { name: "Voice AI Sales Agent", voiceData: undefined },
      { name: "AI-Powered Advertising", voiceData: undefined },
      { name: "AI-Driven SEO", voiceData: undefined },
      { name: "AI Automation & Orchestration", voiceData: undefined },
      { name: "Complete AI Suite Benefits", voiceData: undefined },
    ],
  )

  const features = [
    {
      icon: Phone,
      title: "Voice AI Sales Agent",
      subtitle: "SalesBotNow.ai",
      description:
        "24/7 AI lead conversion that instantly answers calls and chats, qualifying prospects and booking appointments automatically.",
      href: "/features/voice-ai-agent",
      highlights: ["Instant 3-second response", "Omni-channel coverage", "$0.07/min pilot pricing"],
    },
    {
      icon: Megaphone,
      title: "AI-Powered Advertising",
      subtitle: "AdsNow.ai",
      description:
        "Fully AI-driven ad platform that plans, launches, and optimizes campaigns across all channels automatically.",
      href: "/features/ai-paid-ads",
      highlights: ["All major ad platforms", "AI-generated campaigns", "90% cost reduction"],
    },
    {
      icon: Search,
      title: "AI-Driven SEO",
      subtitle: "SEOExperts.ai",
      description:
        "Proprietary AI tools plus expert strategists boost search rankings 24/7 with continuous optimization.",
      href: "/features/ai-seo",
      highlights: ["24/7 optimization", "422% traffic increases", "Local & niche SEO"],
    },
    {
      icon: Settings,
      title: "AI Automation & Orchestration",
      subtitle: "SuccessNOW.ai",
      description:
        "The brain that ties everything together, orchestrating your entire sales funnel with intelligent automation.",
      href: "/features/ai-automation-orchestration",
      highlights: ["Complete marketing stack", "Seamless integrations", "24/7 AI workforce"],
    },
  ]

  const benefits = [
    {
      icon: Clock,
      title: "Never Miss a Lead",
      description:
        "AI agents instantly answer calls and chats day or night, capturing leads that would otherwise be lost.",
      stat: "~$50K/year saved from unanswered calls",
    },
    {
      icon: Globe,
      title: "Omni-Channel Outreach",
      description:
        "One AI handles voice calls, SMS/MMS, email, web chat, WhatsApp and social messages in a single system.",
      stat: "All channels unified",
    },
    {
      icon: Target,
      title: "Full-Funnel Automation",
      description: "AI builds websites, launches ad campaigns, and drives organic SEO automatically.",
      stat: "Complete automation",
    },
    {
      icon: BarChart3,
      title: "CRM & Workflow Integration",
      description: "Plugs into your CRM out-of-box and logs every interaction with real-time updates.",
      stat: "Seamless data flow",
    },
    {
      icon: Users,
      title: "Vertical-Specific Smart AI",
      description: "Pre-built workflows for key industries with AI that 'speaks the language' of your business.",
      stat: "Industry-optimized",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective (90% Off)",
      description: "One flat pilot price for the entire suite - often 90% less than competitors' rates.",
      stat: "90% cost savings",
    },
  ]

  const coreFeatures = [
    {
      icon: MessageSquare,
      title: "AI Communication & Engagement",
      description:
        "AI Voice & Chat Agents handle calls, SMS, email, WhatsApp, Facebook/IG DMs, and web chat with smart missed-call text-back.",
      href: "/features/ai-communication-engagement",
      highlights: ["All-in-One Inbox", "$0.07/min AI voice calls", "Smart missed-call text-back"],
    },
    {
      icon: Database,
      title: "AI CRM & Pipelines",
      description:
        "AI CRM organizes leads + conversations automatically with built-in AI Lead Scoring and pipelines with AI-suggested next steps.",
      href: "/features/ai-crm-pipelines",
      highlights: ["AI Lead Scoring", "Automated workflows", "Out-of-the-box AI-powered CRM"],
    },
    {
      icon: Mail,
      title: "AI Marketing Automation",
      description:
        "Email + SMS campaigns with AI-written copy, AI Social Media Scheduler, and AI Content Creation Engine for instant marketing content.",
      href: "/features/ai-marketing-automation",
      highlights: ["AI-written copy", "Social media scheduling", "Reactivation campaigns"],
    },
    {
      icon: Globe,
      title: "Funnels & Websites",
      description:
        "AI Smart Websites with live AI voice & chat, drag-and-drop funnel builder, AI-powered A/B testing, and membership hosting.",
      href: "/features/funnels-websites",
      highlights: ["AI Smart Websites", "Drag-and-drop builder", "Membership & course hosting"],
    },
    {
      icon: Calendar,
      title: "Scheduling & Appointments",
      description:
        "AI books appointments via voice, SMS, chat with round-robin scheduling, AI reminders, and automated no-show reduction.",
      href: "/features/scheduling-appointments",
      highlights: ["AI booking via voice/SMS/chat", "Round-robin scheduling", "No-show reduction"],
    },
    {
      icon: Star,
      title: "Reputation & Referrals",
      description:
        "AI Review Engine automates 5-star review requests, Referral Bot manages rewards, and AI monitors & replies to reviews.",
      href: "/features/reputation-referrals",
      highlights: ["Automated review requests", "Referral management", "AI review monitoring"],
    },
    {
      icon: TrendingUp,
      title: "Analytics & AI Insights",
      description:
        "Unified dashboard for ROI, funnels, ads, sales with AI Accountability Bot sending daily KPIs and conversation analytics.",
      href: "/features/analytics-ai-insights",
      highlights: ["Unified ROI dashboard", "AI Accountability Bot", "Conversation analytics"],
    },
    {
      icon: Palette,
      title: "White-Label & Reseller",
      description:
        "AgencyNOW Reseller Mode to start your own AI agency with custom branded apps and done-for-you bots, ads, and funnels.",
      href: "/features/white-label-reseller",
      highlights: ["Custom branded apps", "Done-for-you setup", "Ready-made AI agency"],
    },
    {
      icon: LinkIcon,
      title: "Integrations & Extensibility",
      description:
        "API + webhooks, Zapier + 3,000+ integrations with simple plug-and-play automation for seamless connectivity.",
      href: "/features/integrations-extensibility",
      highlights: ["API + webhooks", "3,000+ integrations", "Plug-and-play automation"],
    },
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <StarryBackground />

      <StructuredData schema={featuresPageSchema} />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-8 px-6 py-2 text-sm font-medium border-cyan-400/30 text-cyan-400 bg-cyan-400/10 hover:border-pink-500/50 hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-300"
            >
              Complete AI Suite
            </Badge>

            <div className="mb-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg backdrop-blur-sm max-w-4xl mx-auto">
              <div className="text-cyan-400 font-semibold text-sm mb-2">ANSWER:</div>
              <p className="text-white font-bold text-lg leading-tight">
                SuccessNOW.ai is an all-in-one AI platform that automatically captures, qualifies, and closes leads
                24/7. Instead of juggling separate tools, you get AI agents that talk, text, and email prospects, plus
                built-in ad campaigns and SEO – all from a single dashboard.
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Features – The Complete AI Sales &
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Marketing Suite
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-cyan-400 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
              All-in-one AI platform that automatically captures, qualifies, and closes leads 24/7
            </p>

            <div className="mb-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h3 className="text-cyan-400 font-semibold mb-2">• 24/7 AI Follow-Up</h3>
                  <p className="text-gray-300 text-sm">Never miss a lead with instant AI response</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h3 className="text-cyan-400 font-semibold mb-2">• Complete Marketing Stack</h3>
                  <p className="text-gray-300 text-sm">Ads, SEO, and lead capture work together</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h3 className="text-cyan-400 font-semibold mb-2">• 90% Cost Reduction</h3>
                  <p className="text-gray-300 text-sm">Fraction of the cost vs manual teams</p>
                </div>
              </div>
            </div>

            <VoiceSnippetPlayer
              text="SuccessNOW.ai is the complete AI sales and marketing suite that automatically captures, qualifies, and closes leads 24/7. Instead of juggling separate tools, you get AI agents that talk, text, and email prospects, plus built-in ad campaigns and SEO – all from a single dashboard."
              category="features-hero"
              variant="compact"
            />
          </div>
        </section>

        {/* Core Features */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Core AI Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Four powerful AI systems working together to transform your business
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
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
                        <Badge
                          variant="outline"
                          className="mb-3 border-cyan-400/30 text-cyan-400 bg-cyan-400/10 group-hover:border-pink-500/50 group-hover:text-pink-400 group-hover:bg-pink-500/10 transition-all duration-300"
                        >
                          {feature.subtitle}
                        </Badge>
                        <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed mb-6">{feature.description}</p>

                    <div className="space-y-2 mb-6">
                      {feature.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400 group-hover:text-pink-400 transition-colors duration-300" />
                          <span className="text-gray-300 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-pink-500 hover:to-purple-600 text-white shadow-[0_0_20px_rgba(0,191,255,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all duration-300"
                      asChild
                    >
                      <Link href={feature.href}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Complete Platform Features */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Complete Platform Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Nine comprehensive features that make SuccessNOW.ai the only all-in-one AI-first platform you need
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center transition-all duration-300">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{feature.description}</p>

                    <div className="space-y-1 mb-4">
                      {feature.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-cyan-400 group-hover:text-pink-400 transition-colors duration-300 flex-shrink-0" />
                          <span className="text-gray-400 text-xs">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-pink-500 hover:to-purple-600 text-white shadow-[0_0_20px_rgba(0,191,255,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all duration-300"
                      asChild
                    >
                      <Link href={feature.href}>
                        Learn More
                        <ArrowRight className="w-3 h-3 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Why Choose SuccessNOW.ai</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Six game-changing benefits that transform how you do business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center transition-all duration-300">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge
                        variant="outline"
                        className="border-cyan-400/30 text-cyan-400 bg-cyan-400/10 group-hover:border-pink-500/50 group-hover:text-pink-400 group-hover:bg-pink-500/10 transition-all duration-300 text-xs"
                      >
                        {benefit.stat}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Stop Leaving Leads on the Table?
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                See how every call, chat, and click is transformed into new customers with SuccessNOW.ai
              </p>

              <VoiceSnippetPlayer
                text="Ready to stop leaving leads on the table? See how every call, chat, and click is transformed into new customers with SuccessNOW.ai's complete AI sales and marketing suite."
                category="features-cta"
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
                    Get Started with SuccessNOW
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-400/50 text-cyan-400 hover:bg-pink-500/10 hover:border-pink-500/50 hover:text-pink-400 px-8 py-3 bg-transparent hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all duration-300"
                  asChild
                >
                  <Link href="/demo">
                    <Bot className="w-5 h-5 mr-2" />
                    Watch Demo
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

export default FeaturesClientPage
