"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-intersection-observer"

export default function CTASection() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="get-started"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-15"
    >
      <h2
        className={`mb-4 sm:mb-6 text-center text-xl sm:text-2xl md:text-3xl font-bold text-white animate-fade-up ${isInView ? "animate-show" : ""}`}
      >
        Launch Your AI Business – 90% Off Setup
      </h2>
      <div className={`text-center animate-fade-up ${isInView ? "animate-show" : ""} animate-delay-200 px-4`}>
        <Button
          size="lg"
          className="w-full sm:w-auto bg-[#00BFFF] text-[#00274D] hover:bg-[#00BFFF]/90 font-bold px-6 py-3 text-sm sm:text-lg transition-transform duration-200 hover:scale-105"
          onClick={() => (window.location.href = "/payment")}
        >
          Get AI NOW
        </Button>
      </div>
    </section>
  )
}
