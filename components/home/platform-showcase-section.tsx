"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, MessageCircle, Calendar, BarChart3 } from 'lucide-react'
import Image from "next/image"
import { GlowingOrbCta } from "@/components/ui/glowing-orb-cta"

const features = [
  {
    id: "ads",
    title: "AI Ad Creation",
    description: "Generate high-converting ads across all platforms in seconds. Our AI analyzes market trends to create compelling copy and visuals.",
    icon: Zap,
    color: "text-purple-400",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%281%29-ZugAYI9lJ9YJgiElrlX5WB4LhrG8M8.jpeg",
  },
  {
    id: "support",
    title: "24/7 AI Customer Service",
    description: "Provide instant, human-like support to your customers anytime. Our AI resolves queries, handles requests, and escalates when needed.",
    icon: MessageCircle,
    color: "text-cyan-400",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%282%29-i2KgysOXqYvqJfLbKznyq5HpTFWTo5.jpeg",
  },
  {
    id: "booking",
    title: "Automated Appointment Booking",
    description: "Let our AI manage your calendar. It schedules, confirms, and reminds clients about appointments, reducing no-shows.",
    icon: Calendar,
    color: "text-green-400",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%286%29-Au6IOdh0i9aQ4ixFQ7zWHCR13KEdwI.jpeg",
  },
  {
    id: "analytics",
    title: "Real-time Business Analytics",
    description: "Get actionable insights from your data. Our AI tracks KPIs, generates reports, and predicts trends to help you make smarter decisions.",
    icon: BarChart3,
    color: "text-orange-400",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%287%29-nIzTU0F2ksvHm9NrhnxzF6KLY1IM7V.jpeg",
  },
]

export function PlatformShowcaseSection() {
  const [activeFeature, setActiveFeature] = useState(features[0])

  return (
    <section className="relative py-20 sm:py-32 px-4 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/20 to-black"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            One Platform,
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Infinite Possibilities</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Discover how SuccessNOW AI integrates every aspect of your business into a single, intelligent ecosystem.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4">
            <div className="space-y-4">
              {features.map((feature) => (
                <Card
                  key={feature.id}
                  onClick={() => setActiveFeature(feature)}
                  className={`cursor-pointer transition-all duration-300 border backdrop-blur-sm ${
                    activeFeature.id === feature.id
                      ? 'bg-blue-900/30 border-cyan-500/50 scale-105'
                      : 'bg-gray-900/20 border-gray-800 hover:border-cyan-700/30'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg bg-gray-800 ${activeFeature.id === feature.id ? 'bg-cyan-900/50' : ''}`}>
                        <feature.icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <Card className="relative overflow-hidden bg-gray-900/30 backdrop-blur-md border border-gray-800 shadow-2xl shadow-cyan-500/10 min-h-[450px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="p-8 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <activeFeature.icon className={`w-8 h-8 ${activeFeature.color}`} />
                      <h3 className="text-2xl font-bold text-white">{activeFeature.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{activeFeature.description}</p>
                  </div>
                  <div className="relative w-full h-64 rounded-lg overflow-hidden border border-gray-700">
                    <Image
                      src={activeFeature.image || "/placeholder.svg"}
                      alt={activeFeature.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Card>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to see it in action?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Talk to our AI specialist right now and get a personalized demo of the features that matter most to you.
          </p>
          <div className="flex justify-center">
            <GlowingOrbCta 
              size="lg"
              label="Get a Live AI-Powered Demo"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
