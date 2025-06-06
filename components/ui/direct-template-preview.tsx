"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface Template {
  url: string
  title: string
  description?: string
  isComingSoon?: boolean
}

interface DirectTemplatePreviewProps {
  template: Template
  buttonText: string
  buttonClassName?: string
}

export function DirectTemplatePreview({ template, buttonText, buttonClassName }: DirectTemplatePreviewProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openPreview = () => {
    if (template.isComingSoon) {
      alert("This template is coming soon! Join our newsletter to be notified when it's available.")
      return
    }
    setIsOpen(true)
    // Prevent scrolling and ensure fullscreen
    document.body.style.overflow = "hidden"
    document.body.style.position = "fixed"
    document.body.style.width = "100%"
    document.body.style.height = "100%"
  }

  const closePreview = () => {
    setIsOpen(false)
    // Restore normal scrolling and positioning
    document.body.style.overflow = "auto"
    document.body.style.position = "static"
    document.body.style.width = "auto"
    document.body.style.height = "auto"
  }

  // Handle escape key
  if (typeof window !== "undefined") {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isOpen) {
        closePreview()
      }
    })
  }

  return (
    <>
      <Button
        onClick={openPreview}
        disabled={template.isComingSoon}
        className={
          buttonClassName ||
          "px-6 py-3 bg-[#00BFFF] text-[#00274D] font-semibold rounded-md hover:bg-[#00BFFF]/90 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        }
      >
        {template.isComingSoon ? "🚧 Coming Soon" : buttonText}
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[99999] w-screen h-screen bg-black"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100vw",
            height: "100vh",
            margin: 0,
            padding: 0,
          }}
        >
          {/* Close button - positioned absolutely in top right */}
          <Button
            onClick={closePreview}
            className="absolute top-4 right-4 z-[100000] bg-red-600 hover:bg-red-700 text-white rounded-full h-12 w-12 p-0 flex items-center justify-center shadow-lg"
            style={{ position: "absolute", top: "16px", right: "16px" }}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Template iframe - takes full screen */}
          <iframe
            src={template.url}
            className="w-full h-full border-0 block"
            style={{
              width: "100vw",
              height: "100vh",
              border: "none",
              margin: 0,
              padding: 0,
              display: "block",
            }}
            title={template.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      )}
    </>
  )
}
