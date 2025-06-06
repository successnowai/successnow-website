"use client"

import { DirectTemplatePreview } from "./direct-template-preview"

interface Template {
  url: string
  title: string
  description?: string
  isComingSoon?: boolean
}

interface TemplateButtonsProps {
  templates: Template[]
  baseButtonText?: string
}

export function TemplateButtons({ templates, baseButtonText = "Preview" }: TemplateButtonsProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {templates.map((template, index) => (
        <DirectTemplatePreview
          key={index}
          template={template}
          buttonText={`${baseButtonText} ${index + 1}`}
          buttonClassName={`px-6 py-3 ${
            template.isComingSoon
              ? "bg-gray-400 text-white"
              : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
          } font-semibold rounded-md transition-all duration-200 hover:scale-105 shadow-md`}
        />
      ))}
    </div>
  )
}
