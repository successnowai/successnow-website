"use client"

import { useState, useEffect } from "react"

export default function SignupPage() {
  const [isAnnual, setIsAnnual] = useState(true)

  useEffect(() => {
    // Redirect to the external signup funnel
    window.location.href = "https://signup.successnow.ai"
  }, [])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mb-4 mx-auto"></div>
        <p className="text-xl">Redirecting to signup...</p>
      </div>
    </div>
  )
}
