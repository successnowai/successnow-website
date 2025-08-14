"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Phone, MessageSquare, Calendar, CheckCircle, ArrowRight, Mic, Volume2 } from "lucide-react"
import { DemoPopup } from "@/components/ui/demo-popup"
import { VoiceDemoModal } from "@/components/ui/voice-demo-modal"
import AICallInterface from "@/components/call/ai-call-interface"
import Link from "next/link"

export default function LiveDemo() {
  const [activeDemo, setActiveDemo] = useState("voice")

  const demoOptions = [
    {
      id: "voice",
      title: "Voice AI Demo",
      description: "Experience our AI having a real conversation",
      icon: <Mic className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "chat",
      title: "Chat AI Demo",
      description: "See how our AI handles text conversations",
      icon: <MessageSquare className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "booking",
      title: "Booking Demo",
      description: "Watch AI schedule appointments automatically",
      icon: <Calendar className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500",
    },
  ]

  const features = [
    "Natural conversation flow",
    "Instant lead qualification",
    "Automatic appointment booking",
    "CRM integration",
    "24/7 availability",
  ]

  return (
    <section className="py-20 px-6 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30">
            <Play className="w-4 h-4 mr-2" />
            Live Demo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              AI in Action
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience firsthand how our AI agents handle real conversations, qualify leads, and book appointments -
            just like a top-performing sales rep.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Demo Options */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Choose Your Demo Experience</h3>

            <div className="space-y-4 mb-8">
              {demoOptions.map((option) => (
                <Card
                  key={option.id}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeDemo === option.id
                      ? "bg-gradient-to-r from-gray-800 to-gray-700 border-blue-500"
                      : "bg-gray-900/50 border-gray-800 hover:border-gray-700"
                  }`}
                  onClick={() => setActiveDemo(option.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${option.color}`}>
                        <div className="text-white">{option.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">{option.title}</h4>
                        <p className="text-gray-400">{option.description}</p>
                      </div>
                      {activeDemo === option.id && <CheckCircle className="w-6 h-6 text-blue-400" />}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Features List */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">What You'll Experience:</h4>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {activeDemo === "voice" ? (
                <VoiceDemoModal
                  trigger={
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 group w-full sm:w-auto">
                      <Volume2 className="w-5 h-5 mr-2" />
                      Start Voice Demo
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  }
                />
              ) : (
                <DemoPopup
                  trigger={
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 group w-full sm:w-auto">
                      <Play className="w-5 h-5 mr-2" />
                      Start {demoOptions.find((d) => d.id === activeDemo)?.title}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  }
                />
              )}

              <Link href="/book" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-lg transition-all duration-300 bg-transparent w-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Book AI Consultation
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right - Functional Demo Widget */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {activeDemo === "voice" ? (
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 backdrop-blur-sm rounded-lg p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Try Our AI Agent Now</h3>
                  <p className="text-gray-400">Call Jessica directly or request a callback within 30 seconds</p>
                </div>
                <AICallInterface />
              </div>
            ) : (
              <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div
                      className={`inline-flex p-4 rounded-full bg-gradient-to-r ${
                        demoOptions.find((d) => d.id === activeDemo)?.color
                      } mb-4`}
                    >
                      <div className="text-white text-2xl">{demoOptions.find((d) => d.id === activeDemo)?.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {demoOptions.find((d) => d.id === activeDemo)?.title}
                    </h3>
                    <p className="text-gray-400">{demoOptions.find((d) => d.id === activeDemo)?.description}</p>
                  </div>

                  {/* Demo Preview Content for non-voice demos */}
                  <div className="bg-gray-800/50 rounded-lg p-6 mb-6 min-h-[150px] flex items-center justify-center">
                    {activeDemo === "chat" && (
                      <div className="space-y-3 w-full">
                        <div className="bg-blue-500/20 rounded-lg p-3 text-right">
                          <p className="text-white">Hi, I'm interested in your services</p>
                        </div>
                        <div className="bg-gray-700/50 rounded-lg p-3">
                          <p className="text-gray-300">
                            Great! I'd love to help you. What type of business do you have?
                          </p>
                        </div>
                        <div className="text-center">
                          <span className="text-sm text-gray-400">AI typing...</span>
                        </div>
                      </div>
                    )}

                    {activeDemo === "booking" && (
                      <div className="space-y-3 w-full">
                        <div className="flex items-center gap-3 p-3 bg-green-500/20 rounded-lg">
                          <Calendar className="w-5 h-5 text-green-400" />
                          <span className="text-white">Available: Tomorrow 2:00 PM</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-green-500/20 rounded-lg">
                          <Calendar className="w-5 h-5 text-green-400" />
                          <span className="text-white">Available: Friday 10:00 AM</span>
                        </div>
                        <div className="text-center">
                          <span className="text-sm text-gray-400">Booking confirmed automatically</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="text-center">
                    <Badge className="bg-green-600 text-white">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Lead Qualified & Booked
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
