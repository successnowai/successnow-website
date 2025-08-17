"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StarryBackground } from "@/components/ui/starry-background"
import {
  Building2,
  Users,
  DollarSign,
  Settings,
  Crown,
  CheckCircle,
  ArrowRight,
  Handshake,
  Shield,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

export default function WhiteLabelClientPage() {
  const coreFeatures = [
    {
      icon: <Handshake className="h-6 w-6" />,
      title: "Strategic Partnership",
      description:
        "Partner with our complete AI systems portfolio and earn recurring revenue from our established brands.",
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Partner Dashboard",
      description:
        "Dedicated partner portal to manage referrals, track commissions, and monitor performance across all brands.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Client Support Included",
      description:
        "We handle all client onboarding, support, and technical implementation - you focus on sales and relationships.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Generous Commissions",
      description:
        "Industry-leading commission structure with recurring payments and performance bonuses across all brands.",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Multi-Brand Portfolio",
      description: "Sell from our complete portfolio of AI systems - voice, ads, SEO, automation, and more.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Full Training & Support",
      description: "Complete training program, marketing materials, and ongoing support for your partnership success.",
    },
  ]

  const successnowBrands = [
    {
      name: "SuccessNOW.ai",
      description: "Complete AI sales & marketing automation platform",
      url: "/",
      features: ["AI Voice Agents", "CRM Integration", "Lead Management", "24/7 Automation"],
    },
    {
      name: "AdsNOW.ai",
      description: "AI-powered advertising across all major platforms",
      url: "/features/ai-paid-ads",
      features: ["Multi-Platform Ads", "AI Optimization", "Creative Generation", "ROI Tracking"],
    },
    {
      name: "SEOExperts.ai",
      description: "AI-driven SEO with 24/7 optimization",
      url: "/features/ai-seo",
      features: ["Continuous SEO", "AI Content", "Local Optimization", "Rank Tracking"],
    },
    {
      name: "SalesBotNOW.ai",
      description: "AI voice agents for sales and lead conversion",
      url: "/features/voice-ai-agent",
      features: ["Voice AI", "Lead Qualification", "Appointment Booking", "CRM Sync"],
    },
    {
      name: "AgencyNOW.ai",
      description: "Partner program and agency solutions",
      url: "/features/white-label-reseller",
      features: ["Partner Support", "Revenue Sharing", "Training Materials", "Marketing Tools"],
    },
    {
      name: "DevNOW.ai",
      description: "Custom integrations and development services",
      url: "/features/integrations-extensibility",
      features: ["Custom APIs", "System Integration", "Workflow Automation", "Technical Support"],
    },
  ]

  const partnerCapabilities = [
    {
      category: "Partnership Benefits",
      features: [
        "Access to complete AI portfolio",
        "Recurring commission structure",
        "Performance-based bonuses",
        "Dedicated partner support",
        "Marketing co-op opportunities",
      ],
    },
    {
      category: "Client Management",
      features: [
        "We handle all client onboarding",
        "Complete technical implementation",
        "24/7 client support included",
        "Usage analytics and reporting",
        "Billing and subscription management",
      ],
    },
    {
      category: "Revenue Opportunities",
      features: [
        "Recurring monthly commissions",
        "Setup fee revenue sharing",
        "Multi-brand cross-selling",
        "Upsell commission tiers",
        "Lifetime customer value",
      ],
    },
    {
      category: "Marketing Support",
      features: [
        "Complete marketing toolkit",
        "Sales training materials",
        "Demo scripts and presentations",
        "Case studies and testimonials",
        "Co-marketing opportunities",
      ],
    },
  ]

  const competitorComparison = [
    {
      feature: "Platform Completeness",
      successnow: "Complete AI suite - voice, ads, SEO, CRM, websites",
      gohighlevel: "CRM + basic tools, no AI voice agents",
      hubspot: "Limited partner program, expensive enterprise only",
    },
    {
      feature: "AI Capabilities",
      successnow: "Full AI voice agents, content creation, optimization",
      gohighlevel: "Basic automation, no AI voice",
      hubspot: "AI features cost extra, limited partner benefits",
    },
    {
      feature: "Revenue Model",
      successnow: "Generous revenue sharing + setup fees",
      gohighlevel: "Lower commissions, complex structure",
      hubspot: "Enterprise only, high minimums",
    },
    {
      feature: "Partner Support",
      successnow: "Full implementation and support included",
      gohighlevel: "Limited support, extra costs",
      hubspot: "Enterprise support only",
    },
    {
      feature: "Client Onboarding",
      successnow: "We handle everything - you earn commissions",
      gohighlevel: "Partners handle implementation",
      hubspot: "Complex partner requirements",
    },
    {
      feature: "Brand Portfolio",
      successnow: "Multiple specialized AI brands to sell",
      gohighlevel: "Single platform offering",
      hubspot: "Limited product portfolio",
    },
  ]

  const revenueOpportunities = [
    {
      tier: "Starter Partner",
      clients: "10-25 clients",
      monthlyRevenue: "$15,000 - $37,500",
      annualRevenue: "$180,000 - $450,000",
    },
    {
      tier: "Growth Partner",
      clients: "25-50 clients",
      monthlyRevenue: "$37,500 - $75,000",
      annualRevenue: "$450,000 - $900,000",
    },
    {
      tier: "Scale Partner",
      clients: "50-100 clients",
      monthlyRevenue: "$75,000 - $150,000",
      annualRevenue: "$900,000 - $1,800,000",
    },
    {
      tier: "Enterprise Partner",
      clients: "100+ clients",
      monthlyRevenue: "$150,000+",
      annualRevenue: "$1,800,000+",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <StarryBackground />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
            SuccessNOW.ai Partner Program
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text text-transparent">
            Partner with AI Leaders
          </h1>

          {/* SEO Answer Box */}
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-xl p-6 mb-8 max-w-4xl mx-auto">
            <p className="text-lg text-purple-100 leading-relaxed">
              <strong className="text-purple-300">Answer:</strong> The SuccessNOW.ai Partner Program offers revenue
              sharing across our complete AI systems portfolio including AdsNOW.ai, SEOExperts.ai, and SalesBotNOW.ai.
              Unlike GoHighLevel or HubSpot, we handle all client implementation and support while you earn generous
              recurring commissions from our established AI brands.
            </p>
          </div>

          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join our partner program and earn recurring revenue from our complete portfolio of AI systems. We handle the
            technology and support - you focus on building relationships and earning commissions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-600 hover:to-cyan-700 text-white px-8 py-4 text-lg"
            >
              Join Partner Program
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg bg-transparent"
            >
              View Revenue Calculator
            </Button>
          </div>
        </div>
      </section>

      {/* SuccessNOW.ai Brands Portfolio */}
      <section className="relative z-10 py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Complete AI Systems Portfolio</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partner with our entire portfolio of specialized AI systems and earn from multiple revenue streams
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successnowBrands.map((brand, index) => (
              <Card
                key={index}
                className="bg-slate-900/50 border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-purple-300">{brand.name}</h3>
                    <Link href={brand.url} className="text-cyan-400 hover:text-cyan-300">
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                  <p className="text-gray-300 mb-4">{brand.description}</p>
                  <ul className="space-y-1">
                    {brand.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Partnership Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to succeed as a SuccessNOW.ai partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-purple-500/20 rounded-lg mr-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Capabilities */}
      <section className="relative z-10 py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Complete Partner Support</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We handle the technology and support - you focus on relationships and revenue
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerCapabilities.map((category, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-purple-300">{category.category}</h3>
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

      {/* Revenue Opportunities */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Revenue Potential</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Scale your partnership with predictable recurring revenue
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {revenueOpportunities.map((tier, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-purple-500/20 text-center"
              >
                <CardContent className="p-6">
                  <Crown className="h-8 w-8 text-purple-400 mx-auto mb-4" />
                  <div className="text-xl font-bold text-purple-300 mb-2">{tier.tier}</div>
                  <div className="text-sm text-gray-300 mb-4">{tier.clients}</div>
                  <div className="text-lg font-semibold mb-1">{tier.monthlyRevenue}</div>
                  <div className="text-sm text-gray-400">per month</div>
                  <div className="text-2xl font-bold text-cyan-300 mt-4">{tier.annualRevenue}</div>
                  <div className="text-sm text-gray-400">annual potential</div>
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
            <h2 className="text-4xl font-bold mb-6">Why Partner with SuccessNOW</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Complete AI portfolio vs limited partner programs</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-slate-900/50 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-800/50">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold text-purple-300">SuccessNOW Partner</th>
                  <th className="text-center p-4 font-semibold text-gray-400">GoHighLevel</th>
                  <th className="text-center p-4 font-semibold text-gray-400">HubSpot</th>
                </tr>
              </thead>
              <tbody>
                {competitorComparison.map((row, index) => (
                  <tr key={index} className="border-t border-slate-700/50">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        <span className="text-purple-300">{row.successnow}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center text-gray-400">{row.gohighlevel}</td>
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
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-6">Ready to Partner with AI Leaders?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join successful partners already earning 6-7 figures with our complete AI systems portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/affiliate/apply">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-600 hover:to-cyan-700 text-white px-8 py-4 text-lg"
                >
                  Apply for Partner Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg bg-transparent"
                >
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
