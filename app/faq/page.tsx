import type { Metadata } from "next"
import FAQClientPage from "./FAQClientPage"

export const metadata: Metadata = {
  title: "FAQ - SuccessNOW AI | Frequently Asked Questions",
  description:
    "Get answers to frequently asked questions about SuccessNOW AI's voice and chat automation solutions for businesses.",
  keywords: "FAQ, questions, SuccessNOW AI, voice automation, chat automation, AI agents, business automation",
}

export default function FAQPage() {
  return <FAQClientPage />
}
