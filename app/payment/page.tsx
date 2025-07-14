"use client"
import { useState } from "react"

export default function PaymentPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [formError, setFormError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      setFormError("Passwords do not match")
      return
    }

    setFormError("") // Clear any previous errors
    setSuccessMessage("") // Clear any previous success messages

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccessMessage(data.message)
      } else {
        setFormError(data.error || "Signup failed")
      }
    } catch (error) {
      console.error("Signup error:", error)
      setFormError("An unexpected error occurred")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white py-12 sm:py-16 md:py-20 px-4">
      <div className="bg-gray-800 bg-opacity-30 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-12">
          {/* Left Column */}
          <div className="lg:col-span-3">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-white font-semibold mb-6">
                🔥 90% OFF - LIMITED TIME
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">The SUCCESSNOW Platform Project</h1>
              <p className="text-xl text-blue-300 mb-6">Your All-In-One Digital Foundation</p>
              <p className="text-gray-300 max-w-3xl mx-auto mb-8">
                Get your custom website, smart funnel, and platform strategy built as a single, cohesive project. This
                is the complete package to dominate your industry, powered by AI and custom-coded by experts.
              </p>
            </div>

            <div className="text-center mb-12">
              <div className="text-2xl text-gray-400 line-through mb-2">$35,000</div>
              <div className="text-6xl font-bold text-blue-400 mb-4">$3,488</div>
              <div className="text-2xl font-bold text-yellow-400">SAVE OVER $30,000 TODAY!</div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-900/30 rounded-lg p-6 border border-blue-500/30">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">📈</div>
                  <h4 className="font-semibold text-white">BONUS: 50% OFF Platform Fees</h4>
                </div>
                <p className="text-gray-300 text-sm mb-2">Regular $1,994/month for all AI tools</p>
                <p className="text-green-400 font-semibold">Only $997/month</p>
              </div>

              <div className="bg-blue-900/30 rounded-lg p-6 border border-blue-500/30">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">📞</div>
                  <h4 className="font-semibold text-white">BONUS: 50% OFF AI Voice Usage</h4>
                </div>
                <p className="text-gray-300 text-sm mb-2">Regular $0.28/minute for calls</p>
                <p className="text-green-400 font-semibold">Only $0.14/minute</p>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Payment Information</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">Platform Project (90% OFF)</span>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 line-through">$35,000</div>
                    <div className="text-xl font-bold text-blue-400">$3,488</div>
                  </div>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">Monthly Platform Access (50% OFF)</span>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 line-through">$1,994/mo</div>
                    <div className="text-lg font-semibold text-green-400">$997/mo</div>
                  </div>
                </div>

                <div className="flex justify-between items-center py-4 text-xl font-bold">
                  <span className="text-white">Total Today</span>
                  <span className="text-blue-400">$3,488</span>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-[#00274D]/80 backdrop-blur-sm text-center py-12 px-6 rounded-2xl shadow-2xl border border-[#00BFFF]/30">
              <h3 className="text-3xl md:text-4xl font-bold text-[#00BFFF] mb-8 animate-fadeTextUp">
                🎯 THE NO-BRAINER DEAL (LIMITED TIME OFFER)
              </h3>

              <div className="grid gap-8 max-w-4xl mx-auto mb-12">
                <div className="bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-700">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-6">✅ Regular Price:</h4>
                  <div className="text-gray-300 space-y-3 text-base md:text-lg">
                    <div className="line-through">$35,000 Setup</div>
                    <div className="line-through">$1,994/month</div>
                    <div className="line-through">$0.28/minute (billed by millisecond)</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#00BFFF]/20 to-[#007BFF]/20 backdrop-blur-sm p-6 md:p-8 rounded-xl border-2 border-[#00BFFF] shadow-lg">
                  <h4 className="text-xl md:text-2xl font-bold text-[#00BFFF] mb-6">🔥 Today's Offer:</h4>
                  <div className="text-white space-y-3 font-semibold text-base md:text-lg">
                    <div className="text-[#00BFFF] text-xl">$3,488 Setup (Over 90% OFF)</div>
                    <div className="text-[#00BFFF] text-xl">$997/month (50% OFF)</div>
                    <div className="text-[#00BFFF] text-xl">$0.14/minute (50% OFF)</div>
                    <div className="text-sm md:text-base text-gray-300 mt-4">**FOR A LIMITED TIME</div>
                  </div>
                </div>
              </div>
            </div>

            <section className="py-12 text-center">
              <div className="bg-gradient-to-br from-[#00274D]/80 to-[#001A33]/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border border-[#00BFFF]/30">
                <h3 className="text-3xl md:text-4xl font-bold text-[#00BFFF] mb-4">🚀 Ready to Get Started?</h3>
                <p className="text-gray-300 text-lg mb-8">
                  Join thousands of successful businesses already using SuccessNOW
                </p>

                <a
                  href="https://devnow.ai/signup"
                  className="inline-block bg-[#00BFFF] text-[#00274D] font-bold py-6 px-12 text-xl rounded-xl shadow-lg hover:bg-[#00BFFF]/90 transition-all duration-200 hover:scale-105"
                >
                  🎯 Start My SuccessNOW Platform Build - $3,488
                </a>

                <div className="mt-6">
                  <p className="text-sm text-gray-400">30-day money-back guarantee • Cancel anytime • Instant access</p>
                </div>
              </div>
            </section>

            <section className="py-12 text-center">
              <div className="bg-gradient-to-br from-[#00274D]/80 to-[#001A33]/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border border-[#00BFFF]/30">
                <h3 className="text-3xl md:text-4xl font-bold text-[#00BFFF] mb-4">Find Your Industry Solution</h3>
                <p className="text-gray-300 text-lg mb-8">
                  We have tailored solutions for various industries. Find yours to get started!
                </p>

                <a
                  href="https://devnow.ai/industries"
                  className="inline-block bg-[#00BFFF] text-[#00274D] font-bold py-6 px-12 text-xl rounded-xl shadow-lg hover:bg-[#00BFFF]/90 transition-all duration-200 hover:scale-105"
                >
                  Explore Industry Solutions
                </a>

                <div className="mt-6">
                  <p className="text-sm text-gray-400">30-day money-back guarantee • Cancel anytime • Instant access</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2">
            <div className="sticky top-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-white animate-fadeTextUp">
                🚀 The SuccessNOW Core Offer
              </h2>

              <div className="space-y-3 sm:space-y-4 max-h-[150vh] overflow-y-auto pr-4 custom-scrollbar">
                {[
                  {
                    number: "1",
                    title: "Done-For-You AI Smart Website with AI Voice Agent",
                    description:
                      "Your digital storefront, fully built and branded to convert traffic into booked leads, sales, and appointments—all on autopilot.",
                    features: [
                      "💬 Includes our AI Super Voice Agent to greet, guide, and book visitors in real-time like your best salesperson, 24/7.",
                    ],
                    value: "$15,998",
                  },
                  {
                    number: "2",
                    title: "AI Powered Self-Selling, Self-Booking Funnels",
                    description:
                      "Storytelling meets automation. Your funnel captures attention, builds trust, and drives instant action—whether it's a consult, booking, or direct sale.",
                    features: [],
                    value: "$7,500",
                  },
                  {
                    number: "3",
                    title: "EXPERT DESIGNED AND BUILT No-Brainer Offers + Prebuilt Lead Magnets",
                    description:
                      "Turn clicks into clients with irresistible offers designed for your niche. Includes lead magnets, upsells, and one-time offers built to convert fast.",
                    features: [],
                    value: "$3,000",
                  },
                  {
                    number: "4",
                    title: "Client-Facing White-Labeled App",
                    description: "Deliver your brand in the palm of your client's hand:",
                    features: [
                      "• Build a community",
                      "• Gamify with contests & rewards",
                      "• Send push notifications",
                      "• Sell courses, webinars, guides & more",
                    ],
                    value: "$4,997",
                  },
                  {
                    number: "5",
                    title: "AdsNOW™ Paid Traffic Engine",
                    description: "Instantly CREATE, launch, test, and scale ads using:",
                    features: [
                      "• Done-for-you templates",
                      "• Custom AI ad generator",
                      "• Auto-optimization for Google, Facebook, TikTok & more",
                    ],
                    value: "$5,000",
                  },
                  {
                    number: "6",
                    title: "SeoNOW™ Organic Traffic Engine",
                    description: "Outrank the competition with AI-driven SEO:",
                    features: ["• On-page optimization", "• Local dominance", "• Optional human expert enhancements"],
                    value: "$3,000",
                  },
                  {
                    number: "7",
                    title: "AI Agent + Army of Bots (Your 24/7 AI Employees)",
                    description: "Every lead is followed up, nurtured, and closed—without fail.",
                    features: [
                      "• Respond instantly",
                      "• Book appointments",
                      "• Retarget cold leads",
                      "• Convert while you sleep",
                    ],
                    value: "$15,998",
                  },
                  {
                    number: "8",
                    title: "Integrated Calendar, Booking & Follow-Up System",
                    description: "Your AI agents manage:",
                    features: ["• Bookings", "• Confirmations", "• Automated reminders", "• Smart retargeting"],
                    value: "$2,500",
                  },
                  {
                    number: "9",
                    title: "AI Social Media Generator + Scheduler",
                    description: "Your brand stays top of mind with:",
                    features: ["• Auto-written, on-brand posts", "• Automated scheduling across all major platforms"],
                    value: "$2,000",
                  },
                  {
                    number: "10",
                    title: "AI-Powered Instant Onboarding & Training",
                    description:
                      "No more waiting weeks. Get launched fast with our intelligent onboarding assistant and AI-guided training system.",
                    features: [],
                    value: "Priceless",
                  },
                  {
                    number: "11",
                    title: "AI Accountability Coach",
                    description:
                      "A built-in SuccessNOW AI that holds you accountable to only what requires your human touch.",
                    features: [],
                    value: "$2,000",
                  },
                  {
                    number: "12",
                    title: "Lifetime Access to SuccessNOW Resources",
                    description: "Get our full vault of tools:",
                    features: ["• Lead magnets", "• Templates", "• Swipe files", "• Courses & Funnels"],
                    value: "$2,997",
                  },
                  {
                    number: "13",
                    title: "NEW: AI Reviews & AI Referrals System",
                    description:
                      "Reviews and referrals are gold—but most teams don't ask. Your AI agents are trained to spot happy customers and trigger review requests and referral offers at exactly the right moment—automatically.",
                    features: [],
                    value: "$3,000",
                  },
                ].map((item, i) => (
                  <div
                    className="bg-black/40 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-[#00BFFF]/20 hover:border-[#00BFFF]/40 transition-all duration-300"
                    key={i}
                  >
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-start space-x-3">
                        <span className="bg-[#00BFFF] text-[#00274D] rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                          {item.number}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-[#00BFFF] leading-tight flex-1">
                          {item.title}
                        </h3>
                      </div>

                      <div className="text-center md:text-right">
                        <span className="inline-block bg-[#00274D]/80 backdrop-blur-sm text-[#00BFFF] font-bold text-sm md:text-base px-4 py-2 rounded-full border border-[#00BFFF]/30">
                          📈 Setup Value: {item.value}
                        </span>
                      </div>

                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">{item.description}</p>

                      {item.features.length > 0 && (
                        <div className="text-gray-300 text-sm space-y-1">
                          {item.features.map((feature, idx) => (
                            <div key={idx}>{feature}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Value */}
              <div className="mt-12 bg-gradient-to-r from-[#00274D]/80 to-[#001A33]/80 backdrop-blur-sm text-center py-12 px-6 rounded-2xl shadow-2xl border border-[#00BFFF]/30">
                <h3 className="text-3xl md:text-5xl font-bold text-[#00BFFF] mb-6 animate-pulse">
                  💥 TOTAL VALUE STACK
                </h3>
                <div className="text-white text-xl md:text-2xl font-semibold mb-6 space-y-3">
                  <div>
                    💰 Setup Total: <span className="text-[#00BFFF]">Over $60,000</span>
                  </div>
                  <div>
                    🛠️ Monthly Tools, AI Systems & Support: <span className="text-[#00BFFF]">$1,994/mo</span>
                  </div>
                  <div>
                    💼 Real-World Cost if Built Separately: <span className="text-[#00BFFF]">Easily $60K+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
