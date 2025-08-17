import type { Metadata } from "next"
import AICommunicationClientPage from "./AICommunicationClientPage"

export const metadata: Metadata = {
  title: "AI Communication & Engagement - 24/7 Omnichannel AI Agents | SuccessNOW.ai",
  description:
    "AI Voice & Chat Agents handle calls, SMS, email, WhatsApp, Facebook/IG DMs, and web chat with smart missed-call text-back. All-in-One Inbox with $0.07/min AI voice calls.",
  keywords:
    "AI communication, omnichannel engagement, AI voice agents, chat agents, SMS automation, email automation, WhatsApp automation, Facebook messenger, Instagram DMs, web chat, missed call text back, all-in-one inbox",
  openGraph: {
    title: "AI Communication & Engagement - 24/7 Omnichannel AI Agents | SuccessNOW.ai",
    description:
      "AI Voice & Chat Agents handle calls, SMS, email, WhatsApp, Facebook/IG DMs, and web chat with smart missed-call text-back. All-in-One Inbox with $0.07/min AI voice calls.",
    url: "https://successnow.ai/features/ai-communication-engagement",
    siteName: "SuccessNOW.ai",
    images: [
      {
        url: "https://successnow.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SuccessNOW.ai AI Communication & Engagement",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Communication & Engagement - 24/7 Omnichannel AI Agents | SuccessNOW.ai",
    description:
      "AI Voice & Chat Agents handle calls, SMS, email, WhatsApp, Facebook/IG DMs, and web chat with smart missed-call text-back. All-in-One Inbox with $0.07/min AI voice calls.",
    images: ["https://successnow.ai/og-image.jpg"],
  },
  alternates: {
    canonical: "https://successnow.ai/features/ai-communication-engagement",
  },
}

export default function AICommunicationPage() {
  return <AICommunicationClientPage />
}
