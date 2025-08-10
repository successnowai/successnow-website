"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { StarryBackground } from "@/components/ui/starry-background"
import {
  ArrowRight,
  TrendingUp,
  DollarSign,
  Clock,
  Play,
  ChevronRight,
  Users,
  CheckCircle,
  XCircle,
  Calculator,
  Award,
  Briefcase,
  Home,
  Building,
  Scale,
  Scissors,
  Wrench,
} from "lucide-react"
import Link from "next/link"

const industryData = [
  {
    id: "auto-dealers",
    name: "Auto Dealers",
    icon: <Briefcase className="w-6 h-6" />,
    image: "/images/blog/industry-auto.png",
    before: {
      receptionist: 45000,
      salesAssistant: 55000,
      mediaBuyer: 36000,
      seo: 24000,
      total: 160000,
      problems: [
        "Missed calls during busy hours",
        "Slow response to online inquiries",
        "Manual follow-up processes",
        "Expensive ad agency fees",
        "Poor SEO rankings",
      ],
    },
    after: {
      savings: 140000,
      improvements: [
        "AI answers every inquiry instantly",
        "80% more test drives booked",
        "Automated follow-up until sale closes",
        "AdsNOW.ai optimizes campaigns 24/7",
        "SEOExperts.ai delivers higher rankings for 1/3 cost",
      ],
      results: {
        testDrives: "80% increase",
        responseTime: "Under 30 seconds",
        savings: "$140K+ annually",
        timeBack: "More family time",
      },
    },
    testimonial: {
      quote:
        "Our AI handles more inquiries than our entire sales team used to. We're booking test drives while competitors are still checking voicemail.",
      name: "Mike Rodriguez",
      title: "Dealership Owner",
      location: "Phoenix, AZ",
    },
  },
  {
    id: "realtors",
    name: "Real Estate",
    icon: <Home className="w-6 h-6" />,
    image: "/images/blog/industry-realtor.png",
    before: {
      officeAdmin: 40000,
      buyerAgent: 50000,
      adAgency: 30000,
      seo: 18000,
      total: 138000,
      problems: [
        "Missed buyer inquiries after hours",
        "Slow response to listing requests",
        "Manual showing coordination",
        "Expensive ad agency retainers",
        "Poor local SEO visibility",
      ],
    },
    after: {
      savings: 120000,
      improvements: [
        "AI handles buyer & seller inquiries 24/7",
        "Instant showing bookings",
        "Automated listing notifications",
        "AdsNOW.ai launches high-performing campaigns",
        "SEOExperts.ai dominates local property searches",
      ],
      results: {
        showings: "65% more appointments",
        responseTime: "Instant 24/7",
        savings: "$120K+ annually",
        timeBack: "Focus on closings & networking",
      },
    },
    testimonial: {
      quote:
        "I went from working 70-hour weeks to having evenings free with my family. The AI books more showings than I ever could manually.",
      name: "Sarah Chen",
      title: "Real Estate Agent",
      location: "Austin, TX",
    },
  },
  {
    id: "mortgage",
    name: "Mortgage Brokers",
    icon: <Building className="w-6 h-6" />,
    image: "/images/blog/industry-mortgage.png",
    before: {
      loanOfficer: 50000,
      receptionist: 38000,
      mediaBuyer: 30000,
      seo: 24000,
      total: 142000,
      problems: [
        "Borrowers calling outside business hours",
        "Manual pre-qualification process",
        "Slow response to rate inquiries",
        "High cost per lead from ads",
        "Poor search rankings for mortgage terms",
      ],
    },
    after: {
      savings: 125000,
      improvements: [
        "AI pre-qualifies borrowers instantly",
        "24/7 rate quotes and consultations",
        "Automated application follow-up",
        "AdsNOW.ai optimizes mortgage campaigns daily",
        "SEOExperts.ai ranks for 'best mortgage rates'",
      ],
      results: {
        closings: "Faster closings",
        responseTime: "Instant qualification",
        savings: "$125K+ annually",
        timeBack: "More family time while AI fills pipeline",
      },
    },
    testimonial: {
      quote:
        "My AI agent pre-qualifies borrowers better than most loan officers. I'm closing more deals while working fewer hours.",
      name: "David Thompson",
      title: "Mortgage Broker",
      location: "Denver, CO",
    },
  },
  {
    id: "lawyers",
    name: "Legal Services",
    icon: <Scale className="w-6 h-6" />,
    image: "/images/blog/industry-lawyer.png",
    before: {
      intakeSpecialist: 45000,
      clientCoordinator: 50000,
      adAgency: 36000,
      seo: 30000,
      total: 161000,
      problems: [
        "Urgent legal calls going to voicemail",
        "Manual client intake process",
        "Slow consultation scheduling",
        "Expensive legal marketing",
        "Poor visibility for legal searches",
      ],
    },
    after: {
      savings: 140000,
      improvements: [
        "Client Intake Bot qualifies leads instantly",
        "24/7 emergency consultation booking",
        "Automated case follow-up",
        "AdsNOW.ai targets high-value cases",
        "SEOExperts.ai ranks for 'top lawyer near me'",
      ],
      results: {
        consultations: "50% more qualified meetings",
        responseTime: "24/7 availability",
        savings: "$140K+ annually",
        timeBack: "Focus on cases, not chasing clients",
      },
    },
    testimonial: {
      quote:
        "Our AI intake system captures cases we never would have gotten before. It's like having a 24/7 paralegal who never sleeps.",
      name: "Jennifer Martinez",
      title: "Managing Partner",
      location: "Miami, FL",
    },
  },
  {
    id: "medspas",
    name: "Med Spas",
    icon: <Scissors className="w-6 h-6" />,
    image: "/images/blog/industry-medspa.png",
    before: {
      receptionist: 38000,
      salesConsultant: 50000,
      adAgency: 36000,
      seo: 24000,
      total: 148000,
      problems: [
        "Treatment inquiries outside business hours",
        "High no-show rates",
        "Manual appointment booking",
        "Seasonal marketing challenges",
        "Competition from discount providers",
      ],
    },
    after: {
      savings: 130000,
      improvements: [
        "AI books every treatment inquiry 24/7",
        "Reactivation Bot fills calendar with repeat clients",
        "Automated appointment confirmations",
        "AdsNOW.ai runs seasonal promotions automatically",
        "SEOExperts.ai outranks discount competitors",
      ],
      results: {
        appointments: "75% fewer empty slots",
        responseTime: "Instant booking 24/7",
        savings: "$130K+ annually",
        timeBack: "Work 3 days/week, more family time",
      },
    },
    testimonial: {
      quote:
        "I went from managing a chaotic schedule to working part-time while my revenue increased. The AI handles everything perfectly.",
      name: "Dr. Lisa Park",
      title: "Medical Director",
      location: "Los Angeles, CA",
    },
  },
  {
    id: "contractors",
    name: "Contractors",
    icon: <Wrench className="w-6 h-6" />,
    image: "/images/blog/industry-contractor.png",
    before: {
      officeAdmin: 38000,
      salesRep: 50000,
      adsManager: 30000,
      seo: 24000,
      total: 142000,
      problems: [
        "Estimate requests going to voicemail",
        "Manual follow-up on quotes",
        "Seasonal demand fluctuations",
        "High cost per lead",
        "Poor local search visibility",
      ],
    },
    after: {
      savings: 125000,
      improvements: [
        "AI Voice Agent books estimate requests instantly",
        "SalesBot follows up until contracts are signed",
        "Automated seasonal campaign adjustments",
        "AdsNOW.ai targets homeowners ready to buy",
        "SEOExperts.ai wins 'contractor near me' searches",
      ],
      results: {
        contracts: "More signed jobs with less chasing",
        responseTime: "Instant estimate booking",
        savings: "$125K+ annually",
        timeBack: "Focus on project delivery & family",
      },
    },
    testimonial: {
      quote:
        "My AI books more estimates in a week than I used to get in a month. I'm finally making the money I deserve while having time for my kids.",
      name: "Tony Ricci",
      title: "General Contractor",
      location: "Chicago, IL",
    },
  },
]

