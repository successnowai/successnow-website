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
  baseButtonText: string
}

export function TemplateButtonsSimple({ templates, baseButtonText }: TemplateButtonsSimpleProps) {
  const handleTemplateClick = (templateId: string, isComingSoon?: boolean) => {
    if (isComingSoon) {
      alert("This template is coming soon! Join our newsletter to be notified when it's available.")
      return
    }

    // Use the proper template route that works on both mobile and desktop
    const templateUrl = `/template/${templateId}`
    window.open(templateUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
      {templates.map((template) => (
        <Button
          key={template.id}
          onClick={() => handleTemplateClick(template.id, template.isComingSoon)}
          disabled={template.isComingSoon}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
            template.isComingSoon
              ? "bg-gray-500 text-gray-300 cursor-not-allowed opacity-60"
              : "bg-[#00BFFF] text-[#00274D] hover:bg-[#00BFFF]/90 hover:scale-105 active:scale-95"
          }`}
          style={{
            minWidth: "fit-content",
            whiteSpace: "nowrap",
          }}
        >
          {template.isComingSoon ? "🚧 Coming Soon" : `${baseButtonText}${template.title}`}
        </Button>
      ))}
    </div>
  )
}
