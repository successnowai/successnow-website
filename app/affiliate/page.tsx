import type { Metadata } from "next"
import AffiliateClientPage from "./AffiliateClientPage"

export const metadata: Metadata = {
  title: "Affiliate Program - SuccessNOW.ai",
  description:
    "Join our affiliate program and earn 25% recurring commission on all referrals. Simple, flat-rate structure with no tiers or complexity.",
}

export default function AffiliatePage() {
  return <AffiliateClientPage />
}
