"use client"

import type React from "react"
import { useState } from "react"
import { useInView } from "@/hooks/use-intersection-observer"
import { Button } from "@/components/ui/button"
import { DemoPopup } from "@/components/ui/demo-popup"

export default function LiveDemo() {
  const { ref, isInView } = useInView()
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false)

  const handleDemoClick = () => {
    setIsDemoPopupOpen(true)
  }

  return (
    <section
      id="demo"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-15"
    >
      <h2
        className={`mb-4 sm:mb-6 text-center text-xl sm:text-2xl md:text-3xl font-bold text-white animate-fade-up ${isInView ? "animate-show" : ""}`}
      >
        Try Our AI Agent Live – See It, Hear It, Test It
      </h2>
      <div
        className={`mx-auto max-w-4xl text-center animate-fade-up ${isInView ? "animate-show" : ""} animate-delay-200`}
      >
        <div className="aspect-video w-full rounded-lg bg-[#1c2230] border border-gray-700 flex items-center justify-center">
          <div className="text-center px-4">
            <div className="mb-3 sm:mb-4 text-2xl sm:text-4xl">🤖</div>
            <p className="text-gray-400 text-sm sm:text-base">Live AI Demo</p>
            <Button
              onClick={handleDemoClick}
              className="mt-4 bg-gradient-to-r from-[#00BFFF] to-[#0080FF] hover:from-[#0099FF] hover:to-[#0066CC] text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Start Voice Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Demo Popup */}
      <DemoPopup isOpen={isDemoPopupOpen} onClose={() => setIsDemoPopupOpen(false)} />
    </section>
  )
}
