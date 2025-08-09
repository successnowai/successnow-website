"use client"

import { useEffect, useState } from "react"

// Simple redirect page that handles incomplete URLs
export default function TempRedirectPage() {
  const [redirecting, setRedirecting] = useState(true)

  useEffect(() => {
    // Use window.location for more reliable mobile redirect
    const timer = setTimeout(() => {
      try {
        window.location.href = "/template/auto-1"
      } catch (error) {
        // Fallback if redirect fails
        setRedirecting(false)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleManualRedirect = () => {
    window.location.href = "/template/auto-1"
  }

  if (!redirecting) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
        <div className="text-center text-white max-w-md">
          <h1 className="text-2xl font-bold mb-4">Loading Template</h1>
          <p className="text-lg mb-6">Click below to view the template</p>
          <button
            onClick={handleManualRedirect}
            className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            View Template
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4 mx-auto"></div>
        <p className="text-lg">Redirecting to template...</p>
      </div>
    </div>
  )
}
