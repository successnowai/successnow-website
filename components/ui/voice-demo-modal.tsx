"use client"

import { useEffect, useRef } from "react"
import { X, Bot } from "lucide-react"

interface VoiceDemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function VoiceDemoModal({ isOpen, onClose }: VoiceDemoModalProps) {
  const popupRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    if (isOpen) {
      document.body.style.overflow = "hidden"
      setTimeout(() => {
        closeButtonRef.current?.focus()
      }, 100)

      const frame = iframeRef.current
      const handleLoad = () => {
        navigator.permissions.query({ name: "microphone" as PermissionName }).then((result) => {
          if (result.state === "granted") {
            console.log("Microphone access already granted")
          } else if (result.state === "prompt") {
            console.log("User will be prompted for microphone access")
          }
        })
      }
      frame?.addEventListener("load", handleLoad)

      return () => {
        document.body.style.overflow = originalOverflow
        frame?.removeEventListener("load", handleLoad)
      }
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen && e.key === "Escape") {
        onClose()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-md z-[60] transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 z-[60] overflow-y-auto flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="w-full max-w-md mx-auto">
          <div
            ref={popupRef}
            className="relative bg-white rounded-xl shadow-2xl border border-gray-100 animate-in fade-in-0 zoom-in-95 duration-500 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-[#00BFFF] to-[#00A3D9] p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <h2 id="modal-title" className="text-xl font-bold text-white">
                  AI Voice Agent Demo
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="text-white/80 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#00BFFF]"
                aria-label="Close demo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 bg-gray-50">
              <iframe
                ref={iframeRef}
                src="https://iframes.ai/o/1750493608926x366840044583387140?color=00BFFF&icon=bot"
                allow="microphone"
                style={{ width: "100%", height: "200px", border: "none", borderRadius: "8px" }}
                id="assistantFrame"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
