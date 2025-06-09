"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { CheckCircle, Star, Clock, Users, Zap, Target, TrendingUp, DollarSign } from "lucide-react"
import { RotatingText } from "@/components/ui/rotating-text"

const DiamondClassClientPage = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-12-31T23:59:59-05:00") - +new Date()
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const seconds = Math.floor((difference / 1000) % 60)
      return { days, hours, minutes, seconds }
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer)
  })

  const rotatingWords = [
    "Market Domination",
    "AI Revolution",
    "Business Automation",
    "Explosive Growth",
    "Competitive Edge",
    "Done-For-You Systems",
    "Elite Coaching",
    "Guaranteed Success",
  ]

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
      value: "$11,964",
    },
    {
      icon: <Users className="h-6 w-6 text-[#00BFFF]" />,
      title: "2x Weekly 1-on-1 Performance Coaching",
      description: "Personal accountability and guidance - Success is imminent!",
      value: "$11,964",
    },
    {
      icon: <DollarSign className="h-6 w-6 text-green-400" />,
      title: "Diamond Tier Affiliate Partner Program",
      description:
        "Automatic enrollment in our exclusive Diamond Tier Affiliate Program! Earn 50% recurring MRR from every person you refer to SuccessNOW. Turn your network into a passive income goldmine!",
      value: "UNLIMITED",
    },
    {
      icon: <Star className="h-6 w-6 text-yellow-400" />,
      title: "Complete Done-For-You AI Revolution",
      description:
        "Be the FIRST to adopt cutting-edge AI! Done-for-you custom builds, done-for-you ads, done-for-you AI agents, plus elite performance coaching. You're not just getting a service - you're getting a competitive advantage that doesn't exist anywhere else!",
      value: "PRICELESS",
    },
  ]

  return (
    <div className="bg-black text-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        {/* Main Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-950 to-black py-20 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-gray-900/50 to-black/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(192,192,192,0.1)_0%,transparent_70%)]"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
            {/* Limited Availability Badge */}
            <div className="mb-8 relative">
              <div className="absolute inset-0 bg-[#00BFFF] blur-xl opacity-60 animate-pulse rounded-full scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00BFFF]/40 via-[#00BFFF]/60 to-[#00BFFF]/40 blur-lg rounded-full scale-105"></div>
              <Badge className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-[#00BFFF] text-lg px-6 py-2 font-bold shadow-2xl border border-[#00BFFF]/50 backdrop-blur-sm">
                🚀 AI DOMINATION PROGRAM - LIMITED TO 5 PEOPLE PER INDUSTRY - ONLY 1 PER GEOGRAPHICAL AREA!
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-200 bg-clip-text text-transparent drop-shadow-2xl">
              SuccessNOW AI Domination Program
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-300 via-gray-100 to-gray-200 bg-clip-text text-transparent">
                Your Path To
              </h2>
              <RotatingText
                words={rotatingWords}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00BFFF]"
              />
            </div>

            <p className="text-xl sm:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
              The most exclusive, comprehensive business transformation program ever created. Limited to 5 people per
              industry every 6 months - Only 1 per geographical area to make sure you dominate!
            </p>

            {/* New Affiliate Benefit Highlight */}
            <div className="bg-gradient-to-r from-green-500/10 via-green-400/20 to-green-500/10 rounded-2xl p-6 mb-8 border border-green-400/30 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <DollarSign className="h-8 w-8 text-green-400 mr-3" />
                <h3 className="text-2xl font-bold text-green-400">EXCLUSIVE DIAMOND TIER AFFILIATE PROGRAM</h3>
              </div>
              <p className="text-lg text-gray-300 mb-2">
                AI Domination Program members automatically get enrolled in our Diamond Tier Affiliate Partner Program
              </p>
              <p className="text-xl font-bold text-green-400">
                Earn 50% Recurring MRR from every person you refer to SuccessNOW!
              </p>
              <p className="text-gray-300 text-sm mt-2">
                Turn your network into a passive income goldmine while helping others transform their businesses
              </p>
            </div>

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
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 bg-gradient-to-b from-black via-gray-950 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#00BFFF] to-gray-200 bg-clip-text text-transparent">
              What's Included in the AI Domination Program
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packageIncludes.map((item, index) => (
                <Card
                  key={index}
                  className={`bg-gradient-to-br from-black via-gray-900 to-black border-gray-300/30 hover:border-gray-200/50 transition-all duration-300 hover:scale-105 shadow-2xl backdrop-blur-sm ${
                    index === 5 ? "border-green-400/80" : index === 6 ? "border-yellow-400/80" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {item.icon}
                      <h3 className="text-xl font-bold ml-3 text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    <div
                      className={`font-bold text-lg ${
                        index === 5 ? "text-green-400" : index === 6 ? "text-yellow-400" : "text-[#00BFFF]"
                      }`}
                    >
                      Value: {item.value}
                    </div>
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
                  <div className="text-4xl font-bold text-[#00BFFF] mb-2">1</div>
                  <p className="text-gray-300">Per geographical area only</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#00BFFF] mb-2">100%</div>
                  <p className="text-gray-300">Market domination</p>
                </div>
              </div>
              <p className="text-xl text-gray-300 mb-8">
                This isn't just a program - it's your competitive advantage. We limit access to ensure you dominate your
                market without internal competition from other AI Domination Program members in your area!
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Why the AI Domination Program Will Transform Your Business
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                {[
                  "Outperform competition by light years with cutting-edge AI",
                  "Complete market dominance in your local area",
                  "Custom-built systems designed specifically for your business",
                  "2x weekly accountability to ensure your success",
                  "Access to the latest tools, ads, and AI technology",
                  "Fully automated business systems within 6 months",
                  "50% recurring MRR from every referral you make",
                  "Diamond Tier Affiliate Partner status included",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle
                      className={`h-6 w-6 mt-1 flex-shrink-0 ${index >= 6 ? "text-green-400" : "text-green-400"}`}
                    />
                    <p className={`text-lg ${index >= 6 ? "text-green-300 font-semibold" : "text-gray-300"}`}>
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-[#00BFFF]/10 to-green-400/10 rounded-2xl p-8 border border-[#00BFFF]/20">
                <h3 className="text-2xl font-bold mb-6 text-[#00BFFF]">100% Success Guarantee</h3>
                <p className="text-gray-300 mb-6">
                  We are so sure of our systems that if after 6 months your business is not fully automated, we will
                  cancel your services and give you back 100% of your investment! No questions asked!
                </p>
                <div className="bg-gradient-to-r from-green-400/20 to-[#00BFFF]/20 rounded-lg p-4">
                  <p className="text-green-400 font-bold text-center">🎯 Your Success is Our Success</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-black via-gray-900 to-black border-[#00BFFF]/50 hover:border-[#00BFFF] transition-all duration-300 hover:scale-105 shadow-2xl backdrop-blur-sm p-8 relative">
            <div className="absolute inset-0 bg-[#00BFFF]/5 blur-xl rounded-lg"></div>
            <CardContent className="p-0 relative">
              <h3 className="text-2xl font-bold mb-4 text-[#00BFFF]">Payment Plan</h3>
              <div className="text-3xl font-bold mb-2 text-white">$9,997</div>
              <p className="text-gray-300 mb-4">Setup payment</p>
              <div className="text-xl mb-4 text-white">+ 5 payments of $6,977/month</div>
              <div className="bg-[#00BFFF]/10 border border-[#00BFFF]/30 rounded-lg p-3 mb-4">
                <p className="text-[#00BFFF] font-bold">Total: $44,882</p>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3 mb-4">
                <p className="text-orange-400 font-bold">💰 Save $8,994 with Pay in Full!</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mb-6">
                <p className="text-green-400 font-bold">💎 Includes Diamond Tier Affiliate Program!</p>
              </div>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-[#00BFFF] via-blue-500 to-[#00BFFF] hover:from-blue-600 hover:via-[#00BFFF] hover:to-blue-600 text-white font-bold shadow-2xl border border-[#00BFFF]/50"
                onClick={() => (window.location.href = "/diamond/apply")}
              >
                Apply to Join AI Domination Program NOW!
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-800 via-gray-900 to-black border-[#00BFFF]/50 hover:border-[#00BFFF] p-8 relative shadow-2xl">
            <div className="absolute inset-0 bg-[#00BFFF]/5 blur-xl rounded-lg"></div>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 text-white font-bold px-4 py-2 animate-pulse">
                UNREAL DEAL
              </Badge>
            </div>
            <CardContent className="p-0 relative">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-200 bg-clip-text text-transparent">
                Pay in Full
              </h3>
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-200 bg-clip-text text-transparent">
                $35,888
              </div>
              <p className="text-gray-300 mb-4">One-time payment</p>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mb-4">
                <p className="text-green-400 font-bold text-lg">💰 SAVE $8,994!</p>
                <p className="text-gray-300 text-sm">vs Payment Plan ($44,882)</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mb-4">
                <p className="text-green-400 font-bold">💎 Includes Diamond Tier Affiliate Program!</p>
              </div>
              <Badge className="bg-red-500 text-white mb-4 animate-pulse">Only 5 Available Total!</Badge>
              <div className="text-sm text-gray-300 mb-6">
                <p className="font-bold mb-2">30-Day Payment Option Available:</p>
                <p>• $5,888 deposit now</p>
                <p>• 4 payments of $7,500 over 30 days</p>
                <p>• Still considered "paid upfront"!</p>
              </div>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-[#00BFFF] via-blue-500 to-[#00BFFF] hover:from-blue-600 hover:via-[#00BFFF] hover:to-blue-600 text-white font-bold shadow-2xl border border-[#00BFFF]/50"
                onClick={() => (window.location.href = "/diamond/apply")}
              >
                Apply to Join AI Domination Program NOW!
              </Button>
            </CardContent>
          </Card>
        </div>

        <footer className="text-center mt-16 text-gray-500">
          <p>&copy; 2024 SuccessNOW AI Domination Program. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default DiamondClassClientPage
