"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, TrendingUp, Brain, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function AdsNowSection() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Ad Creation",
      description: "Generate high-converting ads automatically based on your business data",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Smart Targeting",
      description: "AI finds your perfect customers across all platforms",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Auto Optimization",
      description: "Continuously improves performance without manual intervention",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Track ROI and performance across all advertising channels",
    },
  ]

  const stats = [
    { number: "300%", label: "Average ROAS Increase" },
    { number: "75%", label: "Reduction in Ad Spend" },
    { number: "24/7", label: "Automated Optimization" },
    { number: "5 Min", label: "Setup Time" },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border-purple-500/30">
            AdsNOW Platform
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Advertising
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let AI create, manage, and optimize your advertising campaigns across all platforms. Better results, lower
            costs, zero manual work.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 h-full">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Dominate Your Advertising?</h3>
            <p className="text-xl text-gray-300 mb-6">
              Stop wasting money on ads that don't work. Let AI create campaigns that actually convert.
            </p>
            <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                Start AI Advertising
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
