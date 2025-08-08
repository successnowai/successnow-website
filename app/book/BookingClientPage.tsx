"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Users, Star, Calendar, Zap, Target, TrendingUp } from 'lucide-react'

export default function BookingClientPage() {
  useEffect(() => {
    // Load the calendar script
    const script = document.createElement('script')
    script.src = 'https://link.successnow.ai/js/form_embed.js'
    script.type = 'text/javascript'
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const benefits = [
    {
      icon: Target,
      title: "Custom AI Strategy",
      description: "Get a personalized AI implementation plan for your business"
    },
    {
      icon: TrendingUp,
      title: "ROI Analysis",
      description: "See exactly how much revenue our AI systems can generate"
    },
    {
      icon: Zap,
      title: "Live Demo",
      description: "Experience our AI voice assistant and automation tools"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Work with our AI specialists to optimize your setup"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
      <div className="absolute inset-0 bg-[url('/images/neon-cyberpunk-bg.png')] opacity-5 bg-cover bg-center"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-cyan-400/30 mb-8">
              <Calendar className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300">FREE AI Consultation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Schedule Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI Consultation
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-medium">
              Get a personalized demo and strategy session with our AI experts. 
              Discover how our AI systems can transform your business in just 30 minutes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Benefits */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">What You'll Get:</h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <Card
                      key={index}
                      className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 transition-all duration-300 shadow-2xl"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                            <benefit.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                            <p className="text-gray-200 font-medium">{benefit.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Consultation Details - Glassmorphic Design */}
              <Card className="bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl shadow-cyan-500/10">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    Consultation Details
                  </h3>
                  
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-semibold text-lg">30-minute personalized session</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-semibold text-lg">Live AI demo tailored to your industry</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-semibold text-lg">Custom implementation roadmap</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-semibold text-lg">ROI projections for your business</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-semibold text-lg">No obligation - completely free</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial */}
              <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-100 mb-6 italic font-medium leading-relaxed">
                    "The consultation was incredibly valuable. They showed me exactly how their AI could 
                    transform my business and the ROI projections were spot on. Within 30 days, 
                    I was seeing 3x more qualified leads."
                  </blockquote>
                  <div className="text-white font-bold text-lg">Sarah Johnson</div>
                  <div className="text-cyan-300 text-sm font-semibold">CEO, Johnson Dental Group</div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Calendar */}
            <div className="lg:sticky lg:top-8">
              <Card className="bg-white/5 backdrop-blur-xl border border-white/20 overflow-hidden shadow-2xl shadow-purple-500/10">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-cyan-600 to-purple-600 p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-3">Book Your Free Consultation</h3>
                    <p className="text-cyan-100 font-medium">Choose a time that works for you</p>
                  </div>
                  
                  <div className="p-8">
                    <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                      <iframe 
                        src="https://link.successnow.ai/widget/booking/roGLNeb6IUOLyGy62eyL" 
                        style={{
                          width: '100%',
                          border: 'none',
                          overflow: 'hidden',
                          minHeight: '600px'
                        }}
                        scrolling="no" 
                        id="roGLNeb6IUOLyGy62eyL_1754687850070"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <Card className="bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl shadow-cyan-500/10 max-w-4xl mx-auto">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
                <p className="text-gray-100 text-xl mb-8 font-medium">
                  Join thousands of businesses already using AI to increase revenue by 300-500%
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 text-base text-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold">Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold">30-Minute Session</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold">Expert AI Specialists</span>
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
