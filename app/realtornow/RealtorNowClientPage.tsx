"use client"

import { Button } from "@/components/ui/button"
import Footer from "@/components/home/footer"
import { TemplateButtonsSimple } from "@/components/ui/template-buttons-simple"
import { DemoPopup } from "@/components/ui/demo-popup"
import { useState, useEffect } from "react"

const RealtorNowClientPage = () => {
  const [currentText, setCurrentText] = useState(0)
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false)

  const rotatingTexts = [
    "Instantly Engages",
    "Converts Leads",
    "Books Appointments",
    "Gets 5 Star Reviews",
    "Follows Up Always",
  ]

  // EXACT TEMPLATE IDS - IDENTICAL TO DESKTOP MAPPING
  const realtorTemplates = [
    {
      id: "realtor-1",
      title: "Realtor Website 1",
      description: "Professional real estate template",
    },
    {
      id: "realtor-2",
      title: "Realtor Website 2",
      description: "Modern luxury real estate design",
    },
    {
      id: "realtor-3",
      title: "Realtor Website 3",
      description: "High-performance real estate template",
      isComingSoon: true,
    },
    {
      id: "realtor-4",
      title: "Realtor Website 4",
      description: "Family-friendly realtor template",
      isComingSoon: true,
    },
    {
      id: "realtor-5",
      title: "Realtor Website 5",
      description: "Premium realtor template",
      isComingSoon: true,
    },
  ]

  const handleDemoClick = () => {
    setIsDemoPopupOpen(true)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // LOG TEMPLATE IDS FOR DEBUGGING
  useEffect(() => {
    console.log(
      "RealtorNow template IDs:",
      realtorTemplates.map((t) => t.id),
    )
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1426] via-[#1a2332] to-[#0B1426] text-white">
      {/* Hero Section */}
      <section className="relative text-center py-16 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1426]/50 to-[#0B1426]"></div>
        <div className="relative z-10 max-w-6xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="block text-white">RealtorNOW™ AI</span>
            <span className="block text-[#00BFFF] min-h-[1.2em]">{rotatingTexts[currentText]}</span>
            <span className="block text-white">To Skyrocket Your Results</span>
          </h1>

          <div className="bg-red-600/20 border border-red-500 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-red-300 font-bold text-lg">⚠️ 77% of Leads are lost due to poor handling!!!</p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Stop losing sales to no-shows and forgotten follow-ups. Our{" "}
            <strong className="text-white">AI books showings, confirms appointments, and nurtures every lead</strong>{" "}
            until they buy.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button
              className="px-8 py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-base"
              onClick={handleDemoClick}
            >
              GET REALTORNOW →
            </Button>
            <Button
              variant="outline"
              className="px-8 py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-md hover:bg-[#00BFFF] hover:text-white transition-all duration-200 hover:scale-105 text-base bg-transparent"
              onClick={handleDemoClick}
            >
              Launch Instant Demo NOW
            </Button>
          </div>

          {/* IDENTICAL TEMPLATE BUTTONS IMPLEMENTATION */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-[#00BFFF]">🏠 Preview Real Estate Website Templates</h3>
            <TemplateButtonsSimple templates={realtorTemplates} baseButtonText="Preview" />
            <p className="text-sm text-gray-400 mt-2">Click any template to view it fullscreen in a new window</p>
          </div>
        </div>
      </section>

      <DemoPopup isOpen={isDemoPopupOpen} onClose={() => setIsDemoPopupOpen(false)} />
      <Footer />
    </div>
  )
}

export default RealtorNowClientPage
