"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface AdsSuccessEcosystemProps {
  onDemoClick: () => void
}

export function AdsSuccessEcosystem({ onDemoClick }: AdsSuccessEcosystemProps) {
  const features = [
    {
      title: "Custom AI Website",
      description: "A stunning, high-converting website built just for your brand.",
      icon: "🌐",
    },
    {
      title: "AI Smart Funnels",
      description: "Guided customer journeys that turn prospects into paying clients.",
      icon: "💡",
    },
    {
      title: "24/7 AI Agent",
      description: "Never miss a lead. Your AI assistant works around the clock.",
      icon: "🤖",
    },
    {
      title: "Automated Follow-Up",
      description: "Relentless, personalized follow-up that closes more deals.",
      icon: "🔁",
    },
    {
      title: "Review Generation",
      description: "Automatically get 5-star reviews from your happy customers.",
      icon: "⭐",
    },
    {
      title: "All-in-One Inbox",
      description: "Manage all customer communications from one simple dashboard.",
      icon: "📥",
    },
  ]

  return (
    <section className="py-16 px-6 md:px-10 bg-[#060B17]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">The Complete AI Success Ecosystem</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          We don't just give you a tool. We give you an entire system custom-built to guarantee your success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-[#1a2332] to-[#0B1426] border border-[#00BFFF]/20 text-left p-6 transform hover:scale-105 hover:border-[#00BFFF]/50 transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button
          className="px-8 py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-base"
          onClick={onDemoClick}
        >
          See It In Action - Launch Demo
        </Button>
      </div>
    </section>
  )
}
