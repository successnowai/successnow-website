import type { Metadata } from "next"
import MedspaNowClientPage from "./MedspaNowClientPage"

export const metadata: Metadata = {
  title: "MedSpaNOW - AI-Powered Medical Spa Solutions | SuccessNOW",
  description:
    "Transform your medical spa with AI that books consultations, confirms appointments, and nurtures every lead until they book treatments. Boost bookings with MedSpaNOW.",
}

const templates = [
  {
    id: "medspa-1",
    name: "Medical Spa Template 1",
    url: "https://example.com/medspa-template-1",
  },
  {
    id: "medspa-2",
    name: "Medical Spa Template 2",
    url: "https://example.com/medspa-template-2",
  },
  {
    id: "medspa-3",
    name: "Medical Spa Template 3",
    url: "https://example.com/medspa-template-3",
  },
]

export default function MedspaNowPage() {
  return <MedspaNowClientPage templates={templates} />
}
