import type { Metadata } from "next"
import FAQClientPage from "./FAQClientPage"
import JsonLdScript from "@/components/json-ld-script"
import { generateFaqPageJsonLd } from "@/lib/json-ld"
import { faqs } from "@/lib/data/faq-enhanced"

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about SuccessNOW.ai's AI Superagents, pricing, features, and how to get started.",
}

export default function FAQPage() {
  const faqPageJsonLd = generateFaqPageJsonLd(faqs)
  return (
    <>
      <JsonLdScript data={faqPageJsonLd} />
      <FAQClientPage />
    </>
  )
}
