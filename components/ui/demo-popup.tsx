"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { VoiceDemoModal } from "./voice-demo-modal"

interface DemoPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function DemoPopup({ isOpen, onClose }: DemoPopupProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#0B1426] border-[#00BFFF]/50 text-white max-w-md w-full">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-[#00BFFF]">
            Experience the AI Assistant
          </DialogTitle>
          <DialogDescription className="text-center text-gray-400 pt-2">
            Press the button below and ask our AI anything! Try asking: "How can you help my business?" or "Can I book
            an appointment?"
          </DialogDescription>
        </DialogHeader>
        <div className="pt-4">
          <VoiceDemoModal />
        </div>
      </DialogContent>
    </Dialog>
  )
}
