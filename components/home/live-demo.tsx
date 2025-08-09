"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, MessageCircle, Bot, Zap, Star, Users, TrendingUp } from "lucide-react"
import { VoiceDemoModal } from "@/components/ui/voice-demo-modal"

export default function LiveDemo() {
  const [showVoiceDemo, setShowVoiceDemo] = useState(false)
  const [showInlineDemo, setShowInlineDemo] = useState(false)

  const demoFeatures = [
    {
      icon: Bot,
      title: "AI Voice Agent",
      description: "Experience our advanced voice AI that sounds completely human",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MessageCircle,
      title: "Natural Conversations",
      description: "Handles complex inquiries with perfect understanding",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Instant Responses",
      description: "Never keeps customers waiting - responds in milliseconds",
      color: "from-green-500 to-teal-500",
    },
  ]

  const stats = [
    { number: "98%", label: "Customer Satisfaction", icon: Star },
    { number: "24/7", label: "Always Available", icon: Zap },
    { number: "10K+", label: "Conversations Daily", icon: Users },
    { number: "300%", label: "Lead Conversion Increase", icon: TrendingUp },
  ]

  useEffect(() => {
    if (showInlineDemo) {
      const frame = document.getElementById("assistantFrameLiveDemo")
      const handleLoad = () => {
        if (navigator.permissions) {
          navigator.permissions
            .query({ name: "microphone" as PermissionName })
            .then((result) => {
              if (result.state === "granted") {
                console.log("Microphone access already granted")
              } else if (result.state === "prompt") {
                console.log("User will be prompted for microphone access")
              }
            })
            .catch((err) => {
              console.error("Microphone permission query failed:", err)
            })
        }
      }

      if (frame) {
        frame.addEventListener("load", handleLoad)
        return () => {
          frame.removeEventListener("load", handleLoad)
        }
      }
    }
  }, [showInlineDemo])

  return (
    <section
      id="live-demo"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 mb-6">
            <Play className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Live Demo</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Experience Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AI Voice Agent
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Try our revolutionary AI voice technology that handles customer inquiries, books appointments, and converts
            leads with human-like conversations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setShowVoiceDemo(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
            >
              <Play className="w-6 h-6 mr-2" />
              Start Voice Demo
            </Button>

            <Button
              size="lg"
              onClick={() => setShowInlineDemo(!showInlineDemo)}
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg bg-transparent"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              {showInlineDemo ? "Hide Demo" : "Show Inline Demo"}
            </Button>
          </div>
        </div>

        {/* Inline Demo */}
        {showInlineDemo && (
          <div className="mb-16">
            <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
              <h3 className="text-2xl font-bold text-white text-center mb-6">AI Voice Agent - Live Demo</h3>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}>
                <iframe
                  src="https://iframes.ai/o/1753831620452x607403809624031200?color=ed10cc&icon=bot"
                  allow="microphone"
                  style={{ width: "100%", height: "100%", border: "none" }}
                  id="assistantFrameLiveDemo"
                  title="AI Voice Agent Live Demo"
                />
              </div>
            </div>
          </div>
        )}

        {/* Demo Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {demoFeatures.map((feature, index) => (
            <Card
              key={index}
              className="group bg-gray-900/50 backdrop-blur-md border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-black/40 backdrop-blur-sm border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <h3 className="text-3xl font-bold text-center text-white mb-8">How Our AI Voice Agent Works</h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Customer Contacts", desc: "Visitor starts web-based voice chat" },
              { step: "2", title: "AI Responds", desc: "Natural conversation begins instantly" },
              { step: "3", title: "Qualifies Lead", desc: "Gathers information and assesses needs" },
              { step: "4", title: "Books Appointment", desc: "Schedules meeting or closes sale" },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{process.title}</h4>
                <p className="text-gray-300 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">Ready to see how our AI can transform your business?</p>
          <Button
            size="lg"
            onClick={() => setShowVoiceDemo(true)}
            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Try Voice Demo Now
          </Button>
        </div>
      </div>

      <VoiceDemoModal isOpen={showVoiceDemo} onClose={() => setShowVoiceDemo(false)} />
    </section>
  )
}
