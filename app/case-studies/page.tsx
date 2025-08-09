import type { Metadata } from "next"
import CaseStudiesClientPage from "./CaseStudiesClientPage"

export const metadata: Metadata = {
  title: "Case Studies - How Businesses Save $80K-$200K Annually | SuccessNOW",
  description:
    "See real results from businesses across industries saving thousands with SuccessNOW AI. From auto dealers to lawyers - discover proven ROI and success stories.",
}

export default function CaseStudiesPage() {
  return <CaseStudiesClientPage />
}
