"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  currentPage?: string
}

export default function Navbar({ currentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Placeholder to prevent layout shift */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#00BFFF] to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🚀</span>
              </div>
              <span className="text-white font-bold text-xl">SuccessNOW</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <div className="w-20 h-4 bg-gray-700 rounded animate-pulse"></div>
              <div className="w-20 h-4 bg-gray-700 rounded animate-pulse"></div>
              <div className="w-20 h-4 bg-gray-700 rounded animate-pulse"></div>
              <div className="w-20 h-4 bg-gray-700 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Industries", href: "/industries" },
    { name: "Pricing", href: "/signup" },
    { name: "Demo", href: "/demo" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Always visible */}
          <Link
            href="/"
            className="flex items-center space-x-2 opacity-100 transition-opacity duration-200 hover:opacity-80"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-[#00BFFF] to-cyan-400 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">🚀</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">SuccessNOW</span>
          </Link>

          {/* Desktop Navigation - Always visible */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all duration-200 px-3 py-2 rounded-md relative group ${
                  currentPage === item.name.toLowerCase()
                    ? "text-[#00BFFF] bg-[#00BFFF]/10"
                    : "text-gray-200 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.name}
                {/* Active indicator */}
                {currentPage === item.name.toLowerCase() && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#00BFFF] rounded-full"></div>
                )}
              </Link>
            ))}

            {/* Call Now Button */}
            <a
              href="tel:+18666125353"
              className="bg-gradient-to-r from-[#00BFFF] to-cyan-400 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:from-[#00BFFF]/90 hover:to-cyan-400/90 shadow-lg hover:shadow-[#00BFFF]/25 glow-blue"
            >
              Call Now
            </a>
          </div>

          {/* Mobile menu button - Always visible */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-white hover:bg-white/10 p-2 transition-all duration-200"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Conditionally visible */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-800/50 bg-black/98 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 text-base font-medium transition-all duration-200 rounded-md ${
                    currentPage === item.name.toLowerCase()
                      ? "text-[#00BFFF] bg-[#00BFFF]/10 border-l-2 border-[#00BFFF]"
                      : "text-gray-200 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Call Now Button */}
              <a
                href="tel:+18666125353"
                className="block mx-4 mt-2 bg-gradient-to-r from-[#00BFFF] to-cyan-400 text-white px-4 py-3 rounded-md text-base font-medium transition-all duration-200 hover:from-[#00BFFF]/90 hover:to-cyan-400/90 shadow-lg hover:shadow-[#00BFFF]/25 text-center glow-blue"
                onClick={() => setIsOpen(false)}
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
