"use client"

import { useState, useEffect, useRef } from "react"
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
  VolumeX,
  Sparkles,
  BotIcon as Robot,
  UserCheck,
  PhoneCall,
  MicIcon,
  AlertCircle,
  Play,
  Speaker,
  ArrowRight,
} from "lucide-react"

export default function DemoClientPage() {
  const [isVoiceActive, setIsVoiceActive] = useState(false)
  const [demoStep, setDemoStep] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [microphoneAccess, setMicrophoneAccess] = useState(false)
  const [audioPermission, setAudioPermission] = useState(false)
  const [isInitializing, setIsInitializing] = useState(true)
  const [currentMessage, setCurrentMessage] = useState("Checking audio and microphone permissions...")
  const [permissionState, setPermissionState] = useState<"checking" | "granted" | "denied" | "prompt">("checking")
  const [isPlaying, setIsPlaying] = useState(false)
  const [speechSupported, setSpeechSupported] = useState(false)
  const [voicesLoaded, setVoicesLoaded] = useState(false)
  const [transferTarget, setTransferTarget] = useState("")
  const [isTransferDialogOpen, setIsTransferDialogOpen] = useState(false)

  const speechRef = useRef<SpeechSynthesisUtterance | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isSpeakingRef = useRef(false)
  const speechQueueRef = useRef<string[]>([])
  const isProcessingQueueRef = useRef(false)

  const jessicaScript = [
    {
      title: "AI Agent Introduction",
      description: "Jessica introduces herself",
      icon: <Robot className="w-6 h-6" />,
      message:
        "Hi! I'm Jessica, your SuccessNOW AI SuperAgent. I'm part of the 24/7 AI team that never sleeps — built to help your business grow, scale, and never miss another lead.",
      duration: 6500,
      audioText:
        "Hi! I'm Jessica, your SuccessNOW AI SuperAgent. I'm part of the 24/7 AI team that never sleeps, built to help your business grow, scale, and never miss another lead.",
    },
    {
      title: "Demo Overview",
      description: "Explaining the demo process",
      icon: <Zap className="w-6 h-6" />,
      message:
        "In this quick demo, I'm going to ask you a few questions to personalize the experience. Then I'll call you just like I would a real lead — and even transfer you live to another number, just like I do when a client requests to speak with your team.",
      duration: 8500,
      audioText:
        "In this quick demo, I'm going to ask you a few questions to personalize the experience. Then I'll call you just like I would a real lead, and even transfer you live to another number, just like I do when a client requests to speak with your team.",
    },
    {
      title: "Ready Check",
      description: "Confirming readiness",
      icon: <CheckCircle className="w-6 h-6" />,
      message: "Ready to see what it's like to have an AI employee that actually performs? Great. Let's get started.",
      duration: 4500,
      audioText: "Ready to see what it's like to have an AI employee that actually performs? Great. Let's get started.",
    },
    {
      title: "Lead Qualification",
      description: "Requesting contact information",
      icon: <Users className="w-6 h-6" />,
      message: "First — what's your name and the best phone number I can call you back on?",
      duration: 3500,
      waitForInput: true,
      audioText: "First, what's your name and the best phone number I can call you back on?",
    },
    {
      title: "24/7 Support Promise",
      description: "Explaining ongoing support",
      icon: <PhoneCall className="w-6 h-6" />,
      message:
        "After the call, you can text me any questions or just call me back — I'm available 24/7 to support your business, engage your leads, and close deals.",
      duration: 6500,
      audioText:
        "After the call, you can text me any questions or just call me back. I'm available 24/7 to support your business, engage your leads, and close deals.",
    },
  ]

  // Load voices and check speech synthesis support
  useEffect(() => {
    const checkSpeechSupport = () => {
      const speechSupport = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window
      setSpeechSupported(speechSupport)

      if (speechSupport) {
        const loadVoices = () => {
          const voices = window.speechSynthesis.getVoices()
          if (voices.length > 0) {
            setVoicesLoaded(true)
            console.log("Available voices:", voices.length)
          }
        }

        loadVoices()
        window.speechSynthesis.addEventListener("voiceschanged", loadVoices)

        return () => {
          window.speechSynthesis.removeEventListener("voiceschanged", loadVoices)
        }
      }
    }

    checkSpeechSupport()
  }, [])

  // Check audio and microphone permissions on page load
  useEffect(() => {
    const checkPermissions = async () => {
      try {
        if ("permissions" in navigator) {
          try {
            const micPermission = await navigator.permissions.query({ name: "microphone" as PermissionName })
            if (micPermission.state === "granted") {
              setMicrophoneAccess(true)
            }
          } catch (error) {
            console.log("Microphone permission check failed:", error)
          }
        }

        setAudioPermission(true)
        setPermissionState("granted")
        setCurrentMessage("Audio ready! Starting Jessica AI demo...")

        setTimeout(() => {
          setIsInitializing(false)
        }, 2000)
      } catch (error) {
        console.error("Error checking permissions:", error)
        setPermissionState("prompt")
        setCurrentMessage("Click below to enable audio for Jessica's voice demo.")
        setIsInitializing(false)
      }
    }

    checkPermissions()
  }, [])

  // Enhanced speech processing with sentence-level synchronization
  const processTextForSpeech = (text: string): string => {
    // Remove emojis and special characters for cleaner speech
    return text
      .replace(/[🎙️🎯✅📝🔁✨📞👋⏸️]/gu, "")
      .replace(/—/g, " ")
      .replace(/\s+/g, " ")
      .trim()
  }

  // Advanced speech synthesis with perfect synchronization
  const speakTextSynchronized = (text: string, onComplete?: () => void) => {
    if (!speechSupported || isMuted || !text.trim()) {
      console.log("Speech not available or muted")
      onComplete?.()
      return
    }

    // Add to speech queue for perfect synchronization
    speechQueueRef.current.push(text)
    processNextSpeech(onComplete)
  }

  const processNextSpeech = (onComplete?: () => void) => {
    if (isProcessingQueueRef.current || speechQueueRef.current.length === 0) {
      return
    }

    isProcessingQueueRef.current = true
    const textToSpeak = speechQueueRef.current.shift()!
    const cleanText = processTextForSpeech(textToSpeak)

    if (!cleanText) {
      isProcessingQueueRef.current = false
      onComplete?.()
      return
    }

    try {
      // Cancel any ongoing speech
      try {
        window.speechSynthesis.cancel()
      } catch (error) {
        console.log("Error canceling speech:", error)
      }

      // Short delay to ensure cancellation completes
      setTimeout(() => {
        try {
          const utterance = new SpeechSynthesisUtterance(cleanText)

          // Optimized voice settings for natural speech
          utterance.rate = 1.05 // Slightly faster for natural flow
          utterance.pitch = 1.15 // Female voice pitch
          utterance.volume = 0.85

          // Select best female English voice
          const voices = window.speechSynthesis.getVoices()
          let selectedVoice = null

          // Priority order for voice selection
          selectedVoice =
            voices.find((voice) => voice.name.toLowerCase().includes("female") && voice.lang.startsWith("en")) ||
            voices.find((voice) => voice.lang === "en-GB" && !voice.name.toLowerCase().includes("male")) ||
            voices.find(
              (voice) =>
                voice.lang.startsWith("en") &&
                ["samantha", "victoria", "karen", "moira", "tessa", "fiona", "veena"].some((name) =>
                  voice.name.toLowerCase().includes(name),
                ),
            ) ||
            voices.find((voice) => voice.lang.startsWith("en"))

          if (selectedVoice) {
            utterance.voice = selectedVoice
            console.log("Selected voice:", selectedVoice.name)
          }

          utterance.onstart = () => {
            console.log("Speech started:", cleanText.substring(0, 50))
            setIsPlaying(true)
            isSpeakingRef.current = true
          }

          utterance.onend = () => {
            console.log("Speech ended")
            setIsPlaying(false)
            isSpeakingRef.current = false
            isProcessingQueueRef.current = false

            // Process next item in queue
            if (speechQueueRef.current.length > 0) {
              setTimeout(() => processNextSpeech(), 100) // Minimal pause between sentences
            } else {
              onComplete?.()
            }
          }

          utterance.onerror = (event) => {
            console.log("Speech error:", event.error)
            setIsPlaying(false)
            isSpeakingRef.current = false
            isProcessingQueueRef.current = false
            onComplete?.()
          }

          speechRef.current = utterance
          window.speechSynthesis.speak(utterance)

          // Fallback timeout
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
          }

          timeoutRef.current = setTimeout(() => {
            if (isSpeakingRef.current) {
              console.log("Speech timeout - resetting")
              setIsPlaying(false)
              isSpeakingRef.current = false
              isProcessingQueueRef.current = false
              onComplete?.()
            }
          }, 15000)
        } catch (error) {
          console.error("Error creating utterance:", error)
          setIsPlaying(false)
          isSpeakingRef.current = false
          isProcessingQueueRef.current = false
          onComplete?.()
        }
      }, 50) // Minimal delay for cancellation
    } catch (error) {
      console.error("Error in speech processing:", error)
      setIsPlaying(false)
      isSpeakingRef.current = false
      isProcessingQueueRef.current = false
      onComplete?.()
    }
  }

  // Perfect synchronization function for message updates
  const updateMessageWithPerfectSync = (message: string, audioText?: string, onSpeechComplete?: () => void) => {
    // Update text immediately for perfect visual sync
    setCurrentMessage(message)

    // Start speech immediately if conditions are met
    if (speechSupported && voicesLoaded && !isMuted && isVoiceActive) {
      const textToSpeak = audioText || message
      speakTextSynchronized(textToSpeak, onSpeechComplete)
    } else {
      onSpeechComplete?.()
    }
  }

  // Progress through Jessica's script with perfect timing
  useEffect(() => {
    if (isVoiceActive && !isInitializing && audioPermission) {
      const currentStep = jessicaScript[demoStep]
      if (!currentStep) return

      // 3-second delay only for initial autostart
      const initialDelay = demoStep === 0 ? 3000 : 200

      const timer = setTimeout(() => {
        updateMessageWithPerfectSync(currentStep.message, currentStep.audioText, () => {
          // Speech completed, set timer for next step
          if (currentStep.waitForInput) {
            setTimeout(() => {
              updateMessageWithPerfectSync(
                "⏸️ (Waiting for your response... Click 'Continue Demo' when ready)",
                "Waiting for your response. Click Continue Demo when ready.",
              )
            }, 500)
            return
          }

          // Auto-advance to next step after speech completes
          setTimeout(() => {
            const nextStep = demoStep + 1
            if (nextStep < jessicaScript.length) {
              setDemoStep(nextStep)
            } else {
              updateMessageWithPerfectSync(
                "✨ Demo complete! Jessica is ready to handle your real leads 24/7. Would you like to see a live transfer demonstration?",
                "Demo complete! Jessica is ready to handle your real leads 24/7. Would you like to see a live transfer demonstration?",
              )
            }
          }, 800) // Brief pause before next step
        })
      }, initialDelay)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [isVoiceActive, isInitializing, demoStep, audioPermission, isMuted, speechSupported, voicesLoaded])

  const requestPermissions = async () => {
    try {
      updateMessageWithPerfectSync("🎤 Requesting microphone permissions...", "Requesting microphone permissions")

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      setMicrophoneAccess(true)
      stream.getTracks().forEach((track) => track.stop())

      setAudioPermission(true)
      setPermissionState("granted")
      updateMessageWithPerfectSync(
        "✅ Permissions granted! Starting Jessica AI demo...",
        "Permissions granted! Starting Jessica AI demo",
      )

      setTimeout(() => {
        setIsInitializing(false)
      }, 1500)
    } catch (error) {
      console.error("Permission denied:", error)
      setPermissionState("denied")
      updateMessageWithPerfectSync(
        "❌ Microphone access was denied. You can still experience Jessica's demo with text only.",
        "Microphone access was denied. You can still experience Jessica's demo with text only.",
      )
    }
  }

  const startJessicaDemo = () => {
    if (speechSupported && !voicesLoaded) {
      const voices = window.speechSynthesis.getVoices()
      if (voices.length > 0) {
        setVoicesLoaded(true)
      }
    }

    setIsInitializing(false)
    setIsVoiceActive(true)
    setDemoStep(0)
    updateMessageWithPerfectSync("Initializing Jessica AI...", "Initializing Jessica AI")
  }

  const handleStopDemo = () => {
    setIsVoiceActive(false)
    setDemoStep(0)
    setIsPlaying(false)
    isSpeakingRef.current = false
    isProcessingQueueRef.current = false
    speechQueueRef.current = []

    try {
      window.speechSynthesis.cancel()
    } catch (error) {
      console.log("Error canceling speech:", error)
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    updateMessageWithPerfectSync(
      "Demo ended. Click 'Start Jessica Demo' to restart.",
      "Demo ended. Click Start Jessica Demo to restart.",
    )
  }

  const handleContinueDemo = () => {
    if (jessicaScript[demoStep]?.waitForInput) {
      const nextStep = demoStep + 1
      if (nextStep < jessicaScript.length) {
        setDemoStep(nextStep)
      } else {
        updateMessageWithPerfectSync(
          "✨ Demo complete! Jessica is ready to handle your real leads 24/7.",
          "Demo complete! Jessica is ready to handle your real leads 24/7.",
        )
      }
    }
  }

  const handleLiveTransfer = () => {
    if (!transferTarget.trim()) {
      setIsTransferDialogOpen(true)
      return
    }

    const transferMessage = `Jessica is now connecting you to ${transferTarget}... Please hold while I transfer you.`
    updateMessageWithPerfectSync("📞 " + transferMessage, transferMessage)

    setTimeout(() => {
      const salesMessage = `Hi there! This is ${transferTarget}. Jessica has told me about your interest. How can I help you today?`
      updateMessageWithPerfectSync("👋 " + salesMessage, salesMessage)
    }, 3000)

    setIsTransferDialogOpen(false)
  }

  const handleTransferSubmit = () => {
    if (transferTarget.trim()) {
      handleLiveTransfer()
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (!isMuted) {
      try {
        window.speechSynthesis.cancel()
        setIsPlaying(false)
        isSpeakingRef.current = false
        isProcessingQueueRef.current = false
        speechQueueRef.current = []
      } catch (error) {
        console.log("Error canceling speech:", error)
      }
    }
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      try {
        window.speechSynthesis.cancel()
      } catch (error) {
        console.log("Cleanup error:", error)
      }
      isSpeakingRef.current = false
      isProcessingQueueRef.current = false
      speechQueueRef.current = []
    }
  }, [])

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
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Meet Jessica - Your AI SuperAgent</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Experience a live demo with Jessica, your 24/7 AI agent who never sleeps and never misses a lead
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Audio Permission Alert */}
        {permissionState === "denied" && (
          <div className="mb-6 bg-red-900/30 border border-red-500/50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <AlertCircle className="w-6 h-6 text-red-400" />
              <div>
                <h3 className="text-lg font-semibold text-red-300">Audio Permission Recommended</h3>
                <p className="text-red-200 text-sm">
                  For the full Jessica AI experience with voice, please enable microphone permissions. You can still
                  experience the demo with text only.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Audio Support Alert */}
        {!speechSupported && (
          <div className="mb-6 bg-yellow-900/30 border border-yellow-500/50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Speaker className="w-6 h-6 text-yellow-400" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-300">Browser Audio Support</h3>
                <p className="text-yellow-200 text-sm">
                  Your browser doesn't support text-to-speech. Please use Chrome, Firefox, Safari, or Edge for the full
                  voice experience.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Live Transfer Dialog */}
        <Dialog open={isTransferDialogOpen} onOpenChange={setIsTransferDialogOpen}>
          <DialogContent className="bg-gray-800 border border-gray-600 text-white">
            <DialogHeader>
              <DialogTitle className="flex items-center space-x-2">
                <PhoneCall className="w-5 h-5 text-orange-400" />
                <span>Live Transfer Setup</span>
              </DialogTitle>
              <DialogDescription className="text-gray-300">
                Who would you like Jessica to transfer you to? Enter a name, department, or service.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="transfer-target" className="text-white">
                  Transfer to:
                </Label>
                <Input
                  id="transfer-target"
                  value={transferTarget}
                  onChange={(e) => setTransferTarget(e.target.value)}
                  placeholder="e.g., Sales Team, John Smith, Customer Service..."
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  onKeyPress={(e) => e.key === "Enter" && handleTransferSubmit()}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={() => setIsTransferDialogOpen(false)}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                Cancel
              </Button>
              <Button
                onClick={handleTransferSubmit}
                disabled={!transferTarget.trim()}
                className="bg-orange-600 hover:bg-orange-700 text-white"
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                Start Transfer
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Main Demo Interface */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Jessica AI Interface - Main Focus */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-2 border-blue-400 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900">
              <CardHeader className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <div className="relative">
                    <Sparkles className="w-8 h-8" />
                    {isPlaying && (
                      <div className="absolute inset-0 animate-ping">
                        <Sparkles className="w-8 h-8 text-pink-300" />
                      </div>
                    )}
                  </div>
                  <span>Jessica - SuccessNOW AI SuperAgent</span>
                  <div className="flex space-x-2">
                    {microphoneAccess && (
                      <Badge className="bg-green-500 text-white">
                        <MicIcon className="w-3 h-3 mr-1" />
                        Mic
                      </Badge>
                    )}
                    {speechSupported && voicesLoaded && (
                      <Badge className="bg-blue-500 text-white">
                        <Speaker className="w-3 h-3 mr-1" />
                        Voice
                      </Badge>
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                {isInitializing || permissionState === "prompt" ? (
                  <div className="text-center space-y-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-2xl animate-pulse">
                      <Robot className="w-16 h-16 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {permissionState === "checking" ? "Initializing Jessica..." : "Enable Audio for Jessica"}
                      </h3>
                      <p className="text-gray-300 mb-6">{currentMessage}</p>

                      {permissionState === "prompt" && (
                        <div className="space-y-4">
                          <Button
                            onClick={requestPermissions}
                            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg"
                          >
                            🎤 Enable Microphone
                          </Button>

                          <p className="text-gray-400 text-sm">
                            Jessica's demo works without microphone, but you'll get the best experience with voice
                            interaction.
                          </p>

                          <Button
                            onClick={startJessicaDemo}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg"
                          >
                            Start Demo
                          </Button>
                        </div>
                      )}

                      {permissionState === "checking" && (
                        <div className="flex justify-center space-x-1">
                          <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"></div>
                          <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce animation-delay-100"></div>
                          <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce animation-delay-200"></div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Jessica Avatar and Status */}
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                        <Robot className="w-12 h-12 text-white" />
                        {isPlaying && (
                          <>
                            <div className="absolute inset-0 rounded-full bg-pink-400 animate-ping opacity-30"></div>
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {isPlaying ? "Jessica is Speaking" : isVoiceActive ? "Jessica is Ready" : "Jessica Waiting"}
                      </h3>
                      <Badge variant="secondary" className="bg-pink-100 text-pink-800 px-3 py-1">
                        <div className="flex items-center space-x-2">
                          <div
                            className={`w-2 h-2 rounded-full ${isPlaying ? "bg-red-500 animate-pulse" : "bg-pink-500"}`}
                          ></div>
                          <span>{isPlaying ? "Speaking" : "AI SuperAgent Active"}</span>
                        </div>
                      </Badge>
                    </div>

                    {/* Jessica Message Display - Perfect Sync */}
                    <div className="bg-gradient-to-r from-pink-900/50 to-purple-900/50 rounded-xl p-6 border border-pink-400/30">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Robot className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-sm font-semibold text-pink-300">Jessica</span>
                            <span className="text-xs text-gray-400">AI SuperAgent</span>
                            {isPlaying && (
                              <Badge className="bg-red-500 text-white text-xs">
                                <Volume2 className="w-3 h-3 mr-1" />
                                Speaking
                              </Badge>
                            )}
                          </div>
                          <p className="text-lg text-white leading-relaxed">{currentMessage}</p>
                          {isPlaying && (
                            <div className="flex items-center space-x-2 mt-3">
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce animation-delay-100"></div>
                                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce animation-delay-200"></div>
                              </div>
                              <span className="text-sm text-pink-300">Jessica is speaking...</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Control Buttons */}
                    <div className="flex justify-center space-x-4 flex-wrap gap-2">
                      {!isVoiceActive ? (
                        <Button
                          onClick={startJessicaDemo}
                          className="bg-pink-600 hover:bg-pink-700 text-white flex items-center space-x-2"
                        >
                          <Play className="w-5 h-5" />
                          <span>Start Jessica Demo</span>
                        </Button>
                      ) : (
                        <Button onClick={handleStopDemo} variant="destructive" className="flex items-center space-x-2">
                          <Pause className="w-5 h-5" />
                          <span>Stop Demo</span>
                        </Button>
                      )}

                      {jessicaScript[demoStep]?.waitForInput && (
                        <Button
                          onClick={handleContinueDemo}
                          className="bg-green-600 hover:bg-green-700 text-white flex items-center space-x-2"
                        >
                          <CheckCircle className="w-5 h-5" />
                          <span>Continue Demo</span>
                        </Button>
                      )}

                      {speechSupported && (
                        <Button
                          onClick={toggleMute}
                          className="flex items-center space-x-2 bg-black text-white hover:bg-gray-800 border border-gray-600"
                        >
                          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                          <span>{isMuted ? "Unmute" : "Mute"}</span>
                        </Button>
                      )}

                      {/* Enhanced Live Transfer - Available from step 2 */}
                      {demoStep >= 2 && (
                        <Button
                          onClick={() => setIsTransferDialogOpen(true)}
                          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white flex items-center space-x-2"
                        >
                          <PhoneCall className="w-5 h-5" />
                          <span>Live Transfer</span>
                        </Button>
                      )}
                    </div>

                    {/* Audio Status */}
                    {speechSupported && voicesLoaded && (
                      <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl p-4 border border-green-400/30">
                        <div className="flex items-center space-x-3">
                          <Speaker className="w-5 h-5 text-green-400" />
                          <div>
                            <h4 className="text-sm font-semibold text-white">Perfect Voice Sync Active</h4>
                            <p className="text-xs text-gray-300">
                              Jessica's speech is perfectly synchronized with text display.{" "}
                              {isMuted ? "Currently muted." : "Speaking with natural timing."}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Enhanced Live Transfer Feature */}
                    <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-xl p-6 border border-orange-400/30">
                      <div className="flex items-center space-x-3 mb-3">
                        <UserCheck className="w-6 h-6 text-orange-400" />
                        <h4 className="text-lg font-semibold text-white">Custom Live Transfer</h4>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Jessica can transfer you to any person or department you specify. Simply click the Live Transfer
                        button and enter who you'd like to speak with - whether it's a specific person, sales team,
                        customer service, or any other contact.
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
                  <CheckCircle className="w-6 h-6 text-pink-400" />
                  <span>Jessica's Demo Script</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {jessicaScript.map((step, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-500 ${
                        index <= demoStep
                          ? "bg-pink-900/30 border border-pink-400/30"
                          : "bg-gray-700/30 border border-gray-600/30"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          index <= demoStep ? "bg-pink-500 text-white" : "bg-gray-600 text-gray-300"
                        }`}
                      >
                        {index <= demoStep ? <CheckCircle className="w-5 h-5" /> : step.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm">{step.title}</h4>
                        <p className="text-xs text-gray-400">{step.description}</p>
                      </div>
                      {index === demoStep && isPlaying && (
                        <div className="flex space-x-1">
                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce animation-delay-100"></div>
                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce animation-delay-200"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Jessica's Features */}
            <Card className="shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Zap className="w-6 h-6 text-pink-400" />
                  <span>Jessica's Capabilities</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  <div className="flex items-center space-x-3 p-3 bg-pink-900/30 rounded-lg border border-pink-400/30">
                    <Phone className="w-4 h-4 text-pink-400" />
                    <span className="font-medium text-white text-sm">24/7 lead engagement</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-900/30 rounded-lg border border-purple-400/30">
                    <MessageSquare className="w-4 h-4 text-purple-400" />
                    <span className="font-medium text-white text-sm">Perfect speech synchronization</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-900/30 rounded-lg border border-blue-400/30">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                    <span className="font-medium text-white text-sm">Lead qualification & scoring</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-orange-900/30 rounded-lg border border-orange-400/30">
                    <PhoneCall className="w-4 h-4 text-orange-400" />
                    <span className="font-medium text-white text-sm">Custom live transfers</span>
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
