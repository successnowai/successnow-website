"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StarryBackground } from "@/components/ui/starry-background"
import { Code, Zap, Database, Cloud, CheckCircle, ArrowRight, Link, Settings } from "lucide-react"
import NextLink from "next/link"

export default function IntegrationsClientPage() {
  const coreFeatures = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Native CRM Integrations",
      description: "Direct connections to Salesforce, HubSpot, Pipedrive, and 50+ CRMs with real-time sync.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Custom API Development",
      description:
        "DevNOW.ai builds custom integrations for any system - ERP, inventory, accounting, or proprietary tools.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Zapier & Webhooks",
      description: "Connect to 5,000+ apps via Zapier or use webhooks for real-time data synchronization.",
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Platform APIs",
      description: "Native integrations with Google Workspace, Microsoft 365, AWS, and major cloud platforms.",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Workflow Automation",
      description: "Automated data flows between systems with intelligent mapping and error handling.",
    },
    {
      icon: <Link className="h-6 w-6" />,
      title: "Universal Connectivity",
      description: "If it has an API, we can connect it. No system is too complex or proprietary.",
    },
  ]

  const integrationCategories = [
    {
      category: "CRM & Sales",
      integrations: [
        "Salesforce",
        "HubSpot",
        "Pipedrive",
        "Zoho CRM",
        "Monday.com",
        "Copper",
        "Freshsales",
        "ActiveCampaign",
      ],
    },
    {
      category: "Communication",
      integrations: [
        "Slack",
        "Microsoft Teams",
        "Discord",
        "Telegram",
        "WhatsApp Business",
        "Twilio",
        "SendGrid",
        "Mailchimp",
      ],
    },
    {
      category: "Business Tools",
      integrations: [
        "Google Workspace",
        "Microsoft 365",
        "Notion",
        "Airtable",
        "Trello",
        "Asana",
        "ClickUp",
        "Calendly",
      ],
    },
    {
      category: "E-commerce & Payments",
      integrations: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Square", "QuickBooks", "Xero", "FreshBooks"],
    },
  ]

  const competitorComparison = [
    {
      feature: "Native CRM Integrations",
      successnow: "50+ native integrations included",
      gohighlevel: "Limited to basic CRMs",
      hubspot: "Only HubSpot ecosystem",
    },
    {
      feature: "Custom API Development",
      successnow: "DevNOW.ai builds custom integrations",
      gohighlevel: "No custom development service",
      hubspot: "Expensive custom development",
    },
    {
      feature: "Integration Complexity",
      successnow: "Any system, any complexity",
      gohighlevel: "Simple integrations only",
      hubspot: "Limited to partner ecosystem",
    },
    {
      feature: "Setup Time",
      successnow: "Minutes for native, days for custom",
      gohighlevel: "Hours to days",
      hubspot: "Weeks to months",
    },
    {
      feature: "Data Sync",
      successnow: "Real-time bidirectional sync",
      gohighlevel: "Basic one-way sync",
      hubspot: "Limited sync capabilities",
    },
    {
      feature: "Cost",
      successnow: "Included in platform, custom at cost",
      gohighlevel: "Extra fees for integrations",
      hubspot: "Expensive integration tiers",
    },
  ]

  const customIntegrationExamples = [
    {
      industry: "Healthcare",
      system: "Epic EMR Integration",
      description: "Custom API to sync patient data, appointments, and treatment notes with AI follow-up system.",
    },
    {
      industry: "Real Estate",
      system: "MLS Database Connection",
      description: "Real-time property data sync with automated lead nurturing based on listing preferences.",
    },
    {
      industry: "Manufacturing",
      system: "ERP System Integration",
      description: "Connect inventory, orders, and production data with AI-powered customer communication.",
    },
    {
      industry: "Legal",
      system: "Case Management System",
      description: "Sync case data, deadlines, and client communications with automated follow-up workflows.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <StarryBackground />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-green-500/20 text-green-300 border-green-500/30">
            Integrations & Extensibility
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-green-200 to-cyan-300 bg-clip-text text-transparent">
            Connect Everything
          </h1>

          {/* SEO Answer Box */}
          <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-xl p-6 mb-8 max-w-4xl mx-auto">
            <p className="text-lg text-green-100 leading-relaxed">
              <strong className="text-green-300">Answer:</strong> SuccessNOW.ai connects with any system through 50+
              native CRM integrations, custom API development via DevNOW.ai, and Zapier connections. Unlike GoHighLevel
              (limited integrations) or HubSpot (ecosystem lock-in), SuccessNOW can integrate with any system regardless
              of complexity, ensuring seamless data flow across all your business tools.
            </p>
          </div>

          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Seamlessly connect SuccessNOW.ai with your existing systems. Native integrations, custom API development,
            and universal connectivity - no system left behind.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white px-8 py-4 text-lg"
            >
              Explore Integrations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-500/50 text-green-300 hover:bg-green-500/10 px-8 py-4 text-lg bg-transparent"
            >
              Request Custom Integration
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Universal Connectivity</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect any system, any complexity, with seamless data flow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700/50 hover:border-green-500/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-green-500/20 rounded-lg mr-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="relative z-10 py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">50+ Native Integrations</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use connections with your favorite business tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationCategories.map((category, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-300">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.integrations.map((integration, integrationIndex) => (
                      <li key={integrationIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{integration}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Integration Examples */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Custom Integration Examples</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              DevNOW.ai builds custom integrations for any industry or system
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {customIntegrationExamples.map((example, index) => (
              <Card key={index} className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border-green-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30 mr-3">
                      {example.industry}
                    </Badge>
                    <h3 className="text-xl font-semibold">{example.system}</h3>
                  </div>
                  <p className="text-gray-300">{example.description}</p>
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
              Universal connectivity vs limited integration options
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-slate-900/50 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-800/50">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold text-green-300">SuccessNOW.ai</th>
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
                        <span className="text-green-300">{row.successnow}</span>
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
          <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-6">Ready to Connect Everything?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Stop working in silos. Connect all your systems and let AI orchestrate seamless workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NextLink href="/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white px-8 py-4 text-lg"
                >
                  Start Connecting
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </NextLink>
              <NextLink href="/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-500/50 text-green-300 hover:bg-green-500/10 px-8 py-4 text-lg bg-transparent"
                >
                  See Integrations Demo
                </Button>
              </NextLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
