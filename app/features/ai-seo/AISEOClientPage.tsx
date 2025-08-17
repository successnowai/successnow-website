"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import StarryBackground from "@/components/ui/starry-background"
import { Search, Users, TrendingUp, MapPin, BarChart3, Bot, Target, Clock, Globe } from "lucide-react"
import Link from "next/link"
import { VoiceSnippetPlayer } from "@/components/voice/voice-snippet-player"
import { StructuredData, generateWebPageSchema } from "@/components/seo/enhanced-structured-data"

const AISEOClientPage = () => {
  const aiSEOPageSchema = generateWebPageSchema(
    "AI-Driven SEO - SEOExperts.ai | 24/7 Search Optimization",
    "SEOExperts.ai uses proprietary AI tools plus expert SEO strategists to boost search rankings around the clock with continuous optimization that delivers massive traffic increases.",
    "https://successnow.ai/features/ai-seo",
    [
      { name: "AI + Human SEO Strategy", voiceData: undefined },
      { name: "Comprehensive SEO Tools", voiceData: undefined },
      { name: "Continuous Improvement", voiceData: undefined },
      { name: "Local & Niche SEO", voiceData: undefined },
      { name: "AI SEO FAQs", voiceData: undefined },
    ],
  )

  const keyFacts = [
    {
      icon: Users,
      title: "AI + Human Strategy",
      description:
        "Our system combines machine speed with human expertise. Elite SEO analysts customize your plan, while AI tools process data 1,000× faster and never sleep. This 24/7 optimization means your site stays ahead of Google's algorithm.",
      highlight: "Best of both worlds",
    },
    {
      icon: Search,
      title: "Comprehensive SEO Tools",
      description:
        "We provide a full toolkit: site audit engine, keyword/topic planner, local optimization, schema/meta fixes, link/citation building, press outreach, and more. Whether you need technical tweaks or content ideas, it's all automated in the platform.",
      highlight: "Complete toolkit",
    },
    {
      icon: Clock,
      title: "Continuous Improvement",
      description:
        "SEOExperts.ai runs continuously. Each night it analyzes rankings, scans competitors, and updates your site or content guidance. You don't pay separately for monthly reports – the AI just improves your site day and night.",
      highlight: "24/7 optimization",
    },
    {
      icon: MapPin,
      title: "Local & Niche SEO",
      description:
        "The suite includes local SEO capabilities (Google Business, reviews, local citations) and industry-specific keyword strategies. Whether you're a local gym, law firm, or national brand, the AI tailors tactics for your market.",
      highlight: "Market-specific",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description:
        "Clients consistently see double- or triple-digit gains. Gym owners saw +114% traffic and +1300% more reviews; mortgage brokers saw +305% in SEO leads; lawyers had 7× more top-7 keyword rankings. Your site becomes a lead magnet.",
      highlight: "Massive growth",
    },
    {
      icon: BarChart3,
      title: "Affordably Priced",
      description:
        "We deliver better results faster than traditional agencies, without the 5-figure monthly fees. SEOExperts.ai offers transparent plans or even a free audit – you pay only for the growth. When bundled with AdsNow and SalesBot, it's a full-stack traffic machine.",
      highlight: "Cost-effective",
    },
  ]

  const results = [
    {
      icon: TrendingUp,
      stat: "+422%",
      title: "Organic Traffic Increase",
      description: "Real estate client achieved massive traffic growth",
      industry: "Real Estate",
    },
    {
      icon: Search,
      stat: "7x",
      title: "More Top Keyword Rankings",
      description: "Lawyers gained 7× more top-7 keyword positions",
      industry: "Legal",
    },
    {
      icon: Users,
      stat: "+114%",
      title: "Traffic Growth",
      description: "Gym owners saw significant traffic increases",
      industry: "Fitness",
    },
    {
      icon: BarChart3,
      stat: "+1300%",
      title: "More Reviews",
      description: "Massive review increase for fitness businesses",
      industry: "Fitness",
    },
    {
      icon: Target,
      stat: "+305%",
      title: "SEO Leads Increase",
      description: "Mortgage brokers saw triple-digit lead growth",
      industry: "Finance",
    },
    {
      icon: Globe,
      stat: "+700%",
      title: "More Clicks",
      description: "Medspa gained massive click increases",
      industry: "Healthcare",
    },
  ]

  const faqs = [
    {
      question: "How is AI-driven SEO different from a regular SEO agency?",
      answer:
        "Traditional agencies often work slowly and charge per task. SEOExperts.ai automates the entire process: AI finds and fixes issues continuously, and experts intervene only when needed. This means faster iterations and 24/7 progress, at a cost often well below a full-service agency.",
    },
    {
      question: "Will I get better rankings with this service?",
      answer:
        "Yes – we've seen clients jump hundreds of spots in Google. For instance, a client in real estate achieved a 422% jump in organic traffic. While results vary by niche and competition, the combined power of AI and human tuning consistently drives higher rankings and more leads over time.",
    },
    {
      question: "Does it include content creation?",
      answer:
        "SEOExperts.ai focuses on strategy and optimization. It will recommend and generate content improvements (like keywords and topic outlines), but content writing is either done by your team or optionally by us. The key is that every page is analyzed and enhanced by AI, ensuring your content targets what customers search for.",
    },
    {
      question: "I'm a local small business. Can this help me?",
      answer:
        "Absolutely. We include local SEO (e.g. Google Business optimization, local keywords, reviews) in our platform. Local gyms saw 114% more traffic and lawyers got 7× more top local keywords. The AI identifies locally relevant opportunities so you appear when nearby customers search.",
    },
    {
      question: "How does this integrate with the rest of SuccessNOW?",
      answer:
        "SEOExperts.ai is part of the SuccessNOW suite. It works hand-in-hand with AdsNow.ai and SalesBotNow. SEO brings free organic leads to your funnel, AdsNow drives paid traffic, and SalesBotNow converts them. All data flows through one system, so every lead is tracked and nurtured consistently.",
    },
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <StarryBackground />

      <StructuredData schema={aiSEOPageSchema} />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-8 px-6 py-2 text-sm font-medium border-cyan-400/30 text-cyan-400 bg-cyan-400/10 hover:border-pink-500/50 hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-300"
            >
              SEOExperts.ai
            </Badge>

            <div className="mb-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg backdrop-blur-sm max-w-4xl mx-auto">
              <div className="text-cyan-400 font-semibold text-sm mb-2">ANSWER:</div>
              <p className="text-white font-bold text-lg leading-tight">
                SEOExperts.ai uses proprietary AI tools plus expert SEO strategists to boost your search rankings around
                the clock. Instead of static monthly reports, it continuously audits your site, refines keywords, and
                optimizes content for compounding growth.
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              AI-Driven SEO
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                {" "}
                (SEOExperts.ai)
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-cyan-400 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
              Smarter SEO, 24/7: Continuous optimization delivers 422% traffic increases
            </p>

            <div className="mb-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h3 className="text-cyan-400 font-semibold mb-2">• AI + Human Expertise</h3>
                  <p className="text-gray-300 text-sm">Machine speed with human strategy</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h3 className="text-cyan-400 font-semibold mb-2">• 24/7 Optimization</h3>
                  <p className="text-gray-300 text-sm">Continuous improvement that never sleeps</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h3 className="text-cyan-400 font-semibold mb-2">• Proven Results</h3>
                  <p className="text-gray-300 text-sm">422% traffic increases, 7x more rankings</p>
                </div>
              </div>
            </div>

            <VoiceSnippetPlayer
              text="SEOExperts.ai combines proprietary AI tools with expert SEO strategists to boost search rankings 24/7. For example, one realtor saw +422% organic traffic after using our AI-driven SEO, and a medspa gained +700% more clicks."
              category="ai-seo-hero"
              variant="compact"
            />
          </div>
        </section>

        {/* Key Facts */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Key Facts</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Six powerful capabilities that revolutionize your SEO strategy
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFacts.map((fact, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center transition-all duration-300">
                        <fact.icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge
                        variant="outline"
                        className="border-cyan-400/30 text-cyan-400 bg-cyan-400/10 group-hover:border-pink-500/50 group-hover:text-pink-400 group-hover:bg-pink-500/10 transition-all duration-300 text-xs"
                      >
                        {fact.highlight}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{fact.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{fact.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Proven Results */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Proven Results</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real performance improvements across multiple industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.map((result, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group text-center"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                      <result.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-4xl font-bold text-cyan-400 group-hover:text-pink-400 transition-colors duration-300 mb-2">
                      {result.stat}
                    </h3>
                    <p className="text-white font-semibold mb-2">{result.title}</p>
                    <p className="text-gray-300 text-sm mb-3">{result.description}</p>
                    <Badge
                      variant="outline"
                      className="border-cyan-400/30 text-cyan-400 bg-cyan-400/10 group-hover:border-pink-500/50 group-hover:text-pink-400 group-hover:bg-pink-500/10 transition-all duration-300 text-xs"
                    >
                      {result.industry}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg backdrop-blur-sm text-center">
              <p className="text-gray-300">
                <span className="text-cyan-400 font-semibold">
                  Clients consistently see double- or triple-digit gains.
                </span>{" "}
                Your site becomes a lead magnet with SEOExperts.ai's continuous AI optimization and expert strategy.
              </p>
            </div>
          </div>
        </section>

        {/* Integration Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Complete Traffic Machine</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                SEOExperts.ai works seamlessly with the entire SuccessNOW suite
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">SEOExperts.ai</h3>
                  <p className="text-gray-300 text-sm">Brings free organic leads to your funnel</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AdsNow.ai</h3>
                  <p className="text-gray-300 text-sm">Drives targeted paid traffic</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">SalesBotNow.ai</h3>
                  <p className="text-gray-300 text-sm">Converts all leads automatically</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">FAQs</h2>
              <p className="text-xl text-gray-300">Common questions about AI-driven SEO</p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-cyan-400 mb-3">Q: {faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">A: {faq.answer}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready for 24/7 SEO Optimization?</h2>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Let SEOExperts.ai continuously improve your search rankings while you focus on your business
              </p>

              <VoiceSnippetPlayer
                text="Ready for 24/7 SEO optimization? Let SEOExperts.ai continuously improve your search rankings while you focus on your business. Get the SEO performance of a full agency team at a fraction of the cost."
                category="ai-seo-cta"
                variant="compact"
              />

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-pink-500 hover:to-purple-600 text-white px-8 py-3 shadow-[0_0_20px_rgba(0,191,255,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all duration-300"
                  asChild
                >
                  <Link href="/signup">
                    <Search className="w-5 h-5 mr-2" />
                    Start AI SEO
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
                    See Live Demo
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

export default AISEOClientPage
