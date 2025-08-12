"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function CtaSection() {
  const guarantees = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "30-Day Money Back",
      description: "Not happy? Full refund, no questions asked",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "5-Minute Setup",
      description: "AI working for you in minutes, not months",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Guaranteed Results",
      description: "More leads and sales, or your money back",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-900/20 via-black to-blue-900/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Stop Losing to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              AI-Powered
            </span>{" "}
            Competitors
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Every day you wait, your competitors get further ahead with AI automation. Don't let them dominate your
            market while you're still doing things manually.
          </p>

          {/* Guarantees */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
              >
                <div className="bg-gradient-to-r from-green-500 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  {guarantee.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{guarantee.title}</h3>
                <p className="text-gray-400">{guarantee.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border-2 border-green-500/40 rounded-2xl p-8"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Your AI Business Revolution Starts Now</h3>
            <p className="text-xl text-gray-300 mb-8">
              Join the thousands of businesses already using AI to automate their growth. Setup takes 5 minutes. Results
              start immediately.
            </p>

            <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold px-12 py-6 text-2xl transition-all duration-300 hover:scale-110 shadow-2xl shadow-green-500/30 mb-4"
              >
                Start Dominating Your Market
                <ArrowRight className="ml-3 w-8 h-8" />
              </Button>
            </Link>

            <p className="text-gray-400 text-sm">No contracts. Cancel anytime. 30-day money-back guarantee.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
