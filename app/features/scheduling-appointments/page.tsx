import type { Metadata } from "next"
import SchedulingClientPage from "./SchedulingClientPage"

export const metadata: Metadata = {
  title: "Scheduling & Appointments - AI Booking via Voice, SMS & Chat | SuccessNOW.ai",
  description:
    "AI books appointments via voice, SMS, chat with round-robin scheduling, AI reminders, and automated no-show reduction. Calendly books, SuccessNOW books and closes.",
  keywords:
    "AI appointment booking, scheduling automation, voice booking, SMS scheduling, chat appointments, round-robin scheduling, AI reminders, no-show reduction, appointment management",
  openGraph: {
    title: "Scheduling & Appointments - AI Booking via Voice, SMS & Chat | SuccessNOW.ai",
    description:
      "AI books appointments via voice, SMS, chat with round-robin scheduling, AI reminders, and automated no-show reduction. Calendly books, SuccessNOW books and closes.",
    url: "https://successnow.ai/features/scheduling-appointments",
    siteName: "SuccessNOW.ai",
    images: [
      {
        url: "https://successnow.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SuccessNOW.ai Scheduling & Appointments",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scheduling & Appointments - AI Booking via Voice, SMS & Chat | SuccessNOW.ai",
    description:
      "AI books appointments via voice, SMS, chat with round-robin scheduling, AI reminders, and automated no-show reduction. Calendly books, SuccessNOW books and closes.",
    images: ["https://successnow.ai/og-image.jpg"],
  },
  alternates: {
    canonical: "https://successnow.ai/features/scheduling-appointments",
  },
}

export default function SchedulingPage() {
  return <SchedulingClientPage />
}
