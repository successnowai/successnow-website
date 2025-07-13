import type { Metadata } from "next"
import LeoPlatformClientPage from "./LeoPlatformClientPage"

export const metadata: Metadata = {
  title: "Leo - SuccessNOW AI Platform",
  description: "Exclusive access to SuccessNOW AI platform through Leo",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    nosnippet: true,
    noimageindex: true,
  },
}

export default function LeoPlatformPage() {
  return <LeoPlatformClientPage />
}
