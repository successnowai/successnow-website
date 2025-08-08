"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from 'lucide-react'

interface NavbarProps {
  currentPage?: string
}

export default function Navbar({ currentPage }: NavbarProps) {
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
    { name: "Custom Builders", href: "/custombuildnow" },
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
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-gray-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/successnow-logo.png"
              alt="SuccessNOW AI"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-white">SuccessNOW AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-[#00BFFF] ${
                currentPage === "home" ? "text-[#00BFFF]" : "text-gray-300"
              }`}
            >
              Home
            </Link>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowIndustries(true)}
              onMouseLeave={() => setShowIndustries(false)}
            >
              <button className="flex items-center text-sm font-medium text-gray-300 hover:text-[#00BFFF] transition-colors">
                Industries
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {showIndustries && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-800/50 py-2">
                  {industries.map((industry) => (
                    <Link
                      key={industry.name}
                      href={industry.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-[#00BFFF] hover:bg-gray-800/50 transition-colors"
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/adsnow"
              className={`text-sm font-medium transition-colors hover:text-[#00BFFF] ${
                currentPage === "adsnow" ? "text-[#00BFFF]" : "text-gray-300"
              }`}
            >
              AdsNOW
            </Link>

            <Link
              href="/diamond"
              className={`text-sm font-medium transition-colors hover:text-[#00BFFF] ${
                currentPage === "diamond" ? "text-[#00BFFF]" : "text-gray-300"
              }`}
            >
              Diamond Class
            </Link>

            <Link
              href="/affiliate"
              className={`text-sm font-medium transition-colors hover:text-[#00BFFF] ${
                currentPage === "affiliate" ? "text-[#00BFFF]" : "text-gray-300"
              }`}
            >
              Affiliate
            </Link>

            <Link href="/book">
              <Button className="bg-gradient-to-r from-[#00BFFF] to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                Book Consult
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className={`block px-3 py-2 text-base font-medium transition-colors hover:text-[#00BFFF] ${
                  currentPage === "home" ? "text-[#00BFFF]" : "text-gray-300"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/industries"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-[#00BFFF] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Industries
              </Link>

              <Link
                href="/adsnow"
                className={`block px-3 py-2 text-base font-medium transition-colors hover:text-[#00BFFF] ${
                  currentPage === "adsnow" ? "text-[#00BFFF]" : "text-gray-300"
                }`}
                onClick={() => setIsOpen(false)}
              >
                AdsNOW
              </Link>

              <Link
                href="/diamond"
                className={`block px-3 py-2 text-base font-medium transition-colors hover:text-[#00BFFF] ${
                  currentPage === "diamond" ? "text-[#00BFFF]" : "text-gray-300"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Diamond Class
              </Link>

              <Link
                href="/affiliate"
                className={`block px-3 py-2 text-base font-medium transition-colors hover:text-[#00BFFF] ${
                  currentPage === "affiliate" ? "text-[#00BFFF]" : "text-gray-300"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Affiliate
              </Link>

              <Link
                href="/book"
                className="block px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                <Button className="w-full bg-gradient-to-r from-[#00BFFF] to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-semibold py-2 rounded-full transition-all duration-300">
                  Book Consult
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
