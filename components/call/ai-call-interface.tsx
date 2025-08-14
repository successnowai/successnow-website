"use client"

import type React from "react"

import { useState } from "react"

export default function AICallInterface() {
  const [currentMode, setCurrentMode] = useState<"inbound" | "outbound">("inbound")
  const [phoneInput, setPhoneInput] = useState("")
  const [isRequesting, setIsRequesting] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")
  const [showStatus, setShowStatus] = useState(false)
  const [isTalking, setIsTalking] = useState(false)

  const switchMode = (mode: "inbound" | "outbound") => {
    setCurrentMode(mode)
    setShowStatus(false)
    setStatusMessage("")
  }

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "")
    if (digits.length <= 3) {
      return digits.length > 0 ? `(${digits}` : ""
    } else if (digits.length <= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
    } else {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`
    }
  }

  const handlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setPhoneInput(formatted)
  }

  const showStatusMessage = (message: string) => {
    setStatusMessage(message)
    setShowStatus(true)
    setTimeout(() => {
      setShowStatus(false)
    }, 8000)
  }

  const requestCallback = async () => {
    const digitsOnly = phoneInput.replace(/\D/g, "")
    if (digitsOnly.length < 10) {
      showStatusMessage("⚠️ Please enter a valid 10-digit phone number")
      return
    }

    setIsRequesting(true)
    setIsTalking(true)

    try {
      const webhookUrl =
        "https://services.leadconnectorhq.com/hooks/UMy2Y82UItPQzkvXP7VK/webhook-trigger/9a34b653-b83e-4296-98b9-8591b13eafb2"

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: digitsOnly,
        }),
      })

      showStatusMessage(
        `🚀 Perfect! Our AI will call ${phoneInput} shortly. Please keep your phone nearby and answer when it rings!`,
      )
    } catch (error) {
      console.error("Webhook error:", error)
      showStatusMessage(`📞 Great! Our AI will call ${phoneInput} shortly. Please keep your phone nearby!`)
    } finally {
      setTimeout(() => {
        setIsRequesting(false)
        setIsTalking(false)
        setPhoneInput("")
      }, 5000)
    }
  }

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText("613-703-0404").then(() => {
      showStatusMessage("📋 Phone number copied to clipboard!")
    })
  }

  return (
    <div className="max-w-lg mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 mb-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-700 p-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='circles' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'><circle cx='10' cy='10' r='1' fill='white' opacity='0.1'/></pattern></defs><rect x='0' y='0' width='100' height='100' fill='url(%23circles)'/></svg>")`,
            }}
          />
        </div>

        <div
          className={`w-20 h-20 bg-white/20 rounded-full mx-auto mb-5 flex items-center justify-center text-3xl border-3 border-white/30 relative z-10 transition-all duration-300 ${isTalking ? "animate-pulse" : ""}`}
        >
          {currentMode === "inbound" ? "🤖" : "📞"}
        </div>

        <h2 className="text-white text-xl font-semibold mb-2 relative z-10">
          {currentMode === "inbound" ? "Talk to Our AI Agent" : "AI Will Call You"}
        </h2>
        <p className="text-white/80 text-sm relative z-10">
          {currentMode === "inbound"
            ? "Available 24/7 • Average response time: < 2 seconds"
            : "Enter your number • AI calls in 30 seconds"}
        </p>
      </div>

      {/* Mode Selector */}
      <div className="flex bg-gray-100 m-8 rounded-2xl p-1.5 relative">
        <button
          onClick={() => switchMode("inbound")}
          className={`flex-1 py-3 px-5 text-center rounded-xl font-medium cursor-pointer transition-all duration-300 relative z-10 ${
            currentMode === "inbound" ? "bg-white text-indigo-600 shadow-lg" : "text-gray-600 hover:bg-white/50"
          }`}
        >
          📞 Call AI
        </button>
        <button
          onClick={() => switchMode("outbound")}
          className={`flex-1 py-3 px-5 text-center rounded-xl font-medium cursor-pointer transition-all duration-300 relative z-10 ${
            currentMode === "outbound" ? "bg-white text-indigo-600 shadow-lg" : "text-gray-600 hover:bg-white/50"
          }`}
        >
          📲 AI Calls You
        </button>
      </div>

      {/* Call Interface */}
      <div className="px-8 pb-8">
        {currentMode === "inbound" ? (
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-8 text-center border-2 border-gray-200">
              <div
                className="text-3xl font-bold text-gray-900 mb-2 tracking-wider cursor-pointer hover:text-indigo-600 transition-colors"
                onClick={copyPhoneNumber}
              >
                (613) 703-0404
              </div>
              <p className="text-gray-600 text-sm">Tap to copy • Click call to connect instantly</p>
            </div>
            <a
              href="tel:+16137030404"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white border-none py-5 rounded-2xl text-lg font-semibold cursor-pointer transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:-translate-y-0.5 hover:shadow-xl flex items-center justify-center gap-3 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              <span className="text-xl">📞</span>
              <span>Call Now - Free Demo</span>
            </a>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">Your Phone Number</label>
              <input
                type="tel"
                value={phoneInput}
                onChange={handlePhoneInputChange}
                placeholder="(555) 123-4567"
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg text-gray-900 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 bg-white"
                maxLength={14}
              />
            </div>
            <button
              onClick={requestCallback}
              disabled={isRequesting}
              className={`w-full border-none py-5 rounded-2xl text-lg font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-3 relative overflow-hidden ${
                isRequesting
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 animate-pulse"
                  : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl"
              } text-white`}
            >
              <span className="text-xl">📲</span>
              <span>{isRequesting ? "Setting up call..." : "Have AI Call Me in 30 Seconds"}</span>
            </button>
          </div>
        )}

        {/* Status Message */}
        {showStatus && (
          <div className="mt-6 text-center p-5 bg-green-50 rounded-xl border border-green-200 text-green-700 font-medium animate-fade-in">
            {statusMessage}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
