"use client"

import type React from "react"
import { useEffect } from "react"

interface VoiceSearchOptimizationProps {
  pageType: "home" | "faq" | "pricing" | "demo" | "about" | "competitors"
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

    const conversationalKeywords = primaryKeywords.flatMap((keyword) => [
      `what is ${keyword}`,
      `how does ${keyword} work`,
      `best ${keyword}`,
      `${keyword} for business`,
      `${keyword} pricing`,
      `${keyword} demo`,
      `${keyword} vs competitors`,
      `${keyword} features`,
      `${keyword} benefits`,
      `how to use ${keyword}`,
      `${keyword} cost`,
      `${keyword} reviews`,
    ])

    addMetaTag("conversational-keywords", conversationalKeywords.join(", "))

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
                description: `AI-generated voice answer: ${snippet.question}`,
                encodingFormat: "audio/mpeg",
                name: `${snippet.question.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}-voice-answer`,
                duration: "PT60S",
                uploadDate: new Date().toISOString(),
                creator: {
                  "@type": "Organization",
                  name: "SuccessNOW.ai",
                  url: "https://successnow.ai",
                },
                genre: "Business Education",
                inLanguage: "en-US",
                accessibilityFeature: ["audioDescription", "voiceControl"],
              },
            }),
          },
        })),
        speakable: {
          "@type": "SpeakableSpecification",
          xpath: [
            "/html/body//h1[1]",
            "/html/body//h2[contains(@class, 'text-')]",
            "/html/body//p[contains(@class, 'text-xl')]",
          ],
        },
      }

      const script = document.createElement("script")
      script.type = "application/ld+json"
      script.id = `voice-faq-schema-${pageType}`
      script.textContent = JSON.stringify(faqSchema)
      document.head.appendChild(script)

      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "voice_content_loaded", {
          event_category: "Voice Search",
          event_label: pageType,
          value: voiceSnippets.length,
        })
      }

      return () => {
        const existingScript = document.getElementById(`voice-faq-schema-${pageType}`)
        if (existingScript) {
          document.head.removeChild(existingScript)
        }
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

export function VoiceSearchTracker({ pageType }: { pageType: string }) {
  useEffect(() => {
    // Track voice search readiness
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "voice_search_ready", {
        event_category: "Voice Search",
        event_label: pageType,
        custom_parameter_1: "audio_enhanced",
      })
    }

    // Listen for voice search interactions
    const handleVoiceInteraction = (event: Event) => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "voice_interaction", {
          event_category: "Voice Search",
          event_label: pageType,
          event_action: "voice_command_detected",
        })
      }
    }

    // Add voice interaction listeners
    window.addEventListener("speechstart", handleVoiceInteraction)
    window.addEventListener("speechend", handleVoiceInteraction)

    return () => {
      window.removeEventListener("speechstart", handleVoiceInteraction)
      window.removeEventListener("speechend", handleVoiceInteraction)
    }
  }, [pageType])

  return null
}
