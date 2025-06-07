"use client"

import { SimpleTemplatePreview } from "./simple-template-preview"

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
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {templates.map((template, index) => (
        <SimpleTemplatePreview
          key={template.id}
          template={template}
          buttonText={baseButtonText ? `${baseButtonText} ${index + 1}` : template.title}
          buttonClassName={`px-6 py-3 ${
            template.isComingSoon
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
          } font-semibold rounded-md transition-all duration-200 hover:scale-105 shadow-md`}
        />
      ))}
    </div>
  )
}
