"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { usePathname } from 'next/navigation'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Industries", href: "/industries" },
    { name: "Pricing", href: "/signup" },
    { name: "Demo", href: "/demo" },
  ]

  const getPageName = (path: string) => {
    if (path === '/') return 'home'
    return path.split('/')[1]
  }

  const currentPage = getPageName(pathname)

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
               <Image src="/images/successnow-logo.png" alt="SuccessNOW AI Logo" width={32} height={32} />
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center space-x-2 opacity-100 transition-opacity duration-200 hover:opacity-80"
          >
            <Image src="/images/successnow-logo.png" alt="SuccessNOW AI Logo" width={32} height={32} />
            <span className="text-white font-bold text-xl tracking-tight">SuccessNOW</span>
          </Link>

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
                {currentPage === item.name.toLowerCase() && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#00BFFF] rounded-full"></div>
                )}
              </Link>
            ))}
            <a
              href="tel:+18666125353"
              className="bg-gradient-to-r from-[#00BFFF] to-cyan-400 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:from-[#00BFFF]/90 hover:to-cyan-400/90 shadow-lg hover:shadow-[#00BFFF]/25"
            >
              Call Now
            </a>
          </div>

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
              <a
                href="tel:+18666125353"
                className="block mx-4 mt-2 bg-gradient-to-r from-[#00BFFF] to-cyan-400 text-white px-4 py-3 rounded-md text-base font-medium transition-all duration-200 hover:from-[#00BFFF]/90 hover:to-cyan-400/90 shadow-lg text-center"
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
