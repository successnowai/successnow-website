import type { Metadata } from "next"
import IntegrationsClientPage from "./IntegrationsClientPage"

export const metadata: Metadata = {
  title: "Integrations & Extensibility - SuccessNOW.ai | Connect Any System with AI",
  description:
    "Connect SuccessNOW.ai with any system. Native CRM integrations, custom API development via DevNOW.ai, Zapier connections, and webhooks. Seamless data flow across all your business tools.",
  keywords:
    "API integrations, CRM integrations, custom development, DevNOW.ai, Zapier, webhooks, Salesforce integration, HubSpot integration, extensibility",
  openGraph: {
    title: "Integrations & Extensibility - Connect Any System | SuccessNOW.ai",
    description:
      "Connect SuccessNOW.ai with any system. Native CRM integrations, custom API development, Zapier connections, and seamless data flow across all business tools.",
    type: "website",
    url: "https://successnow.ai/features/integrations-extensibility",
  },
  twitter: {
    card: "summary_large_image",
    title: "Integrations & Extensibility - Connect Any System | SuccessNOW.ai",
    description:
      "Connect SuccessNOW.ai with any system. Native CRM integrations, custom API development, Zapier connections, and seamless data flow across all business tools.",
  },
}

export default function IntegrationsPage() {
  return <IntegrationsClientPage />
}
