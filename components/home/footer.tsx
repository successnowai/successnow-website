"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, MapPin, Mail, User } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#00BFFF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">SuccessNOW</span>
            </div>
            <p className="text-gray-400 text-sm">
              AI-powered voice agents that transform how businesses handle leads, appointments, and customer service.
            </p>

            {/* Social Media Links */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-300">Follow Us</h4>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://www.facebook.com/profile.php?id=61578055388858"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00BFFF] transition-colors"
                  title="SuccessNOW Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="https://x.com/successnowx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00BFFF] transition-colors"
                  title="SuccessNOW X (Twitter)"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/success-now-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00BFFF] transition-colors"
                  title="SuccessNOW LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/successnowai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00BFFF] transition-colors"
                  title="SuccessNOW Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.youtube.com/@SuccessNow-AI-Agents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00BFFF] transition-colors"
                  title="SuccessNOW YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.tiktok.com/@successnow.ai?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00BFFF] transition-colors"
                  title="SuccessNOW TikTok"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Leadership */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-300">Leadership</h4>
              <Link
                href="https://www.linkedin.com/in/john-potvin-65231229/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-[#00BFFF] transition-colors text-sm"
              >
                <User className="w-4 h-4" />
                <span>John Potvin - CEO & Founder</span>
              </Link>
            </div>
          </div>

          {/* Our Brands */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Brands</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://adsnow.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  AdsNow
                </Link>
              </li>
              <li>
                <Link
                  href="https://devnow.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  DevNow
                </Link>
              </li>
              <li>
                <Link
                  href="https://salesbotnow.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  SalesBotNow
                </Link>
              </li>
              <li>
                <Link
                  href="https://seoexperts.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  SEO Experts
                </Link>
              </li>
              <li>
                <Link
                  href="https://agencynow.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  AgencyNow
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/demo" className="text-gray-400 hover:text-white transition-colors">
                  Launch Demo
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-400 hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/affiliate" className="text-gray-400 hover:text-white transition-colors">
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="https://my.successnow.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-gray-400 hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#00BFFF]" />
                <a href="mailto:info@successnow.ai" className="text-gray-400 hover:text-white transition-colors">
                  info@successnow.ai
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#00BFFF] mt-0.5" />
                <span className="text-gray-400">
                  123 Innovation Drive
                  <br />
                  Tech Valley, CA 94000
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">© 2024 SuccessNOW AI. All rights reserved.</div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
