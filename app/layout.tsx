import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import ScrollToTop from "@/components/ui/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SuccessNOW AI - AI Superagents for Business Growth",
  description:
    "AI Superagents that convert, book, and nurture leads 24/7 — while you get back your time. Never lose a lead again.",
  keywords: "AI, automation, lead generation, business growth, chatbots, voice AI",
  authors: [{ name: "SuccessNOW AI" }],
  creator: "SuccessNOW AI",
  publisher: "SuccessNOW AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://successnow.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SuccessNOW AI - AI Superagents for Business Growth",
    description:
      "AI Superagents that convert, book, and nurture leads 24/7 — while you get back your time. Never lose a lead again.",
    url: "https://successnow.ai",
    siteName: "SuccessNOW AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SuccessNOW AI - AI Superagents for Business Growth",
    description:
      "AI Superagents that convert, book, and nurture leads 24/7 — while you get back your time. Never lose a lead again.",
    creator: "@successnowai",
  },
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
          <ScrollToTop />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
