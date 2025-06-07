"use client"

import { useState } from "react"
import TemplateButtonsSimple from "@/components/ui/template-buttons-simple"

export default function LawyersNowClientPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Direct template URLs - no masking or redirection
  const lawyerTemplates = [
    {
      id: "lawyer-1",
      title: "Law Firm Template 1",
      description: "Professional design for law firms",
      url: "https://v0-lawyer-now-template-1-git-lawyer-ad1b08-info-9422s-projects.vercel.app/",
    },
    {
      id: "lawyer-2",
      title: "Law Firm Template 2",
      description: "Premium layout with practice area showcase",
      url: "https://v0-lawyer-now-template-1-git-lawyer-ad1b08-info-9422s-projects.vercel.app/",
    },
    {
      id: "lawyer-3",
      title: "Law Firm Template 3",
      description: "Feature-rich law firm website",
      url: "https://v0-lawyer-now-template-1-git-lawyer-ad1b08-info-9422s-projects.vercel.app/",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Lawyers NOW</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Specialized AI solutions for law firms to generate leads, showcase expertise, and grow your practice.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Law Firm Templates</h2>
        <TemplateButtonsSimple templates={lawyerTemplates} baseButtonText="Preview Template" />
      </div>
    </div>
  )
}
