import SignupRedirectClient from "@/components/signup/SignupRedirectClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Signup for LawyersNOW",
  description: "Join LawyersNOW and transform your law practice.",
}

export default function LawyersNowSignupPage() {
  const ghlSignupUrl = "https://app.gohighlevel.com/v2/form/placeholder-for-lawyers"
  return <SignupRedirectClient ghlUrl={ghlSignupUrl} />
}
