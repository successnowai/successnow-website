"use client"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { CheckIcon, ClockIcon, ZapIcon, GiftIcon, ShieldCheckIcon } from 'lucide-react'

const features = [
  {
    title: "Done-For-You AI Smart Website with AI Voice Agent",
    value: "$15,998",
  },
  {
    title: "AI Powered Self-Selling, Self-Booking Funnels",
    value: "$7,500",
  },
  {
    title: "EXPERT DESIGNED No-Brainer Offers + Prebuilt Lead Magnets",
    value: "$3,000",
  },
  {
    title: "Client-Facing White-Labeled App",
    value: "$4,997",
  },
  {
    title: "AdsNOW™ Paid Traffic Engine",
    value: "$5,000",
  },
  {
    title: "SeoNOW™ Organic Traffic Engine",
    value: "$3,000",
  },
  {
    title: "AI Agent + Army of Bots (Your 24/7 AI Employees)",
    value: "$15,998",
  },
  {
    title: "Integrated Calendar, Booking & Follow-Up System",
    value: "$2,500",
  },
  {
    title: "AI Social Media Generator + Scheduler",
    value: "$2,000",
  },
  {
    title: "AI-Powered Instant Onboarding & Training",
    value: "$2,000",
  },
  {
    title: "AI Accountability Coach",
    value: "$2,000",
  },
  {
    title: "Lifetime Access to SuccessNOW Resources",
    value: "$2,997",
  },
  {
    title: "NEW: AI Reviews & AI Referrals System",
    value: "$3,000",
  },
]

