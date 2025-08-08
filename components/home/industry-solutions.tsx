"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Building, Stethoscope, Hammer, Utensils, Home, Car, Dumbbell, Briefcase } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const industries = [
  { name: 'Real Estate', icon: Home, image: '/realtor-showing-house.png', href: '/realtornow' },
  { name: 'Healthcare', icon: Stethoscope, image: '/doctor-office.png', href: '/medspanow' },
  { name: 'Construction', icon: Hammer, image: '/construction-site.png', href: '/contractorsnow' },
  { name: 'Restaurants', icon: Utensils, image: '/modern-restaurant-interior.png', href: '/restaurantsnow' },
  { name: 'Auto Dealers', icon: Car, image: '/modern-car-dealership.png', href: '/autodealersnow' },
  { name: 'Gyms', icon: Dumbbell, image: '/modern-gym.png', href: '/gymsnow' },
  { name: 'Law Firms', icon: Briefcase, image: '/classic-law-office.png', href: '/lawyersnow' },
]

export function IndustrySolutions() {
  const [hoveredIndustry, setHoveredIndustry] = useState(industries[0])

  return (
    <section className="py-20 sm:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Tailored AI Solutions for
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> Your Industry</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            SuccessNOW AI is not a one-size-fits-all solution. We provide specialized AI models and workflows trained for the unique challenges of your industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            className="relative w-full h-96 rounded-2xl overflow-hidden border border-purple-500/30"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence>
              <motion.div
                key={hoveredIndustry.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={hoveredIndustry.image || "/placeholder.svg"}
                  alt={hoveredIndustry.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-3xl font-bold text-white">{hoveredIndustry.name}</h3>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {industries.map((industry) => (
              <Link href={industry.href} key={industry.name}>
                <Card
                  onMouseEnter={() => setHoveredIndustry(industry)}
                  className={`text-center h-full p-6 cursor-pointer transition-all duration-300 border backdrop-blur-sm flex flex-col items-center justify-center ${
                    hoveredIndustry.name === industry.name
                      ? 'bg-purple-900/30 border-purple-500/50 scale-105'
                      : 'bg-gray-900/20 border-gray-800 hover:border-purple-700/30'
                  }`}
                >
                  <CardContent className="p-0">
                    <industry.icon className="w-8 h-8 mb-3 text-purple-400 mx-auto" />
                    <span className="font-semibold text-white">{industry.name}</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
            <Link href="/industries">
              <Card className="text-center h-full p-6 cursor-pointer transition-all duration-300 border bg-gray-900/20 border-gray-800 hover:border-purple-700/30 flex flex-col items-center justify-center">
                <CardContent className="p-0">
                  <Building className="w-8 h-8 mb-3 text-gray-500 mx-auto" />
                  <span className="font-semibold text-gray-400">And more...</span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link href="/industries">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/20">
              Explore All Industries
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
