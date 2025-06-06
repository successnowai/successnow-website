"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, Mic, BotIcon as Robot, Sparkles, User, Mail, Phone, Zap, MessageCircle } from "lucide-react"
import { useRouter } from "next/navigation"

interface DemoPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function DemoPopup({ isOpen, onClose }: DemoPopupProps) {
  const router = useRouter()
  const [showLeadCapture, setShowLeadCapture] = useState(true)
  const [showInstantDemo, setShowInstantDemo] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  })

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
      setShowLeadCapture(false)
      setShowInstantDemo(true)
    } catch (error) {
      console.error("Error submitting lead:", error)
      setIsSubmitting(false)
    }
  }

  const handleInstantDemo = async () => {
    console.log("Requesting microphone access and navigating to demo page...")

    try {
      // Request microphone access before navigating
      await navigator.mediaDevices.getUserMedia({ audio: true })
      console.log("Microphone access granted")

      // Navigate to the demo page
      router.push("/demo")

      // Close the popup after navigation
      onClose()
      setShowLeadCapture(true)
      setShowInstantDemo(false)
      setFormData({ name: "", phone: "", email: "" })
    } catch (error) {
      console.error("Microphone access denied:", error)
      // Still navigate to demo page even if mic access is denied
      router.push("/demo")
      onClose()
      setShowLeadCapture(true)
      setShowInstantDemo(false)
      setFormData({ name: "", phone: "", email: "" })
    }
  }

  // Reset state when popup is closed
  useEffect(() => {
    if (!isOpen) {
      setShowLeadCapture(true)
      setShowInstantDemo(false)
      setFormData({ name: "", phone: "", email: "" })
    }
  }, [isOpen])

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

          {showLeadCapture && (
            <>
              {/* Header Section */}
              <div className="text-center mb-8">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#00BFFF] to-[#0080FF] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Robot className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                  <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Meet Your SuccessNOW AI Agent</h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-sm mx-auto">
                  Enter your information and the AI agent will call you as if you are a lead and start your demo of the
                  future!
                </p>
              </div>

              {/* Microphone Permission Notice */}
              <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
                <div className="flex items-center space-x-3">
                  <Mic className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-blue-800 font-semibold">🎤 Voice Demo Ready!</p>
                    <p className="text-xs text-blue-600">
                      We'll request microphone access for the live voice demonstration
                    </p>
                  </div>
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
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-3">
                      <MessageCircle className="w-5 h-5" />
                      <span>Get AI Demo Access</span>
                    </div>
                  )}
                </Button>
              </form>

              {/* Skip to Demo Button */}
              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={handleInstantDemo}
                  className="text-[#0080FF] hover:text-[#0066CC] font-medium underline underline-offset-2 text-sm transition-colors duration-200"
                >
                  Skip form and go directly to live demo →
                </button>
              </div>

              {/* Live Transfer Feature */}
              <div className="mt-8 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border border-orange-100">
                <div className="text-center">
                  <p className="text-sm text-orange-800 font-semibold mb-1">🔄 Experience Live Transfer</p>
                  <p className="text-xs text-orange-600">
                    Our AI agent can transfer you to a sales person during the demo
                  </p>
                </div>
              </div>
            </>
          )}

          {showInstantDemo && (
            <>
              {/* Success Header */}
              <div className="text-center mb-8">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-white animate-spin" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Welcome, {formData.name}!</h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-sm mx-auto">
                  Your information has been submitted. Ready to experience our AI in action?
                </p>
              </div>

              {/* Instant Demo Button */}
              <div className="space-y-6">
                <Button
                  onClick={handleInstantDemo}
                  className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-bold py-6 sm:py-7 text-xl sm:text-2xl rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl relative overflow-hidden group"
                >
                  <div className="flex items-center justify-center space-x-4">
                    <Zap className="w-7 h-7 group-hover:animate-bounce" />
                    <span>START INSTANT DEMO</span>
                    <Mic className="w-7 h-7 group-hover:animate-pulse" />
                  </div>

                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </Button>

                <div className="text-center space-y-3">
                  <p className="text-lg font-semibold text-gray-800">🎯 Your AI Demo is Ready!</p>
                  <p className="text-sm text-gray-600">
                    Click above to access our live demo page with voice interaction
                  </p>
                </div>
              </div>

              {/* Live Transfer Feature */}
              <div className="mt-8 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border border-orange-100">
                <div className="text-center">
                  <p className="text-sm text-orange-800 font-semibold mb-1">🔄 Experience Live Transfer</p>
                  <p className="text-xs text-orange-600">
                    Our AI agent can transfer you to a sales person during the demo
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
