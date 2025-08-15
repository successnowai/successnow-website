"use client"

import { useEffect } from "react"
import { Clock, CheckCircle, Users, TrendingUp, Shield } from "lucide-react"

export default function BookingClientPage() {
  useEffect(() => {
    // Load the calendar script
    const script = document.createElement("script")
    script.src = "https://link.successnow.ai/js/form_embed.js"
    script.type = "text/javascript"
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.1),transparent_50%)]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
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
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Book Your AI Consultation
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how AI can transform your business in just 30 minutes. Get a personalized demo and implementation
            roadmap.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Benefits */}
          <div className="space-y-8">
            {/* Consultation Details Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl shadow-cyan-500/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Consultation Details</h3>
              </div>

              <div className="space-y-4">
                {[
                  "30-minute personalized session",
                  "Live AI demo tailored to your industry",
                  "Custom implementation roadmap",
                  "ROI projections for your business",
                  "No obligation - completely free",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-100 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What You'll Get Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl shadow-purple-500/10">
              <h3 className="text-2xl font-bold text-white mb-6">What You'll Get</h3>

              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Revenue Growth Analysis</h4>
                    <p className="text-gray-200">
                      See exactly how much additional revenue AI can generate for your specific business model.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Custom AI Strategy</h4>
                    <p className="text-gray-200">
                      Personalized implementation plan designed specifically for your industry and goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Risk-Free Assessment</h4>
                    <p className="text-gray-200">
                      No commitment required. Get valuable insights whether you move forward or not. 30-day money-back
                      guarantee - No Risk, Just Missed Opportunity!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl shadow-green-500/10">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/placeholder-user.jpg"
                  alt="Client testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">Sarah Johnson</h4>
                  <p className="text-gray-300">CEO, Digital Marketing Agency</p>
                </div>
              </div>
              <p className="text-gray-100 italic leading-relaxed">
                "The consultation was incredibly valuable. In just 30 minutes, I understood exactly how AI could
                transform our lead generation. We implemented their system and saw a 300% increase in qualified leads
                within the first month."
              </p>
            </div>
          </div>

          {/* Right Column - Calendar */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl shadow-blue-500/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Choose Your Time</h3>

              {/* Calendar Embed */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
                <iframe
                  src="https://link.successnow.ai/widget/booking/roGLNeb6IUOLyGy62eyL"
                  style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "600px" }}
                  scrolling="no"
                  id="roGLNeb6IUOLyGy62eyL_1754687850070"
                  className="rounded-xl"
                />
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-300 text-sm">🔒 Your information is secure and will never be shared</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl text-gray-300 mb-6">
              Join thousands of businesses already using AI to automate their sales and marketing.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-cyan-400">97%</div>
                <div className="text-gray-300">Lead Capture Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">24/7</div>
                <div className="text-gray-300">AI Operation</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">48hrs</div>
                <div className="text-gray-300">Setup Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
