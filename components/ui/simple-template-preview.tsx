"use client"

import { Button } from "@/components/ui/button"

interface Template {
  id: string
  title: string
  description?: string
  isComingSoon?: boolean
}

interface SimpleTemplatePreviewProps {
  template: Template
  buttonText: string
  buttonClassName?: string
}

export function SimpleTemplatePreview({ template, buttonText, buttonClassName }: SimpleTemplatePreviewProps) {
  const openTemplate = () => {
    if (template.isComingSoon) {
      alert("This template is coming soon! Join our newsletter to be notified when it's available.")
      return
    }

    // Use our proxy page instead of API route
    const proxyUrl = `/template/${template.id}`

    // Open in new window with minimal browser UI
    const newWindow = window.open(
      proxyUrl,
      "_blank",
      "width=" +
        screen.width +
        ",height=" +
        screen.height +
        ",fullscreen=yes,scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no,status=no",
    )

    if (newWindow) {
      newWindow.focus()

      // Try to make it fullscreen after a brief delay
      setTimeout(() => {
        try {
          if (newWindow.document && newWindow.document.documentElement) {
            if (newWindow.document.documentElement.requestFullscreen) {
              newWindow.document.documentElement.requestFullscreen()
            }
          }
        } catch (e) {
          // Fullscreen might not be supported or allowed
          console.log("Fullscreen not available")
        }
      }, 1000)
    }
  }

  return (
    <Button
      onClick={openTemplate}
      disabled={template.isComingSoon}
      className={
        buttonClassName ||
        "px-6 py-3 bg-[#00BFFF] text-[#00274D] font-semibold rounded-md hover:bg-[#00BFFF]/90 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      }
    >
      {template.isComingSoon ? "🚧 Coming Soon" : buttonText}
    </Button>
  )
}
