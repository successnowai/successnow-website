import SignupRedirectClient from "@/components/signup/SignupRedirectClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Signup for AutoDealersNOW",
  description: "Join AutoDealersNOW and transform your dealership.",
}

export default function AutoDealersNowSignupPage() {
  // Replace with your actual GoHighLevel form URL for auto dealers
  const ghlSignupUrl = "https://app.gohighlevel.com/v2/form/placeholder-for-autodealers"
  return <SignupRedirectClient ghlUrl={ghlSignupUrl} />
}
