"use client"

import { useState } from "react"
import TemplateButtonsSimple from "@/components/ui/template-buttons-simple"

export default function MortgageNowClientPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Direct template URLs - no masking or redirection
  const mortgageTemplates = [
    {
      id: "mortgage-1",
      title: "Mortgage Broker Template 1",
      description: "Professional design for mortgage brokers",
      url: "https://v0-free-idx-api-options-git-mortgage-1364af-info-9422s-projects.vercel.app/",
    },
    {
      id: "mortgage-2",
      title: "Mortgage Broker Template 2",
      description: "Premium layout with loan options showcase",
      url: "https://v0-free-idx-api-options-git-mortgage-1364af-info-9422s-projects.vercel.app/",
    },
    {
      id: "mortgage-3",
      title: "Mortgage Broker Template 3",
      description: "Feature-rich mortgage broker website",
      url: "https://v0-free-idx-api-options-git-mortgage-1364af-info-9422s-projects.vercel.app/",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Mortgage NOW</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Specialized AI solutions for mortgage brokers to generate leads, showcase loan options, and close more deals.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Mortgage Broker Templates</h2>
        <TemplateButtonsSimple templates={mortgageTemplates} baseButtonText="Preview Template" />
      </div>
    </div>
  )
}
