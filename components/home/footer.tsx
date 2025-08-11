"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">Success</span>
              <span className="text-2xl font-bold text-cyan-400">NOW</span>
              <span className="text-lg text-gray-400">.ai</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              AI Super Agents that learn, sell, and scale your business 24/7. The only all-in-one AI platform built for
              small business growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/demo"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:underline"
                >
                  Launch Demo
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:underline"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:underline"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/affiliate"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:underline"
                >
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:underline"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:underline"
                >
                  Community
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@successnow.ai"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:underline"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Get Started</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a
                  href="mailto:hello@successnow.ai"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  hello@successnow.ai
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a
                  href="tel:+1-800-SUCCESS"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  1-800-SUCCESS
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                <span className="text-gray-300">Available in US & Canada</span>
              </div>
            </div>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-pink-500 hover:to-purple-600 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25"
            >
              Start Free Trial
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">© 2024 SuccessNOW.ai. All rights reserved.</p>
              <div className="flex space-x-6">
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="text-gray-400 text-sm">Powered by AI Super Agents</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
