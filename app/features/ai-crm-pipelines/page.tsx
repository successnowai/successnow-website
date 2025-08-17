import type { Metadata } from "next"
import AICRMClientPage from "./AICRMClientPage"

export const metadata: Metadata = {
  title: "AI CRM & Pipelines - Automated Lead Management & Scoring | SuccessNOW.ai",
  description:
    "AI CRM organizes leads + conversations automatically with built-in AI Lead Scoring, pipelines with AI-suggested next steps, and automated tasks & workflows. No consultants needed.",
  keywords:
    "AI CRM, automated lead management, AI lead scoring, sales pipelines, automated workflows, CRM automation, lead organization, sales automation, AI-powered CRM, customer relationship management",
  openGraph: {
    title: "AI CRM & Pipelines - Automated Lead Management & Scoring | SuccessNOW.ai",
    description:
      "AI CRM organizes leads + conversations automatically with built-in AI Lead Scoring, pipelines with AI-suggested next steps, and automated tasks & workflows. No consultants needed.",
    url: "https://successnow.ai/features/ai-crm-pipelines",
    siteName: "SuccessNOW.ai",
    images: [
      {
        url: "https://successnow.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SuccessNOW.ai AI CRM & Pipelines",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI CRM & Pipelines - Automated Lead Management & Scoring | SuccessNOW.ai",
    description:
      "AI CRM organizes leads + conversations automatically with built-in AI Lead Scoring, pipelines with AI-suggested next steps, and automated tasks & workflows. No consultants needed.",
    images: ["https://successnow.ai/og-image.jpg"],
  },
  alternates: {
    canonical: "https://successnow.ai/features/ai-crm-pipelines",
  },
}

export default function AICRMPage() {
  return <AICRMClientPage />
}
