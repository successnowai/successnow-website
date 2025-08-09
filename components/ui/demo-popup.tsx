"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface DemoPopupProps {
  isOpen?: boolean
  onClose?: () => void
  trigger?: React.ReactNode
}

export function DemoPopup({ isOpen: controlledIsOpen, onClose, trigger }: DemoPopupProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false)

  // Use controlled state if provided, otherwise use internal state
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen
  const handleClose = onClose || (() => setInternalIsOpen(false))
  const handleOpen = () => setInternalIsOpen(true)

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, handleClose])

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Handle iframe load and microphone permissions
  useEffect(() => {
    if (isOpen) {
      const frame = document.getElementById("assistantFrameDemo")
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
        return () => {
          frame.removeEventListener("load", handleLoad)
        }
      }
    }
  }, [isOpen])

  return (
    <>
      {trigger && (
        <div onClick={handleOpen} className="cursor-pointer">
          {trigger}
        </div>
      )}

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={handleClose}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="relative bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden max-w-md w-full mx-4"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <h3 className="font-semibold text-lg">AI Voice Agent</h3>
                <button
                  onClick={handleClose}
                  className="text-white hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-white/10"
                  aria-label="Close demo"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}>
                <iframe
                  src="https://iframes.ai/o/1753831620452x607403809624031200?color=ed10cc&icon=bot"
                  allow="microphone"
                  style={{ width: "100%", height: "100%", border: "none" }}
                  id="assistantFrameDemo"
                  title="AI Voice Agent Demo"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default DemoPopup