export default function PaymentPage() {
  const handleStartPlatform = () => {
    window.location.href = "https://signup.successnow.ai"
  }

  return (
    <Suspense
      fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>}
    >
      <div className="min-h-screen w-full bg-gray-900 text-white" style={{background: 'radial-gradient(circle at top, #1a202c, #000000)'}}>
        <div className="max-w-screen-2xl mx-auto p-4 sm:p-6 lg:p-12">
          <div className="text-center mb-8 lg:mb-12">
            <div className="inline-block bg-red-500/10 border border-red-500 text-red-400 rounded-full px-4 py-1 text-sm font-semibold mb-4">
              LIMITED TIME: 90% OFF
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tighter">The SuccessNOW AI Systems</h1>
            <p className="mt-4 text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              Your All-In-One Digital Foundation. Get your custom website, smart funnel, and AI systems strategy built as a single, cohesive project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Right Column (Feature List) - Order changed for mobile */}
            <div className="lg:col-span-5 lg:order-2">
              <div className="sticky top-6 bg-gray-800/50 border border-cyan-500/20 rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-center mb-4">What You Get</h2>
                <p className="text-center text-gray-400 mb-6">Complete business transformation package worth <span className="font-bold text-white">$69,990</span></p>
                <div className="space-y-3 max-h-[500px] lg:max-h-[calc(100vh-200px)] overflow-y-auto pr-3 -mr-3 custom-scrollbar">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-900/70 p-3 rounded-lg">
                      <div className="flex items-center">
                        <CheckIcon className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature.title}</span>
                      </div>
                      <span className="text-white font-semibold text-sm ml-4">{feature.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-700 text-center">
                  <p className="text-gray-400 text-lg">Total Value:</p>
                  <p className="text-4xl font-bold text-cyan-400">$69,990</p>
                </div>
              </div>
            </div>

            {/* Left Column (Pricing & CTA) */}
            <div className="lg:col-span-7 lg:order-1">
              <div className="bg-gray-800/50 border border-blue-500/20 rounded-2xl p-6">
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-900/70 p-4 rounded-lg text-center">
                    <p className="text-sm text-gray-400">AI Systems Build (90% OFF)</p>
                    <p className="text-gray-500 line-through text-lg">$35,000</p>
                    <p className="text-3xl font-bold text-white">$3,488</p>
                  </div>
                  <div className="bg-gray-900/70 p-4 rounded-lg text-center">
                    <p className="text-sm text-gray-400">Monthly AI Systems (50% OFF)</p>
                    <p className="text-gray-500 line-through text-lg">$1,994/mo</p>
                    <p className="text-3xl font-bold text-white">$997/mo</p>
                  </div>
                  <div className="bg-gray-900/70 p-4 rounded-lg text-center">
                    <p className="text-sm text-gray-400">AI Voice Usage (50% OFF)</p>
                    <p className="text-gray-500 line-through text-lg">$0.28/min</p>
                    <p className="text-3xl font-bold text-white">$0.14/min</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-4 rounded-lg text-center mb-6">
                  <h3 className="font-bold text-cyan-300">THE NO-BRAINER DEAL</h3>
                  <p className="text-white">LIMITED TIME: Get 2 Months AI Systems Access FREE!</p>
                  <p className="text-sm text-gray-400">(Save $1,994 - You don't pay for 2 months)</p>
                </div>

                <div className="text-center mb-6">
                  <p className="text-gray-400">Total Today</p>
                  <p className="text-5xl font-bold text-cyan-400">$3,488 <span className="text-2xl font-normal text-gray-400">(+ 2 FREE months)</span></p>
                </div>

                <Button 
                  onClick={handleStartPlatform}
                  size="lg" 
                  className="w-full h-16 text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/20 transform hover:scale-105 transition-transform duration-300"
                >
                  Start My SuccessNOW AI Systems Build
                </Button>

                <div className="text-center mt-4">
                  <p className="font-semibold text-cyan-400 flex items-center justify-center gap-2"><ShieldCheckIcon className="w-5 h-5" /> 30-Day Money-Back Guarantee</p>
                  <p className="text-xs text-gray-500 mt-1">If you don't see a 300% increase in qualified leads within 30 days, we'll refund every penny.</p>
                </div>

                <div className="mt-8 space-y-3 text-gray-400 text-sm">
                  <div className="flex items-center"><ClockIcon className="w-4 h-4 mr-2 text-red-400"/>Only 47 spots available this month</div>
                  <div className="flex items-center"><CheckIcon className="w-4 h-4 mr-2 text-green-400"/>AI Systems access returns to $1,994/month after promotion</div>
                  <div className="flex items-center"><ZapIcon className="w-4 h-4 mr-2 text-yellow-400"/>Implementation starts within 24 hours</div>
                </div>
                
                <div className="mt-8 bg-gray-900/70 rounded-lg p-6">
                    <h3 className="font-bold text-lg text-center mb-4">Your Complete Offer</h3>
                    <ul className="text-sm space-y-2">
                        <li className="flex justify-between items-center"><span>AI Systems Build (90% OFF)</span> <span className="font-semibold text-white">$3,488</span></li>
                        <li className="flex justify-between items-center"><span>Monthly AI Systems (50% OFF)</span> <span className="font-semibold text-white">$997/mo</span></li>
                        <li className="flex justify-between items-center"><span>Voice Usage (50% OFF)</span> <span className="font-semibold text-white">$0.14/min</span></li>
                        <li className="flex justify-between items-center text-cyan-400"><span>+ 2 FREE months AI systems access</span> <span className="font-semibold">$1,994 value</span></li>
                    </ul>
                </div>

                <div className="mt-6 bg-gray-900/70 rounded-lg p-6">
                    <h3 className="font-bold text-lg text-center mb-4 flex items-center justify-center gap-2"><GiftIcon className="w-5 h-5 text-yellow-400" /> Exclusive Bonuses (Limited Time)</h3>
                    <ul className="text-sm space-y-2">
                        <li className="flex justify-between items-center"><span>Premium AI Training</span> <span className="font-semibold text-white">$500 value</span></li>
                        <li className="flex justify-between items-center"><span>Priority Support for 90 Days</span> <span className="font-semibold text-white">$300 value</span></li>
                        <li className="flex justify-between items-center"><span>Custom Industry Systems</span> <span className="font-semibold text-white">$2200 value</span></li>
                    </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}
