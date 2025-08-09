"use client"

import type React from "react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"
import { useEffect, useState } from "react"
import { Mic } from "lucide-react"

export function VoiceDemoModal({ trigger }: { trigger: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      const frame = document.getElementById("voice-demo-iframe")
      const handleLoad = () => {
        if (navigator.permissions) {
          navigator.permissions
            .query({ name: "microphone" as PermissionName })
            .then((result) => {
              if (result.state === "granted") {
                console.log("Microphone access already granted")
              } else if (result.state === "prompt") {
                console.log("User will be prompted for microphone access")
              }
            })
            .catch((err) => {
              console.error("Microphone permission query failed:", err)
            })
        }
      }

      if (frame) {
        frame.addEventListener("load", handleLoad)
      }

      return () => {
        if (frame) {
          frame.removeEventListener("load", handleLoad)
        }
      }
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="bg-gray-900/80 border-gray-700 text-white backdrop-blur-md max-w-md p-0">
        <DialogHeader className="p-6 pb-4 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Mic className="w-8 h-8 text-white" />
          </div>
          <DialogTitle className="text-2xl font-bold">AI Voice Assistant Demo</DialogTitle>
          <DialogDescription className="text-gray-400">
            Click the icon in the frame below and start talking to our AI.
          </DialogDescription>
        </DialogHeader>
        <div className="p-6 pt-0 h-[450px]">
          <iframe
            id="voice-demo-iframe"
            src="https://iframes.ai/o/1753831620452x607403809624031200?color=ed10cc&icon=bot"
            allow="microphone"
            className="w-full h-full border-0 rounded-md bg-gray-800"
            title="AI Voice Agent Demo"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
