"use client"

import type React from "react"

import Navbar from "@/components/navigation/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RotatingText } from "@/components/ui/rotating-text"
import { useInView } from "@/hooks/use-intersection-observer"
import { ArrowRight, Clock, CheckCircle } from "lucide-react"
import Footer from "@/components/home/footer"
import { useState } from "react"

export default function IndustriesClientPage() {
  const { ref: heroRef, isInView: heroIsInView } = useInView()
  const { ref: currentRef, isInView: currentIsInView } = useInView()
  const { ref: comingSoonRef, isInView: comingSoonIsInView } = useInView()
  const { ref: ctaRef, isInView: ctaIsInView } = useInView()

  const rotatingWords = ["Industries", "Businesses", "Sectors", "Markets", "Niches"]

  const currentIndustries = [
    {
      emoji: "🚗",
      title: "Auto Dealers",
      description:
        "Book more test drives automatically, convert leads 24/7 without staffing, increase financing approvals by 37%",
      features: [
        "Book test drives & confirm appointments automatically",
        "Follow up with cold leads until they're ready to buy",
        "Launch paid ads in 1 click with auto-optimization",
        "Qualify leads and route hot prospects to top salespeople",
      ],
      buttonText: "See AutoDealersNOW",
      slug: "autodealersnow",
      status: "available",
    },
    {
      emoji: "🏡",
      title: "Realtors",
      description:
        "Qualify buyers while you sleep, book showings without lifting a finger, never miss a hot lead again",
      features: [
        "AI pre-qualifies leads and determines buying timeline",
        "Instant appointment setting for qualified prospects",
        "Follow-up on autopilot with personalized messaging",
        "Lead scoring to prioritize your hottest prospects",
      ],
      buttonText: "See RealtorNOW",
      slug: "realtornow",
      status: "available",
    },
    {
      emoji: "🏋️",
      title: "Gyms & Studios",
      description:
        "Fill classes without extra marketing, reduce membership cancellations by 42%, automate follow-ups for no-shows",
      features: [
        "AI follows up post-class or trial with personalized encouragement",
        "Automates renewals & push offers at optimal timing",
        "Social & SMS reminders to boost retention and attendance",
        "Automated class booking and waitlist management",
      ],
      buttonText: "See GymsNOW",
      slug: "gymsnow",
      status: "available",
    },
    {
      emoji: "🧑‍⚖️",
      title: "Lawyers",
      description:
        "Get more qualified clients, book consultations automatically, convert leads while competitors sleep",
      features: [
        "AI handles intake, booking, and follow-ups automatically",
        "5-star reviews triggered automatically after successful cases",
        "Ad creation and optimization specifically for legal advertising compliance",
        "Automated consultation scheduling and reminder system",
      ],
      buttonText: "See LawyersNOW",
      slug: "lawyersnow",
      status: "available",
    },
    {
      emoji: "💆",
      title: "Medspas",
      description:
        "Book more appointments automatically, increase treatment package sales, collect 5-star reviews effortlessly",
      features: [
        "AI confirms appointments and sends automated reminders",
        "Upsells high-margin services during booking and follow-up",
        "Collects 5-star reviews and referrals automatically",
        "Automated post-treatment care instructions and follow-up",
      ],
      buttonText: "See MedspaNOW",
      slug: "medspanow",
      status: "available",
    },
    {
      emoji: "🏦",
      title: "Mortgage Brokers",
      description:
        "Pre-qualify leads without manual work, close more loans with less effort, nurture leads until they're ready to buy",
      features: [
        "AI automates follow-up & document reminders with personalized messaging",
        "Instant demo booking and consultation scheduling",
        "AI explainer assistant on-site to educate prospects",
        "Automated rate alerts and market updates to keep clients engaged",
      ],
      buttonText: "See MortgageNOW",
      slug: "mortgagenow",
      status: "available",
    },
  ]

  const comingSoonIndustries = [
    {
      emoji: "🛡️",
      title: "Insurance Agencies",
      description: "Quote automation, policy renewals, lead nurturing.",
      features: [
        "Automated quote generation and comparison",
        "Policy renewal reminders and upselling",
        "Lead nurturing campaigns for different insurance types",
        "Claims follow-up and customer satisfaction tracking",
      ],
    },
    {
      emoji: "🦴",
      title: "Chiropractors",
      description: "Appointment booking, follow-ups, review generation.",
      features: [
        "Automated appointment scheduling and confirmations",
        "Post-treatment follow-up and care instructions",
        "Review generation after successful treatments",
        "Wellness program enrollment automation",
      ],
    },
    {
      emoji: "🦷",
      title: "Dental Services",
      description: "Cleaning reminders, SEO for local search, patient education.",
      features: [
        "Automated cleaning and checkup reminders",
        "Local SEO optimization for dental practices",
        "Patient education content delivery",
        "Insurance verification and billing automation",
      ],
    },
    {
      emoji: "✨",
      title: "Beauty Spas",
      description: "Upsell automation, loyalty campaigns, review management.",
      features: [
        "Automated upselling of beauty packages",
        "Loyalty program management and rewards",
        "Review collection and reputation management",
        "Seasonal promotion campaigns",
      ],
    },
    {
      emoji: "🧘",
      title: "Wellness Studios",
      description: "Class reminders, content nurturing, studio ads.",
      features: [
        "Yoga, Pilates, and meditation class reminders",
        "Wellness content nurturing sequences",
        "Targeted studio advertising campaigns",
        "Membership retention and engagement",
      ],
    },
    {
      emoji: "💪",
      title: "Personal Trainers",
      description: "Accountability tracking, auto-booking, client motivation.",
      features: [
        "Client accountability and progress tracking",
        "Automated session booking and scheduling",
        "Motivational messaging and check-ins",
        "Nutrition and workout plan delivery",
      ],
    },
    {
      emoji: "🎯",
      title: "Coaches & Consultants",
      description: "Funnel-based onboarding, course management, automation.",
      features: [
        "Automated client onboarding funnels",
        "Course and program management",
        "Client progress tracking and accountability",
        "Upselling and program expansion automation",
      ],
    },
    {
      emoji: "🛒",
      title: "E-commerce & Retail",
      description: "Upsell bots, review generation, cart abandonment recovery.",
      features: [
        "Intelligent upselling and cross-selling bots",
        "Automated review generation campaigns",
        "Cart abandonment recovery sequences",
        "Customer lifetime value optimization",
      ],
    },
    {
      emoji: "🏪",
      title: "Local Service Businesses",
      description: "Salons, cleaners, barbershops — appointment bots, reminders, repeat business automation.",
      features: [
        "Multi-service appointment booking systems",
        "Automated service reminders and follow-ups",
        "Repeat business and loyalty automation",
        "Local marketing and reputation management",
      ],
    },
    {
      emoji: "🏥",
      title: "Medical Practices",
      description: "AI-patient follow-ups, compliance, reputation management.",
      features: [
        "HIPAA-compliant patient follow-up systems",
        "Automated compliance monitoring and reporting",
        "Medical reputation management",
        "Appointment scheduling and reminder automation",
      ],
    },
    {
      emoji: "💉",
      title: "Medispas",
      description: "High-trust booking automation, package selling, client nurturing.",
      features: [
        "High-trust consultation booking automation",
        "Treatment package selling and upselling",
        "Long-term client nurturing campaigns",
        "Post-treatment care and follow-up",
      ],
    },
    {
      emoji: "🏃",
      title: "Fitness Trainers & Influencers",
      description: "Funnels for online coaching, AI content planners, offer bots.",
      features: [
        "Online coaching funnel automation",
        "AI-powered content planning and scheduling",
        "Automated offer and program promotion",
        "Community building and engagement",
      ],
    },
    {
      emoji: "💅",
      title: "Spa & Salon Services",
      description: "AI-driven booking, reactivation campaigns, upsells.",
      features: [
        "Intelligent booking and scheduling systems",
        "Client reactivation and win-back campaigns",
        "Service upselling and package promotion",
        "Seasonal and holiday campaign automation",
      ],
    },
  ]

  const [showWaitlistPopup, setShowWaitlistPopup] = useState(false)
  const [selectedIndustry, setSelectedIndustry] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleWaitlistClick = (industryTitle: string) => {
    setSelectedIndustry(industryTitle)
    setShowWaitlistPopup(true)
  }

  const handleWaitlistSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    const name = formData.get("name") as string

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitMessage(`Thanks ${name}! You've been added to the ${selectedIndustry} waitlist.`)
    setIsSubmitting(false)

    // Close popup after 2 seconds
    setTimeout(() => {
      setShowWaitlistPopup(false)
      setSubmitMessage("")
    }, 2000)
  }

  const handleAIAgentClick = () => {
    // Initialize AI voice agent
    if (typeof window !== "undefined") {
      // This would integrate with your AI voice agent service
      console.log("Launching AI Voice Agent...")
      alert("AI Voice Agent feature coming soon! For now, please use our demo page.")
      window.location.href = "/demo"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0f1a] to-[#00274D] text-white">
      <Navbar currentPage="industries" />

      {/* Hero Section */}
      <section ref={heroRef} className="text-center py-12 sm:py-16 px-4 sm:px-6 md:px-10 overflow-hidden pt-20">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="block text-white animate-fadeTextUp">AI Solutions for Every</span>
            <span className="block animate-fadeTextUp animation-delay-300">
              <RotatingText words={rotatingWords} className="text-[#00BFFF]" interval={2500} />
            </span>
            <span className="block text-white animate-fadeTextUp animation-delay-600">we serve</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeTextUp animation-delay-900 px-2">
            Discover how <strong className="text-white">SuccessNOW AI Superagents</strong> are transforming businesses
            across industries with automated lead generation, client acquisition, and growth systems.
          </p>

          <div className="flex flex-col gap-3 sm:gap-4 mt-6 sm:mt-8 animate-fadeTextUp animation-delay-1200 px-4">
            <Button
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-sm sm:text-base"
              onClick={() => document.getElementById("current-industries")?.scrollIntoView({ behavior: "smooth" })}
            >
              EXPLORE AVAILABLE SOLUTIONS →
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

      {/* Current Industries Section */}
      <section id="current-industries" ref={currentRef} className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2
              className={`text-2xl sm:text-3xl font-bold mb-4 text-white animate-fade-up ${currentIsInView ? "animate-show" : ""}`}
            >
              🚀 Available Now - Industry-Specific AI Solutions
            </h2>
            <p
              className={`text-gray-300 text-lg max-w-2xl mx-auto animate-fade-up ${currentIsInView ? "animate-show" : ""} animate-delay-100`}
            >
              Ready-to-deploy AI systems tailored for your industry's unique needs
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            {currentIndustries.map((industry, index) => (
              <Card
                key={industry.title}
                className={`bg-[#1c2230] border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,191,255,0.2)] animate-fade-up ${
                  currentIsInView ? "animate-show" : ""
                } animate-delay-${index * 100}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="text-3xl">{industry.emoji}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-bold text-white">{industry.title}</h3>
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      </div>
                      <p className="text-gray-300 text-sm mb-4">{industry.description}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {industry.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#00BFFF] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full bg-[#00BFFF] text-[#00274D] hover:bg-[#00BFFF]/90 font-bold py-3 px-4 text-sm transition-transform duration-200 hover:scale-105"
                    onClick={() => (window.location.href = `/${industry.slug}`)}
                  >
                    {industry.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section ref={comingSoonRef} className="py-12 sm:py-16 px-4 sm:px-6 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2
              className={`text-2xl sm:text-3xl font-bold mb-4 text-white animate-fade-up ${comingSoonIsInView ? "animate-show" : ""}`}
            >
              🔮 Coming Soon - Expanding Our AI Solutions
            </h2>
            <p
              className={`text-gray-300 text-lg max-w-2xl mx-auto animate-fade-up ${comingSoonIsInView ? "animate-show" : ""} animate-delay-100`}
            >
              We're developing AI automation solutions for these industries. Want early access? Contact us!
            </p>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {comingSoonIndustries.map((industry, index) => (
              <Card
                key={industry.title}
                className={`bg-[#1c2230]/60 border-gray-700/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,191,255,0.1)] animate-fade-up ${
                  comingSoonIsInView ? "animate-show" : ""
                } animate-delay-${index * 50}`}
              >
                <CardContent className="p-5">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="text-2xl opacity-70">{industry.emoji}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-bold text-white/80">{industry.title}</h3>
                        <Clock className="h-4 w-4 text-yellow-400" />
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{industry.description}</p>
                    </div>
                  </div>

                  <div className="space-y-1.5 mb-4">
                    {industry.features.slice(0, 2).map((feature, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-400 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-[#00BFFF] text-white hover:bg-[#00BFFF]/90 font-semibold text-xs transition-all duration-200 hover:scale-105"
                      onClick={() => handleWaitlistClick(industry.title)}
                    >
                      Join Waitlist
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white font-semibold text-xs transition-all duration-200 hover:scale-105 bg-transparent"
                      onClick={handleAIAgentClick}
                    >
                      Ask AI Agent
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm mb-4">
              Don't see your industry? Our AI demo will adapt to your business needs.
            </p>
            <Button
              variant="outline"
              className="border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-md hover:bg-[#00BFFF] hover:text-white transition-all duration-200 hover:scale-105 bg-transparent"
              onClick={() => (window.location.href = "/demo")}
            >
              Request Custom Demo
            </Button>
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
          <h2 className="text-3xl font-bold mb-6 text-[#00BFFF]">Ready to Transform Your Industry?</h2>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Join successful businesses already using SuccessNOW AI to automate growth, generate leads, and close more
            sales — while getting back their time.
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
              onClick={() => (window.location.href = "/demo")}
            >
              Launch Instant Demo NOW
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      {/* Waitlist Popup */}
      {showWaitlistPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1c2230] border border-gray-700 rounded-2xl p-8 max-w-md w-full mx-4 relative">
            <button
              onClick={() => setShowWaitlistPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Join the Waitlist</h3>
              <p className="text-gray-300 text-sm">
                Be the first to know when <strong className="text-[#00BFFF]">{selectedIndustry}</strong> AI solutions
                are available!
              </p>
            </div>

            {submitMessage ? (
              <div className="text-center">
                <div className="text-green-400 text-lg font-semibold mb-4">✅ {submitMessage}</div>
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-[#0b0f1a] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-[#0b0f1a] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-gray-300 mb-2">
                    Business Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    className="w-full px-4 py-3 bg-[#0b0f1a] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:border-transparent"
                    placeholder="Enter your business name"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#00BFFF] text-white hover:bg-[#00BFFF]/90 font-semibold py-3 px-4 rounded-lg transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Joining Waitlist...
                    </div>
                  ) : (
                    "Join Waitlist"
                  )}
                </Button>
              </form>
            )}

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-xs">
                We'll notify you as soon as {selectedIndustry} solutions are ready. No spam, ever.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
