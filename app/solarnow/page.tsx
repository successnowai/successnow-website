import type { Metadata } from "next"
import { SolarNowClientPage } from "./SolarNowClientPage"

export const metadata: Metadata = {
  title: "SolarNOW - AI-Powered Solar Sales Solutions | SuccessNOW",
  description:
    "Transform your solar business with AI that qualifies leads, books consultations, and closes more deals. Never miss a lead with SolarNOW.",
}

export default function SolarNowPage() {
  return <SolarNowClientPage />
}
