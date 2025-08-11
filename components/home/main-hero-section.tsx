"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Zap, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import VoiceDemoModal from "@/components/ui/voice-demo-modal"

export default function MainHeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Black Background with Overlay */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/95 to-black" />
      <div className="absolute inset-0 bg-black/80" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-8"
        >
          <Zap className="w-4 h-4 text-cyan-400" />
          <span className="text-white font-medium brightness-110">AI Super Agents Now Available</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
        >
          <span className="text-white brightness-110">Never Lose A</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent brightness-110">
            Lead Again
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed brightness-110"
        >
          Our AI Super Agents convert, book, and nurture leads 24/7 — while you get back your time.
          <br />
          <span className="text-cyan-300 font-semibold brightness-110">Start your free trial today.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link href="/signup">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 group">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <Button
            variant="outline"
            onClick={() => setIsModalOpen(true)}
            className="border-2 border-gray-200 text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 group brightness-110"
          >
            <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-cyan-400 mr-2" />
              <span className="text-3xl font-bold text-white brightness-110">300%</span>
            </div>
            <p className="text-gray-200 brightness-110">Average Lead Increase</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-6 h-6 text-cyan-400 mr-2" />
              <span className="text-3xl font-bold text-white brightness-110">24/7</span>
            </div>
            <p className="text-gray-200 brightness-110">AI Agent Availability</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Zap className="w-6 h-6 text-cyan-400 mr-2" />
              <span className="text-3xl font-bold text-white brightness-110">{"<"}30s</span>
            </div>
            <p className="text-gray-200 brightness-110">Response Time</p>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 pt-8 border-t border-gray-700"
        >
          <p className="text-gray-200 mb-6 brightness-110">Trusted by 10,000+ businesses worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder for company logos */}
            <div className="w-24 h-8 bg-gray-600 rounded opacity-50" />
            <div className="w-24 h-8 bg-gray-600 rounded opacity-50" />
            <div className="w-24 h-8 bg-gray-600 rounded opacity-50" />
            <div className="w-24 h-8 bg-gray-600 rounded opacity-50" />
          </div>
        </motion.div>
      </div>

      {/* Voice Demo Modal */}
      <VoiceDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
