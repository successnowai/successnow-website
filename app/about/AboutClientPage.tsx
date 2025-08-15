"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import StarryBackground from "@/components/ui/starry-background"
import {
  Quote,
  User,
  Phone,
  Building2,
  Car,
  Dumbbell,
  Zap,
  Target,
  MessageSquare,
  BarChart3,
  Users,
  Bolt,
} from "lucide-react"
import Link from "next/link"
import { AboutFAQ } from "@/components/faq/about-faq"
import { VoiceSnippetPlayer } from "@/components/voice/voice-snippet-player"
import { StructuredData, generateWebPageSchema } from "@/components/seo/enhanced-structured-data"

const AboutClientPage = () => {
  const aboutPageSchema = generateWebPageSchema(
    "About SuccessNOW.ai - The Story Behind AI Super Agents",
    "Learn the inspiring story of SuccessNOW.ai founder John Potvin and how decades of sales expertise became the foundation for revolutionary AI Super Agents that transform business automation globally.",
    "https://successnow.ai/about",
    [
      { name: "Founder Story", voiceData: undefined },
      { name: "Company Mission", voiceData: undefined },
      { name: "Innovation Vision", voiceData: undefined },
      { name: "Career Journey", voiceData: undefined },
      { name: "What Makes Us Different", voiceData: undefined },
    ],
  )

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <StarryBackground />

      <StructuredData schema={aboutPageSchema} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "John Potvin",
            jobTitle: "Founder & CEO",
            worksFor: {
              "@type": "Organization",
              name: "SuccessNOW.ai",
              url: "https://successnow.ai",
            },
            description:
              "Sales innovator and AI visionary who founded SuccessNOW.ai to democratize advanced AI business automation through AI Super Agents.",
            knowsAbout: [
              "Artificial Intelligence",
              "Sales Automation",
              "Business Growth",
              "Lead Generation",
              "Customer Relationship Management",
              "AI Agent Development",
            ],
          }),
        }}
      />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-8 px-6 py-2 text-sm font-medium border-cyan-400/30 text-cyan-400 bg-cyan-400/10 hover:border-pink-500/50 hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-300"
            >
              About SuccessNOW.ai
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">The SuccessNOW.ai Story</h1>

            <p className="text-xl md:text-2xl text-cyan-400 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
              From Door-to-Door Hustle to AI-Powered Global Automation
            </p>

            <VoiceSnippetPlayer
              text="Learn the inspiring story of SuccessNOW.ai - from founder John Potvin's door-to-door sales beginnings to creating AI Super Agents that revolutionize business automation globally. Discover how decades of sales expertise became the foundation for the most advanced AI business platform."
              category="about-hero"
              variant="compact"
            />
          </div>
        </section>

        {/* Words from Our Founder */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">Words from Our Founder</h2>

            <div className="text-center mb-16">
              <VoiceSnippetPlayer
                text="Hear directly from John Potvin, founder of SuccessNOW.ai, about our mission to deploy AI Super Agents that never miss a lead and transform how businesses operate in the AI era."
                category="founder-intro"
                variant="inline"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Company Mission Quote */}
              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center text-white text-2xl font-bold transition-all duration-300">
                      <Quote className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Company Mission</h3>
                    </div>
                  </div>

                  <blockquote className="text-gray-300 text-lg italic leading-relaxed mb-6">
                    "AI isn't coming — it's here. Deploy your AI Super Agents NOW... and never miss another lead."
                  </blockquote>

                  <p className="text-cyan-400 font-medium group-hover:text-pink-400 transition-colors duration-300 mb-4">
                    — John Potvin, Founder
                  </p>

                  <VoiceSnippetPlayer
                    text="AI isn't coming — it's here. Deploy your AI Super Agents NOW and never miss another lead. This is the core mission driving SuccessNOW.ai's revolutionary approach to business automation."
                    category="mission-quote"
                    variant="inline"
                  />
                </CardContent>
              </Card>

              {/* Innovation Panel Quote */}
              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center text-white text-2xl font-bold transition-all duration-300">
                      <Quote className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        AI Innovation Business International Panel - Innovation Canada
                      </h3>
                    </div>
                  </div>

                  <blockquote className="text-gray-300 text-lg italic leading-relaxed mb-6">
                    "The future of software, and AI, is never having to log in, learn or have to manually use software
                    again! AI is here, it's not coming, adapt or get left behind!"
                  </blockquote>

                  <p className="text-cyan-400 font-medium group-hover:text-pink-400 transition-colors duration-300 mb-4">
                    — John Potvin
                  </p>

                  <VoiceSnippetPlayer
                    text="The future of software and AI is never having to log in, learn or manually use software again! AI is here, it's not coming - adapt or get left behind. This vision from Innovation Canada's AI panel drives our autonomous AI agent development."
                    category="innovation-quote"
                    variant="inline"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Meet John Potvin */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Meet John Potvin</h2>

                <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-8">
                  <p>
                    SuccessNOW.ai was founded by John Potvin, a lifelong sales innovator whose career journey reads like
                    a masterclass in resilience, reinvention, and relentless optimization.
                  </p>

                  <p>
                    John's career began in the trenches — door-to-door and call center sales, mastering timeless
                    principles from Zig Ziglar, Dale Carnegie, Robert Cialdini, and Robert Greene. These foundations in
                    human nature, persuasion, and consultative selling were later amplified by modern business growth
                    frameworks from Russell Brunson and Alex Hormozi.
                  </p>
                </div>

                <VoiceSnippetPlayer
                  text="Meet John Potvin, founder of SuccessNOW.ai - a lifelong sales innovator whose journey from door-to-door sales to AI Super Agents represents a masterclass in resilience and optimization. Learn how he mastered principles from Zig Ziglar, Dale Carnegie, Robert Cialdini, and Robert Greene, then amplified them with modern frameworks from Russell Brunson and Alex Hormozi to create revolutionary AI business solutions."
                  category="john-potvin-bio"
                  variant="compact"
                />
              </div>

              <div className="flex justify-center">
                <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group p-8 text-center max-w-sm">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center text-white mx-auto mb-6 transition-all duration-300">
                    <User className="w-12 h-12" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">John Potvin</h3>
                  <p className="text-cyan-400 font-medium mb-4 group-hover:text-pink-400 transition-colors duration-300">
                    Founder & CEO
                  </p>
                  <p className="text-gray-400 text-sm">Sales Innovator • AI Visionary • Business Growth Expert</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Career Journey */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Career Journey</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Early Career */}
              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center transition-all duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <Badge
                      variant="outline"
                      className="border-cyan-400/30 text-cyan-400 bg-cyan-400/10 group-hover:border-pink-500/50 group-hover:text-pink-400 group-hover:bg-pink-500/10 transition-all duration-300"
                    >
                      Early Career
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">Door-to-Door & Call Center Sales</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Mastered timeless principles from Zig Ziglar, Dale Carnegie, Robert Cialdini, and Robert Greene
                  </p>
                </CardContent>
              </Card>

              {/* Early 20s */}
              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center transition-all duration-300">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <Badge
                      variant="outline"
                      className="border-cyan-400/30 text-cyan-400 bg-cyan-400/10 group-hover:border-pink-500/50 group-hover:text-pink-400 group-hover:bg-pink-500/10 transition-all duration-300"
                    >
                      Early 20s
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">Director of Franchising & Sales</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Rose to leadership at national Rogers franchise group
                  </p>
                </CardContent>
              </Card>

              {/* Automotive Era */}
              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center transition-all duration-300">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                    <Badge
                      variant="outline"
                      className="border-cyan-400/30 text-cyan-400 bg-cyan-400/10 group-hover:border-pink-500/50 group-hover:text-pink-400 group-hover:bg-pink-500/10 transition-all duration-300"
                    >
                      Automotive Era
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">Finance Manager & Trainer</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Specialized in high-performance subprime departments, building bulletproof systems
                  </p>
                </CardContent>
              </Card>

              {/* Entrepreneurship */}
              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group md:col-span-2 lg:col-span-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center transition-all duration-300">
                      <Dumbbell className="w-6 h-6 text-white" />
                    </div>
                    <Badge
                      variant="outline"
                      className="border-cyan-400/30 text-cyan-400 bg-cyan-400/10 group-hover:border-pink-500/50 group-hover:text-pink-400 group-hover:bg-pink-500/10 transition-all duration-300"
                    >
                      Entrepreneurship
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">Franchise Gym Chain</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Scaled martial arts and fitness gyms to <span className="text-cyan-400 font-bold">$100K MRR</span>{" "}
                    in 6 months
                  </p>
                </CardContent>
              </Card>

              {/* AI Revolution */}
              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group md:col-span-2 lg:col-span-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center transition-all duration-300">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <Badge
                      variant="outline"
                      className="border-cyan-400/30 text-cyan-400 bg-cyan-400/10 group-hover:border-pink-500/50 group-hover:text-pink-400 group-hover:bg-pink-500/10 transition-all duration-300"
                    >
                      AI Revolution
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">SuccessNOW.ai Founder</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Created AI Super Agents to scale proven systems globally
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The Turning Point */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">The Turning Point</h2>

            <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 p-8 md:p-12">
              <div className="text-center space-y-6">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                  John realized that the only limitation to helping more businesses was his own time. He couldn't be
                  everywhere at once — but AI could.
                </p>

                <p className="text-lg md:text-xl text-cyan-400 leading-relaxed font-medium mb-8">
                  Out of this vision, SuccessNOW.ai was born: a platform where his meticulously refined systems could be
                  deployed instantly for any business in any niche.
                </p>

                <VoiceSnippetPlayer
                  text="The turning point came when John realized the only limitation to helping more businesses was his own time. He couldn't be everywhere at once, but AI could. This vision birthed SuccessNOW.ai - a platform where meticulously refined sales systems could be deployed instantly for any business in any niche through AI Super Agents."
                  category="turning-point"
                  variant="compact"
                />
              </div>
            </Card>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Our Mission</h2>

                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  To give every business — from small local service providers to enterprise-level agencies — access to
                  AI Super Agents that work <span className="text-cyan-400 font-bold">24/7</span>, never miss a
                  follow-up, and deliver personalized, high-converting customer experiences.
                </p>

                <VoiceSnippetPlayer
                  text="Our mission is to give every business - from small local service providers to enterprise-level agencies - access to AI Super Agents that work 24/7, never miss a follow-up, and deliver personalized, high-converting customer experiences. We're democratizing advanced AI business automation for companies of all sizes."
                  category="our-mission"
                  variant="compact"
                />
              </div>

              <div className="flex justify-center">
                <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group p-8 text-center max-w-sm">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center text-white mx-auto mb-6 transition-all duration-300">
                    <Target className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">24/7 AI Workforce</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Never miss a lead, never miss a follow-up, never miss an opportunity
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">
              What Makes SuccessNOW.ai Different
            </h2>

            <p className="text-xl text-gray-300 text-center mb-8 max-w-4xl mx-auto">
              Our AI agents aren't just "chatbots." They are trained digital employees that:
            </p>

            <div className="text-center mb-12">
              <VoiceSnippetPlayer
                text="What makes SuccessNOW.ai different? Our AI agents aren't just chatbots - they are trained digital employees that learn your business and clients, update CRM automatically, handle voice and chat conversations, and adapt with every interaction. They're true AI Super Agents that work like experienced team members."
                category="what-makes-different"
                variant="compact"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center transition-all duration-300">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Learn Your Business & Clients</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Reviewing CRM history (human + AI notes) before every interaction
                  </p>
                  <VoiceSnippetPlayer
                    text="Our AI agents learn your business and clients by reviewing CRM history, including both human and AI notes, before every interaction to provide personalized, informed customer experiences."
                    category="learn-business"
                    variant="inline"
                  />
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center transition-all duration-300">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Update CRM Automatically</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Logging detailed notes, follow-up tasks, and client preferences
                  </p>
                  <VoiceSnippetPlayer
                    text="AI agents automatically update your CRM by logging detailed notes, follow-up tasks, and client preferences, ensuring no information is lost and every interaction builds on previous conversations."
                    category="update-crm"
                    variant="inline"
                  />
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center transition-all duration-300">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Handle Voice & Chat Conversations</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Talking to customers on your website or over the phone in real time
                  </p>
                  <VoiceSnippetPlayer
                    text="Our AI agents handle both voice and chat conversations, talking to customers on your website or over the phone in real time with natural, human-like interactions that convert prospects into customers."
                    category="voice-chat"
                    variant="inline"
                  />
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-purple-600 flex items-center justify-center transition-all duration-300">
                      <Bolt className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Adapt With Every Interaction</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Becoming smarter, more personalized, and more effective over time
                  </p>
                  <VoiceSnippetPlayer
                    text="AI Super Agents adapt with every interaction, becoming smarter, more personalized, and more effective over time. They learn from each conversation to continuously improve their performance and customer relationships."
                    category="adapt-interaction"
                    variant="inline"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Global Impact */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Global Impact</h2>

            <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 p-8 md:p-12 mb-12">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                Today, SuccessNOW.ai operates globally, empowering businesses in the U.S. and Canada to scale faster,
                work smarter, and deliver customer experiences that feel deeply personal — at AI speed.
              </p>

              <div className="mb-8">
                <VoiceSnippetPlayer
                  text="Today, SuccessNOW.ai operates globally, empowering businesses in the U.S. and Canada to scale faster, work smarter, and deliver customer experiences that feel deeply personal at AI speed. Our AI Super Agents are transforming how businesses operate worldwide."
                  category="global-impact"
                  variant="compact"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-pink-500 hover:to-purple-600 text-white px-8 py-3 shadow-[0_0_20px_rgba(0,191,255,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all duration-300"
                  asChild
                >
                  <Link href="/demo">
                    <Zap className="w-5 h-5 mr-2" />
                    See Live Demo
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-400/50 text-cyan-400 hover:bg-pink-500/10 hover:border-pink-500/50 hover:text-pink-400 px-8 py-3 bg-transparent hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all duration-300"
                  asChild
                >
                  <Link href="/signup">
                    <Target className="w-5 h-5 mr-2" />
                    Get Started Now
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </div>

      <AboutFAQ />
    </div>
  )
}

export default AboutClientPage
