"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

// Handle incomplete URLs like /temp instead of /template/[id]
export default function TempRedirectPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect incomplete /temp URLs to a default template
    router.replace("/template/auto-1")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4 mx-auto"></div>
        <p className="text-lg">Redirecting to template...</p>
      </div>
    </div>
  )
}
