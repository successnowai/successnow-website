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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  })

  // Refs for focus management
  const popupRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousActiveElement = useRef<Element | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Lead submitted:", formData)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Navigate to the demo page
    router.push("/demo")

    // Close the popup after navigation
    onClose()
    setFormData({ name: "", phone: "", email: "" })
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

  // Handle microphone permissions when iframe loads
  useEffect(() => {
    if (isOpen) {
      const handleIframeLoad = () => {
        if (typeof navigator !== "undefined" && navigator.permissions) {
          navigator.permissions
            .query({ name: "microphone" as PermissionName })
            .then((result) => {
              if (result.state === "granted") {
                console.log("Microphone access already granted")
              } else if (result.state === "prompt") {
                console.log("User will be prompted for microphone access")
              }
            })
            .catch((err) => {
              console.log("Permission query not supported:", err)
            })
        }
      }

      // Add a small delay to ensure iframe is rendered
      const timer = setTimeout(handleIframeLoad, 500)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

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
        <div className="w-full max-w-2xl mx-auto">
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
                  SuccessNOW AI Demo
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

            {/* AI Assistant Iframe */}
            <div className="p-0">
              <div className="flex justify-center items-center bg-gray-50">
                <iframe
                  src="https://iframes.ai/o/1750494450055x405489352949366800?color=dd3ae6&icon=mic"
                  allow="microphone"
                  className="w-full h-96 border-none"
                  id="assistantFrame"
                  title="SuccessNOW AI Assistant Demo"
                  loading="eager"
                />
              </div>
            </div>

            {/* Footer with instructions */}
            <div className="bg-gray-50 p-4 border-t border-gray-200">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">
                  🎤 <strong>Voice-enabled AI Demo</strong> - Speak naturally with our AI assistant
                </p>
                <p className="text-xs text-gray-500">
                  Your browser may request microphone permission for the best experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
