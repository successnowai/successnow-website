"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import StarryBackground from "@/components/ui/starry-background"
import {
  Database,
  Target,
  TrendingUp,
  Zap,
  CheckCircle,
  ArrowRight,
  Users,
  BarChart3,
  Settings,
  Clock,
  Brain,
  Workflow,
  Star,
} from "lucide-react"
import Link from "next/link"
import { VoiceSnippetPlayer } from "@/components/voice/voice-snippet-player"
import { StructuredData, generateWebPageSchema } from "@/components/seo/enhanced-structured-data"

const AICRMClientPage = () => {
  const pageSchema = generateWebPageSchema(
    "AI CRM & Pipelines - Automated Lead Management & Scoring | SuccessNOW.ai",
    "AI CRM organizes leads + conversations automatically with built-in AI Lead Scoring, pipelines with AI-suggested next steps, and automated tasks & workflows. No consultants needed.",
    "https://successnow.ai/features/ai-crm-pipelines",
    [
      { name: "AI CRM Organization", voiceData: undefined },
      { name: "AI Lead Scoring", voiceData: undefined },
      { name: "AI-Suggested Pipelines", voiceData: undefined },
      { name: "Automated Workflows", voiceData: undefined },
    ],
  )

  const crmFeatures = [
    {
      icon: Database,
      title: "AI Lead Organization",
      description: "Automatically organizes leads and conversations with intelligent categorization and tagging",
      benefits: ["Smart lead categorization", "Conversation history", "Contact enrichment"],
    },
    {
      icon: Star,
      title: "Built-in AI Lead Scoring",
      description: "Real-time lead scoring based on engagement, behavior, and conversion probability",
      benefits: ["Predictive scoring", "Behavior analysis", "Priority ranking"],
    },
    {
      icon: Target,
      title: "AI-Suggested Pipelines",
      description: "Intelligent pipeline management with AI-recommended next steps for every lead",
      benefits: ["Smart next actions", "Pipeline optimization", "Conversion tracking"],
    },
    {
      icon: Workflow,
      title: "Automated Tasks & Workflows",
      description: "Complete workflow automation that handles routine tasks and follow-ups automatically",
      benefits: ["Task automation", "Follow-up sequences", "Trigger-based actions"],
    },
  ]

  const crmCapabilities = [
    {
      icon: Brain,
      title: "Intelligent Lead Management",
      description:
        "AI automatically captures, enriches, and organizes every lead with complete conversation history and behavioral insights.",
      stats: "100% automated lead capture",
    },
    {
      icon: TrendingUp,
      title: "Predictive Lead Scoring",
      description:
        "Advanced AI analyzes engagement patterns, conversation sentiment, and behavioral data to score leads in real-time.",
      stats: "Real-time scoring updates",
    },
    {
      icon: Settings,
      title: "Smart Pipeline Management",
      description:
        "AI suggests optimal next steps, identifies bottlenecks, and automatically moves leads through your sales process.",
      stats: "AI-optimized conversions",
    },
    {
      icon: Clock,
      title: "Automated Follow-Up",
      description:
        "Never miss a follow-up with AI that schedules and executes personalized outreach based on lead behavior and timing.",
      stats: "Zero manual follow-ups",
    },
  ]

  const comparisonData = [
    {
      feature: "Setup Complexity",
      successnow: "✓ Out-of-the-box AI CRM ready in minutes",
      salesforce: "✗ Consultant-heavy, months of setup",
      hubspot: "✗ Multiple hubs, complex configuration",
    },
    {
      feature: "AI Lead Scoring",
      successnow: "✓ Built-in predictive scoring",
      salesforce: "✗ Einstein AI is expensive enterprise upgrade",
      hubspot: "✓ Basic scoring, not real-time predictive",
    },
    {
      feature: "Pipeline AI",
      successnow: "✓ AI-suggested next steps included",
      salesforce: "✗ Manual pipeline management",
      hubspot: "✓ Limited pipeline AI",
    },
    {
      feature: "Cost Structure",
      successnow: "✓ Flat rate, all features included",
      salesforce: "✗ Per-user pricing, expensive add-ons",
      hubspot: "✗ Multiple pricing tiers, limited features",
    },
    {
      feature: "Integration Complexity",
      successnow: "✓ Simple plug-and-play",
      salesforce: "✗ Developer-heavy integrations",
      hubspot: "✗ Multiple tools to connect",
    },
  ]

  const stats = [
    {
      icon: Users,
      stat: "100%",
      label: "Lead Capture Rate",
      description: "Every lead automatically captured and organized",
    },
    {
      icon: TrendingUp,
      stat: "3x",
      label: "Faster Setup",
      description: "Ready in minutes vs months for traditional CRMs",
    },
    {
      icon: Target,
      stat: "90%",
      label: "Task Automation",
      description: "Routine CRM tasks handled automatically",
    },
    {
      icon: BarChart3,
      stat: "Real-time",
      label: "Lead Scoring",
      description: "Instant updates based on AI analysis",
    },
  ]

  const benefits = [
    "No consultants, coders, or multiple hubs needed",
    "AI organizes leads + conversations automatically",
    "Built-in AI Lead Scoring with real-time updates",
    "Pipelines with AI-suggested next steps",
    "Automated tasks & workflows included",
    "Complete conversation history preserved",
    "Seamless integration with existing tools",
    "Predictive analytics and insights",
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
              AI CRM & Pipelines
            </Badge>

            <div className="mb-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg backdrop-blur-sm max-w-4xl mx-auto">
              <div className="text-cyan-400 font-semibold text-sm mb-2">ANSWER:</div>
              <p className="text-white font-bold text-lg leading-tight">
                SuccessNOW.ai's AI CRM organizes leads and conversations automatically with built-in AI Lead Scoring,
                pipelines with AI-suggested next steps, and automated workflows - no consultants, coders, or multiple
                hubs needed.
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              AI CRM &
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Pipelines
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-cyan-400 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
              Out-of-the-box AI-powered CRM that works from day one
            </p>

            <VoiceSnippetPlayer
              text="AI CRM organizes leads and conversations automatically with built-in AI Lead Scoring, pipelines with AI-suggested next steps, and automated workflows - no consultants needed."
              category="ai-crm-hero"
              variant="compact"
            />
          </div>
        </section>

        {/* Core CRM Features */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Core AI CRM Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Four powerful AI systems that transform your customer relationship management
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {crmFeatures.map((feature, index) => (
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

        {/* CRM Capabilities */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Advanced AI Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Intelligent automation that handles complex CRM tasks without human intervention
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {crmCapabilities.map((capability, index) => (
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">CRM Performance Metrics</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Measurable results that prove the power of AI-driven CRM automation
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">SuccessNOW vs Traditional CRMs</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Why SuccessNOW wins: Out-of-the-box AI-powered CRM with no consultants needed
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
                        <th className="text-left p-6 text-gray-400 font-semibold">Salesforce</th>
                        <th className="text-left p-6 text-gray-400 font-semibold">HubSpot</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                          <td className="p-6 text-white font-medium">{row.feature}</td>
                          <td className="p-6 text-cyan-400">{row.successnow}</td>
                          <td className="p-6 text-gray-400">{row.salesforce}</td>
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
                Everything you need for intelligent customer relationship management
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready for AI-Powered CRM?</h2>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Start organizing leads automatically with built-in AI scoring and intelligent pipeline management
              </p>

              <VoiceSnippetPlayer
                text="Ready for AI-powered CRM? Start organizing leads automatically with built-in AI scoring and intelligent pipeline management that works from day one."
                category="ai-crm-cta"
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
                    Start AI CRM
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

export default AICRMClientPage
