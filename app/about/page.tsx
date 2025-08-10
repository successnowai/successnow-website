import type { Metadata } from "next"
import JsonLdScript from "@/components/json-ld-script"
import { generateAboutJsonLd } from "@/lib/json-ld"
import AboutClientPage from "./AboutClientPage"

export const metadata: Metadata = {
  title: "About SuccessNOW AI - The John Potvin Story",
  description:
    "Learn about John Potvin's journey from door-to-door sales to AI innovation. Discover how SuccessNOW AI transforms businesses with AI Super Agents and automated marketing systems.",
  openGraph: {
    title: "About SuccessNOW AI - The John Potvin Story",
    description:
      "Learn about John Potvin's journey from door-to-door sales to AI innovation. Discover how SuccessNOW AI transforms businesses with AI Super Agents and automated marketing systems.",
    url: "https://successnow.ai/about",
  },
  alternates: {
    canonical: "https://successnow.ai/about",
  },
}

export default function AboutPage() {
  const aboutJsonLd = generateAboutJsonLd()

  return (
    <>
      <JsonLdScript data={aboutJsonLd} />
      <AboutClientPage />
    </>
  )
}
