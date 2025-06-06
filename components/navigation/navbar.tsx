"use client"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { DemoPopup } from "@/components/ui/demo-popup"

interface NavbarProps {
  currentPage?: string
}

export default function Navbar({ currentPage = "home" }: NavbarProps) {
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activePage, setActivePage] = useState(currentPage)
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false)

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

  const handleNavClick = (href: string, id: string) => {
    setIsMobileMenuOpen(false)

    // If it's the demo link, show the popup instead of direct navigation
    if (id === "demo") {
      setIsDemoPopupOpen(true)
      return
    }

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
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black border-b border-[#00BFFF]/10 shadow-lg shadow-[#00BFFF]/5">
        <div className="relative flex items-center justify-between px-4 sm:px-6 py-3 max-w-7xl mx-auto h-full">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2 group">
              <div className="text-lg sm:text-xl md:text-2xl">🚀</div>
              <span className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-[#00BFFF] to-white bg-clip-text text-transparent group-hover:from-white group-hover:to-[#00BFFF] transition-all duration-300">
                SuccessNOW
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href, item.id)}
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

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <button
              className="lg:hidden text-white p-1.5 z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-black border-b border-[#00BFFF]/10 lg:hidden shadow-xl z-50">
              <div className="px-4 sm:px-6 py-6 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.href, item.id)}
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

      {/* Demo Popup */}
      <DemoPopup isOpen={isDemoPopupOpen} onClose={() => setIsDemoPopupOpen(false)} />
    </>
  )
}
