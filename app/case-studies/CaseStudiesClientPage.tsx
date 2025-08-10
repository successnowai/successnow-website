"use client"

import { useState } from "react"
import { StarryBackground } from "@/components/ui/starry-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Building2,
  TrendingUp,
  Users,
  Phone,
  Calendar,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  DollarSign,
  Clock,
  Star,
} from "lucide-react"

const caseStudies = [
  {
    id: 1,
    industry: "Real Estate",
    company: "Premier Properties Group",
    challenge: "Missing 70% of leads due to after-hours calls and slow response times",
    solution: "24/7 AI voice agents for lead qualification and appointment scheduling",
    results: {
      leadIncrease: "340%",
      responseTime: "Under 30 seconds",
      conversionRate: "85%",
      roi: "450%",
    },
    testimonial:
      "SuccessNOW AI transformed our business overnight. We went from missing most of our leads to converting 85% of them. The ROI has been incredible.",
    clientName: "Sarah Johnson",
    clientTitle: "Managing Director",
    timeline: "3 months",
    investment: "$997/month",
  },
  {
    id: 2,
    industry: "Healthcare",
    company: "Advanced Dental Care",
    challenge: "High no-show rates and inefficient appointment scheduling",
    solution: "AI-powered appointment reminders and intelligent scheduling system",
    results: {
      leadIncrease: "220%",
      responseTime: "Instant",
      conversionRate: "92%",
      roi: "380%",
    },
    testimonial:
      "Our no-show rate dropped from 30% to just 5%. The AI handles everything seamlessly, and our patients love the instant responses.",
    clientName: "Dr. Michael Chen",
    clientTitle: "Practice Owner",
    timeline: "2 months",
    investment: "$997/month",
  },
  {
    id: 3,
    industry: "Home Services",
    company: "Elite HVAC Solutions",
    challenge: "Losing emergency calls to competitors during peak seasons",
    solution: "AI voice agents for 24/7 emergency response and lead qualification",
    results: {
      leadIncrease: "280%",
      responseTime: "24/7 availability",
      conversionRate: "78%",
      roi: "520%",
    },
    testimonial:
      "During our busiest season, the AI handled over 500 calls while we were on jobs. We didn't lose a single emergency call to competitors.",
    clientName: "Robert Martinez",
    clientTitle: "Owner",
    timeline: "4 months",
    investment: "$997/month",
  },
  {
    id: 4,
    industry: "Legal Services",
    company: "Thompson & Associates Law",
    challenge: "Potential clients hanging up due to long hold times",
    solution: "AI receptionist for immediate response and consultation scheduling",
    results: {
      leadIncrease: "195%",
      responseTime: "Immediate",
      conversionRate: "88%",
      roi: "310%",
    },
    testimonial:
      "We used to lose potential clients to hold times. Now every call is answered instantly, and our consultation bookings have nearly doubled.",
    clientName: "Jennifer Thompson",
    clientTitle: "Senior Partner",
    timeline: "2 months",
    investment: "$997/month",
  },
  {
    id: 5,
    industry: "Fitness",
    company: "FitLife Gym Chain",
    challenge: "Low membership conversion from website inquiries",
    solution: "AI chat and voice integration for instant membership consultations",
    results: {
      leadIncrease: "310%",
      responseTime: "Instant",
      conversionRate: "73%",
      roi: "420%",
    },
    testimonial:
      "The AI doesn't just answer questions - it actually sells memberships. Our conversion rate from inquiries to paid members has tripled.",
    clientName: "Marcus Williams",
    clientTitle: "Regional Manager",
    timeline: "3 months",
    investment: "$997/month",
  },
  {
    id: 6,
    industry: "Automotive",
    company: "AutoMax Dealership",
    challenge: "Sales team overwhelmed with test drive requests and inquiries",
    solution: "AI qualification system for serious buyers and automated scheduling",
    results: {
      leadIncrease: "260%",
      responseTime: "Under 1 minute",
      conversionRate: "81%",
      roi: "390%",
    },
    testimonial:
      "The AI pre-qualifies every lead perfectly. Our sales team now only talks to serious buyers, and our closing rate has skyrocketed.",
    clientName: "David Park",
    clientTitle: "Sales Director",
    timeline: "3 months",
    investment: "$997/month",
  },
]

