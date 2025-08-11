"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, MessageSquare, Calendar, BarChart3, Users, Zap, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export function PlatformShowcaseSection() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Voice Agents",
      description: "Human-like conversations that convert prospects into customers 24/7",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Smart Lead Qualification",
      description: "Automatically qualify leads and route them to the right team member",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Automated Booking",
      description: "Schedule appointments directly from conversations without human intervention",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Track performance, conversion rates, and ROI with detailed insights",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "CRM Integration",
      description: "Seamlessly sync with your existing CRM and marketing tools",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Deployment",
      description: "Get up and running in minutes with our plug-and-play solution",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  const benefits = [
    "Increase lead conversion by 300%",
    "Reduce response time to under 30 seconds",
    "Save 40+ hours per week on manual tasks",
    "Never miss a lead again, even after hours",
    "Scale your business without hiring more staff",
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
            Platform Overview
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Dominate Your Market
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our comprehensive AI platform handles every aspect of lead generation, qualification, and conversion - so
            you can focus on growing your business.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6">
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 md:p-12 border border-gray-700"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Transform Your Business Results</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-block p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20">
                <div className="text-5xl font-bold text-white mb-2">300%</div>
                <div className="text-blue-400 text-lg font-semibold mb-4">Average Conversion Increase</div>
                <Link href="/demo">
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 group">
                    See It In Action
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience the Future of Lead Generation?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our AI platform to automate their sales process and scale their
            growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                Get Started Now
              </Button>
            </Link>
            <Link href="/demo">
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-lg transition-all duration-300 bg-transparent"
              >
                Watch Demo
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
