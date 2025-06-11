"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function DominatePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">SuccessNOW JED-AI Program</h1>
          <p className="text-2xl md:text-3xl text-red-400 font-semibold mb-4">
            THE AI revolution isn't coming, IT's Already here!
          </p>
          <p className="text-xl md:text-2xl text-blue-400 font-semibold mb-8">
            Become a <span className="text-cyan-400">JED-AI MASTER</span> and Master AI before AI becomes your{" "}
            <span className="text-cyan-400">MASTER</span>
          </p>
          <p className="text-lg text-gray-300 mb-12">
            Join this Program to be a part of the revolution not a victim of it!
          </p>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Your Path To <span className="text-cyan-400">Explosive Growth</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              The most exclusive, comprehensive AI Domination with SuccessNOW business transformation program ever
              created. Limited to 5 people per industry every 6 months - Only 1 per geographical area to make sure you
              dominate!
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Why the SuccessNOW JED-AI Program Will Transform Your Business
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-black text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">Outperform competition by light years with cutting-edge AI</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-black text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">Complete market dominance in your local area</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-black text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">Custom-built systems designed specifically for your business</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-black text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">2x weekly accountability to ensure your success</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-black text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">Access to the latest tools, ads, and AI technology</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-black text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">Fully automated business systems within 6 months</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-black text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">50% recurring MRR from every referral you make</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-black text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">Diamond Tier Affiliate Partner status included</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 border border-blue-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">100% Success Guarantee</h3>
              <p className="text-gray-300 mb-6">
                We are so sure of our systems that if after 6 months your business is not fully automated, we will
                cancel your services and give you back 100% of your investment! No questions asked!
              </p>
              <div className="bg-gradient-to-r from-pink-900/50 to-pink-800/50 border border-pink-600 rounded-xl p-4">
                <p className="text-pink-400 font-semibold flex items-center">
                  <span className="mr-2">🛡️</span>
                  Your Success is Our Success
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra-Exclusive Access */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 border border-gray-600 rounded-2xl p-12 text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">⏰</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ultra-Exclusive Access</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">5</div>
                <p className="text-gray-300">People per industry maximum</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">1</div>
                <p className="text-gray-300">Per geographical area only</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                <p className="text-gray-300">Market domination</p>
              </div>
            </div>

            <p className="text-lg text-gray-300">
              This isn't just a program - it's your competitive advantage. We limit access to ensure you dominate your
              market without internal competition from other AI Domination Program members in your area!
            </p>
          </div>
        </div>
      </section>

      {/* Done-For-You Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-600 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <span className="text-2xl mr-3">⭐</span>
              <h2 className="text-2xl font-bold">Complete Done-For-You AI Revolution</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Be the FIRST to adopt cutting-edge AI! Done-for-you custom builds, done-for-you ads, done-for-you AI
              agents, plus elite performance coaching. You're not just getting a service - you're getting a competitive
              advantage that doesn't exist anywhere else!
            </p>
            <div className="text-2xl font-bold text-yellow-400">Value: PRICELESS</div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400">
            What's Included in the SuccessNOW JED-AI Program
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 border-gray-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl text-blue-400 mr-3">⚡</span>
                  <h3 className="text-lg font-bold">Full Custom Design & Build</h3>
                </div>
                <p className="text-gray-300 mb-4 text-sm">AI Website, AI Agents, Funnels, Offers & Ads</p>
                <div className="text-lg font-bold text-blue-400">Value: $60,000+</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 border-gray-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl text-blue-400 mr-3">📈</span>
                  <h3 className="text-lg font-bold">6 Months SEO Local Dominance</h3>
                </div>
                <p className="text-gray-300 mb-4 text-sm">Complete local market domination strategy</p>
                <div className="text-lg font-bold text-blue-400">Value: $5,982</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 border-gray-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl text-blue-400 mr-3">🎯</span>
                  <h3 className="text-lg font-bold">6 Months Expert Ad Manager</h3>
                </div>
                <p className="text-gray-300 mb-4 text-sm">2 platforms managed by professionals</p>
                <div className="text-lg font-bold text-blue-400">Value: $11,982</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 border-gray-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl text-blue-400 mr-3">⭐</span>
                  <h3 className="text-lg font-bold">SuccessNOW Platform & AI Agents</h3>
                </div>
                <p className="text-gray-300 mb-4 text-sm">Custom built and optimized for your business</p>
                <div className="text-lg font-bold text-blue-400">Value: $11,964</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 border-gray-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl text-blue-400 mr-3">👥</span>
                  <h3 className="text-lg font-bold">2x Weekly 1-on-1 Performance Coaching</h3>
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  Personal accountability and guidance - Success is imminent!
                </p>
                <div className="text-lg font-bold text-blue-400">Value: $11,964</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 border-gray-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl text-blue-400 mr-3">💰</span>
                  <h3 className="text-lg font-bold">Diamond Tier Affiliate Partner Program</h3>
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  Automatic enrollment in our exclusive Diamond Tier Affiliate Program! Earn 50% recurring MRR from
                  every person you refer to SuccessNOW. Turn your network into a passive income goldmine!
                </p>
                <div className="text-lg font-bold text-green-400">Value: UNLIMITED</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Affiliate Program Status */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-900/50 to-green-800/50 border border-green-600 rounded-2xl p-8 mb-16">
            <div className="flex items-center justify-center mb-4">
              <span className="text-2xl text-green-400 mr-3">💰</span>
              <h3 className="text-2xl font-bold text-green-400">EXCLUSIVE DIAMOND TIER AFFILIATE PROGRAM</h3>
            </div>
            <Badge variant="secondary" className="bg-gray-700 text-white px-6 py-2 text-lg mb-6">
              🚀 SUCCESSNOW JED-AI PROGRAM - APPLICATION UNDER REVIEW
            </Badge>
            <p className="text-gray-300 mb-6">
              AI Domination Program members automatically get enrolled in our Diamond Tier Affiliate Partner Program
            </p>
            <p className="text-xl font-semibold text-green-400 mb-4">
              Earn 50% Recurring MRR from every person you refer to SuccessNOW!
            </p>
            <p className="text-gray-300">
              Turn your network into a passive income goldmine while helping others transform their businesses
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Payment Plan */}
            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 border-gray-600 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-blue-400 mb-6">Payment Plan</h3>
                <div className="text-4xl font-bold mb-2">$9,997</div>
                <p className="text-gray-300 mb-4">Setup payment</p>
                <p className="text-lg mb-6">+ 5 payments of $6,977/month</p>

                <div className="bg-blue-900/30 border border-blue-600 rounded-lg p-4 mb-6">
                  <p className="text-blue-400 font-semibold">Total: $44,882</p>
                </div>

                <div className="bg-orange-900/30 border border-orange-600 rounded-lg p-4 mb-4">
                  <p className="text-orange-400 font-semibold">💰 Save $8,994 with Pay in Full!</p>
                </div>

                <div className="bg-green-900/30 border border-green-600 rounded-lg p-4 mb-6">
                  <p className="text-green-400 font-semibold">💎 Includes Diamond Tier Affiliate Program!</p>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                  Apply to Join SuccessNOW JED-AI Program NOW!
                </Button>
              </CardContent>
            </Card>

            {/* 30-Day Payment Plan */}
            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 border-gray-600 text-white relative">
              <Badge className="absolute -top-3 right-4 bg-red-600 text-white px-4 py-1">UNREAL DEAL</Badge>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-blue-400 mb-6">30-Day Payment Plan</h3>
                <div className="text-4xl font-bold mb-2">
                  $9,888 <span className="text-lg font-normal">deposit now</span>
                </div>
                <p className="text-lg mb-6">4 payments of $6,500 over 30 days</p>

                <div className="bg-green-900/30 border border-green-600 rounded-lg p-4 mb-4">
                  <p className="text-green-400 font-semibold">💰 SAVE $8,994!</p>
                  <p className="text-sm text-gray-300">vs Payment Plan ($44,882)</p>
                </div>

                <div className="bg-green-900/30 border border-green-600 rounded-lg p-4 mb-6">
                  <p className="text-green-400 font-semibold">💎 Includes Diamond Tier Affiliate Program!</p>
                </div>

                <Badge className="bg-red-600 text-white px-4 py-2 mb-6">Only 5 Available Total!</Badge>

                <div className="text-sm text-gray-300 mb-6 space-y-1">
                  <p>• $9,888 deposit now</p>
                  <p>• 4 payments of $6,500 over 30 days</p>
                  <p>• Still considered "paid upfront"!</p>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                  Apply for 30-Day Payment Plan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Limited Time Offer */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <span className="text-2xl mr-3">⏰</span>
            <h2 className="text-2xl font-bold">Limited Time Offer Expires In:</h2>
          </div>

          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-400">0</div>
              <div className="text-sm text-gray-400">Days</div>
            </div>
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-400">0</div>
              <div className="text-sm text-gray-400">Hours</div>
            </div>
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-400">0</div>
              <div className="text-sm text-gray-400">Minutes</div>
            </div>
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-400">0</div>
              <div className="text-sm text-gray-400">Seconds</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2024 SuccessNOW JED-AI Program. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
