"use client"
import { useEffect, useState } from "react"

interface Star {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  color: string
  animationDelay: number
}

interface ShootingStar {
  id: number
  x: number
  y: number
  animationDelay: number
}

const StarryBackground = () => {
  const [stars, setStars] = useState<Star[]>([])
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([])

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars: Star[] = []
      const colors = ["#0ea5e9", "#d946ef", "#ffffff", "#38bdf8", "#e879f9"]

      for (let i = 0; i < 150; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          animationDelay: Math.random() * 3,
        })
      }
      setStars(newStars)
    }

    // Generate shooting stars
    const generateShootingStars = () => {
      const newShootingStars: ShootingStar[] = []
      for (let i = 0; i < 3; i++) {
        newShootingStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 50,
          animationDelay: Math.random() * 8,
        })
      }
      setShootingStars(newShootingStars)
    }

    generateStars()
    generateShootingStars()
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-black/50 animate-pulse"
        style={{ animationDuration: "8s" }}
      />

      {/* Nebula effects */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-brandBlue/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "6s", animationDelay: "0s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brandPurple/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "7s", animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "5s", animationDelay: "4s" }}
      />

      {/* Regular twinkling stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            opacity: star.opacity,
            animationDelay: `${star.animationDelay}s`,
            boxShadow: `0 0 ${star.size * 2}px ${star.color}`,
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((shootingStar) => (
        <div
          key={shootingStar.id}
          className="absolute w-1 h-1 animate-shooting-star"
          style={{
            left: `${shootingStar.x}%`,
            top: `${shootingStar.y}%`,
            animationDelay: `${shootingStar.animationDelay}s`,
            background: "linear-gradient(45deg, transparent, #0ea5e9, #d946ef, transparent)",
            borderRadius: "50%",
            boxShadow: "0 0 6px #0ea5e9, 0 0 12px #d946ef",
          }}
        />
      ))}

      {/* Additional atmospheric effects */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-transparent via-brandBlue/5 to-transparent animate-pulse"
        style={{ animationDuration: "10s" }}
      />
    </div>
  )
}

export default StarryBackground
