"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Volume2, VolumeX, Play, PhoneCall, Headphones, CheckCircle, AlertTriangle } from "lucide-react"
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
  const [audioTestResult, setAudioTestResult] = useState<"pending" | "success" | "failed">("pending")
  const [voicesLoaded, setVoicesLoaded] = useState(false)

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
  const audioUnlocked = useRef(false)
  const retryCount = useRef(0)
  const maxRetries = 3

  // Add debug logging
  const addDebug = (message: string) => {
    const timestamp = new Date().toLocaleTimeString()
    const debugMessage = `[${timestamp}] ${message}`
    console.log(`[Jessica Audio]: ${debugMessage}`)
    setDebugInfo((prev) => [...prev.slice(-6), debugMessage])
  }

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const mobile =
        window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(mobile)
      addDebug(`Device: ${mobile ? "Mobile" : "Desktop"} - ${navigator.userAgent.substring(0, 50)}...`)

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

  // Initialize speech synthesis
  useEffect(() => {
    if (typeof window !== "undefined") {
      synth.current = window.speechSynthesis
      addDebug("Speech synthesis object created")

      const initVoices = () => {
        const availableVoices = synth.current?.getVoices() || []
        voices.current = availableVoices
        addDebug(`Voices loaded: ${availableVoices.length} total`)

        if (availableVoices.length > 0) {
          setVoicesLoaded(true)

          // Log available voices for debugging
          availableVoices.forEach((voice, index) => {
            if (index < 5) {
              // Log first 5 voices
              addDebug(`Voice ${index}: ${voice.name} (${voice.lang})`)
            }
          })

          // Select best voice with priority order
          let bestVoice = null

          if (isMobile) {
            // Mobile voice selection with specific priorities
            bestVoice =
              availableVoices.find((v) => v.name.includes("Samantha") && v.lang.startsWith("en")) ||
              availableVoices.find((v) => v.name.includes("Karen") && v.lang.startsWith("en")) ||
              availableVoices.find((v) => v.name.includes("Moira") && v.lang.startsWith("en")) ||
              availableVoices.find((v) => v.name.toLowerCase().includes("female") && v.lang === "en-US") ||
              availableVoices.find((v) => v.lang === "en-US" && !v.name.toLowerCase().includes("male")) ||
              availableVoices.find((v) => v.lang === "en-GB" && !v.name.toLowerCase().includes("male")) ||
              availableVoices.find((v) => v.lang.startsWith("en") && v.localService) ||
              availableVoices.find((v) => v.lang.startsWith("en")) ||
              availableVoices[0]
          } else {
            // Desktop voice selection
            bestVoice =
              availableVoices.find((v) => v.name.includes("Google UK English Female")) ||
              availableVoices.find((v) => v.name.includes("Microsoft Zira")) ||
              availableVoices.find((v) => v.name.includes("Samantha")) ||
              availableVoices.find((v) => v.name.toLowerCase().includes("female") && v.lang.startsWith("en")) ||
              availableVoices.find((v) => v.lang === "en-GB") ||
              availableVoices.find((v) => v.lang === "en-US") ||
              availableVoices.find((v) => v.lang.startsWith("en")) ||
              availableVoices[0]
          }

          if (bestVoice) {
            selectedVoice.current = bestVoice
            addDebug(`Selected voice: ${bestVoice.name} (${bestVoice.lang}) - Local: ${bestVoice.localService}`)
          } else {
            addDebug("No suitable voice found")
          }
        }
      }

      // Handle voices changed event
      if (synth.current?.onvoiceschanged !== undefined) {
        synth.current.onvoiceschanged = initVoices
      }

      // Initial voice loading
      initVoices()

      // Force voice loading after a delay (some browsers need this)
      setTimeout(initVoices, 1000)
    }
  }, [isMobile])

  // Comprehensive mobile audio unlock with multiple strategies
  const unlockMobileAudio = useCallback(async (): Promise<boolean> => {
    if (audioUnlocked.current) {
      addDebug("Audio already unlocked")
      return true
    }

    addDebug("Starting comprehensive mobile audio unlock...")

    try {
      // Strategy 1: Create and resume AudioContext
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
        addDebug(`AudioContext created - State: ${audioContextRef.current.state}`)
      }

      if (audioContextRef.current.state === "suspended") {
        await audioContextRef.current.resume()
        addDebug(`AudioContext resumed - New state: ${audioContextRef.current.state}`)
      }

      // Strategy 2: Play silent audio buffer
      try {
        const buffer = audioContextRef.current.createBuffer(1, 1, 22050)
        const source = audioContextRef.current.createBufferSource()
        source.buffer = buffer
        source.connect(audioContextRef.current.destination)
        source.start(0)
        addDebug("Silent audio buffer played")
      } catch (e) {
        addDebug(`Silent buffer failed: ${e}`)
      }

      // Strategy 3: HTML5 Audio element with data URL
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
          addDebug("HTML5 silent audio played successfully")
        }
      } catch (e) {
        addDebug(`HTML5 audio failed: ${e}`)
      }

      // Strategy 4: Speech synthesis unlock
      try {
        const unlockUtterance = new SpeechSynthesisUtterance(" ")
        unlockUtterance.volume = 0.01
        unlockUtterance.rate = 10
        unlockUtterance.pitch = 0.1

        window.speechSynthesis.speak(unlockUtterance)
        await new Promise((resolve) => setTimeout(resolve, 100))
        window.speechSynthesis.cancel()
        addDebug("Speech synthesis unlock completed")
      } catch (e) {
        addDebug(`Speech unlock failed: ${e}`)
      }

      audioUnlocked.current = true
      addDebug("Mobile audio unlock completed successfully")
      return true
    } catch (error) {
      addDebug(`Audio unlock failed: ${error}`)
      return false
    }
  }, [])

  // Test speech synthesis with actual audio
  const testSpeechSynthesis = useCallback(async (): Promise<boolean> => {
    addDebug("Testing speech synthesis...")

    if (!synth.current || !selectedVoice.current) {
      addDebug("Speech synthesis or voice not available")
      return false
    }

    return new Promise((resolve) => {
      try {
        const testUtterance = new SpeechSynthesisUtterance("Audio test")
        testUtterance.voice = selectedVoice.current
        testUtterance.volume = 0.7
        testUtterance.rate = 1.0
        testUtterance.pitch = 1.1

        let resolved = false

        testUtterance.onstart = () => {
          if (!resolved) {
            addDebug("Speech test started successfully")
            resolved = true
            // Stop the test immediately after it starts
            setTimeout(() => {
              window.speechSynthesis.cancel()
            }, 200)
            resolve(true)
          }
        }

        testUtterance.onend = () => {
          if (!resolved) {
            addDebug("Speech test completed")
            resolved = true
            resolve(true)
          }
        }

        testUtterance.onerror = (event) => {
          if (!resolved) {
            addDebug(`Speech test failed: ${event.error}`)
            resolved = true
            resolve(false)
          }
        }

        // Safety timeout
        setTimeout(() => {
          if (!resolved) {
            addDebug("Speech test timeout")
            window.speechSynthesis.cancel()
            resolved = true
            resolve(false)
          }
        }, 3000)

        window.speechSynthesis.speak(testUtterance)
        addDebug("Speech test utterance started")
      } catch (error) {
        addDebug(`Speech test error: ${error}`)
        resolve(false)
      }
    })
  }, [])

  // Enable audio with comprehensive initialization
  const enableAudioAndStart = useCallback(async () => {
    hasUserInteracted.current = true
    addDebug("User interaction detected - starting audio initialization")
    setAudioTestResult("pending")

    try {
      // Step 1: Unlock mobile audio
      addDebug("Step 1: Unlocking mobile audio...")
      const unlocked = await unlockMobileAudio()
      if (!unlocked) {
        addDebug("Failed to unlock mobile audio")
        setAudioTestResult("failed")
        return
      }

      // Step 2: Wait for voices to load
      addDebug("Step 2: Ensuring voices are loaded...")
      if (!voicesLoaded || voices.current.length === 0) {
        addDebug("Waiting for voices to load...")
        // Force voice reload
        const availableVoices = window.speechSynthesis.getVoices()
        if (availableVoices.length > 0) {
          voices.current = availableVoices
          setVoicesLoaded(true)
          addDebug(`Voices reloaded: ${availableVoices.length} available`)
        } else {
          addDebug("No voices available after reload")
          setAudioTestResult("failed")
          return
        }
      }

      // Step 3: Test speech synthesis
      addDebug("Step 3: Testing speech synthesis...")
      const testPassed = await testSpeechSynthesis()
      if (!testPassed) {
        addDebug("Speech synthesis test failed")
        setAudioTestResult("failed")
        // Continue anyway - some devices may still work
      } else {
        addDebug("Speech synthesis test passed")
        setAudioTestResult("success")
      }

      // Step 4: Initialize demo
      addDebug("Step 4: Initializing demo...")
      setAudioInitialized(true)
      setShowAudioPrompt(false)

      // Start demo after brief delay
      setTimeout(() => {
        startDemo()
      }, 500)
    } catch (error) {
      addDebug(`Audio initialization failed: ${error}`)
      setAudioTestResult("failed")
      // Still allow demo to start without audio
      setAudioInitialized(true)
      setShowAudioPrompt(false)
      startDemo()
    }
  }, [unlockMobileAudio, testSpeechSynthesis, voicesLoaded])

  // Add message to queue
  const addToQueue = useCallback((text: string, onComplete?: () => void) => {
    messageQueue.current.push({ text, onComplete })
    addDebug(`Added to queue: "${text.substring(0, 30)}..." (Queue length: ${messageQueue.current.length})`)
    if (!processingRef.current) {
      processQueue()
    }
  }, [])

  // Process message queue with robust error handling
  const processQueue = useCallback(() => {
    if (messageQueue.current.length === 0) {
      processingRef.current = false
      addDebug("Queue processing completed")
      return
    }

    processingRef.current = true
    const { text, onComplete } = messageQueue.current.shift()!

    addDebug(`Processing message: "${text.substring(0, 30)}..."`)
    setCurrentMessage(text)
    setIsProcessing(true)

    if (!isMuted && isVoiceActive && audioInitialized && synth.current && selectedVoice.current) {
      speakMessage(text, onComplete)
    } else {
      addDebug(`Skipping speech - Muted: ${isMuted}, Active: ${isVoiceActive}, Initialized: ${audioInitialized}`)
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

  // Speak message with enhanced mobile support
  const speakMessage = useCallback(
    (text: string, onComplete?: () => void) => {
      if (!synth.current || !audioInitialized || !selectedVoice.current) {
        addDebug("Speech not available - missing requirements")
        onComplete?.()
        return
      }

      addDebug(`Speaking: "${text.substring(0, 30)}..."`)

      // Cancel any ongoing speech with multiple attempts for mobile
      try {
        window.speechSynthesis.cancel()
        if (isMobile) {
          setTimeout(() => window.speechSynthesis.cancel(), 10)
          setTimeout(() => window.speechSynthesis.cancel(), 50)
          setTimeout(() => window.speechSynthesis.cancel(), 100)
        }
      } catch (e) {
        addDebug(`Error canceling speech: ${e}`)
      }

      // Longer delay for mobile to ensure proper cancellation
      const delay = isMobile ? 300 : 100

      setTimeout(() => {
        try {
          const utterance = new SpeechSynthesisUtterance(text)
          currentUtterance.current = utterance

          // Use selected voice
          utterance.voice = selectedVoice.current
          addDebug(`Using voice: ${selectedVoice.current?.name}`)

          // Optimize settings for mobile
          utterance.rate = isMobile ? 0.9 : 1.0
          utterance.pitch = 1.1
          utterance.volume = 1.0

          let hasStarted = false
          let hasEnded = false

          utterance.onstart = () => {
            if (!hasStarted) {
              hasStarted = true
              addDebug("Speech started successfully")
              setIsPlaying(true)
            }
          }

          utterance.onend = () => {
            if (!hasEnded) {
              hasEnded = true
              addDebug("Speech ended normally")
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
          }

          utterance.onerror = (event) => {
            if (!hasEnded) {
              hasEnded = true
              addDebug(`Speech error: ${event.error}`)
              setIsPlaying(false)
              setIsProcessing(false)

              // Retry logic for mobile
              if (retryCount.current < maxRetries && isMobile) {
                retryCount.current++
                addDebug(`Retrying speech (attempt ${retryCount.current}/${maxRetries})`)
                setTimeout(() => {
                  speakMessage(text, onComplete)
                }, 1000)
              } else {
                setTimeout(() => {
                  onComplete?.()
                  processQueue()
                }, 500)
              }
            }
          }

          // Safety timeout based on text length
          const timeoutDuration = Math.max(text.length * 100, 5000) + (isMobile ? 5000 : 2000)
          setTimeout(() => {
            if (!hasEnded) {
              addDebug("Speech timeout - forcing end")
              window.speechSynthesis.cancel()
              setIsPlaying(false)
              setIsProcessing(false)
              onComplete?.()
              processQueue()
            }
          }, timeoutDuration)

          window.speechSynthesis.speak(utterance)
          addDebug("Speech utterance queued")
        } catch (error) {
          addDebug(`Speech creation failed: ${error}`)
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
    retryCount.current = 0

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
    retryCount.current = 0
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
    addDebug(`Audio ${!isMuted ? "muted" : "unmuted"}`)
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
              disabled={audioTestResult === "pending"}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-bold text-lg min-h-[44px] disabled:opacity-50"
            >
              <Play className="w-5 h-5 mr-2" />
              {audioTestResult === "pending" ? "Initializing..." : "Enable Audio & Start Demo"}
            </Button>

            {/* Audio Test Status */}
            {audioTestResult === "success" && (
              <div className="mt-4 flex items-center justify-center space-x-2 text-green-300">
                <CheckCircle className="w-5 h-5" />
                <span>Audio test successful! Jessica is ready to speak.</span>
              </div>
            )}
            {audioTestResult === "failed" && (
              <div className="mt-4 flex items-center justify-center space-x-2 text-yellow-300">
                <AlertTriangle className="w-5 h-5" />
                <span>Audio test failed, but demo will continue with text.</span>
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
                {audioInitialized && (
                  <div
                    className={`px-2 py-1 rounded text-white text-xs ${
                      audioTestResult === "success"
                        ? "bg-green-500"
                        : audioTestResult === "failed"
                          ? "bg-yellow-500"
                          : "bg-blue-500"
                    }`}
                  >
                    {audioTestResult === "success"
                      ? "Audio Ready"
                      : audioTestResult === "failed"
                        ? "Text Only"
                        : "Audio Init"}
                  </div>
                )}
                {voicesLoaded && (
                  <div className="px-2 py-1 bg-blue-500 rounded text-white text-xs">{voices.current.length} Voices</div>
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
                    disabled={audioTestResult === "pending"}
                    className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-pink-700 hover:to-purple-700 transition-colors min-h-[44px] flex-1 disabled:opacity-50"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {audioTestResult === "pending" ? "Initializing..." : "Enable Audio & Start"}
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
                <h4 className="text-sm font-bold mb-2 flex items-center">
                  <span className="mr-2">🔧</span>
                  Audio Debug:
                </h4>
                <div className="space-y-1 max-h-32 overflow-y-auto">
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
