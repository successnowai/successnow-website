"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  const industryLinks = [
    { name: "Restaurants", href: "/restaurantsnow" },
    { name: "Real Estate", href: "/realtornow" },
    { name: "Auto Dealers", href: "/autodealersnow" },
    { name: "Gyms & Fitness", href: "/gymsnow" },
    { name: "Lawyers", href: "/lawyersnow" },
    { name: "Contractors", href: "/contractorsnow" },
    { name: "Chiropractors", href: "/chiropractorsnow" },
    { name: "Med Spas", href: "/medspanow" },
    { name: "HVAC", href: "/hvacnow" },
    { name: "Plumbers", href: "/plumbersnow" },
    { name: "Roofers", href: "/roofersnow" },
    { name: "Solar", href: "/solarnow" },
    { name: "Mortgage", href: "/mortgagenow" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-white">Success</span>
              <span className="text-[#00BFFF]">NOW</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/demo"
              className={`text-sm font-medium transition-colors hover:text-[#00BFFF] ${
                isActive("/demo") ? "text-[#00BFFF]" : "text-white"
              }`}
            >
              Live Demo
            </Link>

            {/* Industries Dropdown */}
            <div className="relative group">
              <Link
                href="/industries"
                className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-[#00BFFF] ${
                  pathname.includes("/industries") || 
                  industryLinks.some(link => pathname === link.href)
                    ? "text-[#00BFFF]" 
                    : "text-white"
                }`}
              >
                <span>Industries</span>
                <ChevronDown className="w-4 h-4" />
              </Link>
              
              <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="grid grid-cols-2 gap-1 p-4">
                  {industryLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2 text-sm text-gray-300 hover:text-[#00BFFF] hover:bg-white/5 rounded transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/signup"
              className={`text-sm font-medium transition-colors hover:text-[#00BFFF] ${
                isActive("/signup") ? "text-[#00BFFF]" : "text-white"
              }`}
            >
              Pricing
            </Link>

            <Link
              href="/adsnow"
              className={`text-sm font-medium transition-colors hover:text-[#00BFFF] ${
                isActive("/adsnow") ? "text-[#00BFFF]" : "text-white"
              }`}
            >
              AdsNOW
            </Link>

            <Link
              href="/blogs"
              className={`text-sm font-medium transition-colors hover:text-[#00BFFF] ${
                isActive("/blogs") ? "text-[#00BFFF]" : "text-white"
              }`}
            >
              Blog
            </Link>

            <Button
              asChild
              className="bg-gradient-to-r from-[#00BFFF] to-purple-600 hover:from-[#00BFFF]/80 hover:to-purple-600/80 text-white font-semibold px-6 py-2 rounded-full transition-all duration-200"
            >
              <Link href="/book">Book Consult</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#00BFFF] transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/demo"
                className={`block px-3 py-2 text-base font-medium transition-colors hover:text-[#00BFFF] ${
                  isActive("/demo") ? "text-[#00BFFF]" : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Live Demo
              </Link>

              <Link
                href="/industries"
                className={`block px-3 py-2 text-base font-medium transition-colors hover:text-[#00BFFF] ${
                  isActive("/industries") ? "text-[#00BFFF]" : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Industries
              </Link>

              <Link
                href="/signup"
                className={`block px-3 py-2 text-base font-medium transition-colors hover:text-[#00BFFF] ${
                  isActive("/signup") ? "text-[#00BFFF]" : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>

              <Link
                href="/adsnow"
                className={`block px-3 py-2 text-base font-medium transition-colors hover:text-[#00BFFF] ${
                  isActive("/adsnow") ? "text-[#00BFFF]" : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                AdsNOW
              </Link>

              <Link
                href="/blogs"
                className={`block px-3 py-2 text-base font-medium transition-colors hover:text-[#00BFFF] ${
                  isActive("/blogs") ? "text-[#00BFFF]" : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>

              <div className="px-3 py-2">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-[#00BFFF] to-purple-600 hover:from-[#00BFFF]/80 hover:to-purple-600/80 text-white font-semibold px-6 py-2 rounded-full transition-all duration-200"
                >
                  <Link href="/book" onClick={() => setIsOpen(false)}>
                    Book Consult
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
