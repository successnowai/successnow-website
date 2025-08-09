"use client"

import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX, Play, PhoneCall, Headphones, CheckCircle, AlertTriangle, Speaker } from "lucide-react"
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
  const [audioStatus, setAudioStatus] = useState<"waiting" | "initializing" | "testing" | "ready" | "failed">("waiting")
  const [showPlayButton, setShowPlayButton] = useState(false)
  const [debugLog, setDebugLog] = useState<string[]>([])

  // Refs
  const messageQueue = useRef<string[]>([])
  const processingRef = useRef(false)
  const synth = useRef<SpeechSynthesis | null>(null)
  const selectedVoice = useRef<SpeechSynthesisVoice | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const audioUnlocked = useRef(false)
  const speechTestPassed = useRef(false)

  // Add debug logging
  const addDebug = (message: string) => {
    const timestamp = new Date().toLocaleTimeString()
    const logMessage = `[${timestamp}] ${message}`
    console.log(`[Jessica Audio]: ${logMessage}`)
    setDebugLog((prev) => [...prev.slice(-4), logMessage])
  }

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
      addDebug(`Device detected: ${mobile ? "Mobile" : "Desktop"} - ${navigator.userAgent.substring(0, 50)}...`)

      if (mobile) {
        setShowPlayButton(true)
      } else {
        // On desktop, try to initialize automatically
        setTimeout(() => initializeAudio(), 1000)
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
      addDebug("Speech synthesis object created")

      const loadVoices = () => {
        const availableVoices = synth.current?.getVoices() || []
        addDebug(`Voices available: ${availableVoices.length}`)

        if (availableVoices.length > 0) {
          // Log first few voices for debugging
          availableVoices.slice(0, 3).forEach((voice, index) => {
            addDebug(`Voice ${index}: ${voice.name} (${voice.lang})`)
          })

          // Select best voice with priority for mobile
          const bestVoice = isMobile
            ? availableVoices.find((v) => v.name.includes("Samantha")) ||
              availableVoices.find((v) => v.name.includes("Karen")) ||
              availableVoices.find((v) => v.lang === "en-US" && v.localService) ||
              availableVoices.find((v) => v.lang === "en-US") ||
              availableVoices.find((v) => v.lang.startsWith("en")) ||
              availableVoices[0]
            : availableVoices.find((v) => v.name.includes("Google UK English Female")) ||
              availableVoices.find((v) => v.name.includes("Microsoft Zira")) ||
              availableVoices.find((v) => v.lang === "en-GB") ||
              availableVoices.find((v) => v.lang === "en-US") ||
              availableVoices[0]

          if (bestVoice) {
            selectedVoice.current = bestVoice
            addDebug(`Selected voice: ${bestVoice.name} (${bestVoice.lang}) - Local: ${bestVoice.localService}`)
          }
        }
      }

      loadVoices()
      if (synth.current?.onvoiceschanged !== undefined) {
        synth.current.onvoiceschanged = loadVoices
      }

      // Force voice loading after delay
      setTimeout(loadVoices, 1000)
    }
  }, [isMobile])

  // Comprehensive mobile audio unlock
  const unlockMobileAudio = async (): Promise<boolean> => {
    if (audioUnlocked.current) {
      addDebug("Audio already unlocked")
      return true
    }

    addDebug("Starting aggressive mobile audio unlock...")

    try {
      // Strategy 1: Create AudioContext and play silent tone
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
        addDebug(`AudioContext created - State: ${audioContextRef.current.state}`)
      }

      if (audioContextRef.current.state === "suspended") {
        await audioContextRef.current.resume()
        addDebug(`AudioContext resumed - New state: ${audioContextRef.current.state}`)
      }

      // Play a very short beep to unlock audio
      const oscillator = audioContextRef.current.createOscillator()
      const gainNode = audioContextRef.current.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContextRef.current.destination)

      gainNode.gain.setValueAtTime(0.1, audioContextRef.current.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + 0.1)

      oscillator.frequency.value = 440
      oscillator.type = "sine"
      oscillator.start(audioContextRef.current.currentTime)
      oscillator.stop(audioContextRef.current.currentTime + 0.1)

      addDebug("Played unlock beep")

      // Strategy 2: HTML5 Audio with actual sound
      const audio = new Audio()
      audio.src =
        "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT"
      audio.volume = 0.3 // Slightly audible to ensure unlock
      audio.muted = false

      try {
        await audio.play()
        addDebug("HTML5 audio played successfully")
        audio.pause()
        audio.currentTime = 0
      } catch (e) {
        addDebug(`HTML5 audio failed: ${e}`)
      }

      // Strategy 3: Force speech synthesis unlock
      if (synth.current) {
        const unlockUtterance = new SpeechSynthesisUtterance("Audio test")
        unlockUtterance.volume = 0.5
        unlockUtterance.rate = 2.0
        unlockUtterance.pitch = 1.0

        if (selectedVoice.current) {
          unlockUtterance.voice = selectedVoice.current
        }

        // Speak and immediately cancel to unlock
        synth.current.speak(unlockUtterance)
        await new Promise((resolve) => setTimeout(resolve, 200))
        synth.current.cancel()
        addDebug("Speech synthesis unlock completed")
      }

      audioUnlocked.current = true
      addDebug("Mobile audio unlock completed successfully")
      return true
    } catch (error) {
      addDebug(`Audio unlock failed: ${error}`)
      return false
    }
  }

  // Test actual speech output
  const testSpeechOutput = async (): Promise<boolean> => {
    addDebug("Testing actual speech output...")

    if (!synth.current || !selectedVoice.current) {
      addDebug("Speech synthesis or voice not available")
      return false
    }

    return new Promise((resolve) => {
      try {
        // Cancel any ongoing speech
        synth.current!.cancel()

        const testUtterance = new SpeechSynthesisUtterance("Hello")
        testUtterance.voice = selectedVoice.current
        testUtterance.volume = 0.8
        testUtterance.rate = 1.5
        testUtterance.pitch = 1.0

        let resolved = false
        let startTimeout: NodeJS.Timeout
        let endTimeout: NodeJS.Timeout

        const resolveTest = (success: boolean, reason: string) => {
          if (!resolved) {
            resolved = true
            clearTimeout(startTimeout)
            clearTimeout(endTimeout)
            addDebug(`Speech test ${success ? "passed" : "failed"}: ${reason}`)
            resolve(success)
          }
        }

        testUtterance.onstart = () => {
          resolveTest(true, "Speech started successfully")
          // Cancel after confirming it started
          setTimeout(() => {
            if (synth.current) synth.current.cancel()
          }, 300)
        }

        testUtterance.onend = () => {
          if (!resolved) {
            resolveTest(true, "Speech completed")
          }
        }

        testUtterance.onerror = (event) => {
          resolveTest(false, `Speech error: ${event.error}`)
        }

        // Safety timeouts
        startTimeout = setTimeout(() => {
          resolveTest(false, "Speech failed to start within 3 seconds")
        }, 3000)

        endTimeout = setTimeout(() => {
          if (synth.current) synth.current.cancel()
          if (!resolved) {
            resolveTest(false, "Speech test timeout")
          }
        }, 5000)

        synth.current.speak(testUtterance)
        addDebug("Speech test utterance queued")
      } catch (error) {
        addDebug(`Speech test error: ${error}`)
        resolve(false)
      }
    })
  }

  // Initialize audio with comprehensive testing
  const initializeAudio = async () => {
    setAudioStatus("initializing")
    addDebug("Starting comprehensive audio initialization...")

    try {
      // Step 1: Unlock mobile audio
      addDebug("Step 1: Unlocking mobile audio...")
      const unlocked = await unlockMobileAudio()
      if (!unlocked) {
        throw new Error("Failed to unlock mobile audio")
      }

      // Step 2: Wait for voices to be available
      addDebug("Step 2: Ensuring voices are loaded...")
      let voiceAttempts = 0
      while ((!synth.current?.getVoices().length || !selectedVoice.current) && voiceAttempts < 10) {
        await new Promise((resolve) => setTimeout(resolve, 200))
        const voices = synth.current?.getVoices() || []
        if (voices.length > 0 && !selectedVoice.current) {
          const bestVoice = voices.find((v) => v.lang.startsWith("en")) || voices[0]
          if (bestVoice) {
            selectedVoice.current = bestVoice
            addDebug(`Voice selected on attempt ${voiceAttempts + 1}: ${bestVoice.name}`)
          }
        }
        voiceAttempts++
      }

      if (!selectedVoice.current) {
        throw new Error("No voice available after waiting")
      }

      // Step 3: Test actual speech output
      setAudioStatus("testing")
      addDebug("Step 3: Testing actual speech output...")
      const speechWorks = await testSpeechOutput()

      if (speechWorks) {
        speechTestPassed.current = true
        setAudioStatus("ready")
        setAudioReady(true)
        addDebug("Audio initialization completed successfully!")
      } else {
        throw new Error("Speech test failed")
      }
    } catch (error) {
      addDebug(`Audio initialization failed: ${error}`)
      setAudioStatus("failed")
      setAudioReady(true) // Still allow demo to run
    }
  }

  // Handle play button click with immediate audio unlock
  const handlePlayClick = async () => {
    addDebug("Play button clicked - starting immediate audio initialization")

    // Start initialization immediately
    await initializeAudio()

    // Start demo after brief delay
    setTimeout(() => {
      setShowPlayButton(false)
      startDemo()
    }, 500)
  }

  // Start the demo
  const startDemo = () => {
    addDebug("Starting demo with voice")
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
  const addToQueue = (message: string) => {
    messageQueue.current.push(message)
    addDebug(`Added to queue: "${message.substring(0, 30)}..." (Queue: ${messageQueue.current.length})`)
    if (!processingRef.current) {
      processQueue()
    }
  }

  // Process message queue
  const processQueue = () => {
    if (messageQueue.current.length === 0) {
      processingRef.current = false
      addDebug("Queue processing completed")
      return
    }

    processingRef.current = true
    const nextMessage = messageQueue.current.shift()!

    addDebug(`Processing: "${nextMessage.substring(0, 30)}..."`)
    setCurrentMessage(nextMessage)
    setIsProcessing(true)

    if (!isMuted && isVoiceActive && speechTestPassed.current && audioStatus === "ready") {
      speakMessage(nextMessage)
    } else {
      addDebug(
        `Skipping speech - Muted: ${isMuted}, Active: ${isVoiceActive}, TestPassed: ${speechTestPassed.current}, Status: ${audioStatus}`,
      )
      // Show message without speech
      setTimeout(() => {
        setIsProcessing(false)
        processQueue()
      }, 3000)
    }
  }

  // Speak the message with enhanced mobile support
  const speakMessage = (text: string) => {
    if (!synth.current || !selectedVoice.current || !speechTestPassed.current) {
      addDebug("Speech not available - missing requirements")
      setTimeout(() => {
        setIsProcessing(false)
        processQueue()
      }, 2000)
      return
    }

    addDebug(`Speaking: "${text.substring(0, 30)}..." with voice: ${selectedVoice.current.name}`)

    // Cancel any ongoing speech with multiple attempts for mobile
    try {
      synth.current.cancel()
      if (isMobile) {
        setTimeout(() => synth.current?.cancel(), 10)
        setTimeout(() => synth.current?.cancel(), 50)
        setTimeout(() => synth.current?.cancel(), 100)
      }
    } catch (e) {
      addDebug(`Error canceling speech: ${e}`)
    }

    // Delay for mobile to ensure proper cancellation
    const delay = isMobile ? 400 : 100

    setTimeout(() => {
      try {
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.voice = selectedVoice.current
        utterance.rate = isMobile ? 0.85 : 0.95
        utterance.pitch = 1.1
        utterance.volume = 1.0

        let hasStarted = false
        let hasEnded = false

        utterance.onstart = () => {
          if (!hasStarted) {
            hasStarted = true
            addDebug("✅ Speech started successfully")
            setIsPlaying(true)
          }
        }

        utterance.onend = () => {
          if (!hasEnded) {
            hasEnded = true
            addDebug("✅ Speech ended normally")
            setIsPlaying(false)
            setIsProcessing(false)
            setTimeout(
              () => {
                processQueue()
              },
              isMobile ? 1000 : 600,
            )
          }
        }

        utterance.onerror = (event) => {
          if (!hasEnded) {
            hasEnded = true
            addDebug(`❌ Speech error: ${event.error}`)
            setIsPlaying(false)
            setIsProcessing(false)
            setTimeout(() => {
              processQueue()
            }, 500)
          }
        }

        // Safety timeout
        setTimeout(
          () => {
            if (!hasEnded) {
              addDebug("⏰ Speech timeout - forcing end")
              synth.current?.cancel()
              setIsPlaying(false)
              setIsProcessing(false)
              processQueue()
            }
          },
          text.length * 120 + 8000,
        )

        synth.current.speak(utterance)
        addDebug("🎤 Speech utterance queued for playback")
      } catch (error) {
        addDebug(`❌ Speech creation failed: ${error}`)
        setIsPlaying(false)
        setIsProcessing(false)
        processQueue()
      }
    }, delay)
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

    setTimeout(() => {
      setIsAgentActive(false)
      addToQueue(`You've been successfully transferred to ${name}. They will assist you shortly.`)
    }, 5000)
  }

  // Restart demo
  const restartDemo = () => {
    addDebug("Restarting demo")
    if (synth.current) synth.current.cancel()
    messageQueue.current = []
    processingRef.current = false
    setCurrentMessage("")
    setIsProcessing(false)
    setIsVoiceActive(false)
    setIsAgentActive(true)
    setCurrentStep(0)

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
            <h3 className="text-xl font-bold text-white mb-2">Start Jessica's Voice Demo</h3>
            <p className="text-blue-100 mb-4">
              Tap below to unlock audio and hear Jessica speak. This will play a brief audio test to ensure your device
              is ready.
            </p>
            <Button
              onClick={handlePlayClick}
              disabled={audioStatus === "initializing" || audioStatus === "testing"}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-bold text-lg min-h-[44px]"
            >
              {audioStatus === "initializing" ? (
                <>
                  <div className="flex space-x-1 mr-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce animation-delay-100"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce animation-delay-200"></div>
                  </div>
                  Initializing Audio...
                </>
              ) : audioStatus === "testing" ? (
                <>
                  <Speaker className="w-5 h-5 mr-2 animate-pulse" />
                  Testing Voice...
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 mr-2" />
                  Start Voice Demo
                </>
              )}
            </Button>

            {/* Audio Status */}
            {audioStatus === "ready" && (
              <div className="mt-4 flex items-center justify-center space-x-2 text-green-300">
                <CheckCircle className="w-5 h-5" />
                <span>✅ Voice test passed! Jessica will speak during the demo.</span>
              </div>
            )}
            {audioStatus === "failed" && (
              <div className="mt-4 flex items-center justify-center space-x-2 text-yellow-300">
                <AlertTriangle className="w-5 h-5" />
                <span>⚠️ Voice not available. Demo will continue with text only.</span>
              </div>
            )}

            {/* Debug Info for troubleshooting */}
            {debugLog.length > 0 && (
              <div className="mt-4 p-3 bg-black/30 rounded-lg text-left">
                <h4 className="text-sm font-bold mb-2 text-white">Audio Debug:</h4>
                <div className="space-y-1 max-h-24 overflow-y-auto">
                  {debugLog.map((log, index) => (
                    <div key={index} className="text-xs text-gray-300 font-mono">
                      {log}
                    </div>
                  ))}
                </div>
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
                {audioStatus === "ready" && speechTestPassed.current && (
                  <div className="px-2 py-1 bg-green-500 rounded text-white text-xs flex items-center">
                    <Volume2 className="w-3 h-3 mr-1" />
                    Voice On
                  </div>
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
                        <>
                          <div className="absolute inset-0 rounded-full bg-pink-400 animate-ping opacity-30"></div>
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {isPlaying ? "🎤 Jessica is Speaking" : "Jessica is Ready"}
                    </h3>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500 text-white text-sm">
                      <span className={`w-2 h-2 bg-white rounded-full mr-2 ${isPlaying ? "animate-pulse" : ""}`}></span>
                      {isPlaying ? "Speaking Now" : "AI SuperAgent Active"}
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
