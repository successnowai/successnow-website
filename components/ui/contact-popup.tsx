"use client"

import { useState, useEffect } from "react"
import { X, Phone, Mail, MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface ContactPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const [isConnecting, setIsConnecting] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleVoiceCall = () => {
    setIsConnecting(true)
    // Simulate connecting to voice AI
    setTimeout(() => {
      setIsConnecting(false)
      // Here you would integrate with your actual voice AI system
      console.log("Connecting to SuccessNOW AI Assistant...")
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-black/80 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <img src="/images/successnow-logo.png" alt="SuccessNOW" className="h-8 w-auto mr-3" />
            <span className="text-xl font-bold text-white">SuccessNOW</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Contact Us</h2>
          <p className="text-gray-300">Get in touch with our team</p>
        </div>

        {/* Contact Options */}
        <div className="space-y-4">
          {/* Voice AI Call */}
          <Button
            onClick={handleVoiceCall}
            disabled={isConnecting}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-3"
          >
            <Phone className={`h-5 w-5 ${isConnecting ? 'animate-pulse' : ''}`} />
            <span>{isConnecting ? 'Connecting...' : 'Start Voice Call with AI'}</span>
          </Button>

          {/* Email */}
          <a
            href="mailto:info@successnow.ai"
            className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-3 border border-white/20"
          >
            <Mail className="h-5 w-5" />
            <span>info@successnow.ai</span>
          </a>

          {/* Live Chat */}
          <Button
            onClick={() => {
              // Integrate with your chat system
              console.log("Opening live chat...")
            }}
            variant="outline"
            className="w-full border-white/20 text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-3"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Live Chat Support</span>
          </Button>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-white/20 text-center">
          <p className="text-gray-400 text-sm">
            Available 24/7 • Response within minutes
          </p>
        </div>
      </div>
    </div>
  )
}