const industries = [
  {
    name: "Real Estate",
    icon: Building2,
    description: "24/7 lead capture and qualification for property inquiries",
    benefits: ["Instant lead response", "Automated showing scheduling", "Lead qualification"],
  },
  {
    name: "Healthcare",
    icon: Users,
    description: "Patient scheduling and appointment management",
    benefits: ["Reduced no-shows", "24/7 appointment booking", "Patient reminders"],
  },
  {
    name: "Home Services",
    icon: Phone,
    description: "Emergency response and service scheduling",
    benefits: ["24/7 emergency response", "Service scheduling", "Lead qualification"],
  },
  {
    name: "Legal Services",
    icon: BarChart3,
    description: "Client intake and consultation scheduling",
    benefits: ["Instant client response", "Consultation booking", "Case qualification"],
  },
  {
    name: "Fitness",
    icon: TrendingUp,
    description: "Membership sales and class scheduling",
    benefits: ["Membership conversion", "Class booking", "Member retention"],
  },
  {
    name: "Automotive",
    icon: Calendar,
    description: "Test drive scheduling and lead qualification",
    benefits: ["Qualified leads only", "Test drive booking", "Sales acceleration"],
  },
]

export default function CaseStudiesClientPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white relative overflow-hidden">
      <StarryBackground />

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-[#00BFFF] to-[#00FF88] text-black font-bold px-6 py-2">
            🏆 PROVEN RESULTS
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00BFFF] via-white to-[#00FF88] bg-clip-text text-transparent">
            Real Businesses, Real Results
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            See how businesses across industries are using SuccessNOW AI to increase leads, improve conversions, and
            boost revenue
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Average Lead Increase", value: "280%", icon: TrendingUp },
            { label: "Average ROI", value: "420%", icon: DollarSign },
            { label: "Response Time", value: "<30 sec", icon: Clock },
            { label: "Client Satisfaction", value: "98%", icon: Star },
          ].map((stat, index) => (
            <Card
              key={index}
              className="bg-[#0A0A0F]/80 backdrop-blur-xl border border-[#00BFFF]/30 hover:border-[#00BFFF]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,191,255,0.3)] group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/5 via-transparent to-[#00FF88]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <CardContent className="p-6 text-center relative z-10">
                <stat.icon className="w-12 h-12 text-[#00BFFF] mx-auto mb-4" />
                <div className="text-3xl font-bold text-[#00FF88] mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industry Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center text-[#00BFFF] mb-8">Filter by Industry</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => setSelectedIndustry(null)}
              variant={selectedIndustry === null ? "default" : "outline"}
              className={`${
                selectedIndustry === null
                  ? "bg-gradient-to-r from-[#00BFFF] to-[#00FF88] text-black"
                  : "border-[#00BFFF]/30 text-white hover:border-[#00BFFF]/50"
              }`}
            >
              All Industries
            </Button>
            {industries.map((industry) => (
              <Button
                key={industry.name}
                onClick={() => setSelectedIndustry(industry.name)}
                variant={selectedIndustry === industry.name ? "default" : "outline"}
                className={`${
                  selectedIndustry === industry.name
                    ? "bg-gradient-to-r from-[#00BFFF] to-[#00FF88] text-black"
                    : "border-[#00BFFF]/30 text-white hover:border-[#00BFFF]/50"
                }`}
              >
                <industry.icon className="w-4 h-4 mr-2" />
                {industry.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies
            .filter((study) => !selectedIndustry || study.industry === selectedIndustry)
            .map((study) => (
              <Card
                key={study.id}
                className="bg-[#0A0A0F]/80 backdrop-blur-xl border border-[#00BFFF]/30 hover:border-[#00BFFF]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,191,255,0.3)] group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/5 via-transparent to-[#00FF88]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                <CardHeader className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-[#00BFFF]/20 text-[#00BFFF] border border-[#00BFFF]/30">
                      {study.industry}
                    </Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#00FF88]">{study.results.roi}</div>
                      <div className="text-xs text-gray-400">ROI</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-white mb-2">{study.company}</CardTitle>
                  <p className="text-gray-400 text-sm mb-4">{study.challenge}</p>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#00FF88]">{study.results.leadIncrease}</div>
                      <div className="text-xs text-gray-400">Lead Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#00FF88]">{study.results.conversionRate}</div>
                      <div className="text-xs text-gray-400">Conversion Rate</div>
                    </div>
                  </div>

                  <blockquote className="text-sm text-gray-300 italic mb-4 border-l-2 border-[#00BFFF]/30 pl-4">
                    "{study.testimonial}"
                  </blockquote>

                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="font-semibold text-white text-sm">{study.clientName}</div>
                      <div className="text-xs text-gray-400">{study.clientTitle}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-[#00FF88]">{study.timeline}</div>
                      <div className="text-xs text-gray-400">Implementation</div>
                    </div>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gradient-to-r from-[#00BFFF] to-[#00FF88] text-black font-semibold hover:scale-105 transition-all duration-300">
                        View Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#0A0A0F]/95 backdrop-blur-xl border border-[#00BFFF]/30 text-white max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-[#00BFFF] mb-4">
                          {study.company} - {study.industry}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-[#00FF88] mb-2">Challenge</h4>
                          <p className="text-gray-300">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-[#00FF88] mb-2">Solution</h4>
                          <p className="text-gray-300">{study.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-[#00FF88] mb-2">Results</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#00BFFF]/10 rounded-lg p-4 border border-[#00BFFF]/20">
                              <div className="text-2xl font-bold text-[#00FF88]">{study.results.leadIncrease}</div>
                              <div className="text-sm text-gray-400">Lead Increase</div>
                            </div>
                            <div className="bg-[#00BFFF]/10 rounded-lg p-4 border border-[#00BFFF]/20">
                              <div className="text-2xl font-bold text-[#00FF88]">{study.results.conversionRate}</div>
                              <div className="text-sm text-gray-400">Conversion Rate</div>
                            </div>
                            <div className="bg-[#00BFFF]/10 rounded-lg p-4 border border-[#00BFFF]/20">
                              <div className="text-2xl font-bold text-[#00FF88]">{study.results.responseTime}</div>
                              <div className="text-sm text-gray-400">Response Time</div>
                            </div>
                            <div className="bg-[#00BFFF]/10 rounded-lg p-4 border border-[#00BFFF]/20">
                              <div className="text-2xl font-bold text-[#00FF88]">{study.results.roi}</div>
                              <div className="text-sm text-gray-400">ROI</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-[#00FF88] mb-2">Client Testimonial</h4>
                          <blockquote className="text-gray-300 italic border-l-2 border-[#00BFFF]/30 pl-4">
                            "{study.testimonial}"
                          </blockquote>
                          <div className="mt-4">
                            <div className="font-semibold text-white">{study.clientName}</div>
                            <div className="text-sm text-gray-400">{study.clientTitle}</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center pt-4 border-t border-[#00BFFF]/20">
                          <div>
                            <div className="text-sm text-gray-400">Implementation Time</div>
                            <div className="font-semibold text-[#00FF88]">{study.timeline}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400">Monthly Investment</div>
                            <div className="font-semibold text-[#00FF88]">{study.investment}</div>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Industries We Serve */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#00BFFF] mb-8">Industries We Transform</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Card
                key={industry.name}
                className="bg-[#0A0A0F]/80 backdrop-blur-xl border border-[#00BFFF]/30 hover:border-[#00BFFF]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,191,255,0.3)] group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/5 via-transparent to-[#00FF88]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                <CardContent className="p-6 relative z-10">
                  <industry.icon className="w-12 h-12 text-[#00BFFF] mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-400 mb-4">{industry.description}</p>
                  <ul className="space-y-2">
                    {industry.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-[#00FF88]" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-[#00BFFF]/10 via-[#0A0A0F]/80 to-[#00FF88]/10 backdrop-blur-xl border-2 border-[#00BFFF]/50 shadow-[0_0_40px_rgba(0,191,255,0.4)]">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Join These Success Stories?</h3>
              <p className="text-xl text-gray-300 mb-8">
                Start your AI transformation today and see results like these businesses
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-[#00BFFF] to-[#00FF88] text-black font-bold px-8 py-4 text-lg rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,191,255,0.5)]"
                >
                  <a href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
                    <Zap className="w-5 h-5 mr-2" />
                    Get Started Now
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-[#00BFFF]/50 text-white hover:border-[#00BFFF] hover:bg-[#00BFFF]/10 px-8 py-4 text-lg rounded-xl bg-transparent"
                >
                  <a href="/demo">
                    <Target className="w-5 h-5 mr-2" />
                    See Live Demo
                  </a>
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-6">
                ✅ 30-day money-back guarantee • ✅ No setup fees • ✅ Results in 30 days or less
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
