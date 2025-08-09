"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  const handleGoHome = () => {
    window.location.href = "/"
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <div className="text-center text-white max-w-md">
        <h1 className="text-2xl font-bold mb-4">Something went wrong!</h1>
        <p className="text-lg mb-6">We encountered an error while loading the page.</p>
        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Try Again
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
