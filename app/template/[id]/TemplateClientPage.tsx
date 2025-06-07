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

  // EXACT SAME TEMPLATE MAPPING - NO MOBILE/DESKTOP DIFFERENCES
  const templateUrls: Record<string, string> = {
    "auto-1": "https://v0-autodele-now-template-site.vercel.app/",
    "auto-2": "https://v0-autodele-now-template-site.vercel.app/",
    "auto-3": "https://v0-autodele-now-template-site.vercel.app/",
    "auto-4": "https://v0-autodele-now-template-site.vercel.app/",
    "auto-5": "https://v0-autodele-now-template-site.vercel.app/",
    "medspa-1": "https://v0-med-spa-now-client-template-1.vercel.app/",
    "medspa-2": "https://v0-med-spa-now-client-template-1.vercel.app/",
    "medspa-3": "https://v0-med-spa-now-client-template-1.vercel.app/",
    "medspa-4": "https://v0-med-spa-now-client-template-1.vercel.app/",
    "medspa-5": "https://v0-med-spa-now-client-template-1.vercel.app/",
    "realtor-1": "https://v0-realtor-template-site-1.vercel.app/",
    "realtor-2": "https://v0-realtor-professional-template.vercel.app/",
    "realtor-3": "https://v0-realtor-template-site-1.vercel.app/",
    "realtor-4": "https://v0-realtor-professional-template.vercel.app/",
    "realtor-5": "https://v0-realtor-template-site-1.vercel.app/",
    "lawyer-1": "https://v0-lawyer-now-template-1.vercel.app/",
    "lawyer-2": "https://v0-lawyer-now-template-1.vercel.app/",
    "lawyer-3": "https://v0-lawyer-now-template-1.vercel.app/",
    "lawyer-4": "https://v0-lawyer-now-template-1.vercel.app/",
    "lawyer-5": "https://v0-lawyer-now-template-1.vercel.app/",
    "mortgage-1": "https://v0-free-idx-api-options.vercel.app/",
    "mortgage-2": "https://v0-free-idx-api-options.vercel.app/",
    "mortgage-3": "https://v0-free-idx-api-options.vercel.app/",
    "mortgage-4": "https://v0-free-idx-api-options.vercel.app/",
    "mortgage-5": "https://v0-free-idx-api-options.vercel.app/",
    "gym-1": "https://v0-autodele-now-template-site.vercel.app/",
    "gym-2": "https://v0-autodele-now-template-site.vercel.app/",
    "gym-3": "https://v0-autodele-now-template-site.vercel.app/",
    "gym-4": "https://v0-autodele-now-template-site.vercel.app/",
    "gym-5": "https://v0-autodele-now-template-site.vercel.app/",
  }

  const templateTitles: Record<string, string> = {
    "auto-1": "Auto Dealer Website Template",
    "auto-2": "Auto Dealer Website Template 2",
    "auto-3": "Auto Dealer Website Template 3",
    "auto-4": "Auto Dealer Website Template 4",
    "auto-5": "Auto Dealer Website Template 5",
    "medspa-1": "Medical Spa Website Template",
    "medspa-2": "Medical Spa Website Template 2",
    "medspa-3": "Medical Spa Website Template 3",
    "medspa-4": "Medical Spa Website Template 4",
    "medspa-5": "Medical Spa Website Template 5",
    "realtor-1": "Real Estate Website Template",
    "realtor-2": "Realtor Professional Template",
    "realtor-3": "Real Estate Website Template 3",
    "realtor-4": "Realtor Professional Template 4",
    "realtor-5": "Real Estate Website Template 5",
    "lawyer-1": "Law Firm Website Template",
    "lawyer-2": "Law Firm Website Template 2",
    "lawyer-3": "Law Firm Website Template 3",
    "lawyer-4": "Law Firm Website Template 4",
    "lawyer-5": "Law Firm Website Template 5",
    "mortgage-1": "Mortgage Broker Template",
    "mortgage-2": "Mortgage Broker Template 2",
    "mortgage-3": "Mortgage Broker Template 3",
    "mortgage-4": "Mortgage Broker Template 4",
    "mortgage-5": "Mortgage Broker Template 5",
    "gym-1": "Gym & Fitness Website Template",
    "gym-2": "Gym & Fitness Website Template 2",
    "gym-3": "Gym & Fitness Website Template 3",
    "gym-4": "Gym & Fitness Website Template 4",
    "gym-5": "Gym & Fitness Website Template 5",
  }

  useEffect(() => {
    // IDENTICAL MOBILE DETECTION FOR DESKTOP AND MOBILE
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 768
      setIsMobile(isMobileDevice)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // IDENTICAL TITLE SETTING
    const title = templateTitles[params.id] || "Website Template"
    document.title = `${title} - SuccessNOW`

    // COMPREHENSIVE LOGGING FOR DEBUGGING
    console.log("=== TEMPLATE LOADING DEBUG ===")
    console.log("Template ID received:", params.id)
    console.log("Template URL found:", templateUrls[params.id])
    console.log("Template title:", title)
    console.log("Is mobile device:", window.innerWidth <= 768)
    console.log("User agent:", navigator.userAgent)
    console.log("Available template IDs:", Object.keys(templateUrls))
    console.log("================================")

    // IDENTICAL LOADING DELAY
    setTimeout(() => setLoading(false), 500)

    return () => window.removeEventListener("resize", checkMobile)
  }, [params.id])

  // EXACT SAME TEMPLATE URL RETRIEVAL
  const templateUrl = templateUrls[params.id]
  const templateTitle = templateTitles[params.id] || "Website Template"

  // IDENTICAL ERROR HANDLING
  if (!templateUrl) {
    console.error("Template not found for ID:", params.id)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
        <div className="text-center text-white max-w-md">
          <h1 className="text-2xl font-bold mb-4">Template Not Found</h1>
          <p className="text-lg mb-4">Template ID: "{params.id}"</p>
          <p className="text-sm mb-2">Device: {isMobile ? "Mobile" : "Desktop"}</p>
          <p className="text-sm mb-6">Available: {Object.keys(templateUrls).slice(0, 5).join(", ")}</p>
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

  // IDENTICAL HANDLER FUNCTIONS
  const handleClose = () => {
    if (window.history.length > 1) {
      window.history.back()
    } else {
      window.location.href = "/"
    }
  }

  const handleOpenInNewTab = () => {
    window.open(templateUrl, "_blank")
  }

  const handleGoHome = () => {
    window.location.href = "/"
  }

  // IDENTICAL LOADING STATE
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4 mx-auto"></div>
          <p className="text-lg">Loading {templateTitle}...</p>
          <p className="text-sm mt-2 opacity-80">{isMobile ? "Mobile" : "Desktop"} Device</p>
        </div>
      </div>
    )
  }

  // IDENTICAL RENDERING - NO MOBILE/DESKTOP DIFFERENCES
  return (
    <div className="h-screen w-screen overflow-hidden relative">
      {/* IDENTICAL CONTROL BAR */}
      <div className={`absolute top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm ${isMobile ? "p-2" : "p-3"}`}>
        <div className="flex items-center justify-between">
          <div className="text-white text-sm font-medium truncate flex-1 mr-4">{templateTitle}</div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleGoHome}
              className={`bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-full transition-colors ${
                isMobile ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
              }`}
            >
              {isMobile ? "🏠" : "Home"}
            </button>
            <button
              onClick={handleOpenInNewTab}
              className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-colors ${
                isMobile ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
              }`}
            >
              {isMobile ? "↗" : "New Tab"}
            </button>
            <button
              onClick={handleClose}
              className={`bg-red-500 hover:bg-red-600 text-white font-bold rounded-full transition-colors ${
                isMobile ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
              }`}
            >
              {isMobile ? "✕" : "Close"}
            </button>
          </div>
        </div>
      </div>

      {/* IDENTICAL IFRAME - EXACT SAME ATTRIBUTES AND STYLING */}
      <iframe
        src={templateUrl}
        className={`w-full h-full border-0 ${isMobile ? "pt-12" : "pt-14"}`}
        title="Template Preview"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        allowFullScreen
        loading="eager"
        onLoad={() => {
          console.log("Template iframe loaded successfully:", templateUrl)
        }}
        onError={(e) => {
          console.error("Template iframe failed to load:", templateUrl, e)
          setError(true)
        }}
        style={{
          backgroundColor: "white",
          touchAction: "manipulation",
          border: "none",
          outline: "none",
        }}
      />
    </div>
  )
}
