"use client"

import { useState, useEffect } from "react"
import { Bot, X } from "lucide-react"

export default function FloatingChatRobot() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isExpanded) {
      const frame = document.getElementById("assistantFrame")
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
  }, [isExpanded])

  if (!isVisible) return null

  return (
    <>
      {/* Floating Chat Robot */}
      <div className="fixed bottom-6 right-6 z-50">
        {isExpanded ? (
          <div
            className="mb-4 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden"
            style={{ width: "350px", height: "400px" }}
          >
            <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <h3 className="font-semibold text-sm">AI Business Consultant</h3>
              <button onClick={() => setIsExpanded(false)} className="text-white hover:text-gray-200 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div
              style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "calc(100% - 48px)" }}
            >
              <iframe
                src="https://iframes.ai/o/1753831620452x607403809624031200?color=ed10cc&icon=bot"
                allow="microphone"
                style={{ width: "100%", height: "100%", border: "none" }}
                id="assistantFrame"
                title="AI Business Consultant"
              />
            </div>
          </div>
        ) : null}

        <div className="group cursor-pointer flex flex-col items-center" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="relative w-16 h-16 mb-2">
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

            {/* Inner glow effect */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-500"
              style={{
                animation: "slowPulse 3s ease-in-out infinite alternate",
              }}
            ></div>

            <div
              className="relative w-full h-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-110"
              style={{
                animation: "slowGlow 4s ease-in-out infinite alternate",
              }}
            >
              <Bot className="w-8 h-8 text-white" />

              {/* Slow pulsing rings */}
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
            </div>
          </div>
          <span className="text-xs font-semibold text-white bg-black/50 px-2 py-1 rounded backdrop-blur-sm group-hover:text-purple-200 transition-colors duration-300 text-center">
            Click Here, Talk to AI
          </span>
        </div>
      </div>

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
