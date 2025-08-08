import type { Metadata } from "next"
import RoofersNowClientPage from "./RoofersNowClientPage"

export const metadata: Metadata = {
  title: "RoofersNOW - AI-Powered Roofing Company Solutions | SuccessNOW",
  description:
    "Transform your roofing company with AI that qualifies leads, books estimates, and follows up on every quote. Close more jobs with RoofersNOW.",
}

export default function RoofersNowPage() {
  return <RoofersNowClientPage />
}
