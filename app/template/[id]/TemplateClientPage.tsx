"use client"

import { useEffect, useState } from "react"

interface TemplatePageProps {
  params: {
    id: string
  }
}

export default function TemplateClientPage({ params }: TemplatePageProps) {
  const [loading, setLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  // WORKING TEMPLATE URLS - These load the actual template sites
  const templateUrls: Record<string, string> = {
    "auto-1": "https://v0-autodele-now-template-site.vercel.app/",
    "medspa-1": "https://v0-med-spa-now-client-template-1.vercel.app/",
    "realtor-1": "https://v0-realtor-template-site-1.vercel.app/",
    "realtor-2": "https://v0-realtor-professional-template.vercel.app/",
    "lawyer-1": "https://v0-lawyer-now-template-1.vercel.app/",
    "mortgage-1": "https://v0-free-idx-api-options.vercel.app/",
    "gym-1": "https://v0-gym-template-site.vercel.app/",
  }

  const templateTitles: Record<string, string> = {
    "auto-1": "Auto Dealer Website Template",
    "medspa-1": "Medical Spa Website Template",
    "realtor-1": "Real Estate Website Template",
    "realtor-2": "Realtor Professional Template",
    "lawyer-1": "Law Firm Website Template",
    "mortgage-1": "Mortgage Broker Template",
    "gym-1": "Gym & Fitness Template",
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const title = templateTitles[params.id] || "Website Template"
    document.title = `${title} - SuccessNOW`
    setLoading(false)

    return () => window.removeEventListener("resize", checkMobile)
  }, [params.id])

  const templateUrl = templateUrls[params.id]

  const handleClose = () => {
    if (window.history.length > 1) {
      window.history.back()
    } else {
      window.close()
    }
  }

  const handleOpenInNewTab = () => {
    window.open(templateUrl, "_blank")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4 mx-auto"></div>
          <p className="text-lg">Loading template...</p>
        </div>
      </div>
    )
  }

  if (!templateUrl) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
        <div className="text-center text-white max-w-md">
          <h1 className="text-2xl font-bold mb-4">Template Not Found</h1>
          <p className="text-lg mb-6">The requested template could not be found.</p>
          <button
            onClick={handleClose}
            className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      {/* Control bar - optimized for both desktop and mobile */}
      <div className={`absolute top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm ${isMobile ? "p-2" : "p-3"}`}>
        <div className="flex items-center justify-between">
          <div className="text-white text-sm font-medium truncate flex-1 mr-4">
            {templateTitles[params.id] || "Template Preview"}
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleOpenInNewTab}
              className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-colors ${
                isMobile ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
              }`}
              title="Open in New Tab"
            >
              {isMobile ? "↗" : "Open in New Tab"}
            </button>
            <button
              onClick={handleClose}
              className={`bg-red-500 hover:bg-red-600 text-white font-bold rounded-full transition-colors ${
                isMobile ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
              }`}
              title="Close Template"
            >
              {isMobile ? "✕" : "Close"}
            </button>
          </div>
        </div>
      </div>

      {/* Template iframe - Works on both desktop and mobile */}
      <iframe
        src={templateUrl}
        className={`w-full h-full border-0 ${isMobile ? "pt-12" : "pt-14"}`}
        title="Template Preview"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        allowFullScreen
        loading="eager"
        style={{
          backgroundColor: "white",
          touchAction: "manipulation",
        }}
      />
    </div>
  )
}
