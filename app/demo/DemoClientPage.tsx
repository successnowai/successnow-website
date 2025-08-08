"use client"

import StarryBackground from "@/components/ui/starry-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Bot, MessageSquare, Globe, Zap, Target, TrendingUp, Users, CheckCircle, PhoneCall, Calendar } from 'lucide-react'
import Link from "next/link"
import { useEffect, useState } from "react"
import { GlowingOrbCta } from "@/components/ui/glowing-orb-cta"
import { DemoPopup } from '@/components/ui/demo-popup'

function AiAssistantFrame() {
  useEffect(() => {
    const frame = document.getElementById("assistantFrame")
    const handleLoad = () => {
      if (navigator.permissions) {
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
            console.error("Microphone permission query failed:", err)
          })
      }
    }

    if (frame) {
      frame.addEventListener("load", handleLoad)
    }

    return () => {
      if (frame) {
        frame.removeEventListener("load", handleLoad)
      }
    }
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center">
      <iframe
        src="https://iframes.ai/o/1750493608926x366840044583387140?color=00BFFF&icon=bot"
        allow="microphone"
        className="w-full h-full border-none rounded-lg"
        id="assistantFrame"
        title="AI Assistant"
      />
    </div>
  )
}

export default function DemoClientPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <>
      <div className="relative min-h-screen w-full bg-black overflow-hidden">
        <StarryBackground />
        <div className="relative z-10 min-h-screen">
          {/* Header */}
          <div className="absolute top-4 left-4 z-20">
            <Link href="/">
              <Button
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Hero Section */}
          <section className="relative py-20 sm:py-32 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black to-purple-900/20"></div>
            <div className="absolute inset-0 mix-blend-overlay" style={{ backgroundImage: 'url(/images/neon-cyberpunk-bg.png)', backgroundSize: 'cover', opacity: 0.1 }}></div>
            
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="mb-10">
                <Zap className="w-16 h-16 mx-auto text-yellow-400 mb-6 animate-pulse" />
                <h1 className="text-4xl sm:text-6xl font-bold mb-4">
                  Experience the Future,
                  <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Instantly</span>
                </h1>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  No forms, no waiting lists, no scheduling conflicts. Talk to our advanced AI agent right now and get a personalized, interactive demo of the SuccessNOW platform.
                </p>
              </div>

              <div className="flex justify-center mb-12">
                <GlowingOrbCta 
                  size="xl"
                  label="Click to Start Your Live AI Demo"
                  onClick={() => setIsPopupOpen(true)}
                />
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">What you can do in your live demo:</h2>
                <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <div className="bg-gray-900/30 p-4 rounded-lg border border-white/10">
                    <h3 className="font-semibold">Test AI Capabilities</h3>
                    <p className="text-sm text-gray-400">Ask complex questions and see how it responds.</p>
                  </div>
                  <div className="bg-gray-900/30 p-4 rounded-lg border border-white/10">
                    <h3 className="font-semibold">Simulate Scenarios</h3>
                    <p className="text-sm text-gray-400">Role-play as a customer or a new lead.</p>
                  </div>
                  <div className="bg-gray-900/30 p-4 rounded-lg border border-white/10">
                    <h3 className="font-semibold">Explore Features</h3>
                    <p className="text-sm text-gray-400">Ask the AI to explain specific platform features.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 border-t border-white/10 pt-8">
                <h3 className="text-xl font-semibold mb-4">Prefer a Human Touch?</h3>
                <p className="text-gray-400 mb-6">We get it. Schedule a call with one of our human AI specialists.</p>
                <Button variant="outline" size="lg" className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400 px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule with a Specialist
                </Button>
              </div>
            </div>
          </section>

          {/* Instructions Section */}
          <section className="py-12 px-4 sm:px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">How to Use This Demo</h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#00BFFF]/20 rounded-lg flex items-center justify-center mb-4">
                      <MessageSquare className="w-6 h-6 text-[#00BFFF]" />
                    </div>
                    <CardTitle className="text-white">Step 1: Start Conversation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Click the AI assistant below and start by telling it what type of business you run. For example: "I
                      own a dental practice" or "I run a construction company."
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#00BFFF]/20 rounded-lg flex items-center justify-center mb-4">
                      <Bot className="w-6 h-6 text-[#00BFFF]" />
                    </div>
                    <CardTitle className="text-white">Step 2: Ask About Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Ask how SuccessNOW.ai can help your specific business with AI tools, website conversion, lead
                      generation, or automated marketing campaigns.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#00BFFF]/20 rounded-lg flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-[#00BFFF]" />
                    </div>
                    <CardTitle className="text-white">Step 3: Get Custom Plan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Receive personalized recommendations for implementing AI Super Agents, conversion-optimized
                      websites, and automated ad campaigns for your business.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Sample Questions */}
              <div className="bg-gradient-to-r from-[#00BFFF]/10 to-[#00A3D9]/10 rounded-xl p-8 mb-12 border border-[#00BFFF]/20">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Sample Questions to Ask</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-[#00BFFF] font-semibold mb-3">About Your Business:</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• "I run a [business type], how can SuccessNOW.ai help me?"</li>
                      <li>• "What AI tools work best for [your industry]?"</li>
                      <li>• "How can I get more leads for my business?"</li>
                      <li>• "I need a website that converts visitors to customers"</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[#00BFFF] font-semibold mb-3">About Our Solutions:</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• "How do AI Super Agents work for lead generation?"</li>
                      <li>• "Can you create and manage paid ads for me?"</li>
                      <li>• "What makes your websites convert better?"</li>
                      <li>• "How does automated marketing save time?"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AI Assistant Demo */}
          <section className="py-12 px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 shadow-2xl rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-[#00BFFF] to-[#00A3D9] p-4">
                  <h3 className="text-white font-bold text-lg text-center">SuccessNOW.ai Business Consultant</h3>
                  <p className="text-white/90 text-sm text-center mt-1">
                    Ask me about your business and how we can help you grow
                  </p>
                </div>
                <div className="h-[500px]">
                  <AiAssistantFrame />
                </div>
              </div>
            </div>
          </section>

          {/* What You'll Learn Section */}
          <section className="py-12 px-4 sm:px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">What You'll Discover</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <Globe className="w-8 h-8 text-[#00BFFF] mb-4" />
                    <CardTitle className="text-white">AI-Powered Websites</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Learn how our custom-designed websites use AI to convert more visitors into leads and customers.
                    </p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Smart conversion optimization</li>
                      <li>• AI chatbots for instant engagement</li>
                      <li>• Mobile-responsive design</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <Users className="w-8 h-8 text-[#00BFFF] mb-4" />
                    <CardTitle className="text-white">AI Super Agents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Discover how AI agents work 24/7 to qualify leads, book appointments, and nurture prospects.
                    </p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• 24/7 lead qualification</li>
                      <li>• Automated appointment booking</li>
                      <li>• Intelligent follow-up sequences</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <Target className="w-8 h-8 text-[#00BFFF] mb-4" />
                    <CardTitle className="text-white">Automated Paid Ads</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      See how AI creates, launches, manages, and optimizes paid ad campaigns to drive quality traffic.
                    </p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• AI-generated ad copy and creatives</li>
                      <li>• Smart budget optimization</li>
                      <li>• Real-time performance tracking</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <TrendingUp className="w-8 h-8 text-[#00BFFF] mb-4" />
                    <CardTitle className="text-white">Lead Generation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Understand how our integrated system captures, qualifies, and converts leads automatically.
                    </p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Multi-channel lead capture</li>
                      <li>• Intelligent lead scoring</li>
                      <li>• Automated nurture campaigns</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <CheckCircle className="w-8 h-8 text-[#00BFFF] mb-4" />
                    <CardTitle className="text-white">Conversion Optimization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Learn how AI continuously tests and improves your website and campaigns for better results.
                    </p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• A/B testing automation</li>
                      <li>• Performance analytics</li>
                      <li>• Continuous optimization</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <Zap className="w-8 h-8 text-[#00BFFF] mb-4" />
                    <CardTitle className="text-white">Business Automation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Discover how to automate repetitive tasks and focus on growing your business.
                    </p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Workflow automation</li>
                      <li>• Customer communication</li>
                      <li>• Sales process optimization</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-[#00BFFF]/20 to-[#00A3D9]/20 rounded-xl p-8 border border-[#00BFFF]/30">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  After talking with our AI assistant, take the next step and get a custom SuccessNOW.ai solution for your
                  business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/signup">
                    <Button className="bg-[#00BFFF] hover:bg-[#00A3D9] text-white px-8 py-3 text-lg font-semibold">
                      Get Started Now
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button
                      variant="outline"
                      className="border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white px-8 py-3 text-lg bg-transparent"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <DemoPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  )
}
