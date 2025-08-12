"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight, MessageCircle, Phone, Calendar } from "lucide-react"
import Link from "next/link"

export default function LiveDemo() {
  const [activeDemo, setActiveDemo] = useState(0)

  const demos = [
    {
      icon: MessageCircle,
      title: "AI Chat Demo",
      description: "See how our AI chat agent converts website visitors into qualified leads 24/7.",
      features: ["Instant responses", "Lead qualification", "Appointment booking", "CRM integration"],
    },
    {
      icon: Phone,
      title: "AI Voice Demo",
      description: "Experience our AI voice agent that handles calls, books appointments, and follows up.",
      features: ["Natural conversations", "Call handling", "Appointment scheduling", "Follow-up automation"],
    },
    {
      icon: Calendar,
      title: "Complete System Demo",
      description: "See the full AI business system in action from lead capture to conversion.",
      features: ["End-to-end automation", "Multi-channel engagement", "Analytics dashboard", "ROI tracking"],
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800" />

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">See AI in Action</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Watch live demos of AI working for businesses just like yours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo selector */}
          <div className="space-y-6">
            {demos.map((demo, index) => (
              <div
                key={index}
                className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
                  activeDemo === index
                    ? "border-cyan-500 bg-cyan-500/10"
                    : "border-white/10 bg-white/5 hover:border-cyan-500/50"
                }`}
                onClick={() => setActiveDemo(index)}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      activeDemo === index ? "bg-cyan-500" : "bg-gray-600"
                    }`}
                  >
                    <demo.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{demo.title}</h3>
                    <p className="text-gray-300 mb-4">{demo.description}</p>

                    <div className="grid grid-cols-2 gap-2">
                      {demo.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                          <span className="text-sm text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Demo video placeholder */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-white/10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{demos[activeDemo].title}</h3>
                <p className="text-gray-300 mb-6">Click to watch this demo in action</p>
                <Link href="/demo">
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3">
                    Watch Live Demo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to See Your Business Transform?</h3>
            <p className="text-xl text-gray-300 mb-6">
              Book a personalized demo and see exactly how AI will work for your specific business.
            </p>
            <Link href="/book">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                Book Your Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
