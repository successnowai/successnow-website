import SignupRedirectClient from "@/components/signup/SignupRedirectClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Signup for GymsNOW",
  description: "Join GymsNOW and transform your fitness business.",
}

export default function GymsNowSignupPage() {
  const ghlSignupUrl = "https://app.gohighlevel.com/v2/form/placeholder-for-gyms"
  return <SignupRedirectClient ghlUrl={ghlSignupUrl} />
}
