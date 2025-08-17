"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import StarryBackground from "@/components/ui/starry-background"
import { Megaphone, Target, BarChart3, Palette, Users, Bot, TrendingUp, Globe, Clock, DollarSign } from "lucide-react"
import Link from "next/link"
import { VoiceSnippetPlayer } from "@/components/voice/voice-snippet-player"
import { StructuredData, generateWebPageSchema } from "@/components/seo/enhanced-structured-data"

const AIPaidAdsClientPage = () => {
  const aiAdsPageSchema = generateWebPageSchema(
    "AI-Powered Advertising - AdsNow.ai | Automated Ad Campaigns",
    "AdsNow.ai is a fully AI-driven ad platform that automatically plans, launches, and optimizes paid campaigns across all channels with AI-generated copy, images, targeting, and continuous optimization.",
    "https://successnow.ai/features/ai-paid-ads",
    [
      { name: "AI Ad Campaign Generation", voiceData: undefined },
      { name: "Multi-Channel Advertising", voiceData: undefined },
      { name: "Continuous A/B Testing", voiceData: undefined },
      { name: "Built-in Creative Studio", voiceData: undefined },
      { name: "AI Advertising FAQs", voiceData: undefined },
    ],
  )

  const keyFacts = [
    {
      icon: Globe,
      title: "All Major Channels",
      description:
        "Run ads on Facebook/Instagram, Google, YouTube, TikTok, LinkedIn, Bing, Snapchat, Spotify, and more – all from one dashboard. No juggling multiple ad managers.",
      highlight: "Unified dashboard",
    },
    {
      icon: Bot,
      title: "AI-Generated Campaigns",
      description:
        "Describe your offer or goal, and AdsNow auto-creates the entire campaign. It writes on-brand ad copy, picks/makes visuals or videos, selects audiences, and even suggests calls-to-action.",
      highlight: "Complete automation",
    },
    {
      icon: TrendingUp,
      title: "Continuous A/B Testing",
      description:
        "Turn on 'AI Auto-Optimize' and let the system run. AdsNow will automatically test multiple creative variations, pause poor performers, and reallocate budget to winning ads.",
      highlight: "Smart optimization",
    },
    {
      icon: Palette,
      title: "Built-in Creative Studio",
      description:
        "No designer needed. AdsNow can generate custom images from text prompts, create video ads (even with AI avatars or UGC styles), and produce studio-quality voiceovers.",
      highlight: "Creative generation",
    },
    {
      icon: Target,
      title: "Intelligent Targeting",
      description:
        "Get AI-recommended audiences and keywords. The platform suggests high-performing keywords (with volume data) for Google campaigns and auto-learns your brand's voice, colors, and style.",
      highlight: "Smart targeting",
    },
    {
      icon: BarChart3,
      title: "Unified Analytics",
      description:
        "See all your ad results in one place. AdsNow pulls in data (conversions, impressions, costs) from each channel and highlights key insights.",
      highlight: "Complete visibility",
    },
    {
      icon: Users,
      title: "Beginner-Friendly, Pro-Powerful",
      description:
        "Novice? Use Easy Mode wizards to launch a campaign in 3 simple steps. Veteran marketer? Switch to Advanced Mode for full control over bids, budgets, and placements.",
      highlight: "Adaptive interface",
    },
    {
      icon: Clock,
      title: "24/7 AI Ad Manager",
      description:
        "Once running, AdsNow never sleeps. It monitors campaigns around the clock and can automatically pause or boost ads to prevent waste. In effect, you have an AI ad strategist working while you sleep.",
      highlight: "Always optimizing",
    },
  ]

  const platforms = [
    "Facebook & Instagram",
    "Google Ads",
    "YouTube",
    "TikTok",
    "LinkedIn",
    "Snapchat",
    "Bing",
    "Spotify",
    "Twitter",
    "Pinterest",
  ]

  const faqs = [
    {
      question: "What platforms can I advertise on with AdsNow?",
      answer:
        "All of the big ones and more. AdsNow supports Meta (Facebook & Instagram), Google, YouTube, TikTok, LinkedIn, Snapchat, Bing, Spotify, etc. – every major ad channel. You manage them all from one interface.",
    },
    {
      question: "How do I create an ad campaign?",
      answer:
        "Just answer a few questions about your product and goal. AdsNow's AI then writes the ad copy, headlines, and creative assets and sets up the audience targeting automatically. In practice, we've cut setup time from days to minutes.",
    },
    {
      question: "Can I trust the AI's decisions?",
      answer:
        "Yes – AdsNow uses proven marketing best practices. It continuously A/B tests every variation, so underperforming ads are automatically sidelined. Plus, you can always review and tweak campaigns manually if desired.",
    },
    {
      question: "Do I need a big budget to use this?",
      answer:
        "Not at all. You choose your spend. AdsNow works with any budget. In fact, because the AI dramatically improves performance, many users spend less while getting more leads. Our own plans start at $497/month, which is cheaper than hiring an agency.",
    },
    {
      question: "How well does AdsNow work?",
      answer:
        "In testing, companies doubled their click-through rates and cut ad costs by up to 90% using AdsNow. Even a complete beginner launched a campaign that sold 278 books (nearly $10K revenue) on a $200 spend, thanks to the AI optimizations. Results will vary, but our users consistently see big improvements over manual ads.",
    },
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <StarryBackground />

      <StructuredData schema={aiAdsPageSchema} />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-8 px-6 py-2 text-sm font-medium border-cyan-400/30 text-cyan-400 bg-cyan-400/10 hover:border-pink-500/50 hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-300"
            >
              AdsNow.ai
            </Badge>

            <div className="mb-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg backdrop-blur-sm max-w-4xl mx-auto">
              <div className="text-cyan-400 font-semibold text-sm mb-2">ANSWER:</div>
              <p className="text-white font-bold text-lg leading-tight">
                AdsNow.ai is a fully AI-driven ad platform that automatically plans, launches, and optimizes your paid
                campaigns across all channels. Simply describe your business and goals, and AdsNow's AI generates
                complete ad campaigns – copy, images/videos, headlines, targeting, and budgets – customized to each
                platform.
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              AI-Powered Advertising
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                {" "}
                (AdsNow.ai)
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-cyan-400 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
              AI Ad Campaigns in Minutes: Cut costs by 90% while doubling click-through rates
            </p>

            <div className="mb-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h3 className="text-cyan-400 font-semibold mb-2">• All Major Channels</h3>
                  <p className="text-gray-300 text-sm">Facebook, Google, TikTok, LinkedIn & more</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h3 className="text-cyan-400 font-semibold mb-2">• AI-Generated Campaigns</h3>
                  <p className="text-gray-300 text-sm">Complete campaigns created automatically</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h3 className="text-cyan-400 font-semibold mb-2">• 90% Cost Reduction</h3>
                  <p className="text-gray-300 text-sm">Doubled CTR with massive cost savings</p>
                </div>
              </div>
            </div>

            <VoiceSnippetPlayer
              text="AdsNow.ai creates complete AI ad campaigns in minutes across all major channels. No more hours wasted tweaking ads or hiring expensive agencies. In testing, users have slashed ad costs by up to 90% and doubled click-through rates with fully automated campaign optimization."
              category="ai-ads-hero"
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
                Eight powerful capabilities that revolutionize your advertising
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    </div>

                    <Badge
                      variant="outline"
                      className="mb-3 border-cyan-400/30 text-cyan-400 bg-cyan-400/10 group-hover:border-pink-500/50 group-hover:text-pink-400 group-hover:bg-pink-500/10 transition-all duration-300 text-xs"
                    >
                      {fact.highlight}
                    </Badge>

                    <h3 className="text-lg font-bold text-white mb-3">{fact.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{fact.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Platforms */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Supported Ad Platforms</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Manage all your advertising channels from one unified dashboard
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {platforms.map((platform, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group"
                >
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center mx-auto mb-3 transition-all duration-300">
                      <Megaphone className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-sm">{platform}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg backdrop-blur-sm text-center">
              <p className="text-gray-300">
                <span className="text-cyan-400 font-semibold">No more juggling multiple ad managers.</span> AdsNow.ai
                unifies all your advertising channels in one intelligent dashboard with cross-platform optimization.
              </p>
            </div>
          </div>
        </section>

        {/* Performance Results */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Proven Results</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real performance improvements from AI-optimized advertising
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-cyan-400 group-hover:text-pink-400 transition-colors duration-300 mb-2">
                    2x
                  </h3>
                  <p className="text-white font-semibold mb-2">Click-Through Rates</p>
                  <p className="text-gray-300 text-sm">Doubled performance vs manual campaigns</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-cyan-400 group-hover:text-pink-400 transition-colors duration-300 mb-2">
                    90%
                  </h3>
                  <p className="text-white font-semibold mb-2">Cost Reduction</p>
                  <p className="text-gray-300 text-sm">Massive savings through AI optimization</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-cyan-400 group-hover:text-pink-400 transition-colors duration-300 mb-2">
                    $10K
                  </h3>
                  <p className="text-white font-semibold mb-2">Revenue Generated</p>
                  <p className="text-gray-300 text-sm">278 books sold on $200 ad spend</p>
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
              <p className="text-xl text-gray-300">Common questions about AI-powered advertising</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Automate Your Advertising?</h2>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Let AdsNow.ai create, launch, and optimize your campaigns across all channels automatically
              </p>

              <VoiceSnippetPlayer
                text="Ready to automate your advertising? Let AdsNow.ai create, launch, and optimize your campaigns across all channels automatically. Cut costs by 90% while doubling your click-through rates."
                category="ai-ads-cta"
                variant="compact"
              />

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-pink-500 hover:to-purple-600 text-white px-8 py-3 shadow-[0_0_20px_rgba(0,191,255,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all duration-300"
                  asChild
                >
                  <Link href="/signup">
                    <Megaphone className="w-5 h-5 mr-2" />
                    Start AI Advertising
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

export default AIPaidAdsClientPage
