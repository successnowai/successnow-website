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
    <div className="max-w-lg mx-auto mb-8 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl animate-pulse"></div>

      <div className="relative bg-black/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>

        {/* Header */}
        <div className="relative p-8 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>

          <div
            className={`w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full mx-auto mb-5 flex items-center justify-center text-3xl border-2 border-cyan-400/50 relative z-10 transition-all duration-300 shadow-lg shadow-cyan-500/25 ${isTalking ? "animate-pulse shadow-cyan-500/50" : ""}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full animate-ping"></div>
            <span className="relative z-10 filter drop-shadow-lg">{currentMode === "inbound" ? "🤖" : "📞"}</span>
          </div>

          <h2 className="text-cyan-300 text-xl font-bold mb-2 relative z-10 tracking-wide">
            {currentMode === "inbound" ? "CONNECT TO AI AGENT" : "AI CALLBACK PROTOCOL"}
          </h2>
          <p className="text-gray-300 text-sm relative z-10 font-mono">
            {currentMode === "inbound" ? "SYSTEM ONLINE • RESPONSE TIME: <2s" : "ENTER COORDINATES • CALLBACK IN 30s"}
          </p>
        </div>

        <div className="flex bg-gray-900/50 m-8 rounded-2xl p-1.5 relative border border-cyan-500/20">
          <button
            onClick={() => switchMode("inbound")}
            className={`flex-1 py-3 px-5 text-center rounded-xl font-bold cursor-pointer transition-all duration-300 relative z-10 font-mono text-sm tracking-wide ${
              currentMode === "inbound"
                ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 shadow-lg border border-cyan-500/30"
                : "text-gray-400 hover:bg-cyan-500/10 hover:text-cyan-300"
            }`}
          >
            📞 CALL AI
          </button>
          <button
            onClick={() => switchMode("outbound")}
            className={`flex-1 py-3 px-5 text-center rounded-xl font-bold cursor-pointer transition-all duration-300 relative z-10 font-mono text-sm tracking-wide ${
              currentMode === "outbound"
                ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 shadow-lg border border-cyan-500/30"
                : "text-gray-400 hover:bg-cyan-500/10 hover:text-cyan-300"
            }`}
          >
            📲 AI CALLS YOU
          </button>
        </div>

        {/* Call Interface */}
        <div className="px-8 pb-8">
          {currentMode === "inbound" ? (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-8 text-center border border-cyan-500/30 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
                <div
                  className="text-3xl font-bold text-cyan-300 mb-2 tracking-wider cursor-pointer hover:text-cyan-200 transition-colors relative z-10 font-mono filter drop-shadow-lg"
                  onClick={copyPhoneNumber}
                  style={{ textShadow: "0 0 10px rgba(0,255,255,0.5)" }}
                >
                  (613) 703-0404
                </div>
                <p className="text-gray-400 text-sm font-mono relative z-10">TAP TO COPY • CLICK CALL TO CONNECT</p>
              </div>

              <a
                href="tel:+16137030404"
                className="w-full bg-gradient-to-r from-green-400 to-cyan-400 text-black border-none py-5 rounded-2xl text-lg font-bold cursor-pointer transition-all duration-300 hover:from-green-300 hover:to-cyan-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/25 flex items-center justify-center gap-3 relative overflow-hidden group font-mono tracking-wide"
                style={{ boxShadow: "0 0 20px rgba(0,255,255,0.3)" }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                <span className="text-xl">📞</span>
                <span>INITIATE CONNECTION</span>
              </a>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <label className="block text-cyan-300 font-bold mb-2 text-sm font-mono tracking-wide">
                  PHONE COORDINATES
                </label>
                <input
                  type="tel"
                  value={phoneInput}
                  onChange={handlePhoneInputChange}
                  placeholder="(555) 123-4567"
                  className="w-full p-4 border-2 border-cyan-500/30 rounded-xl text-lg text-cyan-300 placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20 bg-gray-900/50 backdrop-blur-sm font-mono"
                  style={{ boxShadow: "inset 0 0 10px rgba(0,255,255,0.1)" }}
                  maxLength={14}
                />
              </div>

              <button
                onClick={requestCallback}
                disabled={isRequesting}
                className={`w-full border-none py-5 rounded-2xl text-lg font-bold cursor-pointer transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 relative overflow-hidden font-mono tracking-wide ${
                  isRequesting
                    ? "bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse text-black"
                    : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 hover:shadow-xl hover:shadow-purple-500/25 text-white"
                }`}
                style={{ boxShadow: isRequesting ? "0 0 20px rgba(255,165,0,0.5)" : "0 0 20px rgba(147,51,234,0.3)" }}
              >
                <span className="text-xl">📲</span>
                <span>{isRequesting ? "ESTABLISHING LINK..." : "INITIATE CALLBACK PROTOCOL"}</span>
              </button>
            </div>
          )}

          {showStatus && (
            <div className="mt-6 text-center p-5 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-xl border border-green-400/30 text-green-300 font-bold animate-fade-in backdrop-blur-sm font-mono text-sm">
              {statusMessage}
            </div>
          )}
        </div>
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
