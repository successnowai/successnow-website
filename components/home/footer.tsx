"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-[#00BFFF]">SuccessNOW AI</h3>
            <p className="text-gray-300 mb-4">
              Transforming businesses with AI-powered solutions that drive real results.
            </p>
            <p className="text-gray-400 text-sm">Email: hello@successnow.ai</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#00BFFF] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-300 hover:text-[#00BFFF] transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-300 hover:text-[#00BFFF] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-300 hover:text-[#00BFFF] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/demo" className="text-gray-300 hover:text-[#00BFFF] transition-colors">
                  Live Demo
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-gray-300 hover:text-[#00BFFF] transition-colors">
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link href="/affiliate" className="text-gray-300 hover:text-[#00BFFF] transition-colors">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link href="/diamond" className="text-gray-300 hover:text-[#00BFFF] transition-colors">
                  Diamond Class
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Brands */}
          <div>
            <h4 className="font-semibold mb-4">Our Brands</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://adsnow.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#00BFFF] transition-colors"
                >
                  AdsNow
                </Link>
              </li>
              <li>
                <Link
                  href="https://devnow.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#00BFFF] transition-colors"
                >
                  DevNow
                </Link>
              </li>
              <li>
                <Link
                  href="https://salesbotnow.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#00BFFF] transition-colors"
                >
                  SalesBotNow
                </Link>
              </li>
              <li>
                <Link
                  href="https://seoexperts.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#00BFFF] transition-colors"
                >
                  SEO Experts
                </Link>
              </li>
              <li>
                <Link
                  href="https://agencynow.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#00BFFF] transition-colors"
                >
                  AgencyNow
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Community */}
          <div>
            <h4 className="font-semibold mb-4">Legal & Community</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-[#00BFFF] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-[#00BFFF] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-[#00BFFF] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="https://my.successnow.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#00BFFF] transition-colors"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Leadership */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media */}
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <h4 className="font-semibold">Follow Us:</h4>
              <Link
                href="https://www.facebook.com/profile.php?id=61578055388858"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#00BFFF] transition-colors"
                title="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/successnowai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#00BFFF] transition-colors"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/success-now-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#00BFFF] transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://x.com/successnowx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#00BFFF] transition-colors"
                title="X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.tiktok.com/@successnow.ai?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#00BFFF] transition-colors"
                title="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com/@SuccessNow-AI-Agents"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#00BFFF] transition-colors"
                title="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>

            {/* Leadership */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-1">CEO & Founder</p>
              <Link
                href="https://www.linkedin.com/in/john-potvin-65231229/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] hover:text-white transition-colors font-semibold"
              >
                John Potvin
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2024 SuccessNOW AI Systems Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
