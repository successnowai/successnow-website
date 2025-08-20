"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageSquare, Lightbulb, Users, PhoneCall, AlertTriangle, Zap } from "lucide-react"
import Link from "next/link"
import { DemoFAQ } from "@/components/faq/demo-faq"
import AICallInterface from "@/components/call/ai-call-interface"
import Script from "next/script"

export default function DemoClientPage() {
  const activeDemo = useState("voice")

  useEffect(() => {
    const handleMicrophonePermissions = () => {
      if (typeof navigator !== "undefined" && navigator.permissions) {
        navigator.permissions
          .query({ name: "microphone" as PermissionName })
          .then((result) => {
            if (result.state === "granted") {
              console.log("Microphone access already granted")
            } else if (result.state === "prompt") {
              console.log("User will be prompted for microphone access")
            }
          })
          .catch((err) => {
            console.log("Permission query not supported:", err)
          })
      }
    }

    // Small delay to ensure iframe is loaded
    const timer = setTimeout(handleMicrophonePermissions, 1000)
    return () => clearTimeout(timer)
  }, [])

  const demoInstructions = [
    {
      icon: MessageSquare,
      title: "Ask How It Can Help Your Business",
      description: "Start by asking: 'How can you help my business?' or 'What services do you offer?'",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Tell It Your Business Type",
      description: "Say: 'I run a [restaurant/law firm/dental practice/etc.]' and see how it adapts",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: PhoneCall,
      title: "Ask About Client Calling",
      description: "Try: 'How would you call my clients?' or 'Show me how you'd reach out to prospects'",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Phone,
      title: "Test Call Answering",
      description: "Ask: 'How would you answer my business phone?' or 'What if someone calls after hours?'",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: AlertTriangle,
      title: "Give It Difficult Situations",
      description: "Challenge it: 'What if a customer is angry?' or 'How do you handle complaints?'",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Explore Other Capabilities",
      description: "Ask: 'What else can you do?' or 'Can you help with scheduling/follow-ups/lead generation?'",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Script
        src="https://botdisplay.com/chat-widget.js"
        data-color="#FF007A"
        data-assistant-id="1753831573951x589054349879485360"
        data-account-id="UMy2Y82UItPQzkvXP7VK"
        data-position="bottom-left"
        data-theme="dark"
        data-show-prompt="false"
        data-prompt-message="Ask me about voice AI 🚀"
        data-startup-message="How can I help you today?"
        data-assistant-name="ASIA | Advanced Sales Intelligence Agent"
        data-button-icon="chat"
        data-greeting-message="👋 Hey there! My name is {A.S.I.A | Advanced Sales Intelligence Agent} and I'm here to find out why you aren't making money with voice ai, ask me anything."
        data-prompts='[{"text": "What is AI Assistant?"}, {"text": "How do I get started?"}, {"text": "What does it cost?"}, {"text": "How does it work?"}]'
      />

      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Connect with Robin Instantly</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Call directly or have our AI call you back in 30 seconds
            </p>
          </div>
          <div className="flex justify-center">
            <AICallInterface />
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Try SuccessNOW AI Live Demo
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience our AI agent in real-time. Ask it questions, test different scenarios, and see how it can
            transform your business.
          </p>
        </div>
      </section>

      {/* Main Demo Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Demo Instructions Cards */}
            <div className="lg:col-span-1 space-y-4">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 border border-blue-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-lg font-semibold">How to Demo the AI</h3>
                </div>
                <p className="text-sm text-gray-300">
                  Click the microphone in the demo and start talking! The AI will respond naturally to your questions
                  and scenarios.
                </p>
              </div>

              {demoInstructions.map((instruction, index) => {
                const IconComponent = instruction.icon
                return (
                  <Card
                    key={index}
                    className="bg-gray-900/50 border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-r ${instruction.color} flex items-center justify-center flex-shrink-0`}
                        >
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">{instruction.title}</h4>
                          <p className="text-xs text-gray-400 leading-relaxed">{instruction.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}

              <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg p-4 border border-green-500/30">
                <h4 className="font-semibold mb-2 text-sm">💡 Pro Tip</h4>
                <p className="text-xs text-gray-300">
                  Be specific about your business type and challenges. The more details you give, the better the AI can
                  demonstrate its capabilities!
                </p>
              </div>
            </div>

            {/* Large Demo Iframe */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700/50">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">Live Voice AI Demo</h3>
                  <p className="text-gray-400">Click the microphone and start talking to experience our AI in action</p>
                </div>

                <div className="aspect-[4/3] bg-black rounded-lg border border-gray-700 overflow-hidden">
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                    <iframe
                      src="https://iframes.ai/o/1753831620452x607403809624031200?color=ed10cc&icon=bot"
                      allow="microphone"
                      style={{ width: "100%", height: "100%", border: "none" }}
                      id="assistantFrame"
                      title="SuccessNOW AI Voice Demo"
                    />
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-gray-300 mb-4">Ready to implement this for your business?</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Get Started Now
                      </Button>
                    </a>
                    <Link href="/book">
                      <Button
                        variant="outline"
                        className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10 bg-transparent"
                      >
                        Book a Strategy Call
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You're Experiencing Section */}
      <section className="py-16 px-4 bg-gray-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You're Experiencing Right Now</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              This AI agent can be deployed across your entire business infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Natural Conversation",
                description:
                  "The AI understands context, remembers what you said, and responds like a human team member",
              },
              {
                title: "Business Intelligence",
                description:
                  "It knows your industry, common challenges, and can provide specific solutions for your business type",
              },
              {
                title: "24/7 Availability",
                description:
                  "This same AI can answer your phones, chat with website visitors, and handle inquiries anytime",
              },
              {
                title: "Lead Qualification",
                description: "Watch how it asks the right questions to identify serious prospects vs casual browsers",
              },
              {
                title: "Appointment Setting",
                description: "It can check your calendar and book meetings while you're talking to it",
              },
              {
                title: "Problem Solving",
                description: "Give it difficult scenarios - it handles objections, complaints, and complex situations",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-300">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <DemoFAQ />
    </div>
  )
}
