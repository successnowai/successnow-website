"use client"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

const Footer = () => {
  const handleContactClick = () => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/successnow-ai/30min",
      })
    } else {
      window.open("https://calendly.com/successnow-ai/30min", "_blank")
    }
  }

  return (
    <footer className="relative bg-black/40 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold text-white">SuccessNOW</span>
            </div>
            <p className="text-gray-200 mb-6 max-w-md">
              AI Superagents that convert, book, and nurture leads 24/7 — while you get back your time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/industries"
                  className="text-gray-200 hover:text-cyan-400 transition-colors text-sm touch-target"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-gray-200 hover:text-cyan-400 transition-colors text-sm touch-target">
                  Live Demo
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-gray-200 hover:text-cyan-400 transition-colors text-sm touch-target"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="https://my.successnow.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-cyan-400 transition-colors text-sm touch-target"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="https://signup.successnow.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-cyan-400 transition-colors text-sm touch-target"
                >
                  Get Started
                </Link>
              </li>
              <li>
                <Link
                  href="/affiliate"
                  className="text-gray-200 hover:text-cyan-400 transition-colors text-sm touch-target"
                >
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Support</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={handleContactClick}
                  className="text-gray-200 hover:text-cyan-400 transition-colors text-sm text-left touch-target"
                  aria-label="Contact us - schedule a meeting"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-200 hover:text-cyan-400 transition-colors text-sm touch-target"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-200 hover:text-cyan-400 transition-colors text-sm touch-target"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Brands */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Our Brands</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://devnow.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-cyan-400 transition-colors text-sm flex items-center gap-1 touch-target"
                  aria-label="DevNOW - opens in new tab"
                >
                  DevNOW <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://salesbotnow.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-cyan-400 transition-colors text-sm flex items-center gap-1 touch-target"
                  aria-label="SalesBotNOW - opens in new tab"
                >
                  SalesBotNOW <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://adsnow.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-cyan-400 transition-colors text-sm flex items-center gap-1 touch-target"
                  aria-label="AdsNOW - opens in new tab"
                >
                  AdsNOW <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://seoexperts.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-cyan-400 transition-colors text-sm flex items-center gap-1 touch-target"
                  aria-label="SEONOW - opens in new tab"
                >
                  SEONOW <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 SuccessNOW. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">Powered by AI • Built for Success</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
