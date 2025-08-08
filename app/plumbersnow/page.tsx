import type { Metadata } from "next"
import PlumbersNowClientPage from "./PlumbersNowClientPage"

export const metadata: Metadata = {
  title: "PlumbersNOW - AI-Powered Plumbing Business Solutions | SuccessNOW",
  description:
    "Transform your plumbing business with a 24/7 AI dispatcher that books jobs, follows up on quotes, and keeps your schedule full. Grow your business with PlumbersNOW.",
}

export default function PlumbersNowPage() {
  return <PlumbersNowClientPage />
}
