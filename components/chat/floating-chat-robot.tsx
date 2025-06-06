"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Minimize2, Maximize2, Video, Send, Mic, BotIcon as Robot } from "lucide-react"

export default function FloatingChatRobot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isVoiceActive, setIsVoiceActive] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your SuccessNOW AI Assistant. How can I help you automate your business today?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  // Floating animation
  const [floatDirection, setFloatDirection] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatDirection((prev) => prev * -1)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleVoiceAI = () => {
    setIsVoiceActive(!isVoiceActive)

    if (!isVoiceActive) {
      // If not already open, open the chat
      if (!isOpen) {
        setIsOpen(true)
        setIsMinimized(false)
      }

      // Integrate with Vapi.ai for voice calls
      window.open("https://vapi.ai", "_blank")
    }
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI response (integrate with GetEverBots/Vapi later)
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "I'd love to help you with that! Let me connect you with our AI demo or a specialist. Would you like to see a live demo or schedule a consultation?",
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 2000)
  }

  const handleVideoCall = () => {
    // Integrate with video calling service
    window.location.href = "/demo"
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="relative rounded-full w-16 h-16 shadow-2xl transition-all duration-300 hover:scale-110 border-0"
          style={{
            background: "linear-gradient(135deg, #0080FF, #00BFFF)",
            boxShadow:
              "0 0 20px 5px rgba(0, 128, 255, 0.7), 0 0 40px 10px rgba(0, 128, 255, 0.5), 0 0 60px 15px rgba(0, 128, 255, 0.3)",
            transform: `translateY(${floatDirection * 5}px)`,
            transition: "transform 3s ease-in-out, box-shadow 1s ease-in-out",
            animation: "pulse-bright 2s infinite",
          }}
        >
          <Robot className="w-8 h-8 text-white" />

          {/* Notification dot */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-white text-xs font-bold">1</span>
          </div>

          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full bg-[#0080FF] animate-ping opacity-30"></div>
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className={`bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 ${
          isMinimized ? "w-80 h-16" : "w-80 h-96"
        }`}
        style={{
          boxShadow: "0 0 20px 5px rgba(0, 128, 255, 0.3)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#0080FF] to-[#00BFFF] text-white rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Robot className="w-5 h-5" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h3 className="font-semibold text-sm">SuccessNOW AI</h3>
              <p className="text-xs text-white/80">Online • Ready to help</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              onClick={handleVoiceAI}
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/20 p-1"
              title="Voice Call"
            >
              <Mic className="w-4 h-4" />
            </Button>
            <Button
              onClick={handleVideoCall}
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/20 p-1"
              title="Video Demo"
            >
              <Video className="w-4 h-4" />
            </Button>
            <Button
              onClick={() => setIsMinimized(!isMinimized)}
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/20 p-1"
            >
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </Button>
            <Button
              onClick={() => setIsOpen(false)}
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/20 p-1"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 p-4 h-64 overflow-y-auto space-y-3">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      message.isBot
                        ? "bg-gray-100 text-gray-800"
                        : "bg-gradient-to-r from-[#0080FF] to-[#00BFFF] text-white"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 px-3 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Ask about SuccessNOW AI..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0080FF] focus:border-transparent text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-gradient-to-r from-[#0080FF] to-[#00BFFF] hover:from-[#00BFFF] hover:to-[#0080FF] text-white"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-2 mt-2">
                <Button
                  onClick={() => (window.location.href = "/demo")}
                  size="sm"
                  variant="outline"
                  className="text-xs border-[#0080FF] text-[#0080FF] hover:bg-[#0080FF] hover:text-white"
                >
                  Live Demo
                </Button>
                <Button
                  onClick={() => (window.location.href = "/payment")}
                  size="sm"
                  variant="outline"
                  className="text-xs border-[#0080FF] text-[#0080FF] hover:bg-[#0080FF] hover:text-white"
                >
                  Get AI Now
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
