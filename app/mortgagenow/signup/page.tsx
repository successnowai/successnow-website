import SignupRedirectClient from "@/components/signup/SignupRedirectClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Signup for MortgageNOW",
  description: "Join MortgageNOW and transform your mortgage business.",
}

export default function MortgageNowSignupPage() {
  const ghlSignupUrl = "https://app.gohighlevel.com/v2/form/placeholder-for-mortgage"
  return <SignupRedirectClient ghlUrl={ghlSignupUrl} />
}
