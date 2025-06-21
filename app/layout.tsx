import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navigation/navbar"
import FloatingChatRobot from "@/components/chat/floating-chat-robot"
import StarryBackground from "@/components/ui/starry-background"

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
        {/* Vapi.ai SDK */}
        <script src="https://cdn.jsdelivr.net/npm/@vapi-ai/web@latest/dist/index.js" async></script>
      </head>
      <body className={`${inter.variable} ${montserrat.variable} ${openSans.variable} font-sans`}>
        <StarryBackground /> {/* Ensures the background is rendered */}
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
