"use client"

import type React from "react"
import { useInView } from "@/hooks/use-intersection-observer"
import { AnimatedSwitcher } from "@/components/ui/animated-switcher"
import { VoiceSnippetPlayer } from "@/components/voice/voice-snippet-player"

export default function FeatureStack() {
  const { ref, isInView } = useInView()

  const features = [
    {
      emoji: "🌐",
      title: "AI Smart Website",
      checkmark: "✅",
      benefits: [
        "Convert Visitors 24/7",
        "Answer Questions Instantly",
        "Qualify Leads While You Sleep",
        "Never Miss an Opportunity",
      ],
      buttonText: "See AI Websites",
      description:
        "AI-powered websites that convert visitors 24/7, answer questions instantly, and qualify leads automatically while you sleep.",
    },
    {
      emoji: "📱",
      title: "Client App",
      checkmark: "✅",
      benefits: [
        "Keep Clients Engaged",
        "Send Push Notifications Auto",
        "Gamify Client Experience",
        "Build Stronger Relationships",
      ],
      buttonText: "See Client Apps",
      description:
        "Custom client apps that keep customers engaged with automated push notifications and gamified experiences.",
    },
    {
      emoji: "🚀",
      title: "AdsNOW™ AI Ads",
      checkmark: "✅",
      benefits: [
        "Generate Leads 60% Cheaper",
        "Beat Competitors Without Agency",
        "Optimize Ad Spend Automatically",
        "Launch Ads with 1 Click",
      ],
      buttonText: "See AI Advertising",
      description:
        "AI-powered advertising that generates leads 60% cheaper, optimizes ad spend automatically, and launches campaigns with one click.",
    },
    {
      emoji: "🤖",
      title: "AI Voice Agent + Bot Army",
      checkmark: "✅",
      benefits: [
        "Close Deals While You Sleep",
        "Handle Objections Automatically",
        "Book Meetings Without Effort",
        "Follow-up Every Lead",
      ],
      buttonText: "See AI Agents",
      description:
        "AI voice agents and bot army that close deals while you sleep, handle objections automatically, and follow up with every lead.",
    },
    {
      emoji: "🔍",
      title: "SeoNOW™ SEO",
      checkmark: "✅",
      benefits: [
        "Dominate Google Search",
        "Outrank Competitors Auto",
        "Get Found by High-Intent Buyers",
        "Generate Leads While You Sleep",
      ],
      buttonText: "See AI SEO",
      description:
        "AI-powered SEO that dominates Google search, outranks competitors automatically, and generates leads from high-intent buyers.",
    },
    {
      emoji: "📲",
      title: "AI Social Posting",
      checkmark: "✅",
      benefits: [
        "Post Consistently Auto",
        "Maintain Brand Voice Auto",
        "Engage Followers While You Sleep",
        "Create Viral Content Daily",
      ],
      buttonText: "See AI Social",
      description:
        "AI social media management that posts consistently, maintains your brand voice, and creates viral content daily.",
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
        <div className="flex justify-center mt-4">
          <VoiceSnippetPlayer
            text="Your complete AI Super Agent Stack includes AI-powered websites, voice agents, automated advertising, SEO optimization, social media management, and client apps - all working together to grow your business 24/7."
            category="features"
            variant="compact"
          />
        </div>
      </h2>
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer animate-fade-up ${
              isInView ? "animate-show" : ""
            } animate-delay-${(index % 6) * 100}`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{feature.emoji}</span>
                <h3 className="font-bold text-white text-base sm:text-lg">{feature.title}</h3>
              </div>
              <span className="text-green-400 text-xl">{feature.checkmark}</span>
            </div>

            <div className="mb-6 min-h-[60px] flex items-center">
              <p className="text-gray-300 text-sm sm:text-base">
                <span className="text-white font-bold">AI that </span>
                <AnimatedSwitcher
                  phrases={feature.benefits}
                  className="text-blue-400 font-bold inline"
                  interval={3000 + index * 500}
                  scrolling={false}
                />
              </p>
            </div>

            {index < 3 && (
              <div className="mb-4">
                <VoiceSnippetPlayer text={feature.description} category="features" variant="compact" />
              </div>
            )}

            <button
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base min-h-[44px]"
              onClick={() => (window.location.href = "/demo")}
            >
              {feature.buttonText} →
            </button>
          </div>
        ))}
      </div>

      {/* See All Features Button - Changed to Bright Green */}
      <div className="mt-8 sm:mt-10 text-center px-4">
        <button
          className="w-full sm:w-auto bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl glow-button-green-reduced hover:from-[#059669] hover:to-[#047857]"
          onClick={() => (window.location.href = "/demo")}
        >
          Launch Instant Demo NOW
        </button>
      </div>
    </section>
  )
}
