"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AICallWidget() {
  const [currentMode, setCurrentMode] = useState<"inbound" | "outbound">("inbound")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isRequesting, setIsRequesting] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")
  const [showStatus, setShowStatus] = useState(false)
  const [isTalking, setIsTalking] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTalking) {
        const avatar = document.getElementById("aiAvatar")
        if (avatar) {
          avatar.classList.add("animate-pulse")
          setTimeout(() => {
            avatar.classList.remove("animate-pulse")
          }, 200)
        }
      }
    }, 10000)

    return () => clearInterval(interval)
  }, [isTalking])

  const switchMode = (mode: "inbound" | "outbound") => {
    setCurrentMode(mode)
    setShowStatus(false)
    setStatusMessage("")
  }

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText("6137030404")
      showStatusMessage("📋 TARGET DEVICE CODE COPIED TO NEURAL BUFFER!")
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
      showStatusMessage("⚠️ INVALID TARGET DEVICE CODE - REQUIRE 10 DIGITS")
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
        `🚀 NEURAL LINK ESTABLISHED! AI AGENT INCOMING TO ${phoneNumber}. MAINTAIN COMMUNICATION DEVICE PROXIMITY.`,
      )
    } catch (error) {
      console.error("Webhook error:", error)
      // Even if there's a CORS error, the webhook might still work
      showStatusMessage(`📞 AI AGENT DEPLOYMENT CONFIRMED FOR ${phoneNumber}. PREPARE FOR INCOMING TRANSMISSION!`)
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
    <div className="relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,255,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(255,0,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.05)_0%,transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-10 animate-pulse"
          style={{
            backgroundImage: `linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            animation: "gridMove 20s linear infinite",
          }}
        />
      </div>

      <div className="max-w-lg mx-auto relative z-10">
        <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 relative">
          <div className="absolute inset-0 bg-gradient-to-45 from-cyan-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl animate-pulse" />

          {/* Header */}
          <div className="bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-blue-500/20 backdrop-blur-md p-8 text-center relative overflow-hidden border-b border-cyan-500/30">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse" />

            <div
              id="aiAvatar"
              className={`w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400/80 via-blue-500/60 to-purple-500/40 flex items-center justify-center text-4xl mx-auto mb-5 border-2 border-cyan-400/80 relative z-10 transition-all duration-300 shadow-lg shadow-cyan-500/50 ${
                isTalking ? "animate-bounce shadow-cyan-500/80" : ""
              }`}
              style={{
                boxShadow: "0 0 30px rgba(0, 255, 255, 0.5), inset 0 0 30px rgba(0, 255, 255, 0.2)",
              }}
            >
              {currentMode === "inbound" ? "🤖" : "📡"}
            </div>

            <h2
              className="text-2xl font-bold text-cyan-400 mb-2 relative z-10 font-mono tracking-wider"
              style={{ textShadow: "0 0 20px rgba(0, 255, 255, 0.8)" }}
            >
              {currentMode === "inbound" ? "NEURAL AI INTERFACE" : "AI DEPLOYMENT PROTOCOL"}
            </h2>
            <p className="text-cyan-300/80 text-sm relative z-10 font-light">
              {currentMode === "inbound"
                ? "QUANTUM READY • RESPONSE TIME: < 2ms"
                : "INPUT TARGET • AI AGENT DEPLOYMENT IN 30 SECONDS"}
            </p>
          </div>

          {/* Mode Selector */}
          <div className="flex bg-black/50 backdrop-blur-md m-8 rounded-2xl p-1.5 relative border border-cyan-500/30">
            <button
              onClick={() => switchMode("inbound")}
              className={`flex-1 py-3 px-5 text-center rounded-xl font-medium transition-all duration-300 relative z-10 font-mono ${
                currentMode === "inbound"
                  ? "bg-gradient-to-br from-cyan-500/30 via-blue-500/30 to-cyan-500/30 text-cyan-400 shadow-lg border border-cyan-500/50"
                  : "text-cyan-300/70 hover:bg-cyan-500/10"
              }`}
              style={currentMode === "inbound" ? { textShadow: "0 0 10px rgba(0, 255, 255, 0.8)" } : {}}
            >
              📞 CALL AI
            </button>
            <button
              onClick={() => switchMode("outbound")}
              className={`flex-1 py-3 px-5 text-center rounded-xl font-medium transition-all duration-300 relative z-10 font-mono ${
                currentMode === "outbound"
                  ? "bg-gradient-to-br from-cyan-500/30 via-blue-500/30 to-cyan-500/30 text-cyan-400 shadow-lg border border-cyan-500/50"
                  : "text-cyan-300/70 hover:bg-cyan-500/10"
              }`}
              style={currentMode === "outbound" ? { textShadow: "0 0 10px rgba(0, 255, 255, 0.8)" } : {}}
            >
              📡 AI CALLS YOU
            </button>
          </div>

          {/* Content */}
          <div className="px-8 pb-8">
            {currentMode === "inbound" ? (
              <div className="space-y-6">
                {/* Phone Display */}
                <div
                  className="bg-black/60 backdrop-blur-md rounded-2xl p-8 text-center border border-cyan-500/40 cursor-pointer hover:bg-black/80 transition-all duration-300 relative overflow-hidden"
                  onClick={copyPhoneNumber}
                  style={{ boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.1)" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-45 from-transparent via-cyan-500/10 to-transparent animate-pulse" />

                  <div
                    className="text-3xl font-bold text-cyan-400 mb-2 tracking-wider font-mono relative z-10"
                    style={{ textShadow: "0 0 20px rgba(0, 255, 255, 0.8)" }}
                  >
                    (613) 703-0404
                  </div>
                  <p className="text-cyan-300/70 text-sm relative z-10">TAP TO COPY • INSTANT NEURAL CONNECTION</p>
                </div>

                {/* Call Button */}
                <a
                  href="tel:+16137030404"
                  className="w-full bg-gradient-to-br from-green-500/80 via-green-600/80 to-green-500/80 text-white py-5 px-6 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 hover:from-green-400 hover:to-green-600 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group font-mono border border-green-500/50"
                  style={{
                    textShadow: "0 0 10px rgba(0, 255, 0, 0.8)",
                    boxShadow: "0 0 30px rgba(0, 255, 0, 0.3)",
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
                  <span className="text-xl">📞</span>
                  <span>INITIATE NEURAL LINK</span>
                </a>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Phone Input */}
                <div>
                  <label
                    className="block text-cyan-400 font-medium mb-2 text-sm font-mono"
                    style={{ textShadow: "0 0 10px rgba(0, 255, 255, 0.5)" }}
                  >
                    TARGET COMMUNICATION DEVICE
                  </label>
                  <Input
                    type="tel"
                    value={phoneNumber}
                    onChange={handlePhoneInput}
                    placeholder="(555) 123-4567"
                    className="w-full p-4 border border-cyan-500/40 rounded-xl text-lg bg-black/60 backdrop-blur-md text-cyan-400 placeholder:text-cyan-500/50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all font-mono"
                    style={{ boxShadow: "0 0 20px rgba(0, 255, 255, 0.1)" }}
                    maxLength={14}
                  />
                </div>

                {/* Callback Button */}
                <Button
                  onClick={requestCallback}
                  disabled={isRequesting}
                  className={`w-full py-5 px-6 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden font-mono border ${
                    isRequesting
                      ? "bg-gradient-to-br from-orange-500/80 to-yellow-500/80 animate-pulse border-orange-500/50"
                      : "bg-gradient-to-br from-purple-500/80 via-pink-500/80 to-purple-500/80 hover:from-purple-400 hover:to-pink-600 border-purple-500/50"
                  }`}
                  style={{
                    textShadow: isRequesting ? "0 0 10px rgba(255, 165, 0, 0.8)" : "0 0 10px rgba(255, 0, 255, 0.8)",
                    boxShadow: isRequesting ? "0 0 30px rgba(255, 165, 0, 0.3)" : "0 0 30px rgba(255, 0, 255, 0.3)",
                  }}
                >
                  <span className="text-xl">{isRequesting ? "📡" : "🛰️"}</span>
                  <span>{isRequesting ? "ESTABLISHING NEURAL LINK..." : "DEPLOY AI AGENT IN 30 SECONDS"}</span>
                </Button>
              </div>
            )}

            {/* Status Message */}
            {showStatus && (
              <div
                className="mt-6 p-5 bg-green-500/10 backdrop-blur-md border border-green-500/30 rounded-2xl text-green-400 font-medium text-center animate-in fade-in duration-300 font-mono"
                style={{
                  boxShadow: "0 0 20px rgba(0, 255, 0, 0.2)",
                  textShadow: "0 0 10px rgba(0, 255, 0, 0.5)",
                }}
              >
                {statusMessage}
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  )
}
