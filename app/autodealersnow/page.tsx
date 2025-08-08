import type { Metadata } from "next"
import { AutoDealersNowClient } from "./AutoDealersNowClient"

export const metadata: Metadata = {
  title: "AutoDealersNOW - AI-Powered Automotive Solutions | SuccessNOW",
  description:
    "Transform your dealership with AI that books test drives, confirms appointments, and nurtures every lead until they buy. Boost sales with AutoDealersNOW.",
}

export default function AutoDealersNowPage() {
  return <AutoDealersNowClient />
}
