"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Maximize2, Minimize2 } from "lucide-react"

interface IframeModalProps {
  url: string
  title: string
  buttonText: string
  buttonClassName?: string
  isComingSoon?: boolean
}

export function IframeModal({ url, title, buttonText, buttonClassName, isComingSoon = false }: IframeModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const openModal = () => {
    if (isComingSoon) return
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setIsFullscreen(false)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  // Handle escape key and body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
      // Ensure modal is on top
      document.body.style.position = "relative"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
      document.body.style.position = "unset"
    }
  }, [isOpen])

  if (!isOpen) {
    return (
      <Button
        onClick={openModal}
        disabled={isComingSoon}
        className={
          buttonClassName ||
          "px-6 py-3 bg-[#00BFFF] text-[#00274D] font-semibold rounded-md hover:bg-[#00BFFF]/90 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        }
      >
        {isComingSoon ? "🚧 Coming Soon" : buttonText}
      </Button>
    )
  }

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm" style={{ zIndex: 9998 }} onClick={closeModal} />

      {/* Modal Window */}
      <div className="fixed inset-0 flex items-center justify-center p-2" style={{ zIndex: 9999 }}>
        <div
          className={`relative bg-white shadow-2xl transition-all duration-300 ${
            isFullscreen ? "w-screen h-screen" : "w-[96vw] h-[96vh] rounded-lg"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div
            className={`flex items-center justify-between p-4 border-b bg-gray-50 ${!isFullscreen ? "rounded-t-lg" : ""}`}
          >
            <h3 className="text-lg font-semibold text-gray-900 truncate flex-1">{title}</h3>
            <div className="flex items-center space-x-2 ml-4">
              <Button
                onClick={toggleFullscreen}
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-colors"
                title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
              >
                {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
              </Button>
              <Button
                onClick={closeModal}
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Content Area */}
          <div
            className={`bg-white ${isFullscreen ? "h-[calc(100vh-64px)]" : "h-[calc(96vh-64px)] rounded-b-lg"} overflow-hidden`}
          >
            <iframe
              src={url}
              className="w-full h-full border-0"
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              style={{ backgroundColor: "white" }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
