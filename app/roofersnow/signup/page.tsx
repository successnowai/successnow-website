import SignupRedirectClient from "@/components/signup/SignupRedirectClient"

export default function SignupPage() {
  const ghlUrl = "https://www.gohighlevel.com/" // <-- REPLACE WITH YOUR ROOFERS GHL URL
  const niche = "RoofersNOW"
  return <SignupRedirectClient ghlUrl={ghlUrl} niche={niche} />
}
