"use client"

import { useState } from "react"
import Link from "next/link"

export default function Footer() {
  const [isPartnerHovered, setIsPartnerHovered] = useState(false)

  return (
    <footer className="bg-black border-t border-gray-800">
      {/* Partner Program Mini Section */}
      <div className="bg-gray-900/30 py-12 px-4 sm:px-6 lg:px-8">
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
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <img src="/images/successnow-logo.png" alt="SuccessNOW" className="h-8 w-auto mr-3" />
                <span className="text-xl font-bold text-white">SuccessNOW</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                AI Superagents that convert, book, and nurture leads 24/7 — while you get back your time. Never lose a
                lead again.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/features" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/industries" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Industries
                  </a>
                </li>
                <li>
                  <a href="/demo" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Live Demo
                  </a>
                </li>
                <li>
                  <a href="/community" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© 2024 SuccessNOW. All rights reserved.</p>
              <p className="text-gray-400 text-sm mt-2 md:mt-0">Powered by AI • Built for Success</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
