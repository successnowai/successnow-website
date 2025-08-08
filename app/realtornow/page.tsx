import type { Metadata } from "next"
import { RealtorNowClientPage } from "./RealtorNowClientPage"

export const metadata: Metadata = {
  title: "RealtorNOW - AI-Powered Real Estate Solutions | SuccessNOW",
  description:
    "Transform your real estate business with AI that books showings, confirms appointments, and nurtures every lead until they buy. Boost sales with RealtorNOW.",
}

const templates = [
  {
    id: "realtor-1",
    name: "Real Estate Template 1",
    url: "https://example.com/realtor-template-1",
    thumbnailUrl: "/images/realtor-template-1.png",
  },
  {
    id: "realtor-2",
    name: "Real Estate Template 2",
    url: "https://example.com/realtor-template-2",
    thumbnailUrl: "/images/realtor-template-2.png",
  },
  {
    id: "realtor-3",
    name: "Real Estate Template 3",
    url: "https://example.com/realtor-template-3",
    thumbnailUrl: "/images/realtor-template-3.png",
  },
]

export default function RealtorNowPage() {
  return <RealtorNowClientPage templates={templates} />
}
