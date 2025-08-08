"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Bot, Brain, Zap, Target, TrendingUp, Users, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: "AI Chat Assistant",
    description: "Engage visitors 24/7 with intelligent, human-like conversations that convert leads.",
    details: [
      "Natural Language Understanding",
      "Customizable conversation flows",
      "Seamless handover to human agents",
    ],
  },
  {
    icon: Brain,
    title: "Smart Lead Qualification",
    description: "Automatically qualify leads based on your criteria, so your sales team focuses on hot prospects.",
    details: ["Custom scoring rules", "Real-time data enrichment", "CRM integration"],
  },
  {
    icon: Zap,
    title: "Instant Response Time",
    description: "Capture and engage leads the moment they show interest, boosting conversion rates.",
    details: ["Sub-second response time", "24/7 availability", "Reduces lead decay"],
  },
  {
    icon: Target,
    title: "Conversion Optimization",
    description: "Our AI learns from every interaction to continuously improve its performance and your results.",
    details: ["A/B testing for responses", "Performance analytics", "Self-improving algorithms"],
  },
  {
    icon: TrendingUp,
    title: "Advanced Analytics",
    description: "Get deep insights into customer behavior, conversation performance, and ROI.",
    details: ["Real-time dashboards", "Conversation transcripts", "Goal tracking"],
  },
  {
    icon: Users,
    title: "Multi-Channel Support",
    description: "Deploy your AI assistant across your website, social media, and messaging apps.",
    details: ["Website widget", "Facebook Messenger", "WhatsApp & SMS"],
  },
]

export function AnimatedPlatformShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + newDirection
      if (newIndex < 0) return features.length - 1
      if (newIndex >= features.length) return 0
      return newIndex
    })
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const feature = features[currentIndex]

  return (
    <div className="py-12 md:py-20 px-4 bg-transparent relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Progress Indicators */}
        <div className="flex justify-center space-x-1 sm:space-x-2 mb-8 md:mb-12">
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1)
                setCurrentIndex(i)
              }}
              className="w-full"
            >
              <div
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  i === currentIndex ? "bg-blue-500" : "bg-gray-700 hover:bg-gray-600"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Feature Card */}
        <div className="relative h-[450px] md:h-[400px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full h-full"
            >
              <Card className="bg-slate-800/30 backdrop-blur-md p-6 sm:p-8 md:p-12 rounded-xl md:rounded-2xl shadow-2xl h-full">
                <CardContent className="flex flex-col md:flex-row items-center justify-center text-center md:text-left h-full gap-6 md:gap-10">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                      <feature.icon className="w-12 h-12 md:w-16 md:h-16 text-white" />
                    </div>
                  </motion.div>
                  <div className="flex-grow">
                    <p className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-2">
                      Feature {currentIndex + 1} / {features.length}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex items-center justify-center md:justify-start text-gray-300">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8 md:mt-12">
          <Button
            variant="outline"
            className="bg-white/10 text-white hover:bg-white/20 border-white/20"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          <Button
            variant="outline"
            className="bg-white/10 text-white hover:bg-white/20 border-white/20"
            onClick={() => paginate(1)}
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
