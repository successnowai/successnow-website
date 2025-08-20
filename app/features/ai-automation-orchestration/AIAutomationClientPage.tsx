"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import StarryBackground from "@/components/ui/starry-background"
import { Settings, Bot, Globe, Zap, Target, DollarSign, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import { VoiceSnippetPlayer } from "@/components/voice/voice-snippet-player"
import { StructuredData, generateWebPageSchema } from "@/components/seo/enhanced-structured-data"

const AIAutomationClientPage = () => {
  const aiAutomationPageSchema = generateWebPageSchema(
    "AI Automation & Orchestration - SuccessNOW.ai | Complete Sales Engine",
    "SuccessNOW.ai is the brain that orchestrates your entire sales funnel with intelligent automation, 24/7 AI super agents, automated funnels, and seamless integrations in one platform.",
    "https://successnow.ai/features/ai-automation-orchestration",
    [
      { name: "24/7 AI Super Agents", voiceData: undefined },
      { name: "Automated Funnels & Sites", voiceData: undefined },
      { name: "Full Marketing Stack", voiceData: undefined },
      { name: "Seamless Integrations", voiceData: undefined },
      { name: "AI Automation FAQs", voiceData: undefined },
    ],
  )

  const keyFacts = [
    {
      icon: Bot,
      title: "24/7 AI Super Agents",
      description:
        "Our AI agents act like top sales reps who never sleep. They proactively follow up on inbound leads (calls, texts, chats) and handle complex sales workflows end-to-end. They remember context and customer history from every interaction, so conversations stay coherent.",
      highlight: "Never sleep",
    },
    {
      icon: Globe,
      title: "Automated Funnels & Sites",
      description:
        "Onboarding automatically generates a custom website and high-converting lead funnels for your business. These capture leads and feed them into the AI agents and campaigns without extra setup.",
      highlight: "Auto-generated",
    },
    {
      icon: Target,
      title: "Full Marketing Stack Included",
      description:
        "Everything's in one place. Unlike HubSpot or Salesforce, there are no separate modules to buy. SuccessNOW includes AdsNow.ai and SEOExperts.ai by default, and even an agency program (AgencyNow.ai) for additional support.",
      highlight: "All-in-one",
    },
    {
      icon: Settings,
      title: "Seamless Integrations",
      description:
        "The platform natively syncs with major CRMs and email tools. For custom needs, our DevNow.ai service will integrate with any software or API you use. No coding headaches – just plug in your tools and let the AI run your processes.",
      highlight: "Plug & play",
    },
    {
      icon: Zap,
      title: "Pain Point Eliminator",
      description:
        "SuccessNOW fixes the classic lead leaks: it captures calls after hours (no more $50K/year lost), responds instantly (removing 70% conversion loss from delays), and ensures every follow-up happens (reclaiming ~80% of otherwise-wasted leads).",
      highlight: "Leak-proof",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective & Turnkey",
      description:
        "Setting up a success pipeline usually takes months and thousands in other systems. Here, $998 one-time (pilot price) covers the entire tech stack. That includes your custom site/funnels, AdsNow Platinum, AI SEO, unlimited AI agents, and 2 months free.",
      highlight: "Turnkey solution",
    },
  ]

  const painPoints = [
    {
      icon: Clock,
      title: "Captures Calls After Hours",
      description: "No more $50K/year lost from unanswered calls",
      stat: "$50K saved annually",
    },
    {
      icon: Zap,
      title: "Responds Instantly",
      description: "Removes 70% conversion loss from delays",
      stat: "70% conversion recovery",
    },
    {
      icon: Target,
      title: "Ensures Every Follow-up",
      description: "Reclaims ~80% of otherwise-wasted leads",
      stat: "80% lead recovery",
    },
  ]

  const comparison = [
    {
      system: "Traditional CRM (HubSpot/Salesforce)",
      capability: "Tracks leads and notifies humans",
      limitation: "Only logs data - humans do the work",
    },
    {
      system: "SuccessNOW.ai",
      capability: "Acts on leads automatically",
      limitation: "Does the selling and marketing for you",
    },
  ]

  const faqs = [
    {
      question: "How does SuccessNOW differ from a CRM or marketing suite?",
      answer:
        "A CRM like HubSpot or Salesforce only tracks leads and notifies humans. SuccessNOW acts on leads. It immediately calls/texts them with AI agents, and also runs ads and SEO itself. In short, CRMs log data; SuccessNOW does the selling and marketing for you.",
    },
    {
      question: "Can I use my existing website and tools?",
      answer:
        "Yes. You can keep your domain and integrate your CRM or email platform. SuccessNOW will connect to them out of the box. If you prefer, our system can also build a new site/funnel for you immediately. The AI agents and campaigns will work regardless, pushing data into your chosen tools automatically.",
    },
    {
      question: "How long to set up and see results?",
      answer:
        "Setup is fast. Our demo sites and funnels go live in minutes, and AdsNow campaigns can launch immediately. The AI agents start handling leads from day one. Many pilot users report new leads and appointments within 24–48 hours of launch.",
    },
    {
      question: "Do I still need marketing staff?",
      answer:
        "SuccessNOW is designed to augment or replace routine sales/marketing tasks. Your team can focus on closing deals and strategy, while the AI handles lead capture, follow-up, and traffic generation. You may still oversee the process, but you won't need extra hiring or agencies to keep up with demand.",
    },
    {
      question: "What if I already use other tools (e.g. GoHighLevel, HubSpot)?",
      answer:
        "You can integrate SuccessNOW with most systems via API. Unlike GoHighLevel or HubSpot, SuccessNOW adds true AI lead engagement. For example, HubSpot costs $100+/user and doesn't auto-call leads, whereas SuccessNOW engages leads instantly for a flat fee. It even includes built-in ads and SEO that those platforms lack. Think of SuccessNOW as a plug-and-play growth engine, rather than just a toolset.",
    },
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <StarryBackground />

      <StructuredData schema={aiAutomationPageSchema} />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-8 px-6 py-2 text-sm font-medium border-cyan-400/30 text-cyan-400 bg-cyan-400/10 hover:border-pink-500/50 hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-300"
            >
              SuccessNOW.ai
            </Badge>

            <div className="mb-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg backdrop-blur-sm max-w-4xl mx-auto">
              <div className="text-cyan-400 font-semibold text-sm mb-2">ANSWER:</div>
              <p className="text-white font-bold text-lg leading-tight">
                SuccessNOW.ai is the brain that ties everything together, orchestrating your entire sales funnel with
                intelligent automation. Once set up, it builds your website/funnels, deploys AdsNow.ai campaigns,
                engages leads via SalesagentNOW.ai, and boosts organic traffic via SEOExperts.ai.
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              AI Automation &
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Orchestration
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-cyan-400 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
              Your AI-Run Sales Engine: The brain that orchestrates everything automatically
            </p>

            <div className="mb-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h3 className="text-cyan-400 font-semibold mb-2">• 24/7 AI Workforce</h3>
                  <p className="text-gray-300 text-sm">AI super agents that never sleep</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h3 className="text-cyan-400 font-semibold mb-2">• Complete Marketing Stack</h3>
                  <p className="text-gray-300 text-sm">Everything included in one platform</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h3 className="text-cyan-400 font-semibold mb-2">• Turnkey Solution</h3>
                  <p className="text-gray-300 text-sm">$998 setup covers entire tech stack</p>
                </div>
              </div>
            </div>

            <VoiceSnippetPlayer
              text="SuccessNOW.ai is your AI-run sales engine that orchestrates everything automatically. It replaces many tools: it's your CRM plus website builder plus ad manager plus content optimizer plus AI sales team all in one turnkey solution."
              category="ai-automation-hero"
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
                Six powerful capabilities that orchestrate your entire business
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

        {/* Pain Point Eliminator */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Pain Point Eliminator</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                SuccessNOW fixes the classic lead leaks that cost businesses thousands
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {painPoints.map((point, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group text-center"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                      <point.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{point.description}</p>
                    <Badge
                      variant="outline"
                      className="border-cyan-400/30 text-cyan-400 bg-cyan-400/10 group-hover:border-pink-500/50 group-hover:text-pink-400 group-hover:bg-pink-500/10 transition-all duration-300"
                    >
                      {point.stat}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg backdrop-blur-sm text-center">
              <p className="text-gray-300">
                <span className="text-cyan-400 font-semibold">Automating these fixes drives immediate ROI.</span> Stop
                losing leads to after-hours calls, slow responses, and missed follow-ups.
              </p>
            </div>
          </div>
        </section>

        {/* CRM Comparison */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">SuccessNOW vs Traditional CRMs</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the difference between tracking leads and actually converting them
              </p>
            </div>

            <div className="space-y-6">
              {comparison.map((item, index) => (
                <Card
                  key={index}
                  className={`${
                    item.system === "SuccessNOW.ai"
                      ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/50 shadow-[0_0_20px_rgba(0,191,255,0.3)]"
                      : "bg-gray-900/80 border-gray-700/50"
                  } backdrop-blur-sm transition-all duration-300`}
                >
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-4 items-center">
                      <div>
                        <h3
                          className={`text-xl font-bold mb-2 ${
                            item.system === "SuccessNOW.ai" ? "text-cyan-400" : "text-white"
                          }`}
                        >
                          {item.system}
                        </h3>
                      </div>
                      <div>
                        <p className="text-gray-300">{item.capability}</p>
                      </div>
                      <div>
                        <p className={`text-sm ${item.system === "SuccessNOW.ai" ? "text-cyan-300" : "text-gray-400"}`}>
                          {item.limitation}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing & Value */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Complete Tech Stack Included</h2>

            <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 p-8 md:p-12 mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-3xl font-bold text-cyan-400 mb-4">$998 One-Time Setup</h3>
                  <p className="text-gray-300 mb-6">
                    Covers the entire tech stack that usually takes months and thousands to set up
                  </p>

                  <div className="space-y-3">
                    {[
                      "Custom site/funnels",
                      "AdsNow Platinum",
                      "AI SEO optimization",
                      "Unlimited AI agents",
                      "2 months free",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-cyan-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center mx-auto mb-6">
                    <Settings className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-gray-300 text-sm">
                    Like buying Salesforce + HubSpot + marketing agency but getting an "AI sales team" instead
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">FAQs</h2>
              <p className="text-xl text-gray-300">Common questions about AI automation & orchestration</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Automate Your Growth?</h2>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Claim our pilot program and get the full SuccessNOW suite – AI agents, websites, ads and SEO – for only
                $997 setup + 3 months free. 100% risk-free (30-day guarantee).
              </p>

              <VoiceSnippetPlayer
                text="Ready to automate your growth? Claim our pilot program and get the full SuccessNOW suite – AI agents, websites, ads and SEO – for only $997 setup plus 3 months free. Don't just manage leads, convert them automatically."
                category="ai-automation-cta"
                variant="compact"
              />

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-pink-500 hover:to-purple-600 text-white px-8 py-3 shadow-[0_0_20px_rgba(0,191,255,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all duration-300"
                  asChild
                >
                  <Link href="/signup">
                    <Settings className="w-5 h-5 mr-2" />
                    Start AI Automation
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

export default AIAutomationClientPage
