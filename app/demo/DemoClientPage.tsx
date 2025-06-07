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
  const [isMobile, setIsMobile] = useState(false)

  const speechRef = useRef<SpeechSynthesisUtterance | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isSpeakingRef = useRef(false)
  const speechQueueRef = useRef<string[]>([])
  const isProcessingQueueRef = useRef(false)
  const audioContextRef = useRef<AudioContext | null>(null)

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const mobile =
        window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(mobile)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const jessicaScript = [
    {
      title: "AI Agent Introduction",
      description: "Jessica introduces herself",
      icon: <Robot className="w-4 h-4 sm:w-6 sm:h-6" />,
      message:
        "Hi! I'm Jessica, your SuccessNOW AI SuperAgent. I'm part of the 24/7 AI team that never sleeps — built to help your business grow, scale, and never miss another lead.",
      duration: 6500,
      audioText:
        "Hi! I'm Jessica, your SuccessNOW AI SuperAgent. I'm part of the 24/7 AI team that never sleeps, built to help your business grow, scale, and never miss another lead.",
    },
    {
      title: "Demo Overview",
      description: "Explaining the demo process",
      icon: <Zap className="w-4 h-4 sm:w-6 sm:h-6" />,
      message:
        "In this quick demo, I'm going to ask you a few questions to personalize the experience. Then I'll call you just like I would a real lead — and even transfer you live to another number, just like I do when a client requests to speak with your team.",
      duration: 8500,
      audioText:
        "In this quick demo, I'm going to ask you a few questions to personalize the experience. Then I'll call you just like I would a real lead, and even transfer you live to another number, just like I do when a client requests to speak with your team.",
    },
    {
      title: "Ready Check",
      description: "Confirming readiness",
      icon: <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6" />,
      message: "Ready to see what it's like to have an AI employee that actually performs? Great. Let's get started.",
      duration: 4500,
      audioText: "Ready to see what it's like to have an AI employee that actually performs? Great. Let's get started.",
    },
    {
      title: "Lead Qualification",
      description: "Requesting contact information",
      icon: <Users className="w-4 h-4 sm:w-6 sm:h-6" />,
      message: "First — what's your name and the best phone number I can call you back on?",
      duration: 3500,
      waitForInput: true,
      audioText: "First, what's your name and the best phone number I can call you back on?",
    },
    {
      title: "24/7 Support Promise",
      description: "Explaining ongoing support",
      icon: <PhoneCall className="w-4 h-4 sm:w-6 sm:h-6" />,
      message:
        "After the call, you can text me any questions or just call me back — I'm available 24/7 to support your business, engage your leads, and close deals.",
      duration: 6500,
      audioText:
        "After the call, you can text me any questions or just call me back. I'm available 24/7 to support your business, engage your leads, and close deals.",
    },
  ]

  // Enhanced mobile audio initialization
  const initializeMobileAudio = async () => {
    if (isMobile) {
      try {
        // Create AudioContext for mobile audio unlock
        if (!audioContextRef.current) {
          audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
        }

        // Resume AudioContext if suspended (common on mobile)
        if (audioContextRef.current.state === "suspended") {
          await audioContextRef.current.resume()
        }

        // Test speech synthesis on mobile
        const testUtterance = new SpeechSynthesisUtterance("")
        window.speechSynthesis.speak(testUtterance)
        window.speechSynthesis.cancel()

        console.log("Mobile audio initialized successfully")
      } catch (error) {
        console.log("Mobile audio initialization failed:", error)
      }
    }
  }

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

        // Initialize mobile audio
        initializeMobileAudio()

        return () => {
          window.speechSynthesis.removeEventListener("voiceschanged", loadVoices)
        }
      }
    }

    checkSpeechSupport()
  }, [isMobile])

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

  // Enhanced mobile speech processing
  const processTextForSpeech = (text: string): string => {
    return text
      .replace(/[🎙️🎯✅📝🔁✨📞👋⏸️]/gu, "")
      .replace(/—/g, " ")
      .replace(/\s+/g, " ")
      .trim()
  }

  // Mobile-optimized speech synthesis
  const speakTextSynchronized = (text: string, onComplete?: () => void) => {
    if (!speechSupported || isMuted || !text.trim()) {
      console.log("Speech not available or muted")
      onComplete?.()
      return
    }

    // Mobile audio unlock on first user interaction
    if (isMobile && audioContextRef.current?.state === "suspended") {
      initializeMobileAudio()
    }

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
      // Enhanced mobile speech cancellation
      try {
        window.speechSynthesis.cancel()
        // Additional mobile-specific cancellation
        if (isMobile) {
          setTimeout(() => window.speechSynthesis.cancel(), 10)
        }
      } catch (error) {
        console.log("Error canceling speech:", error)
      }

      // Longer delay for mobile devices
      const delay = isMobile ? 150 : 50

      setTimeout(() => {
        try {
          const utterance = new SpeechSynthesisUtterance(cleanText)

          // Mobile-optimized voice settings
          utterance.rate = isMobile ? 0.95 : 1.05
          utterance.pitch = 1.15
          utterance.volume = 0.9

          // Enhanced voice selection for mobile
          const voices = window.speechSynthesis.getVoices()
          let selectedVoice = null

          if (isMobile) {
            // Mobile-specific voice selection
            selectedVoice =
              voices.find((voice) => voice.lang === "en-US" && voice.name.toLowerCase().includes("female")) ||
              voices.find((voice) => voice.lang === "en-GB") ||
              voices.find((voice) => voice.lang.startsWith("en") && !voice.name.toLowerCase().includes("male")) ||
              voices.find((voice) => voice.lang.startsWith("en"))
          } else {
            // Desktop voice selection
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
          }

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

            if (speechQueueRef.current.length > 0) {
              setTimeout(() => processNextSpeech(), isMobile ? 200 : 100)
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

          // Mobile-specific timeout
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
          }

          timeoutRef.current = setTimeout(
            () => {
              if (isSpeakingRef.current) {
                console.log("Speech timeout - resetting")
                setIsPlaying(false)
                isSpeakingRef.current = false
                isProcessingQueueRef.current = false
                onComplete?.()
              }
            },
            isMobile ? 20000 : 15000,
          )
        } catch (error) {
          console.error("Error creating utterance:", error)
          setIsPlaying(false)
          isSpeakingRef.current = false
          isProcessingQueueRef.current = false
          onComplete?.()
        }
      }, delay)
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
    setCurrentMessage(message)

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
      const initialDelay = demoStep === 0 ? 3000 : isMobile ? 300 : 200

      const timer = setTimeout(() => {
        updateMessageWithPerfectSync(currentStep.message, currentStep.audioText, () => {
          if (currentStep.waitForInput) {
            setTimeout(() => {
              updateMessageWithPerfectSync(
                "⏸️ (Waiting for your response... Click 'Continue Demo' when ready)",
                "Waiting for your response. Click Continue Demo when ready.",
              )
            }, 500)
            return
          }

          setTimeout(
            () => {
              const nextStep = demoStep + 1
              if (nextStep < jessicaScript.length) {
                setDemoStep(nextStep)
              } else {
                updateMessageWithPerfectSync(
                  "✨ Demo complete! Jessica is ready to handle your real leads 24/7. Would you like to see a live transfer demonstration?",
                  "Demo complete! Jessica is ready to handle your real leads 24/7. Would you like to see a live transfer demonstration?",
                )
              }
            },
            isMobile ? 1000 : 800,
          )
        })
      }, initialDelay)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [isVoiceActive, isInitializing, demoStep, audioPermission, isMuted, speechSupported, voicesLoaded, isMobile])

  const requestPermissions = async () => {
    try {
      updateMessageWithPerfectSync("🎤 Requesting microphone permissions...", "Requesting microphone permissions")

      // Initialize mobile audio on user interaction
      await initializeMobileAudio()

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

  const startJessicaDemo = async () => {
    // Initialize mobile audio on user interaction
    await initializeMobileAudio()

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
      {/* Mobile-Optimized Header Section */}
      <div className="bg-gradient-to-r from-[#0080FF] to-[#00BFFF] py-6 sm:py-12">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Robot className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4 leading-tight">
            Meet Jessica - Your AI SuperAgent
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto px-2">
            Experience a live demo with Jessica, your 24/7 AI agent who never sleeps and never misses a lead
          </p>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8">
        {/* Mobile-Optimized Audio Permission Alert */}
        {permissionState === "denied" && (
          <div className="mb-4 sm:mb-6 bg-red-900/30 border border-red-500/50 rounded-lg p-3 sm:p-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-red-300">Audio Permission Recommended</h3>
                <p className="text-sm sm:text-sm text-red-200 mt-1">
                  For the full Jessica AI experience with voice, please enable microphone permissions. You can still
                  experience the demo with text only.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Mobile-Optimized Audio Support Alert */}
        {!speechSupported && (
          <div className="mb-4 sm:mb-6 bg-yellow-900/30 border border-yellow-500/50 rounded-lg p-3 sm:p-4">
            <div className="flex items-start space-x-3">
              <Speaker className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-yellow-300">Browser Audio Support</h3>
                <p className="text-sm text-yellow-200 mt-1">
                  Your browser doesn't support text-to-speech. Please use Chrome, Firefox, Safari, or Edge for the full
                  voice experience.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Mobile-Optimized Live Transfer Dialog */}
        <Dialog open={isTransferDialogOpen} onOpenChange={setIsTransferDialogOpen}>
          <DialogContent className="bg-gray-800 border border-gray-600 text-white w-[95vw] max-w-md mx-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center space-x-2 text-base sm:text-lg">
                <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                <span>Live Transfer Setup</span>
              </DialogTitle>
              <DialogDescription className="text-gray-300 text-sm">
                Who would you like Jessica to transfer you to? Enter a name, department, or service.
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
                  onKeyPress={(e) => e.key === "Enter" && handleTransferSubmit()}
                />
              </div>
            </div>
            <DialogFooter className="flex-col sm:flex-row gap-2">
              <Button
                onClick={() => setIsTransferDialogOpen(false)}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700 w-full sm:w-auto"
              >
                Cancel
              </Button>
              <Button
                onClick={handleTransferSubmit}
                disabled={!transferTarget.trim()}
                className="bg-orange-600 hover:bg-orange-700 text-white w-full sm:w-auto"
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                Start Transfer
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Mobile-Optimized Main Demo Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
          {/* Jessica AI Interface - Mobile First */}
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
                    {microphoneAccess && (
                      <Badge className="bg-green-500 text-white text-xs">
                        <MicIcon className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                        <span className="hidden sm:inline">Mic</span>
                      </Badge>
                    )}
                    {speechSupported && voicesLoaded && (
                      <Badge className="bg-blue-500 text-white text-xs">
                        <Speaker className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                        <span className="hidden sm:inline">Voice</span>
                      </Badge>
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-8">
                {isInitializing || permissionState === "prompt" ? (
                  <div className="text-center space-y-4 sm:space-y-6">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-2xl animate-pulse">
                      <Robot className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                        {permissionState === "checking" ? "Initializing Jessica..." : "Enable Audio for Jessica"}
                      </h3>
                      <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base px-2">{currentMessage}</p>

                      {permissionState === "prompt" && (
                        <div className="space-y-3 sm:space-y-4">
                          <Button
                            onClick={requestPermissions}
                            className="bg-pink-600 hover:bg-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg shadow-lg w-full sm:w-auto"
                          >
                            🎤 Enable Microphone
                          </Button>

                          <p className="text-gray-400 text-xs sm:text-sm px-2">
                            Jessica's demo works without microphone, but you'll get the best experience with voice
                            interaction.
                          </p>

                          <Button
                            onClick={startJessicaDemo}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg w-full sm:w-auto"
                          >
                            Start Demo
                          </Button>
                        </div>
                      )}

                      {permissionState === "checking" && (
                        <div className="flex justify-center space-x-1">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-pink-500 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-pink-500 rounded-full animate-bounce animation-delay-100"></div>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-pink-500 rounded-full animate-bounce animation-delay-200"></div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 sm:space-y-6">
                    {/* Mobile-Optimized Jessica Avatar and Status */}
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
                        {isPlaying ? "Jessica is Speaking" : isVoiceActive ? "Jessica is Ready" : "Jessica Waiting"}
                      </h3>
                      <Badge variant="secondary" className="bg-pink-100 text-pink-800 px-2 sm:px-3 py-1 text-xs">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <div
                            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${isPlaying ? "bg-red-500 animate-pulse" : "bg-pink-500"}`}
                          ></div>
                          <span>{isPlaying ? "Speaking" : "AI SuperAgent Active"}</span>
                        </div>
                      </Badge>
                    </div>

                    {/* Mobile-Optimized Jessica Message Display */}
                    <div className="bg-gradient-to-r from-pink-900/50 to-purple-900/50 rounded-xl p-4 sm:p-6 border border-pink-400/30">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Robot className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-xs sm:text-sm font-semibold text-pink-300">Jessica</span>
                            <span className="text-xs text-gray-400">AI SuperAgent</span>
                            {isPlaying && (
                              <Badge className="bg-red-500 text-white text-xs">
                                <Volume2 className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                                <span className="hidden sm:inline">Speaking</span>
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm sm:text-lg text-white leading-relaxed break-words">{currentMessage}</p>
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

                    {/* Mobile-Optimized Control Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 gap-2">
                      {!isVoiceActive ? (
                        <Button
                          onClick={startJessicaDemo}
                          className="bg-pink-600 hover:bg-pink-700 text-white flex items-center justify-center space-x-2 py-3 text-sm sm:text-base"
                        >
                          <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Start Jessica Demo</span>
                        </Button>
                      ) : (
                        <Button
                          onClick={handleStopDemo}
                          variant="destructive"
                          className="flex items-center justify-center space-x-2 py-3 text-sm sm:text-base"
                        >
                          <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Stop Demo</span>
                        </Button>
                      )}

                      {jessicaScript[demoStep]?.waitForInput && (
                        <Button
                          onClick={handleContinueDemo}
                          className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center space-x-2 py-3 text-sm sm:text-base"
                        >
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Continue Demo</span>
                        </Button>
                      )}

                      {speechSupported && (
                        <Button
                          onClick={toggleMute}
                          className="flex items-center justify-center space-x-2 bg-black text-white hover:bg-gray-800 border border-gray-600 py-3 text-sm sm:text-base"
                        >
                          {isMuted ? (
                            <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
                          ) : (
                            <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
                          )}
                          <span>{isMuted ? "Unmute" : "Mute"}</span>
                        </Button>
                      )}

                      {demoStep >= 2 && (
                        <Button
                          onClick={() => setIsTransferDialogOpen(true)}
                          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white flex items-center justify-center space-x-2 py-3 text-sm sm:text-base"
                        >
                          <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Live Transfer</span>
                        </Button>
                      )}
                    </div>

                    {/* Mobile-Optimized Audio Status */}
                    {speechSupported && voicesLoaded && (
                      <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl p-3 sm:p-4 border border-green-400/30">
                        <div className="flex items-start space-x-3">
                          <Speaker className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-semibold text-white">Perfect Voice Sync Active</h4>
                            <p className="text-xs text-gray-300 mt-1">
                              Jessica's speech is perfectly synchronized with text display.{" "}
                              {isMuted ? "Currently muted." : "Speaking with natural timing."}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Mobile-Optimized Live Transfer Feature */}
                    <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-xl p-4 sm:p-6 border border-orange-400/30">
                      <div className="flex items-start space-x-3 mb-3">
                        <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 flex-shrink-0 mt-0.5" />
                        <h4 className="text-base sm:text-lg font-semibold text-white">Custom Live Transfer</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300">
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

          {/* Mobile-Optimized Demo Progress Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center space-x-2 text-white text-base sm:text-lg">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />
                  <span>Jessica's Demo Script</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-3 sm:space-y-4">
                  {jessicaScript.map((step, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg transition-all duration-500 ${
                        index <= demoStep
                          ? "bg-pink-900/30 border border-pink-400/30"
                          : "bg-gray-700/30 border border-gray-600/30"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          index <= demoStep ? "bg-pink-500 text-white" : "bg-gray-600 text-gray-300"
                        }`}
                      >
                        {index <= demoStep ? <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" /> : step.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-white text-xs sm:text-sm leading-tight">{step.title}</h4>
                        <p className="text-xs text-gray-400 leading-tight">{step.description}</p>
                      </div>
                      {index === demoStep && isPlaying && (
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

            {/* Mobile-Optimized Jessica's Features */}
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
                    <span className="font-medium text-white text-xs sm:text-sm">24/7 lead engagement</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-purple-900/30 rounded-lg border border-purple-400/30">
                    <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0" />
                    <span className="font-medium text-white text-xs sm:text-sm">Perfect speech synchronization</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-blue-900/30 rounded-lg border border-blue-400/30">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                    <span className="font-medium text-white text-xs sm:text-sm">Lead qualification & scoring</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-orange-900/30 rounded-lg border border-orange-400/30">
                    <PhoneCall className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 flex-shrink-0" />
                    <span className="font-medium text-white text-xs sm:text-sm">Custom live transfers</span>
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
