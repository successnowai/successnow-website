import type { Metadata } from "next"
import RestaurantsNowClientPage from "./RestaurantsNowClientPage"

export const metadata: Metadata = {
  title: "RestaurantsNOW - AI-Powered Restaurant Solutions | SuccessNOW",
  description:
    "Transform your restaurant with AI that takes reservations, manages waitlists, and drives repeat business. Boost your bookings with RestaurantsNOW.",
}

export default function RestaurantsNowPage() {
  return <RestaurantsNowClientPage />
}
