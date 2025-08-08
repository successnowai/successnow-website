"use client"

import { useState, useEffect } from 'react'

interface RotatingTextProps {
  words: string[]
  className?: string
}

export function RotatingText({ words, className = "" }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <span className={`inline-block transition-all duration-500 ${className}`}>
      {words[currentIndex]}
    </span>
  )
}
