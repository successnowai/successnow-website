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
  const [error, setError] = useState<string | null>(null)

  // Simplified masked URLs
  const templateUrls: Record<string, string> = {
    "auto-1": "/api/proxy/auto-1",
    "auto-2": "/api/proxy/auto-2",
    "auto-3": "/api/proxy/auto-3",
    "realtor-1": "/api/proxy/realtor-1",
    "realtor-2": "/api/proxy/realtor-2",
    "realtor-3": "/api/proxy/realtor-3",
    "mortgage-1": "/api/proxy/mortgage-1",
    "mortgage-2": "/api/proxy/mortgage-2",
    "mortgage-3": "/api/proxy/mortgage-3",
    "medspa-1": "/api/proxy/medspa-1",
    "medspa-2": "/api/proxy/medspa-2",
    "medspa-3": "/api/proxy/medspa-3",
    "lawyer-1": "/api/proxy/lawyer-1",
    "lawyer-2": "/api/proxy/lawyer-2",
    "lawyer-3": "/api/proxy/lawyer-3",
    "gym-1": "/api/proxy/gym-1",
    "gym-2": "/api/proxy/gym-2",
    "gym-3": "/api/proxy/gym-3",
  }

  const templateTitles: Record<string, string> = {
    "auto-1": "Auto Dealer Template",
    "auto-2": "Auto Dealer Template 2",
    "auto-3": "Auto Dealer Template 3",
    "realtor-1": "Real Estate Template",
    "realtor-2": "Realtor Professional Template",
    "realtor-3": "Real Estate Template 3",
    "mortgage-1": "Mortgage Broker Template",
    "mortgage-2": "Mortgage Broker Template 2",
    "mortgage-3": "Mortgage Broker Template 3",
    "medspa-1": "Medical Spa Template",
    "medspa-2": "Medical Spa Template 2",
    "medspa-3": "Medical Spa Template 3",
    "lawyer-1": "Law Firm Template",
    "lawyer-2": "Law Firm Template 2",
    "lawyer-3": "Law Firm Template 3",
    "gym-1": "Martial Arts Gym Template",
    "gym-2": "Yoga Studio Template",
    "gym-3": "Fitness Center Template",
  }

  useEffect(() => {
    // Mobile detection
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Set page title
    const title = templateTitles[params.id] || "Website Template"
    document.title = `${title} - SuccessNOW`

    // Loading delay
    const timer = setTimeout(() => setLoading(false), 800)

    return () => {
      window.removeEventListener("resize", checkMobile)
      clearTimeout(timer)
    }
  }, [params.id])

  const templateUrl = templateUrls[params.id]
  const templateTitle = templateTitles[params.id] || "Website Template"

  // Template not found
  if (!templateUrl) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
        <div className="text-center text-white max-w-md">
          <h1 className="text-2xl font-bold mb-4">Template Not Available</h1>
          <p className="text-lg mb-4">Template "{params.id}" could not be found.</p>
          <button
            onClick={() => (window.location.href = "/")}
            className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    )
  }

  // Loading screen
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4 mx-auto"></div>
          <p className="text-lg font-medium">{templateTitle}</p>
          <p className="text-sm mt-2 opacity-80">Loading on {isMobile ? "Mobile" : "Desktop"}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen w-screen overflow-hidden relative bg-white">
      {/* Mobile-optimized control bar */}
      <div className={`absolute top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm ${isMobile ? "p-2" : "p-3"}`}>
        <div className="flex items-center justify-between">
          <div
            className="text-white font-medium truncate flex-1 mr-3"
            style={{
              fontSize: isMobile ? "14px" : "16px",
            }}
          >
            {templateTitle}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => (window.location.href = "/")}
              className={`bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-full transition-colors ${
                isMobile ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
              }`}
            >
              {isMobile ? "🏠" : "Home"}
            </button>
            <button
              onClick={() => window.open(templateUrl, "_blank")}
              className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-colors ${
                isMobile ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
              }`}
            >
              {isMobile ? "↗" : "New Tab"}
            </button>
            <button
              onClick={() => (window.history.length > 1 ? window.history.back() : (window.location.href = "/"))}
              className={`bg-red-500 hover:bg-red-600 text-white font-bold rounded-full transition-colors ${
                isMobile ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
              }`}
            >
              {isMobile ? "✕" : "Close"}
            </button>
          </div>
        </div>
      </div>

      {/* Template iframe - mobile optimized */}
      <iframe
        src={templateUrl}
        className={`w-full h-full border-0 ${isMobile ? "pt-12" : "pt-14"}`}
        title={templateTitle}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        allowFullScreen
        loading="eager"
        onLoad={() => {
          console.log("✅ Template loaded:", templateUrl)
          setError(null)
        }}
        onError={() => {
          console.error("❌ Template load error:", templateUrl)
          setError("Failed to load template")
        }}
        style={{
          backgroundColor: "white",
          border: "none",
          outline: "none",
          // Mobile-specific optimizations
          ...(isMobile && {
            touchAction: "manipulation",
            WebkitOverflowScrolling: "touch",
          }),
        }}
      />

      {/* Error overlay */}
      {error && (
        <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-purple-600 flex items-center justify-center p-4 z-40">
          <div className="text-center text-white max-w-md">
            <h2 className="text-xl font-bold mb-4">Loading Error</h2>
            <p className="mb-6">{error}</p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-white text-red-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                className="px-6 py-3 bg-gray-600 text-white rounded-full font-semibold hover:bg-gray-700 transition-colors"
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
