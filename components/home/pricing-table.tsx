"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Crown, TrendingUp, Phone } from "lucide-react"
import Link from "next/link"

export default function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plan = {
    name: "Enterprise",
    description: "Complete AI solution for serious businesses",
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
      "Multi-language Support",
      "Priority Queue Processing",
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
    icon: <Crown className="w-6 h-6" />,
  }

  return (
    <section className="py-16 px-6 bg-black" id="pricing">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transform Your Business with <span className="text-[#00BFFF]">AI Success</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get unlimited AI agents that work 24/7 to convert, book, and nurture leads automatically
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

        {/* Single Pricing Card */}
        <div className="flex justify-center">
          <Card className="relative bg-gray-900/50 border-2 border-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 hover:scale-105 max-w-lg w-full">
            {/* Limited Time Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 animate-pulse">
                🔥 LIMITED TIME: 90% OFF 🔥
              </Badge>
            </div>

            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400">
                  {plan.icon}
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-white mb-2">{plan.name}</CardTitle>
              <p className="text-gray-400">{plan.description}</p>
            </CardHeader>

            <CardContent className="pt-0">
              {/* Pricing */}
              <div className="text-center mb-6">
                <div className="space-y-2">
                  <div className="text-gray-400 line-through text-lg">
                    Usually ${plan.originalPrice?.toLocaleString()}
                  </div>
                  <div className="text-5xl font-bold text-white">${plan.discountPrice?.toLocaleString()}</div>
                  <div className="text-sm text-gray-400">One-time payment</div>
                </div>
              </div>

              {/* Bonus Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="bg-blue-500/20 p-2 rounded-full">
                      <TrendingUp className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <h4 className="font-bold text-white text-sm mb-1">BONUS: 50% OFF Platform Fees</h4>
                  <p className="text-gray-400 text-xs line-through">Regular $1,994/month</p>
                  <p className="text-green-400 font-semibold text-lg">Only $997/month</p>
                </div>
                <div className="bg-pink-900/30 border border-pink-700/50 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="bg-pink-500/20 p-2 rounded-full">
                      <Phone className="w-6 h-6 text-pink-400" />
                    </div>
                  </div>
                  <h4 className="font-bold text-white text-sm mb-1">BONUS: 50% OFF AI Voice Usage</h4>
                  <p className="text-gray-400 text-xs line-through">Regular $0.28/minute</p>
                  <p className="text-green-400 font-semibold text-lg">Only $0.14/minute</p>
                </div>
              </div>

              {/* Special Offers */}
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
                <Button className="w-full py-4 text-lg font-semibold transition-all duration-300 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl">
                  {plan.cta}
                </Button>
              </Link>

              {/* Money Back Guarantee */}
              <p className="text-center text-xs text-gray-500 mt-4">30-day money-back guarantee</p>
            </CardContent>
          </Card>
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
