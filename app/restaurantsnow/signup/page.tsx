import SignupRedirectClient from "@/components/signup/SignupRedirectClient"

export default function SignupPage() {
  const ghlUrl = "https://www.gohighlevel.com/" // <-- REPLACE WITH YOUR RESTAURANTS GHL URL
  const niche = "RestaurantsNOW"
  return <SignupRedirectClient ghlUrl={ghlUrl} niche={niche} />
}
