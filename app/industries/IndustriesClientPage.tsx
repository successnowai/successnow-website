"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Building, Stethoscope, Hammer, Utensils, Home, Car, Dumbbell, Briefcase, Banknote } from 'lucide-react'
import { Navbar } from "@/components/navigation/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RotatingText } from "@/components/ui/rotating-text"
import { useInView } from "@/hooks/use-intersection-observer"

const industries = [
  { name: 'Auto Dealers', icon: Car, image: '/modern-car-dealership.png', href: '/autodealersnow' },
  { name: 'Chiropractors', icon: Stethoscope, image: '/modern-chiropractor-office.png', href: '/chiropractorsnow' },
  { name: 'Contractors', icon: Hammer, image: '/construction-site-tools.png', href: '/contractorsnow' },
  { name: 'Dentists', icon: Stethoscope, image: '/modern-dental-clinic.png', href: '/dentistsnow' },
  { name: 'Gyms', icon: Dumbbell, image: '/state-of-the-art-gym.png', href: '/gymsnow' },
  { name: 'HVAC', icon: Hammer, image: '/hvac-installation.png', href: '/hvacnow' },
  { name: 'Lawyers', icon: Briefcase, image: '/modern-law-office.png', href: '/lawyersnow' },
  { name: 'Medspas', icon: Stethoscope, image: '/luxury-medspa-interior.png', href: '/medspanow' },
  { name: 'Mortgage', icon: Banknote, image: '/mortgage-broker-office.png', href: '/mortgagenow' },
  { name: 'Plumbers', icon: Hammer, image: '/plumbing-tools-pipes.png', href: '/plumbersnow' },
  { name: 'Realtors', icon: Home, image: '/realtor-showing-house.png', href: '/realtornow' },
  { name: 'Restaurants', icon: Utensils, image: '/fine-dining-restaurant.png', href: '/restaurantsnow' },
  { name: 'Roofers', icon: Hammer, image: '/roofer-on-house.png', href: '/roofersnow' },
  { name: 'Solar', icon: Building, image: '/solar-panels-roof.png', href: '/solarnow' },
]

export function IndustriesClientPage() {
  const { ref: heroRef } = useInView()
  const { ref: industriesRef } = useInView()
  const { ref: ctaRef } = useInView()
  const [hoveredIndustry, setHoveredIndustry] = useState(industries[0])

  const rotatingWords = ["Industries", "Businesses", "Sectors", "Markets", "Niches"]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0f1a] to-[#00274D] text-white relative">
      <div className="relative z-50">
        <Navbar currentPage="industries" />
      </div>

      <section
        ref={heroRef}
        className="relative z-10 text-center py-12 sm:py-16 px-4 sm:px-6 md:px-10 overflow-hidden pt-24"
      >
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="block text-white opacity-100">AI Solutions for Every</span>
            <span className="block opacity-100">
              <RotatingText words={rotatingWords} className="text-[#00BFFF]" interval={2500} />
            </span>
            <span className="block text-white opacity-100">we serve</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2 opacity-100">
            Discover how <strong className="text-white">SuccessNOW AI Superagents</strong> are transforming businesses
            across industries with automated lead generation, client acquisition, and growth systems.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 sm:mt-8 px-4 opacity-100">
            <Button
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-sm sm:text-base"
              onClick={() => document.getElementById("available-industries")?.scrollIntoView({ behavior: "smooth" })}
            >
              EXPLORE AVAILABLE SOLUTIONS →
            </Button>
            <Link href="/signup" passHref>
              <Button
                variant="outline"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-md hover:bg-[#00BFFF] hover:text-white transition-all duration-200 hover:scale-105 text-sm sm:text-base bg-transparent"
              >
                Get AI NOW
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00BFFF] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
      </section>

      <section id="available-industries" ref={industriesRef} className="relative z-10 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white opacity-100">
              🚀 Industry-Specific AI Solutions
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto opacity-100">
              Ready-to-deploy AI systems tailored for your industry's unique needs.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12">
            <motion.div
              className="lg:col-span-5 sticky top-24 h-[500px] hidden lg:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="relative w-full h-full rounded-2xl overflow-hidden border border-purple-500/30 bg-gray-900">
                <Image
                  src={hoveredIndustry.image || "/placeholder.svg"}
                  alt={hoveredIndustry.name}
                  fill
                  className="object-cover transition-all duration-500 ease-in-out"
                  key={hoveredIndustry.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white">{hoveredIndustry.name}</h3>
                  <p className="text-gray-300 mt-2">AI-driven growth for {hoveredIndustry.name.toLowerCase()}.</p>
                  <Link href={hoveredIndustry.href}>
                    <Button variant="outline" className="mt-4 border-white/50 text-white hover:bg-white/10">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {industries.map((industry) => (
                <Link href={industry.href} key={industry.name} passHref>
                  <Card
                    onMouseEnter={() => setHoveredIndustry(industry)}
                    className={`text-left p-4 cursor-pointer transition-all duration-300 border backdrop-blur-sm h-full flex flex-col justify-between ${
                      hoveredIndustry.name === industry.name
                        ? 'bg-purple-900/30 border-purple-500/50 scale-105'
                        : 'bg-gray-900/20 border-gray-800 hover:border-purple-700/30'
                    }`}
                  >
                    <CardContent className="p-0">
                      <industry.icon className="w-8 h-8 mb-3 text-purple-400" />
                      <h4 className="font-semibold text-white text-lg">{industry.name}</h4>
                      <p className="text-sm text-gray-400 mt-1">Automated solutions for {industry.name}.</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={ctaRef} className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center bg-[#00274D]/90 backdrop-blur-sm p-12 rounded-2xl border border-[#00BFFF]/30 shadow-2xl opacity-100">
          <h2 className="text-3xl font-bold mb-6 text-[#00BFFF] opacity-100">Ready to Transform Your Industry?</h2>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto opacity-100">
            Join successful businesses already using SuccessNOW AI to automate growth, generate leads, and close more
            sales — while getting back their time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-100">
            <Link href="/signup" passHref>
              <Button
                className="px-8 py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-base opacity-100"
              >
                Get AI NOW <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/demo" passHref>
              <Button
                variant="outline"
                className="px-8 py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-md hover:bg-[#00BFFF] hover:text-white transition-all duration-200 hover:scale-105 text-base bg-transparent opacity-100"
              >
                Launch Instant Demo NOW
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="relative z-10 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="text-center mt-12 opacity-100">
            <p className="text-gray-400 text-lg mb-4 opacity-100">
              Don't see your industry? Our AI demo can adapt to any business need.
            </p>
            <Link href="/demo" passHref>
              <Button
                variant="outline"
                className="border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-md hover:bg-[#00BFFF] hover:text-white transition-all duration-200 hover:scale-105 bg-transparent opacity-100"
              >
                Request Custom Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
