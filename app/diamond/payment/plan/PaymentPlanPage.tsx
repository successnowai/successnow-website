"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, CreditCard, Lock } from "lucide-react"

export default function PaymentPlanPage() {
  const [paymentInfo, setPaymentInfo] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    billingAddress: "",
    city: "",
    state: "",
    zip: "",
    country: "US",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Processing payment:", paymentInfo)
    window.location.href = "/diamond/confirmation"
  }

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Button variant="ghost" className="mb-8 text-gray-300 hover:text-white" onClick={() => window.history.back()}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Application
        </Button>

        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 text-black text-lg px-6 py-2 font-bold shadow-2xl border border-gray-300/50 mb-6">
            💎 SUCCESSNOW JED-AI PROGRAM PAYMENT
          </Badge>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-200 bg-clip-text text-transparent">
            Complete Your Payment
          </h1>
          <div className="mb-6">
            <p className="text-lg font-bold text-red-400 mb-2">THE AI revolution isn't coming, IT's Already here!</p>
            <p className="text-base font-bold text-[#00BFFF] mb-2">
              Become a JED-AI MASTER and Master AI before AI becomes your MASTER
            </p>
          </div>
          <p className="text-xl text-gray-300 mb-6">Payment Plan: $9,997 setup + 5 payments of $6,977/month</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="bg-gradient-to-br from-black via-gray-900 to-black border-gray-300/30 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <CreditCard className="h-6 w-6 mr-2 text-[#00BFFF]" />
                  Payment Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardName" className="text-gray-300">
                        Name on Card *
                      </Label>
                      <Input
                        id="cardName"
                        name="cardName"
                        value={paymentInfo.cardName}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-800 border-gray-600 text-white"
                      />
                    </div>

                    <div>
                      <Label htmlFor="cardNumber" className="text-gray-300">
                        Card Number *
                      </Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        value={paymentInfo.cardNumber}
                        onChange={handleInputChange}
                        required
                        placeholder="•••• •••• •••• ••••"
                        className="bg-gray-800 border-gray-600 text-white"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry" className="text-gray-300">
                          Expiry Date *
                        </Label>
                        <Input
                          id="expiry"
                          name="expiry"
                          value={paymentInfo.expiry}
                          onChange={handleInputChange}
                          required
                          placeholder="MM/YY"
                          className="bg-gray-800 border-gray-600 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvc" className="text-gray-300">
                          CVC *
                        </Label>
                        <Input
                          id="cvc"
                          name="cvc"
                          value={paymentInfo.cvc}
                          onChange={handleInputChange}
                          required
                          placeholder="•••"
                          className="bg-gray-800 border-gray-600 text-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-[#00BFFF]">Billing Address</h3>
                    <div>
                      <Label htmlFor="billingAddress" className="text-gray-300">
                        Street Address *
                      </Label>
                      <Input
                        id="billingAddress"
                        name="billingAddress"
                        value={paymentInfo.billingAddress}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-800 border-gray-600 text-white"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city" className="text-gray-300">
                          City *
                        </Label>
                        <Input
                          id="city"
                          name="city"
                          value={paymentInfo.city}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-800 border-gray-600 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state" className="text-gray-300">
                          State/Province *
                        </Label>
                        <Input
                          id="state"
                          name="state"
                          value={paymentInfo.state}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-800 border-gray-600 text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="zip" className="text-gray-300">
                          ZIP/Postal Code *
                        </Label>
                        <Input
                          id="zip"
                          name="zip"
                          value={paymentInfo.zip}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-800 border-gray-600 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="country" className="text-gray-300">
                          Country *
                        </Label>
                        <select
                          id="country"
                          name="country"
                          value={paymentInfo.country}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2"
                        >
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="UK">United Kingdom</option>
                          <option value="AU">Australia</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 hover:from-gray-400 hover:via-gray-300 hover:to-gray-400 text-black font-bold shadow-2xl"
                    >
                      Pay $9,997 Now
                    </Button>
                    <p className="text-xs text-gray-400 text-center mt-2">
                      Your card will be charged $9,997 now. Future payments of $6,977 will be automatically charged
                      monthly.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-gradient-to-br from-black via-gray-900 to-black border-gray-300/30 shadow-2xl sticky top-8">
              <CardHeader>
                <CardTitle className="text-xl text-white">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Setup Payment</span>
                  <span className="text-white font-bold">$9,997</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Future Monthly Payments</span>
                  <span className="text-white">5 × $6,977</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Total Program Value</span>
                  <span className="text-white">$100,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Payment Plan Total</span>
                  <span className="text-white">$44,882</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Pay in Full Option</span>
                  <span className="text-white">$35,888</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">You Could Save</span>
                  <span className="text-green-400">$8,994</span>
                </div>
                <div className="border-t border-gray-700 my-2 pt-2">
                  <div className="flex justify-between font-bold">
                    <span className="text-[#00BFFF]">Today's Payment</span>
                    <span className="text-white">$9,997</span>
                  </div>
                </div>
                <div className="bg-[#00BFFF]/10 p-3 rounded-lg border border-[#00BFFF]/20 mt-4">
                  <div className="flex items-center text-sm">
                    <Lock className="h-4 w-4 text-[#00BFFF] mr-2" />
                    <span className="text-gray-300">Secure Payment Processing</span>
                  </div>
                </div>
                <div className="bg-green-500/10 p-3 rounded-lg border border-green-500/20">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    <span className="text-gray-300">100% Money-Back Guarantee</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
