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
  metadataBase: new URL("https://successnow.ai"),
  title: {
    default: "SuccessNOW – AI Superagent System",
    template: "%s | SuccessNOW AI",
  },
  description:
    "Our AI Superagents convert, book, and nurture leads 24/7 — while you get back your time. Never lose a lead again.",
  generator: "SuccessNOW AI",
  keywords:
    "AI Superagents, Lead Conversion, AI Chatbots, Automated Marketing, Lead Generation, AI Sales Assistant, Business Automation",
  authors: [{ name: "SuccessNOW", url: "https://successnow.ai" }],
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
        url: "/images/successnow-og-image.png", // Use a relative path
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
    images: ["/images/successnow-og-image.png"], // Use a relative path
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://iframes.ai" />
        <link rel="dns-prefetch" href="https://signup.successnow.ai" />
        <link rel="dns-prefetch" href="https://my.successnow.ai" />
        <meta name="theme-color" content="#00BFFF" />
        <link rel="preload" href="/images/successnow-logo.png" as="image" type="image/png" />
        <link rel="preload" href="/abstract-neural-network-background.webp" as="image" type="image/webp" />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} ${openSans.variable} font-sans`}>
        <StarryBackground />
        <ScrollToTop />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#00BFFF] focus:text-white focus:rounded-md"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="global-content-spacing">
          {children}
        </main>
        <Footer />
        <FloatingChatRobot />
      </body>
    </html>
  )
}
