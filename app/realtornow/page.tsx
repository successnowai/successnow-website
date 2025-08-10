import { generateIndustryJsonLd } from "@/lib/json-ld"
import { JsonLdScript } from "@/components/json-ld-script"
import RealtorNowClientPage from "./RealtorNowClientPage"

export default function RealtorNowPage() {
  const industryData = {
    slug: "realtornow",
    name: "Realtor",
    description:
      "Generate and convert real estate leads 24/7 with an AI Superagent that never sleeps. Qualify buyers, schedule viewings, and follow up instantly.",
  }
  const industryJsonLd = generateIndustryJsonLd(industryData)

  return (
    <>
      <head>
        <title>AI for Realtors - SuccessNOW AI</title>
        <meta name="description" content={industryData.description} />
        <link rel="canonical" href="https://successnow.ai/realtornow" />
        <JsonLdScript data={industryJsonLd} />
      </head>
      <RealtorNowClientPage />
    </>
  )
}
