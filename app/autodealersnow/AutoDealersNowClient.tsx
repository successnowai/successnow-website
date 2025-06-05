"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/home/footer"
import { useState, useEffect } from "react"

export default function AutoDealersNowClient() {
  const [currentText, setCurrentText] = useState(0)

  const rotatingTexts = [
    "Instantly Engages",
    "Converts Leads",
    "Books Appointments",
    "Gets 5 Star Reviews",
    "Follows Up Always",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 md:px-10 overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="block text-white animate-fadeTextUp">AutoDealerNOW™ AI</span>
            <span className="block text-[#00BFFF] animate-fadeTextUp animation-delay-300 min-h-[1.2em]">
              {rotatingTexts[currentText]}
            </span>
            <span className="block text-white animate-fadeTextUp animation-delay-600">To Skyrocket Your Results</span>
          </h1>

          <div className="bg-red-600/20 border border-red-500 rounded-lg p-4 max-w-2xl mx-auto animate-fadeTextUp animation-delay-900">
            <p className="text-red-300 font-bold text-lg">⚠️ 77% of Leads are lost due to poor handling!!!</p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeTextUp animation-delay-1200">
            Stop losing sales to no-shows and forgotten follow-ups. Our{" "}
            <strong className="text-white">AI books test drives, confirms appointments, and nurtures every lead</strong>{" "}
            until they buy.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-fadeTextUp animation-delay-1500">
            <Button
              className="px-8 py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-base"
              onClick={() => (window.location.href = "/signup")}
            >
              GET AUTODEALERSNOW →
            </Button>
            <Button
              variant="outline"
              className="px-8 py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-md hover:bg-[#00BFFF] hover:text-white transition-all duration-200 hover:scale-105 text-base bg-transparent"
              onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
            >
              Launch Instant Demo NOW
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-8 animate-fadeTextUp animation-delay-1800">
            <div className="flex justify-center items-center space-x-2 mb-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-red-500 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 border-2 border-white"></div>
              </div>
              <div className="flex text-yellow-400 ml-3">
                <span>⭐️⭐️⭐️⭐️⭐️</span>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              <strong className="text-white">85+</strong> successful dealerships
            </p>
          </div>
        </div>
      </section>

      {/* Secondary Hero Section */}
      <section className="text-center py-16 px-6 md:px-10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            <span className="block text-white animate-fadeTextUp">You're not short on leads.</span>
            <span className="block text-[#00BFFF] animate-fadeTextUp animation-delay-300 animate-pulse">
              Just follow-through.
            </span>
            <span className="block text-white animate-fadeTextUp animation-delay-600">AutoDealersNOW fixes that.</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeTextUp animation-delay-900">
            Run a tighter, faster, more accountable sales floor without chasing your team or burning yourself out. Our{" "}
            <strong className="text-white">AI handles 80% of your sales process</strong> - follow-up, reactivation,
            appointment setting, and more.
          </p>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="relative bg-black/20 backdrop-blur-sm py-16 px-6">
        <div className="max-w-md mx-auto bg-[#00274D]/80 backdrop-blur-sm text-white p-8 rounded-xl shadow-2xl border border-[#00BFFF]/20">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Never Miss a Lead Again – <br /> <span className="text-[#00BFFF]">Book Test Drives Automatically</span>
          </h2>
          <p className="text-center text-sm text-gray-300 mb-6">See AI Auto Sales Automation</p>

          <form className="space-y-4">
            <Input
              type="text"
              placeholder="Your Name"
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
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:border-[#00BFFF] focus:outline-none"
              required
            />
            <Button
              type="submit"
              className="w-full bg-[#00BFFF] text-[#00274D] font-bold py-4 px-4 rounded-md hover:bg-[#00BFFF]/90 transition-all duration-200 hover:scale-105"
            >
              🚗 Get My Auto Dealer AI Demo
            </Button>
          </form>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-5 py-15">
        {/* Pain Points */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">Auto Sales Challenges We Solve</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "77% of leads lost due to poor handling and slow response times",
              "Sales team too busy to nurture cold leads properly",
              "Customers shopping elsewhere while you're chasing other deals",
              "No-shows and missed appointments killing your conversion rates",
              "Manual processes eating up time that should be spent selling",
              "Losing deals to competitors with faster response times",
            ].map((pain, index) => (
              <Card
                key={index}
                className="bg-black/40 backdrop-blur-sm border-[#00BFFF]/20 hover:border-[#00BFFF]/40 transition-all duration-300"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start">
                    <span className="text-red-400 mr-3 flex-shrink-0 text-lg">❌</span>
                    <span className="text-gray-300 text-base">{pain}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">AI Solutions for Auto Dealerships</h3>
          <div className="grid gap-4 sm:grid-cols-1">
            {[
              "🚗 Every lead handled faster than any human team could respond",
              "📅 Books more test drives and ensures customers actually show up",
              "🎯 Reactivates cold leads automatically until they're ready to buy",
              "💬 Handles objections & FAQs instantly - no waiting for sales reps",
              "📈 Integrates seamlessly with your existing CRM and workflow",
              "🏆 Creates engaging, personalized conversations that build trust",
            ].map((solution, index) => (
              <Card
                key={index}
                className="bg-black/40 backdrop-blur-sm border-[#00BFFF]/20 hover:border-[#00BFFF]/40 transition-all duration-300"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start">
                    <span className="text-green-400 mr-3 flex-shrink-0 text-lg">✅</span>
                    <span className="text-gray-300 text-base">{solution}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mb-12 text-center">
          <div className="bg-[#00274D]/80 backdrop-blur-sm p-8 rounded-xl border border-[#00BFFF]/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-[#00BFFF]">
              "This is nuts, it's literally selling vehicles for us!"
            </h3>
            <blockquote className="text-xl text-gray-300 mb-4 italic">
              "We're amazed. AutoDealersNOW AI is doing the whole thing - following up with leads, booking appointments,
              handling objections. Our sales team can focus on what they do best: closing deals."
            </blockquote>
            <cite className="text-white font-semibold">
              - Mike Rodriguez, Sales Manager
              <br />
              <span className="text-gray-400 text-sm">Premium Auto Group</span>
            </cite>
          </div>
        </div>

        {/* The Moment It All Clicks */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">The Moment It All Clicks</h3>
          <div className="bg-[#00274D]/80 backdrop-blur-sm p-8 rounded-xl border border-[#00BFFF]/30">
            <p className="text-lg text-gray-300 text-center mb-8">
              That first week everything just... works. Leads stop falling through. Test drives get booked. Your team
              stays focused without the chase. And for once, you're not the only one holding it all together.
              <strong className="text-white"> The AI system is.</strong>
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="bg-[#00BFFF]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Every Lead Handled</h4>
                <p className="text-gray-300 text-sm">Responds to every lead faster than any team could.</p>
              </div>

              <div className="text-center">
                <div className="bg-[#00BFFF]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📅</span>
                </div>
                <h4 className="text-white font-semibold mb-2">More Showing, Less Chasing</h4>
                <p className="text-gray-300 text-sm">Books more buyers and makes sure they show.</p>
              </div>

              <div className="text-center">
                <div className="bg-[#00BFFF]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Actually Leave Work Behind</h4>
                <p className="text-gray-300 text-sm">Go home knowing every lead is being nurtured.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Problem Section - You're the Backstop */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-red-900/20 to-red-600/10 backdrop-blur-sm p-8 rounded-2xl border border-red-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="bg-red-500/20 rounded-lg p-4 border border-red-500/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-red-300 text-sm font-medium">Average Response Time</span>
                    <span className="text-red-400 text-2xl font-bold">12 Hours</span>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-red-600/30 rounded p-2 text-red-200 text-sm">❌ Cancelled Appointment</div>
                    <div className="bg-red-600/30 rounded p-2 text-red-200 text-sm">❌ Cancelled Appointment</div>
                    <div className="bg-red-600/30 rounded p-2 text-red-200 text-sm">⏰ Delayed Appointment</div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-bold text-lg">You're the Backstop</h4>
                      <p className="text-gray-300">
                        If something gets missed, it lands on your desk. Late replies, no-shows, bad handoffs—you're the
                        one cleaning it up after hours.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-bold text-lg">No One Owns the Follow-Up</h4>
                      <p className="text-gray-300">
                        CRMs get updated. Maybe. But leads slip, tasks stall, and reps cherry-pick what they want to
                        work.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-bold text-lg">You Never Fully Clock Out</h4>
                      <p className="text-gray-300">
                        Even when you're off the clock, your brain isn't. You're thinking about what got missed, who
                        dropped what, and what's coming Monday morning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Section - Imagine */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-green-900/20 to-green-600/10 backdrop-blur-sm p-8 rounded-2xl border border-green-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-bold text-lg">Imagine Every Lead Handled Before You Even Ask</h4>
                      <p className="text-gray-300">
                        Your team doesn't have to scramble. AutoDealersNOW AI responds in seconds, follows up for days,
                        and handles objections—so you stay out of the weeds. Nothing slips. Ever.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-bold text-lg">Imagine a Team That's Always On Point</h4>
                      <p className="text-gray-300">
                        No more "I forgot." No more "I didn't see it." Everyone knows what's next, tasks get done, and
                        you finally lead instead of micromanage.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-bold text-lg">
                        Imagine Going Home and Actually Leaving Work Behind
                      </h4>
                      <p className="text-gray-300">
                        You stop wondering if leads got called. Stop stressing about who followed up. It's all handled.
                        In the background. Around the clock.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-green-500/20 rounded-lg p-4 border border-green-500/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-300 text-sm font-medium">Average Response Time</span>
                    <span className="text-green-400 text-2xl font-bold">2 Minutes</span>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-green-600/30 rounded p-2 text-green-200 text-sm">✅ New Appointment</div>
                    <div className="bg-green-600/30 rounded p-2 text-green-200 text-sm">✅ New Appointment</div>
                    <div className="bg-green-600/30 rounded p-2 text-green-200 text-sm">✅ New Appointment</div>
                  </div>
                </div>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105"
                  onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Launch Instant AI Demo Now!
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Three Feature Cards Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">
            Built to Fix the Most Common Causes of Lost Deals
          </h3>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Without adding more tools, more staff, or more headaches
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 - 24/7 Follow-up */}
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-400/10 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 relative overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
              <div className="relative z-10 text-center space-y-6">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">⏰</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-3">Every lead followed up automatically, 24/7.</h4>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    Your team sleeps. AutoDealersNOW AI doesn't. Spark instant conversations via SMS, email, DMs, and
                    chats—without lifting a finger.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Task Management */}
            <div className="bg-gradient-to-br from-green-600/20 to-green-400/10 backdrop-blur-sm p-8 rounded-2xl border border-green-500/20 relative overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"></div>
              <div className="relative z-10 text-center space-y-6">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">✅</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-3">No more "I forgot" or "I didn't see it."</h4>
                  <p className="text-green-200 text-sm leading-relaxed">
                    Every call, task, and follow-up is tracked. Reps stay on task. Managers know who's slipping, without
                    hovering.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Lead Revival */}
            <div className="bg-gradient-to-br from-purple-600/20 to-purple-400/10 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 relative overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
              <div className="relative z-10 text-center space-y-6">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-3">Dead leads revived. No chase required.</h4>
                  <p className="text-purple-200 text-sm leading-relaxed">
                    Most leads don't vanish. They just get ignored. We bring them back to life and turn them into
                    appointments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              className="px-12 py-4 bg-gradient-to-r from-[#00BFFF] to-blue-600 text-white font-bold rounded-lg shadow-2xl hover:shadow-[#00BFFF]/25 transition-all duration-200 hover:scale-105 text-lg"
              onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
            >
              🚀 Launch Instant AI Demo Now!
            </Button>
          </div>
        </div>

        {/* AdsNOW AI Paid Ads Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-orange-900/20 to-yellow-600/10 backdrop-blur-sm p-8 rounded-2xl border border-orange-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Tired of Buying <span className="text-orange-400">Recycled Leads</span>?
                  </h3>
                  <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-4 mb-6">
                    <p className="text-red-300 font-semibold">
                      💸 Paying $100-250+ per lead for recycled prospects that 10 other dealers already called?
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-white font-bold text-lg">Launch Your Own Branded Paid Ads</h4>
                        <p className="text-gray-300">
                          Our AdsNOW AI super agent media buyer creates and manages your campaigns. Get exposure from
                          your ad spend and build YOUR brand!
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-white font-bold text-lg">Better Leads at a Fraction of the Cost</h4>
                        <p className="text-gray-300">
                          Get fresh, exclusive leads for $17-55 each instead of $100-250+ for recycled prospects.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-white font-bold text-lg">AI Agents Call & Verify Every Lead</h4>
                        <p className="text-gray-300">
                          But wait, there's more! Our AI agents call the leads, verify them, collect their info, and
                          live transfer them to your credit manager—or send them as qualified leads if no one's
                          available!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-orange-600/20 to-yellow-500/10 rounded-xl p-6 border border-orange-500/30">
                  <h4 className="text-orange-300 font-bold text-lg mb-4">AdsNOW AI Superagent Media Buyer</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Lead Cost (Recycled)</span>
                      <span className="text-red-400 font-bold line-through">$100-250+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Lead Cost (Your Ads)</span>
                      <span className="text-green-400 font-bold">$17-55</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Brand Exposure</span>
                      <span className="text-orange-400 font-bold">✅ YOUR Brand</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Lead Quality</span>
                      <span className="text-green-400 font-bold">✅ Fresh & Exclusive</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">AI Verification</span>
                      <span className="text-blue-400 font-bold">✅ Called & Qualified</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-600/30 to-yellow-500/20 rounded-lg p-4 border border-orange-400/40">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">AI</span>
                    </div>
                    <span className="text-orange-300 font-semibold">Live Transfer Ready</span>
                  </div>
                  <p className="text-orange-200 text-sm">
                    "Hi, this is Sarah from AutoDealersNOW AI. I have John on the line, he's pre-qualified and ready to
                    discuss financing options..."
                  </p>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
                  onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
                >
                  🎯 Launch AdsNOW AI Demo Now!
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Demo */}
        <div className="mb-12" id="demo">
          <h3 className="text-3xl font-bold text-center mb-8 text-[#00BFFF]">See AutoDealersNOW in Action</h3>
          <div className="mx-auto max-w-2xl">
            <div className="relative aspect-video bg-black/40 backdrop-blur-sm rounded-xl border-2 border-[#00BFFF]/30 overflow-hidden group cursor-pointer hover:border-[#00BFFF] transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00274D]/50 to-black/50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#00BFFF] rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white font-semibold text-lg">AutoDealersNOW Demo</h4>
                <p className="text-gray-200 text-sm">Watch AI book test drives and follow up automatically</p>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-[#00BFFF] text-white px-3 py-1 rounded-full text-sm font-semibold">Live Demo</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#00274D]/80 backdrop-blur-sm p-12 rounded-2xl border border-[#00BFFF]/30">
          <h3 className="text-3xl font-bold mb-6 text-[#00BFFF]">Ready to Sell More Cars with AI?</h3>
          <p className="text-gray-300 mb-8 text-lg">Join successful dealerships already using AI to boost sales</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="px-8 py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-base"
              onClick={() => (window.location.href = "/signup")}
            >
              Get AI NOW
            </Button>
            <Button
              variant="outline"
              className="px-8 py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-md hover:bg-[#00BFFF] hover:text-white transition-all duration-200 hover:scale-105 text-base bg-transparent"
              onClick={() => (window.location.href = "/")}
            >
              BACK TO HOME
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
