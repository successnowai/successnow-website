"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const steps = [
  {
    id: 1,
    badge: "Step 1/7",
    title: "Smart AI Website with Live Chat Agent",
    description:
      "Every website, landing page, and funnel is custom-built to your brand. Our smart AI sites are designed to convert visitors into leads and clients—all on autopilot with our LIVE AI Agent.",
    quote: "Every visitor becomes a conversation. Every conversation becomes an opportunity.",
    buttonText: "Get Started with Step 1",
    bgGradient: "from-blue-600/20 to-cyan-600/30",
    borderColor: "border-blue-500/30",
    badgeColor: "bg-cyan-500",
    buttonColor: "from-cyan-500 to-blue-600",
    icon: "🌐",
  },
  {
    id: 2,
    badge: "Step 2/7",
    title: "Paid Ads Created & Managed by AdsNOW.ai",
    description:
      "Let our Ads SuperAgent create, launch, and optimize winning ads across Google, Facebook, Instagram, YouTube, and TikTok—24/7.",
    quote: "No experience needed. AI handles it like a pro.",
    buttonText: "Get Started with Step 2",
    bgGradient: "from-green-600/20 to-emerald-600/30",
    borderColor: "border-green-500/30",
    badgeColor: "bg-green-500",
    buttonColor: "from-green-500 to-emerald-600",
    icon: "📱",
  },
  {
    id: 3,
    badge: "Step 3/7",
    title: "AI SuperAgents That Act Like a Full Business Team",
    description:
      "Call, text, email, and DM every lead and client instantly. Book appointments directly into your calendar. Create CRM notes on every interaction. Never drop the ball on a follow-up.",
    quote: "It's like having a sales, support, and admin team—all in one AI-powered engine.",
    buttonText: "Get Started with Step 3",
    bgGradient: "from-orange-600/20 to-yellow-600/30",
    borderColor: "border-orange-500/30",
    badgeColor: "bg-orange-500",
    buttonColor: "from-orange-500 to-yellow-600",
    icon: "🤖",
  },
  {
    id: 4,
    badge: "Step 4/7",
    title: "Nurture Clients & Drive Repeat Business",
    description: "The Nurturing Bot keeps your clients engaged, educated, and loyal—driving consistent sales.",
    quote: "Keep your clients engaged and educated automatically.",
    buttonText: "Get Started with Step 4",
    bgGradient: "from-pink-600/20 to-rose-600/30",
    borderColor: "border-pink-500/30",
    badgeColor: "bg-pink-500",
    buttonColor: "from-pink-500 to-rose-600",
    icon: "💖",
  },
  {
    id: 5,
    badge: "Step 5/7",
    title: "Get Referrals & 5-Star Reviews on Autopilot",
    description:
      "The Review Bot and Referral Bot ensure your happiest clients leave great reviews and send referrals without being asked.",
    quote: "Turn customer satisfaction into lead generation—automatically.",
    buttonText: "Get Started with Step 5",
    bgGradient: "from-yellow-600/20 to-amber-600/30",
    borderColor: "border-yellow-500/30",
    badgeColor: "bg-yellow-500",
    buttonColor: "from-yellow-500 to-amber-600",
    icon: "⭐",
  },
  {
    id: 6,
    badge: "Step 6/7",
    title: "Dominate Search with AI-Powered SEO",
    description:
      "The SEO Bot improves your Google & Maps rankings using keyword optimization, backlink strategies, and content automation.",
    quote: "Combines AI speed with expert precision for top search visibility.",
    buttonText: "Get Started with Step 6",
    bgGradient: "from-purple-600/20 to-indigo-600/30",
    borderColor: "border-purple-500/30",
    badgeColor: "bg-purple-500",
    buttonColor: "from-purple-500 to-indigo-600",
    icon: "🔍",
  },
  {
    id: 7,
    badge: "Step 7/7",
    title: "Enjoy True Freedom: Only Handle Booked Appointments",
    description: "Everything else—from ads to engagement to reminders—is handled for you.",
    quote: "You show up. The AI & experts do the rest.",
    buttonText: "Get Started with Step 7",
    bgGradient: "from-red-600/20 to-orange-600/30",
    borderColor: "border-red-500/30",
    badgeColor: "bg-red-500",
    buttonColor: "from-red-500 to-orange-600",
    icon: "🚀",
  },
]

export function PlatformSteps() {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length)
  }

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length)
  }

  const goToStep = (index: number) => {
    setCurrentStep(index)
  }

  const step = steps[currentStep]

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Main Step Card */}
      <div
        className={`relative bg-gradient-to-br ${step.bgGradient} backdrop-blur-md border ${step.borderColor} rounded-3xl shadow-2xl overflow-hidden min-h-[500px]`}
      >
        {/* Starry Background Effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div
            className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-20 w-1 h-1 bg-white rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-10 right-10 w-1 h-1 bg-white rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse"
            style={{ animationDelay: "2.5s" }}
          ></div>
        </div>

        {/* Large Circle Background Element */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/4">
          <div className="w-96 h-96 rounded-full bg-white/5 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="space-y-6">
              {/* Step Badge */}
              <div
                className={`inline-flex items-center px-4 py-2 ${step.badgeColor} rounded-full text-white font-semibold text-sm`}
              >
                <span className="mr-2 text-lg">{step.icon}</span>
                {step.badge}
              </div>

              {/* Title */}
              <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">{step.title}</h3>

              {/* Description */}
              <p className="text-lg text-white/90 leading-relaxed">{step.description}</p>

              {/* Quote */}
              <blockquote className="border-l-4 border-white/30 pl-4 italic text-white/80 text-lg">
                {step.quote}
              </blockquote>

              {/* CTA Button */}
              <button
                className={`bg-gradient-to-r ${step.buttonColor} px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg`}
              >
                {step.buttonText}
              </button>
            </div>

            {/* Visual Element */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full h-64 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <div className="text-8xl opacity-50">{step.icon}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center mt-8 space-x-4">
        {/* Previous Button */}
        <button
          onClick={prevStep}
          className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        {/* Step Indicators */}
        <div className="flex space-x-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => goToStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentStep ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextStep}
          className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  )
}
