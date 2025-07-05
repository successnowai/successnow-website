import type { Metadata } from "next"
import AdsNowShell from "./AdsNowShell"

// Disable static prerendering so the page is built on-demand.
export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "AdsNOW Super Agent - Revolutionary AI Ad Creation | SuccessNOW",
  description:
    "Simply text your AI AdsNOW Super Agent to create ads, review copy, make edits, set budget and launch instantly. No more logging into software - the future of ads is NOW!",
}

export default function AdsNowPage() {
  return <AdsNowShell />
}
