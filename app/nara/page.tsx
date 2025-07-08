"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { RotatingText } from "@/components/ui/rotating-text"
import { PlatformSteps } from "@/components/ui/platform-steps"
import { Star, Users, TrendingUp, Clock, CheckCircle, Target, Award, Sparkles, Phone, Play } from "lucide-react"
import { VoiceDemoModal } from "@/components/ui/voice-demo-modal"

const rotatingWords = [
  "Real Estate Agents",
  "Mortgage Brokers",
  "Insurance Agents",
  "Legal Professionals",
  "Healthcare Providers",
  "Dental Practices",
  "Auto Dealers",
  "Home Service Pros",
  "Fitness Studios",
  "Restaurants",
  "Solar Companies",
  "HVAC Contractors",
  "Roofing Companies",
  "Plumbers",
  "General Contractors",
  "Med Spas",
  "Chiropractors",
  "Custom Development",
]

export default function NaraPlatformPage() {
  const [isVoiceDemoOpen, setIsVoiceDemoOpen] = useState(false)

  useEffect(() => {
    // Load the form embed script
    const script = document.createElement("script")
    script.src = "https://link.successnow.ai/js/form_embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-rose-900 to-purple-900 text-white">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/images/successnow-logo.png" alt="SuccessNOW" className="h-8" />
              <Badge className="bg-gradient-to-r from-rose-500 to-pink-500 text-white border-0">
                ✨ Nara Exclusive Access
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Hero Section with Rotating Text */}
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-full border border-rose-500/30">
                <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
                <span className="text-sm font-semibold text-rose-300">EXCLUSIVE NARA PARTNERSHIP</span>
              </div>

              {/* Main Hero with Rotating Text */}
              <div className="space-y-6">
                {/* Static Text - Make it highly visible */}
                <div className="mb-4">
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white drop-shadow-lg">
                    The Best AI Agents for
                  </h1>
                </div>

                {/* Rotating Text Container */}
                <div className="min-h-[80px] lg:min-h-[100px] flex items-center justify-center lg:justify-start">
                  <div className="text-4xl lg:text-5xl xl:text-6xl font-bold">
                    <RotatingText
                      words={rotatingWords}
                      className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg"
                      interval={2500}
                    />
                  </div>
                </div>

                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Join Nara's exclusive network and get priority access to the AI platform that's{" "}
                  <span className="font-bold text-rose-400">transforming businesses</span> and{" "}
                  <span className="font-bold text-green-400">maximizing growth potential</span>.
                </p>
              </div>
            </div>

            {/* Glowing Robot Demo Section */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-8 text-center">
                <div className="flex flex-col items-center space-y-6">
                  {/* Clickable Glowing Robot Orb - Identical to main page */}
                  <div
                    className="relative cursor-pointer transform transition-all duration-300 hover:scale-105"
                    onClick={() => setIsVoiceDemoOpen(true)}
                  >
                    {/* Main glowing sphere with multiple layers */}
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-rose-400/30 to-purple-600/50 backdrop-blur-sm border border-rose-400/40 flex items-center justify-center relative overflow-hidden shadow-2xl">
                      {/* Inner glow layers */}
                      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-rose-500/40 to-purple-500/60 blur-sm animate-pulse"></div>
                      <div
                        className="absolute inset-3 rounded-full bg-gradient-to-br from-rose-400/50 to-purple-400/70 blur-xs animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="absolute inset-6 rounded-full bg-gradient-to-br from-rose-300/60 to-purple-300/80 blur-sm animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>

                      {/* Robot icon */}
                      <div className="relative z-10 w-16 h-16 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-white drop-shadow-2xl">
                          <path
                            d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9L3 7V9C3 10.1 3.9 11 5 11V17C5 18.1 5.9 19 7 19H9C9 20.1 9.9 21 11 21H13C14.1 21 15 20.1 15 19H17C18.1 19 19 18.1 19 17V11C20.1 11 21 10.1 21 9ZM11 11H13V13H11V11ZM7 13H9V15H7V13ZM15 15V13H17V15H15Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Outer glow effects */}
                    <div className="absolute inset-0 w-32 h-32 rounded-full bg-rose-400/30 blur-xl animate-pulse"></div>
                    <div
                      className="absolute inset-0 w-32 h-32 rounded-full bg-purple-400/20 blur-2xl animate-pulse"
                      style={{ animationDelay: "1.5s" }}
                    ></div>
                    <div
                      className="absolute -inset-4 w-40 h-40 rounded-full bg-rose-300/10 blur-3xl animate-pulse"
                      style={{ animationDelay: "2s" }}
                    ></div>
                  </div>

                  {/* Demo CTA Text */}
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">Click to Launch Instant Demo!</h3>
                    <p className="text-lg text-gray-300 max-w-md mx-auto">
                      Experience our AI agent in action. Click the orb above or call now for a live demo.
                    </p>
                  </div>

                  {/* Phone Number CTA */}
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <a
                      href="tel:+18666125353"
                      className="flex items-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-6 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <Phone className="w-5 h-5" />
                      <span className="text-lg">Call (866) 612-5353</span>
                    </a>

                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Play className="w-4 h-4" />
                      <span>Live AI Demo Available 24/7</span>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-sm">
                    <div className="flex items-center space-x-2 text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      <span>No commitment</span>
                    </div>
                    <div className="flex items-center space-x-2 text-rose-400">
                      <CheckCircle className="w-4 h-4" />
                      <span>Instant demo</span>
                    </div>
                    <div className="flex items-center space-x-2 text-purple-400">
                      <CheckCircle className="w-4 h-4" />
                      <span>100% free</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform Steps Section */}
            <div className="py-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">How Our 7-Step AI System Works</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  From lead generation to client retention, our comprehensive AI platform handles every aspect of your
                  business growth.
                </p>
              </div>
              <PlatformSteps />
            </div>

            {/* Pain Points */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
                  <Target className="w-6 h-6 mr-3" />
                  Ready to Stop Struggling With:
                </h3>
                <div className="space-y-4">
                  {[
                    "Inconsistent lead generation and follow-up?",
                    "Time-consuming manual processes that drain your energy?",
                    "Competitors who seem to always be one step ahead?",
                    "Difficulty scaling your business without burning out?",
                    "Missing out on qualified prospects due to slow response times?",
                  ].map((pain, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0" />
                      <p className="text-white/90 text-lg">{pain}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  Transform Your Business With:
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      icon: TrendingUp,
                      text: "AI that captures and converts leads automatically",
                      color: "text-rose-400",
                    },
                    {
                      icon: Users,
                      text: "Intelligent follow-up that never lets prospects slip away",
                      color: "text-purple-400",
                    },
                    {
                      icon: Clock,
                      text: "Freedom to focus on high-impact business activities",
                      color: "text-yellow-400",
                    },
                    {
                      icon: Award,
                      text: "Proven success across multiple industries and markets",
                      color: "text-green-400",
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <benefit.icon className={`w-6 h-6 ${benefit.color} flex-shrink-0`} />
                      <p className="text-white/90 text-lg">{benefit.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* What Makes This Different */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-rose-400 mb-6">🎯 The Nara Advantage</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center text-lg">
                      <span className="text-3xl mr-3">💎</span>
                      Premium AI Technology
                    </h4>
                    <p className="text-white/80 text-lg ml-12">
                      Access to cutting-edge AI agents that understand your business goals and deliver exceptional
                      results.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center text-lg">
                      <span className="text-3xl mr-3">🌟</span>
                      Personalized Success Strategy
                    </h4>
                    <p className="text-white/80 text-lg ml-12">
                      Customized implementation designed specifically for your unique business needs and market
                      position.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center text-lg">
                      <span className="text-3xl mr-3">🚀</span>
                      Accelerated Growth
                    </h4>
                    <p className="text-white/80 text-lg ml-12">
                      Rapid deployment and optimization to get you seeing results faster than traditional methods.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl">
              <div className="p-8">
                <div className="flex items-center space-x-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-white/70 ml-2">(1000+ transformations)</span>
                </div>
                <p className="text-white/90 italic text-xl leading-relaxed">
                  "Nara connected me with this incredible platform and the results have been phenomenal. My business has
                  grown 250% in just 60 days, and I finally have the freedom to focus on what I love most about my
                  work."
                </p>
                <p className="text-rose-400 font-semibold mt-4 text-lg">- Jessica L., Business Owner</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "1000+", label: "Success Stories", color: "text-rose-400" },
                { number: "250%", label: "Average Growth", color: "text-green-400" },
                { number: "24/7", label: "AI Support", color: "text-yellow-400" },
                { number: "95%", label: "Client Satisfaction", color: "text-purple-400" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl text-center"
                >
                  <div className="p-6">
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                    <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Urgency */}
            <div className="bg-white/10 backdrop-blur-md border border-orange-400/30 rounded-2xl shadow-2xl">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-orange-400 mb-4 flex items-center">
                  <Sparkles className="w-6 h-6 mr-3" />
                  Exclusive Nara Network Access
                </h3>
                <p className="text-white/90 mb-6 text-lg leading-relaxed">
                  Nara has secured special access and pricing for her trusted network. This is a limited-time
                  opportunity to join an exclusive group of forward-thinking business owners.
                </p>
                <div className="flex items-center space-x-3 text-orange-300">
                  <Clock className="w-5 h-5" />
                  <span className="text-lg font-medium">Priority access expires soon</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl">
              <div className="p-4">
                <div className="bg-white rounded-xl shadow-inner" style={{ height: "687px" }}>
                  <iframe
                    src="https://link.successnow.ai/widget/form/gqoKsq3Vy0WkolYhdU7P"
                    style={{ width: "100%", height: "100%", border: "none", borderRadius: "12px" }}
                    id="inline-gqoKsq3Vy0WkolYhdU7P"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Custom Development Form -nara"
                    data-height="687"
                    data-layout-iframe-id="inline-gqoKsq3Vy0WkolYhdU7P"
                    data-form-id="gqoKsq3Vy0WkolYhdU7P"
                    title="Custom Development Form -nara"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl">
            <div className="p-10">
              <h3 className="text-4xl font-bold text-rose-400 mb-6 text-center">
                ✨ Join Nara's Exclusive Network Today
              </h3>
              <p className="text-white/90 text-xl mb-8 text-center leading-relaxed">
                Don't miss this opportunity to be part of an elite group of business owners who are transforming their
                success with AI technology.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-white/80">
                <span className="flex items-center text-lg">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                  Exclusive Nara network pricing
                </span>
                <span className="flex items-center text-lg">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                  VIP implementation support
                </span>
                <span className="flex items-center text-lg">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                  Personal success coaching
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VoiceDemoModal isOpen={isVoiceDemoOpen} onClose={() => setIsVoiceDemoOpen(false)} />
    </div>
  )
}
