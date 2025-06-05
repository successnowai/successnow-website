"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CreditCard, Shield, Clock } from "lucide-react"
import Navbar from "@/components/navigation/navbar"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0f1a] to-[#00274D] text-white scroll-smooth">
      <Navbar currentPage="pricing" />

      {/* Scrolling Logo Strip */}
      <div className="overflow-hidden whitespace-nowrap py-4 bg-black/20 backdrop-blur-sm border-b border-[#00BFFF]/20">
        <div className="inline-block animate-[marquee_20s_linear_infinite] text-[#00BFFF] text-lg font-semibold">
          AutodealerNOW • MortgageNOW • RealtorNOW • MedspaNOW • LawyerNOW • GymsNOW • AutodealerNOW • MortgageNOW •
          RealtorNOW • MedspaNOW • LawyerNOW • GymsNOW
        </div>
      </div>

      {/* Hero Section */}
      <section className="text-center px-4 py-12 sm:py-16 md:py-20 max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight animate-fadeTextUp">
          <span className="block text-white">Your Business.</span>
          <span className="block text-[#00BFFF] animate-pulse animation-delay-300">Automated.</span>
          <span className="block text-white animation-delay-600">24/7. Right NOW.</span>
        </h1>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto animate-fadeTextUp animation-delay-900 px-2">
          Everything you need to launch, automate, and grow — bundled in one no-brainer package.
        </p>

        {/* Social Proof */}
        <div className="mt-6 sm:mt-8 animate-fadeTextUp animation-delay-1200">
          <div className="flex justify-center items-center space-x-2 mb-2">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white"></div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 border-2 border-white"></div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-pink-400 to-red-500 border-2 border-white"></div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 border-2 border-white"></div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 border-2 border-white"></div>
            </div>
            <div className="flex text-yellow-400 ml-3">
              <span className="text-sm sm:text-base">⭐️⭐️⭐️⭐️⭐️</span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-gray-400">
            <strong className="text-white">65+</strong> happy clients
          </p>
        </div>
      </section>

      {/* Early Pricing Section */}
      <section className="px-4 py-8 max-w-6xl mx-auto">
        <div className="bg-[#00274D]/80 backdrop-blur-sm text-center py-12 px-6 rounded-2xl shadow-2xl border border-[#00BFFF]/30">
          <h3 className="text-3xl md:text-4xl font-bold text-[#00BFFF] mb-8 animate-fadeTextUp">
            🎯 THE NO-BRAINER DEAL (LIMITED TIME OFFER)
          </h3>

          <div className="grid gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-700">
              <h4 className="text-xl md:text-2xl font-bold text-white mb-6">✅ Regular Price:</h4>
              <div className="text-gray-300 space-y-3 text-base md:text-lg">
                <div className="line-through">$9,977 Setup</div>
                <div className="line-through">$1,994/month</div>
                <div className="line-through">$0.27/minute (billed by millisecond)</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#00BFFF]/20 to-[#007BFF]/20 backdrop-blur-sm p-6 md:p-8 rounded-xl border-2 border-[#00BFFF] shadow-lg">
              <h4 className="text-xl md:text-2xl font-bold text-[#00BFFF] mb-6">🔥 Today's Offer:</h4>
              <div className="text-white space-y-3 font-semibold text-base md:text-lg">
                <div className="text-[#00BFFF] text-xl">$997 Setup (Over 90% OFF)</div>
                <div className="text-[#00BFFF] text-xl">$997/month (50% OFF)</div>
                <div className="text-[#00BFFF] text-xl">$0.14/minute (50% OFF)</div>
                <div className="text-sm md:text-base text-gray-300 mt-4">**FOR A LIMITED TIME</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Sign Up Form Section */}
      <section className="px-4 py-12 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-[#00274D]/80 to-[#001A33]/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border border-[#00BFFF]/30">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-[#00BFFF] mb-4">🚀 Sign Up Now - Limited Time Offer</h3>
            <p className="text-gray-300 text-lg">Secure your spot and start automating your business today</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Sign Up Form */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white mb-4">Complete Your Registration</h4>

              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
                    required
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
                    required
                  />
                </div>

                <Input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
                  required
                />

                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
                  required
                />

                <Input
                  type="text"
                  placeholder="Company Name"
                  className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
                  required
                />

                <select className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white border border-white/20 focus:border-[#00BFFF] focus:outline-none">
                  <option value="">Select Your Industry</option>
                  <option value="legal">Legal / Law Firms</option>
                  <option value="realestate">Real Estate</option>
                  <option value="automotive">Auto Dealers</option>
                  <option value="mortgage">Mortgage Brokers</option>
                  <option value="fitness">Gyms & Studios</option>
                  <option value="medspa">Medspas</option>
                  <option value="other">Other</option>
                </select>
              </form>
            </div>

            {/* Payment Information */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white mb-4">Payment Information</h4>

              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-[#00BFFF]/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-semibold">Setup Fee (90% OFF)</span>
                  <div className="text-right">
                    <div className="text-gray-400 line-through text-sm">$9,977</div>
                    <div className="text-[#00BFFF] font-bold text-xl">$997</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-semibold">Monthly Subscription</span>
                  <div className="text-right">
                    <div className="text-gray-400 line-through text-sm">$1,994/mo</div>
                    <div className="text-[#00BFFF] font-bold text-xl">$997/mo</div>
                  </div>
                </div>

                <div className="border-t border-gray-600 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold text-lg">Total Today</span>
                    <span className="text-[#00BFFF] font-bold text-2xl">$997</span>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="Card Number"
                  className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
                  required
                />

                <div className="grid gap-4 grid-cols-2">
                  <Input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
                    required
                  />
                  <Input
                    type="text"
                    placeholder="CVC"
                    className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
                    required
                  />
                </div>

                <Input
                  type="text"
                  placeholder="Billing ZIP Code"
                  className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
                  required
                />
              </form>

              {/* Security Features */}
              <div className="flex items-center space-x-4 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-4 w-4 text-blue-400" />
                  <span>256-bit Encryption</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-yellow-400" />
                  <span>Instant Setup</span>
                </div>
              </div>
            </div>
          </div>

          {/* Terms and Complete Button */}
          <div className="mt-8 space-y-4">
            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 h-4 w-4 text-[#00BFFF] rounded" required />
              <label className="text-sm text-gray-300">
                I agree to the{" "}
                <a href="#" className="text-[#00BFFF] hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#00BFFF] hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 h-4 w-4 text-[#00BFFF] rounded" />
              <label className="text-sm text-gray-300">
                I want to receive updates about new features and special offers
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#00BFFF] text-[#00274D] font-bold py-6 px-8 text-xl rounded-xl shadow-lg hover:bg-[#00BFFF]/90 transition-all duration-200 hover:scale-105"
            >
              🚀 Complete My SuccessNOW Setup - $997
            </Button>

            <div className="text-center">
              <p className="text-sm text-gray-400">30-day money-back guarantee • Cancel anytime • Instant access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Stack */}
      <section className="px-4 py-6 sm:py-8 max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-white animate-fadeTextUp">
          🚀 The SuccessNOW Core Offer
        </h2>

        <div className="space-y-3 sm:space-y-4">
          {[
            {
              number: "1",
              title: "Done-For-You AI Smart Website with AI Voice Agent",
              description:
                "Your digital storefront, fully built and branded to convert traffic into booked leads, sales, and appointments—all on autopilot.",
              features: [
                "💬 Includes our AI Super Voice Agent to greet, guide, and book visitors in real-time like your best salesperson, 24/7.",
              ],
              value: "$15,000",
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
              value: "$7,500",
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
                  <h3 className="text-lg md:text-xl font-bold text-[#00BFFF] leading-tight flex-1">{item.title}</h3>
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
          <h3 className="text-3xl md:text-5xl font-bold text-[#00BFFF] mb-6 animate-pulse">💥 TOTAL VALUE STACK</h3>
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

        {/* Pricing Section */}
        <div className="mt-12 bg-[#00274D]/80 backdrop-blur-sm text-center py-12 px-6 rounded-2xl shadow-2xl border border-[#00BFFF]/30">
          <h3 className="text-3xl md:text-4xl font-bold text-[#00BFFF] mb-8 animate-fadeTextUp">
            🎯 THE NO-BRAINER DEAL (LIMITED TIME OFFER)
          </h3>

          <div className="grid gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-700">
              <h4 className="text-xl md:text-2xl font-bold text-white mb-6">✅ Regular Price:</h4>
              <div className="text-gray-300 space-y-3 text-base md:text-lg">
                <div className="line-through">$9,977 Setup</div>
                <div className="line-through">$1,994/month</div>
                <div className="line-through">$0.27/minute (billed by millisecond)</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#00BFFF]/20 to-[#007BFF]/20 backdrop-blur-sm p-6 md:p-8 rounded-xl border-2 border-[#00BFFF] shadow-lg">
              <h4 className="text-xl md:text-2xl font-bold text-[#00BFFF] mb-6">🔥 Today's Offer:</h4>
              <div className="text-white space-y-3 font-semibold text-base md:text-lg">
                <div className="text-[#00BFFF] text-xl">$997 Setup (Over 90% OFF)</div>
                <div className="text-[#00BFFF] text-xl">$997/month (50% OFF)</div>
                <div className="text-[#00BFFF] text-xl">$0.14/minute (50% OFF)</div>
                <div className="text-sm md:text-base text-gray-300 mt-4">**FOR A LIMITED TIME</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Form Section */}
      <section className="px-4 py-12 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-[#00274D]/80 to-[#001A33]/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border border-[#00BFFF]/30">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-[#00BFFF] mb-4">🚀 Sign Up Now - Limited Time Offer</h3>
            <p className="text-gray-300 text-lg">Secure your spot and start automating your business today</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Sign Up Form */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white mb-4">Complete Your Registration</h4>

              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
                    required
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
                    required
                  />
                </div>

                <Input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
                  required
                />

                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
                  required
                />

                <Input
                  type="text"
                  placeholder="Company Name"
                  className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
                  required
                />

                <select className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white border border-white/20 focus:border-[#00BFFF] focus:outline-none">
                  <option value="">Select Your Industry</option>
                  <option value="legal">Legal / Law Firms</option>
                  <option value="realestate">Real Estate</option>
                  <option value="automotive">Auto Dealers</option>
                  <option value="mortgage">Mortgage Brokers</option>
                  <option value="fitness">Gyms & Studios</option>
                  <option value="medspa">Medspas</option>
                  <option value="other">Other</option>
                </select>
              </form>
            </div>

            {/* Payment Information */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white mb-4">Payment Information</h4>

              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-[#00BFFF]/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-semibold">Setup Fee (90% OFF)</span>
                  <div className="text-right">
                    <div className="text-gray-400 line-through text-sm">$9,977</div>
                    <div className="text-[#00BFFF] font-bold text-xl">$997</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-semibold">Monthly Subscription</span>
                  <div className="text-right">
                    <div className="text-gray-400 line-through text-sm">$1,994/mo</div>
                    <div className="text-[#00BFFF] font-bold text-xl">$997/mo</div>
                  </div>
                </div>

                <div className="border-t border-gray-600 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold text-lg">Total Today</span>
                    <span className="text-[#00BFFF] font-bold text-2xl">$997</span>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="Card Number"
                  className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
                  required
                />

                <div className="grid gap-4 grid-cols-2">
                  <Input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
                    required
                  />
                  <Input
                    type="text"
                    placeholder="CVC"
                    className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
                    required
                  />
                </div>

                <Input
                  type="text"
                  placeholder="Billing ZIP Code"
                  className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
                  required
                />
              </form>

              {/* Security Features */}
              <div className="flex items-center space-x-4 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-4 w-4 text-blue-400" />
                  <span>256-bit Encryption</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-yellow-400" />
                  <span>Instant Setup</span>
                </div>
              </div>
            </div>
          </div>

          {/* Terms and Complete Button */}
          <div className="mt-8 space-y-4">
            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 h-4 w-4 text-[#00BFFF] rounded" required />
              <label className="text-sm text-gray-300">
                I agree to the{" "}
                <a href="#" className="text-[#00BFFF] hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#00BFFF] hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 h-4 w-4 text-[#00BFFF] rounded" />
              <label className="text-sm text-gray-300">
                I want to receive updates about new features and special offers
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#00BFFF] text-[#00274D] font-bold py-6 px-8 text-xl rounded-xl shadow-lg hover:bg-[#00BFFF]/90 transition-all duration-200 hover:scale-105"
            >
              🚀 Complete My SuccessNOW Setup - $997
            </Button>

            <div className="text-center">
              <p className="text-sm text-gray-400">30-day money-back guarantee • Cancel anytime • Instant access</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black/40 backdrop-blur-sm px-4 py-12 text-center mt-16 border-t border-[#00BFFF]/20">
        <p className="mb-6 text-gray-400 text-base">© 2025 SuccessNOW.ai – All rights reserved</p>
        <div className="flex flex-wrap justify-center gap-6 text-base">
          <a href="#" className="text-[#00BFFF] hover:text-[#00BFFF]/80 transition-colors">
            Terms
          </a>
          <span className="text-gray-400">|</span>
          <a href="#" className="text-[#00BFFF] hover:text-[#00BFFF]/80 transition-colors">
            Privacy
          </a>
          <span className="text-gray-400">|</span>
          <a href="#" className="text-[#00BFFF] hover:text-[#00BFFF]/80 transition-colors">
            Contact
          </a>
        </div>
      </footer>
    </div>
  )
}
