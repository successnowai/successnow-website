import type { Metadata } from "next"
import { DentistsNowClientPage } from "./DentistsNowClientPage"

export const metadata: Metadata = {
  title: "DentistsNOW - AI-Powered Dental Practice Solutions | SuccessNOW",
  description:
    "Transform your dental practice with AI that books appointments, confirms them, and nurtures every patient. Boost your practice with DentistsNOW.",
}

export default function DentistsNowPage() {
  return <DentistsNowClientPage />
}
