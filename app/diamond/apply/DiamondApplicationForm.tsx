"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, AlertTriangle, Star } from "lucide-react"

export default function DiamondApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    website: "",
    monthlyRevenue: "",
    businessYears: "",
    currentChallenges: "",
    whyDiamond: "",
    investmentReady: "",
    timeCommitment: "",
    successDefinition: "",
    previousInvestments: "",
    teamSize: "",
    marketingBudget: "",
    paymentOption: "plan", // Default to payment plan
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle application submission
    console.log("AI Domination Program Application:", formData)
    // Redirect to payment page
    window.location.href = formData.paymentOption === "full" ? "/diamond/payment/full" : "/diamond/payment/plan"
  }

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <Button variant="ghost" className="mb-8 text-gray-300 hover:text-white" onClick={() => window.history.back()}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to SuccessNOW JED-AI Program
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 text-black text-lg px-6 py-2 font-bold shadow-2xl border border-gray-300/50 mb-6">
            🚀 SUCCESSNOW JED-AI PROGRAM APPLICATION
          </Badge>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-200 bg-clip-text text-transparent">
            Apply for the SuccessNOW JED-AI Program
          </h1>
          <div className="mb-6">
            <p className="text-xl font-bold text-red-400 mb-2">THE AI revolution isn't coming, IT's Already here!</p>
            <p className="text-lg font-bold text-[#00BFFF] mb-2">
              Become a JED-AI MASTER and Master AI before AI becomes your MASTER
            </p>
            <p className="text-gray-300">Join this Program to be a part of the revolution not a victim of it!</p>
          </div>
          <p className="text-xl text-gray-300 mb-6">
            Spaces are limited! We only accept people who are committed to success.
          </p>
          <div className="bg-gradient-to-br from-[#00BFFF]/10 to-green-400/10 rounded-lg p-4 max-w-2xl mx-auto mb-6">
            <div className="flex items-center justify-center mb-2">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
              <span className="text-green-400 font-bold">100% SATISFACTION GUARANTEE</span>
            </div>
            <p className="text-gray-300 text-sm">
              If your application is not accepted, you'll receive a 100% refund. If at any time during the 6 months
              you're not fully satisfied, you'll get a 100% refund of your investment. Even if we remove you from the
              program for not taking it seriously, you'll still get a 100% refund - no questions asked!
            </p>
          </div>
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-2">
              <AlertTriangle className="h-5 w-5 text-red-400 mr-2" />
              <span className="text-red-400 font-bold">EXCLUSIVE ACCESS</span>
            </div>
            <p className="text-red-400 text-sm">
              Only 5 spots available per industry - only 1 per geographical area! Complete this application to be
              considered for acceptance.
            </p>
          </div>
        </div>

        <Card className="bg-gradient-to-br from-black via-gray-900 to-black border-gray-300/30 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center">
              <Star className="h-6 w-6 mr-2 text-[#00BFFF]" />
              SuccessNOW JED-AI Program Application Form
            </CardTitle>
            <p className="text-gray-300">
              Please provide detailed information about yourself and your business. This helps us ensure the SuccessNOW
              JED-AI Program is the right fit for your success journey.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-[#00BFFF] border-b border-gray-600 pb-2">Personal Information</h3>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                </div>
              </div>

              {/* Business Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-[#00BFFF] border-b border-gray-600 pb-2">Business Information</h3>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      <option value="consulting">Business Consulting</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="businessYears" className="text-gray-300">
                      Years in Business *
                    </Label>
                    <select
                      id="businessYears"
                      name="businessYears"
                      value={formData.businessYears}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2"
                    >
                      <option value="">Select years</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      <option value="250k-500k">$250,000 - $500,000</option>
                      <option value="500k+">$500,000+</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="teamSize" className="text-gray-300">
                      Team Size *
                    </Label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2"
                    >
                      <option value="">Select team size</option>
                      <option value="just-me">Just me</option>
                      <option value="2-5">2-5 employees</option>
                      <option value="6-15">6-15 employees</option>
                      <option value="16-50">16-50 employees</option>
                      <option value="50+">50+ employees</option>
                    </select>
                  </div>
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
              </div>

              {/* Qualification Questions */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-[#00BFFF] border-b border-gray-600 pb-2">
                  Qualification Questions
                </h3>

                <div>
                  <Label htmlFor="currentChallenges" className="text-gray-300">
                    What are your biggest business challenges right now? *
                  </Label>
                  <Textarea
                    id="currentChallenges"
                    name="currentChallenges"
                    value={formData.currentChallenges}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="Describe your main challenges..."
                  />
                </div>

                <div>
                  <Label htmlFor="whyDiamond" className="text-gray-300">
                    Why do you want to join the SuccessNOW JED-AI Program? What specific results are you looking for? *
                  </Label>
                  <Textarea
                    id="whyDiamond"
                    name="whyDiamond"
                    value={formData.whyDiamond}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="Explain your goals and expectations..."
                  />
                </div>

                <div>
                  <Label htmlFor="successDefinition" className="text-gray-300">
                    How do you define success for your business in the next 6 months? *
                  </Label>
                  <Textarea
                    id="successDefinition"
                    name="successDefinition"
                    value={formData.successDefinition}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="Define your success metrics..."
                  />
                </div>

                <div>
                  <Label htmlFor="investmentReady" className="text-gray-300">
                    Are you financially ready to make this investment in your business? *
                  </Label>
                  <select
                    id="investmentReady"
                    name="investmentReady"
                    value={formData.investmentReady}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2"
                  >
                    <option value="">Select your readiness</option>
                    <option value="ready-now">Yes, I'm ready to invest now</option>
                    <option value="ready-soon">I'll be ready within 30 days</option>
                    <option value="need-financing">I need financing options</option>
                    <option value="not-sure">I'm not sure about the investment</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="timeCommitment" className="text-gray-300">
                    Can you commit to 2x weekly coaching calls and implementing our strategies? *
                  </Label>
                  <select
                    id="timeCommitment"
                    name="timeCommitment"
                    value={formData.timeCommitment}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2"
                  >
                    <option value="">Select your commitment level</option>
                    <option value="fully-committed">Yes, I'm fully committed</option>
                    <option value="mostly-available">I can make most sessions</option>
                    <option value="limited-time">I have limited time availability</option>
                    <option value="unsure">I'm unsure about time commitment</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="previousInvestments" className="text-gray-300">
                    Have you invested in business coaching, marketing, or automation before? What were the results?
                  </Label>
                  <Textarea
                    id="previousInvestments"
                    name="previousInvestments"
                    value={formData.previousInvestments}
                    onChange={handleInputChange}
                    rows={3}
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="Describe your previous investments and outcomes..."
                  />
                </div>

                <div>
                  <Label htmlFor="marketingBudget" className="text-gray-300">
                    What's your current monthly marketing budget? *
                  </Label>
                  <select
                    id="marketingBudget"
                    name="marketingBudget"
                    value={formData.marketingBudget}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2"
                  >
                    <option value="">Select budget range</option>
                    <option value="0-1k">$0 - $1,000</option>
                    <option value="1k-5k">$1,000 - $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k+">$25,000+</option>
                  </select>
                </div>
              </div>

              {/* Payment Option Selection */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-[#00BFFF] border-b border-gray-600 pb-2">
                  Select Your Payment Option
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      formData.paymentOption === "plan"
                        ? "border-[#00BFFF] bg-[#00BFFF]/10"
                        : "border-gray-600 hover:border-gray-400"
                    }`}
                    onClick={() => setFormData({ ...formData, paymentOption: "plan" })}
                  >
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        id="paymentPlan"
                        name="paymentOption"
                        value="plan"
                        checked={formData.paymentOption === "plan"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <Label htmlFor="paymentPlan" className="text-white font-bold cursor-pointer">
                        Payment Plan
                      </Label>
                    </div>
                    <div className="text-xl font-bold text-white mb-1">$9,997</div>
                    <div className="text-gray-300 mb-2">Setup payment</div>
                    <div className="text-gray-300 mb-2">+ 5 payments of $6,977/month</div>
                    <Badge className="bg-green-500 text-white">Save BIG!!</Badge>
                  </div>

                  <div
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      formData.paymentOption === "full"
                        ? "border-[#00BFFF] bg-[#00BFFF]/10"
                        : "border-gray-600 hover:border-gray-400"
                    }`}
                    onClick={() => setFormData({ ...formData, paymentOption: "full" })}
                  >
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        id="paymentFull"
                        name="paymentOption"
                        value="full"
                        checked={formData.paymentOption === "full"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <Label htmlFor="paymentFull" className="text-white font-bold cursor-pointer">
                        Pay in Full
                      </Label>
                    </div>
                    <div className="text-xl font-bold text-white mb-1">$35,888</div>
                    <div className="text-gray-300 mb-2">One-time payment</div>
                    <Badge className="bg-red-500 text-white mb-2">UNREAL DEAL</Badge>
                    <div className="text-sm text-red-400">Limited Time Offer - Only 5 Available!</div>
                  </div>
                </div>
              </div>

              {/* Commitment Statement */}
              <div className="bg-[#00BFFF]/10 rounded-lg p-6 border border-[#00BFFF]/20">
                <h4 className="font-bold text-[#00BFFF] mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Commitment to Success
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  By submitting this application, I understand that the SuccessNOW JED-AI Program is an exclusive
                  program for serious business owners who are committed to implementing proven AI Domination with
                  SuccessNOW strategies and achieving extraordinary results. I am ready to invest the time, energy, and
                  resources necessary to transform my business.
                </p>
                <p className="text-gray-300 text-sm mb-4">
                  I understand that if my application is not accepted, I will receive a 100% refund. If at any time
                  during the 6 months I'm not fully satisfied, I will get a 100% refund of my investment. Even if I am
                  removed from the program for not taking it seriously, I will still receive a 100% refund - no
                  questions asked.
                </p>
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="commitment"
                    required
                    className="text-[#00BFFF] bg-gray-800 border-gray-600"
                  />
                  <label htmlFor="commitment" className="text-white text-sm">
                    I agree to the commitment statement and understand that spaces are limited *
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 hover:from-gray-400 hover:via-gray-300 hover:to-gray-400 text-black font-bold shadow-2xl border border-gray-300/50"
              >
                Submit Application & Proceed to Payment
              </Button>

              <p className="text-xs text-gray-400 text-center">
                🔒 Your application will be reviewed within 24 hours • Your payment will be processed immediately but
                refunded 100% if not accepted
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
