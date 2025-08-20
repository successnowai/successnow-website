import type { Metadata } from "next"
import VoiceAIAgentClientPage from "./VoiceAIAgentClientPage"

export const metadata: Metadata = {
  title: "Voice AI Sales Agent - SalesagentNOW.ai | 24/7 Lead Conversion",
  description:
    "SalesagentNOW.ai instantly answers every call and chat in seconds. 24/7 AI lead conversion with human-like voice, omni-channel coverage, and $0.07/min pilot pricing.",
  keywords:
    "voice AI agent, SalesagentNOW.ai, AI sales agent, lead conversion, voice AI, automated sales calls, AI phone agent, conversational AI",
  openGraph: {
    title: "Voice AI Sales Agent - 24/7 Lead Conversion",
    description:
      "AI agent that instantly answers calls and chats, qualifies leads, and books appointments automatically. Human-like voice at $0.07/min.",
    type: "website",
  },
}

export default function VoiceAIAgentPage() {
  return <VoiceAIAgentClientPage />
}
