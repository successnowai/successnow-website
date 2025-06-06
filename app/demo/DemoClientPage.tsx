"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mic,
  Phone,
  MessageSquare,
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  BotIcon as Robot,
  UserCheck,
  PhoneCall,
  MicIcon,
} from "lucide-react"

export default function DemoClientPage() {
  const [isVoiceActive, setIsVoiceActive] = useState(false)
  const [demoStep, setDemoStep] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [microphoneAccess, setMicrophoneAccess] = useState(false)
  const [isInitializing, setIsInitializing] = useState(true)
  const [currentMessage, setCurrentMessage] = useState("Initializing AI Agent...")

  const demoSteps = [
    {
      title: "AI Agent Initialization",
      description: "Your SuccessNOW AI Agent is connecting...",
      icon: <Robot className="w-6 h-6" />,
      message: "Hello! Welcome to SuccessNOW AI. I'm your personal AI agent.",
    },
    {
      title: "Voice Recognition Active",
      description: "AI is listening and ready to respond",
      icon: <Mic className="w-6 h-6" />,
      message: "I can hear you clearly. How can I help transform your business today?",
    },
    {
      title: "Lead Qualification",
      description: "AI begins qualifying your business needs",
      icon: <Users className="w-6 h-6" />,
      message: "Let me understand your business better. What industry are you in?",
    },
    {
      title: "Solution Presentation",
      description: "AI presents tailored solutions",
      icon: <TrendingUp className="w-6 h-6" />,
      message: "Based on your needs, here's how SuccessNOW AI can help you grow...",
    },
    {
      title: "Live Transfer Available",
      description: "Ready to connect with sales specialist",
      icon: <PhoneCall className="w-6 h-6" />,
      message: "Would you like me to transfer you to one of our sales specialists for a personalized consultation?",
    },
  ]

  // Auto-start demo on page load
  useEffect(() => {
    const initializeDemo = async () => {
      try {
        // Request microphone access
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        setMicrophoneAccess(true)

        // Stop the stream immediately after getting permission
        stream.getTracks().forEach((track) => track.stop())

        // Start the demo after a brief delay
        setTimeout(() => {
          setIsInitializing(false)
          setIsVoiceActive(true)
          setCurrentMessage(demoSteps[0].message)
        }, 2000)
      } catch (error) {
        console.error("Microphone access denied:", error)
        setMicrophoneAccess(false)
        setIsInitializing(false)
        setCurrentMessage("Please enable microphone access for the full demo experience.")
      }
    }

    initializeDemo()
  }, [])

  // Progress through demo steps
  useEffect(() => {
    if (isVoiceActive && !isInitializing) {
      const interval = setInterval(() => {
        setDemoStep((prev) => {
          const nextStep = prev + 1
          if (nextStep < demoSteps.length) {
            setCurrentMessage(demoSteps[nextStep].message)
            return nextStep
          }
          return prev
        })
      }, 4000)

      return () => clearInterval(interval)
    }
  }, [isVoiceActive, isInitializing, demoSteps])

  const handleStopDemo = () => {
    setIsVoiceActive(false)
    setDemoStep(0)
    setCurrentMessage("Demo ended. Refresh to restart.")
  }

  const handleLiveTransfer = () => {
    setCurrentMessage("Connecting you to our sales specialist... Please hold.")
    // Here you would integrate with your live transfer system
    setTimeout(() => {
      setCurrentMessage("You are now connected with Sarah, our sales specialist. Hi there!")
    }, 3000)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#0080FF] to-[#00BFFF] py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Robot className="w-8 h-8 text-white" />
              </div>
              <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Live AI Demo Experience</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Your SuccessNOW AI agent is ready to demonstrate real-time conversation and live transfer capabilities
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Main Demo Interface */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* AI Voice Interface - Main Focus */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-2 border-blue-400 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <div className="relative">
                    <Sparkles className="w-8 h-8" />
                    {isVoiceActive && (
                      <div className="absolute inset-0 animate-ping">
                        <Sparkles className="w-8 h-8 text-blue-300" />
                      </div>
                    )}
                  </div>
                  <span>SuccessNOW AI Agent - Live Demo</span>
                  {microphoneAccess && (
                    <Badge className="bg-green-500 text-white">
                      <MicIcon className="w-3 h-3 mr-1" />
                      Mic Active
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                {isInitializing ? (
                  <div className="text-center space-y-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-[#00BFFF] to-[#0080FF] rounded-full flex items-center justify-center mx-auto shadow-2xl animate-pulse">
                      <Robot className="w-16 h-16 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Initializing AI Agent...</h3>
                      <p className="text-gray-300 mb-6">Requesting microphone access for voice interaction</p>
                      <div className="flex justify-center space-x-1">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce animation-delay-100"></div>
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce animation-delay-200"></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* AI Avatar and Status */}
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                        <Robot className="w-12 h-12 text-white" />
                        {isVoiceActive && (
                          <>
                            <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30"></div>
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {isVoiceActive ? "AI Agent Speaking" : "AI Agent Ready"}
                      </h3>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 px-3 py-1">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span>Live Connection</span>
                        </div>
                      </Badge>
                    </div>

                    {/* AI Message Display */}
                    <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-6 border border-blue-400/30">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Robot className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-lg text-white leading-relaxed">{currentMessage}</p>
                          {isVoiceActive && (
                            <div className="flex items-center space-x-2 mt-3">
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce animation-delay-100"></div>
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce animation-delay-200"></div>
                              </div>
                              <span className="text-sm text-blue-300">AI is speaking...</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Control Buttons */}
                    <div className="flex justify-center space-x-4">
                      <Button
                        onClick={toggleMute}
                        variant="outline"
                        className="flex items-center space-x-2 border-2 border-gray-400 text-white hover:bg-gray-700"
                      >
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                        <span>{isMuted ? "Unmute" : "Mute"}</span>
                      </Button>

                      {demoStep >= 4 && (
                        <Button
                          onClick={handleLiveTransfer}
                          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white flex items-center space-x-2"
                        >
                          <PhoneCall className="w-5 h-5" />
                          <span>Request Live Transfer</span>
                        </Button>
                      )}

                      <Button onClick={handleStopDemo} variant="destructive" className="flex items-center space-x-2">
                        <Pause className="w-5 h-5" />
                        <span>End Demo</span>
                      </Button>
                    </div>

                    {/* Live Transfer Feature */}
                    <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-xl p-6 border border-orange-400/30">
                      <div className="flex items-center space-x-3 mb-3">
                        <UserCheck className="w-6 h-6 text-orange-400" />
                        <h4 className="text-lg font-semibold text-white">Experience Live Transfer</h4>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Our AI agent can seamlessly transfer you to a live sales person when you're ready to move
                        forward. Experience the smooth handoff from AI to human expertise.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Demo Progress Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Demo Progress</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {demoSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-500 ${
                        index <= demoStep
                          ? "bg-green-900/30 border border-green-400/30"
                          : "bg-gray-700/30 border border-gray-600/30"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          index <= demoStep ? "bg-green-500 text-white" : "bg-gray-600 text-gray-300"
                        }`}
                      >
                        {index <= demoStep ? <CheckCircle className="w-5 h-5" /> : step.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm">{step.title}</h4>
                        <p className="text-xs text-gray-400">{step.description}</p>
                      </div>
                      {index === demoStep && isVoiceActive && (
                        <div className="flex space-x-1">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce animation-delay-100"></div>
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce animation-delay-200"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Demo Features */}
            <Card className="shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Zap className="w-6 h-6 text-blue-400" />
                  <span>Live Demo Features</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  <div className="flex items-center space-x-3 p-3 bg-blue-900/30 rounded-lg border border-blue-400/30">
                    <Phone className="w-4 h-4 text-blue-400" />
                    <span className="font-medium text-white text-sm">Natural voice conversation</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-900/30 rounded-lg border border-green-400/30">
                    <MessageSquare className="w-4 h-4 text-green-400" />
                    <span className="font-medium text-white text-sm">Intelligent lead qualification</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-900/30 rounded-lg border border-purple-400/30">
                    <TrendingUp className="w-4 h-4 text-purple-400" />
                    <span className="font-medium text-white text-sm">Real-time objection handling</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-orange-900/30 rounded-lg border border-orange-400/30">
                    <PhoneCall className="w-4 h-4 text-orange-400" />
                    <span className="font-medium text-white text-sm">Live transfer to sales team</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
