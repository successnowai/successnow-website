"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  currentPage?: string
}

export default function Navbar({ currentPage = "home" }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activePage, setActivePage] = useState(currentPage)

  // Update active page when currentPage prop changes
  useEffect(() => {
    setActivePage(currentPage)
  }, [currentPage])

  const navItems = [
    { name: "Home", href: "/", id: "home" },
    { name: "Features", href: "/features", id: "features" },
    { name: "Industries", href: "/industries", id: "industries" },
    { name: "Pricing", href: "/signup", id: "pricing" },
    { name: "Demo", href: "/demo", id: "demo" },
  ]

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)

    if (href.startsWith("/#")) {
      // Handle anchor links
      const sectionId = href.substring(2)
      if (window.location.pathname !== "/") {
        window.location.href = href
      } else {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    } else {
      // Handle regular page navigation
      window.location.href = href
    }
  }

  return (
    <nav
      className="fixed top-[70px] left-0 right-0 z-40 bg-black border-b border-[#00BFFF]/10 shadow-lg shadow-[#00BFFF]/5"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="relative flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2 group">
            <div className="text-2xl">🚀</div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#00BFFF] to-white bg-clip-text text-transparent group-hover:from-white group-hover:to-[#00BFFF] transition-all duration-300">
              SuccessNOW
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.href)}
              className={`relative text-sm font-medium transition-all duration-300 hover:text-[#00BFFF] group ${
                activePage === item.id ? "text-[#00BFFF]" : "text-gray-300"
              }`}
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00BFFF] to-transparent transition-all duration-300 group-hover:w-full ${
                  activePage === item.id ? "w-full" : ""
                }`}
              ></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button & CTA */}
        <div className="flex items-center space-x-3">
          <Button
            className="bg-gradient-to-r from-[#00BFFF] to-[#0099CC] text-white hover:from-[#0099CC] hover:to-[#00BFFF] font-bold px-6 py-2 text-sm rounded-full transition-all duration-300 hover:scale-105 border border-[#00BFFF]/20 navbar-cta-button"
            onClick={() => handleNavClick("/signup")}
          >
            Get AI Now
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="absolute top-full left-0 right-0 bg-black border-b border-[#00BFFF]/10 lg:hidden shadow-xl"
            style={{ backgroundColor: "#000000" }}
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left py-3 text-base font-medium transition-all duration-300 hover:text-[#00BFFF] hover:translate-x-2 ${
                    activePage === item.id ? "text-[#00BFFF]" : "text-gray-300"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
