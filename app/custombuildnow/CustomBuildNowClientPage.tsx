"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Zap, Clock, Shield, Headphones } from "lucide-react"
import { StarryBackground } from "@/components/ui/starry-background"

export default function CustomBuildNowClientPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const painPoints = [
    "Struggling with generic solutions that don't fit your unique business model",
    "Wasting time on manual processes that could be automated",
    "Missing out on leads because you can't respond fast enough",
    "Competitors are getting ahead with better technology",
    "Your current systems don't talk to each other",
    "You need something specific that doesn't exist in the market",
  ]

  const solutions = [
    "Custom AI chatbots tailored to your exact business needs",
    "Automated workflows designed around your unique processes",
    "Integration with your existing tools and platforms",
    "Industry-specific features that generic solutions can't provide",
    "Scalable architecture that grows with your business",
    "Dedicated support throughout development and beyond",
  ]

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Custom Development",
      description: "Built from scratch to match your exact requirements",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security and compliance standards",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated Team",
      description: "Your own development team working exclusively on your project",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Rapid development with regular progress updates",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalable Solution",
      description: "Built to handle growth and evolving business needs",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Ongoing Support",
      description: "Continuous maintenance and feature updates",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Custom Manufacturing",
      text: "SuccessNOW built us a completely custom solution that automated our entire quote-to-delivery process. Nothing like this existed in the market.",
      rating: 5,
    },
    {
      name: "Mike Rodriguez",
      business: "Specialty Services",
      text: "They understood our unique business model and created an AI system that perfectly fits our workflow. Incredible results!",
      rating: 5,
    },
    {
      name: "Lisa Chen",
      business: "Niche Consulting",
      text: "The custom build approach was exactly what we needed. They delivered a solution that no off-the-shelf product could match.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StarryBackground />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-8">
                <span className="text-4xl mr-2">🛠️</span>
                <span className="text-sm font-medium text-gray-300">Custom AI Development</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Don't See Your Business?{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  We'll Build It Custom
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Every business is unique. If our existing solutions don't fit your specific needs, our expert team will
                design and develop a completely custom AI automation system tailored exactly to your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <Link href="/custombuildnow/signup">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                    Start Custom Build
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </button>
                </Link>
                <Link href="/demo">
                  <button className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                    See Demo First
                  </button>
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-400">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-purple-400" />
                  <span>500+ Custom Solutions Built</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
                  <span>Average 400% ROI</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-blue-400" />
                  <span>4-6 Week Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-16 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-8">Tired of One-Size-Fits-All Solutions?</h2>
                <div className="space-y-4">
                  {painPoints.map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Our Custom Approach</h3>
                <div className="space-y-4">
                  {solutions.map((solution, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">{solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Custom Development?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get exactly what you need, built specifically for your business processes and goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-purple-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Success Stories from Custom Builds</h2>
              <p className="text-xl text-gray-300">See how custom solutions transformed these unique businesses</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.business}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-12 border border-purple-500/20">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready for Your Custom Solution?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your unique requirements and build something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/custombuildnow/signup">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                    Start Your Custom Build
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </button>
                </Link>
                <Link href="/demo">
                  <button className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                    See Our Capabilities
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
