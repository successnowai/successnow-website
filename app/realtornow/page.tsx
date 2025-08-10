import JsonLdScript from "@/components/json-ld-script"
import RealtorNowClientPage from "./RealtorNowClientPage"

export default function RealtorNowPage() {
  const realtorJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI for Realtors - SuccessNOW AI",
    description:
      "Generate and convert real estate leads 24/7 with an AI Superagent that never sleeps. Qualify buyers, schedule viewings, and follow up instantly.",
    provider: {
      "@type": "Organization",
      name: "SuccessNOW AI",
      url: "https://successnow.ai",
    },
    url: "https://successnow.ai/realtornow",
  }

  return (
    <>
      <JsonLdScript data={realtorJsonLd} />
      <RealtorNowClientPage />
    </>
  )
}
