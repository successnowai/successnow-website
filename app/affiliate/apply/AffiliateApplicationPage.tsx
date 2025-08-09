"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Users, Crown, CheckCircle } from "lucide-react"

type ProgramType = "general" | "platinum" | null
type FormStep = "selection" | "application" | "success"

interface FormData {
  // General fields
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  website: string
  businessDescription: string
  promotionStrategy: string

  // Platinum-specific fields
  experience: string
  clientBase: string
  marketingChannels: string[]
  revenueExpectation: string
  portfolio: string
  whyPlatinum: string
}

export default function AffiliateApplicationPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<FormStep>("selection")
  const [selectedProgram, setSelectedProgram] = useState<ProgramType>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    businessDescription: "",
    promotionStrategy: "",
    experience: "",
    clientBase: "",
    marketingChannels: [],
    revenueExpectation: "",
    portfolio: "",
    whyPlatinum: "",
  })

  useEffect(() => {
    const program = searchParams.get("program")
    if (program === "general" || program === "platinum") {
      setSelectedProgram(program)
      setCurrentStep("application")
    }
  }, [searchParams])

  const handleProgramSelect = (program: ProgramType) => {
    setSelectedProgram(program)
    setCurrentStep("application")
  }

  const handleInputChange = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setCurrentStep("success")
    setIsSubmitting(false)
  }

  const renderProgramSelection = () => (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Starry background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:50px_50px] opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00BFFF] to-cyan-400 bg-clip-text text-transparent">
            Choose Your Affiliate Program
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Select the program that best fits your business goals and experience level
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* General Affiliate Program */}
          <Card
            className="bg-white/5 backdrop-blur-sm border-gray-700 hover:border-[#00BFFF]/50 transition-all duration-300 cursor-pointer group"
            onClick={() => handleProgramSelect("general")}
          >
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-[#00BFFF] to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white mb-2">General Affiliates</CardTitle>
              <CardDescription className="text-gray-300 text-lg">
                Perfect for individuals and businesses looking to earn recurring commissions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>20-35% Monthly Recurring Revenue</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Marketing materials provided</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Quick application process</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Dedicated support team</span>
                </div>
              </div>
              <Button className="w-full mt-6 bg-gradient-to-r from-[#00BFFF] to-cyan-400 hover:from-[#00BFFF]/90 hover:to-cyan-400/90 text-white font-semibold py-3">
                Apply for General Program
              </Button>
            </CardContent>
          </Card>

          {/* Platinum Partner Program */}
          <Card
            className="bg-white/5 backdrop-blur-sm border-yellow-500/50 hover:border-yellow-400 transition-all duration-300 cursor-pointer group relative overflow-hidden"
            onClick={() => handleProgramSelect("platinum")}
          >
            <div className="absolute top-4 right-4">
              <Crown className="w-6 h-6 text-yellow-400" />
            </div>
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white mb-2">Trusted Platinum Partners</CardTitle>
              <CardDescription className="text-gray-300 text-lg">
                Elite program for top performers - Limited to 5 partners globally per niche
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-3 mb-4">
                <p className="text-yellow-400 font-semibold text-center">EARN unlimited monthly recurring revenue</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>40% Monthly Recurring Revenue</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Exclusive territory rights</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Priority support & training</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Co-marketing opportunities</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Custom commission structures</span>
                </div>
              </div>
              <Button className="w-full mt-6 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-400/90 hover:to-yellow-600/90 text-black font-semibold py-3">
                Apply for Platinum Program
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  const renderApplicationForm = () => (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Starry background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:50px_50px] opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => setCurrentStep("selection")}
            className="mb-6 text-gray-300 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Program Selection
          </Button>

          <Card className="bg-white/5 backdrop-blur-sm border-gray-700">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-white mb-2">
                {selectedProgram === "general" ? "General Affiliate" : "Platinum Partner"} Application
              </CardTitle>
              <CardDescription className="text-gray-300">
                {selectedProgram === "general"
                  ? "Fill out this quick form to join our affiliate program"
                  : "Complete this detailed application for our exclusive Platinum Partner program"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-white">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="bg-white/10 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="bg-white/10 border-gray-600 text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-white">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-white/10 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-white/10 border-gray-600 text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company" className="text-white">
                      Company/Business Name *
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="bg-white/10 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="website" className="text-white">
                      Website URL
                    </Label>
                    <Input
                      id="website"
                      type="url"
                      value={formData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                      className="bg-white/10 border-gray-600 text-white"
                      placeholder="https://"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="businessDescription" className="text-white">
                    Business Description *
                  </Label>
                  <Textarea
                    id="businessDescription"
                    value={formData.businessDescription}
                    onChange={(e) => handleInputChange("businessDescription", e.target.value)}
                    className="bg-white/10 border-gray-600 text-white"
                    rows={3}
                    placeholder="Briefly describe your business and target audience"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="promotionStrategy" className="text-white">
                    How do you plan to promote SuccessNOW? *
                  </Label>
                  <Textarea
                    id="promotionStrategy"
                    value={formData.promotionStrategy}
                    onChange={(e) => handleInputChange("promotionStrategy", e.target.value)}
                    className="bg-white/10 border-gray-600 text-white"
                    rows={3}
                    placeholder="Describe your marketing strategy and channels"
                    required
                  />
                </div>

                {/* Platinum-specific fields */}
                {selectedProgram === "platinum" && (
                  <>
                    <div className="border-t border-gray-600 pt-6">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Additional Information for Platinum Partners
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="experience" className="text-white">
                          Years of Experience in Marketing/Sales *
                        </Label>
                        <Select onValueChange={(value) => handleInputChange("experience", value)}>
                          <SelectTrigger className="bg-white/10 border-gray-600 text-white">
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
                        <Select onValueChange={(value) => handleInputChange("clientBase", value)}>
                          <SelectTrigger className="bg-white/10 border-gray-600 text-white">
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
                    </div>

                    <div>
                      <Label htmlFor="revenueExpectation" className="text-white">
                        Monthly Revenue Expectation *
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("revenueExpectation", value)}>
                        <SelectTrigger className="bg-white/10 border-gray-600 text-white">
                          <SelectValue placeholder="Select revenue expectation" />
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
                        value={formData.portfolio}
                        onChange={(e) => handleInputChange("portfolio", e.target.value)}
                        className="bg-white/10 border-gray-600 text-white"
                        rows={3}
                        placeholder="Share links to your portfolio, case studies, or notable achievements"
                      />
                    </div>

                    <div>
                      <Label htmlFor="whyPlatinum" className="text-white">
                        Why do you want to be a Platinum Partner? *
                      </Label>
                      <Textarea
                        id="whyPlatinum"
                        value={formData.whyPlatinum}
                        onChange={(e) => handleInputChange("whyPlatinum", e.target.value)}
                        className="bg-white/10 border-gray-600 text-white"
                        rows={4}
                        placeholder="Explain your motivation and how you plan to leverage the Platinum Partner benefits"
                        required
                      />
                    </div>
                  </>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 font-semibold ${
                    selectedProgram === "platinum"
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-400/90 hover:to-yellow-600/90 text-black"
                      : "bg-gradient-to-r from-[#00BFFF] to-cyan-400 hover:from-[#00BFFF]/90 hover:to-cyan-400/90 text-white"
                  }`}
                >
                  {isSubmitting ? "Submitting Application..." : "Submit Application"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  const renderSuccessPage = () => (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center">
      {/* Starry background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:50px_50px] opacity-20"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#00BFFF] to-cyan-400 bg-clip-text text-transparent">
            Application Submitted Successfully!
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Thank you for applying to our {selectedProgram === "general" ? "General Affiliate" : "Platinum Partner"}{" "}
            program.
          </p>
        </div>

        <Card className="bg-white/5 backdrop-blur-sm border-gray-700 mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-white mb-4">What happens next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#00BFFF] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">
                  1
                </div>
                <p className="text-gray-300">Our team will review your application within 24-48 hours</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#00BFFF] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">
                  2
                </div>
                <p className="text-gray-300">
                  You'll receive an email with the next steps or any additional requirements
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#00BFFF] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">
                  3
                </div>
                <p className="text-gray-300">
                  Once approved, you'll get access to your affiliate dashboard and materials
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Button
            onClick={() => router.push("/affiliate")}
            className="bg-gradient-to-r from-[#00BFFF] to-cyan-400 hover:from-[#00BFFF]/90 hover:to-cyan-400/90 text-white px-8 py-3"
          >
            Back to Affiliate Program
          </Button>
          <div>
            <Button variant="ghost" onClick={() => router.push("/")} className="text-gray-300 hover:text-white">
              Return to Homepage
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  if (currentStep === "selection") {
    return renderProgramSelection()
  }

  if (currentStep === "application") {
    return renderApplicationForm()
  }

  return renderSuccessPage()
}
