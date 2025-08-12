"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, MessageSquare, Phone, Calendar, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function LiveDemo() {
  const [activeDemo, setActiveDemo] = useState(0)

  const demos = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "AI Chat Agent",
      description: "Watch our AI handle customer inquiries and book appointments",
      videoId: "demo-chat",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "AI Voice Agent",
      description: "Listen to natural phone conversations that convert leads",
      videoId: "demo-voice",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Auto Booking",
      description: "See appointments scheduled without human intervention",
      videoId: "demo-booking",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Track performance and ROI with detailed insights",
      videoId: "demo-analytics",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black via-slate-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            See AI in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Action</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Watch real AI agents handling actual customer interactions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo selector */}
          <div className="space-y-4">
            {demos.map((demo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
                  activeDemo === index
                    ? "border-green-500 bg-green-500/10"
                    : "border-white/10 bg-white/5 hover:border-green-500/50"
                }`}
                onClick={() => setActiveDemo(index)}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      activeDemo === index ? "bg-green-500" : "bg-gray-600"
                    }`}
                  >
                    {demo.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{demo.title}</h3>
                    <p className="text-gray-300">{demo.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Demo video area */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
          >
            <div className="aspect-video bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <div className="text-center">
                <Play className="w-16 h-16 text-white mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-white mb-2">{demos[activeDemo].title}</h3>
                <p className="text-gray-300 mb-6">{demos[activeDemo].description}</p>
                <Link href="/demo">
                  <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold px-8 py-3">
                    Watch Full Demo
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to See Your Business Transform?</h3>
          <p className="text-gray-400 mb-6">
            Book a personalized demo and see exactly how AI will work for your specific business.
          </p>
          <Link href="/demo">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg"
            >
              Book My Personal Demo
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
