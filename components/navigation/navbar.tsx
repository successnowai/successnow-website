"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
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
        isScrolled ? "bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              SuccessNOW
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
              About
            </Link>

            {/* Industries Dropdown */}
            <div className="relative">
              <div className="flex items-center">
                <Link href="/industries" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Industries
                </Link>
                <button
                  onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                  className="ml-1 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {isIndustriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-xl border border-purple-500/20 py-2 z-50">
                  {industries.map((industry) => (
                    <Link
                      key={industry.href}
                      href={industry.href}
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors duration-200"
                      onClick={() => setIsIndustriesOpen(false)}
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors duration-200">
              Pricing
            </Link>
            <Link href="/demo" className="text-gray-300 hover:text-white transition-colors duration-200">
              Demo
            </Link>
            <Link href="/faq" className="text-gray-300 hover:text-white transition-colors duration-200">
              FAQ
            </Link>
            <Link href="/affiliate" className="text-gray-300 hover:text-white transition-colors duration-200">
              Affiliate
            </Link>
            <Link href="/blogs" className="text-gray-300 hover:text-white transition-colors duration-200">
              Blog
            </Link>
            <Link href="/book" className="text-gray-300 hover:text-white transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
            >
              <Link href="https://signup.successnow.ai" target="_blank">
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300 hover:text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-purple-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/industries"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Industries
              </Link>
              <Link
                href="/pricing"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/demo"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Demo
              </Link>
              <Link
                href="/faq"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/affiliate"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Affiliate
              </Link>
              <Link
                href="/blogs"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/book"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                >
                  <Link href="https://signup.successnow.ai" target="_blank">
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
