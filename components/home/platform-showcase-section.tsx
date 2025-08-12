"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Phone, Globe, BarChart3, Users, Zap } from "lucide-react"
import Link from "next/link"

export function PlatformShowcaseSection() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: MessageCircle,
      title: "AI Chat Agent",
      description: "24/7 intelligent chat that converts visitors into qualified leads",
      details: [
        "Natural language processing",
        "Lead qualification",
        "Appointment booking",
        "CRM integration",
        "Multi-language support",
      ],
    },
    {
      icon: Phone,
      title: "AI Voice Agent",
      description: "Human-like voice AI that handles calls and books appointments",
      details: [
        "Natural voice conversations",
        "Call routing and handling",
        "Appointment scheduling",
        "Follow-up automation",
        "Call analytics",
      ],
    },
    {
      icon: Globe,
      title: "AI-Optimized Website",
      description: "High-converting websites built for AI visibility and lead generation",
      details: [
        "AI-optimized content",
        "Mobile-responsive design",
        "Fast loading speeds",
        "SEO optimization",
        "Conversion tracking",
      ],
    },
    {
      icon: BarChart3,
      title: "Smart Analytics",
      description: "AI-powered insights that show exactly what's working",
      details: [
        "Real-time performance metrics",
        "Lead source tracking",
        "Conversion optimization",
        "ROI calculations",
        "Predictive analytics",
      ],
    },
    {
      icon: Users,
      title: "CRM Integration",
      description: "Seamlessly connects with your existing tools and workflows",
      details: [
        "Popular CRM integrations",
        "Automated data sync",
        "Lead scoring",
        "Pipeline management",
        "Custom workflows",
      ],
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description: "AI-driven campaigns that run themselves and optimize performance",
      details: [
        "Automated email sequences",
        "Social media management",
        "Ad campaign optimization",
        "Content generation",
        "Performance tracking",
      ],
    },
  ]

  const ActiveIcon = features[activeFeature]?.icon

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800" />

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Complete AI Business Platform</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to automate, optimize, and scale your business with AI. No technical skills required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Feature list */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
                  activeFeature === index
                    ? "border-cyan-500 bg-cyan-500/10"
                    : "border-white/10 bg-white/5 hover:border-cyan-500/50"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      activeFeature === index ? "bg-cyan-500" : "bg-gray-600"
                    }`}
                  >
                    {feature.icon && <feature.icon className="w-6 h-6 text-white" />}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature details */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  {ActiveIcon && <ActiveIcon className="w-8 h-8 text-white" />}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{features[activeFeature]?.title}</h3>
                  <p className="text-gray-400">{features[activeFeature]?.description}</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {features[activeFeature]?.details.map((detail, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-gray-300">{detail}</span>
                  </div>
                ))}
              </div>

              <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 transition-all duration-300 hover:scale-105">
                  Get Started Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl text-gray-300 mb-6">
              Join thousands of businesses already using AI to grow faster and serve customers better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
                >
                  Start Your AI Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 px-8 py-4 text-lg transition-all duration-300 bg-transparent"
                >
                  Watch Demo First
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
