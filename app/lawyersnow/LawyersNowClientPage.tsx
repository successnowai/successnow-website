"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Globe,
  Target,
  MessageSquare,
  Bot,
  BarChart3,
  LinkIcon,
  GraduationCap,
  Zap,
  MessageCircle,
  ArrowRight,
  Play,
} from "lucide-react"
import DemoPopup from "@/components/ui/demo-popup"
import RevolutionaryAiCard from "@/components/industry/revolutionary-ai-card"

export default function LawyersNowClientPage() {
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false)

  const customBuildPoints = [
    {
      icon: Globe,
      title: "Legal Practice Integration",
      description:
        "AI seamlessly integrates with your case management system, legal calendars, and client intake processes for maximum efficiency.",
    },
    {
      icon: Target,
      title: "Practice Area Specialization",
      description:
        "Custom-trained AI understands your specific legal practice areas - personal injury, family law, criminal defense, or corporate law.",
    },
    {
      icon: MessageSquare,
      title: "Attorney-Client Privilege Compliance",
      description:
        "Built-in confidentiality protocols ensure all client communications maintain attorney-client privilege and legal compliance.",
    },
  ]

  const aiAgentsBenefits = [
    "24/7 client intake - never miss a potential case again",
    "Instant case evaluation and urgency assessment",
    "Automated consultation scheduling based on practice area",
    "Pre-qualified leads with case details and financial capability",
    "Follow-up sequences for prospects not ready to hire immediately",
  ]

  const featureCards = [
    {
      icon: Bot,
      title: "Legal AI Assistant",
      description:
        "AI handles initial client screening, case type identification, and urgency assessment with legal expertise.",
    },
    {
      icon: Target,
      title: "Case Qualification",
      description:
        "Advanced screening determines case merit, statute of limitations, and client's ability to pay legal fees.",
    },
    {
      icon: Globe,
      title: "Multi-Channel Intake",
      description: "Capture leads from your website, social media, referrals, and advertising campaigns in one system.",
    },
    {
      icon: BarChart3,
      title: "Legal Analytics",
      description: "Track case conversion rates, average case values, and ROI from different marketing channels.",
    },
    {
      icon: LinkIcon,
      title: "Legal Software Integration",
      description: "Connects with Clio, MyCase, PracticePanther, and other legal practice management software.",
    },
    {
      icon: GraduationCap,
      title: "Continuing Education",
      description: "AI stays updated on legal changes and best practices to maintain compliance and effectiveness.",
    },
  ]

  const problems = [
    "Missing calls from potential clients after hours",
    "Unqualified leads wasting attorney time",
    "Slow response times losing cases to competitors",
    "High cost of legal intake staff and training",
    "Inconsistent client screening and case evaluation",
    "Poor follow-up on prospects not ready to hire",
    "Difficulty tracking lead sources and ROI",
  ]

  const solutions = [
    "24/7 AI intake captures every potential client",
    "Advanced screening delivers only qualified leads",
    "Instant response time beats all competitors",
    "Eliminate intake staff costs with AI automation",
    "Consistent, professional case evaluation every time",
    "Automated nurturing converts more prospects to clients",
    "Complete analytics show exactly what's working",
  ]

  return (
    <div className="bg-[#0B1426] text-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 text-center bg-cover bg-center starry-background">
        <div className="absolute inset-0 bg-black/90" />
        <div className="relative z-10 max-w-4xl mx-auto brightness-110">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            The Best AI Agents for <span className="text-[#00BFFF]">Law Firms</span>
          </h1>
          <div className="mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-100">
            Never Lose Another Client to Slow Response Times
          </div>
          <Card className="mt-8 inline-block bg-red-500/10 border border-red-500/50 text-red-300 px-4 py-2 rounded-lg">
            <CardContent className="p-0 flex items-center gap-2">
              <Zap className="h-5 w-5 text-red-400" />
              <p className="font-medium">Law firms lose 67% of potential clients due to slow response times</p>
            </CardContent>
          </Card>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-200">
            Our AI Legal Assistants work 24/7 to capture, qualify, and convert more clients for your law practice. Stop
            losing cases to competitors who respond faster.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#00BFFF] to-[#00D1FF] hover:from-[#00AADD] hover:to-[#00B8E6] text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
                Get Legal AI NOW <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white/50 hover:bg-white/10 hover:border-white text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg transition-all"
              onClick={() => setIsDemoPopupOpen(true)}
            >
              <Play className="mr-2 h-5 w-5" />
              Launch Instant Demo NOW
            </Button>
          </div>
        </div>
      </div>

      <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-4">
          {/* Custom Build Points */}
          <Card className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold flex items-center justify-center gap-3">
                  <Zap className="text-[#00BFFF]" />
                  100% Custom Built for YOUR Law Firm
                </h2>
              </div>
              <div className="space-y-8">
                {customBuildPoints.map((point, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="flex-shrink-0">
                      <point.icon className="h-8 w-8 text-[#00BFFF]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{point.title}</h3>
                      <p className="mt-2 text-gray-400">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Agents Benefits */}
          <Card className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold flex items-center justify-center gap-3">
                  <Zap className="text-[#00BFFF]" />
                  AI Agents That Never Miss
                </h2>
              </div>
              <ul className="space-y-4 text-lg text-gray-300 max-w-3xl mx-auto">
                {aiAgentsBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#00BFFF] mr-3 mt-1">&#8226;</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12 text-center">
                <Button
                  size="lg"
                  className="bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg transition-all"
                >
                  <MessageCircle className="mr-3" />
                  Dominate Your Legal Market NOW
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Revolutionary AI Card */}
          <RevolutionaryAiCard />

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureCards.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-[#00BFFF] transition-colors duration-300"
              >
                <CardContent className="p-0 flex flex-col items-center">
                  <feature.icon className="h-12 w-12 text-[#00BFFF] mb-4" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Problems and Solutions Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white/5 border border-red-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6 text-red-400">Problems We Solve</h3>
                <ul className="space-y-3">
                  {problems.map((problem, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-400 mr-3 mt-1">✗</span>
                      <span className="text-gray-300">{problem}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border border-green-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6 text-green-400">Our Solutions</h3>
                <ul className="space-y-3">
                  {solutions.map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1">✓</span>
                      <span className="text-gray-300">{solution}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Final CTA Section */}
          <Card className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm text-center">
            <CardContent className="p-0">
              <h2 className="text-3xl sm:text-4xl font-bold">Ready to Transform Your Legal Practice?</h2>
              <p className="mt-4 text-lg text-gray-300">
                Join hundreds of law firms using AI to capture more clients and grow their practice
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#00BFFF] to-[#00D1FF] hover:from-[#00AADD] hover:to-[#00B8E6] text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                  <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
                    Get AI NOW
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white/50 hover:bg-white/10 hover:border-white text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg transition-all"
                >
                  <Link href="/book">Book a Call</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <DemoPopup isOpen={isDemoPopupOpen} onClose={() => setIsDemoPopupOpen(false)} />
    </div>
  )
}
