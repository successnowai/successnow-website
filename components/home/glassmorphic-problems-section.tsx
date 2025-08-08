'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { AlertTriangle, Clock, Zap, TrendingUp, Star, Moon } from 'lucide-react'

const problemCards = [
  {
    id: 1,
    type: 'Problem #1',
    badge: '3-second response time',
    title: "You're Losing 97% of Your Website Visitors",
    subtitle: "Every visitor that leaves without engaging is money walking out the door.",
    solution: "Instant Voice & Chat Engagement",
    description: "Our AI agents engage every visitor within 3 seconds - before they can leave. No more silent websites.",
    quote: "Turn 97% lost traffic into qualified conversations instantly.",
    color: 'red',
    icon: AlertTriangle,
    progress: 15
  },
  {
    id: 2,
    type: 'Problem #2',
    badge: '24/7 operation',
    title: "Your Leads Go Cold While You Sleep",
    subtitle: "Every hour you don't follow up, your conversion rate drops by 10%.",
    solution: "24/7 AI Lead Nurturing",
    description: "Your AI never sleeps, never takes breaks, never forgets to follow up. It's working while your competitors are sleeping.",
    quote: "It's like having a sales, support, and admin team—all in one AI-powered engine.",
    color: 'purple',
    icon: Moon,
    progress: 30
  },
  {
    id: 3,
    type: 'Problem #3',
    badge: '100% automation',
    title: "You're Drowning in Manual Tasks",
    subtitle: "Spending hours on calls, emails, and follow-ups instead of closing deals?",
    solution: "AI SuperAgents Handle Everything",
    description: "Call, text, email, and DM every lead instantly. Book appointments directly into your calendar. Create CRM notes automatically.",
    quote: "Never drop the ball on a follow-up again.",
    color: 'orange',
    icon: Clock,
    progress: 45
  },
  {
    id: 4,
    type: 'Solution',
    badge: '48-72 hour setup',
    title: "Setup Usually Takes Months",
    subtitle: "Most AI solutions require teams of developers and months of setup. Not this one.",
    solution: "Seamless Integration",
    description: "Get up and running in 48-72 hours. Works with any website, integrates with your existing tools.",
    quote: "Complete AI automation in minutes, not months.",
    color: 'blue',
    icon: Zap,
    progress: 60
  },
  {
    id: 5,
    type: 'Opportunity #1',
    badge: 'Reactivate cold leads',
    title: "Your Old Leads Are Pure Gold",
    subtitle: "That list of 'dead' leads? They're worth $10,000s in untapped revenue.",
    solution: "AI Lead Reactivation",
    description: "Upload your cold leads and let our Voice AI call them all back with personalized offers and re-engagement campaigns.",
    quote: "Transform dead leads into active opportunities.",
    color: 'green',
    icon: TrendingUp,
    progress: 75
  },
  {
    id: 6,
    type: 'Opportunity #2',
    badge: 'Automated referrals',
    title: "You're Missing Free Marketing",
    subtitle: "Your happiest customers could be sending you referrals and reviews—but they're not.",
    solution: "Automated Reviews & Referrals",
    description: "The Review Bot and Referral Bot ensure your happiest clients leave great reviews and send referrals without being asked.",
    quote: "Turn customer satisfaction into lead generation—automatically.",
    color: 'yellow',
    icon: Star,
    progress: 90
  }
]

const colorClasses = {
  red: {
    progress: 'bg-red-500',
    badge: 'bg-red-500/20 border-red-500/30 text-red-400',
    button: 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
    quote: 'text-red-400 border-red-500/30'
  },
  purple: {
    progress: 'bg-purple-500',
    badge: 'bg-purple-500/20 border-purple-500/30 text-purple-400',
    button: 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
    quote: 'text-purple-400 border-purple-500/30'
  },
  orange: {
    progress: 'bg-orange-500',
    badge: 'bg-orange-500/20 border-orange-500/30 text-orange-400',
    button: 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
    quote: 'text-orange-400 border-orange-500/30'
  },
  blue: {
    progress: 'bg-blue-500',
    badge: 'bg-blue-500/20 border-blue-500/30 text-blue-400',
    button: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
    quote: 'text-blue-400 border-blue-500/30'
  },
  green: {
    progress: 'bg-green-500',
    badge: 'bg-green-500/20 border-green-500/30 text-green-400',
    button: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
    quote: 'text-green-400 border-green-500/30'
  },
  yellow: {
    progress: 'bg-yellow-500',
    badge: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400',
    button: 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700',
    quote: 'text-yellow-400 border-yellow-500/30'
  }
}

export function GlassmorphicProblemsSection() {
  const [currentCard, setCurrentCard] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [timeLeft, setTimeLeft] = useState(3)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setCurrentCard((current) => (current + 1) % problemCards.length)
          return 3
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const currentCardData = problemCards[currentCard]
  const colors = colorClasses[currentCardData.color as keyof typeof colorClasses]

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(14,165,233,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main Card Container */}
        <div 
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-700 rounded-full mb-8 overflow-hidden">
            <div 
              className={`h-full ${colors.progress} transition-all duration-300`}
              style={{ width: `${currentCardData.progress}%` }}
            />
          </div>

          {/* Badge */}
          <div className="flex items-center justify-center mb-8">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${colors.badge}`}>
              <currentCardData.icon className="w-5 h-5" />
              <span className="font-semibold">{currentCardData.type}</span>
            </div>
            <span className="text-gray-400 ml-4">{currentCardData.badge}</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-6 leading-tight">
            {currentCardData.title}
          </h2>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-center mb-12 font-medium ${
            currentCardData.color === 'red' ? 'text-red-400' :
            currentCardData.color === 'purple' ? 'text-purple-400' :
            currentCardData.color === 'orange' ? 'text-orange-400' :
            currentCardData.color === 'blue' ? 'text-blue-400' :
            currentCardData.color === 'green' ? 'text-green-400' :
            'text-yellow-400'
          }`}>
            {currentCardData.subtitle}
          </p>

          {/* Solution Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {currentCardData.solution}
              </h3>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              {currentCardData.description}
            </p>

            {/* Quote */}
            <div className={`border-l-4 pl-6 py-4 ${colors.quote}`}>
              <p className="text-lg md:text-xl font-medium italic">
                "{currentCardData.quote}"
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-8">
            <Button 
              size="lg"
              className={`${colors.button} text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
            >
              Fix This Problem Now →
            </Button>
            <p className="text-gray-400 mt-4">
              See how SuccessNow solves this in your business
            </p>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <button 
              onClick={() => setCurrentCard(currentCard > 0 ? currentCard - 1 : problemCards.length - 1)}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              ←
            </button>
            
            <div className="flex gap-2">
              {problemCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCard(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentCard 
                      ? colors.progress 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={() => setCurrentCard((currentCard + 1) % problemCards.length)}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              →
            </button>
          </div>

          {/* Timer */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>
                Next problem in {timeLeft}s • Hover to pause
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
