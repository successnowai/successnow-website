"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
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
import { Volume2, Sparkles, PhoneCall, ArrowRight, ArrowLeft, Mic } from "lucide-react"

export default function DemoClientPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [userInput, setUserInput] = useState("")
  const [showTransferDialog, setShowTransferDialog] = useState(false)
  const [transferTarget, setTransferTarget] = useState("")
  const [demoStarted, setDemoStarted] = useState(false)
  const [iframeLoaded, setIframeLoaded] = useState(false)

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

  // Handle microphone permissions when iframe loads
  useEffect(() => {
    const handleIframeLoad = () => {
      setIframeLoaded(true)
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

    // Add a small delay to ensure iframe is rendered
    const timer = setTimeout(handleIframeLoad, 1000)
    return () => clearTimeout(timer)
  }, [])

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
      <div className="bg-gradient-to-r from-[#dd3ae6] to-[#c540ea] py-8 sm:py-12">
        <div className="container mx-auto px-4 text-center">
          {/* Back Button */}
          <div className="flex justify-start mb-6">
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

          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Mic className="w-8 h-8 text-white" />
              </div>
              {iframeLoaded && <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse"></div>}
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">Live AI Demo Experience</h1>
          <p className="text-lg sm:text-xl text-purple-100 max-w-2xl mx-auto">
            Experience Jessica, your 24/7 AI SuperAgent in action. Speak naturally and see how our AI handles real
            conversations.
          </p>

          {/* Demo Status */}
          <div className="mt-6 flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 flex items-center space-x-2">
              <Volume2 className="w-4 h-4 text-white" />
              <span className="text-white font-medium">
                {iframeLoaded ? "🎤 Voice Demo Active" : "⏳ Loading Demo..."}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Main Demo Interface */}
        <div className="max-w-4xl mx-auto">
          {/* AI Assistant Demo */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
            {/* Demo Header */}
            <div className="bg-gradient-to-r from-[#dd3ae6] to-[#c540ea] p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Jessica - AI SuperAgent</h2>
                    <p className="text-purple-100 text-sm">Live Interactive Demo</p>
                  </div>
                </div>
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>Live</span>
                </div>
              </div>
            </div>

            {/* AI Assistant Iframe */}
            <div className="p-0">
              <div className="flex justify-center items-center bg-gray-900/50">
                <iframe
                  src="https://iframes.ai/o/1750494450055x405489352949366800?color=dd3ae6&icon=mic"
                  allow="microphone"
                  className="w-full h-96 sm:h-[500px] border-none"
                  id="assistantFrame"
                  title="SuccessNOW AI Assistant Demo"
                  loading="eager"
                />
              </div>
            </div>

            {/* Demo Instructions */}
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-6 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                    <Mic className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-white">Speak Naturally</h3>
                  <p className="text-sm text-gray-300">Talk to Jessica like you would any person</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                    <Sparkles className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-white">AI Intelligence</h3>
                  <p className="text-sm text-gray-300">Experience advanced conversational AI</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                    <Volume2 className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="font-semibold text-white">Real-time Response</h3>
                  <p className="text-sm text-gray-300">Get instant, intelligent responses</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Showcase */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">🎯 What Jessica Can Do</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Qualify leads automatically</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Book appointments 24/7</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Answer customer questions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span>Transfer to live agents</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">💡 Demo Tips</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Allow microphone access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Speak clearly and naturally</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Ask about your business needs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Test the live transfer feature</span>
                </li>
              </ul>
            </div>
          </div>
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
            <Button onClick={confirmTransfer} className="bg-orange-600 hover:bg-orange-700 text-white w-full sm:w-auto">
              <ArrowRight className="w-4 h-4 mr-2" />
              Simulate Transfer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
