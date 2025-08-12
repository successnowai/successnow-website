"use client"

import { motion } from "framer-motion"
import { AlertTriangle, ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AiAgentAlert() {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 via-orange-900/30 to-red-900/30" />

      {/* Pulsing alert background */}
      <div className="absolute inset-0 bg-red-500/5 animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border-2 border-red-500/40 rounded-2xl p-8 text-center backdrop-blur-sm"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-red-400 animate-pulse" />
            <span className="text-red-400 font-bold text-lg uppercase tracking-wide">Urgent Business Alert</span>
            <AlertTriangle className="w-8 h-8 text-red-400 animate-pulse" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Your Competitors Are Using <span className="text-red-400">AI Agents</span> Right Now
          </h2>

          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
            While you're manually handling calls and emails, smart businesses are using AI to capture leads 24/7, book
            appointments instantly, and dominate their markets.
            <span className="text-red-400 font-bold"> Don't get left behind.</span>
          </p>

          <div className="flex items-center justify-center gap-2 mb-8">
            <Clock className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 font-semibold">Every day you wait, you lose more market share</span>
          </div>

          <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold px-10 py-5 text-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-red-500/30"
            >
              Get AI Working For You NOW
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </Link>

          <p className="text-gray-400 mt-4 text-sm">Setup takes 5 minutes. Results start immediately.</p>
        </motion.div>
      </div>
    </section>
  )
}
