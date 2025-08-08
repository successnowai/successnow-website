"use client"

import { useState, useEffect } from "react"
import { RotatingText } from "@/components/ui/rotating-text"
import { AnimatedPlatformShowcase } from "./animated-platform-showcase"

export function PlatformShowcaseSection() {
  const [isLoading, setIsLoading] = useState(true)
  const [showLoadingSkeleton, setShowLoadingSkeleton] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // Adjust delay as needed

    // Keep skeleton for a bit longer to avoid flash of content if loading is very fast
    const skeletonTimer = setTimeout(() => {
      setShowLoadingSkeleton(false)
    }, 500)

    return () => {
      clearTimeout(timer)
      clearTimeout(skeletonTimer)
    }
  }, [])

  if (isLoading || showLoadingSkeleton) {
    return (
      <div className="py-12 md:py-20 px-4 bg-transparent relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Skeleton for Header */}
          <div className="text-center mb-10 md:mb-16 animate-pulse">
            <div className="inline-flex items-center gap-2 bg-slate-700/50 rounded-full px-6 py-3 mb-6 h-12 w-72 mx-auto"></div>
            <div className="h-10 md:h-14 bg-slate-700/50 rounded w-3/4 md:w-1/2 mx-auto mb-4"></div>
            <div className="h-6 bg-slate-700/50 rounded w-full md:w-3/4 mx-auto max-w-2xl"></div>
          </div>

          {/* Skeleton for Progress Indicators */}
          <div className="flex justify-center space-x-1 sm:space-x-2 mb-8 md:mb-12 animate-pulse">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="h-2.5 w-8 sm:w-12 md:w-16 bg-slate-700/50 rounded-full"></div>
            ))}
          </div>

          {/* Skeleton for Feature Card */}
          <div className="bg-slate-800/30 backdrop-blur-md p-6 sm:p-8 md:p-12 rounded-xl md:rounded-2xl shadow-2xl min-h-[400px] md:min-h-[450px] flex flex-col md:flex-row items-center gap-6 md:gap-10 animate-pulse">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-700/50 rounded-full flex-shrink-0"></div>
            <div className="flex-grow w-full">
              <div className="h-4 bg-slate-700/50 rounded w-20 mb-3"></div>
              <div className="h-8 md:h-10 bg-slate-700/50 rounded w-3/4 mb-4"></div>
              <div className="h-6 bg-slate-700/50 rounded w-full mb-3"></div>
              <div className="h-6 bg-slate-700/50 rounded w-5/6 mb-6"></div>
              <div className="h-10 bg-slate-700/50 rounded w-40"></div>
            </div>
          </div>

          {/* Navigation Buttons Skeleton */}
          <div className="flex justify-between items-center mt-8 md:mt-12 animate-pulse">
            <div className="h-10 w-24 bg-slate-700/50 rounded-md"></div>
            <div className="h-10 w-24 bg-slate-700/50 rounded-md"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* New hero headline with two-line layout */}
      <div className="text-center mb-12 px-4">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
          {/* First line - static white text */}
          <div className="text-white mb-2">THE BEST AI AGENTS THAT</div>
          {/* Second line - dynamic blue text */}
          <div className="text-[#4DA6FF]">
            <RotatingText
              words={[
                "OPTIMIZE WEBSITES",
                "ENGAGE LEADS",
                "LAUNCH PAID ADS",
                "OPTIMIZE FOR AI SEARCH",
                "FOREVER FOLLOW UP",
                "GET 5 STAR REVIEWS",
                "REACTIVATE OLD LEADS",
                "WORK 24/7 ON AUTOPILOT",
                "NEVER CALL IN SICK",
              ]}
              interval={2500}
              className="font-extrabold"
            />
          </div>
        </div>
      </div>

      {/* Existing cascading cards / animated showcase */}
      <AnimatedPlatformShowcase />
    </div>
  )
}
