"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer
      className="relative py-20 px-4 border-t bg-black"
      style={{
        backdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(14, 165, 233, 0.2)",
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">Success</span>
              <span className="text-2xl font-bold text-cyan-400">NOW</span>
              <span className="text-lg text-gray-400">.ai</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              All-in-one AI business growth platform that works 24/7 to convert leads into sales. Powered by AI Super
              Agents, automated marketing, and intelligent automation.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61578055388858"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/successnowx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/success-now-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/successnowai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-all duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-300 hover:text-cyan-400 transition-all duration-300">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-all duration-300">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-300 hover:text-cyan-400 transition-all duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/affiliate" className="text-gray-300 hover:text-cyan-400 transition-all duration-300">
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Community */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-cyan-400 transition-all duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-gray-300 hover:text-cyan-400 transition-all duration-300">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-gray-300 hover:text-cyan-400 transition-all duration-300">
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-300 hover:text-cyan-400 transition-all duration-300">
                  Community
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@successnow.ai"
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a
                  href="mailto:support@successnow.ai"
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300"
                >
                  support@successnow.ai
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+1-800-SUCCESS" className="text-gray-300 hover:text-cyan-400 transition-all duration-300">
                  1-800-SUCCESS
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-gray-300 text-sm">Available in US & Canada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">© 2024 SuccessNOW.ai. All rights reserved.</div>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
