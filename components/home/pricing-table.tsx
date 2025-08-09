"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown } from "lucide-react"
import Link from "next/link"

export default function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started with AI",
      monthlyPrice: 297,
      annualPrice: 2970,
      savings: "Save $564",
      features: [
        "1 AI Voice Agent",
        "Basic Lead Qualification",
        "Email Integration",
        "Standard Support",
        "Basic Analytics",
        "Up to 500 conversations/month",
      ],
      cta: "Start Free Trial",
      popular: false,
      icon: <Zap className="w-6 h-6" />,
    },
    {
      name: "Professional",
      description: "Most popular choice for growing businesses",
      monthlyPrice: 497,
      annualPrice: 4970,
      savings: "Save $994",
      features: [
        "3 AI Voice Agents",
        "Advanced Lead Qualification",
        "CRM Integration (GHL, HubSpot)",
        "Priority Support",
        "Advanced Analytics & Reporting",
        "Up to 2,000 conversations/month",
        "Custom Voice Training",
        "Multi-language Support",
      ],
      cta: "Start Free Trial",
      popular: true,
      icon: <Star className="w-6 h-6" />,
    },
    {
      name: "Enterprise",
      description: "Complete AI solution for large organizations",
      monthlyPrice: 997,
      annualPrice: 9970,
      savings: "Save $1,994",
      originalPrice: 35000,
      discountPrice: 3488,
      limitedTime: true,
      features: [
        "Unlimited AI Voice Agents",
        "Full Lead Management Suite",
        "All CRM Integrations",
        "24/7 Dedicated Support",
        "Custom AI Training",
        "Unlimited conversations",
        "White-label Solution",
        "API Access",
        "Custom Integrations",
        "Advanced Reporting Dashboard",
      ],
      bonuses: [
        {
          title: "AdsNOW AI Agent by adsnow.ai included",
          color: "purple",
        },
        {
          title: "SEONOW by SEOexperts.ai included",
          color: "blue",
        },
      ],
      cta: "Get Started Now",
      popular: false,
      icon: <Crown className="w-6 h-6" />,
    },
  ]

  return (
    <section className="py-16 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your <span className="text-[#00BFFF]">AI Success</span> Plan
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with AI agents that work 24/7 to convert, book, and nurture leads
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm ${!isAnnual ? "text-white" : "text-gray-400"}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? "bg-[#00BFFF]" : "bg-gray-600"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? "text-white" : "text-gray-400"}`}>
              Annual{" "}
              <Badge variant="secondary" className="ml-2 bg-green-600 text-white">
                Save 20%
              </Badge>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative bg-gray-900/50 border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "border-[#00BFFF] shadow-lg shadow-[#00BFFF]/20"
                  : "border-gray-800 hover:border-gray-700"
              } ${plan.limitedTime ? "border-gradient-to-r from-orange-500 to-red-500" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[#00BFFF] text-white px-4 py-1">Most Popular</Badge>
                </div>
              )}

              {plan.limitedTime && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 animate-pulse">
                    🔥 LIMITED TIME: 90% OFF 🔥
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center mb-4">
                  <div
                    className={`p-3 rounded-full ${
                      plan.popular ? "bg-[#00BFFF]/20 text-[#00BFFF]" : "bg-gray-800 text-gray-400"
                    }`}
                  >
                    {plan.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-white mb-2">{plan.name}</CardTitle>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Pricing */}
                <div className="text-center mb-6">
                  {plan.limitedTime ? (
                    <div className="space-y-2">
                      <div className="text-gray-400 line-through text-lg">
                        Usually ${plan.originalPrice?.toLocaleString()}
                      </div>
                      <div className="text-4xl font-bold text-white">${plan.discountPrice?.toLocaleString()}</div>
                      <div className="text-sm text-gray-400">One-time payment</div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-white">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </div>
                      <div className="text-sm text-gray-400">{isAnnual ? "per year" : "per month"}</div>
                      {isAnnual && (
                        <Badge variant="outline" className="border-green-500 text-green-400">
                          {plan.savings}
                        </Badge>
                      )}
                    </div>
                  )}
                </div>

                {/* Special Offers for Enterprise */}
                {plan.limitedTime && (
                  <div className="space-y-3 mb-6">
                    {/* 2 Months Free */}
                    <div className="p-3 bg-green-600/20 border border-green-600/30 rounded-lg">
                      <div className="text-green-400 font-semibold text-center">
                        + 2 MONTHS FREE Platform Access (Save $1,994)
                      </div>
                    </div>

                    {/* Bonuses */}
                    {plan.bonuses?.map((bonus, bonusIndex) => (
                      <div
                        key={bonusIndex}
                        className={`p-3 border rounded-lg ${
                          bonus.color === "purple"
                            ? "bg-purple-600/20 border-purple-600/30"
                            : "bg-blue-600/20 border-blue-600/30"
                        }`}
                      >
                        <div
                          className={`font-semibold text-center ${
                            bonus.color === "purple" ? "text-purple-400" : "text-blue-400"
                          }`}
                        >
                          🎁 BONUS: {bonus.title}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#00BFFF] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href="/signup" className="block">
                  <Button
                    className={`w-full py-3 font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-[#00BFFF] hover:bg-[#00A3D9] text-white shadow-lg hover:shadow-xl"
                        : plan.limitedTime
                          ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl"
                          : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>

                {/* Money Back Guarantee */}
                <p className="text-center text-xs text-gray-500 mt-4">30-day money-back guarantee</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Need a custom solution? We've got you covered.</p>
          <Link href="/book">
            <Button
              variant="outline"
              className="border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white bg-transparent"
            >
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
