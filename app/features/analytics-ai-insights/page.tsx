import type { Metadata } from "next"
import AnalyticsClientPage from "./AnalyticsClientPage"

export const metadata: Metadata = {
  title: "Analytics & AI Insights - SuccessNOW.ai | Complete Business Intelligence Dashboard",
  description:
    "Get complete business intelligence with AI-powered analytics. Real-time insights, lead scoring, ROI tracking, and predictive analytics all in one dashboard. Better than Google Analytics + HubSpot combined.",
  keywords:
    "AI analytics, business intelligence, lead scoring, ROI tracking, predictive analytics, conversion tracking, sales forecasting, marketing analytics",
  openGraph: {
    title: "Analytics & AI Insights - Complete Business Intelligence | SuccessNOW.ai",
    description:
      "AI-powered analytics dashboard with real-time insights, lead scoring, and predictive analytics. Complete business intelligence better than Google Analytics + HubSpot.",
    type: "website",
    url: "https://successnow.ai/features/analytics-ai-insights",
  },
  twitter: {
    card: "summary_large_image",
    title: "Analytics & AI Insights - Complete Business Intelligence | SuccessNOW.ai",
    description:
      "AI-powered analytics dashboard with real-time insights, lead scoring, and predictive analytics. Complete business intelligence better than Google Analytics + HubSpot.",
  },
}

export default function AnalyticsPage() {
  return <AnalyticsClientPage />
}
