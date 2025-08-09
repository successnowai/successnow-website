"use client"

import { Button } from "@/components/ui/button"
import Footer from "@/components/home/footer"
import { DemoPopup } from "@/components/ui/demo-popup"
import { useState } from "react"
import AdsSuccessEcosystem from "@/components/ui/ads-success-ecosystem"

const NanaClientPage = () => {
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false)
  const handleDemoClick = () => setIsDemoPopupOpen(true)
  const handleSignupClick = () => (window.location.href = "https://signup.successnow.ai")

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1426] via-[#1a2332] to-[#0B1426] text-white">
      <section className="relative text-center py-16 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1426]/50 to-[#0B1426]"></div>
        <div className="relative z-10 max-w-6xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="block text-white animate-fadeTextUp">Nana™ AI</span>
            <span className="block text-[#00BFFF] animate-fadeTextUp animation-delay-300">Your Custom AI Solution</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeTextUp animation-delay-1200">
            A bespoke AI agent, built from the ground up to meet your unique business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-fadeTextUp animation-delay-1500">
            <Button
              className="px-8 py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-base"
              onClick={handleSignupClick}
            >
              GET YOUR CUSTOM AI →
            </Button>
            <Button
              variant="outline"
              className="px-8 py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-md hover:bg-[#00BFFF] hover:text-white transition-all duration-200 hover:scale-105 text-base bg-transparent"
              onClick={handleDemoClick}
            >
              Launch Instant Demo NOW
            </Button>
          </div>
        </div>
      </section>

      <AdsSuccessEcosystem onDemoClick={handleDemoClick} />

      <div className="text-center bg-[#00274D]/80 backdrop-blur-sm p-12 rounded-2xl border border-[#00BFFF]/30 max-w-4xl mx-auto my-16">
        <h3 className="text-3xl font-bold mb-6 text-[#00BFFF]">Ready to Build Your Custom AI?</h3>
        <p className="text-gray-300 mb-8 text-lg">
          Let&apos;s create an AI solution that perfectly fits your business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            className="px-8 py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-base"
            onClick={handleSignupClick}
          >
            Start Your Custom Build
          </Button>
          <Button
            variant="outline"
            className="px-8 py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-md hover:bg-[#00BFFF] hover:text-white transition-all duration-200 hover:scale-105 text-base bg-transparent"
            onClick={() => (window.location.href = "/")}
          >
            BACK TO HOME
          </Button>
        </div>
      </div>

      <DemoPopup isOpen={isDemoPopupOpen} onClose={() => setIsDemoPopupOpen(false)} />
      <Footer />
    </div>
  )
}

export default NanaClientPage
