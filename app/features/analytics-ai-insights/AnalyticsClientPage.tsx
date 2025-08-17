"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StarryBackground } from "@/components/ui/starry-background"
import { BarChart3, TrendingUp, Target, Brain, DollarSign, CheckCircle, ArrowRight, PieChart } from "lucide-react"
import Link from "next/link"

export default function AnalyticsClientPage() {
  const coreFeatures = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "AI Analytics Dashboard",
      description: "Real-time business intelligence with AI-powered insights across all channels and touchpoints.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Lead Scoring & Conversion Tracking",
      description: "AI automatically scores leads and tracks conversion paths from first touch to closed deal.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "ROI Tracking Across All Channels",
      description: "Complete attribution tracking showing exact ROI for ads, SEO, calls, texts, and emails.",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Predictive Analytics",
      description: "AI forecasts sales trends, identifies at-risk deals, and predicts customer lifetime value.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "AI suggests improvements and automatically optimizes campaigns based on performance data.",
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: "Complete Business Intelligence",
      description: "All-in-one dashboard combining website, CRM, marketing, and sales analytics in one view.",
    },
  ]

  const analyticsCapabilities = [
    {
      category: "Lead Intelligence",
      features: [
        "AI Lead Scoring (0-100 scale)",
        "Conversion probability predictions",
        "Lead source attribution",
        "Engagement timeline tracking",
        "Behavioral pattern analysis",
      ],
    },
    {
      category: "Revenue Analytics",
      features: [
        "Real-time revenue tracking",
        "Customer lifetime value (CLV)",
        "Average deal size trends",
        "Sales cycle analysis",
        "Revenue forecasting",
      ],
    },
    {
      category: "Marketing Performance",
      features: [
        "Multi-channel attribution",
        "Campaign ROI analysis",
        "Cost per acquisition (CPA)",
        "Conversion funnel analysis",
        "A/B test results",
      ],
    },
    {
      category: "Operational Insights",
      features: [
        "Team performance metrics",
        "Response time analytics",
        "Call/chat quality scores",
        "Appointment show rates",
        "Customer satisfaction trends",
      ],
    },
  ]

  const competitorComparison = [
    {
      feature: "Business Intelligence Scope",
      successnow: "Complete business view - leads, sales, marketing, operations",
      googleAnalytics: "Website traffic only",
      hubspot: "Limited to HubSpot ecosystem",
    },
    {
      feature: "AI-Powered Insights",
      successnow: "Built-in AI analysis and predictions",
      googleAnalytics: "Basic automated insights",
      hubspot: "Expensive AI add-ons required",
    },
    {
      feature: "Lead Scoring",
      successnow: "Automatic AI lead scoring included",
      googleAnalytics: "No lead scoring",
      hubspot: "$800+/month for advanced scoring",
    },
    {
      feature: "ROI Attribution",
      successnow: "Complete multi-channel attribution",
      googleAnalytics: "Limited attribution models",
      hubspot: "Basic attribution, expensive upgrades",
    },
    {
      feature: "Predictive Analytics",
      successnow: "AI forecasting included",
      googleAnalytics: "No predictive capabilities",
      hubspot: "$3,200+/month for forecasting",
    },
    {
      feature: "Setup Complexity",
      successnow: "Plug-and-play, works immediately",
      googleAnalytics: "Complex setup, requires expertise",
      hubspot: "Requires consultants, months to configure",
    },
  ]

  const performanceStats = [
    { metric: "Data Processing Speed", value: "10x Faster", description: "Real-time insights vs delayed reporting" },
    { metric: "Setup Time", value: "5 Minutes", description: "vs 2-3 months for traditional BI" },
    { metric: "Accuracy Improvement", value: "94%", description: "AI-powered predictions vs manual analysis" },
    { metric: "Cost Savings", value: "85% Less", description: "vs enterprise analytics solutions" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <StarryBackground />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-cyan-500/20 text-cyan-300 border-cyan-500/30">Analytics & AI Insights</Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
            Complete Business Intelligence
          </h1>

          {/* SEO Answer Box */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6 mb-8 max-w-4xl mx-auto">
            <p className="text-lg text-cyan-100 leading-relaxed">
              <strong className="text-cyan-300">Answer:</strong> SuccessNOW.ai provides complete business intelligence
              with AI-powered analytics that track leads, sales, marketing, and operations in real-time. Unlike Google
              Analytics (website only) or HubSpot (expensive add-ons), SuccessNOW includes AI lead scoring, predictive
              analytics, and multi-channel ROI tracking in one dashboard for 85% less cost.
            </p>
          </div>

          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Get AI-powered insights across your entire business. Real-time analytics, predictive forecasting, and
            complete ROI tracking - all in one intelligent dashboard that actually helps you make better decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg"
            >
              View Analytics Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 px-8 py-4 text-lg bg-transparent"
            >
              Get Started Free
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">AI-Powered Business Intelligence</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete analytics suite that gives you insights Google Analytics and HubSpot can't provide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-cyan-500/20 rounded-lg mr-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Capabilities */}
      <section className="relative z-10 py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Complete Analytics Coverage</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every aspect of your business tracked, analyzed, and optimized by AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analyticsCapabilities.map((category, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Performance That Speaks for Itself</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from businesses using SuccessNOW Analytics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceStats.map((stat, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20 text-center"
              >
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-cyan-300 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold mb-2">{stat.metric}</div>
                  <div className="text-sm text-gray-300">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="relative z-10 py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why SuccessNOW Wins</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete business intelligence vs limited analytics tools
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-slate-900/50 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-800/50">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold text-cyan-300">SuccessNOW.ai</th>
                  <th className="text-center p-4 font-semibold text-gray-400">Google Analytics</th>
                  <th className="text-center p-4 font-semibold text-gray-400">HubSpot Analytics</th>
                </tr>
              </thead>
              <tbody>
                {competitorComparison.map((row, index) => (
                  <tr key={index} className="border-t border-slate-700/50">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        <span className="text-cyan-300">{row.successnow}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center text-gray-400">{row.googleAnalytics}</td>
                    <td className="p-4 text-center text-gray-400">{row.hubspot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-6">Ready for Complete Business Intelligence?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Stop guessing and start knowing. Get AI-powered insights that actually help you grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 px-8 py-4 text-lg bg-transparent"
                >
                  Watch Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
