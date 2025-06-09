"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface Template {
  id: string
  title: string
  description?: string
  imageUrl?: string
  url: string // This will now be a masked URL
}

interface TemplateButtonsSimpleMaskedProps {
  templates: Template[]
  baseButtonText?: string
  className?: string
}

export function TemplateButtonsSimpleMasked({
  templates,
  baseButtonText = "View Template",
  className = "",
}: TemplateButtonsSimpleMaskedProps) {
  const [loading, setLoading] = useState<string | null>(null)

  const handleTemplateClick = (template: Template) => {
    console.log(`Opening masked template: ${template.title} - ${template.url}`)
    setLoading(template.id)

    // Open the masked URL instead of the original v0 URL
    window.open(template.url, "_blank")

    setTimeout(() => {
      setLoading(null)
    }, 500)
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
      {templates.map((template) => (
        <div
          key={template.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          {template.imageUrl && (
            <div className="relative h-40 sm:h-48 overflow-hidden">
              <img
                src={template.imageUrl || "/placeholder.svg"}
                alt={template.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-4">
            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-gray-900">{template.title}</h3>
            {template.description && (
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{template.description}</p>
            )}
            <Button
              onClick={() => handleTemplateClick(template)}
              disabled={loading === template.id}
              className="w-full text-sm py-2.5 sm:py-2"
            >
              {loading === template.id ? (
                <>
                  <span className="animate-spin mr-2">⏳</span> Opening...
                </>
              ) : (
                baseButtonText
              )}
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TemplateButtonsSimpleMasked
