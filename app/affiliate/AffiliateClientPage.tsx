"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, TrendingUp, Star, Crown } from "lucide-react"

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
                    className={`bg-gray-800/50 border-gray-700 transition-all duration-300 ${
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
            className="text-center"
          >
            <Link href="/affiliate/apply">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                Apply for Affiliate Program
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trusted Platinum Partners Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border-yellow-500/30 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Crown className="h-8 w-8 text-yellow-400" />
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Badge className="mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold">
                    EXCLUSIVE PROGRAM
                  </Badge>
                  <h3 className="text-3xl font-bold text-white mb-4">Trusted Platinum Partners</h3>
                  <p className="text-gray-300 text-lg">
                    Elite program for top performers - Limited to 5 partners globally per niche
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-6 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-400 mb-2">
                      EARN unlimited monthly recurring revenue
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    {["40% Monthly Recurring Revenue", "Exclusive territory rights", "Priority support & training"].map(
                      (benefit, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </div>
                      ),
                    )}
                  </div>
                  <div className="space-y-4">
                    {["Co-marketing opportunities", "Custom commission structures"].map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <Link href="/affiliate/apply?program=Platinum">
                    <Button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105">
                      Apply for Platinum Program
                    </Button>
                  </Link>
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
                className="text-center"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-cyan-400">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule a Consultation Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden border-0 bg-gradient-to-r from-purple-900 to-blue-900">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 min-h-[400px]">
                  {/* Left side - Content */}
                  <div className="bg-gradient-to-br from-purple-800 to-pink-800 p-8 md:p-12 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Discuss Your Case?</h2>
                      <p className="text-lg text-white/90 leading-relaxed">
                        Contact us today for a confidential consultation. Our team is here to listen and provide the
                        guidance you need. Fill out the form, and we'll get back to you promptly.
                      </p>
                    </motion.div>
                  </div>

                  {/* Right side - Form */}
                  <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule a Consultation</h3>
                      <form className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Select a Service / Type of Law
                          </label>
                          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                            <option value="">Choose a service...</option>
                            <option value="ai-automation">AI Automation</option>
                            <option value="lead-generation">Lead Generation</option>
                            <option value="affiliate-program">Affiliate Program</option>
                            <option value="custom-solution">Custom Solution</option>
                          </select>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 text-lg font-semibold rounded-lg transition-all duration-300">
                          Schedule Consultation →
                        </Button>
                      </form>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
