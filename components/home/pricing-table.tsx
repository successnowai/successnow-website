"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight, Zap, Crown, Rocket } from "lucide-react"
import Link from "next/link"

export default function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      icon: <Zap className="w-6 h-6" />,
      description: "Perfect for small businesses getting started with AI",
      monthlyPrice: 297,
      annualPrice: 2970,
      setupFee: 1488,
      features: [
        "AI Chat Agent on your website",
        "Basic lead qualification",
        "Email notifications",
        "Simple appointment booking",
        "Basic analytics dashboard",
        "Email support",
      ],
      popular: false,
      cta: "Start with AI",
    },
    {
      name: "Professional",
      icon: <Crown className="w-6 h-6" />,
      description: "Complete AI automation for growing businesses",
      monthlyPrice: 497,
      annualPrice: 4970,
      setupFee: 1488,
      features: [
        "Everything in Starter",
        "AI Voice Agent for phone calls",
        "Advanced lead qualification",
        "CRM integration",
        "Automated follow-up sequences",
        "Multi-channel communication",
        "Advanced analytics & reporting",
        "Priority support",
      ],
      popular: true,
      cta: "Go Professional",
    },
    {
      name: "Enterprise",
      icon: <Rocket className="w-6 h-6" />,
      description: "Full-scale AI domination for serious businesses",
      monthlyPrice: 997,
      annualPrice: 9970,
      setupFee: 1488,
      features: [
        "Everything in Professional",
        "Custom AI training for your business",
        "Multiple AI agents",
        "Advanced automation workflows",
        "Custom integrations",
        "White-label options",
        "Dedicated account manager",
        "24/7 phone support",
      ],
      popular: false,
      cta: "Dominate Your Market",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-black to-slate-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Choose Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              AI Advantage
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Every plan includes our complete AI setup and training. Start dominating your market today.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg ${!isAnnual ? "text-white font-semibold" : "text-gray-400"}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                isAnnual ? "bg-purple-500" : "bg-gray-600"
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  isAnnual ? "translate-x-9" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-lg ${isAnnual ? "text-white font-semibold" : "text-gray-400"}`}>Annual</span>
            {isAnnual && <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Save 20%</Badge>}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 text-sm font-semibold">
                    Most Popular
                  </Badge>
                </div>
              )}

              <Card
                className={`h-full ${
                  plan.popular
                    ? "bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/30 scale-105"
                    : "bg-white/5 border-white/10"
                } hover:scale-105 transition-all duration-300`}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`inline-flex p-3 rounded-full mb-4 ${
                      plan.popular ? "bg-gradient-to-r from-purple-500 to-blue-500" : "bg-gray-600"
                    }`}
                  >
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-2">{plan.name}</CardTitle>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-white mb-2">
                      ${isAnnual ? Math.floor(plan.annualPrice / 12) : plan.monthlyPrice}
                      <span className="text-lg text-gray-400 font-normal">/month</span>
                    </div>
                    <div className="text-sm text-gray-400">+ ${plan.setupFee} one-time setup</div>
                    {isAnnual && (
                      <div className="text-sm text-green-400 mt-1">
                        Save ${plan.monthlyPrice * 12 - plan.annualPrice} annually
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
                    <Button
                      className={`w-full font-semibold py-3 transition-all duration-300 hover:scale-105 ${
                        plan.popular
                          ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                          : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">30-Day Money-Back Guarantee</h3>
            <p className="text-xl text-gray-300 mb-6">
              Not seeing results? Get a full refund. But you will see results - our AI works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold px-8 py-4 text-lg"
                >
                  Start Risk-Free Today
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 px-8 py-4 text-lg bg-transparent"
                >
                  See Demo First
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
