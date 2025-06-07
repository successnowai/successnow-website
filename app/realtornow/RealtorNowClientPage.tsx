"use client"

import { useState } from "react"
import TemplateButtonsSimple from "@/components/ui/template-buttons-simple"

export default function RealtorNowClientPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Direct template URLs - no masking or redirection
  const realtorTemplates = [
    {
      id: "realtor-1",
      title: "Real Estate Template 1",
      description: "Modern design for real estate professionals",
      url: "https://v0-realtor-template-site-1-git-realt-b5dc49-info-9422s-projects.vercel.app/",
    },
    {
      id: "realtor-2",
      title: "Realtor Professional Template",
      description: "Premium layout with property showcase",
      url: "https://v0-realtor-professional-template-git-a80c78-info-9422s-projects.vercel.app/",
    },
    {
      id: "realtor-3",
      title: "Real Estate Template 3",
      description: "Feature-rich real estate website",
      url: "https://v0-realtor-template-site-1-git-realt-b5dc49-info-9422s-projects.vercel.app/",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Realtor NOW</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Specialized AI solutions for real estate professionals to generate leads, engage clients, and close more
          deals.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Realtor Templates</h2>
        <TemplateButtonsSimple templates={realtorTemplates} baseButtonText="Preview Template" />
      </div>
    </div>
  )
}
