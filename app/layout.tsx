import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import AIChatBar from "@/components/chat/ai-chat-bar"
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
        {/* Vapi.ai SDK */}
        <script src="https://cdn.jsdelivr.net/npm/@vapi-ai/web@latest/dist/index.js"></script>
      </head>
      <body className={inter.className}>
        {/* Fixed AI Chat Bar at top */}
        <AIChatBar />

        {/* Fixed Navigation Bar below chat bar */}
        <Navbar />

        {/* Main content with proper spacing */}
        <main className="pt-[127px]">{children}</main>

        {/* Floating chat robot */}
        <FloatingChatRobot />
      </body>
    </html>
  )
}
