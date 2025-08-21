"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/successnow-logo.png"
                alt="SuccessNOW"
                width={200}
                height={45}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Revolutionary AI agents that work 24/7 to qualify, nurture, and close your prospects.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Toronto, Canada</p>
              <p>Phone: (613) 703-0404</p>
              <p>Email: support@successnow.ai</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors text-sm">
                About
              </Link>
              <Link href="/industries" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Industries
              </Link>
              <Link href="/pricing" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Pricing
              </Link>
              <Link href="/demo" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Demo
              </Link>
              <Link href="/faq" className="block text-gray-400 hover:text-white transition-colors text-sm">
                FAQ
              </Link>
              <Link href="/affiliate" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Affiliate Program
              </Link>
              <Link href="/blogs" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Blog
              </Link>
              <Link href="/book" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Our Brands */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Brands</h3>
            <div className="space-y-2">
              <Link
                href="https://adsnow.ai"
                target="_blank"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                AdsNow
              </Link>
              <Link
                href="https://devnow.ai"
                target="_blank"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                DevNow
              </Link>
              <Link
                href="https://salesagentnow.ai"
                target="_blank"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                SalesagentNOW
              </Link>
              <Link
                href="https://seoexperts.ai"
                target="_blank"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                SEO Experts
              </Link>
              <Link
                href="https://agencynow.ai"
                target="_blank"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                AgencyNow
              </Link>
            </div>
          </div>

          {/* Legal & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <div className="space-y-2">
              <Link href="/privacy" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/community" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Community Access
              </Link>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">© 2024 SuccessNOW AI Systems Inc. All rights reserved.</div>
            <div className="text-sm text-gray-400">
              CEO & Founder:{" "}
              <Link
                href="https://linkedin.com/in/johnpotvin"
                target="_blank"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                John Potvin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
