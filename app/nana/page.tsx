import type { Metadata } from "next"
import NanaClientPage from "./NanaClientPage"

export const metadata: Metadata = {
  title: "SuccessNOW AI - Nana's Exclusive Offer",
  description: "Get AI-powered lead generation with Nana's exclusive discount code NANA2025. Save 15% on setup!",
}

export default function NanaPage() {
  return <NanaClientPage />
}
