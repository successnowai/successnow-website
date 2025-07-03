import SignupRedirectClient from "@/components/signup/SignupRedirectClient"

export default function SignupPage() {
  const ghlUrl = "https://www.gohighlevel.com/" // <-- REPLACE WITH YOUR CONTRACTORS GHL URL
  const niche = "ContractorsNOW"
  return <SignupRedirectClient ghlUrl={ghlUrl} niche={niche} />
}
