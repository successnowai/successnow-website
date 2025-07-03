import SignupRedirectClient from "@/components/signup/SignupRedirectClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Signup for MedSpaNOW",
  description: "Join MedSpaNOW and transform your medical spa.",
}

export default function MedspaNowSignupPage() {
  const ghlSignupUrl = "https://app.gohighlevel.com/v2/form/placeholder-for-medspas"
  return <SignupRedirectClient ghlUrl={ghlSignupUrl} />
}
