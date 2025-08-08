import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Globe, Twitter, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900/50 text-white border-t border-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Globe className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold">SuccessNOW</span>
            </div>
            <p className="text-gray-400">
              AI-powered solutions to automate your business, generate leads, and drive growth.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/#features" className="text-gray-400 hover:text-white">Features</Link></li>
              <li><Link href="/#pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
              <li><Link href="/industries" className="text-gray-400 hover:text-white">Industries</Link></li>
              <li><Link href="/demo" className="text-gray-400 hover:text-white">Live Demo</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Get the latest AI news and product updates.</p>
            <form className="flex">
              <Input type="email" placeholder="Enter your email" className="bg-gray-800 border-gray-700 rounded-r-none" />
              <Button type="submit" className="bg-cyan-500 hover:bg-cyan-600 rounded-l-none">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} SuccessNOW AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
