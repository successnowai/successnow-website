"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown, Rocket } from "lucide-react"
import { useInView } from "@/hooks/use-intersection-observer"

export default function PricingTable() {
  const { ref, isInView } = useInView()

  const plans = [
    {
      name: "Starter",
      price: "$297",
      originalPrice: "$2,997",
      period: "/month",
      description: "Perfect for small businesses getting started with AI",
      icon: Zap,
      popular: false,
      features: [
        "AI Website with Voice Agent",
        "Lead Capture & Qualification",
        "Basic CRM Integration",
        "Email Follow-up Sequences",
        "24/7 AI Chat Support",
        "Mobile Responsive Design",
        "Basic Analytics Dashboard",
        "1 Business Location",
      ],
    },
    {
      name: "Professional",
      price: "$497",
      originalPrice: "$4,997",
      period: "/month",
      description: "Advanced features for growing businesses",
      icon: Star,
      popular: true,
      features: [
        "Everything in Starter",
        "Advanced Voice AI Agents",
        "Multi-language Support",
        "Advanced CRM Integration",
        "SMS & WhatsApp Automation",
        "Appointment Scheduling",
        "A/B Testing Tools",
        "Advanced Analytics",
        "Up to 3 Business Locations",
        "Priority Support",
      ],
    },
    {
      name: "Enterprise",
      price: "$997",
      originalPrice: "$9,997",
      period: "/month",
      description: "Complete solution for large organizations",
      icon: Crown,
      popular: false,
      features: [
        "Everything in Professional",
        "Custom AI Training",
        "White-label Solutions",
        "Advanced Integrations",
        "Custom Workflows",
        "Dedicated Account Manager",
        "Custom Reporting",
        "API Access",
        "Unlimited Locations",
        "24/7 Phone Support",
      ],
    },
  ]

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="cyber-section mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12"
    >
      <div className={`animate-fade-up ${isInView ? "animate-show" : ""}`}>
        {/* Limited Time Badge */}
        <div className="flex justify-center mb-8">
          <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 text-lg font-bold rounded-full animate-pulse">
            <Rocket className="mr-2 h-5 w-5" />
            LIMITED TIME: 90% OFF
          </Badge>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 cyber-text-glow">
            The Best AI Agents That Engage, Convert & Book
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Choose the perfect plan to transform your business with AI-powered automation
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`cyber-card relative ${plan.popular ? "ring-2 ring-cyan-400 scale-105" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 text-sm font-bold">
                    MOST POPULAR
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div
                    className={`p-3 rounded-full ${plan.popular ? "bg-gradient-to-r from-cyan-500 to-blue-600" : "bg-gradient-to-r from-blue-500 to-purple-600"}`}
                  >
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-white mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl md:text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                    <Badge className="bg-green-600 text-white text-xs">90% OFF</Badge>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-200 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
                  }`}
                  onClick={() => (window.location.href = "https://signup.successnow.ai")}
                  aria-label={`Get started with ${plan.name} plan for ${plan.price} per month`}
                >
                  Get Started Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-200 mb-6">
            🚀 <strong>Limited Time Offer:</strong> Save 90% on your first month. No setup fees. Cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => (window.location.href = "/demo")}
              aria-label="Try voice demo now - test our AI agents"
            >
              Try Voice Demo Now
            </Button>
            <p className="text-sm text-gray-400">⭐ Trusted by 10,000+ businesses worldwide</p>
          </div>
        </div>
      </div>
    </section>
  )
}
