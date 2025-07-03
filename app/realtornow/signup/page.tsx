import SignupRedirectClient from "@/components/signup/SignupRedirectClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Signup for RealtorNOW",
  description: "Join RealtorNOW and transform your real estate business.",
}

export default function RealtorNowSignupPage() {
  const ghlSignupUrl = "https://app.gohighlevel.com/v2/form/placeholder-for-realtors"
  return <SignupRedirectClient ghlUrl={ghlSignupUrl} />
}
