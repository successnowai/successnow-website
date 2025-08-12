"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Star, Zap } from "lucide-react"
import Link from "next/link"

export default function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started with AI",
      monthlyPrice: 297,
      annualPrice: 2970,
      features: [
        "AI Chat Agent",
        "Basic Website Integration",
        "Lead Capture Forms",
        "Email Notifications",
        "Basic Analytics",
        "5 AI Conversations/day",
      ],
      cta: "Get Started Now",
      popular: false,
    },
    {
      name: "Professional",
      description: "Most popular for growing businesses",
      monthlyPrice: 497,
      annualPrice: 4970,
      features: [
        "AI Chat + Voice Agents",
        "Custom Website + Funnels",
        "CRM Integration",
        "Automated Follow-ups",
        "Advanced Analytics",
        "50 AI Conversations/day",
        "Multi-channel Marketing",
        "A/B Testing",
      ],
      cta: "Get Started Now",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For established businesses scaling with AI",
      monthlyPrice: 997,
      annualPrice: 9970,
      features: [
        "Everything in Professional",
        "Unlimited AI Conversations",
        "Custom AI Training",
        "White-label Options",
        "Priority Support",
        "Advanced Integrations",
        "Custom Reporting",
        "Dedicated Account Manager",
      ],
      cta: "Get Started Now",
      popular: false,
    },
    {
      name: "Custom",
      description: "Tailored solutions for enterprise needs",
      monthlyPrice: null,
      annualPrice: null,
      features: [
        "Everything in Enterprise",
        "Custom AI Development",
        "On-premise Deployment",
        "SLA Guarantees",
        "24/7 Phone Support",
        "Custom Integrations",
        "Training & Onboarding",
        "Success Manager",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800" />

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your business. All plans include our core AI features with no hidden fees.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-lg ${!isAnnual ? "text-white font-semibold" : "text-gray-400"}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                isAnnual ? "bg-cyan-500" : "bg-gray-600"
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  isAnnual ? "translate-x-9" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-lg ${isAnnual ? "text-white font-semibold" : "text-gray-400"}`}>Annual</span>
            {isAnnual && (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Save 20%</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white/5 backdrop-blur-xl border-2 rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.popular ? "border-cyan-500 bg-cyan-500/10" : "border-white/10 hover:border-cyan-500/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  {plan.monthlyPrice ? (
                    <>
                      <div className="text-4xl font-bold text-white">
                        ${isAnnual ? Math.round(plan.annualPrice / 12) : plan.monthlyPrice}
                      </div>
                      <div className="text-gray-400 text-sm">per month{isAnnual && ", billed annually"}</div>
                      {isAnnual && (
                        <div className="text-green-400 text-sm font-semibold">
                          Save ${plan.monthlyPrice * 12 - plan.annualPrice}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-2xl font-bold text-white">Custom</div>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                {plan.name === "Custom" ? (
                  <Link href="/book">
                    <Button
                      className={`w-full font-semibold py-3 transition-all duration-300 hover:scale-105 ${
                        plan.popular
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                          : "bg-white/10 border border-white/20 text-white hover:bg-white/20"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                ) : (
                  <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
                    <Button
                      className={`w-full font-semibold py-3 transition-all duration-300 hover:scale-105 ${
                        plan.popular
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                          : "bg-white/10 border border-white/20 text-white hover:bg-white/20"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-yellow-400" />
              <h3 className="text-2xl font-bold text-white">30-Day Money-Back Guarantee</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Try any plan risk-free. If you're not completely satisfied, we'll refund every penny within 30 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
                >
                  Start Your Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/book">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 px-8 py-4 text-lg transition-all duration-300 bg-transparent"
                >
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
