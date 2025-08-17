"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Zap, ArrowRight, Users, TrendingUp, Shield, Clock, Phone, MessageSquare } from "lucide-react"
import Link from "next/link"
import PilotFundingBanner from "@/components/ui/pilot-funding-banner"

const faqs = [
  {
    question: "What is the setup time for the Enterprise plan?",
    answer: "The Enterprise plan can be set up in just 24 hours.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes, we offer a 30-Day Money Back Guarantee with no risk.",
  },
  {
    question: "Do you offer any long-term contracts?",
    answer: "No, we do not offer long-term contracts. Our plans are flexible.",
  },
  {
    question: "What is included in the Custom plan?",
    answer:
      "The Custom plan includes everything in the Enterprise plan plus custom AI development, a dedicated account manager, custom reporting, advanced security, SLA guarantees, on-premise deployment, custom training programs, priority feature requests, and unlimited customization.",
  },
]

export default function SignupClientPage() {
  const plans = [
    {
      name: "Enterprise",
      description: "Complete AI solution for serious businesses",
      setupFee: 988,
      originalSetupFee: 9988,
      monthlyFee: 997,
      originalMonthlyFee: 1994,
      voiceRate: 0.07,
      originalVoiceRate: 0.28,
      features: [
        "Unlimited AI Voice Agents",
        "Full Lead Management Suite",
        "All CRM Integrations",
        "4× 1-on-1 Onboarding & Training Sessions",
        "12 Weekly Group Trainings",
        "Platinum Support 24/7",
        "Done-With-You Set-Up",
        "Custom AI Training",
        "Unlimited Conversations",
        "Advanced Reporting Dashboard",
        "Social Media Management & AI Posts",
        "Custom Lead-Generating AI Visible Smart Website",
        "AdsNOW AI Agent (by AdsNOW.ai) included",
        "SEONOW AI Agent (by SEOexperts.ai) included",
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
      title: "50% OFF Platform Fees",
      value: "FOR LIFE",
      description: "Regular $1,994/month → now $997/month for life (50% off)",
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "50% OFF AI Voice Usage",
      value: "$0.07/min",
      description: "Regular $0.28/minute → $0.07/minute",
      icon: <Phone className="w-6 h-6 text-purple-400" />,
    },
    {
      title: "2 Months FREE Platform Access",
      value: "Save $1,994",
      description: "Complete platform access included free for 2 months",
      icon: <Clock className="w-6 h-6 text-green-400" />,
    },
    {
      title: "AdsNOW AI Platinum",
      value: "$998/mo value",
      description: "Premium AI advertising platform included",
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
    },
    {
      title: "AI SEO by SEOExperts.ai",
      value: "Included",
      description: "Professional AI-driven SEO optimization",
      icon: <MessageSquare className="w-6 h-6 text-cyan-400" />,
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
            🚀 Pilot Program - Limited Time
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

                {plan.setupFee ? (
                  <div className="mb-6">
                    <div className="text-sm text-gray-400 line-through mb-1">
                      Usually ${plan.originalSetupFee?.toLocaleString()}
                    </div>
                    <div className="text-5xl font-bold text-white mb-2">${plan.setupFee}</div>
                    <div className="text-sm text-green-400 mb-4">One-time Setup Fee (90% OFF - Pilot Program)</div>
                    <div className="text-lg text-green-400 font-semibold mb-4">
                      Includes 2 Months Platform Access FREE
                    </div>

                    {/* Pilot Program Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 rounded-lg p-4 border border-blue-500/30">
                        <div className="flex items-center justify-center mb-2">
                          <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
                        </div>
                        <div className="text-sm text-blue-300 font-semibold mb-1">PILOT PROGRAM: 50% OFF</div>
                        <div className="text-sm text-blue-300 mb-1">Monthly Fees FOR LIFE</div>
                        <div className="text-sm text-gray-400 line-through">Regular $1,994/month</div>
                        <div className="text-lg font-bold text-green-400">Only $997/month</div>
                      </div>

                      <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 rounded-lg p-4 border border-purple-500/30">
                        <div className="flex items-center justify-center mb-2">
                          <Phone className="w-5 h-5 text-purple-400 mr-2" />
                        </div>
                        <div className="text-sm text-purple-300 font-semibold mb-1">BONUS: Industry Leading</div>
                        <div className="text-sm text-purple-300 mb-1">Voice AI Pricing</div>
                        <div className="text-sm text-gray-400 line-through">Regular $0.28/minute</div>
                        <div className="text-lg font-bold text-green-400">Only $0.07/minute</div>
                      </div>
                    </div>
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

      <div className="container mx-auto max-w-6xl px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">PILOT PROGRAM BONUSES</h2>
          <p className="text-xl text-gray-300">Exclusive benefits for early adopters</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonuses.map((bonus, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{bonus.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{bonus.title}</h3>
                <div className="text-2xl font-bold text-green-400 mb-3">{bonus.value}</div>
                <p className="text-gray-400 text-sm">{bonus.description}</p>
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