export default function CaseStudiesClientPage() {
  const [selectedIndustry, setSelectedIndustry] = useState(null)
  const [showCalculator, setShowCalculator] = useState(false)

  const totalSavingsRange = industryData.reduce(
    (acc, industry) => {
      return {
        min: Math.min(acc.min, industry.after.savings),
        max: Math.max(acc.max, industry.after.savings),
      }
    },
    { min: Number.POSITIVE_INFINITY, max: 0 },
  )

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white relative overflow-hidden">
      <StarryBackground />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-[#00BFFF] to-[#00FF88] text-black font-bold px-6 py-3 text-lg">
              <Award className="w-5 h-5 mr-2" />
              Real Results • Proven Savings
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-[#00BFFF] via-white to-[#00FF88] bg-clip-text text-transparent">
              How Businesses Save Thousands
              <br />& Reclaim Their Time
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              See how owners across every industry are saving{" "}
              <span className="text-[#00BFFF] font-bold">
                ${totalSavingsRange.min / 1000}K–${totalSavingsRange.max / 1000}K annually
              </span>{" "}
              in staffing costs while working fewer hours and booking more appointments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#00BFFF] to-[#00FF88] hover:from-[#00BFFF]/80 hover:to-[#00FF88]/80 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,191,255,0.5)]"
                asChild
              >
                <Link href="/demo">
                  <Play className="w-5 h-5 mr-2" />
                  See Live Demo
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-[#00BFFF]/50 text-[#00BFFF] hover:bg-[#00BFFF]/10 px-8 py-4 rounded-xl transition-all duration-300 bg-transparent hover:border-[#00BFFF]"
                onClick={() => setShowCalculator(true)}
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Your Savings
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: <DollarSign className="w-8 h-8" />, title: "$80K–$200K", subtitle: "Annual Savings" },
                { icon: <Clock className="w-8 h-8" />, title: "24/7", subtitle: "AI Coverage" },
                { icon: <TrendingUp className="w-8 h-8" />, title: "More Sales", subtitle: "Automated" },
                { icon: <Users className="w-8 h-8" />, title: "Family Time", subtitle: "Reclaimed" },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className="bg-[#0A0A0F]/80 backdrop-blur-xl border border-[#00BFFF]/30 hover:border-[#00BFFF]/50 transition-all duration-300 text-center p-6 hover:shadow-[0_0_20px_rgba(0,191,255,0.3)]"
                >
                  <div className="text-[#00BFFF] mb-3 flex justify-center">{benefit.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{benefit.title}</div>
                  <div className="text-gray-400 text-sm">{benefit.subtitle}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* The Big Picture Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-[#00BFFF]/10 via-[#0A0A0F]/80 to-[#00FF88]/10 backdrop-blur-xl border-2 border-[#00BFFF]/30 p-12 text-center hover:border-[#00BFFF]/50 transition-all duration-300 shadow-[0_0_30px_rgba(0,191,255,0.3)]">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                The Big Picture: Freedom, Savings, and More Sales
              </h2>

              <div className="text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                <p className="mb-6">
                  Across every industry we serve, the story is the same: Owners were buried in overhead costs — sales
                  salaries, reception staff, media buyers, expensive SEO retainers — and still missing opportunities.
                </p>
                <p className="mb-6 text-[#00BFFF] font-semibold text-2xl">Then they switched to SuccessNOW.ai.</p>
                <p>
                  Our AI Voice & Chat Agents answer every call, respond to every lead, and book appointments instantly —
                  24/7, without breaks, sick days, or missed follow-ups. Our AdsNOW.ai bot launches and optimizes paid
                  ads without expensive agencies, and SEOExperts.ai delivers better results than traditional SEO
                  packages at a third of the cost.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                {[
                  "Owners working fewer hours",
                  "More appointments booked automatically",
                  "Better ad performance & SEO rankings",
                  "Happier clients who stay longer",
                  "More family referrals",
                ].map((result, index) => (
                  <div
                    key={index}
                    className="flex items-center text-left bg-[#0A0A0F]/60 p-4 rounded-lg border border-[#00FF88]/20"
                  >
                    <CheckCircle className="w-6 h-6 text-[#00FF88] mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{result}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Industry Case Studies */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Industry Case Studies</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See exactly how businesses in your industry are saving money and time
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industryData.map((industry) => (
                <Card
                  key={industry.id}
                  className="bg-[#0A0A0F]/80 backdrop-blur-xl border border-[#00BFFF]/30 hover:border-[#00BFFF]/50 hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-[0_0_30px_rgba(0,191,255,0.4)] group"
                  onClick={() => setSelectedIndustry(industry)}
                >
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4 text-[#00BFFF] bg-[#00BFFF]/10 w-16 h-16 rounded-full items-center justify-center mx-auto">
                      {industry.icon}
                    </div>
                    <CardTitle className="text-2xl text-white mb-4">{industry.name}</CardTitle>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                        <div className="text-2xl font-bold text-red-400 mb-1">
                          ${(industry.before.total / 1000).toFixed(0)}K
                        </div>
                        <div className="text-sm text-gray-400">Before (Annual)</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-[#00FF88]/10 border border-[#00FF88]/20">
                        <div className="text-2xl font-bold text-[#00FF88] mb-1">
                          ${(industry.after.savings / 1000).toFixed(0)}K
                        </div>
                        <div className="text-sm text-gray-400">Savings</div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {industry.after.improvements.slice(0, 3).map((improvement, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-[#00FF88] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{improvement}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between p-4 bg-[#00BFFF]/5 rounded-lg border border-[#00BFFF]/20">
                      <div className="text-sm">
                        <div className="font-semibold text-white">{industry.testimonial.name}</div>
                        <div className="text-gray-400">{industry.testimonial.title}</div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-[#00BFFF] group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-br from-[#FF6B35]/10 via-[#0A0A0F]/80 to-[#00FF88]/10 backdrop-blur-xl border-2 border-[#FF6B35]/50 p-12 shadow-[0_0_40px_rgba(255,107,53,0.4)]">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Join These Success Stories?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Stop paying for expensive staff and agencies. Let AI handle your leads, bookings, and marketing while
                you focus on what matters most.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#00BFFF] to-[#00FF88] hover:from-[#00BFFF]/80 hover:to-[#00FF88]/80 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,191,255,0.5)]"
                  asChild
                >
                  <Link href="/demo">
                    <Play className="w-5 h-5 mr-2" />
                    See Live Demo
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-xl transition-all duration-300 bg-transparent hover:border-white"
                  asChild
                >
                  <Link href="/signup">
                    Get Started Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Detailed Industry Modal */}
        {selectedIndustry && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Card className="bg-[#0A0A0F]/95 backdrop-blur-xl border-2 border-[#00BFFF]/50 max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(0,191,255,0.5)]">
              <CardHeader className="border-b border-[#00BFFF]/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-[#00BFFF] mr-4 bg-[#00BFFF]/10 w-16 h-16 rounded-full flex items-center justify-center">
                      {selectedIndustry.icon}
                    </div>
                    <div>
                      <CardTitle className="text-3xl text-white mb-2">{selectedIndustry.name}</CardTitle>
                      <p className="text-gray-400">Complete Before & After Breakdown</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedIndustry(null)}
                    className="text-gray-400 hover:text-white text-2xl hover:bg-white/10"
                  >
                    ✕
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                {/* Before & After Comparison */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {/* Before */}
                  <Card className="bg-red-500/5 border-red-500/20 p-6">
                    <div className="flex items-center mb-6">
                      <XCircle className="w-8 h-8 text-red-400 mr-3" />
                      <h3 className="text-2xl font-bold text-white">BEFORE SuccessNOW</h3>
                    </div>

                    <div className="space-y-4 mb-6">
                      {Object.entries(selectedIndustry.before)
                        .filter(([key]) => key !== "total" && key !== "problems")
                        .map(([role, cost]) => (
                          <div key={role} className="flex justify-between items-center py-2 border-b border-red-500/10">
                            <span className="text-gray-300 capitalize">{role.replace(/([A-Z])/g, " $1").trim()}:</span>
                            <span className="text-red-400 font-semibold">${cost.toLocaleString()}/year</span>
                          </div>
                        ))}
                    </div>

                    <div className="border-t border-red-500/20 pt-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-bold text-lg">Total Overhead:</span>
                        <span className="text-red-400 font-bold text-xl">
                          ${selectedIndustry.before.total.toLocaleString()}/year
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-white font-semibold mb-3">Common Problems:</h4>
                      {selectedIndustry.before.problems.map((problem, index) => (
                        <div key={index} className="flex items-start">
                          <XCircle className="w-5 h-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{problem}</span>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* After */}
                  <Card className="bg-[#00FF88]/5 border-[#00FF88]/20 p-6">
                    <div className="flex items-center mb-6">
                      <CheckCircle className="w-8 h-8 text-[#00FF88] mr-3" />
                      <h3 className="text-2xl font-bold text-white">AFTER SuccessNOW</h3>
                    </div>

                    <div className="mb-6">
                      <div className="text-center p-6 rounded-lg bg-[#00FF88]/10 border border-[#00FF88]/20">
                        <div className="text-4xl font-bold text-[#00FF88] mb-2">
                          ${selectedIndustry.after.savings.toLocaleString()}
                        </div>
                        <div className="text-gray-300">Annual Savings</div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <h4 className="text-white font-semibold mb-3">AI Solutions:</h4>
                      {selectedIndustry.after.improvements.map((improvement, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-[#00FF88] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{improvement}</span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(selectedIndustry.after.results).map(([key, value]) => (
                        <div
                          key={key}
                          className="text-center p-3 rounded-lg bg-[#00FF88]/10 border border-[#00FF88]/20"
                        >
                          <div className="text-lg font-bold text-[#00FF88] mb-1">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Testimonial */}
                <Card className="bg-[#00BFFF]/5 border-[#00BFFF]/20 p-8 mb-8">
                  <div className="flex items-start">
                    <div className="text-6xl text-[#00BFFF]/30 mr-4">"</div>
                    <div>
                      <blockquote className="text-xl text-gray-300 italic mb-6">
                        {selectedIndustry.testimonial.quote}
                      </blockquote>
                      <div className="flex items-center">
                        <div>
                          <div className="font-semibold text-white text-lg">{selectedIndustry.testimonial.name}</div>
                          <div className="text-gray-400">{selectedIndustry.testimonial.title}</div>
                          <div className="text-[#00BFFF] text-sm">{selectedIndustry.testimonial.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* CTA */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Similar Results?</h3>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#00BFFF] to-[#00FF88] hover:from-[#00BFFF]/80 hover:to-[#00FF88]/80 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,191,255,0.5)]"
                      asChild
                    >
                      <Link href="/demo">
                        <Play className="w-5 h-5 mr-2" />
                        See Live Demo
                      </Link>
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      className="border-[#00BFFF]/50 text-[#00BFFF] hover:bg-[#00BFFF]/10 px-8 py-4 rounded-xl transition-all duration-300 bg-transparent hover:border-[#00BFFF]"
                      asChild
                    >
                      <Link href="/signup">
                        Get Started Now
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Savings Calculator Modal */}
        {showCalculator && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Card className="bg-[#0A0A0F]/95 backdrop-blur-xl border-2 border-[#00BFFF]/50 max-w-2xl w-full shadow-[0_0_50px_rgba(0,191,255,0.5)]">
              <CardHeader className="border-b border-[#00BFFF]/20">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-white">Calculate Your Potential Savings</CardTitle>
                  <Button
                    variant="ghost"
                    onClick={() => setShowCalculator(false)}
                    className="text-gray-400 hover:text-white text-2xl hover:bg-white/10"
                  >
                    ✕
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <p className="text-gray-300 mb-6">
                    Based on our case studies, businesses typically save between{" "}
                    <span className="text-[#00BFFF] font-bold">
                      ${totalSavingsRange.min / 1000}K-${totalSavingsRange.max / 1000}K annually
                    </span>{" "}
                    by replacing traditional staff and agencies with SuccessNOW AI.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="text-center p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                      <div className="text-2xl font-bold text-red-400 mb-1">$80K-$200K</div>
                      <div className="text-sm text-gray-400">Typical Staff Costs</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-[#00FF88]/10 border border-[#00FF88]/20">
                      <div className="text-2xl font-bold text-[#00FF88] mb-1">$2K-$5K</div>
                      <div className="text-sm text-gray-400">SuccessNOW Cost</div>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#00BFFF] to-[#00FF88] hover:from-[#00BFFF]/80 hover:to-[#00FF88]/80 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,191,255,0.5)] w-full"
                    asChild
                  >
                    <Link href="/demo">
                      <Calculator className="w-5 h-5 mr-2" />
                      Get Your Custom Savings Report
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
