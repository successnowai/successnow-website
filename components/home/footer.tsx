"use client"

import { useState } from "react"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react'
import ContactPopup from "@/components/ui/contact-popup"

export default function Footer() {
  const [isPartnerHovered, setIsPartnerHovered] = useState(false)
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false)

  return (
    <>
      <footer className="relative bg-black/20 backdrop-blur-md border-t border-white/10">
        {/* Partner Program Mini Section */}
        <div className="relative bg-gradient-to-r from-black/30 to-gray-900/30 backdrop-blur-sm py-12 px-4 sm:px-6 lg:px-8 border-b border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Refer Businesses &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Earn Monthly Recurring Revenue Forever
              </span>
            </h3>
            <p className="text-gray-300 text-base sm:text-lg mb-6 max-w-2xl mx-auto">
              Join our referral program and build passive income streams with multi-tier recurring commissions from
              businesses and agencies using SuccessNOW AI solutions.
            </p>
            <Link
              href="/affiliate"
              onMouseEnter={() => setIsPartnerHovered(true)}
              onMouseLeave={() => setIsPartnerHovered(false)}
              className={`
                inline-flex items-center justify-center
                px-6 py-3 text-base font-semibold rounded-lg
                transition-all duration-300
                ${
                  isPartnerHovered
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 scale-105"
                    : "bg-gradient-to-r from-cyan-400 to-blue-500"
                }
                text-white hover:shadow-lg hover:shadow-cyan-500/25
                focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900
              `}
            >
              <span className="mr-2">🤝</span>
              Start Referring Today
            </Link>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="relative py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center mb-4">
                  <img src="/images/successnow-logo.png" alt="SuccessNOW" className="h-8 w-auto mr-3" />
                  <span className="text-xl font-bold text-white">SuccessNOW</span>
                </div>
                <p className="text-gray-300 mb-6 max-w-md">
                  AI Superagents that convert, book, and nurture leads 24/7 — while you get back your time. Never lose a
                  lead again.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com/successnow" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                  >
                    <span className="sr-only">Facebook</span>
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://twitter.com/successnow" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                  >
                    <span className="sr-only">Twitter</span>
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/company/successnow" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://instagram.com/successnow" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                  >
                    <span className="sr-only">Instagram</span>
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://youtube.com/successnow" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                  >
                    <span className="sr-only">YouTube</span>
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/industries" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                      Industries
                    </Link>
                  </li>
                  <li>
                    <Link href="/demo" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                      Live Demo
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogs" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <a 
                      href="https://my.successnow.ai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                    >
                      Community
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://signup.successnow.ai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                    >
                      Get Started
                    </a>
                  </li>
                  <li>
                    <Link href="/affiliate" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                      Affiliate Program
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-white font-semibold mb-4 text-lg">Support</h3>
                <ul className="space-y-3">
                  <li>
                    <button 
                      onClick={() => setIsContactPopupOpen(true)}
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm text-left"
                    >
                      Contact Us
                    </button>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Other Brands */}
              <div>
                <h3 className="text-white font-semibold mb-4 text-lg">Our Brands</h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://devnow.ai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center"
                    >
                      DevNOW
                      <span className="ml-1 text-xs">↗</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://salesbotnow.ai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center"
                    >
                      SalesBotNOW
                      <span className="ml-1 text-xs">↗</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://adsnow.ai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center"
                    >
                      AdsNOW
                      <span className="ml-1 text-xs">↗</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://seoexperts.ai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center"
                    >
                      SEONOW
                      <span className="ml-1 text-xs">↗</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">© 2024 SuccessNOW. All rights reserved.</p>
                <p className="text-gray-400 text-sm mt-2 md:mt-0">Powered by AI • Built for Success</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Popup */}
      <ContactPopup 
        isOpen={isContactPopupOpen} 
        onClose={() => setIsContactPopupOpen(false)} 
      />
    </>
  )
}
