"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-intersection-observer"
import { AnimatedSwitcher } from "@/components/ui/animated-switcher"

export default function FeatureStack() {
  const { ref, isInView } = useInView()

  const features = [
    {
      title: "AI Smart Website",
      description: "Your digital storefront fully built & ready to convert traffic.",
      benefits: [
        "Convert visitors 24/7 without staffing",
        "Answer questions instantly",
        "Qualify leads while you sleep",
      ],
      emoji: "🌐",
    },
    {
      title: "Client App",
      description: "Build a branded mobile experience with push, gamification, more.",
      benefits: ["Keep clients engaged 24/7", "Send push notifications automatically", "Gamify the client experience"],
      emoji: "📱",
    },
    {
      title: "AdsNOW™ AI Ads",
      description: "Launch ads with 1 click across every platform.",
      benefits: [
        "Beat competitors without hiring an agency",
        "Optimize ad spend automatically",
        "Generate leads at 60% lower cost",
      ],
      emoji: "🚀",
    },
    {
      title: "AI Voice Agent + Bot Army",
      description: "Every lead followed-up, booked & closed — automatically.",
      benefits: [
        "Close deals while you sleep",
        "Handle objections automatically",
        "Book meetings without human effort",
      ],
      emoji: "🤖",
    },
    {
      title: "SeoNOW™ SEO",
      description: "Dominate organic Google + local search.",
      benefits: [
        "Outrank competitors automatically",
        "Get found by high-intent buyers",
        "Generate leads while you sleep",
      ],
      emoji: "🔍",
    },
    {
      title: "AI Social Posting",
      description: "On-brand social posts published for you.",
      benefits: [
        "Post consistently without effort",
        "Maintain brand voice automatically",
        "Engage followers while you sleep",
      ],
      emoji: "📲",
    },
  ]

  return (
    <section
      id="features"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="mx-auto max-w-6xl px-4 sm:px-5 py-12 sm:py-15"
    >
      <h2
        className={`mb-6 sm:mb-8 text-center text-2xl sm:text-3xl font-bold text-white animate-fade-up ${isInView ? "animate-show" : ""}`}
      >
        Your AI Super Agent Stack – Core Features
      </h2>
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card
            key={index}
            className={`bg-[#1c2230] border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,191,255,0.2)] cursor-pointer animate-fade-up ${
              isInView ? "animate-show" : ""
            } animate-delay-${(index % 6) * 100}`}
          >
            <CardContent className="p-4 sm:p-5">
              <h3 className="mb-2 font-bold text-white flex items-center text-base sm:text-lg">
                <span className="mr-2 text-base sm:text-lg">{feature.emoji}</span>
                {feature.title}
              </h3>
              <AnimatedSwitcher
                phrases={feature.benefits}
                className="text-gray-300 text-xs sm:text-sm"
                interval={25000 + index * 2000}
                emoji={feature.emoji}
                scrolling={true}
              />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* See All Features Button */}
      <div className="mt-8 sm:mt-10 text-center px-4">
        <Button
          className="w-full sm:w-auto bg-[#00BFFF] text-[#00274D] hover:bg-[#00BFFF]/90 font-bold px-6 sm:px-8 py-3 text-sm sm:text-base rounded-md transition-transform duration-200 hover:scale-105"
          onClick={() => (window.location.href = "/demo")}
        >
          Launch Instant Demo NOW
        </Button>
      </div>
    </section>
  )
}
