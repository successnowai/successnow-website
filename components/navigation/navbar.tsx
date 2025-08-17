"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false)
  const [isCompetitorsOpen, setIsCompetitorsOpen] = useState(false)

  const industriesRef = useRef<HTMLDivElement>(null)
  const competitorsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (industriesRef.current && !industriesRef.current.contains(event.target as Node)) {
        setIsIndustriesOpen(false)
      }
      if (competitorsRef.current && !competitorsRef.current.contains(event.target as Node)) {
        setIsCompetitorsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleIndustries = () => {
    setIsIndustriesOpen(!isIndustriesOpen)
    setIsCompetitorsOpen(false) // Close competitors when opening industries
  }

  const toggleCompetitors = () => {
    setIsCompetitorsOpen(!isCompetitorsOpen)
    setIsIndustriesOpen(false) // Close industries when opening competitors
  }

  const industries = [
    { name: "Auto Dealers", href: "/industries/autodealers-now" },
    { name: "Chiropractors", href: "/industries/chiropractors-now" },
    { name: "Contractors", href: "/industries/contractors-now" },
    { name: "Dentists", href: "/industries/dentists-now" },
    { name: "Gyms", href: "/industries/gyms-now" },
    { name: "HVAC", href: "/industries/hvac-now" },
    { name: "Lawyers", href: "/industries/lawyers-now" },
    { name: "Med Spas", href: "/industries/medspa-now" },
    { name: "Mortgage", href: "/industries/mortgage-now" },
    { name: "Plumbers", href: "/industries/plumbers-now" },
    { name: "Realtors", href: "/industries/realtor-now" },
    { name: "Restaurants", href: "/industries/restaurants-now" },
    { name: "Roofers", href: "/industries/roofers-now" },
    { name: "Solar", href: "/industries/solar-now" },
  ]

  const competitors = [
    { name: "Lindy AI", href: "/competitors/lindy-ai" },
    { name: "JustCall", href: "/competitors/justcall" },
    { name: "Synthflow", href: "/competitors/synthflow" },
    { name: "Regal AI", href: "/competitors/regal-ai" },
    { name: "Resemble AI", href: "/competitors/resemble-ai" },
    { name: "Thinkrr.ai", href: "/competitors/thinkrr-ai" },
    { name: "HubSpot", href: "/competitors/hubspot" },
    { name: "Salesforce", href: "/competitors/salesforce" },
    { name: "Claude", href: "/competitors/claude" },
    { name: "ChatGPT", href: "/competitors/chatgpt" },
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
            <div className="relative" ref={industriesRef}>
              <div className="flex items-center">
                <Link href="/industries" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Industries
                </Link>
                <button
                  onClick={toggleIndustries}
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

            {/* Competitors Dropdown */}
            <div className="relative" ref={competitorsRef}>
              <div className="flex items-center">
                <Link href="/competitors" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Competitors
                </Link>
                <button
                  onClick={toggleCompetitors}
                  className="ml-1 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {isCompetitorsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-xl border border-purple-500/20 py-2 z-50 max-h-80 overflow-y-auto">
                  <Link
                    href="/competitors"
                    className="block px-4 py-2 text-cyan-300 hover:text-white hover:bg-slate-700 transition-colors duration-200 font-semibold border-b border-gray-700/50"
                    onClick={() => setIsCompetitorsOpen(false)}
                  >
                    All Comparisons
                  </Link>
                  {competitors.map((competitor) => (
                    <Link
                      key={competitor.href}
                      href={competitor.href}
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors duration-200"
                      onClick={() => setIsCompetitorsOpen(false)}
                    >
                      vs {competitor.name}
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
                href="/competitors"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Competitors
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
