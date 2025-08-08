"use client"

import { Button } from "@/components/ui/button"
import { GlowingOrbCta } from "@/components/ui/glowing-orb-cta"
import { ArrowRight, CheckCircle, Zap } from 'lucide-react'
import { motion } from "framer-motion"
import { RotatingText } from "@/components/ui/rotating-text"

export function MainHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900/30 opacity-80"></div>
      <div className="absolute inset-0 mix-blend-overlay" style={{ backgroundImage: 'url(/images/neon-cyberpunk-bg.png)', backgroundSize: 'cover', opacity: 0.1 }}></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 mb-6 text-sm font-semibold tracking-wider text-cyan-300 uppercase bg-cyan-900/30 rounded-full border border-cyan-700/50 backdrop-blur-sm">
            The Future of Business Automation is Here
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Automate Your Business with
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              SuccessNOW AI
            </span>
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            <span>Our AI handles everything: </span>
            <RotatingText
              words={[
                "Lead Generation",
                "Customer Support",
                "Appointment Booking",
                "Sales Follow-ups",
                "Marketing Campaigns",
              ]}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <GlowingOrbCta 
            size="xl" 
            label="Click to talk to our AI Agent"
            className="transform hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20"
            >
              <Zap className="w-5 h-5 mr-2" />
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400 px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              Book a Live Demo
            </Button>
          </div>

          <div className="flex justify-center items-center gap-4 sm:gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
