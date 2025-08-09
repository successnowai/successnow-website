"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Phone,
  Calendar,
  Users,
  TrendingUp,
  Clock,
  Star,
  ArrowRight,
  Home,
  DollarSign,
  Target,
  Zap,
} from "lucide-react"
import Link from "next/link"
import StarryBackground from "@/components/ui/starry-background"

export default function RealtorNowClientPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    experience: "",
    currentChallenges: "",
    monthlyLeads: "",
    averageCommission: "",
    agreeToTerms: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StarryBackground />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-600/20 text-blue-400 border-blue-600/30">Real Estate AI Solutions</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Realtor</span>
              <span className="text-[#00BFFF]">NOW</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              AI Voice Agents that convert leads into showings 24/7. Never miss another potential buyer or seller again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#signup">
                <Button size="lg" className="bg-[#00BFFF] hover:bg-[#00A3D9] text-white px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white px-8 py-4 text-lg bg-transparent"
                >
                  Watch Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-600/30">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <Badge className="bg-green-600/20 text-green-400 border-green-600/30 mb-2">SUCCESS STORY</Badge>
                  <h3 className="text-2xl font-bold text-white">Real Estate Agency Saves $120K+ Annually</h3>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Before SuccessNOW:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• $10K/month on lead response staff</li>
                    <li>• 40% of leads never contacted</li>
                    <li>• Average 4-hour response time</li>
                    <li>• Missing weekend/evening opportunities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">After SuccessNOW:</h4>
                  <ul className="space-y-2 text-green-400">
                    <li>• $0 monthly staffing costs</li>
                    <li>• 100% lead contact rate</li>
                    <li>• Instant response 24/7</li>
                    <li>• 65% more showing appointments</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link href="/case-studies#realtors">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    View Full Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Real Estate Agents Choose <span className="text-[#00BFFF]">RealtorNOW</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Purpose-built AI solutions for the unique challenges of real estate professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Instant Lead Response",
                description: "AI answers every call within 2 rings, 24/7. Never lose a hot lead to a competitor again.",
                color: "blue",
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Smart Showing Scheduler",
                description:
                  "AI books showings directly into your calendar, handles rescheduling, and sends reminders.",
                color: "green",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Lead Qualification",
                description: "AI pre-qualifies buyers and sellers, collecting budget, timeline, and preferences.",
                color: "purple",
              },
              {
                icon: <Home className="w-8 h-8" />,
                title: "Property Information",
                description:
                  "AI provides instant property details, pricing, and availability from your MLS integration.",
                color: "orange",
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Price Negotiations",
                description: "AI handles initial price discussions and objections with proven scripts.",
                color: "red",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Follow-up Automation",
                description: "AI nurtures leads with personalized follow-ups until they're ready to buy or sell.",
                color: "cyan",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-${feature.color}-600/20 flex items-center justify-center mb-4`}
                  >
                    <div className={`text-${feature.color}-400`}>{feature.icon}</div>
                  </div>
                  <CardTitle className="text-xl font-bold text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Real Results for <span className="text-[#00BFFF]">Real Estate Pros</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "98%", label: "Lead Response Rate", icon: <Phone className="w-6 h-6" /> },
              { number: "65%", label: "More Showings Booked", icon: <Calendar className="w-6 h-6" /> },
              { number: "24/7", label: "Availability", icon: <Clock className="w-6 h-6" /> },
              { number: "$120K+", label: "Annual Savings", icon: <DollarSign className="w-6 h-6" /> },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#00BFFF]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-[#00BFFF]">{stat.icon}</div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl font-light text-white mb-8 italic">
            "RealtorNOW has completely transformed my business. I'm booking 3x more showings and my clients love the
            instant response. It's like having a full-time assistant that never sleeps."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
            <div className="text-left">
              <div className="font-semibold text-white">Sarah Johnson</div>
              <div className="text-gray-400">Top Producer, Century 21</div>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section id="signup" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Start Converting More Leads <span className="text-[#00BFFF]">Today</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of real estate professionals who trust RealtorNOW to grow their business
            </p>
          </div>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white text-center">
                Get Your AI Real Estate Assistant
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-white">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-white">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company" className="text-white">
                      Brokerage/Company
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="experience" className="text-white">
                      Years in Real Estate
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("experience", value)}>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="2-5">2-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="monthlyLeads" className="text-white">
                      Monthly Leads
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("monthlyLeads", value)}>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-25">0-25 leads</SelectItem>
                        <SelectItem value="26-50">26-50 leads</SelectItem>
                        <SelectItem value="51-100">51-100 leads</SelectItem>
                        <SelectItem value="100+">100+ leads</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="averageCommission" className="text-white">
                      Average Commission
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("averageCommission", value)}>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-5k">$0-$5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000-$10,000</SelectItem>
                        <SelectItem value="10k-20k">$10,000-$20,000</SelectItem>
                        <SelectItem value="20k+">$20,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="currentChallenges" className="text-white">
                    Current Lead Management Challenges
                  </Label>
                  <Textarea
                    id="currentChallenges"
                    value={formData.currentChallenges}
                    onChange={(e) => handleInputChange("currentChallenges", e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                    rows={4}
                    placeholder="Tell us about your biggest challenges with lead response and follow-up..."
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                  />
                  <Label htmlFor="agreeToTerms" className="text-sm text-gray-300">
                    I agree to the{" "}
                    <Link href="/terms" className="text-[#00BFFF] hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-[#00BFFF] hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#00BFFF] hover:bg-[#00A3D9] text-white py-4 text-lg"
                  disabled={!formData.agreeToTerms}
                >
                  Start My Free Trial
                  <Zap className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#00BFFF]/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to 10X Your Real Estate Business?</h2>
          <p className="text-xl text-gray-300 mb-8">Join the AI revolution and never miss another opportunity</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#signup">
              <Button size="lg" className="bg-[#00BFFF] hover:bg-[#00A3D9] text-white px-8 py-4 text-lg">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/book">
              <Button
                size="lg"
                variant="outline"
                className="border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white px-8 py-4 text-lg bg-transparent"
              >
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
