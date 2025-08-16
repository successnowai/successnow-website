import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  AlertTriangle,
  Zap,
  ArrowRight,
  CheckCircle,
  XCircle,
  DollarSign,
  Shield,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react"
import Link from "next/link"
import StarryBackground from "@/components/ui/starry-background"
import CompetitorBreadcrumb from "@/components/ui/competitor-breadcrumb"
import { VoiceSnippetPlayer } from "@/components/voice/voice-snippet-player"

export const metadata = {
  title: "SuccessNOW vs Competitors - Why We Beat Everyone | SuccessNOW AI",
  description:
    "See why SuccessNOW AI dominates competitors like Lindy AI, JustCall, HubSpot, and Salesforce. Up to 93% cheaper with 5x more features. Stop paying triple for half the results.",
  keywords:
    "SuccessNOW vs competitors, AI voice agents comparison, business automation comparison, Lindy AI alternative, JustCall alternative, HubSpot alternative, Salesforce alternative, AI tools comparison, voice AI pricing, business automation pricing, lead generation software comparison",
  openGraph: {
    title: "SuccessNOW vs Competitors - Complete AI Comparison | Save Up to 93%",
    description:
      "See why 10,000+ businesses switched from expensive competitors to SuccessNOW. Up to 93% cheaper with 5x more features. Compare pricing, features, and capabilities.",
    url: "https://successnow.ai/competitors",
    siteName: "SuccessNOW AI",
    images: [
      {
        url: "/images/competitors-comparison.png",
        width: 1200,
        height: 630,
        alt: "SuccessNOW vs Competitors Comparison Chart",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SuccessNOW vs Competitors - Save Up to 93% on AI Tools",
    description: "10,000+ businesses switched from expensive competitors. See the complete comparison.",
    images: ["/images/competitors-comparison.png"],
  },
  alternates: {
    canonical: "https://successnow.ai/competitors",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "comparison-page": "true",
    "competitor-analysis": "comprehensive",
    "pricing-comparison": "available",
    "feature-comparison": "detailed",
  },
}

const competitors = [
  {
    name: "Lindy AI",
    slug: "lindy-ai",
    category: "Voice AI",
    pricing: "$0.19/min",
    ourPricing: "$0.07/min",
    savings: "63% cheaper",
    mainIssue: "Only answers calls - no growth engine",
    description:
      "Lindy gives you one slice of AI calling; SuccessNOW delivers the whole pizza (ads, SEO, funnels, dev, agency) for a fraction of the cost.",
  },
  {
    name: "JustCall",
    slug: "justcall",
    category: "Call Center",
    pricing: "$0.99/min",
    ourPricing: "$0.07/min",
    savings: "93% cheaper",
    mainIssue: "Charges like it's 1999 - virtual call center only",
    description: "JustCall rents you AI calls; SuccessNOW builds your whole AI-driven pipeline.",
  },
  {
    name: "Synthflow",
    slug: "synthflow",
    category: "Voice AI",
    pricing: "$0.13/min",
    ourPricing: "$0.07/min",
    savings: "46% cheaper",
    mainIssue: "Voice calls only - no marketing or lead generation",
    description: "Synthflow gives you calls; SuccessNOW gives you calls and customers and growth.",
  },
  {
    name: "Regal AI",
    slug: "regal-ai",
    category: "Enterprise",
    pricing: "$0.10-$0.20/min",
    ourPricing: "$0.07/min",
    savings: "65% cheaper",
    mainIssue: "Enterprise pricing for call center features only",
    description: "Why pay enterprise prices for only calls, when SuccessNOW gives you the entire suite for 90% less?",
  },
  {
    name: "HubSpot",
    slug: "hubspot",
    category: "CRM",
    pricing: "$100+/user/mo",
    ourPricing: "$997/mo flat",
    savings: "No per-seat fees",
    mainIssue: "Great tracker, but doesn't close leads",
    description: "HubSpot helps you track leads. SuccessNOW helps you close them instantly.",
  },
  {
    name: "Salesforce",
    slug: "salesforce",
    category: "Enterprise CRM",
    pricing: "$165-$330+/user/mo",
    ourPricing: "$997/mo total",
    savings: "90% cheaper",
    mainIssue: "Complex data warehouse, not an AI rainmaker",
    description: "Salesforce is a complex data warehouse; SuccessNOW is a deal-maker in your pocket.",
  },
]

export default function CompetitorsPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StarryBackground />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "SuccessNOW vs Competitors - Complete Comparison",
            description:
              "Comprehensive comparison of SuccessNOW AI against all major competitors including pricing, features, and capabilities. See why 10,000+ businesses made the switch.",
            url: "https://successnow.ai/competitors",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://successnow.ai",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Competitors",
                  item: "https://successnow.ai/competitors",
                },
              ],
            },
            mainEntity: {
              "@type": "ItemList",
              name: "AI Business Automation Competitors",
              description: "Complete list of SuccessNOW AI competitors with detailed comparisons",
              numberOfItems: competitors.length,
              itemListElement: competitors.map((competitor, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "Product",
                  name: `SuccessNOW vs ${competitor.name}`,
                  description: competitor.description,
                  url: `https://successnow.ai/competitors/${competitor.slug}`,
                  offers: {
                    "@type": "Offer",
                    price: "997",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                  },
                  brand: {
                    "@type": "Brand",
                    name: "SuccessNOW AI",
                  },
                  category: competitor.category,
                  additionalProperty: [
                    {
                      "@type": "PropertyValue",
                      name: "Cost Savings",
                      value: competitor.savings,
                    },
                    {
                      "@type": "PropertyValue",
                      name: "Competitor Price",
                      value: competitor.pricing,
                    },
                    {
                      "@type": "PropertyValue",
                      name: "SuccessNOW Price",
                      value: competitor.ourPricing,
                    },
                  ],
                },
              })),
            },
            speakable: {
              "@type": "SpeakableSpecification",
              xpath: [
                "/html/body//h1[1]",
                "/html/body//h2[contains(@class, 'text-')]",
                "/html/body//p[contains(@class, 'text-xl')]",
              ],
            },
            potentialAction: [
              {
                "@type": "ReadAction",
                target: "https://successnow.ai/competitors",
                name: "Read competitor comparisons",
              },
              {
                "@type": "CompareAction",
                object: competitors.map((c) => ({
                  "@type": "Product",
                  name: c.name,
                })),
              },
            ],
            publisher: {
              "@type": "Organization",
              name: "SuccessNOW AI",
              logo: "https://successnow.ai/images/successnow-logo.png",
            },
            datePublished: "2024-01-15",
            dateModified: new Date().toISOString(),
            inLanguage: "en-US",
            isAccessibleForFree: true,
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Which AI voice agent is the cheapest?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "SuccessNOW offers the most cost-effective AI voice agents at $0.07/minute, which is up to 93% cheaper than competitors like JustCall ($0.99/min) and significantly less than Lindy AI ($0.19/min).",
                },
              },
              {
                "@type": "Question",
                name: "What's the best alternative to HubSpot?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "SuccessNOW is the best HubSpot alternative, offering complete AI automation for $997/month flat rate (no per-seat fees) versus HubSpot's $100+/user/month. SuccessNOW includes 24/7 AI agents that actively close deals, not just track them.",
                },
              },
              {
                "@type": "Question",
                name: "How does SuccessNOW compare to Salesforce?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "SuccessNOW is 90% cheaper than Salesforce ($997/month total vs $165-$330+/user/month) and includes AI agents that actively work leads 24/7, while Salesforce is primarily a data warehouse requiring human intervention.",
                },
              },
            ],
          }),
        }}
      />

      <section className="relative pt-32 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <CompetitorBreadcrumb />
        </div>
      </section>

      <section className="relative pt-8 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-red-900/90 text-white border-2 border-red-400/60 px-6 py-2 text-sm font-medium backdrop-blur-sm shadow-lg hover:shadow-red-500/25 transition-all duration-300">
              <AlertTriangle className="w-4 h-4 mr-2 text-red-400" />
              Your Business Is Bleeding Money
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="text-white">Stop Paying</span>
            <br />
            <span className="text-red-400 neon-text-red">Triple the Price</span>
            <br />
            <span className="text-white">for</span>{" "}
            <span className="text-red-400 neon-text-red">Half the Features</span>
          </h1>

          <div className="max-w-5xl mx-auto bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-8 backdrop-blur-sm mb-12">
            <p className="text-2xl md:text-3xl text-white leading-relaxed mb-6 font-bold">
              Every minute you stick with inferior tools, your business bleeds money.
            </p>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              While you're paying <span className="text-red-400 font-semibold">$0.19-$0.99/minute</span> for basic call
              handling, SuccessNOW delivers the{" "}
              <span className="text-cyan-300 font-semibold">complete AI growth engine</span> at
              <span className="text-green-400 font-semibold"> $0.07/minute</span> - that's up to{" "}
              <span className="text-green-400 font-semibold">93% cheaper</span>.
            </p>
            <p className="text-lg text-gray-300">
              Competitors give you pieces of the puzzle. SuccessNOW gives you the whole pizza:
              <span className="text-cyan-300 font-semibold"> AI agents + ads + SEO + funnels + integrations</span> - all
              for less than what they charge for calls alone.
            </p>
          </div>

          <div className="mb-12">
            <VoiceSnippetPlayer
              text="Stop paying triple the price for half the features. Every minute you stick with inferior tools, your business bleeds money. SuccessNOW delivers the complete AI growth engine at up to 93% cheaper than competitors."
              category="competitors-hero"
              variant="compact"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-red-400 mb-2">$50K+</div>
              <div className="text-sm text-gray-300">Lost per year in missed after-hours calls</div>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-red-400 mb-2">70%</div>
              <div className="text-sm text-gray-300">Of prospects buy elsewhere while you wait days to call back</div>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-red-400 mb-2">80%</div>
              <div className="text-sm text-gray-300">Of qualified leads wasted by inconsistent follow-ups</div>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-red-400 mb-2">60%</div>
              <div className="text-sm text-gray-300">Productivity loss when staff handle admin vs selling</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/demo">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                See Live Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="https://signup.successnow.ai" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-green-400/50 text-white hover:bg-green-500/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 bg-transparent"
              >
                Join Pilot Program - 90% Off!
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Join</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
                10,000+ Businesses
              </span>{" "}
              <span className="text-white">Who Made the Switch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              See what real business owners are saying about switching from expensive competitors to SuccessNOW
            </p>
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">10,000+</div>
              <div className="text-sm text-gray-300">Businesses Switched</div>
              <div className="text-xs text-green-300 mt-1">This month alone</div>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">93%</div>
              <div className="text-sm text-gray-300">Cost Savings</div>
              <div className="text-xs text-cyan-300 mt-1">vs JustCall pricing</div>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">AI Operation</div>
              <div className="text-xs text-purple-300 mt-1">Never misses a lead</div>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 backdrop-blur-sm text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">48hrs</div>
              <div className="text-sm text-gray-300">Setup Time</div>
              <div className="text-xs text-yellow-300 mt-1">Full implementation</div>
            </div>
          </div>

          {/* Customer Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-white">Mike Rodriguez</div>
                  <div className="text-sm text-gray-400">Auto Dealership Owner</div>
                  <div className="text-xs text-cyan-400">Phoenix, AZ</div>
                </div>
              </div>
              <blockquote className="text-gray-300 italic mb-4">
                "Switched from JustCall and saved $84K annually. Our AI handles more inquiries than our entire sales
                team used to. We're booking test drives while competitors are still checking voicemail."
              </blockquote>
              <div className="text-green-400 font-semibold text-sm">Saved $84,000/year</div>
            </Card>

            <Card className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  S
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-white">Sarah Chen</div>
                  <div className="text-sm text-gray-400">Real Estate Agent</div>
                  <div className="text-xs text-cyan-400">Austin, TX</div>
                </div>
              </div>
              <blockquote className="text-gray-300 italic mb-4">
                "Left HubSpot's expensive per-seat pricing. I went from working 70-hour weeks to having evenings free
                with my family. The AI books more showings than I ever could manually."
              </blockquote>
              <div className="text-green-400 font-semibold text-sm">65% more appointments</div>
            </Card>

            <Card className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  D
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-white">David Thompson</div>
                  <div className="text-sm text-gray-400">Mortgage Broker</div>
                  <div className="text-xs text-cyan-400">Denver, CO</div>
                </div>
              </div>
              <blockquote className="text-gray-300 italic mb-4">
                "Ditched Salesforce's complex system. My AI agent pre-qualifies borrowers better than most loan
                officers. I'm closing more deals while working fewer hours."
              </blockquote>
              <div className="text-green-400 font-semibold text-sm">Faster closings</div>
            </Card>
          </div>

          {/* Urgency and Scarcity */}
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-8 backdrop-blur-sm text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              <span className="text-red-400 font-bold text-lg">LIMITED TIME WARNING</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Your Competitors Are Already Making the Switch
            </h3>
            <p className="text-lg text-gray-200 mb-6 max-w-3xl mx-auto">
              Every day you delay, competitors using SuccessNOW are capturing leads you're missing.
              <span className="text-red-400 font-semibold">
                {" "}
                847 businesses switched from competitors this month alone.
              </span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-red-400 mb-1">127</div>
                <div className="text-sm text-gray-300">Left JustCall this week</div>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-red-400 mb-1">89</div>
                <div className="text-sm text-gray-300">Switched from HubSpot</div>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-red-400 mb-1">156</div>
                <div className="text-sm text-gray-300">Upgraded from Lindy AI</div>
              </div>
            </div>
            <p className="text-cyan-300 font-semibold">
              Don't let your competition get ahead. Join the 10,000+ who already made the smart choice.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-12 backdrop-blur-sm">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Backed by Industry Leaders & $250K Pilot Funding
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                SuccessNOW isn't just another AI tool - we're a funded technology company with enterprise-grade
                infrastructure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-400 text-sm">Bank-level encryption & SOC 2 compliance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
                <p className="text-gray-400 text-sm">300% average ROI across all industries</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-gray-400 text-sm">Former Google, Microsoft & Salesforce engineers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-400 text-sm">Dedicated success managers & live chat</p>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-4 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-green-300 font-semibold">$250K Pilot Funding Available</span>
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-green-300 font-semibold">99.9% Uptime SLA</span>
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-green-300 font-semibold">30-Day Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">See How We</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
                Crush Every Competitor
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              While they charge enterprise prices for basic features, we deliver the complete growth engine for pennies
            </p>

            <VoiceSnippetPlayer
              text="See how we crush every competitor. While they charge enterprise prices for basic features, we deliver the complete growth engine for pennies. Every comparison shows why SuccessNOW always wins."
              category="competitor-comparison"
              variant="compact"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitors.map((competitor) => (
              <Card
                key={competitor.slug}
                className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 hover:border-red-500/60 hover:shadow-red-500/20 transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">{competitor.category}</span>
                    <span className="text-xs text-green-400 font-semibold">{competitor.savings}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-400" />
                    {competitor.name}
                  </CardTitle>
                  <div className="text-sm text-red-400 font-medium">{competitor.mainIssue}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Their Price:</span>
                      <span className="text-red-400 font-semibold">{competitor.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Our Price:</span>
                      <span className="text-green-400 font-semibold">{competitor.ourPricing}</span>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                      <div className="text-green-300 font-semibold text-sm">You Save: {competitor.savings}</div>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">{competitor.description}</p>

                  <Link href={`/competitors/${competitor.slug}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 bg-transparent group-hover:border-red-400 group-hover:text-red-300"
                    >
                      See Full Comparison
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-12 backdrop-blur-sm text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-red-400 neon-text-red">Every Missed Lead</span>{" "}
              <span className="text-white">Is Lost Revenue</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-4">While You're Stuck with Inferior Tools:</h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span>Calls after hours go to voicemail (competitors can't capture them)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span>70% of prospects buy elsewhere while you wait days to call back</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span>Inconsistent follow-ups throw away 80% of qualified leads</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span>Staff overwhelmed with admin instead of selling</span>
                  </li>
                </ul>
              </div>

              <div className="text-left">
                <h3 className="text-2xl font-bold text-cyan-300 mb-4">With SuccessNOW You Get:</h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>24/7 AI agents that never miss a call or message</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Instant response and qualification of every lead</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Automated follow-ups across all channels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Complete marketing automation included</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-black/40 rounded-xl p-6 mb-8">
              <p className="text-xl text-white font-semibold mb-4">
                "When your competitors are using AI, every delay is a competitive hit."
              </p>
              <p className="text-gray-300">
                SuccessNOW fixes all of this at once with automation – no lead is left behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Stop Bleeding Money.</span>
            <br />
            <span className="text-green-400">Start Dominating Today.</span>
          </h2>

          <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-2xl p-8 mb-8 backdrop-blur-sm">
            <div className="text-2xl font-bold text-white mb-4">🚨 Pilot Program - Limited Time Only</div>
            <div className="text-xl text-green-400 font-semibold mb-4">
              Only $997 setup (90% off!) + First 3 months FREE
            </div>
            <p className="text-lg text-gray-300 mb-4">
              Complete SuccessNOW suite: Custom site, funnels, AdsNow Platinum, SEOExperts, unlimited AI agents
            </p>
            <div className="text-sm text-cyan-300 font-semibold">
              Valued at over $4,000/mo • Backed by $250K pilot funding
            </div>
          </div>

          <div className="mb-8">
            <VoiceSnippetPlayer
              text="Stop bleeding money and start dominating today. Join our Pilot Program for just $997 setup and get your first 3 months FREE. Complete SuccessNOW suite valued at over $4,000 per month, backed by $250K pilot funding with 30-day money-back guarantee."
              category="competitors-cta"
              variant="compact"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="https://signup.successnow.ai" target="_blank">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Claim 90% Discount Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-400/50 text-white hover:bg-cyan-500/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 bg-transparent"
              >
                <Zap className="w-5 h-5 mr-2" />
                See Live Demo First
              </Button>
            </Link>
          </div>

          <div className="bg-black/40 rounded-xl p-6">
            <div className="text-green-400 font-bold text-lg mb-2">🛡️ 30-Day Money-Back Guarantee</div>
            <p className="text-gray-300 mb-4">
              If you're not absolutely blown away by how many leads and sales SuccessNOW generates, just cancel for a
              full refund.
            </p>
            <p className="text-red-400 font-semibold">
              But every day you wait, you lose more customers to competitors using AI.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
