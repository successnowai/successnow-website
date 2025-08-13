"use client"

import { useState, useEffect } from "react"

export const NewTopHeroSection = () => {
  const rotatingWords = ["Nurture", "Close", "Qualify", "Convert"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 relative overflow-hidden">
      {/* Enhanced Background Effects with darker sides */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950 via-transparent to-purple-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-purple-900 to-purple-950"></div>

      {/* Enhanced Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(75)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Bright Shooting Stars */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute w-2 h-0.5 animate-shooting-star will-change-transform"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              background: "linear-gradient(90deg, transparent, #00d4ff, #0ea5e9, #3b82f6, transparent)",
              borderRadius: "50%",
              boxShadow: "0 0 8px #00d4ff, 0 0 16px #0ea5e9, 0 0 24px #3b82f6",
              transform: "rotate(-45deg)",
            }}
          />
        ))}
      </div>

      {/* Additional Diagonal Shooting Stars */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={`diagonal-${i}`}
            className="absolute w-3 h-0.5 animate-shooting-star will-change-transform"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
              background: "linear-gradient(90deg, transparent, #d946ef, #a855f7, #8b5cf6, transparent)",
              borderRadius: "50%",
              boxShadow: "0 0 10px #d946ef, 0 0 20px #a855f7",
              transform: "rotate(45deg)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            AI Systems That
            <br />
            <span
              className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000"
              style={{
                textShadow: `
                  0 0 5px rgba(34, 211, 238, 0.2),
                  0 0 10px rgba(34, 211, 238, 0.15),
                  0 0 15px rgba(34, 211, 238, 0.1),
                  0 0 20px rgba(14, 165, 233, 0.08)
                `,
                filter: "drop-shadow(0 0 5px rgba(34, 211, 238, 0.2))",
              }}
              key={currentWordIndex}
            >
              {rotatingWords[currentWordIndex]}
            </span>
            <br />
            Leads Into Sales
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Stop losing money on leads that never convert. Our AI agents work 24/7 to qualify, nurture, and close your
            prospects while you focus on growing your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="https://signup.successnow.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
            >
              Get Your AI Agent Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/demo"
              className="border-2 border-gray-400 text-gray-300 hover:bg-gray-400 hover:text-purple-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Watch Demo
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <p className="text-gray-400 mb-6">Trusted by businesses worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white font-semibold">Fortune 500</div>
              <div className="text-white font-semibold">Small Business</div>
              <div className="text-white font-semibold">Enterprise</div>
              <div className="text-white font-semibold">Startups</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewTopHeroSection
