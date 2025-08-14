"use client"

import type React from "react"

import { useEffect } from "react"

interface VoiceSearchOptimizationProps {
  pageType: "home" | "faq" | "pricing" | "demo" | "about"
  primaryKeywords: string[]
  voiceSnippets?: {
    question: string
    answer: string
    audioUrl?: string
  }[]
}

export function VoiceSearchOptimization({
  pageType,
  primaryKeywords,
  voiceSnippets = [],
}: VoiceSearchOptimizationProps) {
  useEffect(() => {
    // Add voice search optimization meta tags dynamically
    const addMetaTag = (name: string, content: string) => {
      const existingTag = document.querySelector(`meta[name="${name}"]`)
      if (existingTag) {
        existingTag.setAttribute("content", content)
      } else {
        const meta = document.createElement("meta")
        meta.name = name
        meta.content = content
        document.head.appendChild(meta)
      }
    }

    // Page-specific voice search optimization
    addMetaTag("page-voice-optimized", "true")
    addMetaTag("voice-keywords", primaryKeywords.join(", "))
    addMetaTag("voice-snippets-available", voiceSnippets.length.toString())

    // Add conversational keywords for voice search
    const conversationalKeywords = primaryKeywords.flatMap((keyword) => [
      `what is ${keyword}`,
      `how does ${keyword} work`,
      `best ${keyword}`,
      `${keyword} for business`,
      `${keyword} pricing`,
      `${keyword} demo`,
    ])

    addMetaTag("conversational-keywords", conversationalKeywords.join(", "))

    // Add FAQ-style structured data for voice snippets
    if (voiceSnippets.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: voiceSnippets.map((snippet) => ({
          "@type": "Question",
          name: snippet.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: snippet.answer,
            ...(snippet.audioUrl && {
              audio: {
                "@type": "AudioObject",
                contentUrl: snippet.audioUrl,
                description: `Voice snippet answering: ${snippet.question}`,
                encodingFormat: "audio/mpeg",
                name: snippet.question.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase(),
              },
            }),
          },
        })),
      }

      const script = document.createElement("script")
      script.type = "application/ld+json"
      script.textContent = JSON.stringify(faqSchema)
      document.head.appendChild(script)

      return () => {
        document.head.removeChild(script)
      }
    }
  }, [pageType, primaryKeywords, voiceSnippets])

  return null
}

// Speakable content marker for Google Assistant
export function SpeakableContent({
  children,
  priority = "normal",
}: {
  children: React.ReactNode
  priority?: "high" | "normal" | "low"
}) {
  return (
    <div
      className="speakable-content"
      data-speakable="true"
      data-priority={priority}
      itemScope
      itemType="https://schema.org/SpeakableSpecification"
    >
      {children}
    </div>
  )
}
