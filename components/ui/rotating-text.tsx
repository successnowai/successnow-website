"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface RotatingTextProps {
  words: string[]
  className?: string
  interval?: number
}

export function RotatingText({ words, className, interval = 2000 }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
        setIsVisible(true)
      }, 300)
    }, interval)

    return () => clearInterval(timer)
  }, [words.length, interval])

  return (
    <span
      className={cn(
        "inline-block transition-all duration-300 neon-text-glow",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
        className,
      )}
    >
      {words[currentIndex]}
    </span>
  )
}
