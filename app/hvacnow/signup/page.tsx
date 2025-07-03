import SignupRedirectClient from "@/components/signup/SignupRedirectClient"

export default function SignupPage() {
  const ghlUrl = "https://www.gohighlevel.com/" // <-- REPLACE WITH YOUR HVAC GHL URL
  const niche = "HVACNOW"
  return <SignupRedirectClient ghlUrl={ghlUrl} niche={niche} />
}
