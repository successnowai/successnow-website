import type { Metadata } from "next"
import { generateFAQJsonLd } from "@/lib/json-ld"
import { JsonLdScript } from "@/components/json-ld-script"
import FAQClientPage from "./FAQClientPage"
// Use a named import for the JSON data to avoid default export issues
import { mainEntity as faqItems } from "@/lib/data/faq-enhanced.json"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | SuccessNOW AI",
  description:
    "Find answers to common questions about SuccessNOW AI Superagents. Learn about pricing, implementation, industries served, ROI, and how our AI agents can transform your business.",
  alternates: {
    canonical: "https://successnow.ai/faq",
  },
}

export default function FAQPage() {
  const faqJsonLd = generateFAQJsonLd(faqItems)

  return (
    <>
      <JsonLdScript data={faqJsonLd} />
      <FAQClientPage />
    </>
  )
}
