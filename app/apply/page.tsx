import StarryBackground from "@/components/ui/starry-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Rocket, Diamond, Users, MapPin, DollarSign } from "lucide-react"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StarryBackground />

      <div className="relative z-10 pt-20">
        {/* Header Banner */}
        <div className="container mx-auto px-4 mb-8">
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 text-sm font-bold rounded-full mb-8">
              🚀 SUCCESSNOW JED-AI PROGRAM - LIMITED TO 5 PEOPLE PER INDUSTRY - ONLY 1 PER GEOGRAPHICAL AREA!
            </Badge>
          </div>
        </div>

        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                SuccessNOW JED-AI Program
              </span>
            </h1>

            <div className="space-y-4 mb-8">
              <p className="text-2xl md:text-3xl font-bold text-red-400">
                THE AI revolution isn't coming, IT's Already here!
              </p>
              <p className="text-xl md:text-2xl font-bold text-cyan-400">
                Become a JED-AI MASTER and Master AI before AI becomes your MASTER
              </p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Join this Program to be a part of the revolution not a victim of it!
              </p>
            </div>

            {/* Path to Growth Section */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-6">
                Your Path To <span className="text-cyan-400">Explosive Growth</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                The most exclusive, comprehensive AI Domination with SuccessNOW business transformation program ever
                created. Limited to 5 people per industry every 6 months - Only 1 per geographical area to make sure you
                dominate!
              </p>
            </div>

            {/* Diamond Tier Highlight */}
            <Card className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 max-w-4xl mx-auto mb-12">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-green-400 mr-3" />
                  <h3 className="text-2xl font-bold text-green-400">EXCLUSIVE DIAMOND TIER AFFILIATE PROGRAM</h3>
                </div>
                <p className="text-lg text-gray-200 mb-4">
                  AI Domination Program members automatically get enrolled in our Diamond Tier Affiliate Partner Program
                </p>
                <p className="text-xl font-bold text-green-400">
                  Earn 50% Recurring MRR from every person you refer to SuccessNOW!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-6 text-center">Apply for JED-AI Program</h3>
                  <p className="text-gray-300 text-center mb-8">
                    Complete your application to secure your exclusive spot in the most advanced AI business
                    transformation program.
                  </p>

                  {/* GHL Form Placeholder */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-6 border border-blue-500/20">
                      <h4 className="text-lg font-semibold text-blue-400 mb-3">📋 Application Form</h4>
                      <p className="text-gray-300 text-sm mb-4">
                        Our system integrates directly with your business. This form will collect:
                      </p>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• Personal Information</li>
                        <li>• Business Details</li>
                        <li>• Industry & Territory</li>
                        <li>• Revenue Goals</li>
                        <li>• AI Experience Level</li>
                      </ul>
                    </div>

                    {/* Temporary Form Fields for Demo */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input placeholder="First Name" className="bg-gray-800 border-gray-700 text-white" />
                        <Input placeholder="Last Name" className="bg-gray-800 border-gray-700 text-white" />
                      </div>
                      <Input
                        placeholder="Email Address"
                        type="email"
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                      <Input placeholder="Phone Number" type="tel" className="bg-gray-800 border-gray-700 text-white" />
                      <Input placeholder="Business Name" className="bg-gray-800 border-gray-700 text-white" />
                      <Input placeholder="Industry" className="bg-gray-800 border-gray-700 text-white" />
                      <Input placeholder="City, State" className="bg-gray-800 border-gray-700 text-white" />
                      <Textarea
                        placeholder="Tell us about your business goals and why you want to join the JED-AI Program..."
                        className="bg-gray-800 border-gray-700 text-white min-h-[120px]"
                      />
                    </div>

                    <div className="space-y-3 rounded-lg bg-gray-800/50 p-4 border border-gray-700/50">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="terms"
                          className="mt-1 w-5 h-5 border-2 border-gray-500 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-300 leading-relaxed cursor-pointer">
                          By submitting this application, you agree to receive marketing communications and text
                          messages from SuccessNOW.ai. You can opt-out at any time.
                        </label>
                      </div>
                    </div>

                    <Link href="/dominate-checkout">
                      <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 text-lg">
                        Submit Application & Continue to Payment
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Program Benefits */}
              <div className="space-y-6">
                <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-4 flex items-center">
                      <Rocket className="w-6 h-6 text-cyan-400 mr-2" />
                      Program Value: $100,000+
                    </h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        Complete AI business transformation system
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        Custom AI agents for your specific industry
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        24/7 AI-powered lead generation & conversion
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        Automated appointment booking & follow-up
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        AI-driven customer service & support
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-4 flex items-center">
                      <Users className="w-6 h-6 text-purple-400 mr-2" />
                      Exclusivity Benefits
                    </h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <MapPin className="w-5 h-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                        Only 1 business per geographical area
                      </li>
                      <li className="flex items-start">
                        <Users className="w-5 h-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                        Maximum 5 businesses per industry
                      </li>
                      <li className="flex items-start">
                        <Diamond className="w-5 h-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                        Diamond Tier Affiliate status included
                      </li>
                      <li className="flex items-start">
                        <DollarSign className="w-5 h-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                        50% recurring commission on referrals
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-xl font-bold text-red-400 mb-2">⚠️ Limited Time Offer</h4>
                    <p className="text-gray-200">
                      Only <span className="font-bold text-red-400">5 spots available</span> per industry. Secure your
                      exclusive territory now!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-2">Questions about the JED-AI Program?</p>
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
