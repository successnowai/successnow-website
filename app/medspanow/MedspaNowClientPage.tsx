"use client"

import { useState } from "react"
import TemplateButtonsSimple from "@/components/ui/template-buttons-simple"

export default function MedspaNowClientPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Direct template URLs - no masking or redirection
  const medspaTemplates = [
    {
      id: "medspa-1",
      title: "Medical Spa Template 1",
      description: "Elegant design for medical spas",
      url: "https://v0-med-spa-now-client-template-1-git-2ad733-info-9422s-projects.vercel.app/",
    },
    {
      id: "medspa-2",
      title: "Medical Spa Template 2",
      description: "Premium layout with treatment showcase",
      url: "https://v0-med-spa-now-client-template-1-git-2ad733-info-9422s-projects.vercel.app/",
    },
    {
      id: "medspa-3",
      title: "Medical Spa Template 3",
      description: "Feature-rich medical spa website",
      url: "https://v0-med-spa-now-client-template-1-git-2ad733-info-9422s-projects.vercel.app/",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">MedSpa NOW</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Specialized AI solutions for medical spas to attract clients, showcase treatments, and grow your business.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Medical Spa Templates</h2>
        <TemplateButtonsSimple templates={medspaTemplates} baseButtonText="Preview Template" />
      </div>
    </div>
  )
}
