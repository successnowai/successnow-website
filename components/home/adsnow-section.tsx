"use client"
import { useState } from "react"
import AdsSuccessEcosystem from "@/components/ui/ads-success-ecosystem"
import DemoPopup from "@/components/ui/demo-popup"

export default function AdsNowSection() {
  const [isPopupOpen, setPopupOpen] = useState(false)

  const handleDemoClick = () => {
    setPopupOpen(true)
  }

  const handleClosePopup = () => {
    setPopupOpen(false)
  }

  return (
    <>
      <AdsSuccessEcosystem onDemoClick={handleDemoClick} />
      {isPopupOpen && <DemoPopup isOpen={isPopupOpen} onClose={handleClosePopup} />}
    </>
  )
}
