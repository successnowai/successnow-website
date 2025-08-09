"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const industries = [
    { name: "Auto Dealers", href: "/autodealersnow" },
    { name: "Chiropractors", href: "/chiropractorsnow" },
    { name: "Contractors", href: "/contractorsnow" },
    { name: "Custom Builders", href: "/custombuildnow" },
    { name: "Dentists", href: "/dentistsnow" },
    { name: "Gyms & Fitness", href: "/gymsnow" },
    { name: "HVAC", href: "/hvacnow" },
    { name: "Lawyers", href: "/lawyersnow" },
    { name: "Med Spas", href: "/medspanow" },
    { name: "Mortgage", href: "/mortgagenow" },
    { name: "Plumbers", href: "/plumbersnow" },
    { name: "Real Estate", href: "/realtornow" },
    { name: "Restaurants", href: "/restaurantsnow" },
    { name: "Roofers", href: "/roofersnow" },
    { name: "Solar", href: "/solarnow" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/successnow-logo.png"
              alt="SuccessNOW"
              width={32}
              height={32}
              className="h-8 w-auto mr-3"
              priority
            />
            <span className="text-xl font-bold text-white cyber-text-glow">SuccessNOW</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-200 hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link href="/demo" className="text-gray-200 hover:text-cyan-400 transition-colors font-medium">
              Live Demo
            </Link>

            {/* Industries Dropdown */}
            <div className="relative">
              <Link
                href="/industries"
                className="text-gray-200 hover:text-cyan-400 transition-colors font-medium flex items-center gap-1 touch-target"
                onMouseEnter={() => setIsIndustriesOpen(true)}
                onMouseLeave={() => setIsIndustriesOpen(false)}
              >
                Industries
                <ChevronDown className={`h-4 w-4 transition-transform ${isIndustriesOpen ? "rotate-180" : ""}`} />
              </Link>

              {isIndustriesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-md rounded-lg border border-white/10 shadow-xl z-50"
                  onMouseEnter={() => setIsIndustriesOpen(true)}
                  onMouseLeave={() => setIsIndustriesOpen(false)}
                >
                  <div className="grid grid-cols-1 gap-1 p-2">
                    {industries.map((industry) => (
                      <Link
                        key={industry.name}
                        href={industry.href}
                        className="text-gray-200 hover:text-cyan-400 hover:bg-white/5 transition-colors px-3 py-2 rounded text-sm touch-target"
                        onClick={() => setIsIndustriesOpen(false)}
                      >
                        {industry.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/signup" className="text-gray-200 hover:text-cyan-400 transition-colors font-medium">
              Pricing
            </Link>

            <Button
              asChild
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Link href="/book">Book Consult</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-cyan-400 transition-colors touch-target"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 rounded-b-lg">
            <div className="px-4 py-4 space-y-4">
              <Link
                href="/"
                className="block text-gray-200 hover:text-cyan-400 transition-colors font-medium py-2 touch-target"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/demo"
                className="block text-gray-200 hover:text-cyan-400 transition-colors font-medium py-2 touch-target"
                onClick={() => setIsOpen(false)}
              >
                Live Demo
              </Link>

              {/* Mobile Industries */}
              <div>
                <Link
                  href="/industries"
                  className="text-gray-200 hover:text-cyan-400 transition-colors font-medium flex items-center gap-1 py-2 touch-target"
                  onClick={() => {
                    setIsOpen(false)
                    setIsIndustriesOpen(false)
                  }}
                >
                  Industries
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isIndustriesOpen ? "rotate-180" : ""}`}
                    onClick={(e) => {
                      e.preventDefault()
                      setIsIndustriesOpen(!isIndustriesOpen)
                    }}
                  />
                </Link>

                {isIndustriesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {industries.map((industry) => (
                      <Link
                        key={industry.name}
                        href={industry.href}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1 touch-target"
                        onClick={() => {
                          setIsOpen(false)
                          setIsIndustriesOpen(false)
                        }}
                      >
                        {industry.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/signup"
                className="block text-gray-200 hover:text-cyan-400 transition-colors font-medium py-2 touch-target"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>

              <Button
                asChild
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-full transition-all duration-300 shadow-lg mt-4"
              >
                <Link href="/book" onClick={() => setIsOpen(false)}>
                  Book Consult
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
