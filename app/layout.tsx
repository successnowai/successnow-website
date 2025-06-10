import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navigation/navbar"
import FloatingChatRobot from "@/components/chat/floating-chat-robot"

const inter = Inter({ subsets: ["latin"] })

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
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;800&family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#00BFFF" />
        {/* Vapi.ai SDK */}
        <script src="https://cdn.jsdelivr.net/npm/@vapi-ai/web@latest/dist/index.js"></script>
      </head>
      <body className={inter.className}>
        {/* GLOBAL: Black Navigation Bar - Always visible on ALL devices */}
        <Navbar />

        {/* Main content with proper spacing for navbar only */}
        <main className="global-content-spacing">{children}</main>

        {/* Floating chat robot */}
        <FloatingChatRobot />
      </body>
    </html>
  )
}
