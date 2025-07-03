"use client"

import { useState } from "react"
import PartnerOptinForm from "@/components/forms/PartnerOptinForm"
import StarryBackground from "@/components/ui/starry-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageSquare, CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface UserData {
  name: string
  email: string
  phone: string
}

export default function DemoClientPage() {
  const [showDemo, setShowDemo] = useState(false)
  const [userData, setUserData] = useState<UserData | null>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  const handleConsent = (data: UserData) => {
    setUserData(data)
    setShowDemo(true)
    // Start the demo sequence
    setTimeout(() => {
      startDemoSequence()
    }, 1000)
  }

  const startDemoSequence = () => {
    if (currentStep < demoSteps.length) {
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        setTimeout(() => {
          setCurrentStep((prev) => prev + 1)
          if (currentStep + 1 < demoSteps.length) {
            setTimeout(startDemoSequence, 2000)
          }
        }, 1000)
      }, demoSteps[currentStep]?.delay || 2000)
    }
  }

  const userName = userData?.name || "there"
  const userPhone = userData?.phone || "(866) 612-5353"

  const demoSteps = [
    {
      speaker: "Jessica (AI Assistant)",
      message: `Hi ${userName}! I'm Jessica, your AI assistant. I see you're interested in learning how SuccessNOW can transform your business with AI. Let me show you exactly how our system works!`,
      delay: 2000,
    },
    {
      speaker: "Jessica (AI Assistant)",
      message: `I can see you're calling from ${userPhone}. Our AI system automatically captures and qualifies every lead that comes to your business - whether through your website, social media, or phone calls.`,
      delay: 3000,
    },
    {
      speaker: "Jessica (AI Assistant)",
      message: `Right now, I'm analyzing your business type and creating a custom AI strategy. Our system can handle appointment booking, customer service, lead follow-up, and even sales conversations - all automatically!`,
      delay: 3500,
    },
    {
      speaker: "Jessica (AI Assistant)",
      message: `${userName}, based on what I'm seeing, our AI could potentially increase your revenue by 300-500% in the first 90 days. Would you like me to connect you with one of our AI specialists to discuss your specific needs?`,
      delay: 4000,
    },
    {
      speaker: "System",
      message: "🔥 LIVE TRANSFER INITIATED - Connecting to AI Specialist...",
      delay: 2000,
      isTransfer: true,
    },
  ]

  const handleTransfer = () => {
    window.location.href = `tel:8666125353`
  }

  const restartDemo = () => {
    setCurrentStep(0)
    setIsTyping(false)
    setTimeout(startDemoSequence, 1000)
  }

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      <StarryBackground />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="absolute top-4 left-4">
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
        {showDemo ? (
          <div className="w-full max-w-2xl mx-auto">
            <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 shadow-2xl">
              <CardContent className="p-8">
                {/* Chat Interface */}
                <div className="space-y-6 mb-8">
                  {demoSteps.slice(0, currentStep).map((step, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-4 p-4 rounded-xl ${
                        step.isTransfer
                          ? "bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/20"
                          : "bg-gray-800/30 border border-gray-700/30"
                      }`}
                    >
                      <div className="flex-shrink-0">
                        {step.isTransfer ? (
                          <Phone className="w-6 h-6 text-red-400" />
                        ) : (
                          <MessageSquare className="w-6 h-6 text-[#00BFFF]" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-400 mb-2">{step.speaker}</p>
                        <p className="text-gray-200 leading-relaxed">{step.message}</p>
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && currentStep < demoSteps.length && (
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/30 border border-gray-700/30">
                      <MessageSquare className="w-6 h-6 text-[#00BFFF]" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-400 mb-2">{demoSteps[currentStep]?.speaker}</p>
                        <div className="flex items-center gap-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-[#00BFFF] rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-[#00BFFF] rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-[#00BFFF] rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                          <span className="text-gray-400 text-sm">AI is typing...</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Transfer Button */}
                {currentStep >= demoSteps.length && (
                  <div className="text-center space-y-6">
                    <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-xl p-6 border border-green-500/20">
                      <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Ready to Get Started?</h3>
                      <p className="text-gray-300 mb-4">
                        Our AI specialist is standing by to discuss your custom AI solution.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        onClick={handleTransfer}
                        size="lg"
                        className="bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold text-lg px-8 py-4 hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Connect Now: (866) 612-5353
                      </Button>

                      <Button
                        onClick={restartDemo}
                        variant="outline"
                        size="lg"
                        className="border-gray-600 text-gray-300 hover:bg-gray-700 px-8 py-4 bg-transparent"
                      >
                        Restart Demo
                      </Button>
                    </div>

                    <p className="text-gray-400 text-sm">Click to call or dial (866) 612-5353 directly</p>
                  </div>
                )}

                {/* Progress Indicator */}
                <div className="mt-8 flex justify-center">
                  <div className="flex space-x-2">
                    {demoSteps.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index < currentStep
                            ? "bg-[#00BFFF]"
                            : index === currentStep && isTyping
                              ? "bg-[#00BFFF]/50 animate-pulse"
                              : "bg-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="w-full max-w-2xl mx-auto">
            <PartnerOptinForm onConsent={handleConsent} />
          </div>
        )}
      </div>
    </div>
  )
}
