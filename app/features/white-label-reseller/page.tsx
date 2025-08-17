import type { Metadata } from "next"
import WhiteLabelClientPage from "./WhiteLabelClientPage"

export const metadata: Metadata = {
  title: "Partner Program - Join SuccessNOW.ai Systems Portfolio | SuccessNOW.ai",
  description:
    "Join the SuccessNOW.ai Partner Program and earn recurring revenue from our complete AI systems portfolio including AdsNOW.ai, SEOExperts.ai, and SalesBotNOW.ai. We handle implementation and support.",
  keywords:
    "AI partner program, revenue sharing, AI systems portfolio, AdsNOW partner, SEOExperts partner, SalesBotNOW partner, AI commission program, recurring revenue, partner dashboard",
  openGraph: {
    title: "Partner Program - Join SuccessNOW.ai Systems Portfolio | SuccessNOW.ai",
    description:
      "Join the SuccessNOW.ai Partner Program and earn recurring revenue from our complete AI systems portfolio. We handle all implementation and support while you earn generous commissions.",
    type: "website",
    url: "https://successnow.ai/features/white-label-reseller",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner Program - Join SuccessNOW.ai Systems Portfolio | SuccessNOW.ai",
    description:
      "Join the SuccessNOW.ai Partner Program and earn recurring revenue from our complete AI systems portfolio. We handle all implementation and support while you earn generous commissions.",
  },
}

export default function WhiteLabelPage() {
  return <WhiteLabelClientPage />
}
