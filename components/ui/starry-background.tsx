"use client"

import { useEffect, useState } from "react"

interface Star {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
  color: string
}

export default function StarryBackground() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generateStars = () => {
      const starCount = 150 // Number of stars
      const newStars: Star[] = []

      const colors = [
        "#ffffff", // White
        "#00BFFF", // Your brand blue
        "#87CEEB", // Sky blue
        "#E6E6FA", // Lavender
        "#F0F8FF", // Alice blue
        "#FFE4E1", // Misty rose (slight pink tint)
      ]

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100, // Percentage
          y: Math.random() * 100, // Percentage
          size: Math.random() * 3 + 1, // 1-4px
          opacity: Math.random() * 0.8 + 0.2, // 0.2-1
          twinkleSpeed: Math.random() * 3 + 2, // 2-5 seconds
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }

      setStars(newStars)
    }

    generateStars()
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Nebula-like gradient overlays */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-purple-900/10 via-transparent to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-radial from-blue-800/10 via-transparent to-transparent rounded-full blur-3xl" />

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px ${star.color}, 0 0 ${star.size * 4}px ${star.color}`,
            animationDuration: `${star.twinkleSpeed}s`,
            animationDelay: `${Math.random() * star.twinkleSpeed}s`,
          }}
        />
      ))}

      {/* Shooting stars */}
      <div className="shooting-star"></div>
      <div className="shooting-star" style={{ animationDelay: "3s", top: "20%" }}></div>
      <div className="shooting-star" style={{ animationDelay: "6s", top: "60%" }}></div>
    </div>
  )
}
