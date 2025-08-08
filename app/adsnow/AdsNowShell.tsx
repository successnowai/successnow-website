"use client"

import dynamic from "next/dynamic"

// Dynamically load the full AdsNOW UI on the browser only.
// Using a named export to avoid default export issues.
const AdsNowClientPage = dynamic(
  () => import("./AdsNowClientPage").then(mod => mod.AdsNowClientPage),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading Super Agent...</div>
      </div>
    ),
  }
)

export default function AdsNowShell() {
  return <AdsNowClientPage />
}
