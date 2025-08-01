export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SuccessNOW AI</h3>
            <p className="text-gray-400">Transform your business with AI-powered automation and lead generation.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/realtornow" className="hover:text-white">
                  Real Estate
                </a>
              </li>
              <li>
                <a href="/dentistsnow" className="hover:text-white">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="/lawyersnow" className="hover:text-white">
                  Legal
                </a>
              </li>
              <li>
                <a href="/contractorsnow" className="hover:text-white">
                  Home Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get Started</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/signup" className="hover:text-white">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="/demo" className="hover:text-white">
                  Demo
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-white">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SuccessNOW AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
