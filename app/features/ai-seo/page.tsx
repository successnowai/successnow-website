import type { Metadata } from "next"
import AISEOClientPage from "./AISEOClientPage"

export const metadata: Metadata = {
  title: "AI-Driven SEO - SEOExperts.ai | 24/7 Search Optimization",
  description:
    "SEOExperts.ai uses proprietary AI tools plus expert strategists to boost search rankings 24/7. Continuous optimization delivers 422% traffic increases and 7x more keyword rankings.",
  keywords:
    "AI SEO, SEOExperts.ai, AI search optimization, automated SEO, local SEO AI, SEO automation, search engine optimization AI, organic traffic growth",
  openGraph: {
    title: "AI-Driven SEO - 24/7 Search Optimization",
    description:
      "Proprietary AI tools plus expert strategists boost search rankings around the clock. Continuous optimization delivers massive traffic increases.",
    type: "website",
  },
}

export default function AISEOPage() {
  return <AISEOClientPage />
}
