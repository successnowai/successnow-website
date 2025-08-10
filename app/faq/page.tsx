import type { Metadata } from "next"
import JsonLdScript from "@/components/json-ld-script"
import { generateFAQJsonLd } from "@/lib/json-ld"
import FAQClientPage from "./FAQClientPage"

export const metadata: Metadata = {
  title: "Frequently Asked Questions - SuccessNOW AI",
  description:
    "Get answers to common questions about SuccessNOW AI's services, pricing, setup time, and how our AI Super Agents can transform your business operations.",
  openGraph: {
    title: "Frequently Asked Questions - SuccessNOW AI",
    description:
      "Get answers to common questions about SuccessNOW AI's services, pricing, setup time, and how our AI Super Agents can transform your business operations.",
    url: "https://successnow.ai/faq",
  },
  alternates: {
    canonical: "https://successnow.ai/faq",
  },
}

export default function FAQPage() {
  const faqJsonLd = generateFAQJsonLd()

  return (
    <>
      <JsonLdScript data={faqJsonLd} />
      <FAQClientPage />
    </>
  )
}
