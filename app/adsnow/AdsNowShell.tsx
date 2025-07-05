"use client"

import dynamic from "next/dynamic"

// Dynamically load the full AdsNOW UI on the browser only.
const AdsNowClientPage = dynamic(() => import("./AdsNowClientPage"), {
  ssr: false,
  loading: () => null,
})

export default function AdsNowShell() {
  return <AdsNowClientPage />
}
