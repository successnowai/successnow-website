"use client"

import { useState, useEffect } from "react"

export default function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const words = ["Unstoppable", "Dominant", "Automated", "Profitable", "Legendary"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <span
      className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 animate-pulse"
      style={{
        textShadow: `
          0 0 10px rgba(34, 211, 238, 0.8),
          0 0 20px rgba(34, 211, 238, 0.6),
          0 0 30px rgba(34, 211, 238, 0.4),
          0 0 40px rgba(34, 211, 238, 0.2)
        `,
        filter: "brightness(1.2) saturate(1.3)",
      }}
    >
      {words[currentIndex]}
    </span>
  )
}
