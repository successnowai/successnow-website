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
  const [error, setError] = useState(false)

  // COMPREHENSIVE TEMPLATE MAPPING - All possible template IDs
  const templateUrls: Record<string, string> = {
    // Auto Dealer Templates
    "auto-1": "https://v0-autodele-now-template-site.vercel.app/",
    "auto-2": "https://v0-autodele-now-template-site.vercel.app/",
    "auto-3": "https://v0-autodele-now-template-site.vercel.app/",
    "auto-4": "https://v0-autodele-now-template-site.vercel.app/",
    "auto-5": "https://v0-autodele-now-template-site.vercel.app/",

    // Medical Spa Templates
    "medspa-1": "https://v0-med-spa-now-client-template-1.vercel.app/",
    "medspa-2": "https://v0-med-spa-now-client-template-1.vercel.app/",
    "medspa-3": "https://v0-med-spa-now-client-template-1.vercel.app/",
    "medspa-4": "https://v0-med-spa-now-client-template-1.vercel.app/",
    "medspa-5": "https://v0-med-spa-now-client-template-1.vercel.app/",

    // Realtor Templates
    "realtor-1": "https://v0-realtor-template-site-1.vercel.app/",
    "realtor-2": "https://v0-realtor-professional-template.vercel.app/",
    "realtor-3": "https://v0-realtor-template-site-1.vercel.app/",
    "realtor-4": "https://v0-realtor-professional-template.vercel.app/",
    "realtor-5": "https://v0-realtor-template-site-1.vercel.app/",

    // Lawyer Templates
    "lawyer-1": "https://v0-lawyer-now-template-1.vercel.app/",
    "lawyer-2": "https://v0-lawyer-now-template-1.vercel.app/",
    "lawyer-3": "https://v0-lawyer-now-template-1.vercel.app/",
    "lawyer-4": "https://v0-lawyer-now-template-1.vercel.app/",
    "lawyer-5": "https://v0-lawyer-now-template-1.vercel.app/",

    // Mortgage Templates
    "mortgage-1": "https://v0-free-idx-api-options.vercel.app/",
    "mortgage-2": "https://v0-free-idx-api-options.vercel.app/",
    "mortgage-3": "https://v0-free-idx-api-options.vercel.app/",
    "mortgage-4": "https://v0-free-idx-api-options.vercel.app/",
    "mortgage-5": "https://v0-free-idx-api-options.vercel.app/",

    // Gym Templates
    "gym-1": "https://v0-autodele-now-template-site.vercel.app/",
    "gym-2": "https://v0-autodele-now-template-site.vercel.app/",
    "gym-3": "https://v0-autodele-now-template-site.vercel.app/",
    "gym-4": "https://v0-autodele-now-template-site.vercel.app/",
    "gym-5": "https://v0-autodele-now-template-site.vercel.app/",

    // Alternative naming patterns that might be used
    "auto-dealer-1": "https://v0-autodele-now-template-site.vercel.app/",
    "auto-dealer-2": "https://v0-autodele-now-template-site.vercel.app/",
    "medical-spa-1": "https://v0-med-spa-now-client-template-1.vercel.app/",
    "medical-spa-2": "https://v0-med-spa-now-client-template-1.vercel.app/",
    "real-estate-1": "https://v0-realtor-template-site-1.vercel.app/",
    "real-estate-2": "https://v0-realtor-professional-template.vercel.app/",
    "law-firm-1": "https://v0-lawyer-now-template-1.vercel.app/",
    "law-firm-2": "https://v0-lawyer-now-template-1.vercel.app/",
    "mortgage-broker-1": "https://v0-free-idx-api-options.vercel.app/",
    "mortgage-broker-2": "https://v0-free-idx-api-options.vercel.app/",
    "fitness-1": "https://v0-autodele-now-template-site.vercel.app/",
    "fitness-2": "https://v0-autodele-now-template-site.vercel.app/",

    // Legacy template IDs that might still be used
    "realtor-template-1": "https://v0-realtor-template-site-1.vercel.app/",
    "realtor-template-2": "https://v0-realtor-professional-template.vercel.app/",
    "realtor-template-3": "https://v0-realtor-template-site-1.vercel.app/",
  }

  const templateTitles: Record<string, string> = {
    // Auto Dealer Titles
    "auto-1": "Auto Dealer Website Template",
    "auto-2": "Auto Dealer Website Template 2",
    "auto-3": "Auto Dealer Website Template 3",
    "auto-4": "Auto Dealer Website Template 4",
    "auto-5": "Auto Dealer Website Template 5",

    // Medical Spa Titles
    "medspa-1": "Medical Spa Website Template",
    "medspa-2": "Medical Spa Website Template 2",
    "medspa-3": "Medical Spa Website Template 3",
    "medspa-4": "Medical Spa Website Template 4",
    "medspa-5": "Medical Spa Website Template 5",

    // Realtor Titles
    "realtor-1": "Real Estate Website Template",
    "realtor-2": "Realtor Professional Template",
    "realtor-3": "Real Estate Website Template 3",
    "realtor-4": "Realtor Professional Template 4",
    "realtor-5": "Real Estate Website Template 5",

    // Lawyer Titles
    "lawyer-1": "Law Firm Website Template",
    "lawyer-2": "Law Firm Website Template 2",
    "lawyer-3": "Law Firm Website Template 3",
    "lawyer-4": "Law Firm Website Template 4",
    "lawyer-5": "Law Firm Website Template 5",

    // Mortgage Titles
    "mortgage-1": "Mortgage Broker Template",
    "mortgage-2": "Mortgage Broker Template 2",
    "mortgage-3": "Mortgage Broker Template 3",
    "mortgage-4": "Mortgage Broker Template 4",
    "mortgage-5": "Mortgage Broker Template 5",

    // Gym Titles
    "gym-1": "Gym & Fitness Website Template",
    "gym-2": "Gym & Fitness Website Template 2",
    "gym-3": "Gym & Fitness Website Template 3",
    "gym-4": "Gym & Fitness Website Template 4",
    "gym-5": "Gym & Fitness Website Template 5",

    // Alternative naming patterns
    "auto-dealer-1": "Auto Dealer Website Template",
    "auto-dealer-2": "Auto Dealer Website Template 2",
    "medical-spa-1": "Medical Spa Website Template",
    "medical-spa-2": "Medical Spa Website Template 2",
    "real-estate-1": "Real Estate Website Template",
    "real-estate-2": "Realtor Professional Template",
    "law-firm-1": "Law Firm Website Template",
    "law-firm-2": "Law Firm Website Template 2",
    "mortgage-broker-1": "Mortgage Broker Template",
    "mortgage-broker-2": "Mortgage Broker Template 2",
    "fitness-1": "Gym & Fitness Website Template",
    "fitness-2": "Gym & Fitness Website Template 2",

    // Legacy template IDs
    "realtor-template-1": "Real Estate Website Template",
    "realtor-template-2": "Realtor Professional Template",
    "realtor-template-3": "Real Estate Website Template 3",
  }

  useEffect(() => {
    try {
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768)
      }

      checkMobile()
      window.addEventListener("resize", checkMobile)

      const title = templateTitles[params.id] || "Website Template"
      document.title = `${title} - SuccessNOW`

      // Log the template ID for debugging
      console.log("Template ID requested:", params.id)
      console.log("Template URL found:", templateUrls[params.id])

      setTimeout(() => setLoading(false), 500)

      return () => window.removeEventListener("resize", checkMobile)
    } catch (err) {
      console.error("Template loading error:", err)
      setError(true)
      setLoading(false)
    }
  }, [params.id])

  // Get the correct template URL
  const templateUrl = templateUrls[params.id]
  const templateTitle = templateTitles[params.id] || "Website Template"

  // If template ID doesn't exist, show error with debugging info
  if (!templateUrl) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
        <div className="text-center text-white max-w-md">
          <h1 className="text-2xl font-bold mb-4">Template Not Found</h1>
          <p className="text-lg mb-4">The template "{params.id}" was not found</p>
          <p className="text-sm mb-6 opacity-80">
            Available templates: {Object.keys(templateUrls).slice(0, 5).join(", ")}...
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="w-full px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Go to Homepage
          </button>
        </div>
      </div>
    )
  }

  const handleClose = () => {
    try {
      if (window.history.length > 1) {
        window.history.back()
      } else {
        window.location.href = "/"
      }
    } catch (err) {
      window.location.href = "/"
    }
  }

  const handleOpenInNewTab = () => {
    window.open(templateUrl, "_blank")
  }

  const handleGoHome = () => {
    window.location.href = "/"
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
        <div className="text-center text-white max-w-md">
          <h1 className="text-2xl font-bold mb-4">Loading Error</h1>
          <p className="text-lg mb-6">There was an issue loading the template</p>
          <div className="space-y-3">
            <button
              onClick={handleOpenInNewTab}
              className="w-full px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Open Template in New Tab
            </button>
            <button
              onClick={handleGoHome}
              className="w-full px-6 py-3 bg-gray-600 text-white rounded-full font-semibold hover:bg-gray-700 transition-colors"
            >
              Go to Homepage
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4 mx-auto"></div>
          <p className="text-lg">Loading {templateTitle}...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      {/* Mobile-optimized control bar */}
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

      {/* Template iframe with error handling */}
      <iframe
        src={templateUrl}
        className={`w-full h-full border-0 ${isMobile ? "pt-12" : "pt-14"}`}
        title="Template Preview"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        allowFullScreen
        loading="eager"
        onError={() => {
          setError(true)
        }}
        style={{
          backgroundColor: "white",
          touchAction: "manipulation",
        }}
      />
    </div>
  )
}
