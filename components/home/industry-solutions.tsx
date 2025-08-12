"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Car, Home, Wrench, Stethoscope, Scale, Utensils } from "lucide-react"
import Link from "next/link"

export default function IndustrySolutions() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const industries = [
    {
      icon: Car,
      title: "Auto Dealers",
      description: "AI that qualifies leads, schedules test drives, and follows up with prospects automatically.",
      link: "/autodealersnow",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Home,
      title: "Real Estate",
      description:
        "24/7 AI agent that qualifies buyers, schedules showings, and nurtures leads through the sales funnel.",
      link: "/realtornow",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Wrench,
      title: "Contractors",
      description: "AI that books estimates, qualifies projects, and follows up with homeowners automatically.",
      link: "/contractorsnow",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "AI receptionist that books appointments, answers questions, and manages patient communications.",
      link: "/dentistsnow",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Scale,
      title: "Legal Services",
      description: "AI that qualifies legal cases, schedules consultations, and nurtures potential clients.",
      link: "/lawyersnow",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Utensils,
      title: "Restaurants",
      description: "AI that takes reservations, answers menu questions, and manages customer communications.",
      link: "/restaurantsnow",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800" />

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Solutions for Every Industry</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get industry-specific AI that understands your business and speaks your customers' language.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${industry.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-full flex items-center justify-center mb-6`}
                >
                  <industry.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{industry.title}</h3>

                <p className="text-gray-300 mb-6 leading-relaxed">{industry.description}</p>

                <Link href={industry.link}>
                  <Button
                    variant="outline"
                    className={`w-full border-2 border-transparent bg-gradient-to-r ${industry.color} bg-clip-border text-white hover:scale-105 transition-all duration-300`}
                  >
                    Learn More
                    <ArrowRight
                      className={`ml-2 w-4 h-4 transition-transform duration-300 ${hoveredIndex === index ? "translate-x-1" : ""}`}
                    />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/industries">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
            >
              View All Industries
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
