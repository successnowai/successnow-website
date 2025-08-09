"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

            <Link href="/industries" className="text-white hover:text-[#00BFFF] transition-colors">
              Industries
            </Link>

            <Link href="/demo" className="text-white hover:text-[#00BFFF] transition-colors">
              Demo
            </Link>

            <Link href="/signup" className="text-white hover:text-[#00BFFF] transition-colors">
              Pricing
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

              <Link
                href="/industries"
                className="block px-3 py-2 text-white hover:text-[#00BFFF] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Industries
              </Link>

              <Link
                href="/demo"
                className="block px-3 py-2 text-white hover:text-[#00BFFF] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Demo
              </Link>

              <Link
                href="/signup"
                className="block px-3 py-2 text-white hover:text-[#00BFFF] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
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
