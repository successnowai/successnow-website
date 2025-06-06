"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { BotIcon as Robot } from "lucide-react"
import { useRouter } from "next/navigation"
import { DemoPopup } from "@/components/ui/demo-popup"

export default function FloatingChatRobot() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [showLeadCapture, setShowLeadCapture] = useState(true)
  const [showInstantDemo, setShowInstantDemo] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  })

  // Floating animation
  const [floatDirection, setFloatDirection] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatDirection((prev) => prev * -1)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

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
      setIsOpen(false)
      setShowLeadCapture(true)
      setShowInstantDemo(false)
      setFormData({ name: "", phone: "", email: "" })
    } catch (error) {
      console.error("Microphone access denied:", error)
      // Still navigate to demo page even if mic access is denied
      router.push("/demo")
      setIsOpen(false)
      setShowLeadCapture(true)
      setShowInstantDemo(false)
      setFormData({ name: "", phone: "", email: "" })
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    setShowLeadCapture(true)
    setShowInstantDemo(false)
    setFormData({ name: "", phone: "", email: "" })
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="relative rounded-full w-16 h-16 shadow-2xl transition-all duration-300 hover:scale-110 border-0 group"
          style={{
            background: "linear-gradient(135deg, #0080FF, #00BFFF)",
            boxShadow:
              "0 0 20px 5px rgba(0, 128, 255, 0.7), 0 0 40px 10px rgba(0, 128, 255, 0.5), 0 0 60px 15px rgba(0, 128, 255, 0.3)",
            transform: `translateY(${floatDirection * 5}px)`,
            transition: "transform 3s ease-in-out, box-shadow 1s ease-in-out",
          }}
        >
          <Robot className="w-8 h-8 text-white group-hover:animate-bounce" />

          {/* Notification dot */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-white text-xs font-bold">1</span>
          </div>

          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full bg-[#0080FF] animate-ping opacity-30"></div>
        </Button>
      </div>

      {/* Demo Popup */}
      <DemoPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
