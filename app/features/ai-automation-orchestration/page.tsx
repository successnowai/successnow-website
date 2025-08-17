import type { Metadata } from "next"
import AIAutomationClientPage from "./AIAutomationClientPage"

export const metadata: Metadata = {
  title: "AI Automation & Orchestration - SuccessNOW.ai | Complete Sales Engine",
  description:
    "SuccessNOW.ai orchestrates your entire sales funnel with intelligent automation. 24/7 AI super agents, automated funnels, complete marketing stack, and seamless integrations in one platform.",
  keywords:
    "AI automation, sales orchestration, AI super agents, automated funnels, marketing automation, CRM integration, AI sales engine, business automation",
  openGraph: {
    title: "AI Automation & Orchestration - Complete Sales Engine",
    description:
      "The brain that ties everything together. Orchestrates your entire sales funnel with intelligent automation and 24/7 AI super agents.",
    type: "website",
  },
}

export default function AIAutomationPage() {
  return <AIAutomationClientPage />
}
