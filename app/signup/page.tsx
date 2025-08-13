import type { Metadata } from "next"
import SignupClientPage from "./SignupClientPage"

export const metadata: Metadata = {
  title: "Sign Up - SuccessNOW AI | Get Your AI Agent Today",
  description:
    "Transform your business with AI agents that work 24/7. Enterprise and custom plans available. Setup in 24 hours with 30-day money-back guarantee.",
  keywords: "AI agent signup, business automation, lead generation, sales AI, enterprise AI solutions",
  openGraph: {
    title: "Sign Up - SuccessNOW AI | Get Your AI Agent Today",
    description:
      "Transform your business with AI agents that work 24/7. Enterprise and custom plans available. Setup in 24 hours with 30-day money-back guarantee.",
    url: "https://successnow.ai/signup",
    siteName: "SuccessNOW AI",
    images: [
      {
        url: "/images/successnow-logo.png",
        width: 1200,
        height: 630,
        alt: "SuccessNOW AI - Sign Up for AI Agents",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign Up - SuccessNOW AI | Get Your AI Agent Today",
    description:
      "Transform your business with AI agents that work 24/7. Enterprise and custom plans available. Setup in 24 hours with 30-day money-back guarantee.",
    images: ["/images/successnow-logo.png"],
  },
  alternates: {
    canonical: "/signup",
  },
}

export default function SignupPage() {
  return <SignupClientPage />
}
