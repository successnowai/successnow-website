import type { Metadata } from "next"
import AboutClientPage from "./AboutClientPage"

export const metadata: Metadata = {
  title: "About Us - The SuccessNOW.ai Story | AI Super Agents for Business",
  description:
    "Learn about John Potvin's journey from door-to-door sales to creating AI Super Agents that work 24/7. Discover how SuccessNOW.ai is revolutionizing business automation.",
  keywords: "SuccessNOW.ai story, John Potvin founder, AI business automation, sales innovation, AI agents history",
  openGraph: {
    title: "About Us - The SuccessNOW.ai Story",
    description:
      "From door-to-door hustle to AI-powered global automation. Learn John Potvin's journey and how SuccessNOW.ai is transforming businesses worldwide.",
    type: "website",
  },
}

export default function AboutPage() {
  return <AboutClientPage />
}
