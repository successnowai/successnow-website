import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navigation/navbar"
import Footer from "@/components/home/footer"
import FloatingChatRobot from "@/components/chat/floating-chat-robot"
import StarryBackground from "@/components/ui/starry-background"
import ScrollToTop from "@/components/ui/scroll-to-top"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
})
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "SuccessNOW – AI Superagent System",
  description:
    "Our AI Superagents convert, book, and nurture leads 24/7 — while you get back your time. Never lose a lead again.",
  generator: "v0.dev",
  keywords:
    "AI Superagents, Lead Conversion, AI Chatbots, Automated Marketing, Lead Generation, AI Sales Assistant, Business Automation",
  authors: [{ name: "SuccessNOW" }],
  creator: "SuccessNOW",
  publisher: "SuccessNOW",
  robots: "index, follow",
  openGraph: {
    title: "SuccessNOW – AI Superagent System",
    description:
      "Our AI Superagents convert, book, and nurture leads 24/7 — while you get back your time. Never lose a lead again.",
    url: "https://successnow.ai",
    siteName: "SuccessNOW",
    type: "website",
    images: [
      {
        url: "https://successnow.ai/images/successnow-logo.png",
        width: 1200,
        height: 630,
        alt: "SuccessNOW AI Superagent System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SuccessNOW – AI Superagent System",
    description:
      "Our AI Superagents convert, book, and nurture leads 24/7 — while you get back your time. Never lose a lead again.",
    images: ["https://successnow.ai/images/successnow-logo.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />

        {/* Favicon and icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#00BFFF" />

        {/* Preload critical resources */}
        <link rel="preload" href="/images/successnow-logo.png" as="image" type="image/png" />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} ${openSans.variable} font-sans`}>
        <StarryBackground />
        <ScrollToTop />
        {/* Skip link for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#00BFFF] focus:text-white focus:rounded-md"
        >
          Skip to main content
        </a>
        {/* GLOBAL: Black Navigation Bar - Always visible on ALL devices */}
        <Navbar />
        {/* Main content with proper spacing for navbar only */}
        <main id="main-content" className="global-content-spacing">
          {children}
        </main>
        {/* Global Footer - Now appears on every page */}
        <Footer />
        {/* Floating chat robot */}
        <FloatingChatRobot />
      </body>
    </html>
  )
}
