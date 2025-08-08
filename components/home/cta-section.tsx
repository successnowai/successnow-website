"use client"

import { Button } from "@/components/ui/button"
import { GlowingOrbCta } from "@/components/ui/glowing-orb-cta"
import { ArrowRight, Zap } from 'lucide-react'
import Link from "next/link"

export function CtaSection() {
  return (
    <section className="relative py-20 sm:py-32 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-black to-black"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Ready to Grow Your Business on 
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Autopilot?</span>
        </h2>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Join thousands of businesses that have transformed their operations with SuccessNOW AI. Get started today and let our AI do the heavy lifting.
        </p>
        
        <div className="flex justify-center mb-12">
          <GlowingOrbCta 
            size="xl"
            label="Start Your Free Trial"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/signup">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20"
            >
              <Zap className="w-5 h-5 mr-2" />
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href="/demo">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400 px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              Book a Live Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
