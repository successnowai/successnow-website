import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/home/footer"
import Script from "next/script"
import FloatingChatRobot from "@/components/chat/floating-chat-robot" // Declare the FloatingChatRobot variable

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
        {/* Organization Schema - Server-side rendered */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SuccessNOW AI Systems Inc.",
              alternateName: "SuccessNOW.ai",
              url: "https://successnow.ai",
              logo: "https://successnow.ai/images/successnow-logo.png",
              description:
                "Revolutionary AI agents for business growth with 24/7 lead qualification, voice AI capabilities, and automated sales processes.",
              foundingDate: "2024",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-SUCCESS",
                contactType: "customer service",
                availableLanguage: "English",
                areaServed: "US",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
                addressRegion: "United States",
              },
              sameAs: ["https://twitter.com/successnowai", "https://linkedin.com/company/successnow-ai"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "AI Business Automation Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "AI Super Agents",
                    description: "24/7 AI agents with voice capabilities for lead qualification and conversion",
                    price: "997",
                    priceCurrency: "USD",
                    priceSpecification: {
                      "@type": "UnitPriceSpecification",
                      price: "997",
                      priceCurrency: "USD",
                      billingIncrement: "monthly",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Website Schema - Server-side rendered */}
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
              publisher: {
                "@type": "Organization",
                name: "SuccessNOW AI Systems Inc.",
                logo: "https://successnow.ai/images/successnow-logo.png",
              },
              speakable: {
                "@type": "SpeakableSpecification",
                xpath: [
                  "/html/body//h1[1]",
                  "/html/body//section//h2[contains(@class, 'text-')]",
                  "/html/body//p[contains(@class, 'text-xl')]",
                ],
              },
              accessibilityFeature: [
                "audioDescription",
                "readingOrder",
                "structuralNavigation",
                "alternativeText",
                "voiceControl",
              ],
            }),
          }}
        />

        {/* Service Schema - Server-side rendered */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "AI Business Automation Platform",
              description:
                "Comprehensive AI agents platform with voice capabilities, lead qualification, and 24/7 automated sales processes",
              provider: {
                "@type": "Organization",
                name: "SuccessNOW AI Systems Inc.",
                url: "https://successnow.ai",
              },
              serviceType: "AI Business Automation",
              areaServed: "United States",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "AI Services with Voice Enhancement",
                itemListElement: [
                  {
                    "@type": "Service",
                    name: "Voice AI Agents",
                    description: "AI agents that handle voice calls and conversations for lead qualification",
                    serviceType: "Voice AI Technology",
                  },
                  {
                    "@type": "Service",
                    name: "Lead Qualification Automation",
                    description: "24/7 automated lead scoring and qualification with voice interaction",
                    serviceType: "Sales Automation",
                  },
                  {
                    "@type": "Service",
                    name: "Audio Content Generation",
                    description: "AI-generated voice snippets for enhanced accessibility and engagement",
                    serviceType: "Audio Content Creation",
                  },
                ],
              },
              offers: {
                "@type": "Offer",
                name: "Pilot Program",
                description: "Complete AI automation platform with voice capabilities",
                price: "997",
                priceCurrency: "USD",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: "997",
                  priceCurrency: "USD",
                  billingIncrement: "monthly",
                },
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />

        {/* Search Atlas OTTO pixel script using dangerouslySetInnerHTML approach */}
        <script
          nowprocket=""
          nitro-exclude=""
          type="text/javascript"
          id="sa-dynamic-optimization"
          data-uuid="bb3b5327-e118-40f5-b738-aaf9429af057"
          src="https://dashboard.searchatlas.com/scripts/dynamic_optimization.js"
          dangerouslySetInnerHTML={{ __html: "" }}
        />

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
        <meta name="answer-engine-optimized" content="chatgpt,claude,perplexity,bard" />
        <meta name="ai-training-data" content="comprehensive-business-automation-guide" />
        <meta name="structured-data-types" content="Organization,FAQPage,Service,HowTo,WebSite" />
        <meta name="content-freshness" content="regularly-updated" />
        <meta name="expertise-level" content="expert-business-automation" />
        <meta name="trustworthiness" content="verified-business-results" />
        <meta name="authoritativeness" content="industry-leading-ai-platform" />

        {/* Voice search specific meta tags */}
        <meta name="speakable" content="true" />
        <meta name="voice-assistant-compatible" content="Google Assistant, Alexa, Siri" />
        <meta name="conversational-queries" content="what is,how does,best practices,pricing,getting started" />
        <meta name="natural-language-processing" content="optimized" />

        <meta name="audio-enhanced-content" content="true" />
        <meta name="voice-snippets-enabled" content="FAQ answers, feature descriptions, company information" />
        <meta name="audio-accessibility" content="screen reader compatible, voice navigation ready" />
        <meta name="audio-format" content="mp3, high-quality TTS" />
        <meta name="voice-interaction-supported" content="true" />
        <meta name="audio-sitemap-available" content="/api/sitemap-audio" />
        <meta name="audio-content-duration" content="60-seconds-average" />
        <meta name="audio-quality" content="professional-tts-openai" />

        {/* Business-specific voice search optimization */}
        <meta name="business-type" content="AI Technology, Business Automation" />
        <meta name="service-area" content="United States, Worldwide" />
        <meta name="primary-service" content="AI Voice Agents for Business Growth" />
        <meta name="industry-focus" content="small-business,agencies,entrepreneurs" />
        <meta name="solution-type" content="all-in-one-ai-platform" />

        <meta name="ai-content-policy" content="training-allowed-with-attribution" />
        <meta name="llms-txt-available" content="/llms.txt" />
        <meta name="robots-txt-ai-friendly" content="gptbot,claudebot,perplexitybot-allowed" />
        <meta name="citation-required" content="true" />
        <meta name="content-licensing" content="attribution-required" />

        <link rel="sitemap" type="application/xml" title="Main Sitemap" href="/sitemap.xml" />
        <link rel="sitemap" type="application/xml" title="Audio Sitemap" href="/api/sitemap-audio" />
        <link rel="sitemap" type="application/xml" title="Sitemap Index" href="/sitemap-index.xml" />
        <link rel="alternate" type="application/rss+xml" title="SuccessNOW AI Audio Feed" href="/api/audio-feed" />

        {/* Voice search optimization hints */}
        <meta
          name="voice-search-queries"
          content="what is successnow ai, how do ai agents work, ai voice agents pricing, best ai business automation, successnow vs competitors, ai agent demo, business automation tools, voice ai for business"
        />
        <meta name="natural-language-optimized" content="true" />
        <meta name="question-answer-format" content="enabled" />
        <meta name="featured-snippet-ready" content="true" />
        <meta name="answer-box-optimized" content="true" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingChatRobot /> {/* Insert the FloatingChatRobot component */}
        </ThemeProvider>
      </body>
    </html>
  )
}
