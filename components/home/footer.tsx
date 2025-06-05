import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#001a33] px-4 sm:px-5 py-6 sm:py-8 text-center">
      {/* Logo */}
      <div className="mb-4 sm:mb-6 flex justify-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🚀</span>
          <span className="text-xl font-bold bg-gradient-to-r from-[#00BFFF] to-[#0080FF] bg-clip-text text-transparent">
            SuccessNOW
          </span>
        </div>
      </div>

      <p className="mb-3 sm:mb-4 text-gray-400 text-sm sm:text-base">© 2025 SuccessNOW.ai – All rights reserved</p>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm sm:text-base">
        <Link href="/community" className="text-[#00BFFF] hover:text-[#00BFFF]/80 transition-colors">
          Community
        </Link>
        <span className="text-gray-400">|</span>
        <a href="#" className="text-[#00BFFF] hover:text-[#00BFFF]/80 transition-colors">
          Terms
        </a>
        <span className="text-gray-400">|</span>
        <a href="#" className="text-[#00BFFF] hover:text-[#00BFFF]/80 transition-colors">
          Privacy
        </a>
        <span className="text-gray-400">|</span>
        <a href="#" className="text-[#00BFFF] hover:text-[#00BFFF]/80 transition-colors">
          Contact
        </a>
        <span className="text-gray-400">|</span>
        <a
          href="https://app.successnow.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00BFFF] hover:text-[#00BFFF]/80 transition-colors font-medium"
        >
          LOGIN
        </a>
      </div>
    </footer>
  )
}
