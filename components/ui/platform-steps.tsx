"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Users, MessageSquare, Target, BarChart3, Zap, Shield, Trophy } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "AI Lead Generation",
    emoji: "🎯",
    icon: Target,
    description: "Our AI identifies and captures high-quality leads automatically",
    features: [
      "24/7 automated lead capture",
      "Multi-channel lead generation",
      "Advanced targeting algorithms",
      "Real-time lead scoring",
    ],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
  },
  {
    id: 2,
    title: "Intelligent Follow-Up",
    emoji: "💬",
    icon: MessageSquare,
    description: "Smart AI conversations that nurture leads and book appointments",
    features: [
      "Personalized messaging sequences",
      "Natural conversation flow",
      "Appointment scheduling integration",
      "Multi-touch follow-up campaigns",
    ],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
  },
  {
    id: 3,
    title: "Customer Engagement",
    emoji: "🤝",
    icon: Users,
    description: "Build relationships and trust through personalized interactions",
    features: [
      "Behavioral trigger responses",
      "Customer preference learning",
      "Engagement scoring",
      "Relationship building automation",
    ],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
  },
  {
    id: 4,
    title: "Performance Analytics",
    emoji: "📊",
    icon: BarChart3,
    description: "Track, measure, and optimize your business performance",
    features: [
      "Real-time dashboard analytics",
      "ROI tracking and reporting",
      "Conversion optimization insights",
      "Performance benchmarking",
    ],
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
  },
  {
    id: 5,
    title: "Process Automation",
    emoji: "⚡",
    icon: Zap,
    description: "Streamline operations and eliminate manual tasks",
    features: [
      "Workflow automation",
      "Task scheduling and management",
      "Integration with existing tools",
      "Process optimization",
    ],
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
  },
  {
    id: 6,
    title: "Quality Assurance",
    emoji: "🛡️",
    icon: Shield,
    description: "Ensure consistent quality and compliance across all interactions",
    features: [
      "Quality monitoring and scoring",
      "Compliance tracking",
      "Performance standards enforcement",
      "Continuous improvement protocols",
    ],
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30",
  },
  {
    id: 7,
    title: "Success Optimization",
    emoji: "🏆",
    icon: Trophy,
    description: "Continuously optimize for maximum growth and success",
    features: [
      "Success metric tracking",
      "Growth opportunity identification",
      "Strategic recommendations",
      "Long-term success planning",
    ],
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
  },
]

export function PlatformSteps() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length)
    setIsAutoPlaying(false)
  }

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length)
    setIsAutoPlaying(false)
  }

  const goToStep = (index: number) => {
    setCurrentStep(index)
    setIsAutoPlaying(false)
  }

  const currentStepData = steps[currentStep]

  return (
    <div className="relative">
      {/* Starry Background */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-blue-900/30 to-purple-900/50"></div>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-8">
          {/* Step Navigation */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-2">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => goToStep(index)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    index === currentStep
                      ? `bg-gradient-to-r ${currentStepData.color} text-white shadow-lg scale-110`
                      : "bg-white/20 text-white/70 hover:bg-white/30 hover:scale-105"
                  }`}
                >
                  {step.id}
                </button>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="text-center mb-8">
            <div
              className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${currentStepData.color} mb-6 shadow-2xl`}
            >
              <span className="text-3xl">{currentStepData.emoji}</span>
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">
              Step {currentStepData.id}: {currentStepData.title}
            </h3>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              {currentStepData.description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {currentStepData.features.map((feature, index) => (
                <div
                  key={index}
                  className={`${currentStepData.bgColor} ${currentStepData.borderColor} border rounded-xl p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentStepData.color}`}></div>
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevStep}
              className="flex items-center space-x-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>

            <div className="flex items-center space-x-4">
              <span className="text-white/70 text-sm">
                {currentStep + 1} of {steps.length}
              </span>
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isAutoPlaying
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                }`}
              >
                {isAutoPlaying ? "Auto" : "Manual"}
              </button>
            </div>

            <button
              onClick={nextStep}
              className="flex items-center space-x-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105"
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="w-full bg-white/20 rounded-full h-2">
              <div
                className={`h-2 rounded-full bg-gradient-to-r ${currentStepData.color} transition-all duration-500`}
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
