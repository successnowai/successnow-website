"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface TemplatePageProps {
  params: {
    id: string
  }
}

export default function TemplateClientPage({ params }: TemplatePageProps) {
  const [loading, setLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const router = useRouter()

  // COMPLETE TEMPLATE CONFIGURATION - All working URLs
  const templateUrls: Record<string, string> = {
    // Auto Dealer Templates
    "auto-1": "https://v0-autodele-now-template-site.vercel.app/",
    auto: "https://v0-autodele-now-template-site.vercel.app/", // Fallback for incomplete URLs

    // Medspa Templates
    "medspa-1": "https://v0-med-spa-now-client-template-1.vercel.app/",
    medspa: "https://v0-med-spa-now-client-template-1.vercel.app/", // Fallback

    // Realtor Templates
    "realtor-1": "https://v0-realtor-template-site-1.vercel.app/",
    "realtor-2": "https://v0-realtor-professional-template.vercel.app/",
    realtor: "https://v0-realtor-template-site-1.vercel.app/", // Fallback

    // Lawyer Templates
    "lawyer-1": "https://v0-lawyer-now-template-1.vercel.app/",
    lawyer: "https://v0-lawyer-now-template-1.vercel.app/", // Fallback

    // Mortgage Templates
    "mortgage-1": "https://v0-free-idx-api-options.vercel.app/",
    mortgage: "https://v0-free-idx-api-options.vercel.app/", // Fallback

    // Gym Templates
    "gym-1": "https://v0-gym-template-site.vercel.app/",
    gym: "https://v0-gym-template-site.vercel.app/", // Fallback

    // Default fallback for any unrecognized template
    default: "https://v0-autodele-now-template-site.vercel.app/",
  }

  const templateTitles: Record<string, string> = {
    "auto-1": "Auto Dealer Website Template",
    auto: "Auto Dealer Website Template",
    "medspa-1": "Medical Spa Website Template",
    medspa: "Medical Spa Website Template",
    "realtor-1": "Real Estate Website Template",
    "realtor-2": "Realtor Professional Template",
    realtor: "Real Estate Website Template",
    "lawyer-1": "Law Firm Website Template",
    lawyer: "Law Firm Website Template",
    "mortgage-1": "Mortgage Broker Template",
    mortgage: "Mortgage Broker Template",
    "gym-1": "Gym & Fitness Template",
    gym: "Gym & Fitness Template",
    default: "Website Template",
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Handle incomplete or malformed URLs
    let templateId = params.id

    // If the ID is incomplete or not found, try to find a match
    if (!templateUrls[templateId]) {
      // Try to find a partial match
      const partialMatch = Object.keys(templateUrls).find((key) => key.includes(templateId) || templateId.includes(key))

      if (partialMatch) {
        templateId = partialMatch
      } else {
        // Use default template if no match found
        templateId = "auto-1" // Default to auto dealer template
      }
    }

    const title = templateTitles[templateId] || "Website Template"
    document.title = `${title} - SuccessNOW`
    setLoading(false)

    return () => window.removeEventListener("resize", checkMobile)
  }, [params.id])

  // Get the template URL, with fallback logic
  const getTemplateUrl = () => {
    const templateId = params.id

    // If direct match exists, use it
    if (templateUrls[templateId]) {
      return templateUrls[templateId]
    }

    // Try partial matches
    const partialMatch = Object.keys(templateUrls).find((key) => key.includes(templateId) || templateId.includes(key))

    if (partialMatch) {
      return templateUrls[partialMatch]
    }

    // Default fallback
    return templateUrls["auto-1"]
  }

  const templateUrl = getTemplateUrl()
  const templateTitle = templateTitles[params.id] || templateTitles["auto-1"]

  const handleClose = () => {
    if (window.history.length > 1) {
      window.history.back()
    } else {
      router.push("/")
    }
  }

  const handleOpenInNewTab = () => {
    window.open(templateUrl, "_blank")
  }

  const handleGoHome = () => {
    router.push("/")
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

  // Always show the template now, even if the original ID wasn't found
  return (
    <div className="h-screen w-screen overflow-hidden relative">
      {/* Control bar - optimized for both desktop and mobile */}
      <div className={`absolute top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm ${isMobile ? "p-2" : "p-3"}`}>
        <div className="flex items-center justify-between">
          <div className="text-white text-sm font-medium truncate flex-1 mr-4">{templateTitle}</div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleGoHome}
              className={`bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-full transition-colors ${
                isMobile ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
              }`}
              title="Go Home"
            >
              {isMobile ? "🏠" : "Home"}
            </button>
            <button
              onClick={handleOpenInNewTab}
              className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-colors ${
                isMobile ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
              }`}
              title="Open in New Tab"
            >
              {isMobile ? "↗" : "New Tab"}
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

      {/* Template iframe - Always loads a template */}
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
