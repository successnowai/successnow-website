"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Car, Home, Wrench, Stethoscope, Briefcase, Utensils, Hammer, Sun } from "lucide-react"
import Link from "next/link"

export default function IndustrySolutions() {
  const industries = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Auto Dealers",
      description: "AI handles test drive bookings, financing questions, and inventory inquiries 24/7",
      link: "/autodealersnow",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Real Estate",
      description: "Qualify buyers, schedule showings, and nurture leads automatically",
      link: "/realtornow",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "HVAC & Plumbing",
      description: "Emergency calls, service bookings, and quote requests handled instantly",
      link: "/hvacnow",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Healthcare",
      description: "Appointment scheduling, insurance verification, and patient intake automation",
      link: "/dentistsnow",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Legal Services",
      description: "Case consultations, document requests, and client intake streamlined",
      link: "/lawyersnow",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Restaurants",
      description: "Reservations, catering orders, and customer service automated",
      link: "/restaurantsnow",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Contractors",
      description: "Project estimates, scheduling, and lead qualification on autopilot",
      link: "/contractorsnow",
      color: "from-gray-500 to-slate-500",
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Solar Companies",
      description: "Energy consultations, savings calculations, and installation bookings",
      link: "/solarnow",
      color: "from-amber-500 to-yellow-500",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-black to-slate-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Solutions for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Every Industry
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized AI agents trained for your specific business needs. Ready to deploy in minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group h-full">
                <CardContent className="p-6">
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${industry.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{industry.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{industry.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{industry.description}</p>
                  <Link href={industry.link}>
                    <Button
                      variant="ghost"
                      className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 p-0 h-auto font-semibold group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Don't See Your Industry?</h3>
          <p className="text-gray-400 mb-6">
            Our AI adapts to any business. Get a custom solution built for your specific needs.
          </p>
          <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-3">
              Get Custom AI Solution
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
