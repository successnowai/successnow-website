"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Zap, ArrowRight, Users, TrendingUp, Shield, Clock } from "lucide-react"
import Link from "next/link"
import PilotFundingBanner from "@/components/ui/pilot-funding-banner"

export default function SignupClientPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

  const plans = [
    {
      name: "Enterprise",
      description: "Perfect for established businesses ready to scale with AI",
      monthlyPrice: 2997,
      annualPrice: 29970,
      savings: 6000,
      features: [
        "Unlimited AI Voice Calls",
        "Unlimited SMS & Email",
        "Advanced Lead Qualification",
        "Custom AI Training",
        "CRM Integration",
        "Real-time Analytics",
        "24/7 Priority Support",
        "White-label Options",
        "API Access",
        "Custom Integrations",
      ],
      popular: true,
      cta: "Start Enterprise Trial",
      ctaLink: "https://signup.successnow.ai",
    },
    {
      name: "Custom",
      description: "Tailored solutions for unique business requirements",
      monthlyPrice: null,
      annualPrice: null,
      features: [
        "Everything in Enterprise",
        "Custom AI Development",
        "Dedicated Account Manager",
        "Custom Reporting",
        "Advanced Security",
        "SLA Guarantees",
        "On-premise Deployment",
        "Custom Training Programs",
        "Priority Feature Requests",
        "Unlimited Customization",
      ],
      popular: false,
      cta: "Contact Sales",
      ctaLink: "/book",
    },
  ]

  const bonuses = [
    {
      title: "AI Setup & Training",
      value: "$5,000",
      description: "Complete AI agent setup and custom training for your business",
    },
    {
      title: "CRM Integration",
      value: "$2,500",
      description: "Full integration with your existing CRM and tools",
    },
    {
      title: "Priority Support",
      value: "$1,200",
      description: "24/7 priority support and dedicated success manager",
    },
    {
      title: "Custom Scripts",
      value: "$3,000",
      description: "Industry-specific conversation scripts and workflows",
    },
  ]

  const faqs = [
    {
      question: "How quickly can I see results?",
      answer:
        "Most clients see immediate improvements in lead response times and qualification. Full ROI typically occurs within 30-60 days as the AI learns and optimizes.",
    },
    {
      question: "Do I need technical knowledge to use this?",
      answer:
        "Not at all! Our team handles all the technical setup and training. You'll have a fully functional AI agent without any technical work on your part.",
    },
    {
      question: "Can the AI integrate with my existing tools?",
      answer:
        "Yes! We integrate with all major CRMs, calendars, and business tools. Our team will handle the entire integration process for you.",
    },
    {
      question: "What if I'm not satisfied?",
      answer:
        "We offer a 30-day money-back guarantee on our one-time setup fee. If you're not completely satisfied with the results, we'll refund your investment. No Risk, Just Missed Opportunity!",
    },
    {
      question: "How does the AI handle complex conversations?",
      answer:
        "Our AI is trained on millions of sales conversations and can handle objections, complex questions, and nuanced discussions. It gets smarter with every interaction.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use enterprise-grade security with end-to-end encryption. Your data is never shared and remains completely confidential.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <PilotFundingBanner />

      {/* Hero Section */}
      <div className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black"></div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 text-lg px-6 py-2">
            🚀 Limited Time Offer
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              AI Agents
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Stop losing money on leads that never convert. Our AI agents work 24/7 to qualify, nurture, and close your
            prospects while you focus on growing your business.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 text-green-400">
              <Check className="w-5 h-5" />
              <span>Setup in 24 Hours</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <Check className="w-5 h-5" />
              <span>30-Day Money Back - No Risk, Just Missed Opportunity!</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <Check className="w-5 h-5" />
              <span>No Long-term Contracts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Billing Toggle */}
      <div className="container mx-auto max-w-6xl px-4 mb-12">
        <div className="flex justify-center">
          <div className="bg-slate-800/50 rounded-full p-1 backdrop-blur-sm border border-slate-700">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full transition-all ${
                billingCycle === "monthly"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-2 rounded-full transition-all ${
                billingCycle === "annual"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Annual
              <Badge className="ml-2 bg-green-600 text-white text-xs">Save 20%</Badge>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="container mx-auto max-w-6xl px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-slate-900/50 border-2 backdrop-blur-sm ${
                plan.popular
                  ? "border-gradient-to-r from-purple-500 to-pink-500 shadow-2xl shadow-purple-500/20"
                  : "border-slate-700 hover:border-slate-600"
              } transition-all duration-300 hover:scale-105`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 text-sm">
                    ⭐ Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-white mb-2">{plan.name}</CardTitle>
                <p className="text-gray-400 mb-6">{plan.description}</p>

                {plan.monthlyPrice ? (
                  <div className="mb-6">
                    <div className="text-5xl font-bold text-white mb-2">
                      $
                      {billingCycle === "monthly"
                        ? plan.monthlyPrice.toLocaleString()
                        : (plan.annualPrice! / 12).toLocaleString()}
                      <span className="text-lg text-gray-400 font-normal">/month</span>
                    </div>
                    {billingCycle === "annual" && (
                      <div className="text-green-400 text-sm">Save ${plan.savings?.toLocaleString()} annually</div>
                    )}
                  </div>
                ) : (
                  <div className="text-3xl font-bold text-white mb-6">Custom Pricing</div>
                )}

                <Link href={plan.ctaLink} target={plan.ctaLink.startsWith("http") ? "_blank" : "_self"}>
                  <Button
                    size="lg"
                    className={`w-full text-lg font-semibold py-4 ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        : "bg-slate-700 hover:bg-slate-600"
                    } transition-all duration-300`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </CardHeader>

              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bonus Section */}
      <div className="container mx-auto max-w-6xl px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Exclusive Bonuses Worth
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              {" "}
              $11,700
            </span>
          </h2>
          <p className="text-xl text-gray-300">Get these premium bonuses when you start today</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bonuses.map((bonus, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{bonus.title}</h3>
                    <p className="text-gray-400">{bonus.description}</p>
                  </div>
                  <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-lg px-3 py-1 ml-4">
                    {bonus.value}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Social Proof */}
      <div className="container mx-auto max-w-6xl px-4 mb-20">
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-blue-400 mr-2" />
                <span className="text-3xl font-bold text-white">10,000+</span>
              </div>
              <p className="text-gray-400">Businesses Served</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-green-400 mr-2" />
                <span className="text-3xl font-bold text-white">300%</span>
              </div>
              <p className="text-gray-400">Average ROI</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-8 h-8 text-purple-400 mr-2" />
                <span className="text-3xl font-bold text-white">24/7</span>
              </div>
              <p className="text-gray-400">AI Availability</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Shield className="w-8 h-8 text-cyan-400 mr-2" />
                <span className="text-3xl font-bold text-white">99.9%</span>
              </div>
              <p className="text-gray-400">Uptime Guarantee</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto max-w-4xl px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300">Everything you need to know about our AI agents</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="container mx-auto max-w-4xl px-4 pb-20">
        <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-2 border-purple-500/50 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using AI to dominate their markets. Setup takes less than 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://signup.successnow.ai" target="_blank">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg font-semibold px-8 py-4 transition-all duration-300 hover:scale-105"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <Link href="/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10 text-lg font-semibold px-8 py-4 transition-all duration-300 bg-transparent"
                >
                  Watch Demo First
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6 text-green-400">
              <Check className="w-5 h-5" />
              <span>30-Day Money Back Guarantee - No Risk, Just Missed Opportunity!</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
