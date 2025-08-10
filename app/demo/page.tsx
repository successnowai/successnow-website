import { generateServiceJsonLd, generateHowToJsonLd } from "@/lib/json-ld"
import { JsonLdScript } from "@/components/json-ld-script"
import DemoPage from "./DemoPage"

export default function Demo() {
  const serviceData = {
    slug: "demo",
    name: "Book a Demo with SuccessNOW AI",
    description:
      "Schedule a live demo to see how our AI Superagents can transform your business by automating lead conversion and customer engagement.",
  }
  const serviceJsonLd = generateServiceJsonLd(serviceData)

  const howToData = {
    name: "How to Book a Demo",
    description: "Follow these simple steps to schedule your personalized demo with a SuccessNOW AI expert.",
    steps: [
      { name: "Select a Date and Time", text: "Choose a convenient slot from the calendar." },
      {
        name: "Provide Your Details",
        text: "Fill in your name, email, and company information so we can prepare for the call.",
      },
      {
        name: "Confirm Your Booking",
        text: "You'll receive a confirmation email with a calendar invite and a link to the meeting.",
      },
    ],
    totalTime: "PT2M",
  }
  const howToJsonLd = generateHowToJsonLd(howToData)

  // Combine graphs for a single script tag
  const combinedJsonLd = {
    "@context": "https://schema.org",
    "@graph": [...serviceJsonLd["@graph"], howToJsonLd],
  }

  return (
    <>
      <head>
        <title>Book a Demo - SuccessNOW AI</title>
        <meta name="description" content={serviceData.description} />
        <link rel="canonical" href="https://successnow.ai/demo" />
        <JsonLdScript data={combinedJsonLd} />
      </head>
      <DemoPage />
    </>
  )
}
