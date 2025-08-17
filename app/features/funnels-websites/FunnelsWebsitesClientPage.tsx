"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import StarryBackground from "@/components/ui/starry-background"
import {
  Globe,
  MousePointer,
  BarChart3,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  Bot,
  Phone,
  Target,
  TrendingUp,
  Palette,
  Settings,
  BookOpen,
  Crown,
} from "lucide-react"
import Link from "next/link"
import { VoiceSnippetPlayer } from "@/components/voice/voice-snippet-player"
import { StructuredData, generateWebPageSchema } from "@/components/seo/enhanced-structured-data"

const FunnelsWebsitesClientPage = () => {
  const pageSchema = generateWebPageSchema(
    "Funnels & Websites - AI Smart Websites & Funnel Builder | SuccessNOW.ai",
    "AI Smart Websites with live AI voice & chat, drag-and-drop funnel builder, AI-powered A/B testing, and membership & course hosting. Funnels + websites + AI engagement in one system.",
    "https://successnow.ai/features/funnels-websites",
    [
      { name: "AI Smart Websites", voiceData: undefined },
      { name: "Drag-and-Drop Funnel Builder", voiceData: undefined },
      { name: "AI-Powered A/B Testing", voiceData: undefined },
      { name: "Membership & Course Hosting", voiceData: undefined },
    ],
  )

  const websiteFeatures = [
    {
      icon: Globe,
      title: "AI Smart Websites",
      description: "Intelligent websites with built-in AI voice and chat engagement",
      features: ["Live AI voice integration", "Smart chat widgets", "Responsive design"],
    },
    {
      icon: MousePointer,
      title: "Drag-and-Drop Builder",
      description: "Intuitive funnel builder with professional templates and components",
      features: ["Visual editor", "Pre-built templates", "Mobile optimization"],
    },
    {
      icon: BarChart3,
      title: "AI-Powered A/B Testing",
      description: "Automated testing and optimization for maximum conversion rates",
      features: ["Automatic testing", "Performance analytics", "Conversion optimization"],
    },
    {
      icon: Users,
      title: "Membership & Courses",
      description: "Complete platform for hosting memberships and online courses",
      features: ["Member portals", "Course delivery", "Progress tracking"],
    },
  ]

  const coreCapabilities = [
    {
      icon: Bot,
      title: "AI Engagement Integration",
      description:
        "Every website and funnel comes with built-in AI voice and chat agents that engage visitors instantly and never let leads slip away.",
      benefits: ["Instant visitor engagement", "24/7 lead capture", "Seamless AI integration"],
    },
    {
      icon: Target,
      title: "Conversion-Optimized Design",
      description:
        "AI analyzes visitor behavior and automatically optimizes layouts, copy, and calls-to-action for maximum conversion rates.",
      benefits: ["Behavioral analysis", "Auto-optimization", "Higher conversion rates"],
    },
    {
      icon: Settings,
      title: "Complete Funnel Automation",
      description:
        "From landing page to checkout, every step is automated with AI-powered follow-up sequences and behavioral triggers.",
      benefits: ["End-to-end automation", "Behavioral triggers", "Smart follow-up sequences"],
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description:
        "Real-time analytics show exactly how visitors interact with your funnels, with AI insights for continuous improvement.",
      benefits: ["Real-time tracking", "AI-powered insights", "Continuous optimization"],
    },
  ]

  const advancedFeatures = [
    {
      icon: Phone,
      title: "Live AI Voice Integration",
      description:
        "Websites feature live AI voice agents that can speak to visitors, answer questions, and guide them through the sales process.",
      stats: "Instant voice engagement",
    },
    {
      icon: Palette,
      title: "Smart Design System",
      description:
        "AI automatically creates brand-consistent designs that match your business style and convert visitors.",
      stats: "Brand-consistent automation",
    },
    {
      icon: BookOpen,
      title: "Course & Membership Platform",
      description: "Built-in learning management system with progress tracking, assessments, and community features.",
      stats: "Complete LMS included",
    },
    {
      icon: Crown,
      title: "Premium Templates",
      description:
        "Access to professionally designed templates optimized for different industries and conversion goals.",
      stats: "Industry-optimized designs",
    },
  ]

  const comparisonData = [
    {
      feature: "AI Engagement",
      successnow: "✓ Built-in AI voice & chat on every page",
      clickfunnels: "✗ Funnels only, no AI engagement",
      hubspot: "✗ No AI-optimized funnels",
    },
    {
      feature: "Website + Funnels",
      successnow: "✓ Complete websites + funnels integrated",
      clickfunnels: "✗ Funnels only, separate website needed",
      hubspot: "✓ Solid websites, but no AI-optimized funnels",
    },
    {
      feature: "Course Hosting",
      successnow: "✓ Built-in membership & course platform",
      clickfunnels: "✗ Limited course features",
      hubspot: "✗ Requires extra tools for courses",
    },
    {
      feature: "AI Optimization",
      successnow: "✓ AI-powered A/B testing & optimization",
      clickfunnels: "✗ Manual optimization only",
      hubspot: "✗ Basic A/B testing, not AI-driven",
    },
    {
      feature: "Lead Engagement",
      successnow: "✓ AI agents engage every visitor",
      clickfunnels: "✗ Static funnels, no engagement",
      hubspot: "✗ No AI engagement on pages",
    },
  ]

  const stats = [
    {
      icon: Target,
      stat: "3x",
      label: "Higher Conversions",
      description: "AI-optimized funnels vs static pages",
    },
    {
      icon: TrendingUp,
      stat: "24/7",
      label: "AI Optimization",
      description: "Continuous testing and improvement",
    },
    {
      icon: Users,
      stat: "All-in-One",
      label: "Platform Solution",
      description: "Websites + funnels + courses + AI",
    },
    {
      icon: BarChart3,
      stat: "Real-time",
      label: "Performance Tracking",
      description: "Instant analytics and insights",
    },
  ]

  const benefits = [
    "AI Smart Websites with live voice & chat engagement",
    "Drag-and-drop funnel builder with professional templates",
    "AI-powered A/B testing and optimization",
    "Membership & course hosting platform included",
    "Complete website + funnel integration",
    "Real-time performance analytics",
    "Mobile-optimized responsive design",
    "Brand-consistent automated design system",
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
              Funnels & Websites
            </Badge>

            <div className="mb-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg backdrop-blur-sm max-w-4xl mx-auto">
              <div className="text-cyan-400 font-semibold text-sm mb-2">ANSWER:</div>
              <p className="text-white font-bold text-lg leading-tight">
                SuccessNOW.ai's Funnels & Websites feature includes AI Smart Websites with live AI voice & chat,
                drag-and-drop funnel builder, AI-powered A/B testing, and membership & course hosting - all integrated
                in one system.
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Funnels &
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Websites
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-cyan-400 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
              AI-powered websites and funnels with built-in engagement and optimization
            </p>

            <VoiceSnippetPlayer
              text="AI Smart Websites with live AI voice and chat, drag-and-drop funnel builder, AI-powered A/B testing, and membership course hosting - all in one integrated system."
              category="funnels-websites-hero"
              variant="compact"
            />
          </div>
        </section>

        {/* Website Features */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Complete Website & Funnel Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Four powerful components that create high-converting websites and funnels
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {websiteFeatures.map((feature, index) => (
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
                Intelligent features that make your websites and funnels work smarter
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
                Premium capabilities that set SuccessNOW apart from traditional website builders
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Performance Metrics</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Measurable results from AI-powered websites and funnels
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">SuccessNOW vs Website Builders</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Why SuccessNOW wins: Funnels + websites + AI engagement in one system
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
                        <th className="text-left p-6 text-gray-400 font-semibold">ClickFunnels</th>
                        <th className="text-left p-6 text-gray-400 font-semibold">HubSpot CMS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                          <td className="p-6 text-white font-medium">{row.feature}</td>
                          <td className="p-6 text-cyan-400">{row.successnow}</td>
                          <td className="p-6 text-gray-400">{row.clickfunnels}</td>
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
                Everything you need for high-converting websites and funnels
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Build Your AI-Powered Website</h2>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Create high-converting websites and funnels with built-in AI engagement and optimization
              </p>

              <VoiceSnippetPlayer
                text="Build your AI-powered website with smart funnels, live AI engagement, and automated optimization that converts visitors into customers."
                category="funnels-websites-cta"
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
                    Start Building
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

export default FunnelsWebsitesClientPage
