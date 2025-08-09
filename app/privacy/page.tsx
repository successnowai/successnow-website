import type { Metadata } from "next"
import PrivacyClientPage from "./PrivacyClientPage"

export const metadata: Metadata = {
  title: "Privacy Policy | SuccessNOW AI - Data Protection & Privacy Rights",
  description:
    "Learn how SuccessNOW AI collects, uses, and protects your personal information. Comprehensive privacy policy covering AI interactions, data rights, and security measures.",
  keywords: "privacy policy, data protection, AI privacy, personal information, data rights, CCPA, GDPR compliance",
  openGraph: {
    title: "Privacy Policy | SuccessNOW AI",
    description:
      "Comprehensive privacy policy covering data collection, AI interactions, and your privacy rights with SuccessNOW AI platform.",
    type: "website",
  },
}

export default function PrivacyPage() {
  return <PrivacyClientPage />
}
