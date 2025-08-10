"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, TrendingUp, Star, Zap, DollarSign, Clock } from "lucide-react"

export default function AffiliateClientPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0">
              💰 Affiliate Program
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Earn Recurring Commissions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Partner with SuccessNOW and earn recurring commissions by referring businesses to our AI-powered
              solutions. Build your passive income stream today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Commission Structure Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-cyan-400 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Affiliates</h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Perfect for individuals and businesses looking to earn recurring commissions
            </p>
          </motion.div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Commission Structure:</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  tier: "1-9 Active Referrals",
                  rate: "20% MRR",
                  color: "from-blue-500 to-cyan-500",
                  example: "5 referrals × $997 × 20% = $997/month",
                },
                {
                  tier: "10-24 Active Referrals",
                  rate: "25% MRR",
                  color: "from-green-500 to-emerald-500",
                  example: "15 referrals × $997 × 25% = $3,738/month",
                },
                {
                  tier: "25+ Active Referrals",
                  rate: "30% MRR",
                  color: "from-orange-500 to-red-500",
                  example: "30 referrals × $997 × 30% = $8,973/month",
                },
              ].map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredCard(tier.tier)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="relative"
                >
                  <Card
                    className={`bg-gray-800/50 border-gray-700 transition-all duration-300 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/25 ${
                      hoveredCard === tier.tier ? "scale-105 shadow-2xl" : ""
                    }`}
                  >
                    <CardContent className="p-6 text-center">
                      <h4 className="text-lg font-semibold text-white mb-2">{tier.tier}</h4>
                      <div
                        className={`text-3xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent mb-4`}
                      >
                        {tier.rate}
                      </div>
                      <p className="text-sm text-gray-400">Example: {tier.example}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12 mb-8"
          >
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20 backdrop-blur-sm hover:border-pink-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Earning?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join thousands of affiliates already earning recurring commissions with our proven system. Apply now and
                start building your passive income stream.
              </p>
              <Link href="https://partner.successnow.ai">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-pink-500 hover:to-pink-600 text-white px-12 py-4 text-xl font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-pink-500/25">
                  Signup Now to Become Affiliate!
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AgencyNOW Partner Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <Card className="relative overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl hover:border-pink-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20">
              {/* Glassmorphic background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl" />

              {/* Subtle glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-pink-500/20 to-cyan-500/20 rounded-lg blur-sm opacity-50" />

              <div className="absolute top-4 right-4 z-10">
                <Zap className="h-8 w-8 text-cyan-400" />
              </div>

              <CardContent className="relative z-10 p-8">
                <div className="text-center mb-8">
                  <Badge className="mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-pink-500 hover:to-pink-600 transition-all duration-300">
                    🚀 CUSTOM DFY AGENCY BUILD
                  </Badge>
                  <h3 className="text-4xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors duration-300">
                    Become an AgencyNOW Partner
                  </h3>
                  <p className="text-gray-300 text-lg mb-6">
                    Launch your own AI agency with our complete done-for-you setup
                  </p>
                </div>

                {/* Value Stats */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:from-pink-500/20 group-hover:to-pink-600/20 transition-all duration-300">
                      <DollarSign className="h-8 w-8 text-cyan-400 group-hover:text-pink-400 transition-colors duration-300" />
                    </div>
                    <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:text-pink-400 transition-colors duration-300">
                      $50,000+
                    </div>
                    <div className="text-gray-300">Custom Build Value</div>
                  </div>
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:from-pink-500/20 group-hover:to-pink-600/20 transition-all duration-300">
                      <Zap className="h-8 w-8 text-cyan-400 group-hover:text-pink-400 transition-colors duration-300" />
                    </div>
                    <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:text-pink-400 transition-colors duration-300">
                      10,000+
                    </div>
                    <div className="text-gray-300">Hours of Development</div>
                  </div>
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:from-pink-500/20 group-hover:to-pink-600/20 transition-all duration-300">
                      <Clock className="h-8 w-8 text-cyan-400 group-hover:text-pink-400 transition-colors duration-300" />
                    </div>
                    <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:text-pink-400 transition-colors duration-300">
                      7 Days
                    </div>
                    <div className="text-gray-300">To Launch</div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 rounded-lg p-6 mb-8 border border-gray-700/50 backdrop-blur-sm text-center hover:border-pink-500/30 transition-all duration-300">
                  <div className="text-gray-400 line-through mb-2">Regular Price: $24,888</div>
                  <div className="text-5xl font-bold text-white mb-2">
                    <span className="text-cyan-400">$9,997</span>
                  </div>
                  <div className="text-green-400 text-xl font-semibold mb-2">Save $14,891 - Limited Time</div>
                  <div className="text-gray-300">One-time setup fee • No monthly platform fees EVER</div>
                </div>

                {/* What's Included */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-white mb-6 text-center">What's Included:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Custom-branded AI agency website",
                      "Complete AI voice and chat systems",
                      "Proven funnels for every major niche",
                      "Client onboarding automation",
                      "CRM and lead management system",
                      "Payment processing integration",
                      "White-label SuccessNOW platform access",
                      "Marketing playbooks and templates",
                      "Ongoing platform updates and features",
                      "Technical support and training",
                      "Zero hosting or platform fees",
                      "Years of optimization included",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center group">
                        <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0 group-hover:text-pink-400 transition-colors duration-300" />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Savings Highlight */}
                <div className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 rounded-lg p-6 mb-8 border border-gray-700/50 backdrop-blur-sm text-center hover:border-pink-500/30 transition-all duration-300">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">$1,994/month SAVED</div>
                  <div className="text-gray-300">vs. other platforms (more capital for ads!)</div>
                </div>

                <div className="text-center">
                  <Link href="https://agencynow.ai">
                    <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-pink-500 hover:to-pink-600 text-white font-semibold px-12 py-4 text-xl rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-pink-500/25">
                      Apply Now - AgencyNOW Partner
                    </Button>
                  </Link>
                  <p className="text-gray-400 mt-4">Launch in 7 days • 30-day money-back guarantee</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Partner With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join a program that's designed for your success with industry-leading support and resources
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Recurring Revenue",
                description: "Earn monthly commissions for as long as your referrals remain active clients",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Dedicated Support",
                description: "Personal account manager and dedicated support team to help you succeed",
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Marketing Materials",
                description: "Professional marketing assets, landing pages, and sales materials provided",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-cyan-400 group-hover:from-pink-500/20 group-hover:to-pink-600/20 group-hover:text-pink-400 transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
