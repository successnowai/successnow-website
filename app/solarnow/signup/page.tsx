import SignupRedirectClient from "@/components/signup/SignupRedirectClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Signup for SolarNOW",
  description: "Join SolarNOW and transform your solar company.",
}

export default function SolarNowSignupPage() {
  const ghlSignupUrl = "https://app.gohighlevel.com/v2/form/placeholder-for-solar"
  return <SignupRedirectClient ghlUrl={ghlSignupUrl} />
}
