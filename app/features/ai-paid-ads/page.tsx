import type { Metadata } from "next"
import AIPaidAdsClientPage from "./AIPaidAdsClientPage"

export const metadata: Metadata = {
  title: "AI-Powered Advertising - AdsNow.ai | Automated Ad Campaigns",
  description:
    "AdsNow.ai creates complete ad campaigns in minutes across all channels. AI-generated copy, images, targeting, and optimization. 90% cost reduction with doubled click-through rates.",
  keywords:
    "AI advertising, AdsNow.ai, automated ad campaigns, AI ad platform, Facebook ads AI, Google ads AI, AI marketing automation, programmatic advertising",
  openGraph: {
    title: "AI-Powered Advertising - Automated Ad Campaigns",
    description:
      "Fully AI-driven ad platform that plans, launches, and optimizes campaigns across all channels automatically. Cut ad costs by 90% while doubling performance.",
    type: "website",
  },
}

export default function AIPaidAdsPage() {
  return <AIPaidAdsClientPage />
}
