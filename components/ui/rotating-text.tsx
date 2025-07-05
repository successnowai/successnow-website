"use client"

import { useEffect, useState } from "react"

interface RotatingTextProps {
  words: string[]
  className?: string
  interval?: number
}

export function RotatingText({ words, className = "", interval = 3000 }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (words.length === 0) return
    const timer = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
        setIsVisible(true)
      }, 300) // Half of transition duration
    }, interval)

    return () => clearInterval(timer)
  }, [words, interval])

  if (words.length === 0) {
    return null
  }

  return (
    <span
      className={`inline-block transition-all duration-500 ease-in-out ${
        isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-2"
      } ${className}`}
      aria-live="polite"
    >
      {words[currentIndex]}
    </span>
  )
}
