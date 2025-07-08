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

export default function LeoPlatformPage() {
  const [isVoiceDemoOpen, setIsVoiceDemoOpen] = useState(false)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://link.successnow.ai/js/form_embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <img src="/images/successnow-logo.png" alt="SuccessNOW" className="h-6 sm:h-8" />
              <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 text-xs sm:text-sm">
                ✨ Leo Exclusive Access
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* Hero Section */}
            <div className="text-center lg:text-left space-y-6 sm:space-y-8">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-500/30">
                <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 mr-2 text-yellow-400" />
                <span className="text-xs sm:text-sm font-semibold text-blue-300">EXCLUSIVE LEO PARTNERSHIP</span>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="mb-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white drop-shadow-lg">
                    The Best AI Agents for
                  </h1>
                </div>

                <div className="min-h-[60px] sm:min-h-[80px] lg:min-h-[100px] flex items-center justify-center lg:justify-start">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                    <RotatingText
                      words={rotatingWords}
                      className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg"
                      interval={2500}
                    />
                  </div>
                </div>

                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Join Leo's exclusive network and get priority access to the AI platform that's{" "}
                  <span className="font-bold text-blue-400">transforming businesses</span> and{" "}
                  <span className="font-bold text-green-400">maximizing growth potential</span>.
                </p>
              </div>
            </div>

            {/* Demo Section */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-6 sm:p-8 text-center">
                <div className="flex flex-col items-center space-y-4 sm:space-y-6">
                  <div
                    className="relative cursor-pointer transform transition-all duration-300 hover:scale-105"
                    onClick={() => setIsVoiceDemoOpen(true)}
                  >
                    <div className="w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-600/50 backdrop-blur-sm border border-blue-400/40 flex items-center justify-center relative overflow-hidden shadow-2xl">
                      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-blue-500/40 to-purple-500/60 blur-sm animate-pulse"></div>
                      <div className="relative z-10 w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="w-8 sm:w-12 h-8 sm:h-12 text-white drop-shadow-2xl"
                        >
                          <path
                            d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9L3 7V9C3 10.1 3.9 11 5 11V17C5 18.1 5.9 19 7 19H9C9 20.1 9.9 21 11 21H13C14.1 21 15 20.1 15 19H17C18.1 19 19 18.1 19 17V11C20.1 11 21 10.1 21 9ZM11 11H13V13H11V11ZM7 13H9V15H7V13ZM15 15V13H17V15H15Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                      Click to Launch Instant Demo!
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-md mx-auto">
                      Experience our AI agent in action. Click the orb above or call now for a live demo.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center w-full">
                    <a
                      href="tel:+18666125353"
                      className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base w-full sm:w-auto justify-center"
                    >
                      <Phone className="w-4 sm:w-5 h-4 sm:h-5" />
                      <span>Call (866) 612-5353</span>
                    </a>
                    <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400">
                      <Play className="w-3 sm:w-4 h-3 sm:h-4" />
                      <span>Live AI Demo Available 24/7</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6 text-xs sm:text-sm w-full">
                    <div className="flex items-center justify-center sm:justify-start space-x-2 text-green-400">
                      <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4" />
                      <span>No commitment</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2 text-blue-400">
                      <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4" />
                      <span>Instant demo</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start space-x-2 text-purple-400">
                      <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4" />
                      <span>100% free</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform Steps */}
            <div className="py-8 sm:py-16">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                  How Our 7-Step AI System Works
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto">
                  From lead generation to client retention, our comprehensive AI platform handles every aspect of your
                  business growth.
                </p>
              </div>
              <PlatformSteps />
            </div>

            {/* Pain Points */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl">
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-red-400 mb-4 sm:mb-6 flex items-center">
                  <Target className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3" />
                  Ready to Stop Struggling With:
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    "Inconsistent lead generation and follow-up?",
                    "Time-consuming manual processes that drain your energy?",
                    "Competitors who seem to always be one step ahead?",
                    "Difficulty scaling your business without burning out?",
                    "Missing out on qualified prospects due to slow response times?",
                  ].map((pain, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 sm:mt-3 flex-shrink-0" />
                      <p className="text-white/90 text-sm sm:text-base lg:text-lg">{pain}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl">
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-green-400 mb-4 sm:mb-6 flex items-center">
                  <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3" />
                  Transform Your Business With:
                </h3>
                <div className="space-y-4 sm:space-y-5">
                  {[
                    {
                      icon: TrendingUp,
                      text: "AI that captures and converts leads automatically",
                      color: "text-blue-400",
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
                    <div key={index} className="flex items-center space-x-3 sm:space-x-4">
                      <benefit.icon className={`w-5 sm:w-6 h-5 sm:h-6 ${benefit.color} flex-shrink-0`} />
                      <p className="text-white/90 text-sm sm:text-base lg:text-lg">{benefit.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl">
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-2 mb-4 sm:mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 sm:w-6 h-5 sm:h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white/70 text-sm sm:text-base">(1000+ transformations)</span>
                </div>
                <p className="text-white/90 italic text-base sm:text-lg lg:text-xl leading-relaxed">
                  "Leo connected me with this incredible platform and the results have been phenomenal. My business has
                  grown 250% in just 60 days, and I finally have the freedom to focus on what I love most about my
                  work."
                </p>
                <p className="text-blue-400 font-semibold mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg">
                  - Michael R., Business Owner
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-8">
            <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-4 sm:p-6">
                <div
                  className="bg-white rounded-xl shadow-inner overflow-hidden"
                  style={{ height: "800px", minHeight: "800px" }}
                >
                  <iframe
                    src="https://link.successnow.ai/widget/form/R2aNxCAoLcCFcoSIlajN"
                    style={{
                      width: "100%",
                      height: "100%",
                      minHeight: "800px",
                      border: "none",
                      borderRadius: "12px",
                      display: "block",
                    }}
                    id="inline-R2aNxCAoLcCFcoSIlajN"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Custom Development Form - leoraguseo"
                    data-height="800"
                    data-layout-iframe-id="inline-R2aNxCAoLcCFcoSIlajN"
                    data-form-id="R2aNxCAoLcCFcoSIlajN"
                    title="Custom Development Form - leoraguseo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VoiceDemoModal isOpen={isVoiceDemoOpen} onClose={() => setIsVoiceDemoOpen(false)} />
    </div>
  )
}
