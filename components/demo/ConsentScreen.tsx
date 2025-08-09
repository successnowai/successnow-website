"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"

interface ConsentScreenProps {
  onConsent: (data: { name: string; email: string; phone: string }) => void
}

export default function ConsentScreen({ onConsent }: ConsentScreenProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [consentChecked, setConsentChecked] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all fields")
      return
    }

    if (!consentChecked) {
      alert("Please agree to receive SMS messages to continue")
      return
    }

    setIsSubmitting(true)

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    onConsent(formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const isFormValid = formData.name && formData.email && formData.phone && consentChecked

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-2xl border-0">
        <CardContent className="p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl mb-4">
              <div className="w-8 h-8 bg-white rounded transform rotate-12"></div>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">SuccessNOW.ai</h1>
          </div>

          {/* Headline */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Get Your Free</h2>
            <h2 className="text-3xl font-bold text-gray-800">AI Demo!</h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="h-14 text-lg border-gray-300 rounded-xl focus:border-blue-500 focus:ring-blue-500"
              required
            />

            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="h-14 text-lg border-gray-300 rounded-xl focus:border-blue-500 focus:ring-blue-500"
              required
            />

            <Input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="h-14 text-lg border-gray-300 rounded-xl focus:border-blue-500 focus:ring-blue-500"
              required
            />

            {/* Consent Checkbox */}
            <div className="space-y-3 rounded-lg bg-gray-100 p-4 border border-gray-200">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="consent"
                  checked={consentChecked}
                  onCheckedChange={(checked) => setConsentChecked(checked as boolean)}
                  className="mt-1 w-5 h-5 border-2 border-gray-400 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                />
                <label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
                  I agree to receive recurring automated marketing text messages from SuccessNOW.ai at the phone number
                  provided. Consent is not a condition to purchase. Reply STOP to unsubscribe. Msg & data rates may
                  apply.
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Starting Demo...</span>
                </div>
              ) : (
                "Start Now"
              )}
            </Button>
          </form>

          {/* Contact Info */}
          <div className="text-center mt-8 space-y-2">
            <p className="text-gray-600 font-medium">https://successnow.ai</p>
            <p className="text-gray-600 font-medium">(866) 612-5353</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
