"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, X, Send, Minimize2 } from "lucide-react"

export default function FloatingChatRobot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "Hi! I'm your AI assistant. How can I help you learn about SuccessNOW AI today?",
      timestamp: new Date(),
    },
  ])

  const toggleChat = () => {
    setIsOpen(!isOpen)
    setIsMinimized(false)
  }

  const minimizeChat = () => {
    setIsMinimized(true)
  }

  const sendMessage = () => {
    if (message.trim()) {
      setMessages((prev) => [
        ...prev,
        {
          type: "user",
          content: message,
          timestamp: new Date(),
        },
      ])

      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            content:
              "Thanks for your message! Our AI Superagents can help with lead conversion 24/7. Would you like to see a demo?",
            timestamp: new Date(),
          },
        ])
      }, 1000)

      setMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={toggleChat}
            className="relative w-16 h-16 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group animate-pulse"
            style={{
              animationDuration: "2s",
              animationIterationCount: "infinite",
            }}
          >
            <MessageCircle className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 opacity-75 group-hover:scale-110 transition-transform duration-300"></div>
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 opacity-50"
              style={{
                animationName: "ping",
                animationDuration: "2s",
                animationIterationCount: "infinite",
              }}
            ></div>
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-6 right-6 z-50 w-80 h-96 bg-gray-900/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl transition-all duration-300 ${
            isMinimized ? "h-14" : "h-96"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">SuccessNOW AI</h3>
                <p className="text-gray-400 text-xs">Always here to help</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={minimizeChat} className="text-gray-400 hover:text-white transition-colors duration-200">
                <Minimize2 className="w-4 h-4" />
              </button>
              <button onClick={toggleChat} className="text-gray-400 hover:text-white transition-colors duration-200">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          {!isMinimized && (
            <>
              <div className="flex-1 p-4 space-y-4 h-64 overflow-y-auto">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-xs px-4 py-2 rounded-2xl ${
                        msg.type === "user"
                          ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white"
                          : "bg-white/10 text-gray-300 border border-white/20"
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 text-sm focus:outline-none focus:border-pink-500/50 transition-colors duration-200"
                  />
                  <button
                    onClick={sendMessage}
                    className="w-8 h-8 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-200"
                  >
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(1.1);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}
