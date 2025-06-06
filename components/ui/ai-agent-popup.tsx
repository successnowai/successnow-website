"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, Phone, Zap, MessageCircle, Sparkles, User, Mail } from "lucide-react"

interface AiAgentPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function AiAgentPopup({ isOpen, onClose }: AiAgentPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Here you would integrate with your lead capture system
      console.log("Lead submitted:", formData)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setIsSubmitting(false)
      onClose()

      // Show success message
      alert("🎉 Success! Our AI agent is calling you RIGHT NOW as a live lead. Answer your phone for an instant demo!")
    } catch (error) {
      console.error("Error submitting lead:", error)
      setIsSubmitting(false)
    }
  }

  const handleInstantDemo = () => {
    console.log("Starting instant demo with GetEverBots...")
    onClose()

    // Integration with GetEverBots.com voice AI
    // Replace this with actual GetEverBots integration
    window.open("https://geteverbots.com", "_blank")
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop with blur effect */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-md z-[60] transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="fixed inset-0 flex items-center justify-center p-4 z-[60]">
        <div
          className="bg-white rounded-3xl shadow-2xl w-full max-w-md sm:max-w-lg p-6 sm:p-8 relative animate-in fade-in-0 zoom-in-95 duration-500 max-h-[95vh] overflow-y-auto border border-gray-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 p-2 hover:bg-gray-100 rounded-full"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#00BFFF] to-[#0080FF] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <MessageCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Talk to Our AI Agent</h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-sm mx-auto">
              Get instant answers and see how our AI can transform your business
            </p>
          </div>

          {/* Instant Demo Button - Most Prominent */}
          <div className="mb-8">
            <Button
              onClick={handleInstantDemo}
              className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-bold py-4 sm:py-5 text-lg sm:text-xl rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl relative overflow-hidden group"
            >
              <div className="flex items-center justify-center space-x-3">
                <Zap className="w-6 h-6 group-hover:animate-bounce" />
                <span>INSTANT DEMO</span>
                <Sparkles className="w-6 h-6 group-hover:animate-spin" />
              </div>

              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </Button>
            <p className="text-sm text-gray-500 text-center mt-3 font-medium">
              ⚡ Skip the form • Connect directly to our voice AI
            </p>
          </div>

          {/* Elegant Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-6 bg-white text-gray-500 font-medium">or get a personal callback</span>
            </div>
          </div>

          {/* Lead Capture Form */}
          <form onSubmit={handleSubmitLead} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-semibold text-gray-700 flex items-center space-x-2">
                <User className="w-4 h-4 text-[#00BFFF]" />
                <span>Full Name</span>
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full py-3 sm:py-4 text-base rounded-xl border-2 border-gray-200 focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20 transition-all duration-200"
                required
              />
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#00BFFF]" />
                <span>Phone Number</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(555) 123-4567"
                className="w-full py-3 sm:py-4 text-base rounded-xl border-2 border-gray-200 focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20 transition-all duration-200"
                required
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#00BFFF]" />
                <span>Email Address</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className="w-full py-3 sm:py-4 text-base rounded-xl border-2 border-gray-200 focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20 transition-all duration-200"
                required
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#00BFFF] to-[#0080FF] hover:from-[#0099FF] hover:to-[#0066CC] text-white font-bold py-4 sm:py-5 text-lg rounded-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl mt-8"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-3">
                  <Sparkles className="w-5 h-5 animate-spin" />
                  <span>Connecting AI Agent...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>Get Personal Demo Call</span>
                </div>
              )}
            </Button>
          </form>

          {/* Footer Note */}
          <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
            <div className="text-center">
              <p className="text-sm text-blue-800 font-semibold mb-1">🔥 Hot Lead Treatment Guaranteed!</p>
              <p className="text-xs text-blue-600">
                Our AI agent calls within 30 seconds and treats you like our most valuable prospect
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
