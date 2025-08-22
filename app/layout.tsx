import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/home/footer"
import { FloatingChatRobot } from "@/components/chat/floating-chat-robot"
import { InstallPrompt } from "@/components/pwa/install-prompt"
import { PWAProvider } from "@/components/pwa/pwa-provider"
import { OrganizationSchema, WebSiteSchema, AIServiceSchema } from "@/components/seo/structured-data"
import { StructuredData, generateOrganizationSchema } from "@/components/seo/enhanced-structured-data"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
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
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://dashboard.searchatlas.com" />
        <link rel="preconnect" href="https://signup.successnow.ai" />

        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://dashboard.searchatlas.com" />

        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="color-scheme" content="dark light" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SuccessNOW.ai" />
        <meta name="mobile-web-app-capable" content="yes" />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        <script
          nowprocket="true"
          nitro-exclude="true"
          type="text/javascript"
          id="sa-dynamic-optimization"
          data-uuid="bb3b5327-e118-40f5-b738-aaf9429af057"
          src="data:text/javascript;base64,dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoInNjcmlwdCIpO3NjcmlwdC5zZXRBdHRyaWJ1dGUoIm5vd3Byb2NrZXQiLCAiIik7c2NyaXB0LnNldEF0dHJpYnV0ZSgibml0cm8tZXhjbHVkZSIsICIiKTtzY3JpcHQuc3JjID0gImh0dHBzOi8vZGFzaGJvYXJkLnNlYXJjaGF0bGFzLmNvbS9zY3JpcHRzL2R5bmFtaWNfb3B0aW1pemF0aW9uLmpzIjtzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCJzY3JpcHQiKTtzY3JpcHQuc2V0QXR0cmlidXRlKCJub3dwcmlja2V0IiwgIiIpO3NjcmlwdC5zZXRBdHRyaWJ1dGUoIm5pdHJvLWV4Y2x1ZGUiLCAiIik7c2NyaXB0LnNyYyA9ICJodHRwczovL2Rhc2hib2FyZC5zZWFyY2hhdGxhcy5jb20vc2NyaXB0cy9keW5hbWljX29wdGltaXphdGlvbi5qcyI7c2NyaXB0LmRhdGFzdWlkID0gImJiM2I1MzI3LWUxMTgtNDBmNS1iNzM4LWFhZjk0MjlhZjA1NyI7c2NyaXB0LmlkID0gInNhLWR5bmFtaWMtb3B0aW1pemF0aW9uLWxvYWRlciI7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpOw=="
        ></script>

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
      <body className={`${inter.className} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <PWAProvider>
            {/* Enhanced Organization Schema with Audio Capabilities */}
            <StructuredData schema={generateOrganizationSchema()} />

            {/* Existing Schemas */}
            <OrganizationSchema />
            <WebSiteSchema />
            <AIServiceSchema />

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
                          hasOfferCatalog: {
                            "@type": "OfferCatalog",
                            name: "Voice-Enhanced Features",
                            itemListElement: [
                              {
                                "@type": "Service",
                                name: "Voice AI Agents",
                                description: "AI agents that handle voice calls and conversations",
                                serviceType: "Voice AI Technology",
                              },
                              {
                                "@type": "Service",
                                name: "Audio Content Generation",
                                description: "AI-generated voice snippets for enhanced accessibility",
                                serviceType: "Audio Content Creation",
                              },
                            ],
                          },
                        },
                      ],
                    },
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

            <ScrollToTop />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <FloatingChatRobot />
            <InstallPrompt />
          </PWAProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
