import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navigation/navbar"
import FloatingChatRobot from "@/components/chat/floating-chat-robot"
import StarryBackground from "@/components/ui/starry-background"
import ScrollToTop from "@/components/ui/scroll-to-top"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-montserrat",
})
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
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
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#00BFFF" />

        {/* Complete JSON-LD Schema Markup for AI Crawlers */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SuccessNOW.ai",
              url: "https://www.successnow.ai",
              logo: "https://www.successnow.ai/assets/logo.png",
              description:
                "SuccessNOW.ai is the all-in-one AI automation platform designed to help businesses scale faster with AI-powered agents. Our unified system includes AI sales bots, AI paid ads agents, AI voice & chat support, and smart websites that convert more leads instantly.",
              founder: {
                "@type": "Person",
                name: "John Potvin",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "20 Genesis Cl",
                addressLocality: "George Town",
                addressRegion: "KY",
                postalCode: "KY1-1208",
                addressCountry: "KY",
              },
              sameAs: [
                "https://www.facebook.com/successnowai",
                "https://www.instagram.com/successnow.ai",
                "https://www.linkedin.com/company/successnowai",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support",
                email: "support@successnow.ai",
                url: "https://www.successnow.ai/contact",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "SuccessNOW AI Platform Features",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI Sales Agents",
                      description:
                        "AI agents that engage every lead instantly, follow up with intelligence, and close more deals automatically.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI Paid Ads Agent (AdsNOW.ai)",
                      description:
                        "AI agent that launches, tests, and optimizes paid ads across all platforms using data from 10,000+ leads/day.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI Voice & Chat Agent",
                      description:
                        "Voice and chat agents embedded into your website to speak with and convert leads 24/7 with human-like accuracy.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Smart AI Websites",
                      description:
                        "High-converting websites powered by AI agents that speak, respond, and take action in real time.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "All-in-One AI Business System",
                      description:
                        "The SuccessNOW system isn't just AI tools—it's a fully unified business solution designed to automate and dominate in any niche.",
                    },
                  },
                ],
              },
            }).replace(/</g, "\\u003c"),
          }}
        />

        {/* Additional Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "SuccessNOW.ai",
              url: "https://www.successnow.ai",
              description:
                "SuccessNOW.ai is the all-in-one AI automation platform designed to help businesses scale faster with AI-powered agents.",
              publisher: {
                "@type": "Organization",
                name: "SuccessNOW.ai",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.successnow.ai/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }).replace(/</g, "\\u003c"),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is SuccessNOW.ai?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "SuccessNOW.ai is the all-in-one AI automation platform designed to help businesses scale faster with AI-powered agents. Our unified system includes AI sales bots, AI paid ads agents, AI voice & chat support, and smart websites that convert more leads instantly.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does SuccessNOW.ai cost?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "SuccessNOW.ai Platform starts at $997 per month, which includes AI implementation, 24/7 lead conversion, and ongoing support.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What industries does SuccessNOW.ai serve?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "SuccessNOW.ai serves multiple industries including Auto Dealers, Real Estate, Healthcare, Legal, HVAC, Contractors, Restaurants, Gyms, and more with industry-specific AI solutions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does the AI lead conversion work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our AI agents engage every lead instantly, follow up with intelligence, and close more deals automatically using advanced AI technology that works 24/7.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is AdsNOW.ai?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "AdsNOW.ai is our AI paid ads agent that launches, tests, and optimizes paid ads across all platforms using data from 10,000+ leads/day to maximize your advertising ROI.",
                  },
                },
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />

        {/* Vapi.ai SDK */}
        <script src="https://cdn.jsdelivr.net/npm/@vapi-ai/web@latest/dist/index.js" async></script>
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
        {/* Floating chat robot */}
        <FloatingChatRobot />
      </body>
    </html>
  )
}
