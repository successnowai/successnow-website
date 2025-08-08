import type { Metadata } from "next"
import ContractorsNowClientPage from "./ContractorsNowClientPage"

export const metadata: Metadata = {
  title: "ContractorsNOW - AI-Powered General Contractor Solutions | SuccessNOW",
  description:
    "Transform your contracting business with AI that qualifies leads, books estimates, and wins more bids. Streamline your projects with ContractorsNOW.",
}

export default function ContractorsNowPage() {
  return <ContractorsNowClientPage />
}
