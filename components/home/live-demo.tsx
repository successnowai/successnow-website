"use client"

import type React from "react"

import { useInView } from "@/hooks/use-intersection-observer"

export default function LiveDemo() {
  const { ref, isInView } = useInView()

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
            <p className="text-xs sm:text-sm text-gray-500 mt-2">Interactive demo would be embedded here</p>
          </div>
        </div>
      </div>
    </section>
  )
}
