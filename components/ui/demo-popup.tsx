"use client"
import type React from "react"
import { useState, useEffect, useRef } from "react"
import { X, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"

interface DemoPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function DemoPopup({ isOpen, onClose }: DemoPopupProps) {
  const router = useRouter()
  const [showComplianceForm, setShowComplianceForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    agreeToSMS: false,
  })

  // Refs for focus management
  const popupRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousActiveElement = useRef<Element | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Lead submitted:", formData)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Navigate to the demo page
    router.push("/demo")

    // Close the popup after navigation
    onClose()
    setFormData({ name: "", phone: "", email: "", agreeToSMS: false })
  }

  const handleDirectDemo = () => {
    // Direct navigation to demo page
    router.push("/demo")
    onClose()
  }

  // Lock body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      // Store the currently focused element
      previousActiveElement.current = document.activeElement
      // Focus the close button
      setTimeout(() => {
        closeButtonRef.current?.focus()
      }, 100)
    } else {
      document.body.style.overflow = ""
      // Return focus to the element that was focused before the modal opened
      if (previousActiveElement.current && "focus" in previousActiveElement.current) {
        ;(previousActiveElement.current as HTMLElement).focus()
      }
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      // Close on escape
      if (e.key === "Escape") {
        onClose()
      }

      // Trap focus within modal
      if (e.key === "Tab") {
        if (!popupRef.current) return

        const focusableElements = popupRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        )

        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop with blur effect */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-md z-[60] transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        className="fixed inset-0 z-[60] overflow-y-auto flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="w-full max-w-md mx-auto">
          <div
            ref={popupRef}
            className="relative bg-white rounded-xl shadow-2xl border border-gray-100 animate-in fade-in-0 zoom-in-95 duration-500 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with close button */}
            <div className="bg-gradient-to-r from-[#dd3ae6] to-[#c540ea] p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h2 id="modal-title" className="text-xl font-bold text-white">
                  Get Your Free AI Demo
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="text-white/80 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#dd3ae6]"
                aria-label="Close demo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {!showComplianceForm ? (
                // Option Selection
                <div className="text-center space-y-6">
                  <div className="mb-6">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jul%202%2C%202025%2C%2001_46_23%20PM-1fr6ntExnlXvoD2Ty7xAxXTek0VuVx.png"
                      alt="SuccessNOW.ai Demo Options"
                      className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Choose Your Demo Experience</h3>

                  <div className="space-y-4">
                    <button
                      onClick={handleDirectDemo}
                      className="w-full bg-gradient-to-r from-[#dd3ae6] to-[#c540ea] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      🎤 Voice & Text AI Demo
                    </button>

                    <button
                      onClick={() => setShowComplianceForm(true)}
                      className="w-full border-2 border-[#dd3ae6] text-[#dd3ae6] py-3 px-6 rounded-lg font-semibold hover:bg-[#dd3ae6] hover:text-white transition-all duration-300"
                    >
                      📋 Compliance Form Demo
                    </button>
                  </div>

                  <p className="text-sm text-gray-600 mt-4">
                    Experience our AI assistant with voice interaction or see our compliance-ready form system
                  </p>
                </div>
              ) : (
                // Compliance Form
                <form onSubmit={handleSubmitLead} className="space-y-4">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#dd3ae6] to-[#c540ea] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white">🏢</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Get Your Free AI Demo!</h3>
                  </div>

                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dd3ae6] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dd3ae6] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dd3ae6] focus:border-transparent"
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="agreeToSMS"
                      checked={formData.agreeToSMS}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-4 h-4 text-[#dd3ae6] border-gray-300 rounded focus:ring-[#dd3ae6]"
                    />
                    <label className="text-sm text-gray-600 leading-relaxed">
                      By submitting this form, you agree to receive recurring SMS messages from SuccessNOW.ai. Reply
                      STOP to unsubscribe. Msg & data rates may apply.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={!formData.agreeToSMS}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Start Now
                  </button>

                  <div className="text-center text-sm text-gray-600 space-y-1">
                    <p>https://successnow.ai</p>
                    <p>+1 (888) 468-0707</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowComplianceForm(false)}
                    className="w-full text-[#dd3ae6] py-2 text-sm hover:underline"
                  >
                    ← Back to Demo Options
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
