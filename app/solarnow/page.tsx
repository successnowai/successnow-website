import type { Metadata } from "next"
import SolarNowClientPage from "./SolarNowClientPage"

export const metadata: Metadata = {
  title: "SolarNOW - AI-Powered Solar Company Solutions | SuccessNOW",
  description:
    "Transform your solar company with AI that qualifies leads, books consultations, and nurtures every prospect. Boost your installations with SolarNOW.",
}

export default function SolarNowPage() {
  return <SolarNowClientPage />
}
