"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, Target, Zap, Calendar } from 'lucide-react'

export function BookingClientPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for the iframe
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
      <div className="absolute inset-0 bg-[url('/images/neon-cyberpunk-bg.png')] opacity-5 bg-cover bg-center"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 border-pink-500/30 text-lg px-6 py-2">
            <Calendar className="w-5 h-5 mr-2" />
            FREE AI Consultation
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Book Your AI Consultation
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Schedule a personalized demo and discover how SuccessNOW AI can transform your business with intelligent automation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Benefits */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">What You'll Get</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-300 mb-2">Custom AI Strategy Session</h3>
                      <p className="text-gray-300">Get a personalized roadmap for implementing AI in your specific industry and business model.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-purple-300 mb-2">Live AI Demo</h3>
                      <p className="text-gray-300">See our AI agents in action - watch them handle real customer interactions and book appointments.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-300 mb-2">1-on-1 Expert Consultation</h3>
                      <p className="text-gray-300">Work directly with our AI specialists to understand how to 10x your lead conversion.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-lg border border-orange-500/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-orange-400" />
                    <span className="font-bold text-orange-300">Session Details</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">30-minute personalized session</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">No sales pressure - pure value</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Industry-specific recommendations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Actionable next steps</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Offer */}
            <Card className="bg-gradient-to-r from-green-900/30 to-teal-900/30 border border-green-500/30">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-2xl">🔥</span>
                    <span className="text-xl font-bold text-green-300">LIMITED TIME: 90% OFF</span>
                    <span className="text-2xl">🔥</span>
                  </div>
                  <p className="text-green-200 font-semibold mb-2">
                    Book today and get exclusive access to our Platform Project for just $3,488
                  </p>
                  <p className="text-sm text-green-300">
                    (Usually $35,000 + 2 FREE months platform access)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Calendar */}
          <div className="lg:sticky lg:top-24">
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-purple-500/30 shadow-2xl shadow-purple-500/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-6">Select Your Time</h3>
                
                {/* Calendar Container */}
                <div className="relative">
                  {isLoading && (
                    <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm rounded-lg flex items-center justify-center z-10">
                      <div className="text-center">
                        <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-300">Loading calendar...</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="bg-white rounded-lg overflow-hidden min-h-[600px]">
                    <iframe 
                      src="https://link.successnow.ai/widget/booking/roGLNeb6IUOLyGy62eyL" 
                      style={{
                        width: '100%',
                        border: 'none',
                        overflow: 'hidden',
                        minHeight: '600px'
                      }}
                      scrolling="no" 
                      id="roGLNeb6IUOLyGy62eyL_1754677444760"
                      onLoad={() => setIsLoading(false)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Load the booking script */}
      <script 
        src="https://link.successnow.ai/js/form_embed.js" 
        type="text/javascript"
        async
      />
    </div>
  )
}
