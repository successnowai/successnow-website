import SignupRedirectClient from "@/components/signup/SignupRedirectClient"

export default function SignupPage() {
  const ghlUrl = "https://www.gohighlevel.com/" // <-- REPLACE WITH YOUR PLUMBERS GHL URL
  const niche = "PlumbersNOW"
  return <SignupRedirectClient ghlUrl={ghlUrl} niche={niche} />
}
