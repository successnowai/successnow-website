import type { Metadata } from "next"
import ChiropractorsNowClientPage from "./ChiropractorsNowClientPage"

export const metadata: Metadata = {
  title: "ChiropractorsNOW - AI-Powered Chiropractic Practice Solutions | SuccessNOW",
  description:
    "Transform your chiropractic practice with AI that books appointments, confirms them, and nurtures every patient. Boost your practice with ChiropractorsNOW.",
}

export default function ChiropractorsNowPage() {
  return <ChiropractorsNowClientPage />
}
