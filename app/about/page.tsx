import type { Metadata } from "next"
import AboutClientPage from "./AboutClientPage"
import JsonLdScript from "@/components/json-ld-script"
import { generateAboutPageJsonLd } from "@/lib/json-ld"

export const metadata: Metadata = {
  title: "About Us – The SuccessNOW.ai Story",
  description:
    "Learn how founder John Potvin's journey from door-to-door sales to AI innovation led to the creation of SuccessNOW.ai, a global automation platform.",
  keywords: "SuccessNOW.ai story, John Potvin, AI Super Agents, business automation, lead conversion, AI chatbots",
  openGraph: {
    title: "About Us - The SuccessNOW.ai Story",
    description:
      "From door-to-door hustle to AI-powered global automation. Discover how SuccessNOW.ai is revolutionizing business growth with AI Super Agents.",
    type: "article",
    authors: ["John Potvin"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - The SuccessNOW.ai Story",
    description: "Learn the story behind SuccessNOW.ai and its founder, John Potvin.",
  },
}

export default function AboutPage() {
  const aboutPageJsonLd = generateAboutPageJsonLd()
  return (
    <>
      <JsonLdScript data={aboutPageJsonLd} />
      <AboutClientPage />
    </>
  )
}
