"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Users, TrendingUp, DollarSign, Award } from "lucide-react"
import Link from "next/link"

export default function AffiliateClientPage() {
  const generalCommissionTiers = [
    { range: "1-10 Active Referrals", commission: "20%", color: "bg-blue-500/10 text-blue-600" },
    { range: "11-25 Active Referrals", commission: "25%", color: "bg-green-500/10 text-green-600" },
    { range: "26-50 Active Referrals", commission: "30%", color: "bg-orange-500/10 text-orange-600" },
    { range: "51+ Active Referrals", commission: "35%", color: "bg-purple-500/10 text-purple-600" },
  ]

  const incomeExample = [
    { month: "Month 1", subscribers: 2, income: "$398.80" },
    { month: "Month 2", subscribers: 4, income: "$797.60" },
    { month: "Month 3", subscribers: 6, income: "$1,196.40" },
    { month: "Month 4", subscribers: 8, income: "$1,595.20" },
    { month: "Month 5", subscribers: 10, income: "$1,994.00" },
    { month: "Month 6", subscribers: 12, income: "$2,991.00" },
  ]

  const longTermProjections = [
    { period: "Month 12", subscribers: 24, commission: "25%", income: "$5,982.00/month" },
    { period: "Month 24", subscribers: 48, commission: "30%", income: "$14,359.20/month" },
    { period: "Month 36", subscribers: 72, commission: "35%", income: "$25,100.40/month" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30">Affiliate Program</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            SuccessNOW.ai
            <span className="block text-blue-400">Affiliate Program</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our affiliate program and earn up to 40% commission on recurring revenue. Two-tier program designed to
            reward your success generously.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg glow-blue">
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Standard Affiliate */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-8 w-8 text-blue-400" />
                  <CardTitle className="text-2xl">General Affiliates</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Perfect for individuals and businesses looking to earn recurring commissions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold text-lg mb-3">Commission Structure:</h4>
                {generalCommissionTiers.map((tier, index) => (
                  <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                    <span className="text-sm">{tier.range}</span>
                    <Badge className={tier.color}>{tier.commission} MRR</Badge>
                  </div>
                ))}
                <div className="pt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm">Unique 15% off setup code</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm">Personalized landing page</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm">Affiliate portal access</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Platinum Affiliate */}
            <Card className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border-yellow-500/20 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-8 w-8 text-yellow-400" />
                  <CardTitle className="text-2xl">Trusted Platinum Partners</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Elite program for top performers - Limited to 5 partners globally per niche
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">50+ Active Referrals</span>
                    <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">40% MRR</Badge>
                  </div>
                </div>
                <h4 className="font-semibold text-lg">Requirements & Benefits:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm">Complete full training program</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm">Focus on single niche specialization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm">Build and manage your own team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm">Retain commission difference from team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm">Group calls & training support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Income Growth Example */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Affiliate Income Growth Example</h2>
            <p className="text-gray-300 text-lg">
              Conservative scenario: Just 2 new subscribers per month at $997/month
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* First 6 Months */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-blue-400" />
                  First 6 Months Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {incomeExample.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                      <div>
                        <span className="font-medium">{item.month}</span>
                        <span className="text-sm text-gray-400 ml-2">({item.subscribers} subscribers)</span>
                      </div>
                      <span className="font-bold text-green-400">{item.income}</span>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total by Month 6:</span>
                      <span className="font-bold text-xl text-green-400">$8,973.00 MRR</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Long-term Projections */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-green-400" />
                  Long-term Projections
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {longTermProjections.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-lg">{item.period}</span>
                        <Badge className="bg-green-500/20 text-green-300">{item.commission}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">{item.subscribers} subscribers</span>
                        <span className="font-bold text-xl text-green-400">{item.income}</span>
                      </div>
                    </div>
                  ))}
                  <div className="mt-6 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                    <p className="text-center text-yellow-300 font-medium">
                      This is recurring income, growing each month!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Important Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Commissions calculated on total active subscriptions at month-end</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Earnings are recurring monthly based on active subscribers</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Higher referrals automatically upgrade your commission tier</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">All affiliates must apply and be approved</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Unique 15% setup discount code for all affiliates</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Personalized landing pages and portal access included</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Earning?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Your effort compounds into true freedom. Start referring today and watch your earnings grow with
            SuccessNOW.ai!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg glow-blue">
              <Link href="/apply">Apply for General Affiliate</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-yellow-500/50 text-yellow-300 hover:bg-yellow-500/10 px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/apply">Apply for Platinum Program</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
