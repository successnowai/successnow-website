"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"

const Footer = () => {
  return (
    <footer
      className="relative py-20 px-4 border-t"
      style={{
        background: "rgba(5, 0, 15, 0.95)",
        backdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(14, 165, 233, 0.2)",
      }}
    >
      {/* Starry overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3
              className="text-2xl font-bold mb-6"
              style={{
                color: "white",
                textShadow: "0 0 10px rgba(14, 165, 233, 0.6)",
              }}
            >
              SuccessNOW
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              AI Superagents that convert, book, and nurture leads 24/7 — while you get back your time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/industries"
                  className="text-gray-300 hover:text-white transition-all duration-300"
                  style={{ textShadow: "0 0 0 transparent" }}
                  onMouseEnter={(e) => {
                    e.target.style.textShadow = "0 0 8px rgba(14, 165, 233, 0.6)"
                    e.target.style.color = "#0ea5e9"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textShadow = "0 0 0 transparent"
                    e.target.style.color = "#d1d5db"
                  }}
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-all duration-300"
                  style={{ textShadow: "0 0 0 transparent" }}
                  onMouseEnter={(e) => {
                    e.target.style.textShadow = "0 0 8px rgba(14, 165, 233, 0.6)"
                    e.target.style.color = "#0ea5e9"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textShadow = "0 0 0 transparent"
                    e.target.style.color = "#d1d5db"
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/demo"
                  className="text-gray-300 hover:text-white transition-all duration-300"
                  style={{ textShadow: "0 0 0 transparent" }}
                  onMouseEnter={(e) => {
                    e.target.style.textShadow = "0 0 8px rgba(14, 165, 233, 0.6)"
                    e.target.style.color = "#0ea5e9"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textShadow = "0 0 0 transparent"
                    e.target.style.color = "#d1d5db"
                  }}
                >
                  Live Demo
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-gray-300 hover:text-white transition-all duration-300"
                  style={{ textShadow: "0 0 0 transparent" }}
                  onMouseEnter={(e) => {
                    e.target.style.textShadow = "0 0 8px rgba(14, 165, 233, 0.6)"
                    e.target.style.color = "#0ea5e9"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textShadow = "0 0 0 transparent"
                    e.target.style.color = "#d1d5db"
                  }}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-gray-300 hover:text-white transition-all duration-300"
                  style={{ textShadow: "0 0 0 transparent" }}
                  onMouseEnter={(e) => {
                    e.target.style.textShadow = "0 0 8px rgba(14, 165, 233, 0.6)"
                    e.target.style.color = "#0ea5e9"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textShadow = "0 0 0 transparent"
                    e.target.style.color = "#d1d5db"
                  }}
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="https://my.successnow.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-all duration-300"
                  style={{ textShadow: "0 0 0 transparent" }}
                  onMouseEnter={(e) => {
                    e.target.style.textShadow = "0 0 8px rgba(217, 70, 239, 0.6)"
                    e.target.style.color = "#d946ef"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textShadow = "0 0 0 transparent"
                    e.target.style.color = "#d1d5db"
                  }}
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="text-gray-300 hover:text-white transition-all duration-300"
                  style={{ textShadow: "0 0 0 transparent" }}
                  onMouseEnter={(e) => {
                    e.target.style.textShadow = "0 0 8px rgba(14, 165, 233, 0.6)"
                    e.target.style.color = "#0ea5e9"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textShadow = "0 0 0 transparent"
                    e.target.style.color = "#d1d5db"
                  }}
                >
                  Get Started
                </Link>
              </li>
              <li>
                <Link
                  href="/affiliate"
                  className="text-gray-300 hover:text-white transition-all duration-300"
                  style={{ textShadow: "0 0 0 transparent" }}
                  onMouseEnter={(e) => {
                    e.target.style.textShadow = "0 0 8px rgba(14, 165, 233, 0.6)"
                    e.target.style.color = "#0ea5e9"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textShadow = "0 0 0 transparent"
                    e.target.style.color = "#d1d5db"
                  }}
                >
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="mailto:support@successnow.ai"
                  className="text-gray-300 hover:text-white transition-all duration-300"
                  style={{ textShadow: "0 0 0 transparent" }}
                  onMouseEnter={(e) => {
                    e.target.style.textShadow = "0 0 8px rgba(14, 165, 233, 0.6)"
                    e.target.style.color = "#0ea5e9"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textShadow = "0 0 0 transparent"
                    e.target.style.color = "#d1d5db"
                  }}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-white transition-all duration-300"
                  style={{ textShadow: "0 0 0 transparent" }}
                  onMouseEnter={(e) => {
                    e.target.style.textShadow = "0 0 8px rgba(14, 165, 233, 0.6)"
                    e.target.style.color = "#0ea5e9"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textShadow = "0 0 0 transparent"
                    e.target.style.color = "#d1d5db"
                  }}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-white transition-all duration-300"
                  style={{ textShadow: "0 0 0 transparent" }}
                  onMouseEnter={(e) => {
                    e.target.style.textShadow = "0 0 8px rgba(14, 165, 233, 0.6)"
                    e.target.style.color = "#0ea5e9"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textShadow = "0 0 0 transparent"
                    e.target.style.color = "#d1d5db"
                  }}
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Brands */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Brands</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://devnow.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-all duration-300"
                  style={{ textShadow: "0 0 0 transparent" }}
                  onMouseEnter={(e) => {
                    e.target.style.textShadow = "0 0 8px rgba(14, 165, 233, 0.6)"
                    e.target.style.color = "#0ea5e9"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textShadow = "0 0 0 transparent"
                    e.target.style.color = "#d1d5db"
                  }}
                >
                  DevNOW <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://salesbotnow.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-all duration-300"
                  style={{ textShadow: "0 0 0 transparent" }}
                  onMouseEnter={(e) => {
                    e.target.style.textShadow = "0 0 8px rgba(14, 165, 233, 0.6)"
                    e.target.style.color = "#0ea5e9"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textShadow = "0 0 0 transparent"
                    e.target.style.color = "#d1d5db"
                  }}
                >
                  SalesBotNOW <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://adsnow.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-all duration-300"
                  style={{ textShadow: "0 0 0 transparent" }}
                  onMouseEnter={(e) => {
                    e.target.style.textShadow = "0 0 8px rgba(14, 165, 233, 0.6)"
                    e.target.style.color = "#0ea5e9"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textShadow = "0 0 0 transparent"
                    e.target.style.color = "#d1d5db"
                  }}
                >
                  AdsNOW <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://seonow.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-all duration-300"
                  style={{ textShadow: "0 0 0 transparent" }}
                  onMouseEnter={(e) => {
                    e.target.style.textShadow = "0 0 8px rgba(14, 165, 233, 0.6)"
                    e.target.style.color = "#0ea5e9"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textShadow = "0 0 0 transparent"
                    e.target.style.color = "#d1d5db"
                  }}
                >
                  SEONOW <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center"
          style={{
            borderTop: "1px solid rgba(14, 165, 233, 0.2)",
          }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 SuccessNOW. All rights reserved.</p>
          <p className="text-gray-400 text-sm">Powered by AI • Built for Success</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
      `}</style>
    </footer>
  )
}

export default Footer
