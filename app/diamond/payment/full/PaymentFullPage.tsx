"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, CheckCircle, Lock } from "lucide-react"
import Link from "next/link"

export default function PaymentFullPage() {
  const [formData, setFormData] = useState({
    nameOnCard: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    streetAddress: "",
    city: "",
    stateProvince: "",
    zipPostalCode: "",
    country: "United States",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Processing full payment...", formData)
  }

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/diamond" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Application
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold px-4 py-2 mb-4">
            💎 SUCCESSNOW JED-AI PROGRAM PAYMENT
          </Badge>
          <h1 className="text-4xl font-bold mb-4">Complete Your Payment</h1>
          <p className="text-red-400 text-xl font-semibold mb-2">THE AI revolution isn't coming, IT's Already here!</p>
          <p className="text-blue-400 text-lg">Become a JED-AI MASTER and Master AI before AI becomes your MASTER</p>

          <div className="mt-6 p-4 bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-lg">
            <p className="text-2xl font-bold text-green-400">💰 SAVE BIG WITH PAY IN FULL!</p>
            <p className="text-lg">Pay in full and save $8,994! Limited time offer - only 5 spots available.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-400">
                  <Lock className="w-5 h-5 mr-2" />
                  Payment Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="nameOnCard" className="text-gray-300">
                        Name on Card *
                      </Label>
                      <Input
                        id="nameOnCard"
                        value={formData.nameOnCard}
                        onChange={(e) => handleInputChange("nameOnCard", e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="cardNumber" className="text-gray-300">
                        Card Number *
                      </Label>
                      <Input
                        id="cardNumber"
                        placeholder="•••• •••• •••• ••••"
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate" className="text-gray-300">
                          Expiry Date *
                        </Label>
                        <Input
                          id="expiryDate"
                          placeholder="MM/YY"
                          value={formData.expiryDate}
                          onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                          className="bg-gray-700 border-gray-600 text-white"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvc" className="text-gray-300">
                          CVC *
                        </Label>
                        <Input
                          id="cvc"
                          placeholder="•••"
                          value={formData.cvc}
                          onChange={(e) => handleInputChange("cvc", e.target.value)}
                          className="bg-gray-700 border-gray-600 text-white"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-blue-400">Billing Address</h3>

                    <div>
                      <Label htmlFor="streetAddress" className="text-gray-300">
                        Street Address *
                      </Label>
                      <Input
                        id="streetAddress"
                        value={formData.streetAddress}
                        onChange={(e) => handleInputChange("streetAddress", e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city" className="text-gray-300">
                          City *
                        </Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                          className="bg-gray-700 border-gray-600 text-white"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="stateProvince" className="text-gray-300">
                          State/Province *
                        </Label>
                        <Input
                          id="stateProvince"
                          value={formData.stateProvince}
                          onChange={(e) => handleInputChange("stateProvince", e.target.value)}
                          className="bg-gray-700 border-gray-600 text-white"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="zipPostalCode" className="text-gray-300">
                          ZIP/Postal Code *
                        </Label>
                        <Input
                          id="zipPostalCode"
                          value={formData.zipPostalCode}
                          onChange={(e) => handleInputChange("zipPostalCode", e.target.value)}
                          className="bg-gray-700 border-gray-600 text-white"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="country" className="text-gray-300">
                          Country *
                        </Label>
                        <select
                          id="country"
                          value={formData.country}
                          onChange={(e) => handleInputChange("country", e.target.value)}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                          required
                        >
                          <option value="United States">United States</option>
                          <option value="Canada">Canada</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Australia">Australia</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 text-lg"
                  >
                    Pay $35,888 Now - SAVE $8,994!
                  </Button>

                  <p className="text-sm text-gray-400 text-center">
                    Your card will be charged $35,888 now. One-time payment with massive savings!
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="bg-gray-800/50 border-gray-700 sticky top-8">
              <CardHeader>
                <CardTitle className="text-white">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Regular Price</span>
                  <span className="text-white">$44,882</span>
                </div>

                <div className="flex justify-between text-green-400 font-semibold">
                  <span>Pay in Full Discount</span>
                  <span>-$8,994</span>
                </div>

                <div className="border-t border-gray-600 pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span className="text-blue-400">Today's Payment</span>
                    <span className="text-blue-400">$35,888</span>
                  </div>
                </div>

                <div className="space-y-3 mt-6">
                  <div className="flex items-center p-3 bg-blue-900/30 border border-blue-500/30 rounded-lg">
                    <Shield className="w-5 h-5 text-blue-400 mr-2" />
                    <span className="text-sm text-blue-300">Secure Payment Processing</span>
                  </div>

                  <div className="flex items-center p-3 bg-green-900/30 border border-green-500/30 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span className="text-sm text-green-300">100% Money-Back Guarantee</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 rounded-lg">
                  <p className="text-yellow-400 font-semibold text-center">⚡ LIMITED TIME OFFER</p>
                  <p className="text-sm text-yellow-300 text-center mt-1">Only 5 spots remaining at this price!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-900/20 border-green-500/30 mt-6">
              <CardContent className="p-6">
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-green-400 mb-2">100% SATISFACTION GUARANTEE</h3>
                  <p className="text-sm text-green-300">
                    If your application is not accepted, you'll receive a 100% refund. If at any time during the 6
                    months you're not fully satisfied, you'll get a 100% refund of your investment. Even if we remove
                    you from the program for not taking it seriously, you'll still get a 100% refund - no questions
                    asked!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
