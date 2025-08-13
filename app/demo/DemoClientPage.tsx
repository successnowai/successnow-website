"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Play, Phone, MessageSquare, Calendar, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function DemoClientPage() {
  const [activeDemo, setActiveDemo] = useState("voice")

  const demoTypes = [
    {
      id: "voice",
      title: "Voice AI Demo",
      description: "Experience our AI handling phone calls",
      icon: Phone,
    },
    {
      id: "chat",
      title: "Chat AI Demo",
      description: "See AI conversations in action",
      icon: MessageSquare,
    },
    {
      id: "booking",
      title: "Booking Demo",
      description: "Watch AI schedule appointments",
      icon: Calendar,
    },
    {
      id: "analytics",
      title: "Analytics Demo",
      description: "View real-time performance data",
      icon: BarChart3,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with Back Button */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            See SuccessNOW AI in Action
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Experience how our AI agents handle real customer interactions, book appointments, and drive results for
            businesses like yours.
          </p>
        </div>
      </section>

      {/* Demo Selection */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {demoTypes.map((demo) => {
              const IconComponent = demo.icon
              return (
                <Card
                  key={demo.id}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeDemo === demo.id
                      ? "bg-blue-600/20 border-blue-500"
                      : "bg-gray-900/50 border-gray-700/50 hover:border-blue-500/50"
                  }`}
                  onClick={() => setActiveDemo(demo.id)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{demo.title}</h3>
                    <p className="text-sm text-gray-400">{demo.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Demo Video/Content Area */}
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700/50">
            <div className="aspect-video bg-black rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{demoTypes.find((d) => d.id === activeDemo)?.title}</h3>
                <p className="text-gray-400 mb-6">{demoTypes.find((d) => d.id === activeDemo)?.description}</p>
                <Button className="bg-blue-600 hover:bg-blue-700">Play Demo</Button>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-300 mb-4">Want to see how this works for your specific business?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Get Started Now
                  </Button>
                </a>
                <Link href="/book">
                  <Button
                    variant="outline"
                    className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10 bg-transparent"
                  >
                    Book a Call
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What You Just Saw in Action</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform includes everything you need to automate and scale your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "24/7 AI Phone Answering",
                description: "Never miss a call again with AI that sounds completely human",
              },
              {
                title: "Intelligent Lead Qualification",
                description: "Automatically identify and prioritize your best prospects",
              },
              {
                title: "Automated Appointment Booking",
                description: "Let AI schedule meetings directly into your calendar",
              },
              {
                title: "Multi-Channel Communication",
                description: "Handle phone, SMS, email, and chat from one platform",
              },
              {
                title: "Real-Time Analytics",
                description: "Track performance and ROI with detailed reporting",
              },
              {
                title: "CRM Integration",
                description: "Seamlessly connect with your existing business tools",
              },
            ].map((feature, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
