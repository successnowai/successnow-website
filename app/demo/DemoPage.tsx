"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Volume2, VolumeX, Play, PhoneCall, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"

export default function DemoPage() {
  const [isMuted, setIsMuted] = useState(false)
  const [isVoiceActive, setIsVoiceActive] = useState(false)
  const [isAgentActive, setIsAgentActive] = useState(true)
  const [currentMessage, setCurrentMessage] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [showTransferDialog, setShowTransferDialog] = useState(false)
  const [transferName, setTransferName] = useState("")
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioInitialized, setAudioInitialized] = useState(false)
  const [showAudioPrompt, setShowAudioPrompt] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [debugInfo, setDebugInfo] = useState<string[]>([])

  // Refs for audio management
  const messageQueue = useRef<{ text: string; onComplete?: () => void }[]>([])
  const processingRef = useRef(false)
  const synth = useRef<SpeechSynthesis | null>(null)
  const voices = useRef<SpeechSynthesisVoice[]>([])
  const currentUtterance = useRef<SpeechSynthesisUtterance | null>(null)
  const selectedVoice = useRef<SpeechSynthesisVoice | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const hasUserInteracted = useRef(false)
  const stepTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Add debug logging
  const addDebug = (message: string) => {
    const timestamp = new Date().toLocaleTimeString()
    const debugMessage = `[${timestamp}] ${message}`
    console.log(`[Jessica Audio]: ${debugMessage}`)
    setDebugInfo((prev) => [...prev.slice(-4), debugMessage])
  }

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const mobile =
        window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(mobile)
      addDebug(`Device: ${mobile ? "Mobile" : "Desktop"}`)

      // Show audio prompt on mobile
      if (mobile) {
        setShowAudioPrompt(true)
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Script content with precise timing
  const demoScript = [
    {
      text: "Hi there! I'm Jessica, your AI SuperAgent from SuccessNOW.",
      duration: 4000,
    },
    {
      text: "I work 24/7 to help businesses like yours convert leads, book appointments, and nurture relationships.",
      duration: 6000,
    },
    {
      text: "Unlike chatbots, I can have natural conversations with your leads, understand their needs, and take meaningful actions.",
      duration: 7000,
    },
    {
      text: "I can qualify leads, schedule appointments, answer FAQs, and even transfer hot leads directly to your sales team.",
      duration: 7000,
    },
    {
      text: "Would you like to experience a live transfer to a sales representative? Just let me know who you'd like to speak with, and I'll connect you right away.",
      duration: 8000,
    },
    {
      text: "With SuccessNOW AI, you'll never miss another lead opportunity, even when you're sleeping or busy with other tasks.",
      duration: 6000,
    },
    {
      text: "Our clients typically see a 30% increase in lead conversion and save 20+ hours per week on lead management.",
      duration: 6000,
    },
    {
      text: "I can be deployed on your website, Facebook, Instagram, or any other platform where you interact with potential customers.",
      duration: 7000,
    },
    {
      text: "Ready to transform your business with AI? Let's get started with SuccessNOW today!",
      duration: 5000,
    },
  ]

  // Comprehensive mobile audio unlock
  const unlockMobileAudio = useCallback(async (): Promise<boolean> => {
    addDebug("Starting mobile audio unlock...")

    try {
      // Method 1: Silent audio element for iOS
      const silentAudio = new Audio()
      silentAudio.src =
        "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT"
      silentAudio.volume = 0.01

      try {
        await silentAudio.play()
        silentAudio.pause()
        addDebug("Silent audio unlock successful")
      } catch (e) {
        addDebug("Silent audio failed, continuing...")
      }

      // Method 2: AudioContext
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      }

      if (audioContextRef.current.state === "suspended") {
        await audioContextRef.current.resume()
        addDebug("AudioContext resumed")
      }

      // Method 3: Speech synthesis test
      const testUtterance = new SpeechSynthesisUtterance(" ")
      testUtterance.volume = 0.01
      testUtterance.rate = 10
      window.speechSynthesis.speak(testUtterance)

      setTimeout(() => {
        window.speechSynthesis.cancel()
      }, 100)

      addDebug("Mobile audio unlock completed")
      return true
    } catch (error) {
      addDebug(`Audio unlock failed: ${error}`)
      return false
    }
  }, [])

  // Initialize speech synthesis
  useEffect(() => {
    if (typeof window !== "undefined") {
      synth.current = window.speechSynthesis
      addDebug("Speech synthesis initialized")

      const initVoices = () => {
        const availableVoices = synth.current?.getVoices() || []
        voices.current = availableVoices
        addDebug(`Loaded ${availableVoices.length} voices`)

        // Select best voice for mobile/desktop
        const bestVoice = isMobile
          ? availableVoices.find(
              (voice) =>
                voice.lang.startsWith("en") &&
                (voice.name.includes("Samantha") ||
                  voice.name.includes("Karen") ||
                  voice.name.toLowerCase().includes("female")),
            ) ||
            availableVoices.find((voice) => voice.lang.startsWith("en")) ||
            availableVoices[0]
          : availableVoices.find(
              (voice) =>
                voice.name.includes("female") ||
                voice.name.includes("Samantha") ||
                voice.name.includes("Google UK English Female") ||
                voice.name.includes("Microsoft Zira"),
            ) ||
            availableVoices.find((voice) => voice.lang.startsWith("en")) ||
            availableVoices[0]

        if (bestVoice) {
          selectedVoice.current = bestVoice
          addDebug(`Selected voice: ${bestVoice.name}`)
        }
      }

      if (synth.current?.onvoiceschanged !== undefined) {
        synth.current.onvoiceschanged = initVoices
      }
      initVoices()
    }
  }, [isMobile])

  // Enable audio with user interaction
  const enableAudioAndStart = useCallback(async () => {
    hasUserInteracted.current = true
    addDebug("User interaction - enabling audio")

    try {
      // Unlock mobile audio
      await unlockMobileAudio()

      // Test speech synthesis
      if (synth.current && selectedVoice.current) {
        const testUtterance = new SpeechSynthesisUtterance("Audio ready")
        testUtterance.voice = selectedVoice.current
        testUtterance.volume = 0.8
        testUtterance.rate = 1.0
        testUtterance.pitch = 1.1

        testUtterance.onstart = () => {
          addDebug("Audio test successful")
          setAudioInitialized(true)
          setShowAudioPrompt(false)
          // Cancel test immediately
          setTimeout(() => {
            window.speechSynthesis.cancel()
            startDemo()
          }, 500)
        }

        testUtterance.onerror = () => {
          addDebug("Audio test failed")
          setAudioInitialized(true)
          setShowAudioPrompt(false)
          startDemo()
        }

        window.speechSynthesis.speak(testUtterance)
      } else {
        setAudioInitialized(true)
        setShowAudioPrompt(false)
        startDemo()
      }
    } catch (error) {
      addDebug(`Audio enable failed: ${error}`)
      setAudioInitialized(true)
      setShowAudioPrompt(false)
      startDemo()
    }
  }, [unlockMobileAudio])

  // Add message to queue
  const addToQueue = useCallback((text: string, onComplete?: () => void) => {
    messageQueue.current.push({ text, onComplete })
    addDebug(`Added to queue: "${text.substring(0, 30)}..."`)
    if (!processingRef.current) {
      processQueue()
    }
  }, [])

  // Process message queue
  const processQueue = useCallback(() => {
    if (messageQueue.current.length === 0) {
      processingRef.current = false
      return
    }

    processingRef.current = true
    const { text, onComplete } = messageQueue.current.shift()!

    setCurrentMessage(text)
    setIsProcessing(true)

    if (!isMuted && isVoiceActive && audioInitialized && synth.current) {
      speakMessage(text, onComplete)
    } else {
      // Show message without speech
      setTimeout(
        () => {
          setIsProcessing(false)
          onComplete?.()
          processQueue()
        },
        isMobile ? 3000 : 2000,
      )
    }
  }, [isMuted, isVoiceActive, audioInitialized, isMobile])

  // Speak the message
  const speakMessage = useCallback(
    (text: string, onComplete?: () => void) => {
      if (!synth.current || !audioInitialized) {
        addDebug("Speech not available")
        onComplete?.()
        return
      }

      // Cancel any ongoing speech
      synth.current.cancel()

      // Delay for mobile to ensure proper cancellation
      const delay = isMobile ? 200 : 50

      setTimeout(() => {
        try {
          const utterance = new SpeechSynthesisUtterance(text)
          currentUtterance.current = utterance

          // Use selected voice
          if (selectedVoice.current) {
            utterance.voice = selectedVoice.current
          }

          // Optimize settings for mobile
          utterance.rate = isMobile ? 0.95 : 1.0
          utterance.pitch = 1.1
          utterance.volume = 1.0

          utterance.onstart = () => {
            addDebug("Speech started")
            setIsPlaying(true)
          }

          utterance.onend = () => {
            addDebug("Speech ended")
            setIsPlaying(false)
            setIsProcessing(false)
            setTimeout(
              () => {
                onComplete?.()
                processQueue()
              },
              isMobile ? 800 : 500,
            )
          }

          utterance.onerror = (event) => {
            addDebug(`Speech error: ${event.error}`)
            setIsPlaying(false)
            setIsProcessing(false)
            setTimeout(() => {
              onComplete?.()
              processQueue()
            }, 500)
          }

          synth.current.speak(utterance)
          addDebug("Speech started")
        } catch (error) {
          addDebug(`Speech failed: ${error}`)
          setIsPlaying(false)
          setIsProcessing(false)
          onComplete?.()
          processQueue()
        }
      }, delay)
    },
    [audioInitialized, isMobile, processQueue],
  )

  // Start the demo
  const startDemo = useCallback(() => {
    addDebug("Starting demo")
    setIsVoiceActive(true)
    setCurrentStep(0)

    // Clear any existing timeouts
    if (stepTimeoutRef.current) {
      clearTimeout(stepTimeoutRef.current)
    }

    // Start with first message after a brief delay
    stepTimeoutRef.current = setTimeout(() => {
      processScript()
    }, 1000)
  }, [])

  // Process the script
  const processScript = useCallback(() => {
    if (currentStep >= demoScript.length) {
      addDebug("Demo completed")
      return
    }

    const step = demoScript[currentStep]
    addDebug(`Processing step ${currentStep}: "${step.text.substring(0, 30)}..."`)

    addToQueue(step.text, () => {
      // Move to next step after current one completes
      setTimeout(() => {
        setCurrentStep((prev) => {
          const nextStep = prev + 1
          if (nextStep < demoScript.length) {
            // Schedule next step
            stepTimeoutRef.current = setTimeout(
              () => {
                processScript()
              },
              isMobile ? 1500 : 1000,
            )
          }
          return nextStep
        })
      }, 500)
    })
  }, [currentStep, addToQueue, isMobile])

  // Update script processing when currentStep changes
  useEffect(() => {
    if (isVoiceActive && currentStep < demoScript.length && currentStep > 0) {
      processScript()
    }
  }, [currentStep, isVoiceActive, processScript])

  // Handle live transfer
  const handleLiveTransfer = () => {
    setShowTransferDialog(true)
    if (synth.current && currentUtterance.current) {
      synth.current.cancel()
    }
  }

  const confirmTransfer = () => {
    const name = transferName.trim() || "the sales team"
    addToQueue(`Great! I'll transfer you to ${name} right away. Please hold while I connect you.`)
    setShowTransferDialog(false)

    setTimeout(() => {
      setIsAgentActive(false)
      addToQueue(`You've been successfully transferred to ${name}. They will assist you shortly.`)
    }, 5000)
  }

  // Restart demo
  const restartDemo = () => {
    addDebug("Restarting demo")

    // Clear everything
    if (synth.current) synth.current.cancel()
    if (stepTimeoutRef.current) clearTimeout(stepTimeoutRef.current)

    messageQueue.current = []
    processingRef.current = false
    setCurrentStep(0)
    setIsVoiceActive(false)
    setIsPlaying(false)
    setIsProcessing(false)
    setCurrentMessage("")
    setIsAgentActive(true)

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

  // Cleanup
  useEffect(() => {
    return () => {
      if (synth.current && currentUtterance.current) {
        synth.current.cancel()
      }
      if (stepTimeoutRef.current) {
        clearTimeout(stepTimeoutRef.current)
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

        {/* Mobile Audio Prompt */}
        {showAudioPrompt && (
          <div className="mb-8 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Headphones className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Enable Jessica's Voice</h3>
            <p className="text-blue-100 mb-4">
              Tap the button below to unlock audio and hear Jessica speak during the demo.
            </p>
            <Button
              onClick={enableAudioAndStart}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-bold text-lg min-h-[44px]"
            >
              <Play className="w-5 h-5 mr-2" />
              Enable Audio & Start Demo
            </Button>
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
                {audioInitialized && (
                  <div className="px-2 py-1 bg-green-500 rounded text-white text-xs">Audio Ready</div>
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
                {!audioInitialized && isMobile ? (
                  <Button
                    onClick={enableAudioAndStart}
                    className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-pink-700 hover:to-purple-700 transition-colors min-h-[44px] flex-1"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Enable Audio & Start
                  </Button>
                ) : !isVoiceActive ? (
                  <Button
                    onClick={startDemo}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors min-h-[44px]"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Start Demo
                  </Button>
                ) : (
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
                    <p className="text-base sm:text-lg break-words flex-1">{step.text}</p>
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

            {/* Debug Info */}
            {debugInfo.length > 0 && (
              <div className="mt-4 p-3 bg-black/30 rounded-lg">
                <h4 className="text-sm font-bold mb-2">Audio Debug:</h4>
                <div className="space-y-1">
                  {debugInfo.map((info, index) => (
                    <div key={index} className="text-xs text-gray-300 font-mono">
                      {info}
                    </div>
                  ))}
                </div>
              </div>
            )}
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
