import type { Metadata } from "next"
import { HVACNowClientPage } from "./HVACNowClientPage"

export const metadata: Metadata = {
  title: "HVACNOW - AI-Powered HVAC Business Solutions | SuccessNOW",
  description:
    "Transform your HVAC business with AI that books service calls 24/7, automates quotes, and sells maintenance plans. Boost your revenue with HVACNOW.",
}

export default function HVACNowPage() {
  return <HVACNowClientPage />
}
