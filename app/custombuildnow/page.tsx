import type { Metadata } from "next"
import { CustomBuildNowClientPage } from "./CustomBuildNowClientPage"

export const metadata: Metadata = {
  title: "CustomBuildNOW - AI-Powered Custom Solutions | SuccessNOW",
  description:
    "Get a custom-built AI solution tailored to your unique business needs. From websites to AI agents, we build it all for you.",
}

export default function CustomBuildNowPage() {
  return <CustomBuildNowClientPage />
}
