import type { Metadata } from "next"
import NaraClientPage from "./NaraClientPage"

export const metadata: Metadata = {
  title: "Nara - SuccessNOW AI Platform",
  description: "Exclusive access to SuccessNOW AI platform through Nara",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    nosnippet: true,
    noimageindex: true,
  },
}

export default function NaraPage() {
  return <NaraClientPage />
}
