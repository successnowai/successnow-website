import type { Metadata } from "next"
import TermsClientPage from "./TermsClientPage"

export const metadata: Metadata = {
  title: "Terms and Conditions | SuccessNOW.ai",
  description: "Complete Terms and Conditions of Use for SuccessNOW.ai AI automation platform and services.",
  keywords: "terms of service, terms and conditions, legal agreement, SuccessNOW.ai, AI automation",
}

export default function TermsPage() {
  return <TermsClientPage />
}
