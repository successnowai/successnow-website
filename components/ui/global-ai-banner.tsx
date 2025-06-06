"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { AiAgentPopup } from "@/components/ui/ai-agent-popup"

export function GlobalAiBanner() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <>
      {/* Global Top Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#00BFFF] to-[#0099CC] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <Button
            onClick={() => setIsPopupOpen(true)}
            className="bg-white/20 hover:bg-white/30 text-white font-bold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 border border-white/30 backdrop-blur-sm"
          >
            Ask AI Agent
          </Button>
        </div>
      </div>

      {/* AI Agent Popup */}
      <AiAgentPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  )
}
