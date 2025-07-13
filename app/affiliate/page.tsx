import type { Metadata } from "next"
import AffiliateClientPage from "./AffiliateClientPage"

export const metadata: Metadata = {
  title: "Affiliate Program - SuccessNOW.ai",
  description:
    "Join our affiliate program and earn up to 40% commission on recurring revenue. Two-tier program with Standard and Platinum levels.",
}

export default function AffiliatePage() {
  return <AffiliateClientPage />
}
