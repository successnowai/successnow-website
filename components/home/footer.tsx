"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Users } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Starry background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(59,130,246,0.1),transparent_50%)]" />

        {/* Animated stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-white font-bold text-xl">SuccessNOW</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              AI Superagents that work 24/7 to convert leads into sales for your business.
            </p>
            <div className="text-gray-400 text-sm">
              <p>© 2024 SuccessNOW AI</p>
              <p>All rights reserved.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/affiliate" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/realtornow" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="/autodealersnow" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Auto Dealers
                </Link>
              </li>
              <li>
                <Link href="/medspanow" className="text-gray-400 hover:text-white transition-colors text-sm">
                  MedSpa
                </Link>
              </li>
              <li>
                <Link href="/lawyersnow" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Legal
                </Link>
              </li>
              <li>
                <Link href="/contractorsnow" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contractors
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@successnow.ai"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="space-y-3">
              <a
                href="https://www.facebook.com/profile.php?id=61578055388858"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors text-sm group"
              >
                <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/successnowai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors text-sm group"
              >
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/john-potvin-65231229/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors text-sm group"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>John's LinkedIn</span>
              </a>
              <a
                href="https://www.linkedin.com/company/success-now-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors text-sm group"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>SuccessNOW LinkedIn</span>
              </a>
              <a
                href="https://x.com/successnowx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm group"
              >
                <Twitter className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>X (Twitter)</span>
              </a>
              <a
                href="https://www.tiktok.com/@successnow.ai?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-red-400 transition-colors text-sm group"
              >
                <div className="w-4 h-4 group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.16 20.5a6.33 6.33 0 0 0 10.14-5.09V8.77a8.2 8.2 0 0 0 4.77 1.17v-3.25z" />
                  </svg>
                </div>
                <span>TikTok</span>
              </a>
              <a
                href="https://www.youtube.com/@SuccessNow-AI-Agents"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-red-400 transition-colors text-sm group"
              >
                <Youtube className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>YouTube</span>
              </a>
              <a
                href="https://my.successnow.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors text-sm group"
              >
                <Users className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Community</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">Powered by AI • Built for Success • Available 24/7</p>
        </div>
      </div>
    </footer>
  )
}
