"use client"

import { useEffect } from "react"
import { Loader2 } from "lucide-react"

interface SignupRedirectClientProps {
  ghlUrl: string
}

export default function SignupRedirectClient({ ghlUrl }: SignupRedirectClientProps) {
  useEffect(() => {
    // We only redirect if the URL is not a placeholder
    if (ghlUrl && !ghlUrl.includes("placeholder")) {
      window.location.href = ghlUrl
    }
  }, [ghlUrl])

  // If the URL is a placeholder, show a configuration message to the site owner
  if (ghlUrl && ghlUrl.includes("placeholder")) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 text-center">
        <div className="w-full max-w-lg rounded-lg bg-white p-8 shadow-2xl">
          <h1 className="mb-4 text-2xl font-bold text-gray-800">Configuration Required</h1>
          <p className="mb-6 text-gray-600">
            This signup page is not yet active. The GoHighLevel form URL needs to be configured by the site owner to
            begin accepting signups.
          </p>
          <div className="rounded-md bg-yellow-100 p-4 text-left text-sm text-yellow-800">
            <p>
              <span className="font-semibold">Developer Note:</span> Please replace the placeholder URL in the
              corresponding signup page file (e.g.,{" "}
              <code className="rounded bg-yellow-200 px-1 py-0.5 font-mono">app/dentistsnow/signup/page.tsx</code>) with
              your actual GoHighLevel form URL.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // If the URL is valid, show a redirecting message
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
      <p className="mt-4 text-lg font-semibold text-gray-700">Redirecting to our secure signup page...</p>
      <p className="text-sm text-gray-500">Please wait a moment.</p>
    </div>
  )
}
