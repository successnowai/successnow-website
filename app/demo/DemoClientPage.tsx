"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Phone,
  MessageSquare,
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
  Pause,
  Volume2,
  Sparkles,
  BotIcon as Robot,
  PhoneCall,
  Play,
  ArrowRight,
} from "lucide-react"

export default function DemoClientPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [userInput, setUserInput] = useState("")
  const [showTransferDialog, setShowTransferDialog] = useState(false)
  const [transferTarget, setTransferTarget] = useState("")
  const [demoStarted, setDemoStarted] = useState(false)

  // Jessica's Demo Script
  const demoScript = [
    {
      id: 1,
      icon: "🎙️",
      speaker: "Jessica",
      message:
        "Hi! I'm Jessica, your SuccessNOW AI SuperAgent. I'm part of the 24/7 AI team that never sleeps — built to help your business grow, scale, and never miss another lead.",
      duration: 6000,
      autoAdvance: true,
    },
    {
      id: 2,
      icon: "🎯",
      speaker: "Jessica",
      message:
        "In this quick demo, I'm going to ask you a few questions to personalize the experience. Then I'll call you just like I would a real lead — and even transfer you live to another number, just like I do when a client requests to speak with your team.",
      duration: 8000,
      autoAdvance: true,
    },
    {
      id: 3,
      icon: "✅",
      speaker: "Jessica",
      message: "Ready to see what it's like to have an AI employee that actually performs? Great. Let's get started.",
      duration: 5000,
      autoAdvance: true,
    },
    {
      id: 4,
      icon: "📝",
      speaker: "Jessica",
      message: "First — what's your name and the best phone number I can call you back on?",
      duration: 4000,
      autoAdvance: false,
      waitForInput: true,
    },
    {
      id: 5,
      icon: "🔁",
      speaker: "Jessica",
      message:
        "After the call, you can text me any questions or just call me back — I'm available 24/7 to support your business, engage your leads, and close deals.",
      duration: 6000,
      autoAdvance: true,
    },
    {
      id: 6,
      icon: "📞",
      speaker: "Jessica",
      message:
        "Perfect! Now I'll demonstrate a live transfer. Would you like me to transfer you to a sales representative?",
      duration: 5000,
      autoAdvance: false,
      showTransfer: true,
    },
  ]

  // Auto-start demo on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      startDemo()
    }, 1500) // Start after 1.5 seconds

    return () => clearTimeout(timer)
  }, [])

  // Auto-advance through script
  useEffect(() => {
    if (demoStarted && !isPaused) {
      const currentScriptItem = demoScript[currentStep]

      if (currentScriptItem && currentScriptItem.autoAdvance) {
        setIsPlaying(true)

        const timer = setTimeout(() => {
          if (currentStep < demoScript.length - 1) {
            setCurrentStep(currentStep + 1)
          } else {
            setIsPlaying(false)
          }
        }, currentScriptItem.duration)

        return () => clearTimeout(timer)
      } else {
        setIsPlaying(false)
      }
    }
  }, [currentStep, demoStarted, isPaused])

  const startDemo = () => {
    setDemoStarted(true)
    setCurrentStep(0)
    setIsPlaying(true)
  }

  const pauseDemo = () => {
    setIsPaused(true)
    setIsPlaying(false)
  }

  const resumeDemo = () => {
    setIsPaused(false)
    setIsPlaying(true)
  }

  const restartDemo = () => {
    setCurrentStep(0)
    setDemoStarted(true)
    setIsPaused(false)
    setIsPlaying(true)
    setUserInput("")
  }

  const handleContinue = () => {
    if (currentStep < demoScript.length - 1) {
      setCurrentStep(currentStep + 1)
      setIsPlaying(true)
    }
  }

  const handleTransfer = () => {
    setShowTransferDialog(true)
  }

  const confirmTransfer = () => {
    setShowTransferDialog(false)
    // Simulate transfer
    setTimeout(() => {
      alert(
        `Transferring you to ${transferTarget || "Sales Team"}... This is where the real AI would connect you live!`,
      )
    }, 1000)
  }

  const currentScriptItem = demoScript[currentStep] || demoScript[0]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#0080FF] to-[#00BFFF] py-6 sm:py-12">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Robot className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              {isPlaying && <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse"></div>}
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4 leading-tight">
            Meet Jessica - Your AI SuperAgent
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto px-2">
            Experience a live demo with Jessica, your 24/7 AI agent who never sleeps and never misses a lead
          </p>

          {/* Demo Status */}
          <div className="mt-4 flex justify-center">
            <Badge className="bg-white/20 text-white px-4 py-2 text-sm">
              {!demoStarted
                ? "Demo Starting..."
                : isPlaying
                  ? "🎤 Jessica is Speaking"
                  : isPaused
                    ? "⏸️ Demo Paused"
                    : "✅ Demo Ready"}
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8">
        {/* API Integration Notice */}
        <div className="mb-6 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-2 border-purple-400/50 rounded-xl p-4 sm:p-6">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Live AI Demo Placeholder</h3>
              <p className="text-sm text-purple-200">
                This is a placeholder demo. The production version will integrate with VAPI.AI or GetEverBots.com for
                real-time AI voice interactions.
              </p>
            </div>
          </div>
        </div>

        {/* Main Demo Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
          {/* Jessica AI Interface */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <Card className="border-2 border-blue-400 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900">
              <CardHeader className="bg-gradient-to-r from-pink-600 to-purple-600 text-white p-4 sm:p-6">
                <CardTitle className="flex items-center space-x-2 sm:space-x-3 text-lg sm:text-2xl">
                  <div className="relative">
                    <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />
                    {isPlaying && (
                      <div className="absolute inset-0 animate-ping">
                        <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-pink-300" />
                      </div>
                    )}
                  </div>
                  <span className="leading-tight">Jessica - SuccessNOW AI SuperAgent</span>
                  <div className="flex space-x-1 sm:space-x-2 ml-auto">
                    <Badge className="bg-green-500 text-white text-xs">
                      <Volume2 className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                      <span className="hidden sm:inline">Live Demo</span>
                    </Badge>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-8">
                <div className="space-y-4 sm:space-y-6">
                  {/* Jessica Avatar and Status */}
                  <div className="text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 relative">
                      <Robot className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                      {isPlaying && (
                        <>
                          <div className="absolute inset-0 rounded-full bg-pink-400 animate-ping opacity-30"></div>
                          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                          </div>
                        </>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {isPlaying ? "Jessica is Speaking" : isPaused ? "Jessica Paused" : "Jessica is Ready"}
                    </h3>
                    <Badge variant="secondary" className="bg-pink-100 text-pink-800 px-2 sm:px-3 py-1 text-xs">
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <div
                          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${isPlaying ? "bg-red-500 animate-pulse" : "bg-pink-500"}`}
                        ></div>
                        <span>
                          Step {currentStep + 1} of {demoScript.length}
                        </span>
                      </div>
                    </Badge>
                  </div>

                  {/* Jessica Message Display */}
                  <div className="bg-gradient-to-r from-pink-900/50 to-purple-900/50 rounded-xl p-4 sm:p-6 border border-pink-400/30">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg sm:text-xl">{currentScriptItem.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-xs sm:text-sm font-semibold text-pink-300">
                            {currentScriptItem.speaker}
                          </span>
                          <span className="text-xs text-gray-400">AI SuperAgent</span>
                          {isPlaying && (
                            <Badge className="bg-red-500 text-white text-xs">
                              <Volume2 className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                              <span className="hidden sm:inline">Speaking</span>
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm sm:text-lg text-white leading-relaxed break-words">
                          {currentScriptItem.message}
                        </p>
                        {isPlaying && (
                          <div className="flex items-center space-x-2 mt-2 sm:mt-3">
                            <div className="flex space-x-1">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full animate-bounce"></div>
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full animate-bounce animation-delay-100"></div>
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full animate-bounce animation-delay-200"></div>
                            </div>
                            <span className="text-xs sm:text-sm text-pink-300">Jessica is speaking...</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* User Input Section */}
                  {currentScriptItem.waitForInput && (
                    <div className="bg-gradient-to-r from-blue-900/50 to-green-900/50 rounded-xl p-4 sm:p-6 border border-blue-400/30">
                      <Label htmlFor="user-input" className="text-white text-sm mb-2 block">
                        Your Response:
                      </Label>
                      <Input
                        id="user-input"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Enter your name and phone number..."
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 mb-3"
                      />
                      <Button onClick={handleContinue} className="bg-green-600 hover:bg-green-700 text-white w-full">
                        Continue Demo
                      </Button>
                    </div>
                  )}

                  {/* Control Buttons */}
                  <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 gap-2">
                    {!demoStarted ? (
                      <Button
                        onClick={startDemo}
                        className="bg-pink-600 hover:bg-pink-700 text-white flex items-center justify-center space-x-2 py-3 text-sm sm:text-base min-h-[44px]"
                      >
                        <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Start Demo</span>
                      </Button>
                    ) : (
                      <>
                        {isPlaying ? (
                          <Button
                            onClick={pauseDemo}
                            className="bg-yellow-600 hover:bg-yellow-700 text-white flex items-center justify-center space-x-2 py-3 text-sm sm:text-base min-h-[44px]"
                          >
                            <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>Pause</span>
                          </Button>
                        ) : isPaused ? (
                          <Button
                            onClick={resumeDemo}
                            className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center space-x-2 py-3 text-sm sm:text-base min-h-[44px]"
                          >
                            <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>Resume</span>
                          </Button>
                        ) : (
                          <Button
                            onClick={handleContinue}
                            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center space-x-2 py-3 text-sm sm:text-base min-h-[44px]"
                          >
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>Continue</span>
                          </Button>
                        )}

                        <Button
                          onClick={restartDemo}
                          className="bg-gray-600 hover:bg-gray-700 text-white flex items-center justify-center space-x-2 py-3 text-sm sm:text-base min-h-[44px]"
                        >
                          <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Restart</span>
                        </Button>

                        {currentScriptItem.showTransfer && (
                          <Button
                            onClick={handleTransfer}
                            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white flex items-center justify-center space-x-2 py-3 text-sm sm:text-base min-h-[44px]"
                          >
                            <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>Live Transfer</span>
                          </Button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Demo Progress Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center space-x-2 text-white text-base sm:text-lg">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />
                  <span>Demo Progress</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-3 sm:space-y-4">
                  {demoScript.map((step, index) => (
                    <div
                      key={step.id}
                      className={`flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg transition-all duration-500 ${
                        index <= currentStep
                          ? "bg-pink-900/30 border border-pink-400/30"
                          : "bg-gray-700/30 border border-gray-600/30"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          index <= currentStep ? "bg-pink-500 text-white" : "bg-gray-600 text-gray-300"
                        }`}
                      >
                        {index <= currentStep ? (
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        ) : (
                          <span className="text-lg">{step.icon}</span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-white text-xs sm:text-sm leading-tight">Step {step.id}</h4>
                        <p className="text-xs text-gray-400 leading-tight">{step.message.substring(0, 50)}...</p>
                      </div>
                      {index === currentStep && isPlaying && (
                        <div className="flex space-x-1 flex-shrink-0">
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-pink-400 rounded-full animate-bounce"></div>
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-pink-400 rounded-full animate-bounce animation-delay-100"></div>
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-pink-400 rounded-full animate-bounce animation-delay-200"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Jessica's Features */}
            <Card className="shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center space-x-2 text-white text-base sm:text-lg">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />
                  <span>Jessica's Capabilities</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="grid gap-2 sm:gap-3">
                  <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-pink-900/30 rounded-lg border border-pink-400/30">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400 flex-shrink-0" />
                    <span className="font-medium text-white text-xs sm:text-sm">24/7 Lead Engagement</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-purple-900/30 rounded-lg border border-purple-400/30">
                    <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0" />
                    <span className="font-medium text-white text-xs sm:text-sm">Intelligent Conversations</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-blue-900/30 rounded-lg border border-blue-400/30">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                    <span className="font-medium text-white text-xs sm:text-sm">Live Transfer to Team</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-green-900/30 rounded-lg border border-green-400/30">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                    <span className="font-medium text-white text-xs sm:text-sm">Conversion Optimization</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Transfer Dialog */}
        <Dialog open={showTransferDialog} onOpenChange={setShowTransferDialog}>
          <DialogContent className="bg-gray-800 border border-gray-600 text-white w-[95vw] max-w-md mx-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center space-x-2 text-base sm:text-lg">
                <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                <span>Live Transfer Demo</span>
              </DialogTitle>
              <DialogDescription className="text-gray-300 text-sm">
                Who would you like Jessica to transfer you to? (This is a demo simulation)
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="transfer-target" className="text-white text-sm">
                  Transfer to:
                </Label>
                <Input
                  id="transfer-target"
                  value={transferTarget}
                  onChange={(e) => setTransferTarget(e.target.value)}
                  placeholder="e.g., Sales Team, John Smith..."
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 mt-1"
                />
              </div>
            </div>
            <DialogFooter className="flex-col sm:flex-row gap-2">
              <Button
                onClick={() => setShowTransferDialog(false)}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700 w-full sm:w-auto"
              >
                Cancel
              </Button>
              <Button
                onClick={confirmTransfer}
                className="bg-orange-600 hover:bg-orange-700 text-white w-full sm:w-auto"
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                Simulate Transfer
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
