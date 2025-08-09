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
  Sparkles,
  DollarSign,
  Target,
  Zap,
  Heart,
} from "lucide-react"
import Link from "next/link"
import StarryBackground from "@/components/ui/starry-background"

export default function MedspaNowClientPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    services: "",
    experience: "",
    currentChallenges: "",
    monthlyBookings: "",
    averageServiceValue: "",
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
            <Badge className="mb-4 bg-pink-600/20 text-pink-400 border-pink-600/30">Medical Spa AI Solutions</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Medspa</span>
              <span className="text-[#00BFFF]">NOW</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              AI Voice Agents that book beauty treatments and consultations 24/7. Fill your appointment book
              automatically.
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
          <Card className="bg-gradient-to-r from-green-600/20 to-pink-600/20 border-green-600/30">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <Badge className="bg-green-600/20 text-green-400 border-green-600/30 mb-2">SUCCESS STORY</Badge>
                  <h3 className="text-2xl font-bold text-white">Med Spa Saves $130K+ Annually</h3>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Before SuccessNOW:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• $11K/month on booking staff</li>
                    <li>• 30% of inquiries never booked</li>
                    <li>• Average 3-hour response time</li>
                    <li>• Empty slots during off-hours</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">After SuccessNOW:</h4>
                  <ul className="space-y-2 text-green-400">
                    <li>• $0 monthly booking costs</li>
                    <li>• 100% inquiry conversion rate</li>
                    <li>• Instant booking 24/7</li>
                    <li>• 75% fewer empty appointment slots</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link href="/case-studies#medspas">
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
              Why Med Spas Choose <span className="text-[#00BFFF]">MedspaNOW</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized AI solutions designed for medical spas and aesthetic practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="w-8 h-8" />,
                title: "24/7 Appointment Booking",
                description:
                  "AI handles booking requests instantly, checking availability and confirming appointments.",
                color: "blue",
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Treatment Scheduling",
                description:
                  "AI books specific treatments, handles package bookings, and manages follow-up appointments.",
                color: "green",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Client Consultation Booking",
                description: "AI schedules consultations for new treatments and cosmetic procedures.",
                color: "purple",
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Service Recommendations",
                description: "AI suggests appropriate treatments based on client needs and preferences.",
                color: "orange",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Client Care Follow-up",
                description: "AI follows up after treatments to ensure satisfaction and book maintenance sessions.",
                color: "red",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Package Upselling",
                description: "AI promotes treatment packages and membership programs to increase client value.",
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
              Beautiful Results for <span className="text-[#00BFFF]">Med Spas</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "100%", label: "Booking Response Rate", icon: <Phone className="w-6 h-6" /> },
              { number: "75%", label: "Fewer Empty Slots", icon: <Calendar className="w-6 h-6" /> },
              { number: "24/7", label: "Availability", icon: <Clock className="w-6 h-6" /> },
              { number: "$130K+", label: "Annual Savings", icon: <DollarSign className="w-6 h-6" /> },
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
            "MedspaNOW has been a game-changer for our practice. We're booking 40% more appointments and our clients
            love the convenience of 24/7 booking. Our schedule is consistently full now."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
            <div className="text-left">
              <div className="font-semibold text-white">Dr. Amanda Chen</div>
              <div className="text-gray-400">Owner, Radiance Medical Spa</div>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section id="signup" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Start Booking More Clients <span className="text-[#00BFFF]">Today</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading med spas who trust MedspaNOW to grow their business
            </p>
          </div>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white text-center">Get Your AI Med Spa Assistant</CardTitle>
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
                    <Label htmlFor="businessName" className="text-white">
                      Med Spa Name
                    </Label>
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => handleInputChange("businessName", e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="services" className="text-white">
                      Primary Services
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("services", value)}>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder="Select services" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="botox-fillers">Botox & Fillers</SelectItem>
                        <SelectItem value="laser-treatments">Laser Treatments</SelectItem>
                        <SelectItem value="facials-peels">Facials & Peels</SelectItem>
                        <SelectItem value="body-contouring">Body Contouring</SelectItem>
                        <SelectItem value="hair-removal">Hair Removal</SelectItem>
                        <SelectItem value="full-service">Full Service Med Spa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="monthlyBookings" className="text-white">
                      Monthly Bookings
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("monthlyBookings", value)}>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-50">0-50 bookings</SelectItem>
                        <SelectItem value="51-100">51-100 bookings</SelectItem>
                        <SelectItem value="101-200">101-200 bookings</SelectItem>
                        <SelectItem value="200+">200+ bookings</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="averageServiceValue" className="text-white">
                      Average Service Value
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("averageServiceValue", value)}>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-200">$0-$200</SelectItem>
                        <SelectItem value="200-500">$200-$500</SelectItem>
                        <SelectItem value="500-1000">$500-$1,000</SelectItem>
                        <SelectItem value="1000+">$1,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="currentChallenges" className="text-white">
                    Current Booking Challenges
                  </Label>
                  <Textarea
                    id="currentChallenges"
                    value={formData.currentChallenges}
                    onChange={(e) => handleInputChange("currentChallenges", e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                    rows={4}
                    placeholder="Tell us about your biggest challenges with appointment booking and client management..."
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
      <section className="py-16 px-6 bg-gradient-to-r from-[#00BFFF]/10 to-pink-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Fill Your Appointment Book?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the AI revolution and never have empty appointment slots again
          </p>
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
