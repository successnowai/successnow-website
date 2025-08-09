import type { Metadata } from "next"
import SamPageClient from "./SamPageClient"

export const metadata: Metadata = {
  title: "Sam - SuccessNOW AI Platform",
  description: "Exclusive access to SuccessNOW AI platform through Sam",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    nosnippet: true,
    noimageindex: true,
  },
}

export default function SamPage() {
  return <SamPageClient />
}
