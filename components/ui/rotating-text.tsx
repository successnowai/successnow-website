"use client"

import { useState, useEffect } from "react"

interface RotatingTextProps {
  words: string[]
  className?: string
  interval?: number
}

export function RotatingText({ words, className = "", interval = 2000 }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
        setIsVisible(true)
      }, 200)
    }, interval)

    return () => clearInterval(timer)
  }, [words, interval])

  return (
    <span
      className={`transition-all duration-200 ${
        isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-2"
      } ${className}`}
    >
      {words[currentIndex]}
    </span>
  )
}

export default RotatingText
