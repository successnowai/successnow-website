import { Metadata } from "next"
import BookingClientPage from "./BookingClientPage"

export const metadata: Metadata = {
  title: "Book AI Consultation | SuccessNOW AI",
  description: "Schedule your free AI consultation and discover how our AI systems can transform your business. Get personalized demos and ROI projections.",
  keywords: "AI consultation, business automation, AI demo, lead generation, appointment booking",
}

export default function BookPage() {
  return <BookingClientPage />
}
