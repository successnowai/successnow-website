"use client"

import { useEffect, useState } from "react"

interface AnimatedSwitcherProps {
  phrases: string[]
  interval?: number
  className?: string
  emoji?: string
  scrolling?: boolean
}

export function AnimatedSwitcher({
  phrases,
  interval = 25000,
  className = "text-gray-300 text-sm",
  emoji = "✨",
  scrolling = true,
}: AnimatedSwitcherProps) {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    if (scrolling) return // Don't use fade animation for scrolling mode

    const fadeTimer = setInterval(() => {
      setFade(true)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length)
        setFade(false)
      }, 500)
    }, interval)

    return () => clearInterval(fadeTimer)
  }, [phrases, interval, scrolling])

  if (scrolling) {
    // Create a continuous scrolling text with emojis
    const scrollingText = phrases.map((phrase) => `${phrase} ${emoji}`).join(" ")
    const duplicatedText = `${scrollingText} ${scrollingText} ${scrollingText}` // Triple for seamless loop

    return (
      <div className={`overflow-hidden whitespace-nowrap ${className}`}>
        <div
          className="inline-block"
          style={{
            animation: `scroll-text ${interval}ms linear infinite`,
            animationDelay: `-${Math.random() * 5000}ms`, // Random start position for variety
          }}
        >
          {duplicatedText}
        </div>
      </div>
    )
  }

  return (
    <div
      className={`transition-opacity duration-500 ease-in-out min-h-[3rem] flex items-center ${fade ? "opacity-0" : "opacity-100"} ${className}`}
    >
      <span className="mr-2">{emoji}</span>
      {phrases[index]}
    </div>
  )
}
