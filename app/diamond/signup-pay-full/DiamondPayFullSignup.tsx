"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, CreditCard, ExternalLink } from "lucide-react"

export default function DiamondPayFullSignup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    website: "",
    monthlyRevenue: "",
    paymentMethod: "sezzle",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle pay-in-full signup submission
    console.log("Pay in Full Signup:", formData)

    if (formData.paymentMethod === "sezzle") {
      // Redirect to Sezzle checkout
      window.open("https://sezzle.com/", "_blank")
    } else {
      // Handle direct payment
      console.log("Processing direct payment...")
    }
  }

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <Button variant="ghost" className="mb-8 text-gray-300 hover:text-white" onClick={() => window.history.back()}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to AI Domination Program
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-300/30 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-gray-300 via-gray-100 to-gray-200 bg-clip-text text-transparent">
                  AI Domination Program - Pay in Full
                </CardTitle>
                <Badge className="bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 text-black font-bold w-fit">
                  💎 BEST VALUE - 40% OFF
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Original Value</span>
                    <span className="text-lg line-through text-gray-500">$59,882</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Your Price (40% OFF)</span>
                    <span className="text-3xl font-bold bg-gradient-to-r from-gray-300 via-gray-100 to-gray-200 bg-clip-text text-transparent">
                      $35,888
                    </span>
                  </div>
                  <div className="border-t border-gray-600 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-green-400">You Save</span>
                      <span className="text-lg font-bold text-green-400">$23,994</span>
                    </div>
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
                      AI Domination Program Mastermind ($19,977)
                    </li>
                  </ul>
                </div>

                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                  <h4 className="font-bold text-green-400 mb-2">💳 Financing Available:</h4>
                  <p className="text-sm text-gray-300 mb-2">Finance through Sezzle and still get the 40% discount!</p>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• Split into 4 interest-free payments</li>
                    <li>• No credit check required</li>
                    <li>• Instant approval</li>
                    <li>• Keep your 40% savings</li>
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
                  Secure Your AI Domination Program Spot
                </CardTitle>
                <p className="text-gray-300">Complete your information to proceed with payment</p>
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

                  <div>
                    <Label className="text-gray-300">Payment Method *</Label>
                    <div className="space-y-3 mt-2">
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          id="sezzle"
                          name="paymentMethod"
                          value="sezzle"
                          checked={formData.paymentMethod === "sezzle"}
                          onChange={handleInputChange}
                          className="text-[#00BFFF]"
                        />
                        <label htmlFor="sezzle" className="text-white flex items-center">
                          <span className="mr-2">💳 Finance with Sezzle</span>
                          <Badge className="bg-green-500 text-white text-xs">RECOMMENDED</Badge>
                        </label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          id="direct"
                          name="paymentMethod"
                          value="direct"
                          checked={formData.paymentMethod === "direct"}
                          onChange={handleInputChange}
                          className="text-[#00BFFF]"
                        />
                        <label htmlFor="direct" className="text-white">
                          💰 Pay Direct (Credit/Debit Card)
                        </label>
                      </div>
                    </div>
                  </div>

                  {formData.paymentMethod === "sezzle" && (
                    <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                      <h4 className="font-bold text-green-400 mb-2">Sezzle Payment Plan:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Today: $9,888 deposit</li>
                        <li>• 2 weeks: $6,500</li>
                        <li>• 4 weeks: $6,500</li>
                        <li>• 6 weeks: $6,500</li>
                        <li>• 8 weeks: $6,500</li>
                        <li className="font-bold text-green-400">• Total: $35,888 (still considered 'paid upfront')</li>
                      </ul>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 hover:from-gray-400 hover:via-gray-300 hover:to-gray-400 text-black font-bold shadow-2xl border border-gray-300/50"
                  >
                    {formData.paymentMethod === "sezzle" ? (
                      <>
                        Continue with Sezzle ($9,888 deposit)
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </>
                    ) : (
                      "Proceed to Payment ($35,888)"
                    )}
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
