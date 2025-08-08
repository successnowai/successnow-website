import type { Metadata } from "next"
import { RoofersNowClientPage } from "./RoofersNowClientPage"

export const metadata: Metadata = {
  title: "RoofersNOW - AI-Powered Roofing Contractor Solutions | SuccessNOW",
  description:
    "Transform your roofing business with AI that qualifies leads, books inspections, and wins more jobs. Never miss a lead with RoofersNOW.",
}

export default function RoofersNowPage() {
  return <RoofersNowClientPage />
}
