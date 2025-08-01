"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Check, Star, ArrowRight, Phone, Mail, Users, Zap, Shield } from "lucide-react"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    website: "",
    industry: "",
    goals: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-[#00BFFF]/20 text-[#00BFFF] border-[#00BFFF]/30 px-4 py-2 text-sm font-semibold mb-4">
            🚀 Limited Time Offer
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Get Your <span className="text-[#00BFFF]">SuccessNOW</span> Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of businesses already dominating their markets with AI-powered websites and automation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Pricing & Benefits */}
          <div className="space-y-8">
            {/* Pricing Card */}
            <Card className="bg-white/10 border-[#00BFFF]/30 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Badge className="bg-red-500 text-white px-3 py-1 text-sm font-bold">SAVE $2,000 TODAY</Badge>
                </div>
                <CardTitle className="text-3xl font-bold text-white">SuccessNOW Core Offer</CardTitle>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <span className="text-2xl text-gray-400 line-through">$5,488</span>
                  <span className="text-5xl font-bold text-[#00BFFF]">$3,488</span>
                </div>
                <p className="text-gray-300 mt-2">One-time investment • 30-day guarantee</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* What's Included */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">What's Included:</h3>
                  <div className="space-y-3">
                    {[
                      "Custom AI-Powered Website (Worth $2,500)",
                      "24/7 AI Chat Agent Setup (Worth $1,500)",
                      "Lead Generation System (Worth $1,000)",
                      "Automated Email Sequences (Worth $800)",
                      "Social Media Integration (Worth $500)",
                      "Analytics & Reporting Dashboard (Worth $400)",
                      "30 Days of Support & Training (Worth $1,200)",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#00BFFF] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bonus Section */}
                <div className="border-t border-white/20 pt-6">
                  <h3 className="text-xl font-semibold text-[#00BFFF] mb-4">🎁 FREE Bonuses (Limited Time):</h3>
                  <div className="space-y-3">
                    {[
                      "Google Ads Setup & Optimization (Worth $1,500)",
                      "Facebook Ads Campaign Creation (Worth $1,200)",
                      "SEO Optimization Package (Worth $800)",
                      "Conversion Rate Optimization (Worth $600)",
                    ].map((bonus, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{bonus}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Total Value */}
                <div className="bg-[#00BFFF]/10 border border-[#00BFFF]/30 rounded-lg p-4 text-center">
                  <p className="text-gray-300 mb-2">
                    Total Value: <span className="line-through">$11,588</span>
                  </p>
                  <p className="text-2xl font-bold text-[#00BFFF]">Your Investment Today: $3,488</p>
                  <p className="text-sm text-gray-400 mt-2">You Save: $8,100 (70% OFF)</p>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <Users className="w-8 h-8 text-[#00BFFF] mx-auto mb-2" />
                <p className="text-sm text-gray-300">1000+ Clients</p>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 text-[#00BFFF] mx-auto mb-2" />
                <p className="text-sm text-gray-300">24/7 Support</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-[#00BFFF] mx-auto mb-2" />
                <p className="text-sm text-gray-300">30-Day Guarantee</p>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 text-[#00BFFF] mx-auto mb-2" />
                <p className="text-sm text-gray-300">4.9/5 Rating</p>
              </div>
            </div>
          </div>

          {/* Right Column - Signup Form */}
          <div>
            <Card className="bg-white/10 border-[#00BFFF]/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-white">Secure Your Platform Today</CardTitle>
                <p className="text-center text-gray-300">
                  Fill out the form below to get started with your AI-powered business transformation
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-white">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-white">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-white">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="businessName" className="text-white">
                      Business Name *
                    </Label>
                    <Input
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Your Business Name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="website" className="text-white">
                      Current Website (Optional)
                    </Label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="industry" className="text-white">
                      Industry *
                    </Label>
                    <Input
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="e.g., Real Estate, Healthcare, Legal"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="goals" className="text-white">
                      Business Goals
                    </Label>
                    <Textarea
                      id="goals"
                      name="goals"
                      value={formData.goals}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Tell us about your business goals and what you'd like to achieve..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#00BFFF] hover:bg-[#00A3D9] text-white font-bold py-4 text-lg shadow-lg hover:shadow-[0_0_20px_rgba(0,191,255,0.5)] transition-all duration-300"
                  >
                    Secure My Platform - $3,488
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <div className="text-center space-y-2">
                    <p className="text-sm text-gray-400">🔒 Secure checkout • 30-day money-back guarantee</p>
                    <p className="text-xs text-gray-500">
                      By submitting this form, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="mt-8 text-center space-y-4">
              <h3 className="text-xl font-semibold text-white">Questions? We're Here to Help</h3>
              <div className="flex justify-center gap-8">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#00BFFF]" />
                  <span className="text-gray-300">(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#00BFFF]" />
                  <span className="text-gray-300">support@successnow.ai</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                business: "Johnson Real Estate",
                rating: 5,
                text: "SuccessNOW transformed our business completely. We went from 5 leads per month to 50+ qualified leads. The AI chat agent works 24/7 and never misses a potential client.",
              },
              {
                name: "Mike Chen",
                business: "Chen's Auto Repair",
                rating: 5,
                text: "The automated system handles all our appointment bookings now. We've increased our revenue by 300% in just 3 months. Best investment we've ever made.",
              },
              {
                name: "Lisa Rodriguez",
                business: "Rodriguez Law Firm",
                rating: 5,
                text: "The AI website and lead generation system brought us 15 new clients in the first month alone. The ROI has been incredible - we made back our investment in 2 weeks.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.business}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
