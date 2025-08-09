import { Suspense } from "react"
import AffiliateApplicationPage from "./AffiliateApplicationPage"

export default function Page() {
  return (
    <Suspense
      fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>}
    >
      <AffiliateApplicationPage />
    </Suspense>
  )
}
