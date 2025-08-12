"use client"

import { useState, useEffect } from "react"

const words = ["Unstoppable", "Profitable", "Automated", "Dominant", "Efficient", "Powerful"]

export default function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length)
        setIsVisible(true)
      }, 300)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <span
      className={`inline-block transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
      style={{
        textShadow: `
          0 0 10px #00BFFF,
          0 0 20px #00BFFF,
          0 0 30px #00BFFF,
          0 0 40px #00BFFF
        `,
      }}
    >
      {words[currentIndex]}
    </span>
  )
}
