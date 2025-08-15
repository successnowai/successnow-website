import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Target, DollarSign, Clock, Users, Sparkles } from "lucide-react"
import StarryBackground from "@/components/ui/starry-background"
import CompetitorBreadcrumb from "@/components/ui/competitor-breadcrumb"

export const metadata: Metadata = {
  title: "SuccessNOW vs Competitors - Why We're the Clear Winner | SuccessNOW AI",
  description:
    "Compare SuccessNOW AI against Lindy AI, JustCall, Synthflow, HubSpot, Salesforce and more. See why we offer 10x more value at half the price with our complete AI growth suite.",
  keywords:
    "SuccessNOW vs competitors, AI voice agents comparison, Lindy AI alternative, JustCall alternative, Synthflow alternative, HubSpot alternative, Salesforce alternative, best AI business automation",
  openGraph: {
    title: "SuccessNOW vs Competitors - Complete AI Growth Suite Comparison",
    description:
      "See why SuccessNOW AI beats every competitor with lower pricing, more features, and complete business automation. Compare us against Lindy AI, JustCall, Synthflow and more.",
    url: "https://successnow.ai/competitors",
  },
}

const competitors = [
  {
    name: "Lindy AI",
    slug: "lindy-ai",
    description: "AI calling assistant that mainly answers calls",
    pricing: "$0.19/min",
    ourPricing: "$0.07/min",
    savings: "63% cheaper",
    category: "Voice AI",
    limitations: ["Voice only", "No ads/SEO", "No funnels", "Limited channels"],
    icon: "🤖",
  },
  {
    name: "JustCall",
    slug: "justcall",
    description: "Virtual call center with basic AI features",
    pricing: "$0.99/min",
    ourPricing: "$0.07/min",
    savings: "93% cheaper",
    category: "Call Center",
    limitations: ["Expensive voice AI", "No marketing tools", "Legacy pricing", "Human oversight required"],
    icon: "📞",
  },
  {
    name: "Synthflow",
    slug: "synthflow",
    description: "Voice agents with Salesforce integration",
    pricing: "$0.13/min",
    ourPricing: "$0.07/min",
    savings: "46% cheaper",
    category: "Voice AI",
    limitations: ["Voice focused", "No ads/SEO", "Salesforce dependent", "No funnels"],
    icon: "🎙️",
  },
  {
    name: "Regal AI",
    slug: "regal-ai",
    description: "Enterprise contact center solution",
    pricing: "$0.10-$0.20/min",
    ourPricing: "$0.07/min",
    savings: "50%+ cheaper",
    category: "Enterprise",
    limitations: ["Enterprise only", "Complex setup", "No marketing", "$25K+ entry fee"],
    icon: "🏢",
  },
  {
    name: "Resemble AI",
    slug: "resemble-ai",
    description: "Voice cloning and text-to-speech",
    pricing: "$0.018/min",
    ourPricing: "Full AI agents",
    savings: "Real conversations vs clones",
    category: "Voice Cloning",
    limitations: ["Just voice cloning", "No conversation logic", "No sales capability", "Content creation only"],
    icon: "🎭",
  },
  {
    name: "Thinkrr.ai",
    slug: "thinkrr-ai",
    description: "AVA Voice AI tied to HighLevel",
    pricing: "$497/mo + $0.18/min",
    ourPricing: "$997/mo + $0.07/min",
    savings: "3x cheaper voice",
    category: "Agency Tool",
    limitations: ["HighLevel dependent", "Voice only", "No ads/SEO", "Limited customization"],
    icon: "🔧",
  },
  {
    name: "HubSpot",
    slug: "hubspot",
    description: "CRM with basic AI writing tools",
    pricing: "$100+/user/mo",
    ourPricing: "$997/mo flat",
    savings: "No per-seat fees",
    category: "CRM",
    limitations: ["Just tracking", "No AI agents", "Expensive scaling", "Separate marketing costs"],
    icon: "📊",
  },
  {
    name: "Salesforce",
    slug: "salesforce",
    description: "Complex CRM with Einstein AI",
    pricing: "$165-$330+/user/mo",
    ourPricing: "$997/mo flat",
    savings: "Massive savings",
    category: "Enterprise CRM",
    limitations: ["Complex setup", "No lead generation", "Expensive per-user", "Months to deploy"],
    icon: "☁️",
  },
  {
    name: "Claude",
    slug: "claude",
    description: "Research and writing AI assistant",
    pricing: "Research tool",
    ourPricing: "Business execution",
    savings: "Action vs analysis",
    category: "AI Assistant",
    limitations: ["Research only", "No phone calls", "No business automation", "No lead conversion"],
    icon: "📚",
  },
  {
    name: "ChatGPT",
    slug: "chatgpt",
    description: "AI content engine with plugins",
    pricing: "Content creation",
    ourPricing: "Complete sales pipeline",
    savings: "Full business vs chat",
    category: "AI Assistant",
    limitations: ["Content only", "No phone capability", "Manual processes", "No sales automation"],
    icon: "💬",
  },
]

