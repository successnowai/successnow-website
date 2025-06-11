"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DemoPopup } from "@/components/ui/demo-popup"

export function InstantDemoCTA() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <>
      <div
        className="relative max-w-5xl mx-auto h-[300px] bg-cover bg-center rounded-xl shadow-2xl shadow-blue-500/20"
        style={{ backgroundImage: `url(/images/homepage-cta-box.png)` }}
      >
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 bg-black/30 rounded-xl">
          <div className="text-left mb-4 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Want to see it in action?</h3>
            <p className="text-gray-300">Get an instant, interactive demo of our AI.</p>
          </div>
          <Button
            onClick={() => setIsPopupOpen(true)}
            className="bg-white text-black font-bold px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors text-lg flex-shrink-0"
          >
            Try Instant Demo
          </Button>
        </div>
      </div>
      <DemoPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  )
}
