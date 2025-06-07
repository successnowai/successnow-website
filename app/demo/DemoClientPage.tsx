"use client"

import { useState, useEffect, useRef, useCallback } from "react"
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
  PhoneCall,
  AlertCircle,
  Play,
  Speaker,
  ArrowRight,
  Headphones,
} from "lucide-react"

export default function DemoClientPage() {
  // State variables
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
  const [audioInitialized, setAudioInitialized] = useState(false)
  const [audioUnlocked, setAudioUnlocked] = useState(false)
  const [showAudioPrompt, setShowAudioPrompt] = useState(false)
  const [audioTestPassed, setAudioTestPassed] = useState(false)
  const [debugInfo, setDebugInfo] = useState<string[]>([])

  // Refs
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isSpeakingRef = useRef(false)
  const speechQueueRef = useRef<{ text: string; onComplete?: () => void }[]>([])
  const isProcessingQueueRef = useRef(false)
  const audioContextRef = useRef<AudioContext | null>(null)
  const hasUserInteractedRef = useRef(false)
  const selectedVoiceRef = useRef<SpeechSynthesisVoice | null>(null)
  const retryCountRef = useRef(0)
  const maxRetries = 3
  const stepTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Add debug info
  const addDebug = (message: string) => {
    const timestamp = new Date().toLocaleTimeString()
    const debugMessage = `[${timestamp}] ${message}`
    console.log(`[Jessica Debug]: ${debugMessage}`)
    setDebugInfo((prev) => [...prev.slice(-9), debugMessage])
  }

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const mobile =
        window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(mobile)
      addDebug(`Device detected: ${mobile ? "Mobile" : "Desktop"}`)

      // Show audio prompt immediately on mobile
      if (mobile) {
        setShowAudioPrompt(true)
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Jessica's script with precise timing
  const jessicaScript = [
    {
      title: "AI Agent Introduction",
      description: "Jessica introduces herself",
      icon: <Robot className="w-4 h-4 sm:w-6 sm:h-6" />,
      message:
        "Hi! I'm Jessica, your SuccessNOW AI SuperAgent. I'm part of the 24/7 AI team that never sleeps — built to help your business grow, scale, and never miss another lead.",
      audioText:
        "Hi! I'm Jessica, your SuccessNOW AI SuperAgent. I'm part of the 24/7 AI team that never sleeps, built to help your business grow, scale, and never miss another lead.",
      duration: 7000,
    },
    {
      title: "Demo Overview",
      description: "Explaining the demo process",
      icon: <Zap className="w-4 h-4 sm:w-6 sm:h-6" />,
      message:
        "In this quick demo, I'm going to ask you a few questions to personalize the experience. Then I'll call you just like I would a real lead — and even transfer you live to another number, just like I do when a client requests to speak with your team.",
      audioText:
        "In this quick demo, I'm going to ask you a few questions to personalize the experience. Then I'll call you just like I would a real lead, and even transfer you live to another number, just like I do when a client requests to speak with your team.",
      duration: 9000,
    },
    {
      title: "Ready Check",
      description: "Confirming readiness",
      icon: <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6" />,
      message: "Ready to see what it's like to have an AI employee that actually performs? Great. Let's get started.",
      audioText: "Ready to see what it's like to have an AI employee that actually performs? Great. Let's get started.",
      duration: 5000,
    },
    {
      title: "Lead Qualification",
      description: "Requesting contact information",
      icon: <Users className="w-4 h-4 sm:w-6 sm:h-6" />,
      message: "First — what's your name and the best phone number I can call you back on?",
      audioText: "First, what's your name and the best phone number I can call you back on?",
      duration: 4000,
      waitForInput: true,
    },
    {
      title: "24/7 Support Promise",
      description: "Explaining ongoing support",
      icon: <PhoneCall className="w-4 h-4 sm:w-6 sm:h-6" />,
      message:
        "After the call, you can text me any questions or just call me back — I'm available 24/7 to support your business, engage your leads, and close deals.",
      audioText:
        "After the call, you can text me any questions or just call me back. I'm available 24/7 to support your business, engage your leads, and close deals.",
      duration: 7000,
    },
  ]

  // Comprehensive mobile audio unlock
  const unlockMobileAudio = useCallback(async (): Promise<boolean> => {
    if (audioUnlocked) {
      addDebug("Audio already unlocked")
      return true
    }

    addDebug("Starting mobile audio unlock process...")

    try {
      // Method 1: Silent audio element (iOS Safari)
      try {
        const silentAudio = new Audio()
        silentAudio.src =
          "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT"
        silentAudio.volume = 0.01
        silentAudio.muted = false

        const playPromise = silentAudio.play()
        if (playPromise) {
          await playPromise
          silentAudio.pause()
          silentAudio.currentTime = 0
        }
        addDebug("Silent audio method successful")
      } catch (error) {
        addDebug(`Silent audio method failed: ${error}`)
      }

      // Method 2: AudioContext (most browsers)
      try {
        if (!audioContextRef.current) {
          audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
          addDebug("AudioContext created")
        }

        if (audioContextRef.current.state === "suspended") {
          await audioContextRef.current.resume()
          addDebug("AudioContext resumed")
        }

        // Create and play a silent oscillator
        const oscillator = audioContextRef.current.createOscillator()
        const gainNode = audioContextRef.current.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(audioContextRef.current.destination)

        gainNode.gain.value = 0.01
        oscillator.frequency.value = 440
        oscillator.type = "sine"

        oscillator.start(0)
        oscillator.stop(0.1)

        addDebug("Oscillator test successful")
      } catch (error) {
        addDebug(`AudioContext method failed: ${error}`)
      }

      // Method 3: Speech Synthesis test
      try {
        const testUtterance = new SpeechSynthesisUtterance(" ")
        testUtterance.volume = 0.01
        testUtterance.rate = 10
        testUtterance.pitch = 0.1

        window.speechSynthesis.speak(testUtterance)

        // Wait briefly then cancel
        await new Promise((resolve) => setTimeout(resolve, 100))
        window.speechSynthesis.cancel()

        addDebug("Speech synthesis test successful")
      } catch (error) {
        addDebug(`Speech synthesis test failed: ${error}`)
      }

      setAudioUnlocked(true)
      addDebug("Mobile audio unlock completed successfully")
      return true
    } catch (error) {
      addDebug(`Mobile audio unlock failed: ${error}`)
      return false
    }
  }, [audioUnlocked])

  // Test audio functionality
  const testAudioPlayback = useCallback(async (): Promise<boolean> => {
    addDebug("Testing audio playback...")

    try {
      // Ensure audio is unlocked first
      await unlockMobileAudio()

      // Load voices if not already loaded
      const voices = window.speechSynthesis.getVoices()
      if (voices.length === 0) {
        addDebug("No voices available, waiting for voices to load...")
        return false
      }

      // Select best voice
      const bestVoice =
        voices.find(
          (v) =>
            v.lang.startsWith("en") &&
            (v.name.toLowerCase().includes("female") || v.name.includes("Samantha") || v.name.includes("Karen")),
        ) ||
        voices.find((v) => v.lang.startsWith("en")) ||
        voices[0]

      if (bestVoice) {
        selectedVoiceRef.current = bestVoice
        addDebug(`Selected voice: ${bestVoice.name}`)
      }

      // Test with a short phrase
      const testUtterance = new SpeechSynthesisUtterance("Audio test")
      testUtterance.volume = 0.8
      testUtterance.rate = 1.0
      testUtterance.pitch = 1.1

      if (selectedVoiceRef.current) {
        testUtterance.voice = selectedVoiceRef.current
      }

      return new Promise((resolve) => {
        testUtterance.onstart = () => {
          addDebug("Audio test started successfully")
          setAudioTestPassed(true)
          window.speechSynthesis.cancel() // Stop the test immediately
          resolve(true)
        }

        testUtterance.onerror = (event) => {
          addDebug(`Audio test failed: ${event.error}`)
          resolve(false)
        }

        testUtterance.onend = () => {
          addDebug("Audio test completed")
          resolve(true)
        }

        // Safety timeout
        setTimeout(() => {
          window.speechSynthesis.cancel()
          resolve(false)
        }, 2000)

        window.speechSynthesis.speak(testUtterance)
      })
    } catch (error) {
      addDebug(`Audio test error: ${error}`)
      return false
    }
  }, [unlockMobileAudio])

  // Initialize audio with user interaction
  const initializeAudioWithInteraction = useCallback(async () => {
    hasUserInteractedRef.current = true
    addDebug("User interaction detected - initializing audio")

    try {
      // Step 1: Unlock mobile audio
      const unlocked = await unlockMobileAudio()
      if (!unlocked) {
        addDebug("Failed to unlock mobile audio")
        return false
      }

      // Step 2: Test audio playback
      const testPassed = await testAudioPlayback()
      if (!testPassed) {
        addDebug("Audio test failed")
        return false
      }

      // Step 3: Load and cache voices
      const voices = window.speechSynthesis.getVoices()
      if (voices.length > 0) {
        setVoicesLoaded(true)
        addDebug(`Voices loaded: ${voices.length} available`)
      }

      setAudioInitialized(true)
      setShowAudioPrompt(false)
      addDebug("Audio initialization completed successfully")
      return true
    } catch (error) {
      addDebug(`Audio initialization failed: ${error}`)
      return false
    }
  }, [unlockMobileAudio, testAudioPlayback])

  // Load voices and check speech synthesis support
  useEffect(() => {
    const checkSpeechSupport = () => {
      const speechSupport = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window
      setSpeechSupported(speechSupport)
      addDebug(`Speech synthesis supported: ${speechSupport}`)

      if (speechSupport) {
        const loadVoices = () => {
          const voices = window.speechSynthesis.getVoices()
          if (voices.length > 0) {
            setVoicesLoaded(true)
            addDebug(`Voices loaded: ${voices.length} voices available`)

            // Auto-select best voice
            const bestVoice =
              voices.find(
                (v) =>
                  v.lang.startsWith("en") &&
                  (v.name.toLowerCase().includes("female") || v.name.includes("Samantha") || v.name.includes("Karen")),
              ) ||
              voices.find((v) => v.lang.startsWith("en")) ||
              voices[0]

            if (bestVoice && !selectedVoiceRef.current) {
              selectedVoiceRef.current = bestVoice
              addDebug(`Auto-selected voice: ${bestVoice.name}`)
            }
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

  // Check permissions on page load
  useEffect(() => {
    const checkPermissions = async () => {
      try {
        setAudioPermission(true)
        setPermissionState("granted")

        if (!isMobile) {
          setCurrentMessage("Audio ready! Click 'Start Jessica Demo' to begin.")
          setIsInitializing(false)
        } else {
          setCurrentMessage("Tap the audio button below to enable Jessica's voice for the full experience.")
          setIsInitializing(false)
        }
      } catch (error) {
        addDebug(`Error checking permissions: ${error}`)
        setPermissionState("prompt")
        setCurrentMessage("Click below to enable audio for Jessica's voice demo.")
        setIsInitializing(false)
      }
    }

    checkPermissions()
  }, [isMobile])

  // Process text for speech
  const processTextForSpeech = (text: string): string => {
    return text
      .replace(/[🎙️🎯✅📝🔁✨📞👋⏸️]/gu, "")
      .replace(/—/g, " ")
      .replace(/\s+/g, " ")
      .trim()
  }

  // Add to speech queue
  const addToSpeechQueue = useCallback((text: string, onComplete?: () => void) => {
    speechQueueRef.current.push({ text, onComplete })
    addDebug(`Added to speech queue: "${text.substring(0, 30)}..."`)

    if (!isProcessingQueueRef.current) {
      processNextSpeech()
    }
  }, [])

  // Process next speech in queue
  const processNextSpeech = useCallback(() => {
    if (isProcessingQueueRef.current || speechQueueRef.current.length === 0) {
      return
    }

    isProcessingQueueRef.current = true
    const { text, onComplete } = speechQueueRef.current.shift()!
    const cleanText = processTextForSpeech(text)

    addDebug(`Processing speech: "${cleanText.substring(0, 30)}..."`)

    if (!cleanText || isMuted || !speechSupported || !audioInitialized) {
      addDebug("Speech skipped - conditions not met")
      isProcessingQueueRef.current = false
      onComplete?.()
      if (speechQueueRef.current.length > 0) {
        setTimeout(processNextSpeech, 100)
      }
      return
    }

    // Cancel any ongoing speech
    try {
      window.speechSynthesis.cancel()
      if (isMobile) {
        // Multiple cancellation attempts for mobile
        setTimeout(() => window.speechSynthesis.cancel(), 10)
        setTimeout(() => window.speechSynthesis.cancel(), 50)
      }
    } catch (error) {
      addDebug(`Error canceling speech: ${error}`)
    }

    // Delay before speaking
    const delay = isMobile ? 300 : 100

    setTimeout(() => {
      try {
        const utterance = new SpeechSynthesisUtterance(cleanText)

        // Voice settings optimized for mobile
        utterance.rate = isMobile ? 0.95 : 1.0
        utterance.pitch = 1.1
        utterance.volume = 1.0

        // Use cached voice
        if (selectedVoiceRef.current) {
          utterance.voice = selectedVoiceRef.current
        }

        // Speech events
        utterance.onstart = () => {
          addDebug("Speech started")
          setIsPlaying(true)
          isSpeakingRef.current = true
        }

        utterance.onend = () => {
          addDebug("Speech ended")
          setIsPlaying(false)
          isSpeakingRef.current = false
          isProcessingQueueRef.current = false

          // Process next item in queue
          if (speechQueueRef.current.length > 0) {
            setTimeout(processNextSpeech, isMobile ? 500 : 200)
          } else {
            onComplete?.()
          }
        }

        utterance.onerror = (event) => {
          addDebug(`Speech error: ${event.error}`)
          setIsPlaying(false)
          isSpeakingRef.current = false
          isProcessingQueueRef.current = false
          onComplete?.()
        }

        speechRef.current = utterance
        window.speechSynthesis.speak(utterance)

        // Safety timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(
          () => {
            if (isSpeakingRef.current) {
              addDebug("Speech timeout - resetting")
              window.speechSynthesis.cancel()
              setIsPlaying(false)
              isSpeakingRef.current = false
              isProcessingQueueRef.current = false
              onComplete?.()
            }
          },
          cleanText.length * 100 + 5000,
        ) // Dynamic timeout based on text length
      } catch (error) {
        addDebug(`Error creating utterance: ${error}`)
        setIsPlaying(false)
        isSpeakingRef.current = false
        isProcessingQueueRef.current = false
        onComplete?.()
      }
    }, delay)
  }, [isMobile, isMuted, speechSupported, audioInitialized])

  // Update message with synchronized speech
  const updateMessageWithSync = useCallback(
    (message: string, audioText?: string, onComplete?: () => void) => {
      setCurrentMessage(message)
      addDebug(`Message updated: "${message.substring(0, 30)}..."`)

      if (speechSupported && audioInitialized && !isMuted && isVoiceActive) {
        const textToSpeak = audioText || message
        addToSpeechQueue(textToSpeak, onComplete)
      } else {
        addDebug("Speech skipped - not ready or muted")
        onComplete?.()
      }
    },
    [speechSupported, audioInitialized, isMuted, isVoiceActive, addToSpeechQueue],
  )

  // Progress through Jessica's script with perfect timing
  useEffect(() => {
    if (isVoiceActive && !isInitializing && audioPermission) {
      const currentStep = jessicaScript[demoStep]
      if (!currentStep) return

      // Clear any existing timeout
      if (stepTimeoutRef.current) {
        clearTimeout(stepTimeoutRef.current)
      }

      // Initial delay for first step
      const initialDelay = demoStep === 0 ? (isMobile ? 2000 : 1000) : 500
      addDebug(`Starting step ${demoStep} with delay ${initialDelay}ms`)

      stepTimeoutRef.current = setTimeout(() => {
        updateMessageWithSync(currentStep.message, currentStep.audioText, () => {
          if (currentStep.waitForInput) {
            setTimeout(() => {
              updateMessageWithSync(
                "⏸️ (Waiting for your response... Click 'Continue Demo' when ready)",
                "Waiting for your response. Click Continue Demo when ready.",
              )
            }, 1000)
            return
          }

          // Move to next step after speech completes
          setTimeout(
            () => {
              const nextStep = demoStep + 1
              if (nextStep < jessicaScript.length) {
                addDebug(`Advancing to step ${nextStep}`)
                setDemoStep(nextStep)
              } else {
                addDebug("Demo complete")
                updateMessageWithSync(
                  "✨ Demo complete! Jessica is ready to handle your real leads 24/7. Would you like to see a live transfer demonstration?",
                  "Demo complete! Jessica is ready to handle your real leads 24/7. Would you like to see a live transfer demonstration?",
                )
              }
            },
            isMobile ? 1500 : 1000,
          )
        })
      }, initialDelay)

      return () => {
        if (stepTimeoutRef.current) {
          clearTimeout(stepTimeoutRef.current)
        }
      }
    }
  }, [isVoiceActive, isInitializing, demoStep, audioPermission, isMobile, updateMessageWithSync])

  // Start Jessica demo
  const startJessicaDemo = async () => {
    addDebug("Starting Jessica demo")

    // Ensure audio is initialized on mobile
    if (isMobile && !audioInitialized) {
      const initialized = await initializeAudioWithInteraction()
      if (!initialized) {
        addDebug("Failed to initialize audio, starting demo without voice")
      }
    }

    setIsInitializing(false)
    setIsVoiceActive(true)
    setDemoStep(0)
    updateMessageWithSync("Initializing Jessica AI...", "Initializing Jessica AI")
  }

  // Stop demo
  const handleStopDemo = () => {
    addDebug("Demo stopped by user")
    setIsVoiceActive(false)
    setDemoStep(0)
    setIsPlaying(false)
    isSpeakingRef.current = false
    isProcessingQueueRef.current = false
    speechQueueRef.current = []

    // Clear timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    if (stepTimeoutRef.current) {
      clearTimeout(stepTimeoutRef.current)
    }

    try {
      window.speechSynthesis.cancel()
    } catch (error) {
      addDebug(`Error canceling speech: ${error}`)
    }

    updateMessageWithSync("Demo ended. Click 'Start Jessica Demo' to restart.")
  }

  // Continue demo after user input
  const handleContinueDemo = () => {
    if (jessicaScript[demoStep]?.waitForInput) {
      addDebug("User continued demo after input step")
      const nextStep = demoStep + 1
      if (nextStep < jessicaScript.length) {
        setDemoStep(nextStep)
      } else {
        updateMessageWithSync(
          "✨ Demo complete! Jessica is ready to handle your real leads 24/7.",
          "Demo complete! Jessica is ready to handle your real leads 24/7.",
        )
      }
    }
  }

  // Handle live transfer
  const handleLiveTransfer = () => {
    if (!transferTarget.trim()) {
      setIsTransferDialogOpen(true)
      return
    }

    addDebug(`Live transfer initiated to: ${transferTarget}`)
    const transferMessage = `Jessica is now connecting you to ${transferTarget}... Please hold while I transfer you.`
    updateMessageWithSync("📞 " + transferMessage, transferMessage)

    setTimeout(() => {
      const salesMessage = `Hi there! This is ${transferTarget}. Jessica has told me about your interest. How can I help you today?`
      updateMessageWithSync("👋 " + salesMessage, salesMessage)
    }, 4000)

    setIsTransferDialogOpen(false)
  }

  // Submit transfer target
  const handleTransferSubmit = () => {
    if (transferTarget.trim()) {
      handleLiveTransfer()
    }
  }

  // Toggle mute
  const toggleMute = () => {
    const newMuteState = !isMuted
    setIsMuted(newMuteState)
    addDebug(`Audio ${newMuteState ? "muted" : "unmuted"} by user`)

    if (newMuteState) {
      try {
        window.speechSynthesis.cancel()
        setIsPlaying(false)
        isSpeakingRef.current = false
        isProcessingQueueRef.current = false
        speechQueueRef.current = []
      } catch (error) {
        addDebug(`Error canceling speech: ${error}`)
      }
    }
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      if (stepTimeoutRef.current) {
        clearTimeout(stepTimeoutRef.current)
      }
      try {
        window.speechSynthesis.cancel()
      } catch (error) {
        addDebug(`Cleanup error: ${error}`)
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
        {/* Mobile Audio Prompt */}
        {isMobile && showAudioPrompt && (
          <div className="mb-4 sm:mb-6 bg-gradient-to-r from-pink-900/50 to-purple-900/50 border-2 border-pink-400/50 rounded-xl p-4 sm:p-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Enable Jessica's Voice</h3>
                <p className="text-sm text-pink-200 mb-4">
                  Tap the button below to unlock audio and hear Jessica speak. This is required for the full demo
                  experience on mobile devices.
                </p>
                <Button
                  onClick={initializeAudioWithInteraction}
                  className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-bold text-base shadow-lg min-h-[44px] w-full sm:w-auto"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Enable Jessica's Voice
                </Button>
                {audioTestPassed && (
                  <div className="mt-3 flex items-center justify-center space-x-2 text-green-400">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Audio test passed! Jessica is ready to speak.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Audio Status Alerts */}
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

        {/* Mobile Audio Status */}
        {isMobile && audioInitialized && (
          <div className="mb-4 sm:mb-6 bg-green-900/30 border border-green-500/50 rounded-lg p-3 sm:p-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-green-300">Mobile Audio Ready</h3>
                <p className="text-sm text-green-200 mt-1">
                  ✅ Jessica's voice is enabled and ready! You'll hear her speak during the demo.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Live Transfer Dialog */}
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
                    {audioInitialized && (
                      <Badge className="bg-green-500 text-white text-xs">
                        <Volume2 className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                        <span className="hidden sm:inline">Voice</span>
                      </Badge>
                    )}
                    {speechSupported && voicesLoaded && (
                      <Badge className="bg-blue-500 text-white text-xs">
                        <Speaker className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                        <span className="hidden sm:inline">Ready</span>
                      </Badge>
                    )}
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

                  {/* Jessica Message Display */}
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

                  {/* Control Buttons */}
                  <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 gap-2">
                    {/* Audio Enable Button for Mobile */}
                    {isMobile && !audioInitialized && (
                      <Button
                        onClick={initializeAudioWithInteraction}
                        className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white flex items-center justify-center space-x-2 py-3 text-sm sm:text-base min-h-[44px]"
                      >
                        <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Enable Audio & Start Demo</span>
                      </Button>
                    )}

                    {/* Start/Stop Demo Buttons */}
                    {(!isMobile || audioInitialized) && (
                      <>
                        {!isVoiceActive ? (
                          <Button
                            onClick={startJessicaDemo}
                            className="bg-pink-600 hover:bg-pink-700 text-white flex items-center justify-center space-x-2 py-3 text-sm sm:text-base min-h-[44px]"
                          >
                            <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>Start Jessica Demo</span>
                          </Button>
                        ) : (
                          <Button
                            onClick={handleStopDemo}
                            variant="destructive"
                            className="flex items-center justify-center space-x-2 py-3 text-sm sm:text-base min-h-[44px]"
                          >
                            <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>Stop Demo</span>
                          </Button>
                        )}
                      </>
                    )}

                    {/* Continue Demo Button */}
                    {jessicaScript[demoStep]?.waitForInput && (
                      <Button
                        onClick={handleContinueDemo}
                        className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center space-x-2 py-3 text-sm sm:text-base min-h-[44px]"
                      >
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Continue Demo</span>
                      </Button>
                    )}

                    {/* Mute/Unmute Button */}
                    {speechSupported && audioInitialized && (
                      <Button
                        onClick={toggleMute}
                        className="flex items-center justify-center space-x-2 bg-black text-white hover:bg-gray-800 border border-gray-600 py-3 text-sm sm:text-base min-h-[44px]"
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
                        ) : (
                          <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
                        )}
                        <span>{isMuted ? "Unmute" : "Mute"}</span>
                      </Button>
                    )}

                    {/* Live Transfer Button */}
                    {demoStep >= 2 && (
                      <Button
                        onClick={() => setIsTransferDialogOpen(true)}
                        className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white flex items-center justify-center space-x-2 py-3 text-sm sm:text-base min-h-[44px]"
                      >
                        <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Live Transfer</span>
                      </Button>
                    )}
                  </div>

                  {/* Audio Status Display */}
                  {speechSupported && audioInitialized && (
                    <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl p-3 sm:p-4 border border-green-400/30">
                      <div className="flex items-start space-x-3">
                        <Speaker className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-semibold text-white">Perfect Voice Sync Active</h4>
                          <p className="text-xs text-gray-300 mt-1">
                            Jessica's speech is perfectly synchronized with text display.{" "}
                            {isMuted ? "Currently muted." : "Speaking with natural timing."}
                            {isMobile && " Mobile audio optimized."}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
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

            {/* Debug Info (only show if there are debug messages) */}
            {debugInfo.length > 0 && (
              <Card className="shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600">
                <CardHeader className="p-3 sm:p-4">
                  <CardTitle className="flex items-center space-x-2 text-white text-sm">
                    <AlertCircle className="w-4 h-4 text-yellow-400" />
                    <span>Audio Debug</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 pt-0">
                  <div className="space-y-1 max-h-32 overflow-y-auto">
                    {debugInfo.slice(-5).map((info, index) => (
                      <div key={index} className="text-xs text-gray-400 font-mono">
                        {info}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
