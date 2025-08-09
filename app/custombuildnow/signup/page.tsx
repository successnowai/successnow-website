import SignupRedirectClient from "@/components/signup/SignupRedirectClient"

export const metadata = {
  title: "Start Your Custom AI Build - SuccessNOW",
  description:
    "Begin your custom AI solution journey. Tell us about your unique business needs and we'll build the perfect AI system for you.",
}

export default function CustomBuildSignupPage() {
  return (
    <SignupRedirectClient
      industry="Custom Build"
      ghlUrl="https://your-gohighlevel-custom-build-form-url.com"
      description="Ready to get a custom AI solution built specifically for your business? Let's discuss your unique needs and create the perfect AI system for you."
    />
  )
}
