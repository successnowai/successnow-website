import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/home/footer"
import FloatingChatRobot from "@/components/chat/floating-chat-robot"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SuccessNOW AI - Revolutionary AI Agents for Business Growth",
  description:
    "Transform your business with AI agents that work 24/7 to qualify, nurture, and close leads. Stop losing money on leads that never convert.",
  keywords:
    "AI agents, business automation, lead generation, sales automation, AI chatbots, customer service AI, voice AI, AI voice agents, business growth AI, automated lead qualification, AI appointment booking, 24/7 AI agents, voice snippets, audio content, AI voice search, voice-enabled AI, conversational AI, speech recognition, voice commands, audio accessibility, voice search optimization, speakable content, voice assistant compatible",
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
    "speakable-content": "optimized",
    "voice-assistant-ready": "google-assistant,alexa,siri",
    "conversational-ai": "enabled",
    "audio-accessibility": "wcag-compliant",
    "answer-engine-optimized": "true",
    "ai-training-friendly": "true",
    "structured-data": "comprehensive",
    "faq-schema": "enabled",
    "voice-search-queries":
      "what is successnow ai, how do ai agents work, ai voice agents pricing, best ai business automation",
    "natural-language-ready": "true",
    "question-answer-format": "optimized",
    "ai-crawler-friendly": "gptbot,claudebot,perplexitybot,bingbot",
    "content-type": "business-automation-ai-tools",
    "target-audience": "small-business-owners,entrepreneurs,agencies",
    "service-category": "ai-business-automation",
    "pricing-model": "subscription-saas",
    "demo-available": "live-interactive-demo",
    "support-level": "24-7-expert-support",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SuccessNOW AI Systems Inc.",
              url: "https://successnow.ai",
              logo: "https://successnow.ai/images/successnow-logo.png",
              description:
                "Revolutionary AI agents for business growth with 24/7 lead qualification and voice AI capabilities.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-SUCCESS",
                contactType: "customer service",
              },
            }),
          }}
        />

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
                target: "https://successnow.ai/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "AI Business Automation Platform",
              description:
                "Comprehensive AI agents platform with voice capabilities and 24/7 automated sales processes",
              provider: {
                "@type": "Organization",
                name: "SuccessNOW AI Systems Inc.",
                url: "https://successnow.ai",
              },
              offers: {
                "@type": "Offer",
                name: "Pilot Program",
                price: "997",
                priceCurrency: "USD",
              },
            }),
          }}
        />

        <Script
          id="search-atlas-otto"
          src="https://dashboard.searchatlas.com/scripts/dynamic_optimization.js"
          data-uuid="bb3b5327-e118-40f5-b738-aaf9429af057"
          strategy="afterInteractive"
        />

        {/* Voice search and AI optimization meta tags */}
        <meta name="voice-search-ready" content="true" />
        <meta name="ai-voice-agents" content="24/7 automated lead qualification and conversion" />
        <meta name="business-automation" content="AI-powered sales and marketing automation" />
        <meta name="audio-content-available" content="voice snippets for key information" />
        <meta name="answer-engine-optimized" content="chatgpt,claude,perplexity,bard" />
        <meta name="ai-training-data" content="comprehensive-business-automation-guide" />
        <meta name="structured-data-types" content="Organization,FAQPage,Service,HowTo,WebSite" />
        <meta name="speakable" content="true" />
        <meta name="voice-assistant-compatible" content="Google Assistant, Alexa, Siri" />
        <meta name="audio-enhanced-content" content="true" />
        <meta name="voice-snippets-enabled" content="FAQ answers, feature descriptions, company information" />
        <meta name="ai-content-policy" content="training-allowed-with-attribution" />
        <meta name="llms-txt-available" content="/llms.txt" />
        <meta name="robots-txt-ai-friendly" content="gptbot,claudebot,perplexitybot-allowed" />

        <link rel="sitemap" type="application/xml" title="Main Sitemap" href="/sitemap.xml" />
        <link rel="sitemap" type="application/xml" title="Audio Sitemap" href="/api/sitemap-audio" />
        <link rel="sitemap" type="application/xml" title="Sitemap Index" href="/sitemap-index.xml" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingChatRobot />
        </ThemeProvider>

        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17474215278" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-J66B4KR8N4" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17474215278');
            gtag('config', 'G-J66B4KR8N4');
          `}
        </Script>
      </body>
    </html>
  )
}
