import type { Metadata } from "next"
import AIMarketingClientPage from "./AIMarketingClientPage"

export const metadata: Metadata = {
  title: "AI Marketing Automation - Email, SMS & Social Media AI | SuccessNOW.ai",
  description:
    "Email + SMS campaigns with AI-written copy, AI Social Media Scheduler across FB, IG, TikTok, LinkedIn, AI Content Creation Engine, and reactivation campaigns built-in.",
  keywords:
    "AI marketing automation, email automation, SMS campaigns, social media scheduler, AI content creation, drip campaigns, reactivation campaigns, AI copywriting, marketing automation platform",
  openGraph: {
    title: "AI Marketing Automation - Email, SMS & Social Media AI | SuccessNOW.ai",
    description:
      "Email + SMS campaigns with AI-written copy, AI Social Media Scheduler across FB, IG, TikTok, LinkedIn, AI Content Creation Engine, and reactivation campaigns built-in.",
    url: "https://successnow.ai/features/ai-marketing-automation",
    siteName: "SuccessNOW.ai",
    images: [
      {
        url: "https://successnow.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SuccessNOW.ai AI Marketing Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Marketing Automation - Email, SMS & Social Media AI | SuccessNOW.ai",
    description:
      "Email + SMS campaigns with AI-written copy, AI Social Media Scheduler across FB, IG, TikTok, LinkedIn, AI Content Creation Engine, and reactivation campaigns built-in.",
    images: ["https://successnow.ai/og-image.jpg"],
  },
  alternates: {
    canonical: "https://successnow.ai/features/ai-marketing-automation",
  },
}

export default function AIMarketingPage() {
  return <AIMarketingClientPage />
}
