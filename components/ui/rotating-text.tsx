"use client"

import { useState, useEffect } from "react"

interface RotatingTextProps {
  words: string[]
  className?: string
  interval?: number
}

export function RotatingText({ words, className = "", interval = 3000 }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, interval)

    return () => clearInterval(timer)
  }, [words.length, interval])

  return <span className={`inline-block transition-all duration-500 ${className}`}>{words[currentIndex]}</span>
}
