import type { Metadata } from "next"
import ReputationClientPage from "./ReputationClientPage"

export const metadata: Metadata = {
  title: "Reputation & Referrals - AI Review Engine & Referral Bot | SuccessNOW.ai",
  description:
    "AI Review Engine automates 5-star review requests, Referral Bot manages rewards, and AI monitors & replies to reviews. Reviews + referrals inside CRM for higher retention & growth.",
  keywords:
    "AI review engine, automated review requests, referral bot, review management, referral rewards, reputation management, AI review monitoring, review automation, referral automation",
  openGraph: {
    title: "Reputation & Referrals - AI Review Engine & Referral Bot | SuccessNOW.ai",
    description:
      "AI Review Engine automates 5-star review requests, Referral Bot manages rewards, and AI monitors & replies to reviews. Reviews + referrals inside CRM for higher retention & growth.",
    url: "https://successnow.ai/features/reputation-referrals",
    siteName: "SuccessNOW.ai",
    images: [
      {
        url: "https://successnow.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SuccessNOW.ai Reputation & Referrals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reputation & Referrals - AI Review Engine & Referral Bot | SuccessNOW.ai",
    description:
      "AI Review Engine automates 5-star review requests, Referral Bot manages rewards, and AI monitors & replies to reviews. Reviews + referrals inside CRM for higher retention & growth.",
    images: ["https://successnow.ai/og-image.jpg"],
  },
  alternates: {
    canonical: "https://successnow.ai/features/reputation-referrals",
  },
}

export default function ReputationPage() {
  return <ReputationClientPage />
}
