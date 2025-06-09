"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, CreditCard } from "lucide-react"

export default function DiamondPaymentPlanSignup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    website: "",
    monthlyRevenue: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle payment plan signup submission
    console.log("Payment Plan Signup:", formData)
    // Redirect to payment processor or next step
  }

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <Button variant="ghost" className="mb-8 text-gray-300 hover:text-white" onClick={() => window.history.back()}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Diamond Club
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-300/30 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-gray-300 via-gray-100 to-gray-200 bg-clip-text text-transparent">
                  Diamond Club Payment Plan
                </CardTitle>
                <Badge className="bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 text-black font-bold w-fit">
                  💎 EXCLUSIVE OFFER
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Setup Payment</span>
                    <span className="text-2xl font-bold text-white">$9,997</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Monthly Payments (5x)</span>
                    <span className="text-xl font-bold text-white">$6,977/month</span>
                  </div>
                  <div className="border-t border-gray-600 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-200">Total Program Value</span>
                      <span className="text-lg font-bold bg-gradient-to-r from-gray-300 via-gray-100 to-gray-200 bg-clip-text text-transparent">
                        $44,882
                      </span>
                    </div>
                    <p className="text-sm text-green-400 mt-2">You save $15,000 (25% OFF)</p>
                  </div>
                </div>

                <div className="bg-[#00BFFF]/10 rounded-lg p-4 border border-[#00BFFF]/20">
                  <h4 className="font-bold text-[#00BFFF] mb-2">What's Included:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Full Custom Design & Build ($60,000+ value)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />6 Months SEO Local Dominance ($5,982)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />6 Months Expert Ad Manager ($11,982)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Custom AI Platform & Agents (Priceless)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />6 Months 1-on-1 Coaching (Priceless)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Diamond Class Mastermind ($19,977)
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Signup Form */}
          <div>
            <Card className="bg-gradient-to-br from-black via-gray-900 to-black border-gray-300/30 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <CreditCard className="h-6 w-6 mr-2 text-[#00BFFF]" />
                  Secure Your Diamond Club Spot
                </CardTitle>
                <p className="text-gray-300">Complete your information to proceed with payment plan</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-300">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-800 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-300">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-800 border-gray-600 text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-300">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-300">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-gray-300">
                      Company Name *
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="industry" className="text-gray-300">
                      Industry *
                    </Label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2"
                    >
                      <option value="">Select your industry</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="legal">Legal Services</option>
                      <option value="healthcare">Healthcare/Medical Spa</option>
                      <option value="fitness">Fitness/Gym</option>
                      <option value="automotive">Automotive/Dealers</option>
                      <option value="mortgage">Mortgage/Finance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="website" className="text-gray-300">
                      Current Website (if any)
                    </Label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-600 text-white"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="monthlyRevenue" className="text-gray-300">
                      Monthly Revenue Range *
                    </Label>
                    <select
                      id="monthlyRevenue"
                      name="monthlyRevenue"
                      value={formData.monthlyRevenue}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2"
                    >
                      <option value="">Select revenue range</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-250k">$100,000 - $250,000</option>
                      <option value="250k+">$250,000+</option>
                    </select>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600">
                    <h4 className="font-bold text-white mb-2">Payment Schedule:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Setup Payment: $9,997 (Due today)</li>
                      <li>• Payment 1: $6,977 (30 days)</li>
                      <li>• Payment 2: $6,977 (60 days)</li>
                      <li>• Payment 3: $6,977 (90 days)</li>
                      <li>• Payment 4: $6,977 (120 days)</li>
                      <li>• Payment 5: $6,977 (150 days)</li>
                    </ul>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 hover:from-gray-400 hover:via-gray-300 hover:to-gray-400 text-black font-bold shadow-2xl border border-gray-300/50"
                  >
                    Proceed to Payment ($9,997)
                  </Button>

                  <p className="text-xs text-gray-400 text-center">
                    🔒 Secure checkout • Your information is protected • 24/7 support available
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
