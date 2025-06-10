"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface Star {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
  color: string
  pulseIntensity: number
  fadeDirection: number
}

interface ShootingStar {
  id: number
  startX: number
  startY: number
  endX: number
  endY: number
  duration: number
  delay: number
  size: number
}

export default function StarryBackground() {
  const [stars, setStars] = useState<Star[]>([])
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([])

  useEffect(() => {
    const generateStars = () => {
      const starCount = 200
      const newStars: Star[] = []

      const colors = [
        "#ffffff", // White
        "#00BFFF", // Your brand blue
        "#87CEEB", // Sky blue
        "#E6E6FA", // Lavender
        "#F0F8FF", // Alice blue
        "#FFE4E1", // Misty rose
        "#B0E0E6", // Powder blue
        "#ADD8E6", // Light blue
      ]

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.9 + 0.1,
          twinkleSpeed: Math.random() * 4 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulseIntensity: Math.random() * 0.8 + 0.2,
          fadeDirection: Math.random() > 0.5 ? 1 : -1,
        })
      }

      setStars(newStars)
    }

    const generateShootingStars = () => {
      const regularShootingStars = 8 // Increased regular shooting stars for other sections
      const newShootingStars: ShootingStar[] = []

      // Regular shooting stars (avoiding top hero section)
      for (let i = 0; i < regularShootingStars; i++) {
        const startX = Math.random() * 120 + 80
        const startY = Math.random() * 50 + 35 // Start from 35% down (avoiding top hero)
        const endX = startX - (Math.random() * 100 + 80)
        const endY = startY + (Math.random() * 40 + 20)

        newShootingStars.push({
          id: i,
          startX,
          startY,
          endX,
          endY,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 15,
          size: Math.random() * 3 + 2,
        })
      }

      setShootingStars(newShootingStars)
    }

    generateStars()
    generateShootingStars()
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep space gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Multiple nebula layers for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/15 via-transparent to-transparent" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-purple-900/10 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-blue-800/10 via-transparent to-transparent blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-radial from-indigo-900/8 via-transparent to-transparent blur-3xl transform -translate-x-1/2 -translate-y-1/2" />

      {/* Gentle hero section nebula - no animation */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-radial from-blue-900/8 via-blue-800/4 to-transparent blur-2xl" />

      {/* Dynamic pulsating stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full star-pulse"
          style={
            {
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              boxShadow: `
              0 0 ${star.size * 2}px ${star.color},
              0 0 ${star.size * 4}px ${star.color},
              0 0 ${star.size * 6}px ${star.color}40
            `,
              animation: `starPulse ${star.twinkleSpeed}s ease-in-out infinite`,
              animationDelay: `${Math.random() * star.twinkleSpeed}s`,
              "--pulse-intensity": star.pulseIntensity,
              "--base-opacity": star.opacity,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Shooting stars - only in non-hero sections */}
      {shootingStars.map((shootingStar) => (
        <div
          key={shootingStar.id}
          className="absolute shooting-star-enhanced"
          style={
            {
              "--start-x": `${shootingStar.startX}%`,
              "--start-y": `${shootingStar.startY}%`,
              "--end-x": `${shootingStar.endX}%`,
              "--end-y": `${shootingStar.endY}%`,
              "--duration": `${shootingStar.duration}s`,
              "--delay": `${shootingStar.delay}s`,
              "--size": `${shootingStar.size}px`,
              animation: `shootingStarEnhanced var(--duration) linear infinite`,
              animationDelay: `var(--delay)`,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Additional cosmic dust effect */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
