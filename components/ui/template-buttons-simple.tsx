"use client"

import { Button } from "@/components/ui/button"

interface Template {
  id: string
  title: string
  description?: string
  isComingSoon?: boolean
}

interface TemplateButtonsSimpleProps {
  templates: Template[]
  baseButtonText?: string
}

export function TemplateButtonsSimple({ templates, baseButtonText = "Preview" }: TemplateButtonsSimpleProps) {
  const handleTemplateClick = (templateId: string, isComingSoon?: boolean) => {
    if (isComingSoon) {
      alert("This template is coming soon! Join our newsletter to be notified when it's available.")
      return
    }

    // Use the proper template route that handles URL masking and page titles
    window.open(`/template/${templateId}`, "_blank")
  }

  return (
    <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
      {templates.map((template, index) => (
        <Button
          key={template.id}
          onClick={() => handleTemplateClick(template.id, template.isComingSoon)}
          disabled={template.isComingSoon}
          className={`px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-200 ${
            template.isComingSoon
              ? "bg-gray-500 text-gray-300 cursor-not-allowed opacity-60"
              : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 hover:scale-105 active:scale-95 shadow-md"
          }`}
        >
          {template.isComingSoon ? "🚧 Coming Soon" : `${baseButtonText} ${index + 1}`}
        </Button>
      ))}
    </div>
  )
}
