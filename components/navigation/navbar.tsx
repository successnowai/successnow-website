"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false)
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const industries = [
    { name: "Real Estate", href: "/realtornow", description: "AI agents for realtors" },
    { name: "Auto Dealers", href: "/autodealersnow", description: "Convert car shoppers 24/7" },
    { name: "Healthcare", href: "/medspanow", description: "Patient booking & follow-up" },
    { name: "Legal Services", href: "/lawyersnow", description: "Client intake automation" },
    { name: "HVAC", href: "/hvacnow", description: "Service call automation" },
    { name: "Contractors", href: "/contractorsnow", description: "Project lead conversion" },
    { name: "Restaurants", href: "/restaurantsnow", description: "Reservation management" },
    { name: "Gyms & Fitness", href: "/gymsnow", description: "Membership lead nurturing" },
    { name: "Dentists", href: "/dentistsnow", description: "Appointment scheduling" },
    { name: "Chiropractors", href: "/chiropractorsnow", description: "Patient acquisition" },
    { name: "Plumbers", href: "/plumbersnow", description: "Emergency call handling" },
    { name: "Roofers", href: "/roofersnow", description: "Quote request automation" },
    { name: "Solar", href: "/solarnow", description: "Solar consultation booking" },
    { name: "Mortgage", href: "/mortgagenow", description: "Loan application assistance" },
    { name: "Custom Build", href: "/custombuildnow", description: "Custom industry solutions" },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsIndustriesOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleIndustriesClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsIndustriesOpen(!isIndustriesOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-white font-bold text-xl">SuccessNOW</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Industries Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={handleIndustriesClick}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Industries
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${isIndustriesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isIndustriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-md border border-white/20 rounded-lg shadow-xl z-50">
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-2">
                      {industries.map((industry) => (
                        <Link
                          key={industry.name}
                          href={industry.href}
                          className="block p-3 rounded-lg hover:bg-white/10 transition-colors"
                          onClick={() => setIsIndustriesOpen(false)}
                        >
                          <div className="font-medium text-white">{industry.name}</div>
                          <div className="text-sm text-gray-400">{industry.description}</div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <Link
                        href="/industries"
                        className="block p-3 rounded-lg hover:bg-white/10 transition-colors text-center"
                        onClick={() => setIsIndustriesOpen(false)}
                      >
                        <div className="font-medium text-pink-400">View All Industries →</div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/demo" className="text-gray-300 hover:text-white transition-colors">
              Live Demo
            </Link>
            <Link href="/signup" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors">
              Case Studies
            </Link>
            <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </Link>
            <Link
              href="https://my.successnow.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Community
            </Link>
            <Button
              asChild
              className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white"
            >
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white transition-colors">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md border-t border-white/10">
              {/* Mobile Industries */}
              <div>
                <button
                  onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  Industries
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isMobileIndustriesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isMobileIndustriesOpen && (
                  <div className="pl-4 space-y-1">
                    {industries.map((industry) => (
                      <Link
                        key={industry.name}
                        href={industry.href}
                        className="block px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                        onClick={() => {
                          setIsOpen(false)
                          setIsMobileIndustriesOpen(false)
                        }}
                      >
                        {industry.name}
                      </Link>
                    ))}
                    <Link
                      href="/industries"
                      className="block px-3 py-2 text-sm text-pink-400 hover:text-pink-300 transition-colors"
                      onClick={() => {
                        setIsOpen(false)
                        setIsMobileIndustriesOpen(false)
                      }}
                    >
                      View All Industries →
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/demo"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Live Demo
              </Link>
              <Link
                href="/signup"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/case-studies"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="/faq"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="https://my.successnow.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Community
              </Link>
              <div className="px-3 py-2">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white"
                >
                  <Link href="/signup" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
