"use client"

import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX, Play, PhoneCall, Headphones, CheckCircle, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"

export default function DemoPage() {
  // Core state
  const [isMuted, setIsMuted] = useState(false)
  const [isVoiceActive, setIsVoiceActive] = useState(false)
  const [isAgentActive, setIsAgentActive] = useState(true)
  const [currentMessage, setCurrentMessage] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [showTransferDialog, setShowTransferDialog] = useState(false)
  const [transferName, setTransferName] = useState("")
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  // Audio state
  const [isMobile, setIsMobile] = useState(false)
  const [audioReady, setAudioReady] = useState(false)
  const [audioStatus, setAudioStatus] = useState<"waiting" | "initializing" | "ready" | "failed">("waiting")
  const [showPlayButton, setShowPlayButton] = useState(false)

  // Refs
  const messageQueue = useRef<string[]>([])
  const processingRef = useRef(false)
  const synth = useRef<SpeechSynthesis | null>(null)
  const selectedVoice = useRef<SpeechSynthesisVoice | null>(null)
  const initTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const audioInitialized = useRef(false)
  const hasInteracted = useRef(false)

  // Script content
  const demoScript = [
    "Hi there! I'm Jessica, your AI SuperAgent from SuccessNOW.",
    "I work 24/7 to help businesses like yours convert leads, book appointments, and nurture relationships.",
    "Unlike chatbots, I can have natural conversations with your leads, understand their needs, and take meaningful actions.",
    "I can qualify leads, schedule appointments, answer FAQs, and even transfer hot leads directly to your sales team.",
    "Would you like to experience a live transfer to a sales representative? Just let me know who you'd like to speak with, and I'll connect you right away.",
    "With SuccessNOW AI, you'll never miss another lead opportunity, even when you're sleeping or busy with other tasks.",
    "Our clients typically see a 30% increase in lead conversion and save 20+ hours per week on lead management.",
    "I can be deployed on your website, Facebook, Instagram, or any other platform where you interact with potential customers.",
    "Ready to transform your business with AI? Let's get started with SuccessNOW today!",
  ]

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const mobile =
        window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(mobile)

      // Show play button immediately on mobile
      if (mobile) {
        setShowPlayButton(true)
      } else {
        // On desktop, start automatically
        initializeAudio()
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Initialize speech synthesis
  useEffect(() => {
    if (typeof window !== "undefined") {
      synth.current = window.speechSynthesis

      // Function to load voices
      const loadVoices = () => {
        const availableVoices = synth.current?.getVoices() || []

        // Select best voice
        const bestVoice =
          availableVoices.find((v) => v.name.includes("Samantha")) ||
          availableVoices.find((v) => v.name.includes("Google UK English Female")) ||
          availableVoices.find((v) => v.name.includes("Microsoft Zira")) ||
          availableVoices.find((v) => v.lang === "en-US") ||
          availableVoices.find((v) => v.lang === "en-GB") ||
          availableVoices.find((v) => v.lang.startsWith("en")) ||
          availableVoices[0]

        if (bestVoice) {
          selectedVoice.current = bestVoice
          console.log("Selected voice:", bestVoice.name)
        }
      }

      // Load voices initially and when they change
      loadVoices()
      if (synth.current?.onvoiceschanged !== undefined) {
        synth.current.onvoiceschanged = loadVoices
      }
    }
  }, [])

  // Simple audio initialization
  const initializeAudio = () => {
    if (audioInitialized.current) return

    setAudioStatus("initializing")
    hasInteracted.current = true

    // Set a timeout to prevent getting stuck
    if (initTimeoutRef.current) clearTimeout(initTimeoutRef.current)
    initTimeoutRef.current = setTimeout(() => {
      // If still initializing after 5 seconds, mark as failed
      if (audioStatus === "initializing") {
        setAudioStatus("failed")
        setAudioReady(true) // Still allow demo to run without audio
      }
    }, 5000)

    try {
      // Try to unlock audio on iOS
      const unlockAudio = () => {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()

        // Create and play a silent oscillator
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()
        gainNode.gain.value = 0.01
        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)
        oscillator.start(0)
        oscillator.stop(0.001)

        // Also try with HTML5 Audio
        const audio = new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAA=")
        audio.volume = 0.01
        audio.play().catch((e) => console.log("Silent audio play failed:", e))
      }

      unlockAudio()

      // Test speech synthesis
      const testSpeech = () => {
        if (!synth.current) return false

        // Cancel any ongoing speech
        synth.current.cancel()

        // Create a test utterance
        const utterance = new SpeechSynthesisUtterance("Test")
        utterance.volume = 0.01
        utterance.onstart = () => {
          // Speech started successfully
          synth.current?.cancel() // Cancel immediately
          audioInitialized.current = true
          setAudioStatus("ready")
          setAudioReady(true)
          if (initTimeoutRef.current) clearTimeout(initTimeoutRef.current)
        }
        utterance.onerror = () => {
          // Speech failed
          setAudioStatus("failed")
          setAudioReady(true) // Still allow demo to run without audio
          if (initTimeoutRef.current) clearTimeout(initTimeoutRef.current)
        }

        // Use selected voice if available
        if (selectedVoice.current) {
          utterance.voice = selectedVoice.current
        }

        // Speak the test utterance
        synth.current.speak(utterance)

        // Also set a timeout to ensure we don't get stuck
        setTimeout(() => {
          if (audioStatus === "initializing") {
            audioInitialized.current = true
            setAudioStatus("ready")
            setAudioReady(true)
          }
        }, 2000)
      }

      // Run test after a short delay
      setTimeout(testSpeech, 500)
    } catch (error) {
      console.error("Audio initialization error:", error)
      setAudioStatus("failed")
      setAudioReady(true) // Still allow demo to run without audio
    }
  }

  // Start the demo
  const startDemo = () => {
    setIsVoiceActive(true)
    setCurrentStep(0)

    // Clear any existing queue
    messageQueue.current = []
    processingRef.current = false

    // Start with first message
    setTimeout(() => {
      demoScript.forEach((message) => {
        addToQueue(message)
      })
    }, 1000)
  }

  // Add message to queue
  const addToQueue = (message) => {
    messageQueue.current.push(message)
    if (!processingRef.current) {
      processQueue()
    }
  }

  // Process message queue
  const processQueue = () => {
    if (messageQueue.current.length === 0) {
      processingRef.current = false
      return
    }

    processingRef.current = true
    const nextMessage = messageQueue.current.shift()

    setCurrentMessage(nextMessage)
    setIsProcessing(true)

    if (!isMuted && isVoiceActive && audioInitialized.current && audioStatus === "ready") {
      speakMessage(nextMessage)
    } else {
      // If muted or audio not ready, still show the message but don't speak
      // Add a delay to simulate speaking time
      setTimeout(() => {
        setIsProcessing(false)
        processQueue()
      }, 3000)
    }
  }

  // Speak the message
  const speakMessage = (text) => {
    if (!synth.current || !audioInitialized.current) return

    // Cancel any ongoing speech
    synth.current.cancel()

    const utterance = new SpeechSynthesisUtterance(text)

    // Use selected voice if available
    if (selectedVoice.current) {
      utterance.voice = selectedVoice.current
    }

    // Set properties for a friendly, natural voice
    utterance.rate = isMobile ? 0.9 : 1.0 // Slightly slower on mobile
    utterance.pitch = 1.1 // Slightly higher pitch for female voice
    utterance.volume = 1.0

    // Handle speech events
    utterance.onstart = () => {
      setIsPlaying(true)
    }

    utterance.onend = () => {
      setIsPlaying(false)
      setIsProcessing(false)
      // Small delay between messages for natural conversation flow
      setTimeout(() => {
        processQueue()
      }, 800)
    }

    utterance.onerror = () => {
      setIsPlaying(false)
      setIsProcessing(false)
      setTimeout(() => {
        processQueue()
      }, 800)
    }

    // Start speaking
    try {
      synth.current.speak(utterance)
    } catch (error) {
      console.error("Failed to speak:", error)
      setIsProcessing(false)
      setTimeout(() => {
        processQueue()
      }, 800)
    }
  }

  // Handle play button click
  const handlePlayClick = () => {
    initializeAudio()

    // Start demo after a short delay
    setTimeout(() => {
      setShowPlayButton(false)
      startDemo()
    }, 1000)
  }

  // Handle live transfer
  const handleLiveTransfer = () => {
    setShowTransferDialog(true)
    if (synth.current) {
      synth.current.cancel()
    }
  }

  const confirmTransfer = () => {
    const name = transferName.trim() || "the sales team"
    addToQueue(`Great! I'll transfer you to ${name} right away. Please hold while I connect you.`)
    setShowTransferDialog(false)

    // Simulate transfer completion after message is spoken
    setTimeout(() => {
      setIsAgentActive(false)
      addToQueue(`You've been successfully transferred to ${name}. They will assist you shortly.`)
    }, 5000)
  }

  // Restart demo
  const restartDemo = () => {
    if (synth.current) synth.current.cancel()
    messageQueue.current = []
    processingRef.current = false
    setCurrentMessage("")
    setIsProcessing(false)
    setIsVoiceActive(false)
    setIsAgentActive(true)
    setCurrentStep(0)

    // Restart after brief delay
    setTimeout(() => {
      startDemo()
    }, 500)
  }

  // Toggle mute
  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (!isMuted && synth.current) {
      synth.current.cancel()
      setIsPlaying(false)
    }
  }

  // Update current step based on message
  useEffect(() => {
    if (currentMessage) {
      const index = demoScript.findIndex((message) => message === currentMessage)
      if (index !== -1) {
        setCurrentStep(index)
      }
    }
  }, [currentMessage])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (synth.current) {
        synth.current.cancel()
      }
      if (initTimeoutRef.current) {
        clearTimeout(initTimeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 py-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Meet Jessica - Your AI SuperAgent
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
            Experience a live demo with Jessica, your 24/7 AI agent who never sleeps and never misses a lead
          </p>
        </div>

        {/* Mobile Play Button */}
        {showPlayButton && (
          <div className="mb-8 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Headphones className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Start Jessica's Demo</h3>
            <p className="text-blue-100 mb-4">Tap the button below to start the demo and hear Jessica speak.</p>
            <Button
              onClick={handlePlayClick}
              disabled={audioStatus === "initializing"}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-bold text-lg min-h-[44px]"
            >
              {audioStatus === "initializing" ? (
                <>
                  <div className="flex space-x-1 mr-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce animation-delay-100"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce animation-delay-200"></div>
                  </div>
                  Initializing...
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 mr-2" />
                  Start Demo
                </>
              )}
            </Button>

            {/* Audio Status */}
            {audioStatus === "ready" && (
              <div className="mt-4 flex items-center justify-center space-x-2 text-green-300">
                <CheckCircle className="w-5 h-5" />
                <span>Audio ready! Jessica will speak during the demo.</span>
              </div>
            )}
            {audioStatus === "failed" && (
              <div className="mt-4 flex items-center justify-center space-x-2 text-yellow-300">
                <AlertTriangle className="w-5 h-5" />
                <span>Audio not available. Demo will continue with text only.</span>
              </div>
            )}
          </div>
        )}

        {/* Demo Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Agent Chat Box */}
          <div className="bg-gradient-to-br from-purple-600 to-indigo-800 rounded-xl shadow-2xl overflow-hidden">
            {/* Agent Header */}
            <div className="bg-gradient-to-r from-purple-700 to-indigo-900 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Jessica - SuccessNOW AI SuperAgent</h3>
              </div>
              <div className="flex space-x-2">
                {audioStatus === "ready" && (
                  <div className="px-2 py-1 bg-green-500 rounded text-white text-xs">Audio On</div>
                )}
                {audioStatus === "failed" && (
                  <div className="px-2 py-1 bg-yellow-500 rounded text-white text-xs">Text Only</div>
                )}
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px]"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="h-5 w-5 text-white" /> : <Volume2 className="h-5 w-5 text-white" />}
                </button>
              </div>
            </div>

            {/* Agent Chat Content */}
            <div className="p-6 h-[400px] sm:h-[500px] flex flex-col">
              <div className="flex-1 flex items-center justify-center mb-4">
                {isAgentActive ? (
                  <div className="text-center">
                    <div className="w-24 h-24 bg-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center relative">
                      <span className="text-4xl">🤖</span>
                      {isPlaying && (
                        <div className="absolute inset-0 rounded-full bg-pink-400 animate-ping opacity-30"></div>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {isPlaying ? "Jessica is Speaking" : "Jessica is Ready"}
                    </h3>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500 text-white text-sm">
                      <span className={`w-2 h-2 bg-white rounded-full mr-2 ${isPlaying ? "animate-pulse" : ""}`}></span>
                      {isPlaying ? "Speaking" : "AI SuperAgent Active"}
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="w-24 h-24 bg-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl">👨‍💼</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Transferred to Sales</h3>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500 text-white text-sm">
                      <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                      Live Agent Connected
                    </div>
                  </div>
                )}
              </div>

              {/* Message Display */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white text-lg break-words min-h-[100px] flex items-center">
                <div className="w-full">
                  {currentMessage || "Jessica will begin speaking momentarily..."}
                  {isProcessing && <span className="inline-block ml-1 animate-pulse">▌</span>}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex flex-wrap gap-2">
                {!isVoiceActive && !showPlayButton ? (
                  <Button
                    onClick={startDemo}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors min-h-[44px]"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Start Demo
                  </Button>
                ) : (
                  isVoiceActive && (
                    <>
                      <Button
                        onClick={handleLiveTransfer}
                        className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors min-h-[44px]"
                      >
                        <PhoneCall className="w-4 h-4 mr-2" />
                        Live Transfer
                      </Button>
                      <Button
                        onClick={restartDemo}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors min-h-[44px]"
                      >
                        Restart Demo
                      </Button>
                    </>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Demo Script */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-xl p-6 text-white">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">📝</span> Jessica's Demo Script
            </h3>
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
              {demoScript.map((step, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg transition-all duration-300 ${
                    index === currentStep && isVoiceActive
                      ? "bg-white/20 border-l-4 border-blue-400"
                      : index < currentStep
                        ? "bg-green-900/30 border-l-4 border-green-400"
                        : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        index < currentStep ? "bg-green-500" : index === currentStep ? "bg-blue-500" : "bg-gray-500"
                      }`}
                    >
                      {index < currentStep ? "✓" : index + 1}
                    </div>
                    <p className="text-base sm:text-lg break-words flex-1">{step}</p>
                    {index === currentStep && isPlaying && (
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce animation-delay-100"></div>
                        <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce animation-delay-200"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Transfer Dialog */}
      {showTransferDialog && (
        <Dialog open={showTransferDialog} onOpenChange={setShowTransferDialog}>
          <DialogContent className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold mb-4">Live Transfer</DialogTitle>
            </DialogHeader>
            <p className="mb-4">Who would you like Jessica to transfer you to?</p>
            <Input
              type="text"
              value={transferName}
              onChange={(e) => setTransferName(e.target.value)}
              placeholder="Enter name or department"
              className="w-full p-3 border rounded-lg mb-4 text-black"
            />
            <DialogFooter className="flex space-x-3">
              <Button
                onClick={confirmTransfer}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors min-h-[44px]"
              >
                Transfer Now
              </Button>
              <Button
                onClick={() => setShowTransferDialog(false)}
                className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition-colors min-h-[44px]"
              >
                Cancel
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
