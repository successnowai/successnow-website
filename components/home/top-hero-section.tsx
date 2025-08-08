"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Calendar } from 'lucide-react'
import Link from "next/link"

const rotatingWords = [
  "captures",
  "converts", 
  "qualifies",
  "books",
  "closes",
  "nurtures",
  "follows up",
  "engages"
]

export function TopHeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900/30"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[40vw] h-[40vw] bg-cyan-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-[10%] right-[5%] w-[30vw] h-[30vw] bg-purple-500/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-white/5 border-white/10 backdrop-blur-xl rounded-3xl shadow-2xl">
            <CardContent className="p-8 sm:p-12 lg:p-16 text-center">
              {/* Main Headline */}
              <div className="mb-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                  AI Systems with the best AI
                  <br />
                  agents that
                </h1>
                
                {/* Dynamic Rotating Text */}
                <div className="h-20 sm:h-24 lg:h-28 flex items-center justify-center mb-4">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent"
                  >
                    {rotatingWords[currentWordIndex]}
                  </motion.span>
                </div>

                {/* "Leads" Text */}
                <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-turquoise-400 bg-clip-text text-transparent drop-shadow-lg">
                  Leads
                </h2>
              </div>

              {/* Subheading */}
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                Let our AI Superagents and AI bots close leads, book appointments, and reply to client inquiries—24/7. <span className="font-semibold text-white">Never lose a lead again.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button 
                  size="lg" 
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  LIVE DEMO
                </Button>
                
                <Link href="/book">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-pink-500/25 transition-all duration-300 flex items-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    Book an AI Consult
                  </Button>
                </Link>
              </div>

              {/* Promotional Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="bg-white/10 border-pink-500/30 backdrop-blur-xl max-w-2xl mx-auto">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="text-2xl">🔥</span>
                      <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                        LIMITED TIME: 90% OFF
                      </span>
                      <span className="text-2xl">🔥</span>
                    </div>
                    <p className="text-gray-300 text-lg mb-2">
                      The SUCCESSNOW Platform Project - Usually $35,000, Now Just $3,488
                    </p>
                    <p className="text-green-400 font-semibold text-lg">
                      + 2 MONTHS FREE Platform Access (Save $1,994)
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
