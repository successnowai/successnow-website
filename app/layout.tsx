import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navigation/navbar"
import Footer from "@/components/home/footer"
import FloatingChatRobot from "@/components/chat/floating-chat-robot"
import ScrollToTop from "@/components/ui/scroll-to-top"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  title: "SuccessNOW AI - AI Agents for Business Growth",
  description:
    "Revolutionary AI agents that work 24/7 to grow your business. Custom-built solutions for every industry.",
  keywords: "AI agents, business automation, lead generation, customer service, AI chatbots",
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
    title: "SuccessNOW AI - AI Agents for Business Growth",
    description:
      "Revolutionary AI agents that work 24/7 to grow your business. Custom-built solutions for every industry.",
    url: "https://successnow.ai",
    siteName: "SuccessNOW AI",
    images: [
      {
        url: "/images/successnow-logo.png",
        width: 1200,
        height: 630,
        alt: "SuccessNOW AI Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SuccessNOW AI - AI Agents for Business Growth",
    description:
      "Revolutionary AI agents that work 24/7 to grow your business. Custom-built solutions for every industry.",
    images: ["/images/successnow-logo.png"],
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
  verification: {
    google: "your-google-verification-code",
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
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://signup.successnow.ai" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Preload critical resources */}
        <link rel="preload" href="/images/successnow-logo.png" as="image" type="image/png" />

        {/* Resource hints for key pages */}
        <link rel="prefetch" href="/demo" />
        <link rel="prefetch" href="/book" />
        <link rel="prefetch" href="/industries" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Viewport meta tag for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#00BFFF" />
        <meta name="msapplication-TileColor" content="#00BFFF" />

        {/* Performance hints */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <FloatingChatRobot />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
