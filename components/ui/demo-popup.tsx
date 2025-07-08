"use client"

import { useState, type ReactNode } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { VoiceDemoModal } from "@/components/ui/voice-demo-modal"

export function DemoPopup({ trigger }: { trigger: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        {trigger}
      </div>
      <DialogContent className="bg-transparent border-none shadow-none max-w-4xl w-full p-0">
        <VoiceDemoModal onClose={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}

export default DemoPopup
