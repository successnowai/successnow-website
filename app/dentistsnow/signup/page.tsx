import SignupRedirectClient from "@/components/signup/SignupRedirectClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Signup for DentistsNOW",
  description: "Join DentistsNOW and transform your dental practice.",
}

export default function DentistsNowSignupPage() {
  // Replace with your actual GoHighLevel form URL for dentists
  const ghlSignupUrl = "https://app.gohighlevel.com/v2/form/placeholder-for-dentists"
  return <SignupRedirectClient ghlUrl={ghlSignupUrl} />
}
