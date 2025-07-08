"use client"

import { useState, useEffect } from "react"

interface RotatingTextProps {
  words: string[]
  className?: string
  interval?: number
}

export function RotatingText({ words, className = "", interval = 2500 }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (words.length === 0) return

    const timer = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
        setIsVisible(true)
      }, 200)
    }, interval)

    return () => clearInterval(timer)
  }, [words.length, interval])

  if (words.length === 0) return null

  return (
    <span
      className={`inline-block transition-all duration-300 ease-in-out ${
        isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-2"
      } ${className}`}
    >
      {words[currentIndex]}
    </span>
  )
}
