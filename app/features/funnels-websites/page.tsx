import type { Metadata } from "next"
import FunnelsWebsitesClientPage from "./FunnelsWebsitesClientPage"

export const metadata: Metadata = {
  title: "Funnels & Websites - AI Smart Websites & Funnel Builder | SuccessNOW.ai",
  description:
    "AI Smart Websites with live AI voice & chat, drag-and-drop funnel builder, AI-powered A/B testing, and membership & course hosting. Funnels + websites + AI engagement in one system.",
  keywords:
    "AI smart websites, funnel builder, drag and drop funnel builder, AI A/B testing, membership hosting, course hosting, website builder, sales funnels, landing pages, AI engagement",
  openGraph: {
    title: "Funnels & Websites - AI Smart Websites & Funnel Builder | SuccessNOW.ai",
    description:
      "AI Smart Websites with live AI voice & chat, drag-and-drop funnel builder, AI-powered A/B testing, and membership & course hosting. Funnels + websites + AI engagement in one system.",
    url: "https://successnow.ai/features/funnels-websites",
    siteName: "SuccessNOW.ai",
    images: [
      {
        url: "https://successnow.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SuccessNOW.ai Funnels & Websites",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funnels & Websites - AI Smart Websites & Funnel Builder | SuccessNOW.ai",
    description:
      "AI Smart Websites with live AI voice & chat, drag-and-drop funnel builder, AI-powered A/B testing, and membership & course hosting. Funnels + websites + AI engagement in one system.",
    images: ["https://successnow.ai/og-image.jpg"],
  },
  alternates: {
    canonical: "https://successnow.ai/features/funnels-websites",
  },
}

export default function FunnelsWebsitesPage() {
  return <FunnelsWebsitesClientPage />
}
