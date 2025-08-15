"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Crown, Building } from "lucide-react"
import Link from "next/link"
import PilotFundingBanner from "@/components/ui/pilot-funding-banner"
import { PricingFAQ } from "@/components/faq/pricing-faq"

export default function PricingClientPage() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: "Enterprise",
      description: "Complete AI solution for serious businesses",
      monthlyPrice: 997,
      annualPrice: 9970,
      savings: "Save $1,994",
      originalPrice: 9988,
      discountPrice: 988,
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
        "Multi-language Support",
        "Priority Queue Processing",
      ],
      bonuses: [
        {
          title: "50% OFF Platform Fees",
          subtitle: "Regular $1,994/month",
          price: "Only $997/month",
          color: "blue",
        },
        {
          title: "50% OFF AI Voice Usage",
          subtitle: "Regular $0.28/minute",
          price: "Only $0.14/minute",
          color: "pink",
        },
        {
          title: "2 MONTHS FREE Platform Access (Save $1,994)",
          color: "green",
        },
        {
          title: "AdsNOW.ai Platinum included ($998/mo value)",
          color: "purple",
        },
        {
          title: "AI SEO by SEOExperts.ai included",
          color: "blue",
        },
      ],
      cta: "Get Started Now",
      icon: <Crown className="w-6 h-6" />,
      popular: true,
    },
    {
      name: "Custom",
      description: "Tailored solutions for enterprise organizations",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      features: [
        "Everything in Enterprise",
        "Custom Development",
        "Dedicated Account Manager",
        "On-premise Deployment",
        "Custom SLA",
        "Advanced Security",
        "Custom Integrations",
        "Training & Onboarding",
      ],
      cta: "Contact Sales",
      icon: <Building className="w-6 h-6" />,
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-24 pb-16">
        {/* Pilot Funding Banner */}
        <PilotFundingBanner />

        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Choose Your <span className="text-[#00BFFF]">AI Success</span> Plan
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with AI-powered automation. Choose the plan that fits your needs and scale as you
              grow.
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-gray-900/50 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? "border-[#00BFFF] shadow-lg shadow-[#00BFFF]/20"
                    : plan.limitedTime
                      ? "border-2 border-gradient-to-r from-orange-500 to-red-500"
                      : "border-gray-700"
                }`}
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
                        plan.popular
                          ? "bg-[#00BFFF]/20 text-[#00BFFF]"
                          : plan.limitedTime
                            ? "bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400"
                            : "bg-gray-700/50 text-gray-400"
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
                        <div className="text-sm text-gray-400">One-time payment (coupon automatically applied)</div>
                      </div>
                    ) : typeof plan.monthlyPrice === "string" ? (
                      <div className="text-4xl font-bold text-white mb-2">Custom</div>
                    ) : (
                      <div className="space-y-2">
                        <div className="text-4xl font-bold text-white">
                          ${isAnnual ? Math.round(plan.annualPrice / 12) : plan.monthlyPrice}
                        </div>
                        <div className="text-sm text-gray-400">per month</div>
                        {isAnnual && plan.savings && (
                          <div className="text-green-400 text-sm font-medium">{plan.savings}</div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Bonuses for Enterprise */}
                  {plan.bonuses && (
                    <div className="space-y-3 mb-6">
                      {plan.bonuses.map((bonus, bonusIndex) => (
                        <div
                          key={bonusIndex}
                          className={`p-3 border rounded-lg ${
                            bonus.color === "purple"
                              ? "bg-purple-600/20 border-purple-600/30"
                              : bonus.color === "blue"
                                ? "bg-blue-600/20 border-blue-600/30"
                                : bonus.color === "pink"
                                  ? "bg-pink-600/20 border-pink-600/30"
                                  : "bg-green-600/20 border-green-600/30"
                          }`}
                        >
                          <div
                            className={`font-semibold text-center text-sm ${
                              bonus.color === "purple"
                                ? "text-purple-400"
                                : bonus.color === "blue"
                                  ? "text-blue-400"
                                  : bonus.color === "pink"
                                    ? "text-pink-400"
                                    : "text-green-400"
                            }`}
                          >
                            🎁 BONUS: {bonus.title}
                          </div>
                          {bonus.subtitle && (
                            <div className="text-center text-xs text-gray-400 line-through mt-1">{bonus.subtitle}</div>
                          )}
                          {bonus.price && (
                            <div className="text-center text-sm font-bold text-green-400 mt-1">{bonus.price}</div>
                          )}
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
                  {plan.name === "Custom" ? (
                    <Link href="/book" className="block">
                      <Button className="w-full py-3 text-lg font-semibold transition-all duration-300 bg-gray-700 hover:bg-gray-600 text-white">
                        {plan.cta}
                      </Button>
                    </Link>
                  ) : (
                    <a href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer" className="block">
                      <Button
                        className={`w-full py-3 text-lg font-semibold transition-all duration-300 ${
                          plan.popular
                            ? "bg-[#00BFFF] hover:bg-[#0099CC] text-white"
                            : plan.limitedTime
                              ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl"
                              : "bg-gray-700 hover:bg-gray-600 text-white"
                        }`}
                      >
                        {plan.cta}
                      </Button>
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-400 mb-6">Join thousands of businesses already using SuccessNOW AI</p>
            <a href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-[#00BFFF] to-blue-600 hover:from-[#0099CC] hover:to-blue-700 text-white px-8 py-3 text-lg">
                Start Your Free Trial
              </Button>
            </a>
          </div>
        </div>
      </div>

      <PricingFAQ />
    </div>
  )
}
