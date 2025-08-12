import type { Metadata } from "next"
import AboutClientPage from "./AboutClientPage"

export const metadata: Metadata = {
  title: "About Us - The SuccessNOW.ai Story | AI Super Agents",
  description:
    "Learn about John Potvin's journey from door-to-door sales to founding SuccessNOW.ai. Discover how we're revolutionizing business automation with AI Super Agents that work 24/7.",
  keywords:
    "SuccessNOW.ai story, John Potvin founder, AI automation, business growth, sales innovation, AI super agents",
  openGraph: {
    title: "About Us - The SuccessNOW.ai Story",
    description:
      "From door-to-door hustle to AI-powered global automation. Learn how SuccessNOW.ai is revolutionizing business with AI Super Agents.",
    type: "website",
  },
}

export default function AboutPage() {
  return <AboutClientPage />
}
