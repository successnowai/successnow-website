"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Industries", href: "/industries" },
    { name: "Live Demo", href: "/demo" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Pricing", href: "/pricing", external: false },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Text Only */}
          <Link href="/" className="flex items-baseline space-x-1 group">
            <span className="text-white font-bold text-xl md:text-2xl tracking-tight group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-lg">
              Success
            </span>
            <span className="text-cyan-400 font-bold text-xl md:text-2xl tracking-tight group-hover:text-pink-400 transition-colors duration-300 drop-shadow-lg">
              NOW
            </span>
            <span className="text-gray-400 font-medium text-sm md:text-base">.ai</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ),
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-pink-500 hover:to-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25">
                Get Started
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:text-cyan-400 transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) =>
                  item.external ? (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium px-4 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium px-4 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ),
                )}
                <div className="px-4 pt-4">
                  <a href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-pink-500 hover:to-purple-600 text-white py-2 rounded-lg font-semibold transition-all duration-300">
                      Get Started
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
