"use client"

import { useEffect, useState, useMemo } from "react"

function StarryBackground() {
  const [shootingStars, setShootingStars] = useState<number[]>([])

  // Memoize static stars to prevent re-renders
  const staticStars = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => {
      const colors = ["#FF1493", "#00FFFF", "#FF69B4", "#40E0D0", "#FF6B9D", "#00CED1"]
      const color = colors[Math.floor(Math.random() * colors.length)]
      return {
        id: i,
        width: Math.random() * 2 + 1,
        height: Math.random() * 2 + 1,
        color,
        left: Math.random() * 100,
        top: Math.random() * 100,
        opacity: Math.random() * 0.8 + 0.3,
        animationDuration: Math.random() * 2 + 2,
        animationDelay: Math.random() * 3,
      }
    })
  }, [])

  // Memoize energy orbs
  const energyOrbs = useMemo(() => {
    return Array.from({ length: 3 }, (_, i) => ({
      id: i,
      width: Math.random() * 200 + 100,
      height: Math.random() * 200 + 100,
      background:
        i % 3 === 0
          ? "radial-gradient(circle, rgba(255, 20, 147, 0.1) 0%, rgba(255, 20, 147, 0.03) 50%, transparent 70%)"
          : i % 3 === 1
            ? "radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, rgba(0, 255, 255, 0.03) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(64, 224, 208, 0.1) 0%, rgba(64, 224, 208, 0.03) 50%, transparent 70%)",
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDuration: Math.random() * 20 + 15,
      animationDelay: Math.random() * 8,
    }))
  }, [])

  useEffect(() => {
    const stars = Array.from({ length: 6 }, (_, i) => i)
    setShootingStars(stars)

    const interval = setInterval(() => {
      setShootingStars([...stars].sort(() => Math.random() - 0.5))
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 will-change-transform">
      {/* Deep cyberpunk base - simplified gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Reduced intensity neon gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-600/15 to-cyan-400/20" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-400/10 to-pink-500/15" />

      {/* Simplified pulsing energy waves */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500/20 via-cyan-400/15 to-transparent animate-pulse will-change-opacity"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-cyan-400/20 via-pink-500/15 to-transparent animate-pulse will-change-opacity"
          style={{ animationDuration: "5s", animationDelay: "2s" }}
        />
      </div>

      {/* Optimized neon grid */}
      <div className="absolute inset-0 opacity-15">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
                 linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255, 20, 147, 0.3) 1px, transparent 1px)
               `,
            backgroundSize: "50px 50px",
            animation: "gridPulse 8s ease-in-out infinite",
          }}
        />
      </div>

      {/* Optimized cyberpunk stars */}
      {staticStars.map((star) => (
        <div
          key={`cyber-star-${star.id}`}
          className="absolute rounded-full will-change-transform"
          style={{
            width: `${star.width}px`,
            height: `${star.height}px`,
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.width * 2}px ${star.color}`,
            left: `${star.left}%`,
            top: `${star.top}%`,
            opacity: star.opacity,
            animation: `cyberPulse ${star.animationDuration}s ease-in-out infinite`,
            animationDelay: `${star.animationDelay}s`,
          }}
        />
      ))}

      {/* Reduced electric shooting stars */}
      {shootingStars.map((star) => (
        <div
          key={`electric-shooting-${star}`}
          className="absolute w-1 h-0.5 rounded-full will-change-transform"
          style={{
            background: "linear-gradient(45deg, #FF1493, #00FFFF)",
            boxShadow: "0 0 10px #FF1493, 0 0 20px #00FFFF",
            left: `${Math.random() * 70 + 30}%`,
            top: `${Math.random() * 50}%`,
            animation: `electricShootingStar ${Math.random() * 3 + 2}s linear ${Math.random() * 20}s infinite`,
          }}
        />
      ))}

      {/* Reduced floating energy orbs */}
      {energyOrbs.map((orb) => (
        <div
          key={`energy-orb-${orb.id}`}
          className="absolute rounded-full blur-xl will-change-transform"
          style={{
            width: `${orb.width}px`,
            height: `${orb.height}px`,
            background: orb.background,
            left: `${orb.left}%`,
            top: `${orb.top}%`,
            animation: `energyFloat ${orb.animationDuration}s ease-in-out infinite`,
            animationDelay: `${orb.animationDelay}s`,
          }}
        />
      ))}

      {/* Reduced lightning traces */}
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          key={`lightning-${i}`}
          className="absolute opacity-20 will-change-opacity"
          style={{
            width: "1px",
            height: `${Math.random() * 150 + 80}px`,
            background: "linear-gradient(to bottom, transparent, #00FFFF, #FF1493, transparent)",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `lightning ${Math.random() * 4 + 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 6}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  )
}

export { StarryBackground }
export default StarryBackground
