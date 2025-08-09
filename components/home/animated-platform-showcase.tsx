"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const platforms = [
  {
    name: "AI Voice Assistant",
    description: "Handles calls, books appointments, and qualifies leads automatically",
    features: ["24/7 Availability", "Natural Conversations", "Appointment Booking"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "AI Chat Bot",
    description: "Engages website visitors and converts them into qualified leads",
    features: ["Instant Responses", "Lead Qualification", "Multi-language Support"],
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "AI Follow-up System",
    description: "Automatically nurtures leads with personalized follow-up sequences",
    features: ["Smart Scheduling", "Personalized Messages", "Conversion Tracking"],
    color: "from-green-500 to-emerald-600",
  },
]

export function AnimatedPlatformShowcase() {
  const [activePlatform, setActivePlatform] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePlatform((prev) => (prev + 1) % platforms.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our AI Platform Ecosystem</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Three powerful AI systems working together to transform your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <Card
              key={index}
              className={`relative p-8 transition-all duration-500 cursor-pointer ${
                index === activePlatform
                  ? "bg-white/10 border-white/20 scale-105"
                  : "bg-white/5 border-white/10 hover:bg-white/8"
              }`}
              onClick={() => setActivePlatform(index)}
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${platform.color} flex items-center justify-center mb-6`}
              >
                <span className="text-2xl">🤖</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{platform.name}</h3>

              <p className="text-gray-300 mb-6">{platform.description}</p>

              <ul className="space-y-2 mb-8">
                {platform.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/demo">
                <Button
                  className={`w-full bg-gradient-to-r ${platform.color} hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-all duration-300`}
                >
                  Learn More
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
