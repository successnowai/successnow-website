import type { Metadata } from "next"
import { RestaurantsNowClientPage } from "./RestaurantsNowClientPage"

export const metadata: Metadata = {
  title: "RestaurantsNOW - AI-Powered Restaurant Solutions | SuccessNOW",
  description:
    "Transform your restaurant with AI that takes reservations, manages waitlists, and promotes specials. Boost your bookings and fill your tables with RestaurantsNOW.",
}

export default function RestaurantsNowPage() {
  return <RestaurantsNowClientPage />
}
