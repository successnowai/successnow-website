"use client"

import { useState, useEffect, useRef } from "react"
import { Mic, MicOff, Volume2, VolumeX } from "lucide-react"

export default function DemoPage() {
  const [isMuted, setIsMuted] = useState(false)
  const [isVoiceActive, setIsVoiceActive] = useState(true)
  const [isAgentActive, setIsAgentActive] = useState(true)
  const [currentMessage, setCurrentMessage] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [showTransferDialog, setShowTransferDialog] = useState(false)
  const [transferName, setTransferName] = useState("")

  // Message queue system
  const messageQueue = useRef<string[]>([])
  const processingRef = useRef(false)
  const synth = useRef<SpeechSynthesis | null>(null)
  const voices = useRef<SpeechSynthesisVoice[]>([])
  const currentUtterance = useRef<SpeechSynthesisUtterance | null>(null)

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

  // Initialize speech synthesis
  useEffect(() => {
    // Initialize speech synthesis
    if (typeof window !== "undefined") {
      synth.current = window.speechSynthesis

      // Function to initialize voices
      const initVoices = () => {
        const availableVoices = synth.current?.getVoices() || []
        voices.current = availableVoices

        // Pre-select a female voice if available
        const femaleVoice = availableVoices.find(
          (voice) =>
            voice.name.includes("female") ||
            voice.name.includes("Samantha") ||
            voice.name.includes("Google UK English Female") ||
            voice.name.includes("Microsoft Zira"),
        )

        if (femaleVoice) {
          console.log("Selected voice:", femaleVoice.name)
        } else {
          console.log("No preferred female voice found, using default")
        }
      }

      // Initialize voices
      if (synth.current?.onvoiceschanged !== undefined) {
        synth.current.onvoiceschanged = initVoices
      }

      // Initial voice loading
      initVoices()

      // Start the demo with a slight delay
      const timer = setTimeout(() => {
        if (!isMuted && isVoiceActive) {
          processQueue()
          demoScript.forEach((message) => {
            addToQueue(message)
          })
        }
      }, 3000)

      return () => {
        clearTimeout(timer)
        if (synth.current && currentUtterance.current) {
          synth.current.cancel()
        }
      }
    }
  }, [])

  // Handle mute/unmute
  useEffect(() => {
    if (isMuted && synth.current && currentUtterance.current) {
      synth.current.cancel()
    } else if (!isMuted && currentMessage && isVoiceActive) {
      speakMessage(currentMessage)
    }
  }, [isMuted, currentMessage, isVoiceActive])

  // Add message to queue
  const addToQueue = (message: string) => {
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

    if (nextMessage) {
      setCurrentMessage(nextMessage)
      setIsProcessing(true)

      if (!isMuted && isVoiceActive) {
        speakMessage(nextMessage)
      } else {
        // If muted, still show the message but don't speak
        // Add a delay to simulate speaking time
        setTimeout(() => {
          setIsProcessing(false)
          processQueue()
        }, 2000)
      }
    }
  }

  // Speak the message
  const speakMessage = (text: string) => {
    if (!synth.current) return

    // Cancel any ongoing speech
    synth.current.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    currentUtterance.current = utterance

    // Select a female voice if available
    const femaleVoice = voices.current.find(
      (voice) =>
        voice.name.includes("female") ||
        voice.name.includes("Samantha") ||
        voice.name.includes("Google UK English Female") ||
        voice.name.includes("Microsoft Zira"),
    )

    if (femaleVoice) {
      utterance.voice = femaleVoice
    }

    // Set properties for a friendly, natural voice
    utterance.rate = 1.0 // Normal speed
    utterance.pitch = 1.1 // Slightly higher pitch for female voice
    utterance.volume = 1.0

    // Handle speech end
    utterance.onend = () => {
      setIsProcessing(false)
      // Small delay between messages for natural conversation flow
      setTimeout(() => {
        processQueue()
      }, 500)
    }

    // Handle speech error
    utterance.onerror = (event) => {
      console.error("Speech synthesis error:", event)
      setIsProcessing(false)
      setTimeout(() => {
        processQueue()
      }, 500)
    }

    // Start speaking
    try {
      synth.current.speak(utterance)
    } catch (error) {
      console.error("Failed to speak:", error)
      setIsProcessing(false)
      setTimeout(() => {
        processQueue()
      }, 500)
    }
  }

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

    // Simulate transfer completion after message is spoken
    setTimeout(() => {
      setIsAgentActive(false)
      addToQueue(`You've been successfully transferred to ${name}. They will assist you shortly.`)
    }, 5000)
  }

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
                <button
                  onClick={() => setIsVoiceActive(!isVoiceActive)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label={isVoiceActive ? "Disable voice" : "Enable voice"}
                >
                  {isVoiceActive ? (
                    <Volume2 className="h-5 w-5 text-white" />
                  ) : (
                    <VolumeX className="h-5 w-5 text-white" />
                  )}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <MicOff className="h-5 w-5 text-white" /> : <Mic className="h-5 w-5 text-white" />}
                </button>
              </div>
            </div>

            {/* Agent Chat Content */}
            <div className="p-6 h-[400px] sm:h-[500px] flex flex-col">
              <div className="flex-1 flex items-center justify-center mb-4">
                {isAgentActive ? (
                  <div className="text-center">
                    <div className="w-24 h-24 bg-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl">🤖</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Jessica is Ready</h3>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500 text-white text-sm">
                      <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                      AI SuperAgent Active
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
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white text-lg break-words">
                {currentMessage || "Jessica will begin speaking momentarily..."}
                {isProcessing && <span className="inline-block ml-1 animate-pulse">▌</span>}
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  onClick={handleLiveTransfer}
                  className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors min-h-[44px]"
                >
                  Experience Live Transfer
                </button>
                <button
                  onClick={() => {
                    if (synth.current) synth.current.cancel()
                    messageQueue.current = []
                    setCurrentMessage("")
                    setIsProcessing(false)
                    processingRef.current = false

                    // Restart the script
                    setTimeout(() => {
                      demoScript.forEach((message) => {
                        addToQueue(message)
                      })
                    }, 500)
                  }}
                  className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors min-h-[44px]"
                >
                  Restart Demo
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors min-h-[44px]"
                >
                  {isMuted ? "Unmute" : "Mute"}
                </button>
              </div>
            </div>
          </div>

          {/* Demo Script */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-xl p-6 text-white">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">📝</span> Jessica's Demo Script
            </h3>
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 modal-scroll">
              {demoScript.map((line, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg transition-all duration-300 ${
                    currentMessage === line ? "bg-white/20 border-l-4 border-blue-400" : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <p className="text-base sm:text-lg break-words">{line}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Transfer Dialog */}
      {showTransferDialog && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full modal-mobile">
            <h3 className="text-xl font-bold mb-4">Live Transfer</h3>
            <p className="mb-4">Who would you like Jessica to transfer you to?</p>
            <input
              type="text"
              value={transferName}
              onChange={(e) => setTransferName(e.target.value)}
              placeholder="Enter name or department"
              className="w-full p-3 border rounded-lg mb-4 text-black"
            />
            <div className="flex space-x-3">
              <button
                onClick={confirmTransfer}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors min-h-[44px]"
              >
                Transfer Now
              </button>
              <button
                onClick={() => setShowTransferDialog(false)}
                className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition-colors min-h-[44px]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
