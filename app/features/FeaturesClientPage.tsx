"use client"

import Navbar from "@/components/navigation/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RotatingText } from "@/components/ui/rotating-text"
import { useInView } from "@/hooks/use-intersection-observer"
import { Play, Check, ArrowRight } from "lucide-react"
import Footer from "@/components/home/footer"

export default function FeaturesClientPage() {
  const { ref: heroRef, isInView: heroIsInView } = useInView()
  const { ref: featuresRef, isInView: featuresIsInView } = useInView()
  const { ref: demoRef, isInView: demoIsInView } = useInView()
  const { ref: ctaRef, isInView: ctaIsInView } = useInView()

  const rotatingWords = ["Features", "Tools", "Capabilities", "Systems", "Solutions"]

  const allFeatures = [
    {
      title: "AI Smart Website",
      description: "Your digital storefront fully built & ready to convert traffic.",
      benefits: [
        "Convert visitors 24/7 without staffing",
        "Answer questions instantly",
        "Qualify leads while you sleep",
      ],
      emoji: "🌐",
      category: "Core",
    },
    {
      title: "Self-Selling Funnels",
      description: "Funnels that sell & book clients without you.",
      benefits: [
        "Book appointments while you golf",
        "Generate sales while on vacation",
        "Close deals while spending time with family",
      ],
      emoji: "🎯",
      category: "Marketing",
    },
    {
      title: "No-Brainer Offers",
      description: "Lead magnets & offers made to convert.",
      benefits: ["Create irresistible lead magnets", "Convert cold traffic instantly", "Turn browsers into buyers"],
      emoji: "💎",
      category: "Marketing",
    },
    {
      title: "Client App",
      description: "Build a branded mobile experience with push, gamification, more.",
      benefits: ["Keep clients engaged 24/7", "Send push notifications automatically", "Gamify the client experience"],
      emoji: "📱",
      category: "Core",
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
      category: "Core",
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
      category: "Core",
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
      category: "Core",
    },
    {
      title: "Calendar + Booking",
      description: "Automated booking, reminders, follow-ups.",
      benefits: ["Never miss an appointment again", "Reduce no-shows by 80%", "Automate all scheduling tasks"],
      emoji: "📅",
      category: "Operations",
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
      category: "Core",
    },
    {
      title: "AI Instant Onboarding",
      description: "AI-assisted training & onboarding instantly.",
      benefits: ["Get up and running in minutes", "AI guides you through setup", "No technical skills required"],
      emoji: "⚡",
      category: "Operations",
    },
    {
      title: "AI Accountability Coach",
      description: "Your virtual coach keeping you focused daily.",
      benefits: ["Stay on track with daily goals", "Get personalized action plans", "Never lose momentum again"],
      emoji: "🎯",
      category: "Operations",
    },
    {
      title: "Lifetime Resources",
      description: "Templates, tools, funnels & more for life.",
      benefits: ["Access to all future updates", "Proven templates and scripts", "Continuous value for life"],
      emoji: "♾️",
      category: "Support",
    },
    {
      title: "AI Reviews & Referrals",
      description: "AI detects happy clients & requests reviews/referrals.",
      benefits: [
        "Generate 5-star reviews automatically",
        "Turn happy clients into referrals",
        "Build social proof that converts",
      ],
      emoji: "⭐",
      category: "Marketing",
    },
    {
      title: "AI Email Marketing",
      description: "Automated email sequences that convert.",
      benefits: [
        "Personalized email campaigns at scale",
        "Behavior-triggered sequences",
        "A/B testing and optimization",
      ],
      emoji: "📧",
      category: "Marketing",
    },
    {
      title: "AI Content Generator",
      description: "Create blog posts, articles, and website content.",
      benefits: [
        "Generate SEO-optimized content",
        "Create industry-specific articles",
        "Maintain consistent publishing schedule",
      ],
      emoji: "✍️",
      category: "Marketing",
    },
    {
      title: "AI Analytics Dashboard",
      description: "Real-time insights and performance tracking.",
      benefits: [
        "Track ROI across all channels",
        "Get AI-powered recommendations",
        "Identify opportunities for growth",
      ],
      emoji: "📊",
      category: "Operations",
    },
    {
      title: "AI Customer Support",
      description: "24/7 automated support for your clients.",
      benefits: ["Answer FAQs instantly", "Resolve common issues automatically", "Escalate complex problems to humans"],
      emoji: "🛟",
      category: "Support",
    },
    {
      title: "AI Lead Scoring",
      description: "Prioritize your hottest prospects automatically.",
      benefits: ["Focus on high-value opportunities", "Identify ready-to-buy signals", "Optimize your sales process"],
      emoji: "🔥",
      category: "Sales",
    },
  ]

  const categories = ["Core", "Marketing", "Operations", "Sales", "Support"]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0f1a] to-[#00274D] text-white">
      <Navbar currentPage="features" />

      {/* Hero Section */}
      <section ref={heroRef} className="text-center py-12 sm:py-16 px-4 sm:px-6 md:px-10 overflow-hidden pt-20">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="block text-white animate-fadeTextUp">All SuccessNOW AI™</span>
            <span className="block animate-fadeTextUp animation-delay-300">
              <RotatingText words={rotatingWords} className="text-[#00BFFF]" interval={2500} />
            </span>
            <span className="block text-white animate-fadeTextUp animation-delay-600">in one platform</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeTextUp animation-delay-900 px-2">
            Explore our complete suite of <strong className="text-white">AI-powered tools</strong> designed to automate
            your business, generate leads, and close sales 24/7.
          </p>

          <div className="flex flex-col gap-3 sm:gap-4 mt-6 sm:mt-8 animate-fadeTextUp animation-delay-1200 px-4">
            <Button
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-sm sm:text-base"
              onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
            >
              Launch Instant Demo NOW →
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-md hover:bg-[#00BFFF] hover:text-white transition-all duration-200 hover:scale-105 text-sm sm:text-base bg-transparent"
              onClick={() => (window.location.href = "/payment")}
            >
              Get AI NOW
            </Button>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00BFFF] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="sticky top-[73px] z-20 bg-black/80 backdrop-blur-md border-b border-[#00BFFF]/20 py-2 sm:py-3">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between overflow-x-auto">
          <div className="flex space-x-4 sm:space-x-6">
            {categories.map((category) => (
              <a
                key={category}
                href={`#${category.toLowerCase()}`}
                className="text-gray-300 hover:text-[#00BFFF] whitespace-nowrap text-xs sm:text-sm font-medium transition-colors"
              >
                {category}
              </a>
            ))}
          </div>
          <a
            href="#demo"
            className="text-[#00BFFF] whitespace-nowrap text-xs sm:text-sm font-medium hover:text-white transition-colors"
          >
            Demo
          </a>
        </div>
      </div>

      {/* All Features Section */}
      <section ref={featuresRef} className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {categories.map((category, categoryIndex) => (
            <div
              key={category}
              id={category.toLowerCase()}
              className={`mb-12 sm:mb-16 ${categoryIndex > 0 ? "pt-6 sm:pt-8" : ""}`}
            >
              <h2
                className={`text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white animate-fade-up ${
                  featuresIsInView ? "animate-show" : ""
                } animate-delay-${categoryIndex * 100}`}
              >
                {category} Features
              </h2>
              <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {allFeatures
                  .filter((feature) => feature.category === category)
                  .map((feature, index) => (
                    <Card
                      key={feature.title}
                      className={`bg-[#1c2230] border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,191,255,0.2)] cursor-pointer animate-fade-up ${
                        featuresIsInView ? "animate-show" : ""
                      } animate-delay-${(index % 6) * 100 + categoryIndex * 100}`}
                    >
                      <CardContent className="p-4 sm:p-6">
                        <div className="mb-3 sm:mb-4 text-xl sm:text-2xl">{feature.emoji}</div>
                        <h3 className="mb-2 font-bold text-white text-base sm:text-lg">{feature.title}</h3>
                        <p className="text-gray-300 text-sm mb-3 sm:mb-4">{feature.description}</p>
                        <ul className="space-y-1 sm:space-y-2">
                          {feature.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start">
                              <Check className="h-4 w-4 sm:h-5 sm:w-5 text-[#00BFFF] mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300 text-xs sm:text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" ref={demoRef} className="py-16 px-6 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-8 text-white animate-fade-up ${demoIsInView ? "animate-show" : ""}`}>
            See SuccessNOW AI in Action
          </h2>
          <p
            className={`text-gray-300 text-lg mb-12 max-w-2xl mx-auto animate-fade-up ${
              demoIsInView ? "animate-show" : ""
            } animate-delay-100`}
          >
            Experience how our AI superagents convert leads, book appointments, and nurture clients 24/7 — while you
            focus on growing your business.
          </p>

          <div className={`mx-auto max-w-3xl animate-fade-up ${demoIsInView ? "animate-show" : ""} animate-delay-200`}>
            <div className="relative aspect-video bg-black/40 backdrop-blur-sm rounded-xl border-2 border-[#00BFFF]/30 overflow-hidden group cursor-pointer hover:border-[#00BFFF] transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00274D]/50 to-black/50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#00BFFF] rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white font-semibold text-lg">SuccessNOW AI Demo</h4>
                <p className="text-gray-200 text-sm">Watch our AI handle leads, bookings, and follow-ups</p>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-[#00BFFF] text-white px-3 py-1 rounded-full text-sm font-semibold">Live Demo</span>
              </div>
            </div>
          </div>

          {/* Demo Form */}
          <div
            className={`mt-12 max-w-md mx-auto bg-[#00274D]/80 backdrop-blur-sm text-white p-8 rounded-xl shadow-2xl border border-[#00BFFF]/20 animate-fade-up ${
              demoIsInView ? "animate-show" : ""
            } animate-delay-300`}
          >
            <h3 className="text-2xl font-bold mb-2 text-center">
              Try Our AI Demo <br /> <span className="text-[#00BFFF]">Instantly</span>
            </h3>
            <p className="text-center text-sm text-gray-300 mb-6">See it in action for your business</p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
                required
              />
              <Button
                type="submit"
                className="w-full bg-[#00BFFF] text-[#00274D] font-bold py-4 px-4 rounded-md hover:bg-[#00BFFF]/90 transition-all duration-200 hover:scale-105"
              >
                🚀 Start My Instant Demo
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 px-6">
        <div
          className={`max-w-4xl mx-auto text-center bg-[#00274D]/80 backdrop-blur-sm p-12 rounded-2xl border border-[#00BFFF]/30 animate-fade-up ${
            ctaIsInView ? "animate-show" : ""
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-[#00BFFF]">Ready to Launch Your AI Business System?</h2>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Join successful businesses already using SuccessNOW AI to automate lead generation, client acquisition, and
            growth — while getting back their time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="px-8 py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-base"
              onClick={() => (window.location.href = "/payment")}
            >
              Get AI NOW <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="px-8 py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-md hover:bg-[#00BFFF] hover:text-white transition-all duration-200 hover:scale-105 text-base bg-transparent"
              onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
            >
              Launch Instant Demo NOW
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
