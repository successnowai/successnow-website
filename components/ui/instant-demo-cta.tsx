"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

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
            Try AI Voice Assistant
          </Button>
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden max-w-md w-full"
          >
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <h3 className="font-semibold text-lg">AI Voice Assistant</h3>
              <button
                onClick={() => setIsPopupOpen(false)}
                className="text-white hover:text-gray-200 transition-colors text-xl"
              >
                ✕
              </button>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}>
              <iframe
                src="https://iframes.ai/o/1753831620452x607403809624031200?color=ed10cc&icon=bot"
                allow="microphone"
                style={{ width: "100%", height: "100%", border: "none" }}
                id="assistantFramePopup"
              />
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}
