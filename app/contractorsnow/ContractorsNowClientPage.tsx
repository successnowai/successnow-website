"use client"

import Link from "next/link"

import type React from "react"
import IndustryPageTemplate from "@/components/industry/industry-page-template"
import { Globe, Target, Bot, LayoutDashboard, LinkIcon, GraduationCap, MessageSquare } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import StarryBackground from "@/components/ui/starry-background"

export default function ContractorsNowClientPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    contractorType: "",
    experience: "",
    currentChallenges: "",
    monthlyLeads: "",
    averageJobValue: "",
    agreeToTerms: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <IndustryPageTemplate
      industryName="Contractors & Home Service Pros"
      industryNameSingular="Contracting Business"
      heroSubtitle={
        <>
          AI that <span className="text-[#00BFFF]">Books Estimates</span>
          <br />
          To Win More Jobs
        </>
      }
      heroWarning="50% of contractor leads never get contacted due to being on job sites!"
      heroDescription={
        <>
          Stop losing jobs to competitors who respond faster. Our{" "}
          <span className="text-[#00BFFF] font-semibold">AI qualifies jobs, books estimates, and follows up</span> while
          you're working, so you never miss another opportunity.
        </>
      }
      heroCtaText="GET CONTRACTORSNOW"
      heroCtaLink="/contractorsnow/signup"
      customBuildPoints={[
        {
          icon: Globe,
          title: "Custom Website to Showcase Your Work",
          description:
            "A professional website that displays your portfolio, services, and makes it easy for customers to request estimates.",
        },
        {
          icon: Target,
          title: "Custom AI Smart Funnels for Your Services",
          description:
            "Targeted funnels for emergency repairs, home renovations, commercial projects, and seasonal services.",
        },
        {
          icon: MessageSquare,
          title: "Custom AI Agent Trained on YOUR Services",
          description:
            "AI agents that know your service areas, pricing structure, project timelines, and availability.",
        },
      ]}
      aiAgentsBenefits={[
        "Never miss an estimate request, even during emergencies",
        "Qualifies jobs and collects project details instantly",
        "Like having the best project manager answering calls 24/7",
        "Save money on office staff and increase job bookings",
        "Creates a professional and responsive experience for every customer",
      ]}
      dominateCtaText="Dominate NOW with Unstoppable Lead Capture!"
      featureCards={[
        {
          icon: Bot,
          title: "AI Estimate Agent",
          description: "An AI agent that qualifies jobs and books on-site estimates while you're working 24/7.",
        },
        {
          icon: Target,
          title: "AI Project Advisor",
          description: "Provides initial project scoping and timeline estimates to keep prospects engaged.",
        },
        {
          icon: Globe,
          title: "Custom Website",
          description: "Professional website with integrated AI chat, project galleries, and estimate request system.",
        },
        {
          icon: LayoutDashboard,
          title: "Analytics Dashboard",
          description: "Track lead sources, estimate conversion rates, and project pipeline.",
        },
        {
          icon: LinkIcon,
          title: "System Integration",
          description: "Connects with popular contractor software like JobNimbus and BuilderTREND.",
        },
        {
          icon: GraduationCap,
          title: "Training & Support",
          description: "Full support to ensure you're maximizing estimates and job conversions.",
        },
      ]}
      problems={[
        "Missing estimate requests while working on job sites",
        "Losing jobs to contractors who respond faster",
        "Spending too much time on unqualified leads",
        "Inconsistent pricing information given to prospects",
        "Difficulty following up on estimates and proposals",
        "Manual scheduling conflicts and double bookings",
      ]}
      solutions={[
        "24/7 AI assistant to capture and qualify every job inquiry",
        "Instant response times that beat competitors every time",
        "Pre-qualified leads so you only visit serious prospects",
        "Consistent pricing and service information every time",
        "Automated follow-up on estimates to close more deals",
        "Smart scheduling that prevents conflicts and maximizes efficiency",
      ]}
      finalCtaTitle="Ready to Build Your Business?"
      finalCtaDescription="Join the most successful contractors using AI to capture more leads, book more estimates, and win more jobs."
    >
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <StarryBackground />

        {/* Signup Form */}
        <section id="signup" className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Start Booking More Jobs <span className="text-[#00BFFF]">Today</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join successful contractors who trust ContractorsNOW to grow their business
              </p>
            </div>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white text-center">
                  Get Your AI Contractor Assistant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-white">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="bg-gray-800 border-gray-700 text-white"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-white">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="bg-gray-800 border-gray-700 text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-white">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-gray-800 border-gray-700 text-white"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-white">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-gray-800 border-gray-700 text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="companyName" className="text-white">
                        Company Name
                      </Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange("companyName", e.target.value)}
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contractorType" className="text-white">
                        Contractor Type
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("contractorType", value)}>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Contractor</SelectItem>
                          <SelectItem value="roofing">Roofing</SelectItem>
                          <SelectItem value="hvac">HVAC</SelectItem>
                          <SelectItem value="plumbing">Plumbing</SelectItem>
                          <SelectItem value="electrical">Electrical</SelectItem>
                          <SelectItem value="flooring">Flooring</SelectItem>
                          <SelectItem value="painting">Painting</SelectItem>
                          <SelectItem value="landscaping">Landscaping</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="monthlyLeads" className="text-white">
                        Monthly Leads
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("monthlyLeads", value)}>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-25">0-25 leads</SelectItem>
                          <SelectItem value="26-50">26-50 leads</SelectItem>
                          <SelectItem value="51-100">51-100 leads</SelectItem>
                          <SelectItem value="100+">100+ leads</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="averageJobValue" className="text-white">
                        Average Job Value
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("averageJobValue", value)}>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-5k">$0-$5,000</SelectItem>
                          <SelectItem value="5k-15k">$5,000-$15,000</SelectItem>
                          <SelectItem value="15k-50k">$15,000-$50,000</SelectItem>
                          <SelectItem value="50k+">$50,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="currentChallenges" className="text-white">
                      Current Lead Management Challenges
                    </Label>
                    <Textarea
                      id="currentChallenges"
                      value={formData.currentChallenges}
                      onChange={(e) => handleInputChange("currentChallenges", e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                      rows={4}
                      placeholder="Tell us about your biggest challenges with lead response and job booking..."
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                    />
                    <Label htmlFor="agreeToTerms" className="text-sm text-gray-300">
                      I agree to the{" "}
                      <Link href="/terms" className="text-[#00BFFF] hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-[#00BFFF] hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#00BFFF] hover:bg-[#00A3D9] text-white py-4 text-lg"
                    disabled={!formData.agreeToTerms}
                  >
                    Start My Free Trial
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </IndustryPageTemplate>
  )
}
