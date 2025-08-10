"use client"

import { useState } from "react"
import { StarryBackground } from "@/components/ui/starry-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Zap,
  Target,
  Rocket,
  Phone,
  MessageSquare,
  Calendar,
  BarChart3,
  Users,
  Shield,
  Headphones,
  Globe,
  Smartphone,
  Bot,
  Brain,
  TrendingUp,
} from "lucide-react"

export default function SignupPage() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white relative overflow-hidden">
      <StarryBackground />

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-[#00BFFF] to-[#00FF88] text-black font-bold px-6 py-2">
            🔥 LIMITED TIME: 90% OFF
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00BFFF] via-white to-[#00FF88] bg-clip-text text-transparent">
            The SuccessNOW AI Systems & AI Agents Platform
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with AI-powered voice agents, automated lead qualification, and 24/7 customer
            service
          </p>

          {/* First Pulsating Button - Top of Page */}
          <div className="mb-12">
            <Button
              size="lg"
              asChild
              className="relative overflow-hidden bg-gradient-to-r from-[#00BFFF] via-[#0080FF] to-[#00BFFF] text-white font-bold px-12 py-6 text-xl rounded-xl border-2 border-[#00BFFF] shadow-[0_0_20px_#00BFFF,0_0_40px_#00BFFF,0_0_60px_#00BFFF] animate-pulse hover:scale-105 hover:shadow-[0_0_30px_#00BFFF,0_0_60px_#00BFFF,0_0_90px_#00BFFF] transition-all duration-300 transform hover:skew-x-1"
              style={{
                animation: "pulse-glow 2s ease-in-out infinite alternate",
                boxShadow:
                  "0 0 20px #00BFFF, 0 0 40px #00BFFF, 0 0 60px #00BFFF, inset 0 0 20px rgba(0, 191, 255, 0.2)",
              }}
            >
              <a href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
                <span className="relative z-10 flex items-center gap-3">
                  <Rocket className="w-6 h-6" />🚀 GET AI NOW - $3,488
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000" />
              </a>
            </Button>
          </div>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#0A0A0F]/80 backdrop-blur-xl border border-[#00BFFF]/30 rounded-xl p-2 flex">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                !isAnnual
                  ? "bg-gradient-to-r from-[#00BFFF] to-[#00FF88] text-black shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isAnnual
                  ? "bg-gradient-to-r from-[#00BFFF] to-[#00FF88] text-black shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Annual (Save 20%)
            </button>
          </div>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-[#0A0A0F]/80 backdrop-blur-xl border-2 border-[#00BFFF]/30 shadow-[0_0_30px_rgba(0,191,255,0.3)] hover:shadow-[0_0_50px_rgba(0,191,255,0.5)] transition-all duration-300 hover:border-[#00BFFF]/50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/5 via-transparent to-[#00FF88]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="text-center relative z-10">
              <Badge className="mx-auto mb-4 bg-gradient-to-r from-[#00FF88] to-[#00BFFF] text-black font-bold">
                Most Popular
              </Badge>
              <CardTitle className="text-3xl md:text-4xl font-bold text-[#00BFFF] mb-2">
                Enterprise AI Platform
              </CardTitle>
              <div className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-[#00FF88]">${isAnnual ? "9,970" : "997"}</span>
                <span className="text-xl text-gray-400 ml-2">{isAnnual ? "/year" : "/month"}</span>
              </div>
              {isAnnual && (
                <Badge className="bg-[#00FF88]/20 text-[#00FF88] border border-[#00FF88]/30">
                  Save $1,994 annually
                </Badge>
              )}
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold text-[#00BFFF] mb-4 flex items-center gap-2">
                    <Bot className="w-5 h-5" />
                    AI Voice Agents
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00FF88]" />
                      <span>Unlimited AI Voice Agents</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00FF88]" />
                      <span>Advanced Lead Qualification</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00FF88]" />
                      <span>24/7 Customer Service</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00FF88]" />
                      <span>Appointment Scheduling</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#00BFFF] mb-4 flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    Platform Features
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00FF88]" />
                      <span>Custom CRM Integration</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00FF88]" />
                      <span>Real-time Analytics</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00FF88]" />
                      <span>White-label Options</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00FF88]" />
                      <span>API Access & Webhooks</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bonus Cards */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-gradient-to-br from-[#00BFFF]/10 to-[#0080FF]/5 border border-[#00BFFF]/30 hover:border-[#00BFFF]/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[#00BFFF]/20 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-[#00BFFF]" />
                      </div>
                      <h4 className="text-lg font-bold text-white">BONUS: 50% OFF Platform Fees</h4>
                    </div>
                    <p className="text-gray-400 mb-2">Regular $1,994/month for all AI tools</p>
                    <p className="text-2xl font-bold text-[#00FF88]">Only $997/month</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-[#00BFFF]/10 to-[#0080FF]/5 border border-[#00BFFF]/30 hover:border-[#00BFFF]/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[#00BFFF]/20 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-[#00BFFF]" />
                      </div>
                      <h4 className="text-lg font-bold text-white">BONUS: 50% OFF AI Voice Usage</h4>
                    </div>
                    <p className="text-gray-400 mb-2">Regular $0.28/minute for calls</p>
                    <p className="text-2xl font-bold text-[#00FF88]">Only $0.14/minute</p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-[#00BFFF] to-[#00FF88] text-black font-bold px-8 py-4 text-lg rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,191,255,0.5)]"
                >
                  <a href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
                    Start Your AI Transformation
                  </a>
                </Button>
                <p className="text-sm text-gray-400 mt-4">
                  30-day money-back guarantee • No setup fees • Cancel anytime
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Total Value Card */}
        <div className="max-w-2xl mx-auto mb-8">
          <Card className="bg-[#0A0A0F]/80 backdrop-blur-xl border-2 border-[#00FF88]/30 shadow-[0_0_30px_rgba(0,255,136,0.3)] hover:shadow-[0_0_50px_rgba(0,255,136,0.5)] transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00FF88]/5 via-transparent to-[#00BFFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="text-center relative z-10">
              <CardTitle className="text-2xl font-bold text-[#00FF88] mb-4">Total Value Today</CardTitle>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>AI Platform Setup (Usually $15,000)</span>
                  <span className="text-[#00FF88] font-bold">FREE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Custom AI Training (Usually $8,000)</span>
                  <span className="text-[#00FF88] font-bold">FREE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Integration & Support (Usually $5,000)</span>
                  <span className="text-[#00FF88] font-bold">FREE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Smart AI Website (Usually $5,000)</span>
                  <span className="text-[#00FF88] font-bold">FREE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>2 months of platform fees included (Regular price $3,988)</span>
                  <span className="text-[#00FF88] font-bold">FREE</span>
                </div>
                <hr className="border-[#00BFFF]/30 my-4" />
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total Value:</span>
                  <span className="text-gray-400 line-through">$40,000</span>
                </div>
                <div className="flex justify-between items-center text-2xl font-bold">
                  <span className="text-[#00BFFF]">Your Price Today:</span>
                  <span className="text-[#00FF88]">$3,488</span>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Second Pulsating Button - After Total Today Card */}
        <div className="text-center mb-12">
          <Button
            size="lg"
            asChild
            className="relative overflow-hidden bg-gradient-to-r from-[#00FF88] via-[#00BFFF] to-[#00FF88] text-black font-bold px-12 py-6 text-xl rounded-xl border-2 border-[#00FF88] shadow-[0_0_20px_#00FF88,0_0_40px_#00FF88,0_0_60px_#00FF88] animate-pulse hover:scale-105 hover:shadow-[0_0_30px_#00FF88,0_0_60px_#00FF88,0_0_90px_#00FF88] transition-all duration-300 transform hover:skew-x-1"
            style={{
              animation: "pulse-glow 2s ease-in-out infinite alternate",
              boxShadow: "0 0 20px #00FF88, 0 0 40px #00FF88, 0 0 60px #00FF88, inset 0 0 20px rgba(0, 255, 136, 0.2)",
            }}
          >
            <a href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
              <span className="relative z-10 flex items-center gap-3">
                <Zap className="w-6 h-6" />⚡ SECURE YOUR AI SYSTEMS NOW - $3,488
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000" />
            </a>
          </Button>
        </div>

        {/* No-Brainer Offer */}
        <div className="max-w-3xl mx-auto mb-12">
          <Card className="bg-gradient-to-br from-[#FF6B35]/10 via-[#0A0A0F]/80 to-[#00FF88]/10 backdrop-blur-xl border-2 border-[#FF6B35]/50 shadow-[0_0_40px_rgba(255,107,53,0.4)] hover:shadow-[0_0_60px_rgba(255,107,53,0.6)] transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/10 via-transparent to-[#00FF88]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="text-center relative z-10">
              <Badge className="mx-auto mb-4 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white font-bold px-6 py-2 text-lg">
                🔥 NO-BRAINER OFFER
              </Badge>
              <CardTitle className="text-3xl font-bold text-white mb-4">This Is A Complete No-Brainer</CardTitle>
              <p className="text-xl text-gray-300 mb-6">
                You're getting $40,000 worth of AI systems for just $3,488. That's a savings of $36,512!
              </p>

              {/* Third Pulsating Button - In No-Brainer Card */}
              <div className="mb-6">
                <Button
                  size="lg"
                  asChild
                  className="relative overflow-hidden bg-gradient-to-r from-[#FF6B35] via-[#FF8C42] to-[#FF6B35] text-white font-bold px-16 py-8 text-2xl rounded-2xl border-2 border-[#FF6B35] shadow-[0_0_25px_#FF6B35,0_0_50px_#FF6B35,0_0_75px_#FF6B35] animate-pulse hover:scale-110 hover:shadow-[0_0_40px_#FF6B35,0_0_80px_#FF6B35,0_0_120px_#FF6B35] transition-all duration-300 transform hover:skew-x-2"
                  style={{
                    animation: "pulse-glow 1.5s ease-in-out infinite alternate",
                    boxShadow:
                      "0 0 25px #FF6B35, 0 0 50px #FF6B35, 0 0 75px #FF6B35, inset 0 0 25px rgba(255, 107, 53, 0.3)",
                  }}
                >
                  <a href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
                    <span className="relative z-10 flex items-center gap-4">
                      <Target className="w-8 h-8" />🎯 CLAIM THIS DEAL NOW - SAVE $36,512!
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000" />
                  </a>
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-[#0A0A0F]/60 rounded-lg p-4 border border-[#00BFFF]/30">
                  <div className="text-2xl font-bold text-[#00FF88]">90%</div>
                  <div className="text-sm text-gray-400">Savings</div>
                </div>
                <div className="bg-[#0A0A0F]/60 rounded-lg p-4 border border-[#00BFFF]/30">
                  <div className="text-2xl font-bold text-[#00FF88]">$36,512</div>
                  <div className="text-sm text-gray-400">You Save</div>
                </div>
                <div className="bg-[#0A0A0F]/60 rounded-lg p-4 border border-[#00BFFF]/30">
                  <div className="text-2xl font-bold text-[#00FF88]">24/7</div>
                  <div className="text-sm text-gray-400">AI Support</div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* What You Get */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center text-[#00BFFF] mb-8">Everything You Get Today</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Phone, title: "AI Voice Agents", desc: "Unlimited intelligent voice assistants" },
              { icon: MessageSquare, title: "AI Chat Support", desc: "24/7 automated customer service" },
              { icon: Calendar, title: "Smart Scheduling", desc: "Automated appointment booking" },
              { icon: BarChart3, title: "Advanced Analytics", desc: "Real-time performance insights" },
              { icon: Users, title: "Lead Management", desc: "Intelligent lead qualification" },
              { icon: Shield, title: "Enterprise Security", desc: "Bank-level data protection" },
              { icon: Headphones, title: "Priority Support", desc: "Dedicated success manager" },
              {
                icon: Globe,
                title: "Smart AI Website",
                desc: "Integrated AI voice on your lead converting SEO optimized site",
              },
              { icon: Smartphone, title: "Mobile Apps", desc: "iOS & Android management apps" },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-[#0A0A0F]/80 backdrop-blur-xl border border-[#00BFFF]/30 hover:border-[#00BFFF]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,191,255,0.3)] group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/5 via-transparent to-[#00FF88]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                <CardContent className="p-6 relative z-10">
                  <feature.icon className="w-12 h-12 text-[#00BFFF] mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-[#00BFFF]/10 via-[#0A0A0F]/80 to-[#00FF88]/10 backdrop-blur-xl border-2 border-[#00BFFF]/50 shadow-[0_0_40px_rgba(0,191,255,0.4)]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of businesses already using AI to increase revenue and reduce costs.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-[#00BFFF] to-[#00FF88] text-black font-bold px-8 py-4 text-lg rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,191,255,0.5)] mb-4"
              >
                <a href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
                  Get Started Now - $3,488
                </a>
              </Button>
              <p className="text-sm text-gray-400">
                ✅ 30-day money-back guarantee
                <br />✅ No setup fees or hidden costs
                <br />✅ Cancel anytime
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-glow {
          0% {
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor;
          }
          100% {
            box-shadow: 0 0 30px currentColor, 0 0 60px currentColor, 0 0 90px currentColor;
          }
        }
      `}</style>
    </div>
  )
}
