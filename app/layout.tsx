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
  title: {
    default: "SuccessNOW AI - Revolutionary AI Agents for Business Growth",
    template: "%s | SuccessNOW AI",
  },
  description:
    "Revolutionary AI agents that work 24/7 to qualify, close, book, and convert leads for your business. Custom-built solutions for every industry with proven ROI.",
  keywords: [
    "AI agents",
    "business automation",
    "lead generation",
    "lead qualification",
    "customer service AI",
    "AI chatbots",
    "sales automation",
    "appointment booking",
    "lead conversion",
    "business growth",
    "AI for business",
    "automated marketing",
    "customer engagement",
    "24/7 AI assistant",
  ],
  authors: [{ name: "SuccessNOW AI", url: "https://successnow.ai" }],
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
    title: "SuccessNOW AI - Revolutionary AI Agents for Business Growth",
    description:
      "Revolutionary AI agents that work 24/7 to qualify, close, book, and convert leads for your business. Custom-built solutions for every industry.",
    url: "https://successnow.ai",
    siteName: "SuccessNOW AI",
    images: [
      {
        url: "/images/successnow-logo.png",
        width: 1200,
        height: 630,
        alt: "SuccessNOW AI - Revolutionary AI Agents",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SuccessNOW AI - Revolutionary AI Agents for Business Growth",
    description: "Revolutionary AI agents that work 24/7 to qualify, close, book, and convert leads for your business.",
    images: ["/images/successnow-logo.png"],
    creator: "@SuccessNOWAI",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "AI Software",
    generator: 'v0.app'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SuccessNOW AI",
  url: "https://successnow.ai",
  logo: "https://successnow.ai/images/successnow-logo.png",
  description:
    "Revolutionary AI agents that work 24/7 to qualify, close, book, and convert leads for businesses across all industries.",
  foundingDate: "2024",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-800-SUCCESS",
    contactType: "customer service",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.facebook.com/SuccessNOWAI",
    "https://www.twitter.com/SuccessNOWAI",
    "https://www.linkedin.com/company/successnow-ai",
    "https://www.instagram.com/successnowai",
    "https://www.tiktok.com/@successnowai",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  offers: {
    "@type": "Offer",
    name: "AI Agent Solutions",
    description: "Custom AI agents for business automation and lead generation",
    category: "AI Software Services",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Critical resource hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://signup.successnow.ai" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Preload critical resources */}
        <link rel="preload" href="/images/successnow-logo.png" as="image" type="image/png" />
        <link rel="preload" href="/abstract-neural-network-background.png" as="image" type="image/png" />

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

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Additional SEO Meta Tags */}
        <meta name="application-name" content="SuccessNOW AI" />
        <meta name="apple-mobile-web-app-title" content="SuccessNOW AI" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Geo Tags */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />

        {/* Language Tags */}
        <meta name="language" content="English" />
        <meta httpEquiv="content-language" content="en-US" />

        {/* Critical CSS inlining hint */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Critical above-the-fold styles */
            body { margin: 0; padding: 0; }
            .hero-section { min-height: 100vh; }
            /* Prevent layout shift */
            img { max-width: 100%; height: auto; }
          `,
          }}
        />
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
