import type { Metadata } from "next"
import MortgageNowClientPage from "./MortgageNowClientPage"

export const metadata: Metadata = {
  title: "MortgageNOW - AI-Powered Mortgage Broker Solutions | SuccessNOW",
  description:
    "Transform your mortgage business with AI that books consultations, confirms appointments, and nurtures every lead until they close their loan. Boost closings with MortgageNOW.",
}

const templates = [
  {
    id: "mortgage-1",
    name: "Mortgage Broker Template 1",
    url: "https://example.com/mortgage-template-1",
  },
  {
    id: "mortgage-2",
    name: "Mortgage Broker Template 2",
    url: "https://example.com/mortgage-template-2",
  },
  {
    id: "mortgage-3",
    name: "Mortgage Broker Template 3",
    url: "https://example.com/mortgage-template-3",
  },
]

export default function MortgageNowPage() {
  return <MortgageNowClientPage templates={templates} />
}
