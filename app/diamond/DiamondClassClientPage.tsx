"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

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

  const packageIncludes = [
    {
      title: "Advanced Trading Strategies",
      description: "Learn cutting-edge techniques to maximize your profits in any market condition.",
    },
    {
      title: "Personalized Mentorship",
      description: "Receive one-on-one guidance from experienced traders who are dedicated to your success.",
    },
    {
      title: "Exclusive Community Access",
      description: "Connect with a network of like-minded traders, share ideas, and collaborate on strategies.",
    },
    {
      title: "Live Trading Sessions",
      description: "Participate in real-time trading sessions with expert analysts and see strategies in action.",
    },
    {
      title: "Comprehensive Resources",
      description: "Access a library of training materials, tools, and resources to support your trading journey.",
    },
  ]

  return (
    <div className="bg-black text-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">SuccessNOW Diamond Class</h1>
          <p className="text-gray-400 text-lg">
            The Legendary Success Package: Advanced Strategies, Personalized Mentorship, and a Thriving Community.
          </p>
          <Badge className="bg-red-500 text-white font-bold px-4 py-2 animate-pulse mt-4">
            💎 DIAMOND CLASS - LIMITED TO 5 PEOPLE PER INDUSTRY - ONLY 1 PER GEOGRAPHICAL AREA!
          </Badge>
          <div className="bg-gradient-to-br from-green-500/10 to-green-400/10 rounded-lg p-6 max-w-2xl mx-auto mt-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-400 mb-2">💰 SAVE BIG WITH PAY IN FULL!</h3>
              <p className="text-xl text-white mb-2">Pay in Full: $35,888 (Save $8,994!)</p>
              <p className="text-gray-300">vs Payment Plan: $44,882 total</p>
            </div>
          </div>
        </header>

        {/* Hero Section with Countdown Timer */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-gray-900/80 via-black/80 to-gray-900/80 rounded-2xl p-8 border border-gray-300/30 shadow-2xl backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-200 bg-clip-text text-transparent">
              Limited Time Offer Ends In:
            </h2>
            <div className="flex justify-center items-center space-x-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold">{timeLeft.days}</div>
                <div className="text-gray-400">Days</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{timeLeft.hours}</div>
                <div className="text-gray-400">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                <div className="text-gray-400">Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                <div className="text-gray-400">Seconds</div>
              </div>
            </div>
            <p className="text-lg text-center text-gray-300">
              Don't miss out on this exclusive opportunity to transform your business!
            </p>
          </div>
        </section>

        <div className="bg-gradient-to-r from-black/80 via-gray-900/60 to-black/80 rounded-2xl p-8 mb-12 border border-gray-300/30 shadow-2xl backdrop-blur-sm">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-200 bg-clip-text text-transparent">
            Total Package Value: Over $100,000
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="text-xl font-bold mb-2 text-[#00BFFF]">Setup Payment Option:</h4>
              <p className="text-lg">$9,997 setup + 5 payments of $6,977/month</p>
              <p className="text-white font-bold">Total: $44,882</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-[#00BFFF]">Pay in Full:</h4>
              <p className="text-2xl font-bold bg-gradient-to-r from-gray-300 via-gray-100 to-gray-200 bg-clip-text text-transparent">
                $35,888
              </p>
              <p className="text-green-400 font-bold text-xl">💰 SAVE $8,994!</p>
              <p className="text-red-400 font-bold">Only 5 Pay in Fulls Available Total!</p>
            </div>
          </div>
        </div>

        {/* What's Included in Diamond Class Section */}
        <section className="max-w-5xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">What's Included in Diamond Class</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packageIncludes.map((item, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-800 via-gray-900 to-black border-gray-300/30 hover:border-gray-200/50 transition-all duration-300 hover:scale-105 shadow-2xl backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Ultra-Exclusive Access Section */}
        <section className="max-w-3xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Ultra-Exclusive Access</h2>
          <div className="text-gray-300 text-center">
            <div className="flex items-center justify-center mb-2">
              <Clock className="mr-2 h-6 w-6 text-blue-400" />
              <p>
                <strong>5:</strong> Limited to 5 People Per Industry
              </p>
            </div>
            <div className="flex items-center justify-center mb-2">
              <Clock className="mr-2 h-6 w-6 text-blue-400" />
              <p>
                <strong>1:</strong> Only 1 Person Per Geographical Area
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Clock className="mr-2 h-6 w-6 text-blue-400" />
              <p>
                <strong>100%:</strong> 100% Success Guarantee
              </p>
            </div>
          </div>
        </section>

        {/* Why Diamond Class Will Transform Your Business Section */}
        <section className="max-w-3xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Diamond Class Will Transform Your Business</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li className="mb-2">
              <strong>Unparalleled Expertise:</strong> Gain access to proven strategies and insights from industry
              leaders.
            </li>
            <li className="mb-2">
              <strong>Strategic Networking:</strong> Connect with a high-caliber network of successful entrepreneurs.
            </li>
            <li className="mb-2">
              <strong>Accelerated Growth:</strong> Implement actionable strategies to rapidly scale your business.
            </li>
            <li className="mb-2">
              <strong>Personalized Support:</strong> Receive tailored guidance and support to overcome your specific
              challenges.
            </li>
            <li>
              <strong>Lasting Results:</strong> Achieve sustainable success and build a legacy that stands the test of
              time.
            </li>
          </ul>
        </section>

        {/* 100% Success Guarantee Section */}
        <section className="max-w-3xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">100% Success Guarantee</h2>
          <p className="text-gray-300 text-center">
            We are so confident in the transformative power of Diamond Class that we offer a 100% success guarantee. If
            you don't see significant improvements in your business within the first year, we'll work with you until you
            do, or your money back.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-black via-gray-900 to-black border-gray-300/30 hover:border-gray-200/50 transition-all duration-300 hover:scale-105 shadow-2xl backdrop-blur-sm p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4 text-[#00BFFF]">Payment Plan</h3>
              <div className="text-3xl font-bold mb-2 text-white">$9,997</div>
              <p className="text-gray-300 mb-4">Setup payment</p>
              <div className="text-xl mb-4 text-white">+ 5 payments of $6,977/month</div>
              <div className="bg-[#00BFFF]/10 border border-[#00BFFF]/30 rounded-lg p-3 mb-4">
                <p className="text-[#00BFFF] font-bold">Total: $44,882</p>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3 mb-6">
                <p className="text-orange-400 font-bold">💰 Save $8,994 with Pay in Full!</p>
              </div>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 hover:from-gray-400 hover:via-gray-300 hover:to-gray-400 text-black font-bold shadow-2xl border border-gray-300/50"
                onClick={() => (window.location.href = "/diamond/apply")}
              >
                Apply to Join Diamond Class NOW!
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-800 via-gray-900 to-black border-gray-300/50 p-8 relative shadow-2xl">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 text-white font-bold px-4 py-2 animate-pulse">
                UNREAL DEAL
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
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mb-4">
                <p className="text-green-400 font-bold text-lg">💰 SAVE $8,994!</p>
                <p className="text-gray-300 text-sm">vs Payment Plan ($44,882)</p>
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
                className="w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 hover:from-gray-400 hover:via-gray-300 hover:to-gray-400 text-black font-bold shadow-2xl border border-gray-300/50"
                onClick={() => (window.location.href = "/diamond/apply")}
              >
                Apply to Join Diamond Class NOW!
              </Button>
            </CardContent>
          </Card>
        </div>

        <footer className="text-center mt-16 text-gray-500">
          <p>&copy; 2024 Diamond Class. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default DiamondClassClientPage
