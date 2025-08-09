"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Target, TrendingUp, Zap, BarChart3, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function AdsNowSection() {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "AI-Powered Targeting",
      description: "Reach your ideal customers with precision targeting algorithms",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Automatically optimize campaigns for maximum ROI",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Deployment",
      description: "Launch high-converting ads in minutes, not hours",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Track performance and make data-driven decisions",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-red-900/10 to-pink-900/10" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border-orange-500/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Bonus Platform Included
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">AdsNOW</span>{" "}
              AI Agent
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get our premium advertising AI platform included FREE with your SuccessNOW subscription. Create, optimize,
              and scale high-converting ad campaigns across all major platforms.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 p-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg">
                    <div className="text-orange-400">{feature.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup">
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 group">
                  Get Both Platforms
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href="https://adsnow.ai" target="_blank">
                <Button
                  variant="outline"
                  className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10 hover:text-orange-300 px-8 py-3 rounded-lg transition-all duration-300 bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-orange-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-500/30 mb-4">
                    <Sparkles className="w-4 h-4 text-orange-400" />
                    <span className="text-orange-300 font-semibold">FREE Bonus</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">AdsNOW Platform</h3>
                  <p className="text-gray-400">Normally $497/month - Included FREE</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">AI Ad Creation</span>
                    <Badge className="bg-green-600 text-white">Included</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">Campaign Optimization</span>
                    <Badge className="bg-green-600 text-white">Included</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">Multi-Platform Management</span>
                    <Badge className="bg-green-600 text-white">Included</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">Advanced Analytics</span>
                    <Badge className="bg-green-600 text-white">Included</Badge>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-500/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">$5,964</div>
                    <div className="text-orange-400 font-semibold">Total Value Per Year</div>
                    <div className="text-sm text-gray-400 mt-1">SuccessNOW + AdsNOW Combined</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
