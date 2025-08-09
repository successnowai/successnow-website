"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Bot, Target, Globe, LayoutDashboard, LinkIcon, GraduationCap, CheckCircle } from "lucide-react"
import DemoPopup from "@/components/ui/demo-popup"

export default function CustomBuildNowClientPage() {
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false)

  const features = [
    {
      icon: Bot,
      title: "AI Super Agents",
      description:
        "Custom AI agents trained on your business that never sleep, never miss a call, and always follow up.",
    },
    {
      icon: Target,
      title: "Smart Funnels",
      description: "AI-powered funnels that automatically qualify leads, book appointments, and nurture prospects.",
    },
    {
      icon: Globe,
      title: "Custom Website",
      description: "Professional website branded to your business with integrated AI chat and lead capture.",
    },
    {
      icon: LayoutDashboard,
      title: "Analytics Dashboard",
      description: "Real-time insights into your AI performance, lead quality, and conversion rates.",
    },
    {
      icon: LinkIcon,
      title: "CRM Integration",
      description: "Seamlessly connects with your existing tools and workflows for maximum efficiency.",
    },
    {
      icon: GraduationCap,
      title: "Training & Support",
      description: "Complete onboarding, training, and ongoing support to ensure your success.",
    },
  ]

  const benefits = [
    "A solution perfectly matched to your unique challenges.",
    "Workflows designed around how your business actually operates.",
    "AI agents that speak your industry's language.",
    "Integrations with the specific software you already use.",
    "A dedicated team to ensure your custom build is a success.",
    "The ultimate competitive advantage in your niche.",
  ]

  return (
    <div className="bg-[#0B1426] text-white overflow-x-hidden">
      <div className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 text-center bg-cover bg-center starry-background">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Don't See Your Industry? <br />
            <span className="text-[#00BFFF]">We'll Build It For You.</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-300">
            Your business is unique. Your AI should be too. We specialize in creating bespoke AI solutions that are
            precision-engineered to solve your specific challenges, streamline your workflows, and unlock growth
            opportunities you never thought possible.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#00BFFF] to-[#00D1FF] hover:from-[#00AADD] hover:to-[#00B8E6] text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <Link href="/custombuildnow/signup">Book a Custom Build Consultation &rarr;</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white/50 hover:bg-white/10 hover:border-white text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg transition-all"
              onClick={() => setIsDemoPopupOpen(true)}
            >
              Launch Instant Demo NOW
            </Button>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold flex items-center justify-center gap-3">
                  <Zap className="text-[#00BFFF]" />
                  Your Business, Your AI, Your Rules
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  We combine our powerful core platform with custom development to create the perfect AI solution for
                  you.
                </p>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-lg">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="mt-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Our Full Suite of Tools, Customized for You</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              Your custom build gets access to our entire battle-tested platform, tailored to your exact specifications.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-[#00BFFF] transition-colors duration-300"
              >
                <CardContent className="p-0 flex flex-col items-center">
                  <feature.icon className="h-12 w-12 text-[#00BFFF] mb-4" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm text-center">
            <CardContent className="p-0">
              <h2 className="text-3xl sm:text-4xl font-bold">Ready to Build Your Unfair Advantage?</h2>
              <p className="mt-4 text-lg text-gray-300">
                Let's discuss your vision and craft an AI solution that will redefine your industry.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#00BFFF] to-[#00D1FF] hover:from-[#00AADD] hover:to-[#00B8E6] text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                  <Link href="/custombuildnow/signup">Schedule Your Free Consultation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white/50 hover:bg-white/10 hover:border-white text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg transition-all"
                >
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <DemoPopup isOpen={isDemoPopupOpen} onClose={() => setIsDemoPopupOpen(false)} />
    </div>
  )
}
