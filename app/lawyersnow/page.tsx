import type { Metadata } from "next"
import { LawyersNowClientPage } from "./LawyersNowClientPage"

export const metadata: Metadata = {
  title: "LawyersNOW - AI-Powered Legal Practice Solutions | SuccessNOW",
  description:
    "Transform your law practice with AI that books consultations, confirms appointments, and nurtures every lead until they retain your services. Boost client acquisition with LawyersNOW.",
}

// This is a placeholder. In a real app, you'd fetch this from a CMS or database.
const templates = [
  {
    id: "lawyer-1",
    name: "Law Firm Template 1",
    url: "https://example.com/lawyer-template-1",
  },
  {
    id: "lawyer-2",
    name: "Law Firm Template 2",
    url: "https://example.com/lawyer-template-2",
  },
  {
    id: "lawyer-3",
    name: "Law Firm Template 3",
    url: "https://example.com/lawyer-template-3",
  },
]

export default function LawyersNowPage() {
  return <LawyersNowClientPage templates={templates} />
}
