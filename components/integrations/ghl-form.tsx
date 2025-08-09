"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface GHLFormProps {
  formType: "demo" | "signup" | "contact"
  className?: string
}

export default function GHLForm({ formType, className = "" }: GHLFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // GHL Integration - Replace with actual GHL webhook URL
      const ghlWebhookUrl =
        process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL || "https://hooks.gohighlevel.com/api/webhook/your-webhook-id"

      const response = await fetch(ghlWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          formType,
          source: "SuccessNOW Website",
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setSubmitMessage("Success! We'll be in touch soon.")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          industry: "",
          message: "",
        })
      } else {
        throw new Error("Submission failed")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {submitMessage && (
        <div
          className={`p-3 rounded-md text-center ${
            submitMessage.includes("Success") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {submitMessage}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="firstName" className="sr-only">
            First Name
          </label>
          <Input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            aria-required="true"
            className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF] focus:ring-offset-2 focus:ring-offset-black"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="sr-only">
            Last Name
          </label>
          <Input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            aria-required="true"
            className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF] focus:ring-offset-2 focus:ring-offset-black"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
          required
          aria-required="true"
          className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF] focus:ring-offset-2 focus:ring-offset-black"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="sr-only">
          Phone Number
        </label>
        <Input
          id="phone"
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
          required
          aria-required="true"
          className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF] focus:ring-offset-2 focus:ring-offset-black"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="sr-only">
          Company Name
        </label>
        <Input
          id="company"
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleInputChange}
          className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF] focus:ring-offset-2 focus:ring-offset-black"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="industry" className="sr-only">
          Industry
        </label>
        <select
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleInputChange}
          className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white focus:border-[#00BFFF] focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:ring-offset-2 focus:ring-offset-black"
          aria-label="Select Your Industry"
        >
          <option value="">Select Your Industry</option>
          <option value="legal">Legal / Law Firms</option>
          <option value="realestate">Real Estate</option>
          <option value="automotive">Auto Dealers</option>
          <option value="mortgage">Mortgage Brokers</option>
          <option value="fitness">Gyms & Studios</option>
          <option value="medspa">Medspas</option>
          <option value="other">Other</option>
        </select>
      </div>

      {formType === "contact" && (
        <textarea
          name="message"
          placeholder="How can we help you?"
          value={formData.message}
          onChange={handleInputChange}
          rows={4}
          className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-[#00BFFF] focus:outline-none resize-none"
        />
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#00BFFF] text-white hover:bg-[#00BFFF]/90 font-bold py-3 px-4 rounded-md transition-all duration-200 hover:scale-105 disabled:opacity-50"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Submitting...
          </div>
        ) : (
          `${formType === "demo" ? "Get Demo" : formType === "signup" ? "Sign Up" : "Send Message"}`
        )}
      </Button>
    </form>
  )
}
