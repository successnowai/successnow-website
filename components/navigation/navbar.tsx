"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

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
    { name: "Dentists", href: "/dentistsnow" },
    { name: "Gyms & Fitness", href: "/gymsnow" },
    { name: "HVAC", href: "/hvacnow" },
    { name: "Lawyers", href: "/lawyersnow" },
    { name: "Medspas", href: "/medspanow" },
    { name: "Mortgage", href: "/mortgagenow" },
    { name: "Plumbers", href: "/plumbersnow" },
    { name: "Real Estate", href: "/realtornow" },
    { name: "Restaurants", href: "/restaurantsnow" },
    { name: "Roofers", href: "/roofersnow" },
    { name: "Solar", href: "/solarnow" },
    { name: "Custom Build", href: "/custombuildnow" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0B1426]/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-white">
              Success<span className="text-[#00BFFF]">NOW</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-[#00BFFF] transition-colors">
              Home
            </Link>

            {/* Industries Dropdown */}
            <div className="relative">
              <Link
                href="/industries"
                className="flex items-center text-white hover:text-[#00BFFF] transition-colors"
                onMouseEnter={() => setIsIndustriesOpen(true)}
                onMouseLeave={() => setIsIndustriesOpen(false)}
              >
                Industries
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>

              {isIndustriesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-[#0B1426]/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl z-50"
                  onMouseEnter={() => setIsIndustriesOpen(true)}
                  onMouseLeave={() => setIsIndustriesOpen(false)}
                >
                  <div className="grid grid-cols-1 gap-1 p-2">
                    {industries.map((industry) => (
                      <Link
                        key={industry.name}
                        href={industry.href}
                        className="block px-4 py-2 text-sm text-white hover:text-[#00BFFF] hover:bg-white/5 rounded transition-colors"
                      >
                        {industry.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/pricing" className="text-white hover:text-[#00BFFF] transition-colors">
              Pricing
            </Link>
            <Link href="/community" className="text-white hover:text-[#00BFFF] transition-colors">
              Community
            </Link>
            <Button
              asChild
              className="bg-[#00BFFF] hover:bg-[#0099CC] text-white px-6 py-2 rounded-md transition-colors"
            >
              <Link href="https://signup.successnow.ai">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-[#00BFFF] transition-colors">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-[#0B1426]/95 backdrop-blur-md border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-white hover:text-[#00BFFF] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Industries */}
              <div className="px-3 py-2">
                <Link
                  href="/industries"
                  className="text-white hover:text-[#00BFFF] transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Industries
                </Link>
                <div className="mt-2 ml-4 space-y-1">
                  {industries.map((industry) => (
                    <Link
                      key={industry.name}
                      href={industry.href}
                      className="block py-1 text-sm text-gray-300 hover:text-[#00BFFF] transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/pricing"
                className="block px-3 py-2 text-white hover:text-[#00BFFF] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/community"
                className="block px-3 py-2 text-white hover:text-[#00BFFF] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Community
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-[#00BFFF] hover:bg-[#0099CC] text-white">
                  <Link href="https://signup.successnow.ai">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
