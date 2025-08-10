import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/home/footer"
import FloatingChatRobot from "@/components/chat/floating-chat-robot"
import ScrollToTop from "@/components/ui/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "SuccessNOW AI - AI Super Agents That Convert Leads Into Sales 24/7",
    template: "%s | SuccessNOW AI",
  },
  description:
    "Transform your business with AI Super Agents that handle customer interactions, qualify leads, and drive conversions 24/7. Get your AI website, voice agents, and automated marketing system deployed in 48-72 hours.",
  keywords: [
    "AI agents",
    "business automation",
    "lead generation",
    "AI voice agents",
    "CRM automation",
    "AI marketing",
  ],
  authors: [{ name: "John Potvin", url: "https://successnow.ai/about" }],
  creator: "SuccessNOW AI",
  publisher: "SuccessNOW AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://successnow.ai",
    siteName: "SuccessNOW AI",
    title: "SuccessNOW AI - AI Super Agents That Convert Leads Into Sales 24/7",
    description:
      "Transform your business with AI Super Agents that handle customer interactions, qualify leads, and drive conversions 24/7.",
    images: [
      {
        url: "https://successnow.ai/images/successnow-logo.png",
        width: 1200,
        height: 630,
        alt: "SuccessNOW AI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SuccessNOW AI - AI Super Agents That Convert Leads Into Sales 24/7",
    description:
      "Transform your business with AI Super Agents that handle customer interactions, qualify leads, and drive conversions 24/7.",
    images: ["https://successnow.ai/images/successnow-logo.png"],
    creator: "@successnowai",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://successnow.ai",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-black text-white">
            <Navbar />
            <main>{children}</main>
            <Footer />
            <FloatingChatRobot />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
