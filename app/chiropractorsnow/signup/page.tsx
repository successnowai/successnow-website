import SignupRedirectClient from "@/components/signup/SignupRedirectClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Signup for ChiropractorsNOW",
  description: "Join ChiropractorsNOW and transform your chiropractic practice.",
}

export default function ChiropractorsNowSignupPage() {
  const ghlSignupUrl = "https://app.gohighlevel.com/v2/form/placeholder-for-chiropractors"
  return <SignupRedirectClient ghlUrl={ghlSignupUrl} />
}
