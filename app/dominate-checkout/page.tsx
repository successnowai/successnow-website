import StarryBackground from "@/components/ui/starry-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, CreditCard, Calendar } from "lucide-react"
import Link from "next/link"

export default function DominateCheckoutPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StarryBackground />

      <div className="relative z-10 pt-20">
        <main className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 text-sm font-bold rounded-full mb-6">
              🎯 SECURE YOUR EXCLUSIVE SPOT NOW
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                JED-AI Program Payment
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose your payment option to secure your exclusive territory in the most advanced AI business
              transformation program.
            </p>
          </div>

          {/* Payment Options */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Payment Plan Option */}
              <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 relative">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">Payment Plan</h3>
                    <div className="text-5xl font-bold text-white mb-2">$9,997</div>
                    <p className="text-gray-400">Setup payment</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="text-center">
                      <p className="text-lg text-gray-300">+ 5 payments of $6,977/month</p>
                    </div>

                    <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-500/20">
                      <p className="text-lg font-semibold text-blue-400">Total: $44,882</p>
                    </div>

                    <div className="bg-orange-900/30 rounded-lg p-4 border border-orange-500/20">
                      <p className="text-sm font-semibold text-orange-400">💰 Save $8,994 with Pay in Full!</p>
                    </div>

                    <div className="bg-green-900/30 rounded-lg p-4 border border-green-500/20">
                      <p className="text-sm font-semibold text-green-400">
                        💎 Includes Diamond Tier Affiliate Program!
                      </p>
                    </div>
                  </div>

                  {/* Payment Integration Placeholder */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg p-4 border border-purple-500/20">
                      <h4 className="text-lg font-semibold text-purple-400 mb-2">💳 Secure Payment Processing</h4>
                      <p className="text-gray-300 text-sm">
                        Our secure payment portal will be embedded here for payment processing.
                      </p>
                    </div>

                    <Link href="/dominate-paid">
                      <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 text-lg">
                        <CreditCard className="w-5 h-5 mr-2" />
                        Apply to Join SuccessNOW JED-AI Program NOW!
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* 30-Day Payment Plan Option */}
              <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 relative">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-1 text-sm font-bold rounded-full">
                  UNREAL DEAL
                </Badge>

                <CardContent className="p-8 pt-12">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">30-Day Payment Plan</h3>
                    <div className="text-5xl font-bold text-white mb-2">$9,888</div>
                    <p className="text-gray-400">deposit now</p>
                    <p className="text-lg text-gray-300 mt-2">4 payments of $6,500 over 30 days</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="bg-green-900/30 rounded-lg p-4 border border-green-500/20">
                      <p className="text-lg font-semibold text-green-400">💰 SAVE $8,994!</p>
                      <p className="text-sm text-gray-300">vs Payment Plan ($44,882)</p>
                    </div>

                    <div className="bg-emerald-900/30 rounded-lg p-4 border border-emerald-500/20">
                      <p className="text-sm font-semibold text-emerald-400">
                        💎 Includes Diamond Tier Affiliate Program!
                      </p>
                    </div>

                    <Badge className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 text-sm font-bold rounded-lg">
                      Only 5 Available Total!
                    </Badge>

                    <div className="text-sm text-gray-400 space-y-1">
                      <p>• $9,888 deposit now</p>
                      <p>• 4 payments of $6,500 over 30 days</p>
                      <p>• Still considered 'paid upfront'!</p>
                    </div>
                  </div>

                  {/* Payment Integration Placeholder */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg p-4 border border-purple-500/20">
                      <h4 className="text-lg font-semibold text-purple-400 mb-2">💳 Secure Payment Processing</h4>
                      <p className="text-gray-300 text-sm">
                        Our secure payment portal will be embedded here for payment processing.
                      </p>
                    </div>

                    <Link href="/dominate-paid">
                      <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 text-lg">
                        <Calendar className="w-5 h-5 mr-2" />
                        Apply for 30-Day Payment Plan
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Program Benefits Reminder */}
          <div className="max-w-4xl mx-auto mt-16">
            <Card className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-8">What You Get with JED-AI Program</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Complete AI business transformation system</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Custom AI agents for your specific industry</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">24/7 AI-powered lead generation & conversion</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Automated appointment booking & follow-up</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">AI-driven customer service & support</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Exclusive territory protection</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Diamond Tier Affiliate Program (50% recurring)</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Personal AI business strategist</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-2">Questions about payment options?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:8666125353"
                className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                (866) 612-5353
              </a>
              <span className="text-gray-400 hidden sm:block">•</span>
              <a
                href="https://successnow.ai"
                className="text-lg text-purple-400 hover:text-purple-300 transition-colors"
              >
                https://successnow.ai
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
