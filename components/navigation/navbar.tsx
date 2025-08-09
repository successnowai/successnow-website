"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showIndustries, setShowIndustries] = useState(false)

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
    { name: "Custom Build", href: "/custombuildnow" },
    { name: "Dentists", href: "/dentistsnow" },
    { name: "Gyms", href: "/gymsnow" },
    { name: "HVAC", href: "/hvacnow" },
    { name: "Lawyers", href: "/lawyersnow" },
    { name: "Medspas", href: "/medspanow" },
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
        isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/successnow-logo.png"
              alt="SuccessNOW Logo"
              width={40}
              height={40}
              className="w-10 h-10"
              priority
            />
            <span className="text-white font-bold text-xl">SuccessNOW</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-[#00BFFF] transition-colors">
              Home
            </Link>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowIndustries(true)}
              onMouseLeave={() => setShowIndustries(false)}
            >
              <button className="text-white hover:text-[#00BFFF] transition-colors flex items-center space-x-1">
                <span>Industries</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {showIndustries && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-800 py-2 z-50">
                  <div className="grid grid-cols-1 gap-1">
                    {industries.map((industry) => (
                      <Link
                        key={industry.name}
                        href={industry.href}
                        className="px-4 py-2 text-gray-300 hover:text-[#00BFFF] hover:bg-gray-800/50 transition-colors"
                      >
                        {industry.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/demo" className="text-white hover:text-[#00BFFF] transition-colors">
              Demo
            </Link>
            <Link href="/blogs" className="text-white hover:text-[#00BFFF] transition-colors">
              Blog
            </Link>
            <Link href="/community" className="text-white hover:text-[#00BFFF] transition-colors">
              Community
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/signup">
              <Button className="bg-[#00BFFF] hover:bg-[#00A3D9] text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#00BFFF] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
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
                <span className="text-gray-400 text-sm font-medium">Industries</span>
                <div className="mt-2 space-y-1 pl-4">
                  {industries.slice(0, 8).map((industry) => (
                    <Link
                      key={industry.name}
                      href={industry.href}
                      className="block py-1 text-gray-300 hover:text-[#00BFFF] transition-colors text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {industry.name}
                    </Link>
                  ))}
                  <Link
                    href="/industries"
                    className="block py-1 text-[#00BFFF] hover:text-[#00A3D9] transition-colors text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    View All Industries →
                  </Link>
                </div>
              </div>

              <Link
                href="/demo"
                className="block px-3 py-2 text-white hover:text-[#00BFFF] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Demo
              </Link>
              <Link
                href="/blogs"
                className="block px-3 py-2 text-white hover:text-[#00BFFF] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/community"
                className="block px-3 py-2 text-white hover:text-[#00BFFF] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Community
              </Link>

              <div className="pt-4 pb-2">
                <Link href="/signup" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-[#00BFFF] hover:bg-[#00A3D9] text-white font-semibold py-2 rounded-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
