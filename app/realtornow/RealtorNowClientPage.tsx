"use client"
import { useState } from "react"
import DemoPopup from "@/components/ui/demo-popup"
import AdsSuccessEcosystem from "@/components/ui/ads-success-ecosystem"

export default function RealtorNowClientPage() {
  const [isPopupOpen, setPopupOpen] = useState(false)

  const handleDemoClick = () => {
    setPopupOpen(true)
  }

  const handleClosePopup = () => {
    setPopupOpen(false)
  }

  return (
    <div className="bg-gray-900 text-white">
      <div className="text-center py-20 bg-gray-800">
        <h1 className="text-5xl font-bold mb-4">AI for Realtors</h1>
        <p className="text-xl text-gray-400">Engage every lead, schedule showings, and grow your business with AI.</p>
      </div>

      <AdsSuccessEcosystem onDemoClick={handleDemoClick} />

      {isPopupOpen && <DemoPopup onClose={handleClosePopup} />}
    </div>
  )
}
