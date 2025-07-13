import type { Metadata } from "next"
import AffiliateApplicationPage from "./AffiliateApplicationPage"

export const metadata: Metadata = {
  title: "Apply - Affiliate Program | SuccessNOW",
  description: "Apply to join our affiliate program and start earning recurring commissions.",
}

export default function Page() {
  return <AffiliateApplicationPage />
}
