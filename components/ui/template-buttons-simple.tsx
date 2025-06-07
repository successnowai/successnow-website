"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface Template {
  id: string
  title: string
  description?: string
  imageUrl?: string
  url: string // Direct URL to the template
}

interface TemplateButtonsSimpleProps {
  templates: Template[]
  baseButtonText?: string
  className?: string
}

export function TemplateButtonsSimple({
  templates,
  baseButtonText = "View Template",
  className = "",
}: TemplateButtonsSimpleProps) {
  const [loading, setLoading] = useState<string | null>(null)

  // Direct template opening function - no masking or redirection
  const handleTemplateClick = (template: Template) => {
    console.log(`Opening template directly: ${template.title} - ${template.url}`)
    setLoading(template.id)

    // Open template URL directly in a new tab
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
            <div className="relative h-40 overflow-hidden">
              <img
                src={template.imageUrl || "/placeholder.svg"}
                alt={template.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-900">{template.title}</h3>
            {template.description && <p className="text-gray-600 text-sm mb-4">{template.description}</p>}
            <Button onClick={() => handleTemplateClick(template)} disabled={loading === template.id} className="w-full">
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

// Export as default to satisfy deployment requirements
export default TemplateButtonsSimple
