"use client"

import { useState, useEffect } from "react"
import { Bot } from "lucide-react"

interface GlowingOrbCtaProps {
  label?: string
  size?: "sm" | "md" | "lg"
  className?: string
}

export function GlowingOrbCta({ label = "Click Here, Talk to AI", size = "md", className = "" }: GlowingOrbCtaProps) {
  const [showPopup, setShowPopup] = useState(false)

  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-20 h-20",
    lg: "w-24 h-24",
  }

  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  }

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }

  useEffect(() => {
    if (showPopup) {
      const frame = document.getElementById("assistantFrameOrb")
      const handleLoad = () => {
        if (navigator.permissions) {
          navigator.permissions
            .query({ name: "microphone" as PermissionName })
            .then((result) => {
              if (result.state === "granted") {
                console.log("Microphone access already granted")
              } else if (result.state === "prompt") {
                console.log("User will be prompted for microphone access")
              }
            })
            .catch((err) => {
              console.error("Microphone permission query failed:", err)
            })
        }
      }

      if (frame) {
        frame.addEventListener("load", handleLoad)
        return () => {
          frame.removeEventListener("load", handleLoad)
        }
      }
    }
  }, [showPopup])

  return (
    <>
      <div className={`w-full flex flex-col items-center ${className}`}>
        <button
          onClick={() => setShowPopup(true)}
          className={`group relative ${sizeClasses[size]} bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 mb-3`}
          aria-label="Launch AI Demo"
          style={{
            animation: "slowGlow 4s ease-in-out infinite alternate",
          }}
        >
          {/* Outer glow effect - slowest */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
            style={{
              animation: "slowPulse 6s ease-in-out infinite alternate",
            }}
          ></div>

          {/* Middle glow effect - medium */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"
            style={{
              animation: "slowPulse 4.5s ease-in-out infinite alternate-reverse",
            }}
          ></div>

          {/* Inner glow effect - fastest but still slow */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-500"
            style={{
              animation: "slowPulse 3s ease-in-out infinite alternate",
            }}
          ></div>

          {/* Bot icon */}
          <Bot className={`relative z-10 text-white ${iconSizes[size]}`} />

          {/* Slow pulsing rings - like voice waves */}
          <div
            className="absolute inset-0 rounded-full border-2 border-purple-400/30"
            style={{
              animation: "slowRing 5s ease-in-out infinite",
            }}
          ></div>
          <div
            className="absolute inset-0 rounded-full border-2 border-pink-400/20"
            style={{
              animation: "slowRing 5s ease-in-out infinite 1.5s",
            }}
          ></div>
        </button>

        <span className={`text-white font-medium text-center ${textSizeClasses[size]}`}>{label}</span>
      </div>

      {/* Inline popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-md mx-4 bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 shadow-2xl rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">AI Voice Agent</h2>
              <button onClick={() => setShowPopup(false)} className="text-gray-400 hover:text-white transition-colors">
                ✕
              </button>
            </div>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}>
              <iframe
                src="https://iframes.ai/o/1753831620452x607403809624031200?color=ed10cc&icon=bot"
                allow="microphone"
                style={{ width: "100%", height: "100%", border: "none" }}
                id="assistantFrameOrb"
                title="AI Voice Agent"
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slowGlow {
          0% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.3), 0 0 40px rgba(236, 72, 153, 0.2); }
          100% { box-shadow: 0 0 30px rgba(147, 51, 234, 0.5), 0 0 60px rgba(236, 72, 153, 0.3); }
        }
        
        @keyframes slowPulse {
          0% { opacity: 0.3; transform: scale(1); }
          100% { opacity: 0.6; transform: scale(1.05); }
        }
        
        @keyframes slowRing {
          0% { opacity: 0; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
          100% { opacity: 0; transform: scale(1.2); }
        }
      `}</style>
    </>
  )
}

export default GlowingOrbCta
