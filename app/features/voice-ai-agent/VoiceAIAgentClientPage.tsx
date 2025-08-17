"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import StarryBackground from "@/components/ui/starry-background"
import { Phone, Globe, BarChart3, Users, Zap, Bot, Target, Headphones } from "lucide-react"
import Link from "next/link"
import { VoiceSnippetPlayer } from "@/components/voice/voice-snippet-player"
import { StructuredData, generateWebPageSchema } from "@/components/seo/enhanced-structured-data"

const VoiceAIAgentClientPage = () => {
  const voiceAIPageSchema = generateWebPageSchema(
    "Voice AI Sales Agent - SalesBotNow.ai | 24/7 Lead Conversion",
    "SalesBotNow.ai instantly answers every call and chat in seconds with 24/7 AI lead conversion, human-like voice, omni-channel coverage, and competitive $0.07/min pilot pricing.",
    "https://successnow.ai/features/voice-ai-agent",
    [
      { name: "24/7 AI Lead Conversion", voiceData: undefined },
      { name: "Omni-Channel Coverage", voiceData: undefined },
      { name: "Human-like Voice Technology", voiceData: undefined },
      { name: "Competitor Comparison", voiceData: undefined },
      { name: "Voice AI Agent FAQs", voiceData: undefined },
    ],
  )

  const keyFacts = [
    {
      icon: Zap,
      title: "Instant Engagement",
      description:
        "The AI agent launches a conversation within ~3 seconds of a website visit or phone call, preventing the ~97% drop-off that happens when leads go unanswered.",
      highlight: "3-second response time",
    },
    {
      icon: Globe,
      title: "Omni-Channel",
      description:
        "A single SalesBotNow instance handles voice calls (VoIP or cellular), SMS/MMS, WhatsApp, email and web/social chat. Configure it once and it works everywhere.",
      highlight: "All channels unified",
    },
    {
      icon: Target,
      title: "Automated Qualification & Booking",
      description:
        "The bot asks qualifying questions, confirms details, and schedules follow-up appointments or demos on your calendar with warm handoffs to human reps.",
      highlight: "Full automation",
    },
    {
      icon: BarChart3,
      title: "CRM Sync & Analytics",
      description:
        "Every conversation is logged with transcripts, tags, and sentiment analysis for ROI measurement. AI automatically updates your CRM in real time.",
      highlight: "Real-time updates",
    },
    {
      icon: Headphones,
      title: "Human-like Voice (Quantum Voice)",
      description:
        "SalesBotNow uses realistic AI voices so the experience feels natural. Prospects hear a friendly, human tone and personalized responses.",
      highlight: "Natural conversations",
    },
    {
      icon: Users,
      title: "Scalable & Multilingual",
      description:
        "Deploy as many agents as needed; the same license covers unlimited conversations. Supports multiple languages for global reach.",
      highlight: "Unlimited scale",
    },
  ]

  const competitors = [
    {
      platform: "SalesBotNow.ai (SuccessNOW)",
      cost: "$0.07/min",
      coverage: "Voice + SMS/Email/Web/Social",
      notes: "Multi-channel AI agent; includes CRM sync, booking",
      highlight: true,
    },
    {
      platform: "Lindy AI",
      cost: "~$0.19/min (GPT-4 calls)",
      coverage: "Primarily voice (some SMS/Email)",
      notes: "Limited to answering calls; higher rate",
      highlight: false,
    },
    {
      platform: "JustCall AI",
      cost: "$0.99/min (calls)",
      coverage: "Voice + messaging (no Web chat)",
      notes: "Higher cost; no built-in CRM integration",
      highlight: false,
    },
    {
      platform: "Synthflow",
      cost: "~$0.13/min (post-quota)",
      coverage: "Voice (Salesforce integration)",
      notes: "Voice-only; limited to Salesforce environment",
      highlight: false,
    },
    {
      platform: "Regal AI",
      cost: "~$0.20/min",
      coverage: "Enterprise voice",
      notes: "Contact-center focus; expensive",
      highlight: false,
    },
    {
      platform: "Resemble AI",
      cost: "$0.018/min",
      coverage: "Text-to-Speech only",
      notes: "Voice cloning (no conversation capabilities)",
      highlight: false,
    },
    {
      platform: "Thinkrr.ai",
      cost: "$0.18–$0.22/min",
      coverage: "Voice agent for agencies",
      notes: "High per-minute cost",
      highlight: false,
    },
  ]

  const faqs = [
    {
      question: "What exactly is a Voice AI Sales Agent?",
      answer:
        "It's an AI-powered virtual salesperson. When a lead calls or chats your site, the agent picks up like a human would. It talks with the prospect, gathers info, and even books meetings automatically. In short, it turns phone calls and chats into qualified leads without needing a real person on that first call.",
    },
    {
      question: "How quickly does it respond to leads?",
      answer:
        "Lightning fast – our AI launches a response within about 3 seconds of a call or website visit. This speed prevents the typical ~97% of leads who abandon slow or no-response systems.",
    },
    {
      question: "Does it only do voice calls?",
      answer:
        "No. One SalesBotNow.ai bot does voice calls and all messaging channels. It can talk on the phone, answer text/SMS, reply to emails, chat on your website or Facebook/Instagram messages, even WhatsApp. All from one setup.",
    },
    {
      question: "What happens after the bot qualifies a lead?",
      answer:
        "If the lead is ready to buy or schedule, the bot will schedule an appointment or send a payment link. It does a warm hand-off to a human rep if needed – passing along the whole conversation context. Everything is logged in your CRM so your team has the complete history.",
    },
    {
      question: "How does pricing work?",
      answer:
        "SalesBotNow charges per minute of voice use. During our pilot, it's $0.07/minute for unlimited conversations. By contrast, competitors like Lindy.ai charge ~$0.19/min (GPT-4 voice) and JustCall ~$0.99/min. You only pay for what you use – there are no seat fees and web chat/SMS use is included.",
    },
    {
      question: "Which businesses benefit most?",
      answer:
        "Any business with incoming leads on calls or chats. For example, auto dealers use it to pre-qualify buyers and schedule test drives, realtors to book showings instantly, gyms to confirm class sign-ups (cutting no-shows), medspas to schedule appointments and request reviews, and law firms to book client consultations. Each AI can be trained on your industry specifics so it sounds just like your sales rep.",
    },
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <StarryBackground />

      <StructuredData schema={voiceAIPageSchema} />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-8 px-6 py-2 text-sm font-medium border-cyan-400/30 text-cyan-400 bg-cyan-400/10 hover:border-pink-500/50 hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-300"
            >
              SalesBotNow.ai
            </Badge>

            <div className="mb-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg backdrop-blur-sm max-w-4xl mx-auto">
              <div className="text-cyan-400 font-semibold text-sm mb-2">ANSWER:</div>
              <p className="text-white font-bold text-lg leading-tight">
                SalesBotNow.ai instantly answers every incoming call or web chat in seconds, acting like your best
                salesperson with a friendly, human-like voice that qualifies prospects and books appointments
                automatically 24/7.
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Voice AI Sales Agent
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                {" "}
                (SalesBotNow.ai)
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-cyan-400 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
              24/7 AI Lead Conversion: Never miss another lead with instant, human-like responses
            </p>

            <div className="mb-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h3 className="text-cyan-400 font-semibold mb-2">• 3-Second Response</h3>
                  <p className="text-gray-300 text-sm">Instant engagement prevents 97% lead drop-off</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h3 className="text-cyan-400 font-semibold mb-2">• Omni-Channel Coverage</h3>
                  <p className="text-gray-300 text-sm">Voice, SMS, email, web chat, WhatsApp unified</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h3 className="text-cyan-400 font-semibold mb-2">• $0.07/min Pilot Pricing</h3>
                  <p className="text-gray-300 text-sm">90% less than competitors like JustCall</p>
                </div>
              </div>
            </div>

            <VoiceSnippetPlayer
              text="SalesBotNow.ai is your 24/7 AI lead conversion system that instantly answers every call and chat in seconds. Acting like your best salesperson, it greets prospects with human-like voice, qualifies them automatically, and books appointments around the clock."
              category="voice-ai-hero"
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
                Six powerful capabilities that transform how you handle leads
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

        {/* Competitor Comparison */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Competitor Comparison</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how SalesBotNow.ai delivers more value at a fraction of the cost
              </p>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-full">
                <div className="grid grid-cols-4 gap-4 mb-4 text-sm font-semibold text-cyan-400">
                  <div className="p-3">Platform</div>
                  <div className="p-3">Voice AI Cost</div>
                  <div className="p-3">Coverage</div>
                  <div className="p-3">Notes</div>
                </div>

                {competitors.map((competitor, index) => (
                  <Card
                    key={index}
                    className={`mb-4 ${
                      competitor.highlight
                        ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/50 shadow-[0_0_20px_rgba(0,191,255,0.3)]"
                        : "bg-gray-900/80 border-gray-700/50"
                    } backdrop-blur-sm transition-all duration-300`}
                  >
                    <CardContent className="p-0">
                      <div className="grid grid-cols-4 gap-4 p-4 text-sm">
                        <div className={competitor.highlight ? "text-cyan-400 font-semibold" : "text-white"}>
                          {competitor.platform}
                        </div>
                        <div className={competitor.highlight ? "text-cyan-400 font-semibold" : "text-gray-300"}>
                          {competitor.cost}
                        </div>
                        <div className="text-gray-300">{competitor.coverage}</div>
                        <div className="text-gray-400 text-xs">{competitor.notes}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg backdrop-blur-sm">
              <p className="text-gray-300 text-center">
                <span className="text-cyan-400 font-semibold">SalesBotNow.ai costs a tiny fraction of others</span>{" "}
                while covering all channels. For example, Retell.ai and Synthflow only offer voice (at $0.07–0.13/min),
                whereas SalesBotNow covers voice and chat for $0.07–$0.14/min. There are no per-seat licenses or hidden
                fees – you pay only for usage.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">FAQs</h2>
              <p className="text-xl text-gray-300">Common questions about Voice AI Sales Agents</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready for 24/7 Lead Conversion?</h2>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Never miss another lead with SalesBotNow.ai's instant, human-like AI responses
              </p>

              <VoiceSnippetPlayer
                text="Ready for 24/7 lead conversion? Never miss another lead with SalesBotNow.ai's instant, human-like AI responses that qualify prospects and book appointments automatically."
                category="voice-ai-cta"
                variant="compact"
              />

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-pink-500 hover:to-purple-600 text-white px-8 py-3 shadow-[0_0_20px_rgba(0,191,255,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all duration-300"
                  asChild
                >
                  <Link href="/signup">
                    <Phone className="w-5 h-5 mr-2" />
                    Start Voice AI Agent
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

export default VoiceAIAgentClientPage
