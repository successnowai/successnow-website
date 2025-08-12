import type { Metadata } from "next"
import PricingClientPage from "./PricingClientPage"

export const metadata: Metadata = {
  title: "Pricing - SuccessNOW AI",
  description: "Choose the perfect AI solution for your business. Transparent pricing with no hidden fees.",
  openGraph: {
    title: "Pricing - SuccessNOW AI",
    description: "Choose the perfect AI solution for your business. Transparent pricing with no hidden fees.",
    url: "https://successnow.ai/pricing",
    siteName: "SuccessNOW AI",
    images: [
      {
        url: "https://successnow.ai/images/pricing-og.png",
        width: 1200,
        height: 630,
        alt: "SuccessNOW AI Pricing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing - SuccessNOW AI",
    description: "Choose the perfect AI solution for your business. Transparent pricing with no hidden fees.",
    images: ["https://successnow.ai/images/pricing-og.png"],
  },
}

export default function PricingPage() {
  return <PricingClientPage />
}
