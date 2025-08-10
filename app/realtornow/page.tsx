import type { Metadata } from "next"
import RealtorNowClientPage from "./RealtorNowClientPage"
import JsonLdScript from "@/components/json-ld-script"
import { generateIndustryPageJsonLd } from "@/lib/json-ld"

const industryData = {
  slug: "realtornow",
  name: "Realtors",
  description:
    "Our AI Superagents for Realtors qualify leads, book property viewings, and follow up 24/7, so you can focus on closing deals. Never miss a hot lead again.",
}

export const metadata: Metadata = {
  title: `AI for ${industryData.name} - Automated Lead Conversion`,
  description: industryData.description,
}

export default function RealtorNowPage() {
  const industryJsonLd = generateIndustryPageJsonLd(industryData)
  return (
    <>
      <JsonLdScript data={industryJsonLd} />
      <RealtorNowClientPage />
    </>
  )
}
