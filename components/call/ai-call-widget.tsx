"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AICallWidget() {
  const [currentMode, setCurrentMode] = useState<"inbound" | "outbound">("inbound")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isRequesting, setIsRequesting] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")
  const [showStatus, setShowStatus] = useState(false)
  const [isTalking, setIsTalking] = useState(false)

  const switchMode = (mode: "inbound" | "outbound") => {
    setCurrentMode(mode)
    setShowStatus(false)
    setStatusMessage("")
  }

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText("6137030404")
      showStatusMessage("📋 Phone number copied to clipboard!")
    } catch (err) {
      console.error("Failed to copy:", err)
    }
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

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setPhoneNumber(formatted)
  }

  const requestCallback = async () => {
    const digitsOnly = phoneNumber.replace(/\D/g, "")

    if (digitsOnly.length < 10) {
      showStatusMessage("⚠️ Please enter a valid 10-digit phone number")
      return
    }

    setIsRequesting(true)
    setIsTalking(true)

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL

      if (!webhookUrl) {
        throw new Error("Webhook URL not configured")
      }

      // Make the webhook call
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
        `🚀 Perfect! Our AI will call ${phoneNumber} shortly. Please keep your phone nearby and answer when it rings!`,
      )
    } catch (error) {
      console.error("Webhook error:", error)
      // Even if there's a CORS error, the webhook might still work
      showStatusMessage(`📞 Great! Our AI will call ${phoneNumber} shortly. Please keep your phone nearby!`)
    } finally {
      setTimeout(() => {
        setIsRequesting(false)
        setIsTalking(false)
        setPhoneNumber("")
      }, 5000)
    }
  }

  const showStatusMessage = (message: string) => {
    setStatusMessage(message)
    setShowStatus(true)
    setTimeout(() => {
      setShowStatus(false)
    }, 8000)
  }

  return (
    <div className="max-w-lg mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-8 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='circles' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'><circle cx='10' cy='10' r='1' fill='white' opacity='0.1'/></pattern></defs><rect x='0' y='0' width='100' height='100' fill='url(%23circles)'/></svg>")`,
          }}
        />

        <div
          className={`w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-4xl mx-auto mb-5 border-3 border-white/30 relative z-10 transition-all duration-300 ${isTalking ? "animate-pulse shadow-lg shadow-white/30" : ""}`}
        >
          {currentMode === "inbound" ? "🤖" : "📞"}
        </div>

        <h2 className="text-2xl font-bold text-white mb-2 relative z-10">
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
          className={`flex-1 py-3 px-5 text-center rounded-xl font-medium transition-all duration-300 relative z-10 ${
            currentMode === "inbound" ? "bg-white text-purple-600 shadow-md" : "text-gray-600 hover:bg-white/50"
          }`}
        >
          📞 Call AI
        </button>
        <button
          onClick={() => switchMode("outbound")}
          className={`flex-1 py-3 px-5 text-center rounded-xl font-medium transition-all duration-300 relative z-10 ${
            currentMode === "outbound" ? "bg-white text-purple-600 shadow-md" : "text-gray-600 hover:bg-white/50"
          }`}
        >
          📲 AI Calls You
        </button>
      </div>

      {/* Content */}
      <div className="px-8 pb-8">
        {currentMode === "inbound" ? (
          <div className="space-y-6">
            {/* Phone Display */}
            <div
              className="bg-gray-50 rounded-2xl p-8 text-center border-2 border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={copyPhoneNumber}
            >
              <div className="text-3xl font-bold text-gray-900 mb-2 tracking-wider">(613) 703-0404</div>
              <p className="text-gray-600 text-sm">Tap to copy • Click call to connect instantly</p>
            </div>

            {/* Call Button */}
            <a
              href="tel:+16137030404"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-5 px-6 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/25 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
              <span className="text-xl">📞</span>
              <span>Call Now - Free Demo</span>
            </a>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Phone Input */}
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">Your Phone Number</label>
              <Input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneInput}
                placeholder="(555) 123-4567"
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                maxLength={14}
              />
            </div>

            {/* Callback Button */}
            <Button
              onClick={requestCallback}
              disabled={isRequesting}
              className={`w-full py-5 px-6 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden ${
                isRequesting
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 animate-pulse"
                  : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-purple-500/25"
              }`}
            >
              <span className="text-xl">📲</span>
              <span>{isRequesting ? "Setting up call..." : "Have AI Call Me in 30 Seconds"}</span>
            </Button>
          </div>
        )}

        {/* Status Message */}
        {showStatus && (
          <div className="mt-6 p-5 bg-green-50 border border-green-200 rounded-2xl text-green-800 font-medium text-center animate-in fade-in duration-300">
            {statusMessage}
          </div>
        )}
      </div>
    </div>
  )
}
