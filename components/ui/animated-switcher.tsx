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
  interval = 3000,
  className = "text-gray-300 text-sm",
  emoji = "✨",
  scrolling = true,
}: AnimatedSwitcherProps) {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (scrolling) return // Don't use fade animation for scrolling mode

    const fadeTimer = setInterval(() => {
      setFade(true)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length)
        setFade(false)
      }, 300) // Faster fade transition
    }, interval)

    return () => clearInterval(fadeTimer)
  }, [phrases, interval, scrolling])

  // Ensure visibility on mount
  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (scrolling) {
    // Create a continuous scrolling text with emojis
    const scrollingText = phrases.map((phrase) => `${phrase} ${emoji}`).join(" ")
    const duplicatedText = `${scrollingText} ${scrollingText} ${scrollingText}` // Triple for seamless loop

    return (
      <div className={`overflow-hidden whitespace-nowrap ${className}`}>
        <div
          className="inline-block animate-scroll"
          style={{
            animationDuration: `${interval}ms`,
            animationDelay: `-${Math.random() * 5000}ms`, // Random start position for variety
          }}
        >
          {duplicatedText}
        </div>
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
          .animate-scroll {
            animation: scroll linear infinite;
          }
        `}</style>
      </div>
    )
  }

  if (!isVisible || phrases.length === 0) {
    return <span className={className}>{phrases[0] || ""}</span>
  }

  return (
    <span 
      className={`transition-opacity duration-300 ease-in-out ${
        fade ? "opacity-0" : "opacity-100"
      } ${className}`}
    >
      {phrases[index]}
    </span>
  )
}
