"use client"

import { useEffect, useState } from "react"

export default function StarryBackground() {
  const [shootingStars, setShootingStars] = useState<number[]>([])

  useEffect(() => {
    const stars = Array.from({ length: 10 }, (_, i) => i)
    setShootingStars(stars)
    const interval = setInterval(() => setShootingStars([...stars].sort(() => Math.random() - 0.5)), 30_000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep-space gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Nebula layers */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/15 via-transparent to-transparent" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-purple-900/10 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-blue-800/10 via-transparent to-transparent blur-3xl" />

      {/* Static stars */}
      {Array.from({ length: 100 }).map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            backgroundColor: Math.random() > 0.8 ? "#00BFFF" : "#ffffff",
            boxShadow: `0 0 ${Math.random() * 4 + 2}px ${Math.random() > 0.8 ? "#00BFFF" : "#ffffff"}`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.8 + 0.2,
            animation: `starPulse ${Math.random() * 3 + 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <div
          key={`shooting-${star}`}
          className="shooting-star"
          style={{
            left: `${Math.random() * 70 + 30}%`,
            top: `${Math.random() * 50}%`,
            animation: `shootingStar ${Math.random() * 3 + 2}s linear ${Math.random() * 15}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

/* NEW LINE ↓↓↓ */
export { StarryBackground } // named export for backward compatibility
