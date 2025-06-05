"use client"

import Navbar from "@/components/navigation/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RotatingText } from "@/components/ui/rotating-text"
import { useInView } from "@/hooks/use-intersection-observer"
import { Play, MessageCircle, Phone, Calendar, Star, ArrowRight } from "lucide-react"
import Footer from "@/components/home/footer"

export default function DemoClientPage() {
  const { ref: heroRef, isInView: heroIsInView } = useInView()
  const { ref: demoRef, isInView: demoIsInView } = useInView()
  const { ref: featuresRef, isInView: featuresIsInView } = useInView()
  const { ref: ctaRef, isInView: ctaIsInView } = useInView()

  const rotatingWords = ["Live Demo", "AI in Action", "Real Results", "Instant Preview", "Interactive Test"]

  const demoFeatures = [
    {
      icon: <MessageCircle className="h-8 w-8 text-[#00BFFF]" />,
      title: "AI Voice Agent",
      description: "Watch our AI handle customer inquiries in real-time",
    },
    {
      icon: <Calendar className="h-8 w-8 text-[#00BFFF]" />,
      title: "Auto Booking",
      description: "See appointments get scheduled automatically",
    },
    {
      icon: <Phone className="h-8 w-8 text-[#00BFFF]" />,
      title: "Lead Follow-up",
      description: "Experience instant lead response and nurturing",
    },
    {
      icon: <Star className="h-8 w-8 text-[#00BFFF]" />,
      title: "Review Collection",
      description: "Watch AI collect 5-star reviews automatically",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0f1a] to-[#00274D] text-white">
      <Navbar currentPage="demo" />

      {/* Hero Section */}
      <section ref={heroRef} className="text-center py-12 sm:py-16 px-4 sm:px-6 md:px-10 overflow-hidden pt-20">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="block text-white animate-fadeTextUp">Experience SuccessNOW AI™</span>
            <span className="block animate-fadeTextUp animation-delay-300">
              <RotatingText words={rotatingWords} className="text-[#00BFFF]" interval={2500} />
            </span>
            <span className="block text-white animate-fadeTextUp animation-delay-600">right now</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeTextUp animation-delay-900 px-2">
            See how our{" "}
            <strong className="text-white">
              AI superagents convert leads, book appointments, and nurture clients 24/7
            </strong>{" "}
            — while you focus on growing your business.
          </p>

          <div className="flex flex-col gap-3 sm:gap-4 mt-6 sm:mt-8 animate-fadeTextUp animation-delay-1200 px-4">
            <Button
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-sm sm:text-base"
              onClick={() => document.getElementById("live-demo")?.scrollIntoView({ behavior: "smooth" })}
            >
              START LIVE DEMO →
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-md hover:bg-[#00BFFF] hover:text-white transition-all duration-200 hover:scale-105 text-sm sm:text-base bg-transparent"
              onClick={() => (window.location.href = "/payment")}
            >
              Get AI NOW
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-8 animate-fadeTextUp animation-delay-1500">
            <div className="flex justify-center items-center space-x-2 mb-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-red-500 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 border-2 border-white"></div>
              </div>
              <div className="flex text-yellow-400 ml-3">
                <span>⭐️⭐️⭐️⭐️⭐️</span>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              <strong className="text-white">65+</strong> businesses already automated
            </p>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00BFFF] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
      </section>

      {/* Demo Features Preview */}
      <section ref={featuresRef} className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-2xl sm:text-3xl font-bold mb-8 text-center text-white animate-fade-up ${featuresIsInView ? "animate-show" : ""}`}
          >
            What You'll Experience in the Demo
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {demoFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-[#1c2230] border border-gray-700 p-6 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,191,255,0.2)] animate-fade-up ${
                  featuresIsInView ? "animate-show" : ""
                } animate-delay-${index * 100}`}
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="live-demo" ref={demoRef} className="py-16 px-6 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-8 text-white animate-fade-up ${demoIsInView ? "animate-show" : ""}`}>
            🚀 Instant Live AI Demo
          </h2>
          <p
            className={`text-gray-300 text-lg mb-12 max-w-2xl mx-auto animate-fade-up ${
              demoIsInView ? "animate-show" : ""
            } animate-delay-100`}
          >
            Click play to see our AI superagents in action. Watch them handle real customer interactions, book
            appointments, and convert leads — all in real-time.
          </p>

          {/* Interactive Demo Player */}
          <div className={`mx-auto max-w-4xl animate-fade-up ${demoIsInView ? "animate-show" : ""} animate-delay-200`}>
            <div className="relative aspect-video bg-black/40 backdrop-blur-sm rounded-xl border-2 border-[#00BFFF]/30 overflow-hidden group cursor-pointer hover:border-[#00BFFF] transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00274D]/50 to-black/50"></div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#00BFFF] rounded-full p-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-12 h-12 text-white fill-white ml-1" />
                </div>
              </div>

              {/* Demo Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h4 className="text-white font-semibold text-xl mb-2">SuccessNOW AI Live Demo</h4>
                <p className="text-gray-200 text-base">Interactive demo showing real AI conversations and bookings</p>
              </div>

              {/* Live Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                  🔴 LIVE DEMO
                </span>
              </div>

              {/* Demo Stats */}
              <div className="absolute top-4 left-4 space-y-2">
                <div className="bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  👥 127 leads converted today
                </div>
                <div className="bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  📅 43 appointments booked
                </div>
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
              Get Your Personal AI Demo <br /> <span className="text-[#00BFFF]">Instantly</span>
            </h3>
            <p className="text-center text-sm text-gray-300 mb-6">See it customized for your business</p>

            <form className="space-y-4">
              <Input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
                required
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
                required
              />
              <Input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
                required
              />
              <select className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white border border-white/20 focus:border-[#00BFFF] focus:outline-none">
                <option value="">Select Your Industry</option>
                <option value="legal">Legal / Law Firms</option>
                <option value="realestate">Real Estate</option>
                <option value="automotive">Auto Dealers</option>
                <option value="mortgage">Mortgage Brokers</option>
                <option value="fitness">Gyms & Studios</option>
                <option value="medspa">Medspas</option>
                <option value="other">Other</option>
              </select>
              <Button
                type="submit"
                className="w-full bg-[#00BFFF] text-[#00274D] font-bold py-4 px-4 rounded-md hover:bg-[#00BFFF]/90 transition-all duration-200 hover:scale-105"
              >
                🚀 Start My Personal Demo
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
            You've seen what our AI can do. Now it's time to put it to work for your business. Join successful companies
            already using SuccessNOW AI to automate growth.
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
              onClick={() => (window.location.href = "/features")}
            >
              SEE ALL FEATURES
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