const categories = [
  { name: "Voice AI", count: 3, color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
  { name: "Call Center", count: 1, color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
  { name: "Enterprise", count: 2, color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
  { name: "CRM", count: 2, color: "bg-green-500/20 text-green-300 border-green-500/30" },
  { name: "AI Assistant", count: 2, color: "bg-pink-500/20 text-pink-300 border-pink-500/30" },
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
            "@type": "CollectionPage",
            name: "SuccessNOW vs Competitors - Complete Comparison Guide",
            description:
              "Compare SuccessNOW AI against all major competitors including Lindy AI, JustCall, Synthflow, HubSpot, Salesforce and more.",
            url: "https://successnow.ai/competitors",
            mainEntity: {
              "@type": "ItemList",
              name: "Competitor Comparisons",
              numberOfItems: 10,
              itemListElement: competitors.map((competitor, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "WebPage",
                  name: `SuccessNOW vs ${competitor.name}`,
                  url: `https://successnow.ai/competitors/${competitor.slug}`,
                  description: competitor.description,
                },
              })),
            },
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
          }),
        }}
      />

      <section className="relative pt-32 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <CompetitorBreadcrumb />
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative pt-8 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-gray-900/90 text-white border-2 border-cyan-400/60 px-6 py-2 text-sm font-medium backdrop-blur-sm shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
              <Target className="w-4 h-4 mr-2 text-cyan-400" />
              Competitive Analysis
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="text-white">SuccessNOW vs</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              The Competition
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 leading-relaxed mb-12 max-w-4xl mx-auto">
            Why pay <span className="text-red-400 font-semibold">triple the price</span> for
            <span className="text-red-400 font-semibold"> half the features</span>? See how SuccessNOW delivers the{" "}
            <span className="text-cyan-300 font-semibold">complete AI growth suite</span>
            while competitors offer just pieces of the puzzle.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">10+</div>
              <div className="text-gray-200">Competitors Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">90%</div>
              <div className="text-gray-200">Average Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">5x</div>
              <div className="text-gray-200">More Features</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-200">Always Working</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/demo">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                See Why We Win
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-white">Competitor</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Categories
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
            {categories.map((category) => (
              <div
                key={category.name}
                className={`${category.color} border rounded-lg p-4 text-center backdrop-blur-sm`}
              >
                <div className="text-2xl font-bold mb-1">{category.count}</div>
                <div className="text-sm font-medium">{category.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitors Grid */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-white">Detailed</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Comparisons
            </span>
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Click any competitor below to see our detailed head-to-head comparison
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitors.map((competitor) => (
              <Link key={competitor.slug} href={`/competitors/${competitor.slug}`}>
                <Card className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 hover:border-cyan-500/60 hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer group h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-3xl">{competitor.icon}</div>
                      <Badge variant="outline" className="text-xs">
                        {competitor.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {competitor.name}
                    </CardTitle>
                    <CardDescription className="text-gray-400">{competitor.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Pricing Comparison */}
                    <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Their Price:</span>
                        <span className="text-red-400 font-semibold">{competitor.pricing}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Our Price:</span>
                        <span className="text-green-400 font-semibold">{competitor.ourPricing}</span>
                      </div>
                      <div className="text-center">
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                          {competitor.savings}
                        </Badge>
                      </div>
                    </div>

                    {/* Limitations */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Their Limitations:</h4>
                      <ul className="space-y-1">
                        {competitor.limitations.slice(0, 3).map((limitation, index) => (
                          <li key={index} className="text-xs text-gray-400 flex items-start gap-2">
                            <span className="text-red-400 mt-0.5">•</span>
                            <span>{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 bg-transparent"
                    >
                      View Full Comparison
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why SuccessNOW Wins Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Why</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                SuccessNOW
              </span>{" "}
              <span className="text-white">Always Wins</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              While competitors offer pieces, we deliver the complete AI growth engine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 backdrop-blur-sm">
              <CardHeader className="text-center">
                <DollarSign className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <CardTitle className="text-cyan-300">Better Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center">
                  Up to 93% cheaper than competitors with no per-user fees or hidden costs
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 backdrop-blur-sm">
              <CardHeader className="text-center">
                <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <CardTitle className="text-purple-300">More Features</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center">
                  Complete suite: AI agents, ads, SEO, funnels, CRM - all included
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 backdrop-blur-sm">
              <CardHeader className="text-center">
                <Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <CardTitle className="text-green-300">24/7 Operation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center">
                  Never sleeps, never takes breaks - captures every lead around the clock
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 backdrop-blur-sm">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <CardTitle className="text-yellow-300">Easy Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center">
                  Minutes to deploy vs months of complex setup required by enterprise tools
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Stop Paying More for</span> <span className="text-red-400">Less</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join our Pilot Program and get the complete AI growth suite for a fraction of what competitors charge
          </p>

          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl p-8 mb-8 backdrop-blur-sm">
            <div className="text-3xl font-bold text-white mb-2">
              Pilot Program: <span className="text-green-400">$988</span> setup +{" "}
              <span className="text-cyan-400">$997/mo</span>
            </div>
            <div className="text-lg text-gray-300 mb-4">
              Regularly $9,988 setup - <span className="text-green-400 font-semibold">90% OFF</span> + 50% off monthly
              fees for life
            </div>
            <div className="text-sm text-green-400 font-semibold">
              Includes 2 months FREE + AdsNow.ai Platinum + AI SEO by SEOExperts.ai
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
                className="border-2 border-cyan-400/50 text-white hover:bg-cyan-500/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 bg-transparent"
              >
                Start Pilot Program
              </Button>
            </Link>
          </div>

          <p className="text-sm text-gray-400 mt-6">30-day money-back guarantee • No Risk, Just Missed Opportunity!</p>
        </div>
      </section>
    </div>
  )
}
