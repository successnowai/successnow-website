"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Clock, Users, Zap, Target, TrendingUp, Award } from "lucide-react"

export default function DiamondClassClientPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Countdown timer effect
  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 7) // 7 days from now

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })

      if (distance < 0) {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const packageIncludes = [
    {
      icon: <Zap className="h-6 w-6 text-[#00BFFF]" />,
      title: "Full Custom Design & Build",
      description: "AI Website, AI Agents, Funnels, Offers & Ads",
      value: "$60,000+",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-[#00BFFF]" />,
      title: "6 Months SEO Local Dominance",
      description: "Complete local market domination strategy",
      value: "$5,982",
    },
    {
      icon: <Target className="h-6 w-6 text-[#00BFFF]" />,
      title: "6 Months Expert Ad Manager",
      description: "2 platforms managed by professionals",
      value: "$11,982",
    },
    {
      icon: <Star className="h-6 w-6 text-[#00BFFF]" />,
      title: "SuccessNOW Platform & AI Agents",
      description: "Custom built and optimized for your business",
      value: "Priceless !!",
    },
    {
      icon: <Users className="h-6 w-6 text-[#00BFFF]" />,
      title: "6 Months 1-on-1 Weekly Coaching",
      description: "Personal accountability and guidance",
      value: "Priceless !!",
    },
    {
      icon: <Award className="h-6 w-6 text-[#00BFFF]" />,
      title: "Diamond Class Mastermind",
      description: "Exclusive small group coaching sessions",
      value: "$19,977",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-950 to-black py-20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-gray-900/50 to-black/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(192,192,192,0.1)_0%,transparent_70%)]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          {/* Limited Availability Badge */}
          <div className="mb-8">
            <Badge className="bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 text-black text-lg px-6 py-2 font-bold shadow-2xl border border-gray-300/50">
              💎 DIAMOND CLASS - LIMITED TO 5 PEOPLE PER INDUSTRY
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-200 bg-clip-text text-transparent drop-shadow-2xl">
            SuccessNOW Diamond Class
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-200 bg-clip-text text-transparent">
            Legendary Success Package
          </h2>

          <p className="text-xl sm:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            The most exclusive, comprehensive business transformation program ever created. Limited to 5 people per
            industry every 6 months.
          </p>

          {/* Countdown Timer */}
          <div className="mb-12">
            <h3 className="text-xl mb-4 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-200 bg-clip-text text-transparent">
              ⏰ Limited Time Offer Expires In:
            </h3>
            <div className="flex justify-center space-x-4 text-center">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div
                  key={unit}
                  className="bg-gradient-to-b from-black via-gray-900 to-black rounded-lg p-4 min-w-[80px] border border-gray-300/20 shadow-2xl backdrop-blur-sm"
                >
                  <div className="text-3xl font-bold text-[#00BFFF]">{value}</div>
                  <div className="text-sm text-gray-400 capitalize">{unit}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Proposition */}
          <div className="bg-gradient-to-r from-black/80 via-gray-900/60 to-black/80 rounded-2xl p-8 mb-12 border border-gray-300/30 shadow-2xl backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-200 bg-clip-text text-transparent">
              Total Package Value: $59,882
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-xl font-bold mb-2 text-[#00BFFF]">Setup Payment Option:</h4>
                <p className="text-lg">$9,997 setup + 5 payments of $6,977/month</p>
                <p className="text-green-400 font-bold">25% OFF Regular Price!</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-[#00BFFF]">Pay in Full & Save 40%:</h4>
                <p className="text-2xl font-bold bg-gradient-to-r from-gray-300 via-gray-100 to-gray-200 bg-clip-text text-transparent">
                  $35,888
                </p>
                <p className="text-green-400">Finance with Sezzle & get 40% off!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#00BFFF] to-gray-200 bg-clip-text text-transparent">
            What's Included in Diamond Class
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packageIncludes.map((item, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-black via-gray-900 to-black border-gray-300/30 hover:border-gray-200/50 transition-all duration-300 hover:scale-105 shadow-2xl backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {item.icon}
                    <h3 className="text-xl font-bold ml-3 text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="text-[#00BFFF] font-bold text-lg">Value: {item.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusivity Section */}
      <section className="py-20 bg-gradient-to-r from-black/95 via-gray-950/90 to-black/95">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 border border-yellow-400/20">
            <Clock className="h-16 w-16 text-gray-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-200 bg-clip-text text-transparent">
              Ultra-Exclusive Access
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-[#00BFFF] mb-2">5</div>
                <p className="text-gray-300">People per industry maximum</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#00BFFF] mb-2">6</div>
                <p className="text-gray-300">Months between openings</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#00BFFF] mb-2">100%</div>
                <p className="text-gray-300">Success accountability</p>
              </div>
            </div>
            <p className="text-xl text-gray-300 mb-8">
              This isn't just a program - it's your competitive advantage. We limit access to ensure you dominate your
              market without internal competition from other Diamond Class members.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Why Diamond Class Will Transform Your Business
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                "Outperform competition by light years with cutting-edge AI",
                "Complete market dominance in your local area",
                "Custom-built systems designed specifically for your business",
                "Weekly accountability to ensure your success",
                "Access to the latest tools, ads, and AI technology",
                "Small group mastermind with other industry leaders",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#00BFFF]/10 to-yellow-400/10 rounded-2xl p-8 border border-[#00BFFF]/20">
              <h3 className="text-2xl font-bold mb-6 text-[#00BFFF]">Success Guarantee</h3>
              <p className="text-gray-300 mb-6">
                We're so confident in the Diamond Class program that we provide ongoing support, accountability, and
                optimization until you achieve the results you're looking for.
              </p>
              <div className="bg-gradient-to-r from-green-400/20 to-[#00BFFF]/20 rounded-lg p-4">
                <p className="text-green-400 font-bold text-center">🎯 Your Success is Our Success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-950 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-gray-200 to-[#00BFFF] bg-clip-text text-transparent">
            Secure Your Diamond Class Spot Now
          </h2>

          <p className="text-xl text-gray-300 mb-12">
            Only 5 spots available per industry. Once they're gone, you'll have to wait 6 months for the next opening.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-black via-gray-900 to-black border-gray-300/30 hover:border-gray-200/50 transition-all duration-300 hover:scale-105 shadow-2xl backdrop-blur-sm p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4 text-[#00BFFF]">Payment Plan</h3>
                <div className="text-3xl font-bold mb-2 text-white">$9,997</div>
                <p className="text-gray-300 mb-4">Setup payment</p>
                <div className="text-xl mb-4 text-white">+ 5 payments of $6,977/month</div>
                <Badge className="bg-green-500 text-white mb-6">25% OFF</Badge>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 hover:from-gray-400 hover:via-gray-300 hover:to-gray-400 text-black font-bold shadow-2xl border border-gray-300/50"
                  onClick={() => (window.location.href = "/diamond/signup-payment-plan")}
                >
                  Choose Payment Plan
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800 via-gray-900 to-black border-gray-300/50 p-8 relative shadow-2xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 text-black font-bold px-4 py-2">
                  BEST VALUE
                </Badge>
              </div>
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-200 bg-clip-text text-transparent">
                  Pay in Full
                </h3>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-200 bg-clip-text text-transparent">
                  $35,888
                </div>
                <p className="text-gray-300 mb-4">One-time payment</p>
                <Badge className="bg-green-500 text-white mb-6">40% OFF</Badge>
                <p className="text-sm text-gray-300 mb-6">Finance with Sezzle & still get 40% off!</p>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 hover:from-gray-400 hover:via-gray-300 hover:to-gray-400 text-black font-bold shadow-2xl border border-gray-300/50"
                  onClick={() => (window.location.href = "/diamond/signup-pay-full")}
                >
                  Pay in Full & Save 40%
                </Button>
              </CardContent>
            </Card>
          </div>

          <p className="text-sm text-gray-400 mb-8">
            🔒 Secure checkout • 💳 All major payment methods accepted • 📞 24/7 support
          </p>

          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
            <p className="text-red-400 font-bold text-lg">
              ⚠️ WARNING: Spots are filling fast. Don't miss your chance to dominate your industry.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
