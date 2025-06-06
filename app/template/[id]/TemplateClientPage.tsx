"use client"

import { useEffect } from "react"

interface TemplatePageProps {
  params: {
    id: string
  }
}

export default function TemplateClientPage({ params }: TemplatePageProps) {
  const templateUrls: Record<string, string> = {
    // Auto Dealer Templates
    "auto-1": "https://v0-autodele-now-template-site.vercel.app/",

    // Medspa Templates
    "medspa-1": "https://v0-med-spa-now-client-template-1.vercel.app/",

    // Realtor Templates
    "realtor-1": "https://v0-realtor-template-site-1.vercel.app/",
    "realtor-2": "https://v0-realtor-professional-template.vercel.app/",

    // Lawyer Templates
    "lawyer-1": "https://v0-lawyer-now-template-1.vercel.app/",

    // Mortgage Templates
    "mortgage-1": "https://v0-free-idx-api-options.vercel.app/",
  }

  const templateTitles: Record<string, string> = {
    "auto-1": "Auto Dealer Website Template - SuccessNOW",
    "medspa-1": "Medical Spa Website Template - SuccessNOW",
    "realtor-1": "Real Estate Website Template - SuccessNOW",
    "realtor-2": "Realtor Professional Template - SuccessNOW",
    "lawyer-1": "Law Firm Website Template - SuccessNOW",
    "mortgage-1": "Mortgage Broker Template - SuccessNOW",
  }

  // Set document title dynamically
  useEffect(() => {
    const title = templateTitles[params.id] || "Website Template - SuccessNOW"
    document.title = title
  }, [params.id])

  const templateUrl = templateUrls[params.id]

  if (!templateUrl) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Template Not Found</h1>
          <p className="text-gray-600">The requested template could not be found.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen w-screen overflow-hidden">
      {/* Close button */}
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={() => window.close()}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg transition-colors duration-200"
          title="Close Template"
        >
          ✕
        </button>
      </div>

      {/* Template iframe */}
      <iframe
        src={templateUrl}
        className="w-full h-full border-0"
        title="Template Preview"
        allow="fullscreen"
        loading="eager"
      />
    </div>
  )
}
