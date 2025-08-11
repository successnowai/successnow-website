"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

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
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
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
                  Home
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
                  Demo
                </Link>
              </li>
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

          {/* Industries */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Industries</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/realtornow"
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
                  Real Estate
                </Link>
              </li>
              <li>
                <Link
                  href="/autodealersnow"
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
                  Auto Dealers
                </Link>
              </li>
              <li>
                <Link
                  href="/medspanow"
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
                  MedSpa
                </Link>
              </li>
              <li>
                <Link
                  href="/lawyersnow"
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
                  Legal
                </Link>
              </li>
              <li>
                <Link
                  href="/contractorsnow"
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
                  Contractors
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Community */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Support & Community</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/faq"
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
                  FAQ
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
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Follow Us</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://www.facebook.com/profile.php?id=61578055388858"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-all duration-300"
                  style={{ textShadow: "0 0 0 transparent" }}
                  onMouseEnter={(e) => {
                    e.target.style.textShadow = "0 0 8px rgba(59, 130, 246, 0.6)"
                    e.target.style.color = "#3b82f6"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textShadow = "0 0 0 transparent"
                    e.target.style.color = "#d1d5db"
                  }}
                >
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/successnowai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-all duration-300"
                  style={{ textShadow: "0 0 0 transparent" }}
                  onMouseEnter={(e) => {
                    e.target.style.textShadow = "0 0 8px rgba(236, 72, 153, 0.6)"
                    e.target.style.color = "#ec4899"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textShadow = "0 0 0 transparent"
                    e.target.style.color = "#d1d5db"
                  }}
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/john-potvin-65231229/"
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
                  <Linkedin className="w-4 h-4 mr-2" />
                  John's LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/success-now-ai/"
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
                  <Linkedin className="w-4 h-4 mr-2" />
                  SuccessNOW LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/successnowx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-all duration-300"
                  style={{ textShadow: "0 0 0 transparent" }}
                  onMouseEnter={(e) => {
                    e.target.style.textShadow = "0 0 8px rgba(255, 255, 255, 0.6)"
                    e.target.style.color = "#ffffff"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textShadow = "0 0 0 transparent"
                    e.target.style.color = "#d1d5db"
                  }}
                >
                  <Twitter className="w-4 h-4 mr-2" />X (Twitter)
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tiktok.com/@successnow.ai?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-all duration-300"
                  style={{ textShadow: "0 0 0 transparent" }}
                  onMouseEnter={(e) => {
                    e.target.style.textShadow = "0 0 8px rgba(255, 0, 80, 0.6)"
                    e.target.style.color = "#ff0050"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textShadow = "0 0 0 transparent"
                    e.target.style.color = "#d1d5db"
                  }}
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                  TikTok
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/@SuccessNow-AI-Agents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-all duration-300"
                  style={{ textShadow: "0 0 0 transparent" }}
                  onMouseEnter={(e) => {
                    e.target.style.textShadow = "0 0 8px rgba(239, 68, 68, 0.6)"
                    e.target.style.color = "#ef4444"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textShadow = "0 0 0 transparent"
                    e.target.style.color = "#d1d5db"
                  }}
                >
                  <Youtube className="w-4 h-4 mr-2" />
                  YouTube
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
