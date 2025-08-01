"use client"

import { useState, useEffect } from "react"

const texts = ["Your Industry", "Local Business", "Online Sales", "Lead Generation", "Customer Service"]

export default function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <span className="inline-block min-w-[200px] text-left">
      <span className="animate-fadeInUp">{texts[currentIndex]}</span>
    </span>
  )
}
