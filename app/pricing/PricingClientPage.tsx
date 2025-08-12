"use client"

import { motion } from "framer-motion"
import { Check, Star, Zap, Crown, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PilotFundingBanner from "@/components/ui/pilot-funding-banner"

const plans = [
  {
    name: "Starter",
    price: 497,
    description: "Perfect for small businesses getting started with AI",
    icon: Zap,
    features: [
      "AI Chat Assistant",
      "Basic Lead Capture",
      "Email Integration",
      "Mobile Responsive",
      "Basic Analytics",
      "24/7 Support",
    ],
    popular: false,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Professional",
    price: 997,
    description: "Most popular choice for growing businesses",
    icon: Star,
    features: [
      "Everything in Starter",
      "AI Voice Assistant",
      "Advanced Lead Qualification",
      "CRM Integration",
      "Custom Workflows",
      "A/B Testing",
      "Advanced Analytics",
      "Priority Support",
    ],
    popular: true,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Enterprise",
    price: 1997,
    description: "Complete AI solution for established businesses",
    icon: Crown,
    features: [
      "Everything in Professional",
      "Multi-location Support",
      "Custom AI Training",
      "White-label Options",
      "API Access",
      "Dedicated Account Manager",
      "Custom Integrations",
      "SLA Guarantee",
    ],
    popular: false,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Custom Build",
    price: "Custom",
    description: "Fully tailored AI system built for your specific needs",
    icon: Rocket,
    features: [
      "Completely Custom Solution",
      "Unlimited Features",
      "Full Source Code",
      "Dedicated Development Team",
      "Ongoing Maintenance",
      "Training & Onboarding",
      "Performance Guarantees",
      "Enterprise SLA",
    ],
    popular: false,
    color: "from-emerald-500 to-teal-500",
  },
]

export default function PricingClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Pilot Funding Banner */}
      <div className="pt-20">
        <PilotFundingBanner />
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Choose Your AI Solution
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with our AI-powered solutions. No setup fees, no hidden costs, just results.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}

              <Card
                className={`h-full bg-slate-900/60 backdrop-blur-xl border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 ${plan.popular ? "ring-2 ring-purple-500/50" : ""}`}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold mt-2">
                    {typeof plan.price === "number" ? (
                      <>
                        <span className="text-4xl">${plan.price}</span>
                        <span className="text-lg text-gray-400">/month</span>
                      </>
                    ) : (
                      <span className="text-4xl">{plan.price}</span>
                    )}
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer" className="block">
                    <Button
                      className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white font-semibold py-3 transition-all duration-300 hover:scale-105`}
                    >
                      Get Started
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">What's included in setup?</h3>
                <p className="text-gray-300">
                  Complete AI system deployment, training, and integration with your existing tools. No additional setup
                  fees.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">Can I upgrade or downgrade?</h3>
                <p className="text-gray-300">
                  Yes, you can change your plan at any time. Changes take effect on your next billing cycle.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">Is there a contract?</h3>
                <p className="text-gray-300">No long-term contracts required. Cancel anytime with 30 days notice.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">What kind of support do you provide?</h3>
                <p className="text-gray-300">
                  24/7 technical support, training resources, and dedicated account management for Enterprise plans.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">How quickly can I get started?</h3>
                <p className="text-gray-300">
                  Most systems are deployed within 48-72 hours. Custom builds may take 1-2 weeks depending on
                  complexity.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">Do you offer custom solutions?</h3>
                <p className="text-gray-300">
                  Yes, our Custom Build option provides fully tailored AI solutions designed specifically for your
                  business needs.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using AI to increase leads, improve customer service, and boost
            revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-pink-500 hover:to-purple-600 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105">
                Start Your AI Journey
              </Button>
            </a>
            <a href="/demo">
              <Button
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 text-lg font-semibold transition-all duration-300 bg-transparent"
              >
                Watch Live Demo
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
