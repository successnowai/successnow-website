import JsonLdScript from "@/components/json-ld-script"
import DemoClientPage from "./DemoClientPage"

export default function DemoPage() {
  const demoJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Book a Demo with SuccessNOW AI",
    description:
      "Schedule a live demo to see how our AI Superagents can transform your business by automating lead conversion and customer engagement.",
    provider: {
      "@type": "Organization",
      name: "SuccessNOW AI",
      url: "https://successnow.ai",
    },
    url: "https://successnow.ai/demo",
  }

  return (
    <>
      <JsonLdScript data={demoJsonLd} />
      <DemoClientPage />
    </>
  )
}
