import type { Metadata } from "next"
import PricingClientPage from "./PricingClientPage"

export const metadata: Metadata = {
  title: "Pricing - SuccessNOW AI | Affordable AI Solutions for Business",
  description:
    "Choose the perfect AI plan for your business. From starter packages to enterprise solutions, SuccessNOW AI offers flexible pricing with powerful features.",
  keywords:
    "AI pricing, business automation pricing, AI voice agents cost, lead generation pricing, CRM integration pricing",
  openGraph: {
    title: "Pricing - SuccessNOW AI",
    description: "Choose the perfect AI plan for your business. Flexible pricing with powerful features.",
    type: "website",
  },
}

export default function PricingPage() {
  return <PricingClientPage />
}
