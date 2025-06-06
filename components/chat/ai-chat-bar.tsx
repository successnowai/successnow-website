"use client"
import { useState } from "react"
import { MessageCircle, Mic, X, Send } from "lucide-react"

export default function AIChatBar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [message, setMessage] = useState("")

  const handleVoiceChat = () => {
    // Voice AI integration with Vapi.ai
    console.log("Starting voice chat...")
    // Add Vapi.ai integration here
  }

  const handleLiveDemo = () => {
    // Navigate to demo or open demo modal
    window.location.href = "/demo"
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Sending message:", message)
      setMessage("")
      // Add chat functionality here
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0080FF] to-[#00BFFF] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - AI Assistant Info */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-white animate-pulse" />
              <span className="text-white font-bold text-sm">🚀 SuccessNOW AI SUPERAGENT, TRY IT NOW</span>
            </div>
          </div>

          {/* Center - Expandable Chat Input */}
          <div className="flex-1 max-w-md mx-4">
            {isExpanded ? (
              <div className="flex items-center space-x-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask me anything about AI solutions..."
                    className="w-full px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 shadow-lg"
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                </div>
                <button
                  onClick={handleSendMessage}
                  className="p-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Send className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsExpanded(true)}
                className="w-full px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 glow-button-reduced"
              >
                💬 Start AI Chat Now
              </button>
            )}
          </div>

          {/* Right side - Action Buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handleVoiceChat}
              className="flex items-center space-x-2 px-6 py-2 bg-white/90 backdrop-blur-sm text-[#0080FF] font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl glow-button-white-reduced"
            >
              <Mic className="h-4 w-4" />
              <span className="hidden sm:inline">Talk to AI</span>
              <span className="sm:hidden">Talk</span>
            </button>

            <button
              onClick={handleLiveDemo}
              className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-bold rounded-full hover:from-[#059669] hover:to-[#047857] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl glow-button-green-reduced"
            >
              <span className="hidden sm:inline">Live Demo</span>
              <span className="sm:hidden">Demo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
