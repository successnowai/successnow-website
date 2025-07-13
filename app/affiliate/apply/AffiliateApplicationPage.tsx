"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Users, Crown, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function AffiliateApplicationPage() {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    const program = searchParams.get("program")
    if (program === "General" || program === "Platinum") {
      setSelectedProgram(program)
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
        {/* Starry Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black">
          <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:50px_50px] opacity-20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-white mb-4">Application Submitted!</h1>
              <p className="text-gray-300 text-lg mb-6">
                Thank you for your interest in our affiliate program. We'll review your application and get back to you
                within 2-3 business days.
              </p>
              <Link
                href="/affiliate"
                className="inline-flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
              >
                Back to Affiliate Program
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (!selectedProgram) {
    return (
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Starry Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black">
          <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:50px_50px] opacity-20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <Link href="/affiliate" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Affiliate Program
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Program</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Select the affiliate program that best fits your goals and experience level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* General Program Card */}
            <Card
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProgram("General")}
            >
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">General Affiliate</h3>
                <p className="text-gray-300 mb-6">
                  Perfect for individuals and businesses looking to earn recurring commissions with our AI solutions.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="text-gray-300">• 20-35% recurring commissions</li>
                  <li className="text-gray-300">• Marketing materials provided</li>
                  <li className="text-gray-300">• Monthly payouts</li>
                  <li className="text-gray-300">• Dedicated support</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white">
                  Apply for General Program
                </Button>
              </CardContent>
            </Card>

            {/* Platinum Program Card */}
            <Card
              className="bg-white/5 backdrop-blur-sm border-yellow-400/20 hover:bg-white/10 transition-all duration-300 cursor-pointer relative"
              onClick={() => setSelectedProgram("Platinum")}
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">ELITE</span>
              </div>
              <CardContent className="p-8 text-center">
                <Crown className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Platinum Partner</h3>
                <p className="text-gray-300 mb-6">
                  Exclusive program for top performers with unlimited earning potential and premium benefits.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="text-gray-300">• 40% premium commission rate</li>
                  <li className="text-gray-300">• Exclusive territory protection</li>
                  <li className="text-gray-300">• Co-branded materials</li>
                  <li className="text-gray-300">• Direct C-level access</li>
                </ul>
                <Button className="w-full border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent">
                  Apply for Platinum Program
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black">
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:50px_50px] opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <button
              onClick={() => setSelectedProgram(null)}
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Program Selection
            </button>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {selectedProgram === "General" ? "General Affiliate" : "Platinum Partner"} Application
            </h1>
            <p className="text-gray-300">
              {selectedProgram === "General"
                ? "Fill out this form to apply for our General Affiliate program."
                : "Complete this detailed application for our exclusive Platinum Partner program."}
            </p>
          </div>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                {selectedProgram === "General" ? (
                  <Users className="h-6 w-6 text-cyan-400 mr-2" />
                ) : (
                  <Crown className="h-6 w-6 text-yellow-400 mr-2" />
                )}
                Application Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-white">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-white">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-white">
                    Company/Business Name
                  </Label>
                  <Input
                    id="company"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <Label htmlFor="website" className="text-white">
                    Website URL
                  </Label>
                  <Input
                    id="website"
                    type="url"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                <div>
                  <Label htmlFor="business" className="text-white">
                    Tell us about your business *
                  </Label>
                  <Textarea
                    id="business"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Describe your business, target audience, and current services..."
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="promotion" className="text-white">
                    How do you plan to promote SuccessNOW? *
                  </Label>
                  <Textarea
                    id="promotion"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Describe your marketing strategy, channels, and approach..."
                    rows={4}
                  />
                </div>

                {/* Platinum-specific fields */}
                {selectedProgram === "Platinum" && (
                  <>
                    <div>
                      <Label htmlFor="experience" className="text-white">
                        Years of Experience in Marketing/Sales *
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2">1-2 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="6-10">6-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="clientBase" className="text-white">
                        Current Client Base Size *
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select client base size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 clients</SelectItem>
                          <SelectItem value="11-50">11-50 clients</SelectItem>
                          <SelectItem value="51-100">51-100 clients</SelectItem>
                          <SelectItem value="100+">100+ clients</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="channels" className="text-white">
                        Primary Marketing Channels *
                      </Label>
                      <Textarea
                        id="channels"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="List your primary marketing channels (social media, email, content marketing, etc.)"
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="revenue" className="text-white">
                        Expected Monthly Revenue Goals *
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select revenue goal" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k+">$50,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="portfolio" className="text-white">
                        Portfolio/Case Studies
                      </Label>
                      <Textarea
                        id="portfolio"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="Share links to your portfolio, case studies, or examples of your work..."
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="why" className="text-white">
                        Why do you want to be a Platinum Partner? *
                      </Label>
                      <Textarea
                        id="why"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="Explain why you're interested in our Platinum Partner program and what you can bring to the partnership..."
                        rows={4}
                      />
                    </div>
                  </>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 text-lg font-semibold transition-all duration-300 ${
                    selectedProgram === "General"
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white"
                      : "border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
                  }`}
                >
                  {isSubmitting ? "Submitting Application..." : `Submit ${selectedProgram} Application`}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
