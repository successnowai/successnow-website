"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)

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
    { name: "Dentists", href: "/dentistsnow" },
    { name: "Gyms", href: "/gymsnow" },
    { name: "HVAC", href: "/hvacnow" },
    { name: "Lawyers", href: "/lawyersnow" },
    { name: "Med Spas", href: "/medspanow" },
    { name: "Mortgage", href: "/mortgagenow" },
    { name: "Plumbers", href: "/plumbersnow" },
    { name: "Realtors", href: "/realtornow" },
    { name: "Restaurants", href: "/restaurantsnow" },
    { name: "Roofers", href: "/roofersnow" },
    { name: "Solar", href: "/solarnow" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Image
              src="/images/successnow-logo.png"
              alt="SuccessNOW"
              width={32}
              height={32}
              className="h-8 w-auto mr-3"
              priority
            />
            <span className="text-xl font-bold text-white">SuccessNOW</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Industries Dropdown */}
            <div className="relative">
              <button
                className="text-gray-200 hover:text-cyan-400 transition-colors flex items-center gap-1 touch-target"
                onMouseEnter={() => setIndustriesOpen(true)}
                onMouseLeave={() => setIndustriesOpen(false)}
                aria-label="Industries menu"
                aria-expanded={industriesOpen}
              >
                Industries
                <ChevronDown className="h-4 w-4" />
              </button>
              {industriesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-700 grid grid-cols-2 gap-1 p-4"
                  onMouseEnter={() => setIndustriesOpen(true)}
                  onMouseLeave={() => setIndustriesOpen(false)}
                >
                  {industries.map((industry) => (
                    <Link
                      key={industry.name}
                      href={industry.href}
                      className="text-gray-200 hover:text-cyan-400 transition-colors text-sm py-2 px-3 rounded hover:bg-gray-800/50 touch-target"
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/demo" className="text-gray-200 hover:text-cyan-400 transition-colors touch-target">
              Live Demo
            </Link>
            <Link href="/blogs" className="text-gray-200 hover:text-cyan-400 transition-colors touch-target">
              Blogs
            </Link>
            <Link href="/affiliate" className="text-gray-200 hover:text-cyan-400 transition-colors touch-target">
              Affiliate
            </Link>
            <Link href="/signup" className="text-gray-200 hover:text-cyan-400 transition-colors touch-target">
              Pricing
            </Link>

            <Button
              asChild
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl touch-target"
            >
              <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 transition-colors touch-target"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="border-b border-gray-700 pb-2 mb-2">
                <p className="text-gray-400 text-sm font-semibold px-3 py-2">Industries</p>
                <div className="grid grid-cols-2 gap-1 px-3">
                  {industries.map((industry) => (
                    <Link
                      key={industry.name}
                      href={industry.href}
                      className="text-gray-200 hover:text-cyan-400 transition-colors text-sm py-2 px-2 rounded hover:bg-gray-800/50 touch-target"
                      onClick={() => setIsOpen(false)}
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/demo"
                className="text-gray-200 hover:text-cyan-400 transition-colors block px-3 py-2 rounded-md text-base font-medium touch-target"
                onClick={() => setIsOpen(false)}
              >
                Live Demo
              </Link>
              <Link
                href="/blogs"
                className="text-gray-200 hover:text-cyan-400 transition-colors block px-3 py-2 rounded-md text-base font-medium touch-target"
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>
              <Link
                href="/affiliate"
                className="text-gray-200 hover:text-cyan-400 transition-colors block px-3 py-2 rounded-md text-base font-medium touch-target"
                onClick={() => setIsOpen(false)}
              >
                Affiliate
              </Link>
              <Link
                href="/signup"
                className="text-gray-200 hover:text-cyan-400 transition-colors block px-3 py-2 rounded-md text-base font-medium touch-target"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>

              <div className="pt-4">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-full transition-all duration-300 shadow-lg touch-target"
                >
                  <Link
                    href="https://signup.successnow.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
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
