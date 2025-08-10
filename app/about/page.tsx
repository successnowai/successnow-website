import type { Metadata } from "next"
import AboutClientPage from "./AboutClientPage"

export const metadata: Metadata = {
  title: "About Us - SuccessNOW AI | The Story Behind AI Super Agents",
  description:
    "Learn about John Potvin's journey from door-to-door sales to founding SuccessNOW.ai. Discover how we're revolutionizing business automation with AI Super Agents that work 24/7.",
  keywords:
    "about successnow ai, john potvin founder, ai automation story, business growth expert, ai super agents founder",
  openGraph: {
    title: "About Us - SuccessNOW AI | The Story Behind AI Super Agents",
    description:
      "Learn about John Potvin's journey from door-to-door sales to founding SuccessNOW.ai. Discover how we're revolutionizing business automation with AI Super Agents that work 24/7.",
    type: "website",
  },
}

export default function AboutPage() {
  return <AboutClientPage />
}
