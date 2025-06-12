"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, Megaphone, Sparkles, HeartHandshake, Star, Search, Rocket, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const platformFeatures = [
  {
    step: 1,
    icon: Bot,
    title: "Smart AI Website with Live Chat Agent",
    description:
      "Every website, landing page, and funnel is custom-built to your brand. Our smart AI sites are designed to convert visitors into leads and clients—all on autopilot with our LIVE AI Agent.",
    quote: "Every visitor becomes a conversation. Every conversation becomes an opportunity.",
    cta: "Get Started with Step 1",
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-blue-900/30",
    borderColor: "border-blue-500/50",
  },
  {
    step: 2,
    icon: Megaphone,
    title: "Paid Ads Created & Managed by AdsNOW.ai",
    description:
      "Let our Ads SuperAgent create, launch, and optimize winning ads across Google, Facebook, Instagram, YouTube, and TikTok—24/7.",
    quote: "No experience needed. AI handles it like a pro.",
    cta: "Get Started with Step 2",
    color: "from-green-400 to-teal-500",
    bgColor: "bg-green-900/30",
    borderColor: "border-green-500/50",
  },
  {
    step: 3,
    icon: Sparkles,
    title: "AI SuperAgents That Act Like a Full Business Team",
    description:
      "Call, text, email, and DM every lead and client instantly. Book appointments directly into your calendar. Create CRM notes on every interaction. Never drop the ball on a follow-up.",
    quote: "It's like having a sales, support, and admin team—all in one AI-powered engine.",
    cta: "Get Started with Step 3",
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-900/30",
    borderColor: "border-yellow-500/50",
  },
  {
    step: 4,
    icon: HeartHandshake,
    title: "Nurture Clients & Drive Repeat Business",
    description: "The Nurturing Bot keeps your clients engaged, educated, and loyal—driving consistent sales.",
    quote: "Keep your clients engaged and educated automatically.",
    cta: "Get Started with Step 4",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-900/30",
    borderColor: "border-pink-500/50",
  },
  {
    step: 5,
    icon: Star,
    title: "Get Referrals & 5-Star Reviews on Autopilot",
    description:
      "The Review Bot and Referral Bot ensure your happiest clients leave great reviews and send referrals without being asked.",
    quote: "Turn customer satisfaction into lead generation—automatically.",
    cta: "Get Started with Step 5",
    color: "from-amber-400 to-yellow-500",
    bgColor: "bg-amber-900/30",
    borderColor: "border-amber-500/50",
  },
  {
    step: 6,
    icon: Search,
    title: "Dominate Search with AI-Powered SEO",
    description:
      "The SEO Bot improves your Google & Maps rankings using keyword optimization, backlink strategies, and content automation.",
    quote: "Combines AI speed with expert precision for top search visibility.",
    cta: "Get Started with Step 6",
    color: "from-indigo-400 to-purple-500",
    bgColor: "bg-indigo-900/30",
    borderColor: "border-indigo-500/50",
  },
  {
    step: 7,
    icon: Rocket,
    title: "Enjoy True Freedom: Only Handle Booked Appointments",
    description: "Everything else—from ads to engagement to reminders—is handled for you.",
    quote: "You show up. The AI & experts do the rest.",
    cta: "Get Started with Step 7",
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-900/30",
    borderColor: "border-red-500/50",
  },
]

export function AnimatedPlatformShowcase() {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setDirection(1)
      setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % platformFeatures.length)
    }, 5000)
  }

  const resetAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    startAutoPlay()
  }

  useEffect(() => {
    startAutoPlay()
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const handleNext = () => {
    setDirection(1)
    setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % platformFeatures.length)
    resetAutoPlay()
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentFeatureIndex((prevIndex) => (prevIndex - 1 + platformFeatures.length) % platformFeatures.length)
    resetAutoPlay()
  }

  const handleDotClick = (index: number) => {
    setDirection(index > currentFeatureIndex ? 1 : -1)
    setCurrentFeatureIndex(index)
    resetAutoPlay()
  }

  const feature = platformFeatures[currentFeatureIndex]
  const Icon = feature.icon

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-5xl h-[550px] md:h-[480px] relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentFeatureIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className={cn(
              "absolute inset-0 p-8 rounded-2xl border flex flex-col md:flex-row items-center gap-8",
              feature.bgColor,
              feature.borderColor,
            )}
          >
            <div className="md:w-1/2 text-center md:text-left">
              <div
                className={cn(
                  "inline-flex items-center gap-3 rounded-full px-4 py-1 mb-4 text-white bg-gradient-to-r",
                  feature.color,
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="font-semibold">
                  Step {feature.step}/{platformFeatures.length}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 mb-6">{feature.description}</p>
              <div className="relative italic text-gray-200 border-l-4 border-blue-400 pl-4 py-2 mb-6">
                {feature.quote}
              </div>
              <Button size="lg" className={cn("bg-gradient-to-r text-white", feature.color)}>
                {feature.cta}
              </Button>
            </div>
            <div className="md:w-1/2 h-64 md:h-full flex items-center justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm">
                <Icon
                  className={cn(
                    "w-32 h-32 md:w-40 md:h-40 bg-clip-text text-transparent bg-gradient-to-r",
                    feature.color,
                  )}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center mt-8 gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          className="bg-transparent text-white hover:bg-white/10"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <div className="flex items-center gap-2">
          {platformFeatures.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                currentFeatureIndex === index ? "bg-blue-400 w-6" : "bg-gray-600 hover:bg-gray-400",
              )}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="bg-transparent text-white hover:bg-white/10"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}
