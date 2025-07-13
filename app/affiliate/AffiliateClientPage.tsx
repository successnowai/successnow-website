"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Users, DollarSign, TrendingUp, Star, Crown } from "lucide-react"
import Link from "next/link"

export default function AffiliateClientPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black">
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:50px_50px] opacity-20"></div>
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-64 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-3000"></div>
        <div className="absolute bottom-64 left-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Affiliate Program
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Partner with SuccessNOW and earn recurring commissions by referring businesses to our AI-powered solutions.
            Build your passive income stream today.
          </p>
        </div>

        {/* General Affiliates Card */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card
            className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
            onMouseEnter={() => setHoveredCard("general")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-cyan-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">General Affiliates</h2>
              </div>
              <p className="text-gray-300 text-lg mb-8">
                Perfect for individuals and businesses looking to earn recurring commissions
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-6">Commission Structure:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-white font-medium mb-2">1-10 Active Referrals</div>
                    <div className="text-blue-400 text-xl font-bold">20% MRR</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-white font-medium mb-2">11-25 Active Referrals</div>
                    <div className="text-green-400 text-xl font-bold">25% MRR</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-white font-medium mb-2">26-50 Active Referrals</div>
                    <div className="text-orange-400 text-xl font-bold">30% MRR</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-white font-medium mb-2">51+ Active Referrals</div>
                    <div className="text-purple-400 text-xl font-bold">35% MRR</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <DollarSign className="h-12 w-12 text-green-400 mx-auto mb-3" />
                  <h4 className="text-white font-semibold mb-2">Recurring Revenue</h4>
                  <p className="text-gray-300">Earn monthly commissions for as long as your referrals stay active</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                  <h4 className="text-white font-semibold mb-2">Scaling Rewards</h4>
                  <p className="text-gray-300">Higher commission rates as you refer more businesses</p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-purple-400 mx-auto mb-3" />
                  <h4 className="text-white font-semibold mb-2">Full Support</h4>
                  <p className="text-gray-300">Marketing materials, training, and dedicated support team</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-6 border border-cyan-500/20">
                <h4 className="text-white font-semibold mb-3">Income Examples:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="text-gray-300">
                    <span className="text-cyan-400 font-medium">10 referrals at $997/month:</span> $1,994/month
                    recurring
                  </div>
                  <div className="text-gray-300">
                    <span className="text-green-400 font-medium">25 referrals at $997/month:</span> $6,231/month
                    recurring
                  </div>
                  <div className="text-gray-300">
                    <span className="text-orange-400 font-medium">50 referrals at $997/month:</span> $14,955/month
                    recurring
                  </div>
                  <div className="text-gray-300">
                    <span className="text-purple-400 font-medium">100 referrals at $997/month:</span> $34,895/month
                    recurring
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Benefits */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Why Join Our Affiliate Program?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "High-converting AI solutions that businesses actually need",
              "Comprehensive marketing materials and sales support",
              "Real-time tracking dashboard for all your referrals",
              "Monthly payouts with transparent reporting",
              "Dedicated affiliate manager for top performers",
              "Exclusive training sessions and webinars",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="h-6 w-6 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted Platinum Partners Card - Now at bottom */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card
            className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
            onMouseEnter={() => setHoveredCard("platinum")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute top-4 right-4">
              <Star className="h-6 w-6 text-yellow-400 fill-current" />
            </div>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Crown className="h-8 w-8 text-yellow-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Trusted Platinum Partners</h2>
                <Badge className="ml-4 bg-yellow-400/20 text-yellow-400 border-yellow-400/30">ELITE</Badge>
              </div>
              <p className="text-gray-300 text-lg mb-8">
                Elite program for top performers - Limited to 5 partners globally per niche
              </p>

              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-6 border border-yellow-500/20 mb-8">
                <div className="text-center">
                  <div className="text-yellow-400 text-2xl font-bold mb-2">
                    EARN unlimited monthly recurring revenue
                  </div>
                  <div className="text-gray-300">Exclusive territory rights and premium commission structure</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  {[
                    "Exclusive territory protection",
                    "Premium 40% commission rate",
                    "Direct access to C-level executives",
                    "Custom marketing campaigns",
                    "Priority technical support",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-yellow-400" />
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {[
                    "Quarterly business reviews",
                    "Co-branded marketing materials",
                    "Joint webinar opportunities",
                    "Advanced analytics dashboard",
                    "Dedicated account manager",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-yellow-400" />
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Start Earning?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of affiliates who are already earning recurring commissions with SuccessNOW AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/affiliate/apply?program=General"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Apply for General Program
            </Link>
            <Link
              href="/affiliate/apply?program=Platinum"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-yellow-400 bg-transparent border-2 border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Apply for Platinum Program
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
