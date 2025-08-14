import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/home/footer"
import { OrganizationSchema, WebSiteSchema, AIServiceSchema } from "@/components/seo/structured-data"
import { StructuredData, generateOrganizationSchema } from "@/components/seo/enhanced-structured-data"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SuccessNOW AI - Revolutionary AI Agents for Business Growth",
  description:
    "Transform your business with AI agents that work 24/7 to qualify, nurture, and close leads. Stop losing money on leads that never convert.",
  keywords:
    "AI agents, business automation, lead generation, sales automation, AI chatbots, customer service AI, voice AI, AI voice agents, business growth AI, automated lead qualification, AI appointment booking, 24/7 AI agents, voice snippets, audio content, AI voice search",
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
    title: "SuccessNOW AI - Revolutionary AI Agents for Business Growth",
    description:
      "Transform your business with AI agents that work 24/7 to qualify, nurture, and close leads. Stop losing money on leads that never convert.",
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
    description:
      "Transform your business with AI agents that work 24/7 to qualify, nurture, and close leads. Stop losing money on leads that never convert.",
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
  other: {
    "voice-search-optimized": "true",
    "ai-voice-agents": "available",
    "audio-content": "available",
    "business-automation": "ai-powered",
    "voice-snippets": "enabled",
    "audio-enhanced": "true",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17474215278" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17474215278');
          `}
        </Script>

        <meta name="voice-search-ready" content="true" />
        <meta name="ai-voice-agents" content="24/7 automated lead qualification and conversion" />
        <meta name="business-automation" content="AI-powered sales and marketing automation" />
        <meta name="audio-content-available" content="voice snippets for key information" />

        {/* Voice search specific meta tags */}
        <meta name="speakable" content="true" />
        <meta name="voice-assistant-compatible" content="Google Assistant, Alexa, Siri" />

        {/* Audio content meta tags */}
        <meta name="audio-enhanced-content" content="true" />
        <meta name="voice-snippets-enabled" content="FAQ answers, feature descriptions, company information" />
        <meta name="audio-accessibility" content="screen reader compatible, voice navigation ready" />

        {/* Business-specific voice search optimization */}
        <meta name="business-type" content="AI Technology, Business Automation" />
        <meta name="service-area" content="United States, Worldwide" />
        <meta name="primary-service" content="AI Voice Agents for Business Growth" />

        {/* Link to audio sitemap */}
        <link rel="sitemap" type="application/xml" title="Audio Sitemap" href="/api/sitemap-audio" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {/* Enhanced Organization Schema with Audio Capabilities */}
          <StructuredData schema={generateOrganizationSchema()} />

          {/* Existing Schemas */}
          <OrganizationSchema />
          <WebSiteSchema />
          <AIServiceSchema />

          {/* Global Voice Search Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "SuccessNOW.ai",
                url: "https://successnow.ai",
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://successnow.ai/search?q={search_term_string}",
                  },
                  "query-input": "required name=search_term_string",
                },
                mainEntity: {
                  "@type": "Organization",
                  name: "SuccessNOW.ai",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "AI Business Solutions with Voice Enhancement",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        name: "AI Super Agents with Voice Capabilities",
                        description:
                          "24/7 AI agents with voice interaction, lead qualification, and automated follow-up",
                        category: "AI Business Automation",
                      },
                    ],
                  },
                },
              }),
            }}
          />

          <ScrollToTop />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
